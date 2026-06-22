/* ═══════════════════════════════════════════════════════
   SPSS OBSERVATORY DATA — v0.2
   SPSS = Spatial Physical Social Systems
   Metrics restructured into 3 SPSS-aligned layer indices
   ═══════════════════════════════════════════════════════ */

export const COUNTRIES = [
  // code, name, lat, lng, Physical(energy,connect,device), Social(lang,youth,community), Spatial(compute,hubs,aiTalent)
  { code:'MA',name:'Morocco',lat:31.8,lng:-7.1, energy:88,connect:84,device:92, lang:13,youth:26,community:55, compute:45,hubs:12,aiTalent:35 },
  { code:'DZ',name:'Algeria',lat:28.0,lng:1.7, energy:90,connect:71,device:85, lang:18,youth:28,community:40, compute:30,hubs:6,aiTalent:20 },
  { code:'TN',name:'Tunisia',lat:33.9,lng:9.5, energy:87,connect:72,device:90, lang:8,youth:23,community:50, compute:40,hubs:8,aiTalent:30 },
  { code:'LY',name:'Libya',lat:26.3,lng:17.2, energy:72,connect:22,device:65, lang:9,youth:27,community:30, compute:15,hubs:2,aiTalent:10 },
  { code:'EG',name:'Egypt',lat:26.8,lng:30.8, energy:90,connect:72,device:88, lang:27,youth:34,community:50, compute:55,hubs:22,aiTalent:45 },
  { code:'MR',name:'Mauritania',lat:21.0,lng:-10.9, energy:58,connect:20,device:55, lang:7,youth:32,community:45, compute:10,hubs:2,aiTalent:5 },
  { code:'ML',name:'Mali',lat:17.6,lng:-4.0, energy:62,connect:33,device:60, lang:66,youth:34,community:65, compute:12,hubs:4,aiTalent:8 },
  { code:'NE',name:'Niger',lat:17.6,lng:8.1, energy:50,connect:10,device:35, lang:21,youth:38,community:60, compute:5,hubs:2,aiTalent:3 },
  { code:'TD',name:'Chad',lat:15.5,lng:18.7, energy:42,connect:8,device:30, lang:131,youth:35,community:55, compute:5,hubs:1,aiTalent:2 },
  { code:'SD',name:'Sudan',lat:12.9,lng:30.2, energy:62,connect:30,device:50, lang:75,youth:33,community:50, compute:15,hubs:5,aiTalent:10 },
  { code:'SN',name:'Senegal',lat:14.5,lng:-14.5, energy:70,connect:46,device:72, lang:36,youth:32,community:60, compute:25,hubs:8,aiTalent:15 },
  { code:'GN',name:'Guinea',lat:9.9,lng:-11.4, energy:52,connect:23,device:50, lang:35,youth:33,community:55, compute:8,hubs:3,aiTalent:5 },
  { code:'BF',name:'Burkina Faso',lat:12.4,lng:-1.6, energy:48,connect:16,device:40, lang:70,youth:35,community:65, compute:8,hubs:3,aiTalent:5 },
  { code:'NG',name:'Nigeria',lat:9.1,lng:8.7, energy:55,connect:55,device:75, lang:527,youth:31,community:70, compute:45,hubs:85,aiTalent:40 },
  { code:'CM',name:'Cameroon',lat:7.4,lng:12.4, energy:62,connect:34,device:60, lang:280,youth:32,community:55, compute:18,hubs:6,aiTalent:12 },
  { code:'ET',name:'Ethiopia',lat:9.1,lng:40.5, energy:58,connect:25,device:45, lang:90,youth:33,community:60, compute:20,hubs:8,aiTalent:15 },
  { code:'CI',name:"Côte d'Ivoire",lat:7.5,lng:-5.5, energy:65,connect:36,device:68, lang:78,youth:31,community:55, compute:20,hubs:6,aiTalent:10 },
  { code:'GH',name:'Ghana',lat:7.9,lng:-1.0, energy:78,connect:53,device:80, lang:81,youth:30,community:60, compute:35,hubs:18,aiTalent:25 },
  { code:'CG',name:'Congo',lat:-0.2,lng:15.8, energy:52,connect:12,device:45, lang:63,youth:33,community:45, compute:10,hubs:3,aiTalent:5 },
  { code:'CD',name:'DR Congo',lat:-4.0,lng:21.8, energy:30,connect:17,device:35, lang:215,youth:34,community:60, compute:8,hubs:4,aiTalent:5 },
  { code:'UG',name:'Uganda',lat:1.4,lng:32.3, energy:50,connect:26,device:55, lang:43,youth:35,community:65, compute:22,hubs:12,aiTalent:15 },
  { code:'KE',name:'Kenya',lat:-0.0,lng:37.9, energy:78,connect:42,device:82, lang:68,youth:30,community:70, compute:50,hubs:50,aiTalent:40 },
  { code:'AO',name:'Angola',lat:-11.2,lng:17.9, energy:55,connect:20,device:50, lang:38,youth:34,community:40, compute:15,hubs:5,aiTalent:8 },
  { code:'ZM',name:'Zambia',lat:-13.1,lng:27.8, energy:55,connect:16,device:48, lang:46,youth:33,community:60, compute:12,hubs:5,aiTalent:8 },
  { code:'TZ',name:'Tanzania',lat:-6.4,lng:34.9, energy:52,connect:25,device:55, lang:126,youth:32,community:65, compute:18,hubs:10,aiTalent:12 },
  { code:'RW',name:'Rwanda',lat:-1.9,lng:29.9, energy:55,connect:30,device:60, lang:4,youth:31,community:70, compute:35,hubs:12,aiTalent:25 },
  { code:'MZ',name:'Mozambique',lat:-18.7,lng:35.5, energy:40,connect:10,device:35, lang:43,youth:33,community:50, compute:8,hubs:3,aiTalent:5 },
  { code:'NA',name:'Namibia',lat:-22.6,lng:17.1, energy:72,connect:53,device:70, lang:28,youth:28,community:45, compute:20,hubs:3,aiTalent:10 },
  { code:'BW',name:'Botswana',lat:-22.3,lng:24.7, energy:78,connect:47,device:75, lang:31,youth:27,community:45, compute:25,hubs:3,aiTalent:12 },
  { code:'ZW',name:'Zimbabwe',lat:-19.0,lng:29.2, energy:52,connect:35,device:55, lang:22,youth:31,community:50, compute:15,hubs:5,aiTalent:10 },
  { code:'ZA',name:'South Africa',lat:-30.6,lng:22.9, energy:82,connect:72,device:88, lang:36,youth:28,community:55, compute:65,hubs:45,aiTalent:55 },
];

