// Chloe Bella Dietz — front end. Renders every section from data/content.json,
// runs scroll reveals, the Work tab switcher, the highlight ticker, plus the
// work reader + gallery lightbox overlays. All text is set via textContent
// (no HTML injection). Static, hand-curated — edit content.json to change it.

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node && value != null) node.textContent = value;
}

// ---------- scroll reveal ----------
function observeReveals() {
  const targets = document.querySelectorAll(".reveal:not(.in)");
  if (REDUCED) { targets.forEach((t) => t.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  targets.forEach((t) => io.observe(t));
}

// ---------- overlays ----------
const modal = document.getElementById("modal");
function openModal(item) {
  setText("modal-eyebrow", item.eyebrow || item.source || "");
  setText("modal-title", item.title || "");
  setText("modal-summary", item.summary || "");
  const src = document.getElementById("modal-source");
  if (item.url) { src.href = item.url; src.hidden = false; } else { src.hidden = true; }
  modal.hidden = false;
}
function closeModal() { modal.hidden = true; }

const lightbox = document.getElementById("lightbox");
function openLightbox(src, caption) {
  document.getElementById("lightbox-img").src = src;
  setText("lightbox-caption", caption || "");
  lightbox.hidden = false;
}
function closeLightbox() { lightbox.hidden = true; }

function wireOverlays() {
  document.getElementById("modal-backdrop").addEventListener("click", closeModal);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-done").addEventListener("click", closeModal);
  document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeLightbox(); }
  });
}

// ---------- renderers ----------
function renderBrand(p) {
  if (!p.wordmark) return;
  const html = (node) => {
    node.textContent = "";
    node.appendChild(document.createTextNode(p.wordmark));
    if (p.wordmarkEm) node.appendChild(Object.assign(document.createElement("em"), { textContent: " " + p.wordmarkEm }));
  };
  document.querySelectorAll(".brand-word").forEach(html);
}

function renderHero(h) {
  setText("hero-kicker", h.kicker);
  const title = document.getElementById("hero-title");
  title.textContent = "";
  (h.titleLines || []).forEach((line, i) => {
    const span = el("span", i === 0 ? "reveal d1" : "reveal d2", line);
    title.appendChild(span);
  });
  setText("hero-sub", h.sub);
  const ctas = document.getElementById("hero-ctas");
  ctas.textContent = "";
  for (const c of h.ctas || []) {
    const a = el("a", `btn btn-${c.style === "ghost" ? "ghost" : "solid"}`, c.label);
    a.href = c.href || "#";
    ctas.appendChild(a);
  }
}

function renderStats(facts) {
  const band = document.getElementById("statband");
  band.textContent = "";
  for (const f of facts || []) {
    const stat = el("div", "stat");
    stat.appendChild(el("span", "stat-num", f.value));
    stat.appendChild(el("span", "stat-label", f.label));
    band.appendChild(stat);
  }
}

function renderTicker(items) {
  const track = document.getElementById("ticker-track");
  track.textContent = "";
  const list = (items && items.length) ? items : [];
  // duplicate for a seamless marquee loop
  for (const t of [...list, ...list]) track.appendChild(el("span", null, t));
}

function renderAbout(p) {
  setText("about-role", p.role);
  setText("about-bio", p.bio);
  const monoNode = document.getElementById("portrait-mono");
  if (monoNode && p.name) {
    monoNode.textContent = p.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  }
  if (p.portrait) {
    const frame = document.getElementById("portrait-frame");
    frame.classList.add("has-photo");
    frame.style.backgroundImage = `url("${p.portrait}")`;
  }
  const facts = document.getElementById("about-facts");
  facts.textContent = "";
  for (const f of p.facts || []) {
    const li = el("li");
    li.appendChild(el("span", null, f.value));
    li.appendChild(document.createTextNode(f.label));
    facts.appendChild(li);
  }
}

