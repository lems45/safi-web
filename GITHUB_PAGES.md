# Publicación en GitHub Pages

Este proyecto está preparado para publicarse en:

https://lems45.github.io/safi-web/

La configuración importante está en `astro.config.mjs`:

- `site: "https://lems45.github.io"`
- `base: "/safi-web"`

Las rutas internas y los recursos de `public/` se adaptan automáticamente mediante `src/utils/base.ts`.

## Flujo normal

```powershell
npm install
npm run build
git add .
git commit -m "Actualiza sitio SAFI"
git push origin main
```

El workflow `.github/workflows/astro.yml` compila y publica automáticamente el contenido de `dist/`.
