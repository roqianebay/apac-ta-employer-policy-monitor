(function (global) {
  const KEY = "apac-talent-employer-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC Talent Employer Policy Monitor", "APAC Talent Employer Policy Monitor"),
    subtitle: L("亚太区人才招聘 · 竞品雇主动态 · 签证 · 薪酬福利追踪", "APAC talent hiring · peer employers · visas · comp & benefits"),
    live: L("监测中", "Monitoring"),
    updated: L("更新", "Updated"),
    peers: L("覆盖 18 家对标公司", "18 benchmark companies"),
    statLayoffs: L("近期裁员动态", "Recent layoffs"),
    statLayoffsSub: L("过去 12 个月 · APAC 相关", "Last 12 months · APAC-related"),
    statExpansion: L("APAC 扩张 / 新办公室", "APAC expansion / new offices"),
    statExpansionSub: L("含 Hub、Regional HQ", "Hubs & regional HQs"),
    statVisa: L("签证 Sponsorship 友好", "Visa sponsorship friendly"),
    statVisaSub: L("主动提供工签支持", "Active work-visa support"),
    statComp: L("薪酬竞争力上调", "Comp competitiveness up"),
    statCompSub: L("2025–2026 调薪 / RSU 调整", "2025–2026 pay / RSU shifts"),
    statJobs: L("开放 TA 相关岗位", "Open TA-related roles"),
    statJobsSub: L("Engineering · Product · Ops", "Engineering · Product · Ops"),
    legendPeer: L("同行业对标", "Peer benchmark"),
    legendLayoff: L("裁员", "Layoff"),
    legendExpansion: L("扩张", "Expansion"),
    legendVisa: L("签证政策", "Visa"),
    legendComp: L("薪酬福利", "Comp & benefits"),
    searchPh: L("搜索公司、国家、关键词...", "Search company, country, keyword…"),
    filterCountry: L("全部国家/地区", "All countries"),
    filterCategory: L("全部类别", "All categories"),
    catLayoff: L("裁员", "Layoff"),
    catExpansion: L("扩张", "Expansion"),
    catVisa: L("签证", "Visa"),
    catComp: L("薪酬福利", "Comp & benefits"),
    catHiring: L("招聘", "Hiring"),
    tabOverview: L("总览动态", "Overview"),
    tabCompanies: L("公司档案", "Company profiles"),
    tabVisa: L("签证政策", "Visa policies"),
    tabComp: L("薪酬对标", "Comp benchmarks"),
    tabMatrix: L("竞品矩阵", "Peer matrix"),
    latestUpdates: L("最新雇主动态", "Latest employer moves"),
    sortedByTime: L("按时间排序", "By date"),
    hotMarkets: L("APAC 热点市场", "APAC hot markets"),
    mLayoff: L("裁员", "Layoffs"),
    mExpansion: L("扩张", "Expansion"),
    mVisa: L("签证", "Visa"),
    mSalary: L("薪酬", "Pay"),
    mBenefits: L("福利", "Benefits"),
    footerNote: L("APAC Talent Acquisition · 内部参考 · 数据为示意，请结合官方来源核实", "APAC talent acquisition · internal · illustrative data — verify sources"),
    footer: L("仅供内部人才情报参考 · 数据为人工整理", "Internal TA intelligence · manually curated"),
    hubIndex: L("看板总索引", "Dashboard index"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    hubErNews: L("ER News V2.0", "ER News V2.0"),
    hubGov: L("政府政策 Monitor", "Gov policy monitor"),
    footerSources: L("建议数据源：公司 IR、LinkedIn、Glassdoor、各国移民局、TechCrunch / Reuters", "Sources: company IR, LinkedIn, Glassdoor, immigration sites, TechCrunch / Reuters"),
    compPanelTitle: L("APAC 薪酬福利对标（Senior IC / Manager 级别 · 示意数据）", "APAC comp benchmarks (Senior IC / Manager · illustrative)"),
    compPanelBadge: L("USD 等值 · 年度 Total Comp", "USD equivalent · annual total comp"),
    matrixPanelTitle: L("竞品 / 人才相通公司矩阵", "Peer / talent-overlap matrix"),
    thComp0: L("公司", "Company"),
    thComp1: L("市场", "Market"),
    thComp2: L("角色类型", "Role"),
    thComp3: L("Base (USD)", "Base (USD)"),
    thComp4: L("Bonus", "Bonus"),
    thComp5: L("Equity/RSU", "Equity/RSU"),
    thComp6: L("Total Comp", "Total comp"),
    thComp7: L("趋势", "Trend"),
    thComp8: L("福利亮点", "Benefits highlight"),
    thMx0: L("公司", "Company"),
    thMx1: L("与 eBay 关系", "Relation to eBay"),
    thMx2: L("APAC 重点市场", "APAC focus markets"),
    thMx3: L("近期动态", "Recent move"),
    thMx4: L("签证友好度", "Visa friendliness"),
    thMx5: L("薪酬竞争力", "Comp level"),
    thMx6: L("TA 优先级", "TA priority")
  };

  const RELATION_EN = {
    "基准": "Baseline",
    "直接竞品": "Direct peer",
    "区域竞品": "Regional peer",
    "生态竞品": "Ecosystem peer",
    "亚太对标": "APAC benchmark",
    "模式对标": "Model benchmark",
    "Payments 竞品": "Payments peer",
    "人才竞争": "Talent competitor",
    "Commerce 交叉": "Commerce crossover",
    "Marketplace 对标": "Marketplace benchmark",
    "SEA 生态": "SEA ecosystem"
  };

  const MARKET_EN = {
    SG: "Singapore",
    AU: "Australia",
    JP: "Japan",
    KR: "Korea",
    CN: "Mainland China",
    TW: "Taiwan",
    HK: "Hong Kong",
    IN: "India",
    MY: "Malaysia",
    ID: "Indonesia",
    VN: "Vietnam",
    PH: "Philippines"
  };

  const TAG_EN = {
    layoff: "Layoff",
    expansion: "Expansion",
    visa: "Visa",
    comp: "Comp",
    hiring: "Hiring",
    peer: "Peer"
  };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh", onChange: null };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item[enKey]) return item[enKey];
    return item[key];
  }

  function marketName(code) {
    if (state.lang === "en") return MARKET_EN[code] || code;
    return global.MARKET_NAMES && global.MARKET_NAMES[code] ? global.MARKET_NAMES[code] : code;
  }

  function tagLabel(tag) {
    if (state.lang === "en") return TAG_EN[tag] || tag;
    const map = { layoff: "裁员", expansion: "扩张", visa: "签证", comp: "薪酬", hiring: "招聘", peer: "对标" };
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
    setText("ui-live", t(UI.live));
    setText("ui-badge-peers", t(UI.peers));
    setText("ui-stat-layoffs-label", t(UI.statLayoffs));
    setText("ui-stat-layoffs-sub", t(UI.statLayoffsSub));
    setText("ui-stat-expansion-label", t(UI.statExpansion));
    setText("ui-stat-expansion-sub", t(UI.statExpansionSub));
    setText("ui-stat-visa-label", t(UI.statVisa));
    setText("ui-stat-visa-sub", t(UI.statVisaSub));
    setText("ui-stat-comp-label", t(UI.statComp));
    setText("ui-stat-comp-sub", t(UI.statCompSub));
    setText("ui-stat-jobs-label", t(UI.statJobs));
    setText("ui-stat-jobs-sub", t(UI.statJobsSub));
    setText("ui-legend-peer", t(UI.legendPeer));
    setText("ui-legend-layoff", t(UI.legendLayoff));
    setText("ui-legend-expansion", t(UI.legendExpansion));
    setText("ui-legend-visa", t(UI.legendVisa));
    setText("ui-legend-comp", t(UI.legendComp));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.searchPh);
    setText("ui-tab-overview", t(UI.tabOverview));
    setText("ui-tab-companies", t(UI.tabCompanies));
    setText("ui-tab-visa", t(UI.tabVisa));
    setText("ui-tab-compensation", t(UI.tabComp));
    setText("ui-tab-matrix", t(UI.tabMatrix));
    setText("ui-latest-updates", t(UI.latestUpdates));
    setText("ui-sorted-time", t(UI.sortedByTime));
    setText("ui-hot-markets", t(UI.hotMarkets));
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
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    const cf = document.getElementById("countryFilter");
    if (cf && cf.options[0]) cf.options[0].textContent = t(UI.filterCountry);
    const cat = document.getElementById("categoryFilter");
    if (cat) {
      const labels = ["", UI.catLayoff, UI.catExpansion, UI.catVisa, UI.catComp, UI.catHiring];
      [...cat.options].forEach((o, i) => {
        if (labels[i]) o.textContent = t(labels[i]);
      });
    }
    if (global.applyFilters) global.applyFilters();
  }

  function init(opts) {
    state.onChange = opts && opts.onLanguageChange;
    const sw = document.getElementById("lang-switch");
    if (sw) {
      sw.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-lang]");
        if (!btn) return;
        state.lang = btn.dataset.lang === "en" ? "en" : "zh";
        localStorage.setItem(KEY, state.lang);
        applyChrome();
        if (state.onChange) state.onChange();
      });
    }
    applyChrome();
  }

  global.MonitorLang = { UI, t, itemField, marketName, tagLabel, relationLabel, init, get lang() { return state.lang; } };
})(window);