# Daewoo Perú — Landing

Landing de marca construida con [Astro](https://astro.build). Basada en el Figma
`LANDING DAEWOO` (`Xh5iIF8q7x9uq945eSYRLH`).

## Desarrollo

```bash
npm install
cp .env.example .env   # completa PUBLIC_FORMSPREE_ID
npm run dev             # http://localhost:4321
npm run build && npm run preview
```

## Estructura

| Ruta | Contenido |
|------|-----------|
| `src/styles/tokens.css` | Design tokens extraídos del Figma (color, tipografía, layout) |
| `src/data/categories.ts` | Copys y assets de las 7 categorías del carrusel |
| `src/data/site.ts` | Navegación, redes, textos legales |
| `src/components/` | Una pieza por sección del Figma |
| `src/assets/` | Imágenes optimizadas por Astro en build |
| `public/video/hero.mp4` / `hero.webm` | Video del hero comprimido (~4 MB c/u), 720p |
| `media-src/hero-src.mp4` | Original 88 MB — **no se commitea** (gitignored) |

Recomprimir el video: `node scripts/encode-video.mjs` (usa el ffmpeg de `devDependencies`).

## Pendientes antes de producción

- [ ] **Tipografía**: se usa `Figtree` (Google Fonts) como sustituto de `Carmen Sans`
      (comercial). Si se licencia Carmen Sans, colocar los `.woff2` y ajustar `--font-sans`.
- [x] ~~Video del hero comprimido~~ → `hero.mp4` + `hero.webm` (720p). Autoplay + loop + muted, con botón de sonido.
- [x] ~~Formspree~~ → form "Contacto Daewoo", `PUBLIC_FORMSPREE_ID=xyeydknw` en `.env` (no se commitea; setear también en el hosting).
- [ ] **Formspree → notificar a servicios@daewoo.space**: en Formspree, form Settings → añadir esa dirección como recipient; Formspree envía un correo de verificación que hay que confirmar desde esa casilla. Revisar spam. El plan free solo notifica al correo de la cuenta hasta verificar el adicional.
- [ ] **Formulario**: confirmar si va la versión corta (actual) o la ampliada de distribuidores.
- [ ] **Colores de acento por categoría** (`--acc-*` en `tokens.css`): son una
      aproximación; confirmar contra el Figma ("linea de color").
- [ ] **Portada**: la imagen `portada.png` trae el texto incrustado. Idealmente
      re-exportar el fondo y rearmar el titular como texto real.
- [x] ~~Instagram / Facebook~~ → `daewoo.pe`. Falta **LinkedIn** (placeholder en `src/data/site.ts`) y la **página de Términos y condiciones**.
- [ ] **Miniaturas** del reverso de cada card (5 por categoría) y logos de línea
      de producto: no se incluyeron en v1.
- [ ] Analítica (GA4), imagen OG, dominio final.