/* ── LAYER METRICS ── */
export const LAYER_METRICS = {
  physical: {
    label: 'Physical Layer', color: '#ff6b6b',
    desc: 'Infrastructure: energy access, connectivity, and device availability.',
    sub: [
      { key: 'energy', label: 'Energy Access', weight: 0.40, unit: '%', src: 'IEA 2024 + solar irradiance' },
      { key: 'connect', label: 'Connectivity', weight: 0.35, unit: '%', src: 'GSMA 2025' },
      { key: 'device', label: 'Device Access', weight: 0.25, unit: '%', src: 'GSMA Mobile Economy 2025' },
    ]
  },
  social: {
    label: 'Social Layer', color: '#a78bfa',
    desc: 'Community structures: linguistic diversity, demographics, and organizational capacity.',
    sub: [
      { key: 'lang', label: 'Languages', weight: 0.35, unit: '', src: 'Ethnologue', isRaw: true },
      { key: 'youth', label: 'Youth Pop %', weight: 0.35, unit: '%', src: 'UN Population 2024' },
      { key: 'community', label: 'Community Org', weight: 0.30, unit: '/100', src: 'Estimated — cooperative traditions' },
    ]
  },
  spatial: {
    label: 'Spatial Layer', color: '#00e5ff',
    desc: 'Frontier tech readiness: compute access, innovation ecosystem, and AI talent.',
    sub: [
      { key: 'compute', label: 'Compute Access', weight: 0.40, unit: '/100', src: 'Estimated — cloud/edge proximity' },
      { key: 'hubs', label: 'Innovation Hubs', weight: 0.30, unit: '', src: 'AfriLabs 2025', isRaw: true },
      { key: 'aiTalent', label: 'AI Talent Index', weight: 0.30, unit: '/100', src: 'Estimated — researchers/programs' },
    ]
  },
} as const;

