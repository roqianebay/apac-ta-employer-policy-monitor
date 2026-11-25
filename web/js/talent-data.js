window.TALENT_DATA_VERSION = "2026-11-25-v3";
window.MARKET_NAMES = { SG: "新加坡", AU: "澳大利亚", JP: "日本", KR: "韩国", CN: "中国大陆", TW: "台湾", HK: "香港", IN: "印度", MY: "马来西亚", ID: "印尼", VN: "越南", PH: "菲律宾" };

window.COMPANIES = [
  { id: "ebay", name: "eBay", sector: "Marketplace / E-commerce", color: "#0064d2", relation: "基准", markets: ["SG", "AU", "JP", "CN"], visa: "高", comp: "中上", taPriority: "高", hiringNote: "Seller Experience · GenAI" },
  { id: "amazon", name: "Amazon", sector: "E-commerce / Cloud", color: "#ff9900", relation: "直接竞品", markets: ["SG", "AU", "IN", "JP"], visa: "高", comp: "高", taPriority: "高", hiringNote: "AI/ML · Last-mile" },
  { id: "shopee", name: "Shopee (Sea)", sector: "SEA Marketplace", color: "#ee4d2d", relation: "区域竞品", markets: ["SG", "ID", "MY", "VN", "PH", "TW"], visa: "中", comp: "中高", taPriority: "高", hiringNote: "Fintech · Marketplace Eng" },
  { id: "lazada", name: "Lazada (Alibaba)", sector: "SEA E-commerce", color: "#0f146d", relation: "区域竞品", markets: ["SG", "ID", "MY", "TH", "VN"], visa: "中", comp: "中", taPriority: "中", hiringNote: "Logistics · Seller Tools" },
  { id: "alibaba", name: "Alibaba", sector: "E-commerce / Cloud", color: "#ff6a00", relation: "生态竞品", markets: ["CN", "SG", "HK"], visa: "低*", comp: "中高", taPriority: "中", hiringNote: "Cloud 国际 · 电商" },
  { id: "rakuten", name: "Rakuten", sector: "Marketplace / Fintech", color: "#bf0000", relation: "亚太对标", markets: ["JP", "SG", "TW"], visa: "中", comp: "中", taPriority: "中", hiringNote: "Fintech · Marketplace AI" },
  { id: "coupang", name: "Coupang", sector: "E-commerce / Logistics", color: "#0074e9", relation: "亚太对标", markets: ["KR", "TW"], visa: "中", comp: "高", taPriority: "中", hiringNote: "Fulfillment · Eng" },
  { id: "paypal", name: "PayPal", sector: "Payments", color: "#003087", relation: "Payments 竞品", markets: ["SG", "IN", "AU"], visa: "高", comp: "高", taPriority: "高", hiringNote: "Risk · Compliance" },
  { id: "stripe", name: "Stripe", sector: "Payments / Fintech", color: "#635bff", relation: "Payments 竞品", markets: ["SG", "AU", "JP"], visa: "高", comp: "很高", taPriority: "高", hiringNote: "Payments Infra" },
  { id: "google", name: "Google", sector: "Tech / Ads", color: "#4285f4", relation: "人才竞争", markets: ["SG", "AU", "IN", "JP", "TW"], visa: "高", comp: "很高", taPriority: "高", hiringNote: "Cloud · Search" },
  { id: "meta", name: "Meta", sector: "Social / Ads", color: "#0668E1", relation: "人才竞争", markets: ["SG", "AU", "IN"], visa: "高", comp: "很高", taPriority: "高", hiringNote: "Infra · Reality Labs" },
  { id: "microsoft", name: "Microsoft", sector: "Cloud / Enterprise", color: "#00a4ef", relation: "人才竞争", markets: ["SG", "AU", "IN", "JP", "KR"], visa: "高", comp: "很高", taPriority: "高", hiringNote: "Azure · Security" },
  { id: "tiktok", name: "TikTok / ByteDance", sector: "Social / E-commerce", color: "#fe2c55", relation: "Commerce 交叉", markets: ["SG", "AU", "JP", "MY", "ID", "CN"], visa: "中", comp: "高", taPriority: "高", hiringNote: "TikTok Shop · Trust" },
  { id: "jd", name: "JD.com", sector: "E-commerce / Logistics", color: "#e1251b", relation: "生态竞品", markets: ["CN", "SG"], visa: "低*", comp: "中", taPriority: "中", hiringNote: "物流科技 · 零售云" },
  { id: "grab", name: "Grab", sector: "Super App", color: "#00b14f", relation: "SEA 生态", markets: ["SG", "MY", "ID", "PH", "VN", "TH"], visa: "中", comp: "中高", taPriority: "中", hiringNote: "FinTech · Maps" },
  { id: "etsy", name: "Etsy", sector: "Marketplace", color: "#f56400", relation: "模式对标", markets: ["SG", "AU"], visa: "高", comp: "中高", taPriority: "中", hiringNote: "Trust · Search" }
];

