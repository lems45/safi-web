# Mejoras aplicadas al sitio SAFI

Compila sin errores (21 páginas) y no hay enlaces internos rotos con la ruta base `/safi-web/`.

## Qué se cambió

**Compartir en redes (SEO)**
- Se creó `public/images/og-safi.jpg` (1200×630). El sitio la pedía pero no existía.
- Cada página ahora tiene URL canónica, `og:url`, `og:image` absoluta, `twitter:card` e idioma `es_MX`.
  Sin esto, WhatsApp, Instagram y LinkedIn no muestran vista previa correcta.

**Accesibilidad**
- 86 textos de 6–10 px subidos a 11 px (había muchos de 7 y 8 px). Revisa visualmente chips, botones y etiquetas.
- Enlace "Saltar al contenido", indicador de foco visible y respeto a "reducir movimiento" (también en el carrusel).
- Menú móvil: estado `aria-expanded`, cierre con Escape o al elegir un enlace, `aria-current` en la página activa.
- El contenido ya no queda invisible si el JavaScript falla (las animaciones `.reveal` solo se ocultan con JS activo).

**Imágenes y peso**
- `teams-hero.jpg` y `sponsors-hero.jpg` creados a partir de los PNG (el código pedía `.jpg`, por eso se veía "coming soon").
- Logos reducidos a 640 px máx. (el de PotroRockets pesaba 763 KB y pasó a 167 KB; el de SAFI, de 350 a 125 KB).
- 19 PNG sin uso (36 MB) movidos a `originales/`. `public/images` pasó de 43.9 a ~6.7 MB.

**Limpieza**
- Eliminadas las carpetas duplicadas obsoletas de la raíz (`components/`, `data/`, `layouts/`, `pages/`, `styles/`).
  Eran versiones antiguas sin soporte de ruta base; Astro solo usa `src/`.
- Eliminado `.github/deploy.yml` (no estaba en `workflows/`, así que nunca se ejecutaba).
- El workflow ahora usa `npm ci` (instalación reproducible con el lockfile).
- Patrocinadores: se quitó el texto de desarrollo visible al público ("Agrega los patrocinadores en sponsors.ts").

## Rediseño visual (segunda pasada)

- **Inicio:** el hero ya no usa la foto vertical como fondo ampliado y oscuro. Ahora es un marco nítido con la foto del cohete, brillo de color de fondo y la tarjeta de misión superpuesta.
- **Franja de cifras** bajo el hero: "Desde 2021", competencias, equipos y proyectos. Se calculan solas desde `history.ts`, `competitions.ts` y `site.ts`, así que se actualizan al agregar datos.
- **Tarjetas de equipo** con foto, y efectos al pasar el cursor (borde verde, elevación, zoom).
- **Proyectos y portadas de sección:** con foto en lugar del placeholder vacío.
- **Placeholder "Fotografía próximamente"** rediseñado, para las imágenes que aún no existen.
- Botones con brillo al pasar el cursor, títulos con mejor contraste y menos espacio vacío entre secciones.

## Imágenes provisionales (reemplázalas cuando tengas las definitivas)

Para que no hubiera huecos, copié fotos reales de SAFI con los nombres que el sitio espera. Basta guardar tu foto definitiva con el mismo nombre en `public/images/`:

| Archivo | Provisional (foto usada) |
|---|---|
| `project-agas.jpg`, `agas-hero.jpg` | `join-10.jpg` (paracaídas) |
| `project-cansat.jpg` | `join-03.jpg` |
| `dyson-swarm-hero.jpg`, `dyson-swarm-cansat.jpg` | `join-04.jpg` |
| `project-hybrid.jpg`, `hybrid-hero.jpg` | `join-07.jpg` |
| `akbal-hero.jpg` | `project-akbal.jpg` |
| `projects-hero.jpg` | `team-safi.jpg` |
| `competitions-hero.jpg` | `lasc-hero.jpg` |
| `join-hero.jpg` | `join-09.jpg` |

Confirma que cada foto corresponda al proyecto o equipo. Las fotos de competencias específicas (ENMICE, CanSat CUCEI, LASC 2023) no las sustituí para no mostrar fotos de otro evento.

## Pendiente: necesito datos tuyos

1. **Correo de contacto**: `src/data/site.ts` sigue con `TU_CORREO_SAFI@ejemplo.com`. Lo usan "Contactar a SAFI" (Patrocinadores) y Únete.
2. **Formulario de ingreso**: `formularioIngreso` apunta a `https://forms.google.com/` genérico.
3. **Patrocinadores**: `src/data/sponsors.ts` está vacío, pero ya hay 5 logos en `public/images/sponsors/`.
   Dejé el bloque listo y comentado; confirma nombres y enlaces antes de activarlo.
   Mientras tanto, la sección dice "Patrocinadores actuales / Quienes ya impulsan SAFI" con la lista vacía.
4. **Foto principal del inicio**: `safi-hero.jpg` es vertical y de baja resolución. Ya se usa en un marco vertical, pero una foto nueva y más grande del cohete se vería aún mejor.

## Imágenes que aún no existen (36)

Mientras no estén, se muestra el placeholder "Fotografía próximamente":

- `akbal-avionics.jpg`
- `akbal-payload.jpg`
- `akbal-propulsion.jpg`
- `akbal-recovery.jpg`
- `akbal-structure.jpg`
- `cansat-competition-2023-01.jpg`
- `cansat-competition-2023-02.jpg`
- `cansat-competition-2023-03.jpg`
- `cansat-competition-2023-hero.jpg`
- `cansat-cucei-2021-01.jpg`
- `cansat-cucei-2021-02.jpg`
- `cansat-cucei-2021-03.jpg`
- `cansat-cucei-2021-hero.jpg`
- `dyson_swarm.png`
- `enmice-2022-01.jpg`
- `enmice-2022-02.jpg`
- `enmice-2022-03.jpg`
- `enmice-2022-hero.jpg`
- `enmice-2024-01.jpg`
- `enmice-2024-02.jpg`
- `enmice-2024-03.jpg`
- `enmice-2024-hero.jpg`
- `enmice-2025-01.jpg`
- `enmice-2025-02.jpg`
- `enmice-2025-03.jpg`
- `enmice-2025-hero.jpg`
- `lasc-03.jpg`
- `lasc-04.jpg`
- `lasc-05.jpg`
- `lasc-06.jpg`
- `lasc-07.jpg`
- `lasc-08.jpg`
- `lasc-2023-01.jpg`
- `lasc-2023-02.jpg`
- `lasc-2023-03.jpg`
- `lasc-2023-hero.jpg`

## Ideas opcionales

- `Hero.astro` y `AreaCard.astro` no se usan en ninguna página (y tienen enlaces sin ruta base): elimínalos o intégralos.
- Agregar sitemap (`@astrojs/sitemap`) y `robots.txt`.
- Los `alt` de varias fotos dicen solo "SAFI"; una descripción real mejora accesibilidad y SEO.

## Ajuste de identidad Dyson Swarm

- El equipo dedicado a CanSat se presenta en todo el sitio como **Dyson Swarm**.
- "CanSat" se conserva únicamente para describir la plataforma, el tipo de misión y los nombres oficiales de competencias.
- La antigua ruta `/equipos/cansat` redirige a `/equipos/dyson_swarm` para conservar enlaces previos.
- El logo del equipo usa `public/images/logos/dyson_swarm.png`.
- Se agregó una página 404 coherente con la identidad visual del sitio y `robots.txt`.