/* ═══════════════════════════════════════════════════════
   SPSS READINESS INDEX (SRI) — Scientific Formula v0.1
   SPSS = Spatial Physical Social Systems
   
   SRI = GM(P, S, Sp) × (1 + B) / 2 × 100
   
   GM  = Geometric Mean = (P × S × Sp)^(1/3)
   B   = Balance Factor  = 1 - CV(P, S, Sp)
   CV  = Coefficient of Variation = σ / μ
   
   Why geometric mean: if ANY layer = 0, SRI = 0.
   This encodes the SPSS thesis mathematically.
   
   Why balance factor: penalizes lopsided development.
   High Spatial + low Physical = techno-solutionism.
   ═══════════════════════════════════════════════════════ */

export function computeSRI(c: typeof COUNTRIES[0], energyWeight?: number) {
  // Normalize sub-indicators to 0-1
  const maxLang = 527; // Nigeria
  const maxHubs = 85;  // Nigeria

  const eW = energyWeight ?? 0.40;
  // Remaining weight distributed proportionally: connect gets 0.35/(0.35+0.25)=0.583, device gets 0.25/(0.35+0.25)=0.417 of remaining
  const remaining = 1 - eW;
  const cW = remaining * (0.35 / 0.60);
  const dW = remaining * (0.25 / 0.60);

  const P = eW * (c.energy / 100) + cW * (c.connect / 100) + dW * (c.device / 100);
  const S = 0.35 * Math.min(c.lang / maxLang, 1) + 0.35 * (c.youth / 40) + 0.30 * (c.community / 100);
  const Sp = 0.40 * (c.compute / 100) + 0.30 * Math.min(c.hubs / maxHubs, 1) + 0.30 * (c.aiTalent / 100);

  // Geometric mean
  const GM = Math.pow(Math.max(P, 0.001) * Math.max(S, 0.001) * Math.max(Sp, 0.001), 1 / 3);

  // Balance factor (1 - coefficient of variation)
  const mean = (P + S + Sp) / 3;
  const variance = ((P - mean) ** 2 + (S - mean) ** 2 + (Sp - mean) ** 2) / 3;
  const stdDev = Math.sqrt(variance);
  const CV = mean > 0 ? stdDev / mean : 0;
  const B = Math.max(0, 1 - CV);

  const SRI = GM * (1 + B) / 2 * 100;

  return {
    physical: Math.round(P * 100),
    social: Math.round(S * 100),
    spatial: Math.round(Sp * 100),
    balance: Math.round(B * 100),
    sri: Math.round(SRI),
    pRaw: P,
    sRaw: S,
    spRaw: Sp,
  };
}

/* ── RADAR PRESETS ── */
export const RADAR_PRESETS = [
  { name: 'Typical SV App', social: 15, physical: 10, spatial: 90, principles: 10, color: '#FF6B6B' },
  { name: 'M-Pesa', social: 75, physical: 80, spatial: 50, principles: 70, color: '#4ECDC4' },
  { name: 'Masakhane NLP', social: 85, physical: 60, spatial: 80, principles: 90, color: '#FFE66D' },
  { name: 'Zipline Drones', social: 60, physical: 70, spatial: 85, principles: 65, color: '#A78BFA' },
  { name: 'SPSS Exemplar', social: 95, physical: 90, spatial: 80, principles: 95, color: '#F7931E' },
];

/* ── RADAR D1 data (Social / Physical / Spatial, scale 0–10) ── */
export const RADAR_TAB_DATA: Record<string, [number, number, number]> = {
  'App': [6, 4, 3],
  'P-Mus': [7, 3, 5],
  'NLP': [5, 2, 8],
  'Drones': [4, 8, 6],
  'Exemplar': [9, 8, 9],
};