/** Hiring-only intel — layoffs covered on ER News V2.0 */
window.UPDATES = [
  { date: "2026-09", company: "ByteDance", countries: ["CN", "SG"], tags: ["hiring", "cn", "comp"], title: "抖音电商 & 国际业务扩招", desc: "北京/上海加大算法与 Seller Ops；新加坡国际电商 Hub 增设 Trust & Safety 与本地化 PM 编制。", relation: "Commerce 交叉" },
  { date: "2026-08", company: "Shopee", countries: ["SG", "ID"], tags: ["hiring", "expansion"], title: "Shopee 电商核心岗位持续招聘", desc: "新加坡保留 Payments 与 Fintech Engineering HC；雅加达维持 Marketplace 与中台研发招聘。", relation: "区域竞品" },
  { date: "2026-07", company: "Stripe", countries: ["SG"], tags: ["expansion", "hiring", "visa"], title: "Stripe 扩大新加坡 Engineering Hub", desc: "新增 Payments Infrastructure 与 Risk 团队编制，EP/ONE Pass 友好，含 Relocation 支持。", relation: "Payments 竞品" },
  { date: "2026-07", company: "Amazon", countries: ["AU", "IN", "SG"], tags: ["hiring", "expansion"], title: "Amazon APAC AI/物流岗位扩招", desc: "AWS ML、Last-mile 与 Retail Tech 在 AU/SG/IN 开放 Senior 与 Staff 级别职位。", relation: "直接竞品" },
  { date: "2026-06", company: "TikTok", countries: ["SG", "MY"], tags: ["expansion", "visa", "comp", "hiring"], title: "TikTok Shop APAC 团队扩张", desc: "吉隆坡与新加坡增设 Seller Ops、Supply Chain Analytics；提供 EP，Total Comp 上调约 8–12%。", relation: "Commerce 交叉" },
  { date: "2026-06", company: "PayPal", countries: ["SG", "IN"], tags: ["comp", "hiring"], title: "PayPal APAC 薪酬 band 调整", desc: "FY26 SG/AU Senior IC band 上调 5–7%，RSU refresh；Bangalore Risk 岗位竞争加剧。", relation: "Payments 竞品" },
  { date: "2026-05", company: "Rakuten", countries: ["JP"], tags: ["expansion", "hiring"], title: "Rakuten Fintech / Marketplace AI 招聘", desc: "东京加大 Fintech 与 Marketplace AI 投入，Engineering 与 Data Science 岗位开放。", relation: "亚太对标" },
  { date: "2026-05", company: "Google", countries: ["SG", "IN"], tags: ["hiring", "visa", "comp"], title: "Google APAC Cloud & Search 持续招聘", desc: "新加坡 Regional Hub 签证配额稳定；印度 Campus + Lateral 大规模招聘。", relation: "人才竞争" },
  { date: "2026-04", company: "Lazada", countries: ["SG", "ID"], tags: ["hiring"], title: "Lazada Logistics & Seller Tools 招聘", desc: "保留履约网络与 Seller Tools Engineering 编制，雅加达与 SG 同步开放。", relation: "区域竞品" },
  { date: "2026-04", company: "Coupang", countries: ["KR", "TW"], tags: ["expansion", "comp", "hiring"], title: "Coupang 台湾物流中心扩建招聘", desc: "台北周边 FC 带动 Engineering 与 Ops 扩招，韩籍外派与本地 hire 并行。", relation: "亚太对标" },
  { date: "2026-03", company: "Meta", countries: ["SG"], tags: ["hiring", "visa"], title: "Meta SG Infra 岗位回暖", desc: "2026 Q1 部分 APAC Infra 职位 reopen，EP sponsorship 恢复至 2023 年前约 70%。", relation: "人才竞争" },
  { date: "2026-03", company: "eBay", countries: ["SG", "AU"], tags: ["comp", "hiring"], title: "eBay APAC 2026 薪酬 review", desc: "SG/AU Engineering & Product band +3–5%，重点 Seller Experience 与 GenAI 岗位。", relation: "基准" },
  { date: "2026-02", company: "Alibaba", countries: ["SG", "CN"], tags: ["expansion", "visa", "cn"], title: "Alibaba Cloud 国际总部（SG）& 杭州研发中心", desc: "Cloud 国际业务在 SG 增编；杭州/北京电商中台与 AI 应用组持续招聘。", relation: "生态竞品" },
  { date: "2026-02", company: "JD.com", countries: ["CN"], tags: ["hiring", "cn"], title: "京东物流科技 & 零售云扩招", desc: "北京/宿迁物流科技岗位开放，零售云与供应链数字化团队 HC 增加。", relation: "生态竞品" },
  { date: "2026-01", company: "Microsoft", countries: ["AU", "IN", "JP"], tags: ["hiring", "comp"], title: "Microsoft Azure & Security APAC 招聘", desc: "AU/IN/JP 扩招 Azure、Security 与 Copilot 相关工程岗位，RSU 政策具竞争力。", relation: "人才竞争" },
  { date: "2025-12", company: "Grab", countries: ["SG", "MY"], tags: ["comp", "hiring"], title: "Grab 2026 福利包升级扩招", desc: "mental health、co-working stipend；Engineering 总包 SG +6%，同步 Maps/FinServ 招聘。", relation: "SEA 生态" }
];

