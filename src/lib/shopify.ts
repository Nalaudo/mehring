// Shopify Buy Button SDK loader — no backend, no database, no auth: Shopify
// hosts the store, the cart and the checkout. This file only wires the
// widget into the page.
//
// Setup required before this does anything (see .env.example):
//   1. Create a Shopify store (shopify.com) and add your products.
//   2. In the Shopify admin, go to Settings -> Apps and sales channels ->
//      Develop apps -> create an app -> Configure Storefront API scopes
//      (enable at least "unauthenticated_read_product_listings") -> install
//      the app -> copy the "Storefront API access token".
//   3. Grab your *.myshopify.com domain and the numeric/GID id of the
//      collection you want to show (Products -> Collections -> the id is in
//      the URL, or use the GraphQL Storefront API to look it up).
//   4. Put the three values in a local .env file (never commit it).

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuySdk
  }
}

interface ShopifyBuySdk {
  buildClient(config: { domain: string; storefrontAccessToken: string }): unknown
  UI: {
    init(client: unknown): ShopifyBuyUI
  }
}

interface ShopifyBuyUI {
  createComponent(
    type: 'collection' | 'product' | 'cart',
    options: Record<string, unknown>,
  ): Promise<unknown>
}

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buybutton.js'

let sdkPromise: Promise<ShopifyBuySdk> | null = null

/** Injects the Buy Button script tag once and resolves with the global SDK. */
export function loadShopifySdk(): Promise<ShopifyBuySdk> {
  if (window.ShopifyBuy) return Promise.resolve(window.ShopifyBuy)

  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = SDK_URL
      script.async = true
      script.onload = () => {
        if (window.ShopifyBuy) resolve(window.ShopifyBuy)
        else reject(new Error('Shopify Buy Button SDK cargó pero no expuso window.ShopifyBuy'))
      }
      script.onerror = () => reject(new Error('No se pudo cargar el SDK de Shopify Buy Button'))
      document.head.appendChild(script)
    })
  }

  return sdkPromise
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

/** Mounts a Buy Button "collection" component into `node`. Call once per node. */
export async function mountShopifyCollection(node: HTMLElement) {
  const ShopifyBuy = await loadShopifySdk()
  const client = ShopifyBuy.buildClient({
    domain: shopifyConfig.domain!,
    storefrontAccessToken: shopifyConfig.storefrontAccessToken!,
  })
  const ui = ShopifyBuy.UI.init(client)
  return ui.createComponent('collection', {
    id: shopifyConfig.collectionId!,
    node,
    options: {
      product: {
        styles: {
          product: {
            '@media (min-width: 601px)': {
              'max-width': 'calc(33.33% - 20px)',
              'margin-left': '20px',
              'margin-bottom': '50px',
            },
          },
          title: {
            'font-family': 'Inter, sans-serif',
            'font-weight': '600',
            color: '#431708',
          },
          button: {
            'font-family': 'Inter, sans-serif',
            'background-color': '#431708',
            ':hover': { 'background-color': '#000000' },
            ':focus': { 'background-color': '#000000' },
            'border-radius': '999px',
          },
          price: { color: '#5f1b15' },
          compareAt: { color: '#61532e' },
        },
        contents: { options: false },
      },
      productSet: {
        styles: {
          products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } },
        },
      },
      modalProduct: {
        contents: { buttonWithQuantity: true },
        styles: {
          button: {
            'font-family': 'Inter, sans-serif',
            'background-color': '#431708',
            ':hover': { 'background-color': '#000000' },
            ':focus': { 'background-color': '#000000' },
            'border-radius': '999px',
          },
        },
      },
      cart: {
        styles: {
          button: {
            'font-family': 'Inter, sans-serif',
            'background-color': '#431708',
            ':hover': { 'background-color': '#000000' },
            ':focus': { 'background-color': '#000000' },
            'border-radius': '999px',
          },
        },
      },
      toggle: {
        styles: {
          toggle: { 'background-color': '#431708' },
        },
      },
    },
  })
}
