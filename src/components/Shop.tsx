import { useEffect, useMemo, useRef, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import Reveal from './Reveal'
import {
  fetchCollectionIds,
  isShopifyConfigured,
  mountShopifyCollection,
  shopifyConfig,
  toHandle,
} from '../lib/shopify'
import { categories } from '../data/products'
import { handleAnchorClick } from '../lib/smoothScroll'

export default function Shop() {
  const configured = isShopifyConfigured()
  const nodeRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [collectionIds, setCollectionIds] = useState<Record<string, string>>({})
  const [selectedId, setSelectedId] = useState('')
  const [ready, setReady] = useState(false)

  // One tab per catalog category that has a matching Shopify collection
  // (handle = slugified category). The main collection is only a fallback
  // for when no category collections exist yet.
  const tabs = useMemo(() => {
    const byCategory = categories
      .filter((c) => collectionIds[toHandle(c)])
      .map((c) => ({ label: c, id: collectionIds[toHandle(c)] }))
    return byCategory.length
      ? byCategory
      : [{ label: 'Todos', id: shopifyConfig.collectionId ?? '' }]
  }, [collectionIds])
  const activeId = tabs.some((t) => t.id === selectedId) ? selectedId : tabs[0].id

  useEffect(() => {
    if (!configured) return
    fetchCollectionIds()
      .then(setCollectionIds)
      .catch(() => {})
      .finally(() => setReady(true))
  }, [configured])

  useEffect(() => {
    if (!configured || !ready || !nodeRef.current) return
    setError(null)
    mountShopifyCollection(nodeRef.current, activeId).catch((err: Error) =>
      setError(err.message),
    )
  }, [configured, ready, activeId])

  return (
    <section id="shop" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Shop</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            Comprá tu silla o mueble MEHRING® online
          </h2>
          <p className="mt-5 text-bark/70 sm:text-lg">
            Pago 100% seguro a través de Shopify. Elegís el modelo, pagás
            online y coordinamos el envío.
          </p>
        </Reveal>

        <div className="mt-12">
          {configured ? (
            <>
              {tabs.length > 1 && (
                <div className="mb-10 flex flex-wrap gap-2.5">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedId(t.id)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        activeId === t.id
                          ? 'border-bark bg-bark text-cream'
                          : 'border-bark/20 text-bark/70 hover:border-bark/50'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
              {ready && <div key={activeId} ref={nodeRef} />}
              {error && (
                <p className="rounded-xl bg-clay/10 p-5 text-sm text-clay">
                  No se pudo cargar la tienda: {error}
                </p>
              )}
            </>
          ) : (
            <Reveal
              delay={0.1}
              className="flex flex-col items-center gap-4 rounded-2xl bg-cream p-12 text-center"
            >
              <ShoppingBag size={32} className="text-clay" strokeWidth={1.5} />
              <p className="font-display text-2xl text-bark">
                La tienda se está preparando
              </p>
              <p className="max-w-md text-sm text-bark/60">
                Mientras tanto, escribinos y coordinamos tu compra a medida.
              </p>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-bark px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink"
              >
                Contactar a la fábrica
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