window.CN_MARKET = [
  { company: "阿里巴巴", hubs: "杭州 · 北京 · 新加坡（Cloud 国际）", tags: ["e-commerce", "cloud", "ai"], roles: ["国际云解决方案架构师", "淘宝/天猫推荐算法 Engineer", "跨境商家运营（APAC）", "蚂蚁国际合规科技 PM"], notes: "社招以 P6–P8 / 专家岗为主；杭州总部 HC 相对充足，新加坡 Cloud 国际需 MOM 配额。" },
  { company: "字节跳动", hubs: "北京 · 上海 · 新加坡", tags: ["commerce", "ads", "content"], roles: ["抖音电商履约与供应链算法", "TikTok Shop 本地化 PM（SEA）", "Trust & Safety（国际）", "广告推荐 ML Engineer"], notes: "国际业务岗位多要求英文；部分岗位提供 relocation 至 SG。" },
  { company: "腾讯", hubs: "深圳 · 上海 · 香港", tags: ["gaming", "cloud", "fintech"], roles: ["腾讯云行业解决方案", "微信支付跨境产品经理", "IEG 海外发行技术", "企业微信国际化"], notes: "深圳总部研发为主；跨境与金融岗位英语要求较高。" },
  { company: "京东", hubs: "北京 · 宿迁 · 上海", tags: ["logistics", "retail", "tech"], roles: ["物流科技研发（WMS/TMS）", "零售云架构师", "采销数字化产品", "工业供应链算法"], notes: "物流与供应链技术岗位增长；总部+区域研发中心并行招聘。" },
  { company: "美团", hubs: "北京 · 上海", tags: ["local services", "delivery", "ai"], roles: ["即时零售算法", "Keeta 国际化运营", "无人机/自动配送研发", "企业效能平台"], notes: "Keeta 与国际化业务单独编制；算法岗竞争激烈。" },
  { company: "拼多多 / Temu", hubs: "上海 · 广州", tags: ["cross-border", "supply chain"], roles: ["跨境供应链优化", "Temu 欧美/东南亚本地化运营", "平台治理与风控", "搜索与推荐"], notes: "Temu 扩张带动跨境职能；加班与节奏因团队差异大。" },
  { company: "小红书", hubs: "上海", tags: ["social", "commerce"], roles: ["电商交易&履约产品", "社区推荐算法", "商业化广告策略", "国际化内容增长"], notes: "上海集中；商业化与电商交叉岗位增加。" }
];

