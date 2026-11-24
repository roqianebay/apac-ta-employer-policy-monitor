window.__applyMonitorEn = function () {
  if (!window.UPDATES) return;
  const EN = [
    { titleEn: "Shopee continues regional team optimisation", descEn: "SEA Group reportedly streamlining non-core functions in 2026; some engineering teams affected while e-commerce and fintech core hiring continues. Singapore hub keeps tech recruiting.", relationEn: "Regional peer" },
    { titleEn: "Stripe expands Singapore engineering hub", descEn: "New headcount in payments infrastructure and risk; EP/ONE Pass friendly with relocation including visa and temporary housing.", relationEn: "Payments peer" },
    { titleEn: "Amazon APAC structural adjustment", descEn: "Layoffs in parts of AWS/Retail while AU/SG ramp AI/ML and last-mile logistics; Bangalore still hiring.", relationEn: "Direct peer" },
    { titleEn: "TikTok Shop APAC team expansion", descEn: "KL and SG add Seller Ops and Trust & Safety roles with EP support; total comp up ~8–12%.", relationEn: "Commerce crossover" },
    { titleEn: "PayPal APAC comp band refresh", descEn: "FY2026 SG/AU senior IC bands up 5–7% with RSU refresh; Bangalore competition intensifies.", relationEn: "Payments peer" },
    { titleEn: "Rakuten restructures mobile / fintech", descEn: "Hundreds of mobile job cuts with investment shifted to fintech and marketplace AI; Tokyo hybrid 3/2.", relationEn: "APAC benchmark" },
    { titleEn: "Google APAC cloud & search hiring continues", descEn: "Singapore regional hub with stable tech visa quota; India large campus + lateral hiring at top of market comp.", relationEn: "Talent competitor" },
    { titleEn: "Lazada trims middle management", descEn: "Post-Alibaba integration removes duplicate roles; logistics and seller-tools engineering still hiring.", relationEn: "Regional peer" },
    { titleEn: "Coupang expands Taiwan fulfillment", descEn: "New fulfilment centre near Taipei with eng and ops hiring; Korean expats and local hires.", relationEn: "APAC benchmark" },
    { titleEn: "Meta SG infra hiring modest rebound", descEn: "Q1 2026 partial reopen of APAC infra roles; EP sponsorship ~70% of pre-2023 levels.", relationEn: "Talent competitor" },
    { titleEn: "eBay APAC 2026 comp review done", descEn: "SG/AU eng/product bands +3–5% with focus on seller experience and GenAI roles.", relationEn: "Baseline employer" },
    { titleEn: "Alibaba Cloud international HQ (SG) hiring", descEn: "International cloud hiring continues; foreign hires need MOM quota, sponsorship case-by-case.", relationEn: "Ecosystem peer" },
    { titleEn: "Microsoft FY26 APAC fine-tuning", descEn: "Some sales/support roles cut; Azure & security eng hiring in AU/IN; RSU policy competitive.", relationEn: "Talent competitor" },
    { titleEn: "Grab 2026 benefits upgrade", descEn: "Mental health and co-working stipends added; SG eng total comp +6% vs Shopee/GoTo.", relationEn: "SEA ecosystem" },
    { titleEn: "Etsy Sydney small engineering satellite", descEn: "Remote-first with Sydney hub for trust & safety and search; supports TSS 482 visas (AU).", relationEn: "Model benchmark" }
  ];
  window.UPDATES.forEach((u, i) => Object.assign(u, EN[i] || {}));
};