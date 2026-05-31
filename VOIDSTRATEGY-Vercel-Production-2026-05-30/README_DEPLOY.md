# VOIDSTRATEGY - Deploy en Vercel

Paquete estático de producción para Vercel, sin dependencias externas obligatorias.

## Requisitos

- Node.js 20.11 o superior.
- npm 10 o superior.
- Cuenta en Vercel.
- Repositorio en GitHub.

## Scripts

```bash
npm run lint
npm run build
```

El build genera la carpeta `dist/`, que es la salida de producción.
El proyecto no requiere dependencias externas; por eso Vercel usa un install command neutro.

## Deploy con GitHub + Vercel

1. Sube esta carpeta a GitHub.
2. En Vercel selecciona `Add New Project`.
3. Importa el repositorio.
4. Framework Preset: `Other`.
5. Install Command: `echo No dependencies required`.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Agrega variables de entorno si aplican.
9. Pulsa `Deploy`.

## Dominio futuro

1. En Vercel abre `Settings > Domains`.
2. Agrega `voidstrategy.com`.
3. Configura DNS:
   - Apex/root: `A` record hacia `76.76.21.21`.
   - `www`: `CNAME` hacia `cname.vercel-dns.com`.
4. Define dominio principal.
5. Decide redirección canónica: `www` a root o root a `www`.
6. Actualiza `NEXT_PUBLIC_SITE_URL` con el dominio final.

## SEO

- Metadata global generada en `scripts/build.mjs`.
- Contenido SEO base en `src/content.mjs`.
- Open Graph usa `/assets/strategy-placeholder.svg`.
- Cambia `NEXT_PUBLIC_SITE_URL` en Vercel cuando tengas dominio final.

## Producción

Antes de conectar a Vercel:

```bash
npm run lint
npm run build
```

Si ambos pasan, el paquete está listo para producción.
