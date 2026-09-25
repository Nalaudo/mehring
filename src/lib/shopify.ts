// Shopify Buy Button SDK loader — no backend, no database, no auth: Shopify
// hosts the store, the cart and the checkout. This file only wires the
// widget into the page.
//
// Setup (see .env.example): install the "Buy Button" sales channel in the
// Shopify admin, create a Buy Button for a collection and use "Generate
// code". The snippet contains the three values needed in .env: domain,
// storefrontAccessToken and the collection id.

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuySdk
  }
}

interface ShopifyBuySdk {
  buildClient(config: { domain: string; storefrontAccessToken: string }): unknown
  UI?: {
    onReady(client: unknown): Promise<ShopifyBuyUI>
  }
}

interface ShopifyBuyUI {
  createComponent(
    type: 'collection' | 'product' | 'cart',
    options: Record<string, unknown>,
  ): Promise<unknown>
}

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

let sdkPromise: Promise<ShopifyBuySdk> | null = null

/** Injects the Buy Button script tag once and resolves with the global SDK. */
export function loadShopifySdk(): Promise<ShopifyBuySdk> {
  if (window.ShopifyBuy?.UI) return Promise.resolve(window.ShopifyBuy)

  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = SDK_URL
      script.async = true
      script.onload = () => {
        if (window.ShopifyBuy?.UI) resolve(window.ShopifyBuy)
        else reject(new Error('Shopify Buy Button SDK cargó pero no expuso window.ShopifyBuy.UI'))
      }
      script.onerror = () => reject(new Error('No se pudo cargar el SDK de Shopify Buy Button'))
      document.head.appendChild(script)
    })
  }

  return sdkPromise
}

let uiPromise: Promise<ShopifyBuyUI> | null = null

/**
 * One UI instance for the whole page: every Buy Button component created from
 * it shares the same cart, so products added from the catalogue detail and
 * from the Shop section end up together.
 */
function getShopifyUI(): Promise<ShopifyBuyUI> {
  if (!uiPromise) {
    uiPromise = loadShopifySdk().then((ShopifyBuy) =>
      ShopifyBuy.UI!.onReady(
        ShopifyBuy.buildClient({
          domain: shopifyConfig.domain!,
          storefrontAccessToken: shopifyConfig.storefrontAccessToken!,
        }),
      ),
    )
    uiPromise.catch(() => {
      uiPromise = null
    })
  }
  return uiPromise
}

export const shopifyConfig = {
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
  collectionId: import.meta.env.VITE_SHOPIFY_COLLECTION_ID,
}

export function isShopifyConfigured(): boolean {
  return Boolean(
    shopifyConfig.domain &&
      shopifyConfig.storefrontAccessToken &&
      shopifyConfig.collectionId,
  )
}

const BARK = '#431708'
const BARK_HOVER = '#72270e'

const primaryButton = {
  'background-color': BARK,
  ':hover': { 'background-color': BARK_HOVER },
  ':focus': { 'background-color': BARK_HOVER },
  'border-radius': '40px',
  'padding-left': '34px',
  'padding-right': '34px',
}

const cartOptions = {
  styles: {
    button: {
      'background-color': BARK,
      ':hover': { 'background-color': BARK_HOVER },
      ':focus': { 'background-color': BARK_HOVER },
      'border-radius': '40px',
    },
  },
  text: {
    title: 'Carrito',
    total: 'Subtotal',
    empty: 'Tu carrito está vacío.',
    notice: 'Envío y códigos de descuentos son añadidos al final.',
    button: 'Proceder al pago',
  },
}

const toggleOptions = {
  styles: {
    toggle: {
      'background-color': BARK,
      ':hover': { 'background-color': BARK_HOVER },
      ':focus': { 'background-color': BARK_HOVER },
    },
  },
}

