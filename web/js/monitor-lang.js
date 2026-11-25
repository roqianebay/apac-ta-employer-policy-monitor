(function (global) {
  const KEY = "apac-talent-employer-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC Talent Intel · Hiring Monitor", "APAC Talent Intel · Hiring Monitor"),
    subtitle: L(
      "亚太互联网/电商人才情报 · <strong>扩招与开放职位</strong> · 中国市场 · 薪酬对标 · 竞品矩阵（裁员动态见 ER News V2.0）",
      "APAC internet & e-commerce talent intel · <strong>hiring & open roles</strong> · China market · comp benchmarks · peer matrix (layoffs on ER News V2.0)"
    ),
    intro: L(
      "<strong>定位：</strong>本看板只追踪<strong>招聘、扩招、薪酬 band、签证友好度</strong>等 TA 侧情报；<strong>裁员、RIF、补偿</strong>请使用 <a href=\"https://roqianebay.github.io/apac-ta-employer-monitor/\" style=\"color:var(--accent-light)\">APAC ER News V2.0</a>。数据为人工整理的示意索引，非官方招聘承诺；入职前请核对 JD 与 Offer。",
      "<strong>Scope:</strong> This board tracks <strong>hiring, expansion, comp bands, visa</strong> only. <strong>Layoffs/RIF/severance</strong> → <a href=\"https://roqianebay.github.io/apac-ta-employer-monitor/\" style=\"color:var(--accent-light)\">APAC ER News V2.0</a>. Curated illustrative intel — verify JDs and offers."
    ),
    live: L("Hiring Intel", "Hiring Intel"),
    updated: L("数据快照", "Snapshot"),
    peers: L("16 家互联网对标", "16 internet peers"),
    statRoles: L("跟踪开放职位", "Tracked open roles"),
    statRolesSub: L("示意 JD 摘要", "Illustrative JD snippets"),
    statCn: L("中国市场信号", "China market signals"),
    statCnSub: L("雇主卡片 + 在招岗位", "Employer cards + roles"),
    statHiring: L("扩招 / 招聘动态", "Hiring / expansion events"),
    statHiringSub: L("近 12 个月", "Last 12 months"),
    statComp: L("薪酬 band 调整", "Comp band moves"),
    statCompSub: L("Senior IC / Mgr", "Senior IC / Mgr"),
    statVisa: L("签证友好动态", "Visa-friendly moves"),
    statVisaSub: L("含 EP / 工签", "EP / work visa"),
    legendHiring: L("新增招聘", "New hiring"),
    legendExpansion: L("扩张", "Expansion"),
    legendVisa: L("签证", "Visa"),
    legendComp: L("薪酬", "Comp"),
    legendCn: L("中国", "China"),
    searchPh: L("搜索公司、职位、市场、关键词…", "Search company, role, market, keyword…"),
    filterCountry: L("全部国家/地区", "All countries"),
    catHiring: L("招聘", "Hiring"),
    catExpansion: L("扩张", "Expansion"),
    catVisa: L("签证", "Visa"),
    catComp: L("薪酬", "Comp"),
    catCn: L("中国", "China"),
    tabOverview: L("招聘动态", "Hiring feed"),
    tabChina: L("中国市场", "China market"),
    tabRoles: L("开放职位", "Open roles"),
    tabComp: L("薪酬对标", "Comp benchmarks"),
    tabMatrix: L("竞品矩阵", "Peer matrix"),
    latestUpdates: L("最新招聘情报", "Latest hiring intel"),
    sortedByTime: L("按时间排序", "By date"),
    taFocusTitle: L("TA 关注 — 互联网职能", "TA focus — internet functions"),
    taFocusBody: L(
      "<p><strong>工程：</strong>Marketplace / Payments / Trust & Safety / Search-Relevance / Seller Tools — 与 eBay 人才池高度重叠，Senior+ 竞争集中在 Stripe/PayPal/Big Tech。</p>" +
        "<p><strong>中国：</strong>算法与电商交易链路 HC 相对充足；跨境与 Cloud 国际岗英语要求高，社招职级（P6–P8 / 2-1+）需对标 RSU 与年终奖结构。</p>" +
        "<p><strong>SEA：</strong>Shopee/Lazada/Grab/TikTok Shop 抢夺 Seller Ops 与 Fulfillment Tech；EP sponsorship 因公司与 quota 差异大。</p>",
      "<p><strong>Engineering:</strong> Marketplace, payments, trust & safety, search, seller tools overlap with eBay; Senior+ competition from Stripe/PayPal/big tech.</p>" +
        "<p><strong>China:</strong> Algo and commerce pipeline hiring active; cross-border/cloud roles need English; level bands P6–P8 / 2-1+ with RSU + bonus.</p>" +
        "<p><strong>SEA:</strong> Shopee/Lazada/Grab/TikTok Shop compete for seller ops & fulfillment tech; EP sponsorship varies by quota.</p>"
    ),
    visaFocusTitle: L("签证速览", "Visa quick view"),
    chinaH2: L("中国大陆互联网雇主 — 在招方向", "Mainland China internet — hiring themes"),
    cnSpotlight: L(
      "<h3>中国市场 · 2026 Q3–Q4</h3><p>电商与 AI 应用扩招并存：阿里/字节/京东/美团/拼多多等侧重<strong>交易链路、供应链、推荐算法、国际化</strong>。 Compensation 因职级与业务线差异大，请以 Offer 与股权激励协议为准。</p>",
      "<h3>China · 2026 Q3–Q4</h3><p>E-commerce and AI hiring in parallel: transaction stack, supply chain, recsys, internationalization. Comp varies by level and BU — rely on offer letters.</p>"
    ),
    rolesH2: L("互联网行业 — 开放职位示意", "Internet sector — illustrative open roles"),
    rolesBadge: L("Senior IC / Manager", "Senior IC / Manager"),
    footerNote: L("APAC Talent Intel V3 · 内部 TA 参考 · 不含裁员情报", "APAC Talent Intel V3 · internal TA use · no layoff intel"),
    footerSources: L("数据源：LinkedIn、公司 careers、Levels.fyi、猎聘/BOSS（示意）", "Sources: LinkedIn, careers pages, Levels.fyi, local job boards (illustrative)"),
    hubIndex: L("看板总索引", "Dashboard index"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    hubErNews: L("ER News V2.0（裁员）", "ER News V2.0 (layoffs)"),
    hubGov: L("政府政策 Monitor", "Gov policy monitor"),
    compPanelTitle: L("APAC 薪酬对标（Senior IC · 示意 USD 总包）", "APAC comp benchmarks (Senior IC · illustrative USD TC)"),
    compPanelBadge: L("含 CN 样本", "incl. China samples"),
    matrixPanelTitle: L("竞品 / 人才相通矩阵", "Peer / talent-overlap matrix"),
    thComp0: L("公司", "Company"),
    thComp1: L("市场", "Market"),
    thComp2: L("角色类型", "Role"),
    thComp3: L("Base (USD)", "Base (USD)"),
    thComp4: L("Bonus", "Bonus"),
    thComp5: L("Equity/RSU", "Equity/RSU"),
    thComp6: L("Total Comp", "Total comp"),
    thComp7: L("趋势", "Trend"),
    thComp8: L("福利亮点", "Benefits"),
    thMx0: L("公司", "Company"),
    thMx1: L("与 eBay 关系", "Relation to eBay"),
    thMx2: L("APAC 市场", "APAC markets"),
    thMx3: L("近期招聘", "Recent hiring"),
    thMx4: L("签证友好度", "Visa"),
    thMx5: L("薪酬竞争力", "Comp"),
    thMx6: L("TA 优先级", "TA priority")
  };

  const RELATION_EN = {
    "基准": "Baseline",
    "直接竞品": "Direct peer",
    "区域竞品": "Regional peer",
    "生态竞品": "Ecosystem peer",
    "亚太对标": "APAC benchmark",
    "Payments 竞品": "Payments peer",
    "人才竞争": "Talent competitor",
    "Commerce 交叉": "Commerce crossover",
    "SEA 生态": "SEA ecosystem"
  };

  const MARKET_EN = {
    SG: "Singapore", AU: "Australia", JP: "Japan", KR: "Korea", CN: "Mainland China",
    TW: "Taiwan", HK: "Hong Kong", IN: "India", MY: "Malaysia", ID: "Indonesia", VN: "Vietnam", PH: "Philippines"
  };

  const TAG_EN = { hiring: "Hiring", expansion: "Expansion", visa: "Visa", comp: "Comp", cn: "China", peer: "Peer" };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item && item[enKey]) return item[enKey];
    return item ? item[key] : "";
  }

  function marketName(code) {
    if (state.lang === "en") return MARKET_EN[code] || code;
    return global.MARKET_NAMES && global.MARKET_NAMES[code] ? global.MARKET_NAMES[code] : code;
  }

  function tagLabel(tag) {
    if (state.lang === "en") return TAG_EN[tag] || tag;
    const map = { hiring: "招聘", expansion: "扩张", visa: "签证", comp: "薪酬", cn: "中国", peer: "对标" };
    return map[tag] || tag;
  }

  function relationLabel(zh) {
    if (state.lang === "en") return RELATION_EN[zh] || zh;
    return zh;
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function applyChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t(UI.pageTitle);
    setText("ui-subtitle", t(UI.subtitle));
    setText("ui-intro", t(UI.intro));
    setText("ui-live", t(UI.live));
    setText("ui-badge-peers", t(UI.peers));
    setText("ui-stat-roles-label", t(UI.statRoles));
    setText("ui-stat-roles-sub", t(UI.statRolesSub));
    setText("ui-stat-cn-label", t(UI.statCn));
    setText("ui-stat-cn-sub", t(UI.statCnSub));
    setText("ui-stat-hiring-label", t(UI.statHiring));
    setText("ui-stat-hiring-sub", t(UI.statHiringSub));
    setText("ui-stat-comp-label", t(UI.statComp));
    setText("ui-stat-comp-sub", t(UI.statCompSub));
    setText("ui-stat-visa-label", t(UI.statVisa));
    setText("ui-stat-visa-sub", t(UI.statVisaSub));
    setText("ui-legend-hiring", t(UI.legendHiring));
    setText("ui-legend-expansion", t(UI.legendExpansion));
    setText("ui-legend-visa", t(UI.legendVisa));
    setText("ui-legend-comp", t(UI.legendComp));
    setText("ui-legend-cn", t(UI.legendCn));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.searchPh);
    setText("ui-tab-overview", t(UI.tabOverview));
    setText("ui-tab-china", t(UI.tabChina));
    setText("ui-tab-roles", t(UI.tabRoles));
    setText("ui-tab-compensation", t(UI.tabComp));
    setText("ui-tab-matrix", t(UI.tabMatrix));
    setText("ui-latest-updates", t(UI.latestUpdates));
    setText("ui-sorted-time", t(UI.sortedByTime));
    setText("ui-ta-focus", t(UI.taFocusTitle));
    setText("ui-ta-focus-body", t(UI.taFocusBody));
    setText("ui-visa-focus-title", t(UI.visaFocusTitle));
    setText("ui-china-h2", t(UI.chinaH2));
    setText("ui-roles-h2", t(UI.rolesH2));
    setText("ui-roles-badge", t(UI.rolesBadge));
    setText("ui-footer-note", t(UI.footerNote));
    setText("ui-footer-sources", t(UI.footerSources));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    setText("ui-hub-er", t(UI.hubErNews));
    setText("ui-hub-gov", t(UI.hubGov));
    setText("ui-comp-title", t(UI.compPanelTitle));
    setText("ui-comp-badge", t(UI.compPanelBadge));
    setText("ui-matrix-title", t(UI.matrixPanelTitle));
    ["thComp0", "thComp1", "thComp2", "thComp3", "thComp4", "thComp5", "thComp6", "thComp7", "thComp8"].forEach((id, i) => {
      setText(id, t(UI["thComp" + i]));
    });
    ["thMx0", "thMx1", "thMx2", "thMx3", "thMx4", "thMx5", "thMx6"].forEach((id, i) => {
      setText(id, t(UI["thMx" + i]));
    });
    const cf = document.getElementById("countryFilter");
    if (cf && cf.options[0]) cf.options[0].textContent = t(UI.filterCountry);
    const opts = [
      ["opt-hiring", UI.catHiring],
      ["opt-expansion", UI.catExpansion],
      ["opt-visa", UI.catVisa],
      ["opt-comp", UI.catComp],
      ["opt-cn", UI.catCn]
    ];
    const catf = document.getElementById("categoryFilter");
    if (catf && catf.options[0]) catf.options[0].textContent = state.lang === "en" ? "All categories" : "全部类别";
    opts.forEach(([id, label]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t(label);
    });
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    if (global.bootTalentApp) global.bootTalentApp();
    else if (global.applyFilters) global.applyFilters();
  }

  function init(opts) {
    document.getElementById("lang-switch")?.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      state.lang = btn.dataset.lang === "en" ? "en" : "zh";
      localStorage.setItem(KEY, state.lang);
      applyChrome();
      if (opts && opts.onLanguageChange) opts.onLanguageChange();
    });
    applyChrome();
  }

  global.MonitorLang = { UI, t, itemField, marketName, tagLabel, relationLabel, init, get lang() { return state.lang; } };
})(window);