/* ── COUNTRY PROFILES ── */
export const COUNTRY_PROFILES: Record<string, {
  pop: number; hubs: number; connectivity: string;
  initiatives: string[]; domains: string[]; spssNote: string;
}> = {
  MA: { pop:37.8, hubs:12, connectivity:'4G dominant, 5G rollout', initiatives:['AI research programs','Smart agriculture initiatives','Digital transformation plans'], domains:['Agriculture','Energy'], spssNote:'Strong physical infrastructure suggests potential for SPSS-aligned deployment — but the framework would require testing whether community governance layers exist to match.' },
  EG: { pop:104.3, hubs:22, connectivity:'4G, 5G in metros', initiatives:['National digital strategy','University AI labs','Fintech ecosystem'], domains:['Finance','Healthcare'], spssNote:'Large population with significant urban-rural divide. An SPSS analysis would examine whether frontier tech reaches beyond metro centers and who governs the resulting data.' },
  NG: { pop:223.8, hubs:85, connectivity:'4G urban, 2G/3G rural', initiatives:['Fintech ecosystem','Innovation hubs','National AI strategy'], domains:['Finance','Healthcare','Language'], spssNote:'527 languages make this the most linguistically complex context on earth. Any SPSS deployment here would need to address language sovereignty as a first-order design constraint.' },
  KE: { pop:55.1, hubs:50, connectivity:'4G widespread, mobile money infrastructure', initiatives:['Mobile money ecosystem','Open data initiatives','Innovation hubs'], domains:['Finance','Agriculture','Healthcare'], spssNote:'Established mobile money infrastructure demonstrates what Physical layer alignment looks like. An SPSS lens would ask: who governs the data flowing through these systems?' },
  ZA: { pop:60.4, hubs:45, connectivity:'4G/5G in metros, gaps in townships', initiatives:['AI research community','Community network experiments','National research council'], domains:['Urban Planning','Language','Energy'], spssNote:'Advanced infrastructure coexists with deep access gaps. The SPSS framework would examine whether community-owned connectivity models could address the township-metro divide.' },
  GH: { pop:33.5, hubs:18, connectivity:'4G in cities, 3G expanding', initiatives:['Drone logistics pilots','Drug verification platforms','Digital innovation centres'], domains:['Healthcare','Agriculture'], spssNote:'Emerging drone logistics and verification systems suggest Spatial layer potential. An SPSS evaluation would test whether Social layer trust and community governance are integrated.' },
  ET: { pop:126.5, hubs:8, connectivity:'3G/4G limited, single state telco', initiatives:['ICT development zones','National digital plans','Telecom liberalization'], domains:['Agriculture','Language'], spssNote:'90 languages and constrained telecom suggest that any SPSS-aligned technology here would need to be radically offline-first, voice-primary, and community-governed.' },
  RW: { pop:13.5, hubs:12, connectivity:'4G, drone corridors', initiatives:['Drone delivery networks','Smart city initiatives','E-governance platforms'], domains:['Healthcare','Urban Planning'], spssNote:'High government digital adoption raises an SPSS question: does top-down deployment satisfy the Social layer, or does the framework require community co-governance as a prerequisite?' },
  TZ: { pop:65.5, hubs:10, connectivity:'3G dominant, 4G urban', initiatives:['Mobile money services','ICT hub development'], domains:['Agriculture','Finance'], spssNote:'126 languages and limited energy access — the SPSS framework would prioritize solar-powered, offline AI solutions with community-driven deployment models.' },
  SN: { pop:17.7, hubs:8, connectivity:'4G expanding', initiatives:['Tech incubators','Agricultural platforms'], domains:['Agriculture','Finance'], spssNote:'Gateway to francophone West Africa. An SPSS deployment would need multilingual interface design spanning local languages and colonial-era lingua francas.' },
  CD: { pop:102.3, hubs:4, connectivity:'2G/3G, major gaps', initiatives:['Tech community meetups','Mobile money expansion'], domains:['Healthcare','Language'], spssNote:'215 languages and approximately 19% energy access — this represents the extreme end of Physical layer constraints. SPSS design here would default to SMS and voice-only baselines.' },
  UG: { pop:48.6, hubs:12, connectivity:'3G/4G urban', initiatives:['Innovation hubs','Solar pay-as-you-go models'], domains:['Energy','Agriculture'], spssNote:'Solar pay-as-you-go models in the region suggest Physical layer alignment patterns. An SPSS lens would ask whether similar models could extend to AI and compute access.' },
  CM: { pop:28.6, hubs:6, connectivity:'3G/4G, connectivity disruption history', initiatives:['Tech community hubs','Job platforms'], domains:['Language','Finance'], spssNote:'280 languages and a history of connectivity disruptions make decentralized, offline-resilient design a hard requirement — not an optional SPSS feature.' },
  BW: { pop:2.6, hubs:3, connectivity:'4G in cities', initiatives:['Innovation hub development','National vision plans'], domains:['Energy','Finance'], spssNote:'Small population, high solar irradiance, and decent infrastructure suggest potential as a rapid SPSS pilot context — but community engagement must precede any deployment.' },
};