function renderWork(work) {
  setText("work-intro", work.intro);
  const tabbar = document.getElementById("work-tabs");
  const panels = document.getElementById("work-panels");
  const empty = document.getElementById("work-empty");
  tabbar.textContent = ""; panels.textContent = "";
  const cats = work.categories || [];
  const items = work.items || [];
  if (!cats.length || !items.length) { empty.hidden = false; return; }

  cats.forEach((cat, i) => {
    const tab = el("button", "tab" + (i === 0 ? " is-active" : ""), null);
    tab.appendChild(document.createTextNode(cat.label));
    if (cat.note) tab.appendChild(el("span", "tab-note", cat.note));
    tab.dataset.tab = cat.id;
    tabbar.appendChild(tab);

    const panel = el("div", "panel" + (i === 0 ? " is-active" : ""));
    panel.dataset.panel = cat.id;
    const grid = el("div", "grid");
    const catItems = items.filter((it) => it.category === cat.id);
    if (!catItems.length) grid.appendChild(el("p", "empty", "Nothing here yet."));
    for (const it of catItems) {
      const card = el("button", "card");
      card.appendChild(el("span", "card-eyebrow", it.eyebrow || cat.label));
      card.appendChild(el("h3", "card-title", it.title));
      const meta = [it.source, it.date].filter(Boolean).join(" · ");
      if (meta) card.appendChild(el("p", "card-meta", meta));
      card.addEventListener("click", () => openModal(it));
      grid.appendChild(card);
    }
    panel.appendChild(grid);
    panels.appendChild(panel);
  });

  tabbar.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    tabbar.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-active", t === tab));
    panels.querySelectorAll(".panel").forEach((p) => p.classList.toggle("is-active", p.dataset.panel === tab.dataset.tab));
  });
}

function renderGallery(g) {
  setText("gallery-intro", g.intro);
  const grid = document.getElementById("gallery-grid");
  grid.textContent = "";
  for (const img of g.images || []) {
    const fig = el("figure", "gallery-item");
    fig.style.backgroundImage = `url("${img.src}")`;
    if (img.caption) fig.appendChild(el("figcaption", null, img.caption));
    fig.addEventListener("click", () => openLightbox(img.src, img.caption));
    grid.appendChild(fig);
  }
}

function renderBand(band) {
  const title = document.getElementById("band-title");
  title.textContent = "";
  (band.title || []).forEach((line, i) => {
    if (i > 0) title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode(line));
  });
  const cols = document.getElementById("band-cols");
  cols.textContent = "";
  for (const c of band.cols || []) {
    const col = el("div", "band-col");
    col.appendChild(el("h3", null, c.h));
    col.appendChild(el("p", null, c.p));
    cols.appendChild(col);
  }
}

function renderConnect(c) {
  setText("connect-intro", c.intro);
  const grid = document.getElementById("links-grid");
  grid.textContent = "";
  for (const link of c.links || []) {
    const a = el("a", "link-card");
    a.href = link.href || "#";
    if (!link.href || !link.href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    // avatar: profile photo if provided, else a colored initial circle
    if (link.icon) {
      const img = el("img", "link-avatar");
      img.src = link.icon; img.alt = link.label || ""; img.loading = "lazy";
      img.addEventListener("error", () => {
        const fb = el("span", "link-avatar link-avatar-fallback", (link.label || "?").trim()[0].toUpperCase());
        img.replaceWith(fb);
      });
      a.appendChild(img);
    } else {
      a.appendChild(el("span", "link-avatar link-avatar-fallback", (link.label || "?").trim()[0].toUpperCase()));
    }
    const txt = el("div", "link-text");
    txt.appendChild(el("span", "link-label", link.label));
    if (link.handle) txt.appendChild(el("span", "link-handle", link.handle));
    a.appendChild(txt);
    grid.appendChild(a);
  }
}

function renderFooter(f) {
  setText("foot-fine", f.fine);
  const meta = document.getElementById("foot-meta");
  meta.textContent = "";
  for (const m of f.meta || []) meta.appendChild(el("span", null, m));
}

// ---------- boot ----------
async function boot() {
  wireOverlays();
  let data;
  try {
    const res = await fetch("data/content.json?t=" + Date.now());
    data = await res.json();
  } catch (err) {
    document.querySelector(".hero-inner").appendChild(el("p", "empty", "Could not load content.json."));
    return;
  }
  if (data.profile?.name) document.title = data.profile.name;
  renderBrand(data.profile || {});
  renderHero(data.hero || {});
  renderStats(data.profile?.facts || []);
  renderTicker(data.ticker || []);
  renderAbout(data.profile || {});
  renderWork(data.work || {});
  renderGallery(data.gallery || {});
  renderBand(data.band || {});
  renderConnect(data.connect || {});
  renderFooter(data.footer || {});
  observeReveals();
}

boot();
