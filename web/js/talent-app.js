function getCompanyColor(name) {
  const c = (window.COMPANIES || []).find((x) => x.name === name || name.startsWith(x.name.split(" ")[0]));
  return c ? c.color : "#64748b";
}

function getInitials(name) {
  return name.split(/[\s(/]+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function renderStats() {
  const updates = window.UPDATES || [];
  const roles = window.OPEN_ROLES || [];
  const cn = window.CN_MARKET || [];
  const hiring = updates.filter((u) => u.tags.includes("hiring") || u.tags.includes("expansion")).length;
  const cnRoles = roles.filter((r) => r.market === "CN" || (r.tags && r.tags.includes("cn"))).length;
  const comp = updates.filter((u) => u.tags.includes("comp")).length;
  const visa = updates.filter((u) => u.tags.includes("visa")).length;
  document.getElementById("statOpenRoles").textContent = roles.length;
  document.getElementById("statCnSignals").textContent = cn.length + cnRoles;
  document.getElementById("statHiringEvents").textContent = hiring;
  document.getElementById("statCompMoves").textContent = comp;
  document.getElementById("statVisaFriendly").textContent = visa;
}

function renderTimeline(filter = {}) {
  const ML = window.MonitorLang;
  const el = document.getElementById("timeline");
  if (!el) return;
  const q = (filter.q || "").toLowerCase();
  const country = filter.country || "";
  const category = filter.category || "";

  el.innerHTML = (window.UPDATES || []).map((u) => {
    const matchQ = !q || [u.company, u.title, u.desc, u.relation].join(" ").toLowerCase().includes(q);
    const matchC = !country || u.countries.includes(country);
    const matchCat = !category || u.tags.includes(category);
    const hidden = !(matchQ && matchC && matchCat) ? "hidden" : "";
    const tags = u.tags.map((t) => `<span class="tag ${t}">${ML ? ML.tagLabel(t) : t}</span>`).join("");
    const title = ML ? ML.itemField(u, "title") : u.title;
    const desc = ML ? ML.itemField(u, "desc") : u.desc;
    const rel = ML ? ML.itemField(u, "relation") : u.relation;
    return `
      <article class="timeline-item ${hidden}">
        <time class="timeline-date">${u.date}</time>
        <div class="timeline-content">
          <h3>${u.company} · ${title}</h3>
          <p>${desc}</p>
          <div class="timeline-tags">${tags}<span class="tag peer">${ML ? ML.relationLabel(rel) : rel}</span></div>
        </div>
      </article>`;
  }).join("");
}

function renderRoles(filter = {}) {
  const ML = window.MonitorLang;
  const el = document.getElementById("roleGrid");
  if (!el) return;
  const q = (filter.q || "").toLowerCase();
  const country = filter.country || "";
  const category = filter.category || "";

  el.innerHTML = (window.OPEN_ROLES || []).map((r) => {
    const blob = JSON.stringify(r).toLowerCase();
    const matchQ = !q || blob.includes(q);
    const matchC = !country || r.market === country;
    const matchCat = !category || (r.tags && r.tags.includes(category));
    const hidden = !(matchQ && matchC && matchCat) ? "hidden" : "";
    const color = getCompanyColor(r.company);
    const mkt = ML ? ML.marketName(r.market) : (window.MARKET_NAMES[r.market] || r.market);
    const tagHtml = (r.tags || []).map((t) => `<span class="tag ${t}">${ML ? ML.tagLabel(t) : t}</span>`).join(" ");
    return `
      <article class="role-card ${hidden}">
        <div class="role-card-top">
          <div class="company-avatar" style="background:${color}22;color:${color}">${getInitials(r.company)}</div>
          <div>
            <h3>${r.company}</h3>
            <div class="role-meta">${mkt} · ${r.level} · ${r.posted}</div>
          </div>
        </div>
        <div class="role-title">${r.title}</div>
        <p>${ML ? ML.itemField(r, "note") || r.note : r.note} · ${r.function}</p>
        <div class="timeline-tags" style="margin-top:0.5rem">${tagHtml}</div>
      </article>`;
  }).join("");
}

function renderChina(filter = {}) {
  const ML = window.MonitorLang;
  const spotlight = document.getElementById("cnSpotlight");
  if (spotlight && ML) spotlight.innerHTML = ML.t(ML.UI.cnSpotlight);
  const el = document.getElementById("cnGrid");
  if (!el) return;
  const q = (filter.q || "").toLowerCase();
  const country = filter.country || "";
  el.innerHTML = (window.CN_MARKET || []).map((c) => {
    const blob = JSON.stringify(c).toLowerCase();
    const matchQ = !q || blob.includes(q);
    const matchC = !country || country === "CN";
    const hidden = !(matchQ && matchC) ? "hidden" : "";
    const note = window.MonitorLang ? window.MonitorLang.itemField(c, "notes") || c.notes : c.notes;
    return `
      <article class="cn-card ${hidden}">
        <h4>${c.company}</h4>
        <div class="hub">${c.hubs}</div>
        <ul>${c.roles.map((r) => `<li>${r}</li>`).join("")}</ul>
        <p style="font-size:0.82rem;margin-top:0.65rem;color:var(--text-muted)">${note}</p>
      </article>`;
  }).join("");
}

function renderVisaFocus() {
  const el = document.getElementById("visaFocus");
  if (!el) return;
  const ML = window.MonitorLang;
  el.innerHTML = (window.VISA_SNIPPETS || []).map((v) => {
    const mkt = ML ? ML.marketName(v.market) : v.market;
    const text = ML ? ML.itemField(v, "text") || v.text : v.text;
    return `<p style="margin-bottom:0.6rem"><strong>${v.flag} ${mkt}</strong> — ${text}</p>`;
  }).join("");
}

function renderCompTable(filter = {}) {
  const ML = window.MonitorLang;
  const tbody = document.getElementById("compTableBody");
  if (!tbody) return;
  const q = (filter.q || "").toLowerCase();
  const country = filter.country || "";

  tbody.innerHTML = (window.COMP_DATA || []).map((r) => {
    const matchQ = !q || JSON.stringify(r).toLowerCase().includes(q);
    const matchC = !country || r.market === country;
    const hidden = !(matchQ && matchC) ? "hidden" : "";
    const trendClass = r.trend === "up" ? "trend-up" : r.trend === "down" ? "trend-down" : "trend-flat";
    const trendIcon = r.trend === "up" ? "↑" : r.trend === "down" ? "↓" : "→";
    const color = getCompanyColor(r.company);
    return `
      <tr class="${hidden}">
        <td><div class="company-cell"><div class="company-avatar" style="background:${color}22;color:${color}">${getInitials(r.company)}</div>${r.company}</div></td>
        <td>${ML ? ML.marketName(r.market) : r.market}</td>
        <td>${r.role}</td>
        <td>$${r.base}K</td>
        <td>${r.bonus}</td>
        <td>$${r.equity}K/yr</td>
        <td><strong>$${r.total}K</strong></td>
        <td class="${trendClass}">${trendIcon}</td>
        <td>${r.benefits}</td>
      </tr>`;
  }).join("");
}

function renderMatrix(filter = {}) {
  const ML = window.MonitorLang;
  const tbody = document.getElementById("matrixBody");
  if (!tbody) return;
  const q = (filter.q || "").toLowerCase();
  const country = filter.country || "";

  tbody.innerHTML = (window.COMPANIES || []).map((c) => {
    const recent = (window.UPDATES || []).find((u) => u.company === c.name || u.company.startsWith(c.name.split(" ")[0]));
    const recentTitle = recent ? (ML ? ML.itemField(recent, "title") : recent.title) : (c.hiringNote || "—");
    const recentText = recentTitle.length > 44 ? recentTitle.slice(0, 42) + "…" : recentTitle;
    const matchQ = !q || JSON.stringify(c).toLowerCase().includes(q) || recentTitle.toLowerCase().includes(q);
    const matchC = !country || c.markets.includes(country);
    const hidden = !(matchQ && matchC) ? "hidden" : "";
    const rel = ML ? ML.relationLabel(c.relation) : c.relation;
    return `
      <tr class="${hidden}">
        <td><div class="company-cell"><div class="company-avatar" style="background:${c.color}22;color:${c.color}">${getInitials(c.name)}</div>${c.name}</div></td>
        <td><span class="tag peer">${rel}</span></td>
        <td>${c.markets.map((m) => (ML ? ML.marketName(m) : m)).join(", ")}</td>
        <td style="max-width:240px;font-size:0.82rem;color:var(--text-muted)">${recentText}</td>
        <td>${c.visa}</td>
        <td>${c.comp}</td>
        <td>${c.taPriority}</td>
      </tr>`;
  }).join("");
}

function getFilter() {
  return {
    q: (document.getElementById("searchInput")?.value || "").trim(),
    country: document.getElementById("countryFilter")?.value || "",
    category: document.getElementById("categoryFilter")?.value || ""
  };
}

function applyFilters() {
  const f = getFilter();
  renderTimeline(f);
  renderRoles(f);
  renderChina(f);
  renderCompTable(f);
  renderMatrix(f);
}
window.applyFilters = applyFilters;

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("panel-" + btn.dataset.tab)?.classList.add("active");
    });
  });
}

function initFilters() {
  ["searchInput", "countryFilter", "categoryFilter"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", applyFilters);
      el.addEventListener("change", applyFilters);
    }
  });
}

function bootTalentApp() {
  const ver = document.getElementById("lastUpdated");
  if (ver && window.TALENT_DATA_VERSION) ver.textContent = (window.MonitorLang?.t(window.MonitorLang.UI.updated) || "Updated") + ": " + window.TALENT_DATA_VERSION;
  renderStats();
  renderVisaFocus();
  applyFilters();
  initTabs();
  initFilters();
}
window.bootTalentApp = bootTalentApp;