export const DEFAULT_PROFILE = { pop:0, hubs:0, connectivity:'Limited data', initiatives:['Research needed'], domains:['To be assessed'], spssNote:'Detailed SPSS layer analysis pending. Community engagement and field assessment would be required before any framework application.' };

/* ── Kept for backward compat ── */
export const METRIC_KEYS = [
  { key:'energy', label:'Energy Access', color:'#FF6B6B' },
  { key:'connect', label:'Connectivity', color:'#4ECDC4' },
  { key:'device', label:'Device Access', color:'#FFE66D' },
  { key:'compute', label:'Compute Access', color:'#00e5ff' },
  { key:'hubs', label:'Innovation Hubs', color:'#A78BFA' },
  { key:'aiTalent', label:'AI Talent', color:'#F7931E' },
] as const;

export const DOMAIN_DATA = [
  { title:'Healthcare', icon:'🏥', physical:'Low-bandwidth diagnostics, offline-first patient records',
    social:'Community health worker trust networks, elder consent protocols',
    spatial:'On-device AI inference for symptom triage, voice-first interfaces in local languages' },
  { title:'Agriculture', icon:'🌾', physical:'Solar-powered sensors, SMS-based data collection',
    social:'Indigenous farming calendars, collective land governance',
    spatial:'Satellite imagery + local knowledge fusion, edge-computed yield models' },
  { title:'Finance', icon:'💰', physical:'USSD compatibility, feature phone accessibility',
    social:'Ajo/Esusu trust circles, informal credit recognition',
    spatial:'On-device transaction processing, community-governed lending algorithms' },
  { title:'Urban Planning', icon:'🏘️', physical:'Low-cost mapping hardware, shared community tablets',
    social:'Resident co-design workshops, informal settlement governance',
    spatial:'Lightweight spatial overlays, voice-navigable community maps' },
  { title:'Language', icon:'🗣️', physical:'Compressed models for 2GB RAM devices, offline dictionaries',
    social:'Community-owned training corpora, elder-validated translations',
    spatial:'Speech-first interfaces, on-device language models' },
  { title:'Energy', icon:'⚡', physical:'Micro-grid monitoring on feature phones, battery-aware computing',
    social:'Community energy cooperatives, shared resource governance',
    spatial:'Edge-optimized load balancing, solar cycle prediction models' },
];

/* ── GLOBAL BASELINE COMPARATORS (Section L) ── */
export const GLOBAL_BASELINES = [
  { code:'DE', name:'Germany', physical:92, social:38, spatial:85, balance:67, sri:59, note:'★ High physical, low social sovereignty' },
  { code:'NO', name:'Norway', physical:95, social:41, spatial:88, balance:69, sri:62, note:'★ Highest physical, community layer underweighted' },
  { code:'IN', name:'India', physical:71, social:62, spatial:55, balance:89, sri:62, note:'★ Most balanced non-African comparator' },
  { code:'GL', name:'Global Avg', physical:65, social:48, spatial:42, balance:72, sri:50, note:'★ Median benchmark' },
];

