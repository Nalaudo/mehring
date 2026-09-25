import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Mail, MessageCircle, X } from 'lucide-react'
import type { Product } from '../data/products'
import {
  fetchProductIds,
  isShopifyConfigured,
  mountShopifyProduct,
  toHandle,
} from '../lib/shopify'

interface ProductoDetalleProps {
  products: Product[]
  index: number | null
  onChange: (index: number | null) => void
}

const WHATSAPP = '5493496530698'

/**
 * Buy Button for the catalogue product, when a Shopify product with the same
 * handle (or title) is published to the Buy Button channel. Renders nothing
 * otherwise, leaving only the consultation links.
 */
function CompraShopify({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [productId, setProductId] = useState<string | null>(null)
  const addRef = useRef(onAddToCart)
  useEffect(() => {
    addRef.current = onAddToCart
  })

  useEffect(() => {
    let cancelled = false
    fetchProductIds()
      .then((ids) => {
        if (!cancelled) setProductId(ids[toHandle(product.name)] ?? null)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [product.name])

  useEffect(() => {
    if (!productId || !nodeRef.current) return
    mountShopifyProduct(nodeRef.current, productId, () => addRef.current()).catch(() =>
      setProductId(null),
    )
  }, [productId])

  if (!productId) return null
  return (
    <div className="mt-8 border-t border-bark/10 pt-6">
      <p className="text-xs uppercase tracking-wider text-bark/50">Comprá online</p>
      <div key={productId} ref={nodeRef} className="mt-3" />
    </div>
  )
}

/** Detail view for a catalogue product, rendered as a native modal <dialog>. */
export default function ProductoDetalle({ products, index, onChange }: ProductoDetalleProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const product = index === null ? null : products[index]
  const open = product !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
    if (!open) document.body.style.overflow = ''
  }, [open])

  useEffect(() => () => {
    document.body.style.overflow = ''
  }, [])

  const count = products.length
  const go = (step: number) => {
    if (index === null || count < 2) return
    onChange((index + step + count) % count)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const related = product
    ? products
        .map((p, i) => ({ p, i }))
        .filter(({ p }) => p.category === product.category && p !== product)
        .slice(0, 4)
    : []

  const consulta = product ? `Hola, quisiera consultar por el modelo ${product.name} (${product.category}).` : ''

  return (
    <dialog
      ref={dialogRef}
      onClose={() => onChange(null)}
      onClick={(e) => {
        // Clicks on the ::backdrop land on the <dialog> element itself.
        if (e.target === e.currentTarget) onChange(null)
      }}
      aria-labelledby="producto-detalle-titulo"
      className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl bg-cream p-0 text-bark shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      {product && (
        <>
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Cerrar"
            className="absolute right-3 top-3 z-10 rounded-full bg-cream/90 p-2 text-bark/60 transition-colors hover:bg-cream hover:text-bark"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
          <div
            key={product.name}
            className="grid max-h-[92dvh] overflow-y-auto md:grid-cols-[1.15fr_1fr]"
            style={{ animation: 'fade-up 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <div className="relative flex items-center justify-center bg-cream p-6 md:p-10">
              <img
                src={product.image}
                alt={product.name}
                decoding="async"
                className="aspect-square max-h-[60dvh] w-full object-contain"
              />
              {product.isNew && (
                <span className="absolute left-5 top-5 rounded-full bg-clay px-3 py-1 text-xs font-medium tracking-wide text-cream">
                  Nuevo
                </span>
              )}
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Producto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-bark/15 bg-cream/90 p-2 text-bark/70 transition-colors hover:border-bark/40 hover:text-bark"
                  >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Producto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-bark/15 bg-cream/90 p-2 text-bark/70 transition-colors hover:border-bark/40 hover:text-bark"
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col border-t border-bark/10 bg-sand/40 p-6 sm:p-8 md:border-l md:border-t-0 md:p-10">
              <p className="eyebrow pr-10 text-clay">{product.category}</p>

              <h3
                id="producto-detalle-titulo"
                className="mt-3 font-display text-4xl font-light leading-tight sm:text-5xl"
              >
                {product.name}
              </h3>
              <p className="mt-5 leading-relaxed text-bark/75 sm:text-lg">{product.blurb}</p>

              <p className="mt-6 text-sm leading-relaxed text-bark/60">
                Disponible en distintos tonos de lustre y lacas poliuretánicas, con
                una amplia carta de telas para tapicería.
              </p>

              {isShopifyConfigured() && (
                <CompraShopify key={product.name} product={product} onAddToCart={() => onChange(null)} />
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(consulta)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-bark px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-clay"
                >
                  <MessageCircle size={18} strokeWidth={1.5} />
                  Consultar por WhatsApp
                </a>
                <a
                  href={`mailto:info@mehring.com.ar?subject=${encodeURIComponent(`Consulta: ${product.name}`)}&body=${encodeURIComponent(consulta)}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-bark/25 px-5 py-3 text-sm font-medium text-bark transition-colors hover:border-bark/60"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  Consultar por mail
                </a>
              </div>

              {related.length > 0 && (
                <div className="mt-10 border-t border-bark/10 pt-6">
                  <p className="text-xs uppercase tracking-wider text-bark/50">
                    También en {product.category}
                  </p>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {related.map(({ p, i }) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => onChange(i)}
                        className="group text-left"
                      >
                        <div className="aspect-square overflow-hidden rounded-lg bg-cream">
                          <img
                            src={p.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <span className="mt-1.5 block truncate text-xs text-bark/70 group-hover:text-bark">
                          {p.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
