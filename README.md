# Daewoo Perú — Landing

Landing de marca construida con [Astro](https://astro.build). Basada en el Figma
`LANDING DAEWOO` (`Xh5iIF8q7x9uq945eSYRLH`).

**En producción:** https://antonydaewoospace.github.io/daewoo-space-landing/

Lighthouse (live): **Perf 97 móvil / 100 desktop · A11y 100 · Best Practices 100 · SEO 100** · LCP ~1.5 s · CLS 0.

## Desarrollo

```bash
npm install
cp .env.example .env   # completa PUBLIC_FORMSPREE_ID
npm run dev             # http://localhost:4321
npm run build && npm run preview
```

## Deploy

Publicado en **GitHub Pages** (repo `AntonyDaewooSpace/daewoo-space-landing`),
servido desde la rama **`gh-pages`** con la subruta `/daewoo-space-landing/`
(configurada en `astro.config.mjs` como `base`).

```bash
npm run deploy   # build + push de dist/ a gh-pages (Pages refresca en ~1 min)
```

> El código fuente vive en `master`; `gh-pages` solo contiene el build.
> Hay un workflow de GitHub Actions listo en `.github/_pending/deploy.yml`:
> cuando el token de `gh` tenga el scope `workflow` (`gh auth refresh -s workflow`),
> se mueve a `.github/workflows/`, se cambia el origen de Pages a "GitHub Actions"
> y el `npm run deploy` deja de ser necesario.

## Estructura

| Ruta | Contenido |
|------|-----------|
| `src/styles/tokens.css` | Design tokens extraídos del Figma (color, tipografía, layout) |
| `src/data/categories.ts` | Copys y assets de las 7 categorías del carrusel |
| `src/data/site.ts` | Navegación, redes, textos legales |
| `src/components/` | Una pieza por sección del Figma |
| `src/assets/` | Imágenes optimizadas por Astro en build |
| `public/video/hero.mp4` / `hero.webm` | Video del hero comprimido 1080p (13 / 9.5 MB) |
| `media-src/hero-src.mp4` | Original 88 MB — **no se commitea** (gitignored) |

Recomprimir el video: `node scripts/encode-video.mjs` (usa el ffmpeg de `devDependencies`).

## Pendientes antes de producción

- [ ] **Tipografía**: `Figtree` self-hosted (`src/assets/fonts/figtree-latin.woff2`, variable
      300–900, subset latin) como sustituto de `Carmen Sans` (comercial). Si se licencia
      Carmen Sans, reemplazar el woff2 y el `@font-face` en `global.css`.
- [x] ~~Video del hero comprimido~~ → `hero.mp4` (13 MB) + `hero.webm` (9.5 MB), 1080p. Autoplay + loop + muted, sin controles, carga diferida.
- [x] ~~Formspree~~ → form "Contacto Daewoo", `PUBLIC_FORMSPREE_ID=xyeydknw` en `.env` (no se commitea; setear también en el hosting).
- [ ] **Formspree → notificar a servicios@daewoo.space**: en Formspree, form Settings → añadir esa dirección como recipient; Formspree envía un correo de verificación que hay que confirmar desde esa casilla. Revisar spam. El plan free solo notifica al correo de la cuenta hasta verificar el adicional.
- [ ] **Formulario**: confirmar si va la versión corta (actual) o la ampliada de distribuidores.
- [ ] **Colores de acento por categoría** (`--acc-*` en `tokens.css`): son una
      aproximación; confirmar contra el Figma ("linea de color").
- [ ] **Portada**: `portada.png` trae el titular incrustado en el bitmap (no era
      capa de texto en Figma). El watermark "daewoo.space" ya se borró a mano; si se
      re-exporta hay que volver a borrarlo. Ideal: rearmar el titular como texto real.
- [x] ~~Instagram / Facebook~~ → `daewoo.pe`. Falta **LinkedIn** (placeholder en `src/data/site.ts`) y la **página de Términos y condiciones**.
- [ ] **Miniaturas** del reverso de cada card (5 por categoría) y logos de línea
      de producto: no se incluyeron en v1.
- [ ] Analítica (GA4), imagen OG, dominio final.