/* ── FAILURE ARCHIVE (Section I) ── */
export const FAILURE_ARCHIVE = [
  { project:'One Laptop Per Child', region:'West Africa', layer:'Social', root:'Assumed literacy and classroom structure', lesson:'Design must follow community pedagogy, not precede it' },
  { project:'M-Farm Kenya', region:'East Africa', layer:'Social', root:'Aggregator extracted value from farmers', lesson:'Data sovereignty must be structural, not aspirational' },
  { project:'iCow SMS', region:'East Africa', layer:'Physical', root:'Assumed consistent SMS delivery', lesson:'Episodic sync, not real-time dependency' },
  { project:'Ushahidi overload', region:'Pan-Africa', layer:'Spatial', root:'No local AI triage for incoming data volume', lesson:'AI layer must be designed for constraint before scale' },
  { project:'Solar kiosk chains', region:'West Africa', layer:'Physical', root:'Repair systems not designed locally', lesson:'Repairability is a first-class feature, not an afterthought' },
  { project:'Unnamed drone agri-survey', region:'Southern Africa', layer:'Social', root:'Data left community without consent', lesson:'Consent architecture must precede deployment' },
];

/* ── DATA PROVENANCE (Section J) ── */
export const DATA_PROVENANCE: Record<string, { source: string; year: string; confidence: string }> = {
  '600M': { source: 'IEA Financing Electricity Access', year: '2024', confidence: 'High' },
  '75%': { source: 'GSMA Mobile Economy Africa', year: '2025', confidence: 'High' },
  '97%': { source: 'Masakhane/CIGI Policy Brief 216', year: '2025', confidence: 'Medium' },
  '85%': { source: 'ILO Africa Informality Profile', year: '2025', confidence: 'High' },
  '1.4B': { source: 'UN Population Division', year: '2024', confidence: 'High' },
  '2000+': { source: 'Ethnologue', year: '2024', confidence: 'High' },
  '332B$': { source: 'GSMA Mobile Money Report', year: '2025', confidence: 'Medium' },
  '6.5kWh': { source: 'IRENA Africa Solar Atlas', year: '2023', confidence: 'Estimated' },
};

/* ── SOLUTION TERRITORIES (Section C) ── */
export const SOLUTION_TERRITORIES = [
  { id: 'sol-1', text: 'Edge compute on solar episodic cycles', node: 'solar-edge' },
  { id: 'sol-2', text: 'Distributed inference + micro-payment rails', node: 'dist-inference' },
  { id: 'sol-3', text: 'Community-trained local LLMs via Masakhane', node: 'community-llm' },
  { id: 'sol-4', text: 'Trust-based governance nodes, non-ID access', node: 'trust-governance' },
];

/* ── RESEARCH QUESTIONS WITH METADATA (Section K) ── */
export const RESEARCH_QS_DATA = [
  { q: "Episodic protocols that respect community governance", layer: 'Physical', pilot: 'West Africa Pilot' },
  { q: "Legal structures for data trusts across African jurisdictions", layer: 'Social', pilot: 'None' },
  { q: "Digital trust networks without formalizing into rigidity", layer: 'Social', pilot: 'East Africa Pilot' },
  { q: "Scientific frameworks for weighted community testimony in AI", layer: 'Social', pilot: 'None' },
  { q: "Training language models without extracting from local control", layer: 'Spatial', pilot: 'None' },
  { q: "Spatial Computing for distributed co-presence in decision-making", layer: 'Spatial', pilot: 'None' },
  { q: "Future interfaces for oral-primary knowledge transmission", layer: 'Social', pilot: 'None' },
  { q: "Energy profiles for edge AI in variable solar-cycle environments", layer: 'Physical', pilot: 'Southern Africa Pilot' },
];

/* ── PILOT SITES (Section G4) ── */
export const PILOT_SITES = [
  { name: 'West Africa Hub', lat: 7.5, lng: 1.0, status: 'Scoping' },
  { name: 'East Africa Hub', lat: -1.9, lng: 29.9, status: 'Scoping' },
  { name: 'Southern Africa Hub', lat: -26.0, lng: 28.0, status: 'Scoping' },
];
