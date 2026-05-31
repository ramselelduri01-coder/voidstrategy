import fs from "node:fs";
import path from "node:path";
import { articles, categories, site } from "../src/content.mjs";

const root = process.cwd();
const dist = path.join(root, "dist");

function cleanDist() {
  fs.mkdirSync(path.join(dist, "assets"), { recursive: true });
}

function copyStatic() {
  safeWrite(path.join(dist, "styles.css"), fs.readFileSync(path.join(root, "src", "styles.css")));
  for (const asset of fs.readdirSync(path.join(root, "src", "assets"))) {
    safeWrite(
      path.join(dist, "assets", asset),
      fs.readFileSync(path.join(root, "src", "assets", asset)),
    );
  }
}

function safeWrite(filePath, content) {
  if (fs.existsSync(filePath)) {
    const current = fs.readFileSync(filePath);
    const next = Buffer.isBuffer(content) ? content : Buffer.from(content);
    if (Buffer.compare(current, next) === 0) {
      return;
    }
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function urlFor(pathname) {
  return `${site.url}${pathname}`;
}

function layout({ title, description, pathname, body }) {
  const pageTitle = title === site.name ? site.name : `${title} | ${site.name}`;
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(urlFor(pathname))}">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(urlFor(pathname))}">
  <meta property="og:image" content="${escapeHtml(urlFor("/assets/strategy-placeholder.svg"))}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
</body>
</html>`;
}

function header() {
  const nav = [
    ["Inicio", "/"],
    ["Geopolítica", "/categoria/geopolitica/"],
    ["Defensa", "/categoria/defensa/"],
    ["Economía", "/categoria/economia/"],
    ["Tecnología", "/categoria/tecnologia/"],
    ["Opinión", "/categoria/opinion/"],
    ["Contacto", "/contacto/"],
  ];
  return `<header class="site-header">
  <a class="brand" href="/" aria-label="VOIDSTRATEGY inicio">
    <span class="brand-mark">V</span>
    <span><span class="brand-name">VOIDSTRATEGY</span><span class="brand-line">Geopolítica - Estrategia - Poder</span></span>
  </a>
  <nav class="desktop-nav" aria-label="Navegación principal">
    ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
  </nav>
  <div><a class="report-link" href="/newsletter/">Reporte</a><span class="mobile-menu-label">Menú</span></div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <a class="brand" href="/"><span class="brand-mark">V</span><span><span class="brand-name">VOIDSTRATEGY</span><span class="brand-line">Geopolítica - Estrategia - Poder</span></span></a>
      <p>Análisis profundo. Perspectiva global. Decisiones inteligentes.</p>
    </div>
    <div><h2>Secciones</h2>${categories.map((category) => `<a href="/categoria/${category.slug}/">${category.label}</a>`).join("")}</div>
    <div><h2>Recursos</h2><a href="/newsletter/">Newsletter</a><a href="/acerca-de/">Acerca de</a><a href="/contacto/">Contacto</a></div>
    <div><h2>Redes</h2><a href="https://x.com" rel="noreferrer" target="_blank">X</a><a href="https://instagram.com" rel="noreferrer" target="_blank">Instagram</a><a href="https://youtube.com" rel="noreferrer" target="_blank">YouTube</a></div>
  </div>
  <div class="footer-bottom">Copyright 2026 VOIDSTRATEGY. Todos los derechos reservados.</div>
</footer>`;
}

function articleCard(article, variant = "compact") {
  const category = categories.find((item) => item.slug === article.category);
  return `<article class="article-card article-card-${variant}">
  <a class="card-image" href="/articles/${article.slug}/" aria-label="${escapeHtml(article.title)}"><img src="/assets/strategy-placeholder.svg" alt=""></a>
  <div class="card-content">
    <p class="eyebrow">${escapeHtml(category?.label ?? article.category)}</p>
    <h3><a href="/articles/${article.slug}/">${escapeHtml(article.title)}</a></h3>
    <p>${escapeHtml(article.excerpt)}</p>
    <span>${escapeHtml(article.date)} / ${escapeHtml(article.readingTime)}</span>
  </div>
</article>`;
}

function newsletter() {
  return `<section class="newsletter-panel" id="newsletter">
  <div><p class="eyebrow">Reporte estratégico</p><h2>Recibe reportes estratégicos antes que todos.</h2><p>Análisis geopolítico, defensa, economía y tecnología para entender el tablero antes del próximo movimiento.</p></div>
  <form class="newsletter-form"><input name="email" type="email" placeholder="Tu email" aria-label="Email"><button type="submit">Unirme al reporte</button><small>Sin ruido. Sin spam. Solo inteligencia editorial.</small></form>
</section>`;
}

function homePage() {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const secondary = articles.filter((article) => article.slug !== featured.slug).slice(0, 3);
  return layout({
    title: "VOIDSTRATEGY",
    description: site.description,
    pathname: "/",
    body: `<main>
  <section class="hero-section">
    <div class="hero-map" aria-hidden="true"></div><div class="hero-emblem" aria-hidden="true">V</div>
    <div class="hero-content"><p class="eyebrow">Inteligencia geopolítica independiente</p><h1>${site.slogan}</h1><p>${site.subtitle}</p><div class="hero-actions"><a class="button button-primary" href="#analisis">Ver últimos análisis</a><a class="button button-secondary" href="/newsletter/">Unirme al reporte estratégico</a></div></div>
    <div class="coordinates" aria-hidden="true">22.8966° N<br>88.4300° E</div>
  </section>
  <section class="ticker" aria-label="Última hora"><strong>Última hora</strong><div><span>EE.UU. aumenta presencia militar en el Indo-Pacífico</span><span>Rusia y China refuerzan alianza estratégica</span><span>Crisis energética en Europa alcanza niveles críticos</span></div></section>
  <section class="section" id="analisis"><div class="section-head"><h2>Análisis destacados</h2><a href="/categoria/geopolitica/">Ver archivo</a></div><div class="featured-grid">${articleCard(featured, "large")}<div class="secondary-stack">${secondary.map((article) => articleCard(article)).join("")}</div></div></section>
  <section class="section"><div class="section-head"><h2>Categorías estratégicas</h2></div><div class="category-grid">${categories.map((category) => `<a class="category-card" href="/categoria/${category.slug}/"><span>${category.label}</span><p>${category.description}</p></a>`).join("")}</div></section>
  <section class="intelligence-brief"><p class="eyebrow">Método</p><h2>No seguimos el ruido. Leemos la estructura.</h2><p>VOIDSTRATEGY analiza los movimientos que definen el poder global: alianzas, conflictos, economía, defensa, tecnología y narrativa.</p><div><span>Actores</span><span>Incentivos</span><span>Consecuencias</span></div></section>
  <section class="section"><div class="section-head"><h2>Últimos análisis</h2></div><div class="latest-grid">${articles.map((article) => articleCard(article)).join("")}</div></section>
  ${newsletter()}
</main>`,
  });
}

function articlePage(article) {
  const category = categories.find((item) => item.slug === article.category);
  const related = articles.filter((item) => item.category === article.category && item.slug !== article.slug);
  return layout({
    title: article.seoTitle,
    description: article.seoDescription,
    pathname: `/articles/${article.slug}/`,
    body: `<main>
  <article class="article-page"><header class="article-hero"><p class="eyebrow">${category?.label ?? article.category}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.excerpt)}</p><div class="article-meta"><span>${escapeHtml(article.author)}</span><span>${escapeHtml(article.date)}</span><span>${escapeHtml(article.readingTime)}</span></div></header><img class="article-cover" src="/assets/strategy-placeholder.svg" alt=""><div class="article-layout"><aside class="article-index"><strong>Índice</strong><span>Contexto</span><span>Actores</span><span>Consecuencias</span></aside><div class="article-body">${article.content.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div></div></article>
  ${newsletter()}
  ${related.length ? `<section class="section"><div class="section-head"><h2>Relacionados</h2></div><div class="latest-grid">${related.map((item) => articleCard(item)).join("")}</div></section>` : ""}
</main>`,
  });
}

function categoryPage(category) {
  const items = articles.filter((article) => article.category === category.slug);
  return layout({
    title: `${category.label} - VOIDSTRATEGY`,
    description: category.description,
    pathname: `/categoria/${category.slug}/`,
    body: `<main><header class="category-hero"><p class="eyebrow">Dossier</p><h1>${category.label}</h1><p>${category.description}</p></header><section class="section"><div class="latest-grid">${items.map((article) => articleCard(article)).join("")}</div></section></main>`,
  });
}

function simplePage({ slug, eyebrow, title, description, extra = "" }) {
  return layout({
    title,
    description,
    pathname: `/${slug}/`,
    body: `<main class="simple-page"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${description}</p>${extra}</main>`,
  });
}

function writePage(route, html) {
  const folder = path.join(dist, route);
  fs.mkdirSync(folder, { recursive: true });
  safeWrite(path.join(folder, "index.html"), html);
}

function build() {
  cleanDist();
  copyStatic();
  safeWrite(path.join(dist, "index.html"), homePage());
  for (const article of articles) writePage(path.join("articles", article.slug), articlePage(article));
  for (const category of categories) writePage(path.join("categoria", category.slug), categoryPage(category));
  writePage("newsletter", layout({ title: "Newsletter", description: "Recibe reportes estratégicos de VOIDSTRATEGY antes que todos.", pathname: "/newsletter/", body: `<main><section class="simple-page"><p class="eyebrow">Reporte estratégico</p><h1>Recibe reportes estratégicos antes que todos.</h1><p>Una lectura sobria sobre geopolítica, defensa, economía y tecnología. Para entender el tablero antes del próximo movimiento.</p></section>${newsletter()}</main>` }));
  writePage("acerca-de", simplePage({ slug: "acerca-de", eyebrow: "Manifiesto", title: "Analizamos lo que otros ignoran.", description: "VOIDSTRATEGY nace para leer el poder global con perspectiva estratégica: actores, incentivos, capacidades y consecuencias.", extra: `<div class="principles-grid"><div><h2>Contexto</h2><p>No aislamos eventos. Leemos estructuras.</p></div><div><h2>Precisión</h2><p>Menos ruido, más señales verificables.</p></div><div><h2>Perspectiva</h2><p>El tablero completo importa más que la jugada del día.</p></div></div>` }));
  writePage("contacto", simplePage({ slug: "contacto", eyebrow: "Contacto", title: "Canal profesional VOIDSTRATEGY.", description: "Para colaboraciones, fuentes, alianzas, prensa o propuestas editoriales.", extra: `<form class="contact-form"><label>Nombre<input name="name" type="text"></label><label>Email<input name="email" type="email"></label><label>Mensaje<textarea name="message" rows="6"></textarea></label><button type="submit">Enviar mensaje</button></form>` }));
}

build();

if (process.argv.includes("--watch")) {
  console.log("Build complete. Re-run npm run build after changes.");
} else {
  console.log("VOIDSTRATEGY static production build complete.");
}
