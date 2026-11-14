import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const SITE = "https://nishant-bhoyar-portfolio.vercel.app";
const projects = [
  {
    slug: "ai-root-cause-investigator",
    title: "AI Root Cause Investigator | LangGraph AI Project — Nishant Bhoyar",
    description: "Explore an AI-powered investigation platform designed to organize operational evidence and structured root-cause investigations using Python, LangGraph, FastAPI, PostgreSQL and retrieval.",
    image: `${SITE}/og/ai-root-cause-investigator.png`,
    keywords: ["AI", "LangGraph", "FastAPI", "Python", "root cause investigation", "RAG"],
  },
  {
    slug: "pdf-chat-rag",
    title: "PDF Chat RAG | Document AI Application — Nishant Bhoyar",
    description: "Explore a PDF question-answering application using retrieval-augmented generation, embeddings, vector search, Python and FastAPI.",
    image: `${SITE}/og/pdf-chat-rag.png`,
    keywords: ["RAG", "PDF question answering", "embeddings", "vector search", "Python", "FastAPI"],
  },
  {
    slug: "cybershield-url-scanner",
    title: "CyberShield URL Scanner | Python Security Project — Nishant Bhoyar",
    description: "Explore CyberShield, a Python and FastAPI project focused on URL analysis and presenting security-related signals.",
    image: `${SITE}/og/cybershield-url-scanner.png`,
    keywords: ["Python", "FastAPI", "URL analysis", "security project", "REST API"],
  },
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function setMeta(html, selector, tag) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<meta\\s+[^>]*${escaped}[^>]*>`, "i");
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}
function setLink(html, rel, href) {
  const re = new RegExp(`<link\\s+[^>]*rel=["']${rel}["'][^>]*>`, "i");
  const tag = `<link rel="${rel}" href="${href}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}
function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}
function setJsonLd(html, data) {
  const tag = `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
  const re = /<script type="application\/ld\+json">[\s\S]*?<\/script>/i;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

const template = await readFile("dist/index.html", "utf8");
for (const project of projects) {
  const url = `${SITE}/projects/${project.slug}`;
  const image = project.image;
  let html = template;
  html = setTitle(html, project.title);
  html = setMeta(html, 'name="description"', `<meta name="description" content="${escapeHtml(project.description)}" />`);
  html = setMeta(html, 'property="og:type"', '<meta property="og:type" content="article" />');
  html = setMeta(html, 'property="og:title"', `<meta property="og:title" content="${escapeHtml(project.title)}" />`);
  html = setMeta(html, 'property="og:description"', `<meta property="og:description" content="${escapeHtml(project.description)}" />`);
  html = setMeta(html, 'property="og:url"', `<meta property="og:url" content="${url}" />`);
  html = setMeta(html, 'property="og:image"', `<meta property="og:image" content="${image}" />`);
  html = setMeta(html, 'name="twitter:card"', '<meta name="twitter:card" content="summary_large_image" />');
  html = setMeta(html, 'name="twitter:title"', `<meta name="twitter:title" content="${escapeHtml(project.title)}" />`);
  html = setMeta(html, 'name="twitter:description"', `<meta name="twitter:description" content="${escapeHtml(project.description)}" />`);
  html = setMeta(html, 'name="twitter:image"', `<meta name="twitter:image" content="${image}" />`);
  html = setLink(html, "canonical", url);
  html = setJsonLd(html, {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title.split(" | ")[0],
    "description": project.description,
    "url": url,
    "image": image,
    "author": {
      "@type": "Person",
      "name": "Nishant Bhoyar",
      "url": `${SITE}/`
    },
    "keywords": project.keywords,
    "inLanguage": "en"
  });
  const destination = join("dist", "projects", project.slug, "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html, "utf8");
}
console.log(`Pre-rendered SEO HTML for ${projects.length} project pages.`);