window.OPEN_ROLES = [
  { company: "Stripe", market: "SG", level: "Senior IC", title: "Senior Backend Engineer, Payments", function: "Engineering", tags: ["hiring", "visa"], posted: "2026-08", note: "Payments Infrastructure · EP/ONE Pass" },
  { company: "Google", market: "SG", level: "Senior+", title: "Senior SWE, Cloud AI", function: "Engineering", tags: ["hiring", "visa"], posted: "2026-07", note: "Vertex AI / Infra" },
  { company: "Amazon", market: "IN", level: "SDE III+", title: "SDE III, AWS ML", function: "Engineering", tags: ["hiring"], posted: "2026-07", note: "Bangalore / Hyderabad" },
  { company: "PayPal", market: "SG", level: "Senior IC", title: "Senior Engineer, Risk", function: "Engineering", tags: ["hiring", "comp"], posted: "2026-06", note: "Risk & Compliance Tech" },
  { company: "TikTok", market: "MY", level: "Manager", title: "Seller Ops Lead, TikTok Shop", function: "Operations", tags: ["hiring", "expansion"], posted: "2026-06", note: "Kuala Lumpur" },
  { company: "eBay", market: "SG", level: "Senior IC", title: "Senior Engineer, Seller Experience", function: "Engineering", tags: ["hiring", "comp"], posted: "2026-03", note: "GenAI adjacent squads" },
  { company: "Shopee", market: "ID", level: "Senior IC", title: "Senior Engineer, Marketplace", function: "Engineering", tags: ["hiring"], posted: "2026-08", note: "Jakarta Tech Center" },
  { company: "Meta", market: "SG", level: "Senior IC", title: "Infrastructure Engineer", function: "Engineering", tags: ["hiring", "visa"], posted: "2026-03", note: "Infra rebound" },
  { company: "Microsoft", market: "AU", level: "Senior IC", title: "Senior SDE, Azure Security", function: "Engineering", tags: ["hiring"], posted: "2026-01", note: "Sydney / Melbourne" },
  { company: "Coupang", market: "TW", level: "IC–Manager", title: "Fulfillment Systems Engineer", function: "Engineering", tags: ["hiring", "expansion"], posted: "2026-04", note: "Taipei metro FC" },
  { company: "Alibaba", market: "CN", level: "P7+", title: "Cloud 解决方案架构师", function: "Pre-sales / SA", tags: ["hiring", "cn"], posted: "2026-02", note: "杭州/北京" },
  { company: "ByteDance", market: "CN", level: "2-1+", title: "抖音电商推荐算法工程师", function: "Engineering", tags: ["hiring", "cn"], posted: "2026-09", note: "北京" },
  { company: "Grab", market: "SG", level: "Senior IC", title: "Senior Engineer, FinTech", function: "Engineering", tags: ["hiring", "comp"], posted: "2025-12", note: "Maps + FinServ" },
  { company: "Lazada", market: "SG", level: "Senior IC", title: "Senior Engineer, Seller Tools", function: "Engineering", tags: ["hiring"], posted: "2026-04", note: "Seller experience" },
  { company: "Rakuten", market: "JP", level: "Senior IC", title: "Backend Engineer, Fintech", function: "Engineering", tags: ["hiring"], posted: "2026-05", note: "Tokyo hybrid" }
];

