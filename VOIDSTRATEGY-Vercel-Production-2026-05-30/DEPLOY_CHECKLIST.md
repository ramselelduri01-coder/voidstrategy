# DEPLOY CHECKLIST

## Verificación local

- [x] `npm run lint` configurado.
- [x] `npm run build` configurado.
- [x] Proyecto sin dependencias externas obligatorias.
- [x] Salida de producción en `dist`.
- [x] Assets copiados a `dist/assets`.
- [x] Rutas principales generadas.

## Antes de subir a GitHub

- [ ] Revisar copy final.
- [ ] Revisar enlaces sociales reales.
- [ ] Reemplazar imagen Open Graph si se crea una versión final.
- [ ] Confirmar dominio objetivo.
- [ ] No subir archivos `.env`.

## Vercel

- [ ] Framework Preset: `Other`.
- [ ] Install Command: `echo No dependencies required`.
- [ ] Build Command: `npm run build`.
- [ ] Output Directory: `dist`.
- [ ] Variable `NEXT_PUBLIC_SITE_URL` configurada.

## Dominio

- [ ] Dominio agregado en Vercel.
- [ ] DNS configurado.
- [ ] SSL activo.
- [ ] Redirección canónica definida.

## QA visual

- [ ] Home desktop.
- [ ] Home mobile 390 px.
- [ ] Página de artículo.
- [ ] Categorías.
- [ ] Newsletter.
- [ ] Acerca de.
- [ ] Contacto.
