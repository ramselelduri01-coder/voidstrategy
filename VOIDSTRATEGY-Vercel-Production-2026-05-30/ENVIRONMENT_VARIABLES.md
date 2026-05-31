# ENVIRONMENT VARIABLES

## Requeridas

No hay variables obligatorias para compilar.

## Recomendadas

```bash
NEXT_PUBLIC_SITE_URL=https://voidstrategy.com
```

Uso:

- Construye URLs canónicas.
- Construye URLs Open Graph.
- Debe cambiarse cuando el dominio final esté confirmado.

## Futuras

Newsletter:

```bash
NEWSLETTER_PROVIDER=
NEWSLETTER_API_KEY=
NEWSLETTER_LIST_ID=
```

Analytics:

```bash
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

CMS:

```bash
CMS_API_URL=
CMS_API_TOKEN=
```

## Seguridad

- No subir `.env` ni `.env.local`.
- Variables privadas nunca deben usar `NEXT_PUBLIC_`.
- Variables `NEXT_PUBLIC_` son visibles en navegador.
- Configurar valores desde `Vercel > Project Settings > Environment Variables`.

