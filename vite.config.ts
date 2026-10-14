import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import { SITE_URL, sectionRoutes } from './src/data/routes.ts'

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/**
 * After the build, writes dist/<path>/index.html for every section route (same
 * app, own title/description/canonical) and a sitemap listing all of them.
 */
function sectionPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'mehring-section-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const base = readFileSync(join(outDir, 'index.html'), 'utf8')

      for (const r of sectionRoutes) {
        const title = escapeAttr(r.title)
        const description = escapeAttr(r.description)
        const html = base
          .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
          .replace(
            /(<meta\s+name="description"\s+content=")[^"]*(")/,
            `$1${description}$2`,
          )
          .replace(
            /(<link rel="canonical" href=")[^"]*(")/,
            `$1${SITE_URL}${r.path}$2`,
          )
          .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(
            /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
            `$1${description}$2`,
          )
          .replace(
            /(<meta property="og:url" content=")[^"]*(")/,
            `$1${SITE_URL}${r.path}$2`,
          )
        const dir = join(outDir, r.path)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), html)
      }

      const urls = ['/', ...sectionRoutes.map((r) => r.path)]
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u === '/' ? '/' : u}</loc>
    <changefreq>monthly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
      writeFileSync(join(outDir, 'sitemap.xml'), sitemap)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sectionPages()],
})
