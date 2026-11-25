window.__applyMonitorEn = function () {
  if (!window.UPDATES) return;

  const UPDATE_EN = [
    { titleEn: "Douyin commerce & international hiring push", descEn: "More algo and seller ops in Beijing/Shanghai; Singapore international commerce hub adds Trust & Safety and localization PM.", relationEn: "Commerce crossover" },
    { titleEn: "Shopee core e-commerce roles still hiring", descEn: "Singapore keeps payments/fintech engineering HC; Jakarta maintains marketplace and platform engineering.", relationEn: "Regional peer" },
    { titleEn: "Stripe expands Singapore engineering hub", descEn: "New payments infrastructure and risk headcount; EP/ONE Pass friendly with relocation.", relationEn: "Payments peer" },
    { titleEn: "Amazon APAC AI/logistics hiring surge", descEn: "AWS ML, last-mile and retail tech hiring senior/staff in AU/SG/IN.", relationEn: "Direct peer" },
    { titleEn: "TikTok Shop APAC team expansion", descEn: "KL and SG add seller ops and supply chain analytics; EP support; total comp up ~8–12%.", relationEn: "Commerce crossover" },
    { titleEn: "PayPal APAC comp band refresh", descEn: "FY26 SG/AU senior IC bands +5–7% with RSU refresh; Bangalore risk roles hot.", relationEn: "Payments peer" },
    { titleEn: "Rakuten fintech/marketplace AI hiring", descEn: "Tokyo investing in fintech and marketplace AI; engineering and data science openings.", relationEn: "APAC benchmark" },
    { titleEn: "Google APAC cloud & search hiring continues", descEn: "Stable visa quota in Singapore hub; large India campus + lateral hiring.", relationEn: "Talent competitor" },
    { titleEn: "Lazada logistics & seller tools hiring", descEn: "Fulfillment network and seller tools engineering in Jakarta and SG.", relationEn: "Regional peer" },
    { titleEn: "Coupang Taiwan FC expansion hiring", descEn: "New Taipei-metro fulfillment centre drives eng and ops hiring.", relationEn: "APAC benchmark" },
    { titleEn: "Meta SG infra hiring modest rebound", descEn: "Partial APAC infra reopen in Q1 2026; EP sponsorship ~70% of pre-2023.", relationEn: "Talent competitor" },
    { titleEn: "eBay APAC 2026 comp review", descEn: "SG/AU eng/product bands +3–5% focused on seller experience and GenAI.", relationEn: "Baseline" },
    { titleEn: "Alibaba Cloud intl HQ (SG) & Hangzhou R&D", descEn: "International cloud hiring in SG; Hangzhou/Beijing commerce platform and AI apps.", relationEn: "Ecosystem peer" },
    { titleEn: "JD logistics tech & retail cloud hiring", descEn: "Logistics tech openings in Beijing/Suquian; retail cloud and supply chain digital teams grow.", relationEn: "Ecosystem peer" },
    { titleEn: "Microsoft Azure & security APAC hiring", descEn: "AU/IN/JP hire Azure, security and Copilot-related engineering.", relationEn: "Talent competitor" },
    { titleEn: "Grab 2026 benefits upgrade & hiring", descEn: "Mental health and co-working stipends; SG engineering total comp +6%; Maps/FinServ hiring.", relationEn: "SEA ecosystem" }
  ];
  window.UPDATES.forEach((u, i) => Object.assign(u, UPDATE_EN[i] || {}));

  const CN_EN = [
    { notesEn: "Social hiring P6–P8/specialist; Hangzhou HQ has more HC; Singapore cloud intl needs MOM quota." },
    { notesEn: "Intl roles often need English; some Singapore relocation." },
    { notesEn: "Shenzhen R&D heavy; cross-border and finance roles need strong English." },
    { notesEn: "Logistics tech growing; HQ and regional centres." },
    { notesEn: "Keeta and intl on separate headcount; algo roles competitive." },
    { notesEn: "Temu drives cross-border roles; pace varies by team." },
    { notesEn: "Shanghai-centric; commerce and monetization crossover roles up." }
  ];
  (window.CN_MARKET || []).forEach((c, i) => Object.assign(c, CN_EN[i] || {}));

  const VISA_EN = [
    { textEn: "Stripe/Google/MS: EP, ONE Pass; Shopee/Lazada: senior+ sponsorship priority." },
    { textEn: "482 TSS → 186 common; eBay remote-hybrid + sponsorship." },
    { textEn: "Foreign hires: work permit + residence; internet giants focus on expert/management visas." }
  ];
  (window.VISA_SNIPPETS || []).forEach((v, i) => Object.assign(v, VISA_EN[i] || {}));

  const ROLE_EN = [
    { noteEn: "Payments infrastructure · EP/ONE Pass" },
    { noteEn: "Vertex AI / Infra" },
    { noteEn: "Bangalore / Hyderabad" },
    { noteEn: "Risk & compliance tech" },
    { noteEn: "Kuala Lumpur" },
    { noteEn: "GenAI-adjacent squads" },
    { noteEn: "Jakarta tech center" },
    { noteEn: "Infra rebound" },
    { noteEn: "Sydney / Melbourne" },
    { noteEn: "Taipei metro FC" },
    { noteEn: "Hangzhou/Beijing" },
    { noteEn: "Beijing" },
    { noteEn: "Maps + FinServ" },
    { noteEn: "Seller experience" },
    { noteEn: "Tokyo hybrid" }
  ];
  (window.OPEN_ROLES || []).forEach((r, i) => Object.assign(r, ROLE_EN[i] || {}));
};