window.COMP_DATA = [
  { company: "Stripe", market: "SG", role: "Senior Backend Eng", base: 140, bonus: "10%", equity: 80, total: 230, trend: "up", benefits: "Top equity, WFH stipend" },
  { company: "Google", market: "SG", role: "Senior SWE", base: 130, bonus: "15%", equity: 100, total: 280, trend: "up", benefits: "Full perks package" },
  { company: "Amazon", market: "SG", role: "SDE III", base: 120, bonus: "Sign-on", equity: 60, total: 210, trend: "flat", benefits: "ESPP, parental 16w" },
  { company: "PayPal", market: "SG", role: "Senior Eng", base: 110, bonus: "12%", equity: 45, total: 185, trend: "up", benefits: "Flexible PTO" },
  { company: "Shopee", market: "SG", role: "Senior Eng", base: 95, bonus: "2–4 mo", equity: 30, total: 155, trend: "flat", benefits: "Medical, shuttle" },
  { company: "eBay", market: "SG", role: "Senior Eng", base: 100, bonus: "10%", equity: 35, total: 165, trend: "up", benefits: "Hybrid, ESPP" },
  { company: "TikTok", market: "SG", role: "Senior Eng", base: 105, bonus: "3–6 mo", equity: 40, total: 175, trend: "up", benefits: "Hybrid" },
  { company: "Meta", market: "SG", role: "E5 Eng", base: 125, bonus: "10%", equity: 90, total: 260, trend: "up", benefits: "Premium medical" },
  { company: "Microsoft", market: "AU", role: "Senior SDE", base: 115, bonus: "10–20%", equity: 55, total: 195, trend: "flat", benefits: "ESPP, leave buyout" },
  { company: "Rakuten", market: "JP", role: "Senior Eng", base: 85, bonus: "2 mo", equity: 15, total: 110, trend: "flat", benefits: "Standard JP benefits" },
  { company: "Coupang", market: "KR", role: "Senior Eng", base: 90, bonus: "Performance", equity: 50, total: 180, trend: "up", benefits: "Coupang perks" },
  { company: "Amazon", market: "IN", role: "SDE III", base: 45, bonus: "Sign-on", equity: 35, total: 95, trend: "up", benefits: "ESPP" },
  { company: "Google", market: "IN", role: "Senior SWE", base: 55, bonus: "15%", equity: 45, total: 115, trend: "up", benefits: "Full perks" },
  { company: "Alibaba", market: "CN", role: "Senior Eng (P7)", base: 55, bonus: "年终奖", equity: 25, total: 95, trend: "flat", benefits: "标准五险一金" },
  { company: "ByteDance", market: "CN", role: "2-1 Engineer", base: 50, bonus: "绩效", equity: 35, total: 100, trend: "up", benefits: "租房/餐补" },
  { company: "Etsy", market: "AU", role: "Senior Eng", base: 105, bonus: "10%", equity: 40, total: 170, trend: "flat", benefits: "Remote-first" }
];

window.VISA_SNIPPETS = [
  { market: "SG", flag: "🇸🇬", text: "Stripe/Google/MS：EP、ONE Pass；Shopee/Lazada：Senior+ 优先 sponsorship。" },
  { market: "AU", flag: "🇦🇺", text: "482 TSS → 186 常见；eBay/Etsy Remote-hybrid + sponsorship。" },
  { market: "CN", flag: "🇨🇳", text: "外籍员工：工作许可证 + 居留；互联网大厂以外籍专家/管理层为主。" }
];