/** Slug as Shopify builds handles: lowercase, no accents, dashes. */
export function toHandle(label: string) {
  return label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function storefrontQuery<T>(query: string): Promise<T | undefined> {
  const res = await fetch(`https://${shopifyConfig.domain}/api/2025-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': shopifyConfig.storefrontAccessToken!,
    },
    body: JSON.stringify({ query }),
  })
  if (!res.ok) throw new Error(`Storefront API respondió ${res.status}`)
  return ((await res.json()) as { data?: T }).data
}

let productIdsPromise: Promise<Record<string, string>> | null = null

/**
 * Map of handle -> numeric product id for every product published to the Buy
 * Button channel. Keyed by both the product handle and its slugified title, so
 * a catalogue product matches when either equals `toHandle(product.name)`.
 * Fetched once per page load.
 */
export function fetchProductIds(): Promise<Record<string, string>> {
  if (!productIdsPromise) {
    productIdsPromise = storefrontQuery<{
      products: { edges: { node: { id: string; handle: string; title: string } }[] }
    }>('{ products(first: 250) { edges { node { id handle title } } } }').then((data) => {
      const ids: Record<string, string> = {}
      for (const { node } of data?.products.edges ?? []) {
        const id = node.id.split('/').pop()!
        ids[toHandle(node.title)] ??= id
        ids[node.handle] = id
      }
      return ids
    })
    productIdsPromise.catch(() => {
      productIdsPromise = null
    })
  }
  return productIdsPromise
}

/**
 * Looks up the store's collections through the Storefront API and returns a
 * map of collection handle -> numeric collection id. Category tabs in the Shop
 * are built from the collections whose handle matches a catalog category.
 */
export async function fetchCollectionIds(): Promise<Record<string, string>> {
  const data = await storefrontQuery<{
    collections: { edges: { node: { id: string; handle: string } }[] }
  }>('{ collections(first: 50) { edges { node { id handle } } } }')
  const ids: Record<string, string> = {}
  for (const { node } of data?.collections.edges ?? []) {
    ids[node.handle] = node.id.split('/').pop()!
  }
  return ids
}

/** Mounts a Buy Button "collection" component into `node`. Call once per node. */
export async function mountShopifyCollection(
  node: HTMLElement,
  collectionId: string = shopifyConfig.collectionId!,
) {
  if (node.dataset.shopifyMounted) return
  node.dataset.shopifyMounted = 'true'
  const ui = await getShopifyUI()
  return ui.createComponent('collection', {
    id: collectionId,
    node,
    moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
    options: {
      product: {
        styles: {
          product: {
            '@media (min-width: 601px)': {
              'max-width': 'calc(25% - 20px)',
              'margin-left': '20px',
              'margin-bottom': '50px',
              width: 'calc(25% - 20px)',
            },
            img: {
              height: 'calc(100% - 15px)',
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
            },
            imgWrapper: {
              'padding-top': 'calc(75% + 15px)',
              position: 'relative',
              height: '0',
            },
          },
          title: { 'font-size': '20px', color: BARK },
          button: primaryButton,
          price: { 'font-size': '16px', color: BARK },
          compareAt: { 'font-size': '13.6px', color: BARK },
          unitPrice: { 'font-size': '13.6px', color: BARK },
        },
        contents: { button: false, buttonWithQuantity: true },
        text: { button: 'Añadir al carrito' },
      },
      productSet: {
        styles: {
          products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } },
        },
        text: { nextPageButton: 'Siguiente página' },
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
          button: false,
          buttonWithQuantity: true,
        },
        styles: {
          product: {
            '@media (min-width: 601px)': {
              'max-width': '100%',
              'margin-left': '0px',
              'margin-bottom': '0px',
            },
          },
          button: primaryButton,
          title: { 'font-weight': 'bold', 'font-size': '26px', color: BARK },
          price: { 'font-weight': 'normal', 'font-size': '18px', color: BARK },
          compareAt: { 'font-weight': 'normal', 'font-size': '15.3px', color: BARK },
          unitPrice: { 'font-weight': 'normal', 'font-size': '15.3px', color: BARK },
        },
        text: { button: 'Añadir al carrito' },
      },
      option: {},
      cart: cartOptions,
      toggle: toggleOptions,
    },
  })
}

/**
 * Mounts a compact Buy Button "product" component (price, variant options,
 * quantity and add-to-cart; no image or title) into `node`. `onAddToCart` runs
 * when a variant is added, before the cart opens.
 */
export async function mountShopifyProduct(
  node: HTMLElement,
  productId: string,
  onAddToCart?: () => void,
) {
  if (node.dataset.shopifyMounted) return
  node.dataset.shopifyMounted = 'true'
  const ui = await getShopifyUI()
  return ui.createComponent('product', {
    id: productId,
    node,
    moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
    options: {
      product: {
        layout: 'horizontal',
        contents: {
          img: false,
          imgWithCarousel: false,
          title: false,
          description: false,
          button: false,
          buttonWithQuantity: true,
        },
        styles: {
          product: {
            'text-align': 'left',
            '@media (min-width: 601px)': {
              'max-width': '100%',
              'margin-left': '0',
              'margin-bottom': '0',
            },
          },
          button: primaryButton,
          price: { 'font-size': '22px', color: BARK },
          compareAt: { 'font-size': '15px', color: BARK },
          unitPrice: { 'font-size': '15px', color: BARK },
        },
        text: { button: 'Añadir al carrito' },
        events: { addVariantToCart: () => onAddToCart?.() },
      },
      cart: cartOptions,
      toggle: toggleOptions,
    },
  })
}
