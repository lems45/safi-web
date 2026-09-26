# Sitio web SAFI

Proyecto Astro completamente en español.

## Instalación

```bash
npm install
npm run dev
```

Después abre la dirección local indicada por Astro, normalmente:

http://localhost:4321

## Compilación final

```bash
npm run build
npm run preview
```

## Datos que debes sustituir

En:

`src/data/site.ts`

cambia:

- `TU_CORREO_SAFI@ejemplo.com`
- enlace del formulario de ingreso, cuando tengas el definitivo.

## Patrocinadores

Edita:

`src/data/sponsors.ts`

y agrega los patrocinadores oficiales actuales.

Los logos deben ir en:

`public/images/sponsors/`

## Imágenes faltantes

El componente `SafeImage.astro` sustituye automáticamente cualquier fotografía
que no exista por:

`public/images/coming-soon.jpg`

Por ello puedes dejar todas las rutas listas e ir agregando las fotografías
reales gradualmente.

## Estructura principal

- Inicio
- Nosotros
- Equipos
  - PotroRockets
  - CanSat
- Proyectos
  - AKBAL-II
  - Cohete híbrido
  - AGAS
  - CanSat
- Competencias
  - CanSat CUCEI 2021
  - ENMICE 2022
  - CanSat Competition 2023
  - LASC 2023
  - ENMICE 2024
  - ENMICE 2025
  - LASC 2026
- Patrocinadores
- Únete

## Logotipos oficiales

Coloca exactamente estos archivos:

- `public/images/logos/safi.png`
- `public/images/logos/potrorockets.png`
- `public/images/logos/cansat.png`

No necesitas modificar ningún archivo de código.

El sitio los utiliza automáticamente en Navbar, Footer, Nosotros, Equipos,
páginas de equipo, proyectos y competencias según corresponda.

Si alguno de los tres archivos no existe todavía, el componente de logo se
oculta automáticamente para evitar iconos rotos.
