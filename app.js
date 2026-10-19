// ============================================================
// Fura — Utanumhald: Yfirlit → Mánaðarsamantekt (Dekk / Timbur / Málmar)
// ============================================================

const MONTH_NAMES = [
  "JANÚAR","FEBRÚAR","MARS","APRÍL","MAÍ","JÚNÍ",
  "JÚLÍ","ÁGÚST","SEPTEMBER","OKTÓBER","NÓVEMBER","DESEMBER"
];
const MONTH_SHORT = ["jan","feb","mar","apr","mai","jun","jul","agu","sep","okt","nov","des"];

// ============================================================
// Per-material configuration
// ============================================================

const DEKK_MAPPING = {
  "fura ehf":                        { bucket: "Fura",                           group: "fura" },
  "fura ehf - akureyri":             { bucket: "Fura Ak.",                       group: "fura" },
  "fura ehf. - akureyri":            { bucket: "Fura Ak.",                       group: "fura" },
  "púst þjónusta bjb ehf.,":         { bucket: "BJB",                            group: "fura" },
  "pústþjónusta bjb ehf.,":          { bucket: "BJB",                            group: "fura" },
  "pústþjónusta bjb ehf.":           { bucket: "BJB",                            group: "fura" },
  "dekkjahúsið ehf.":                { bucket: "Dekkjahúsið",                    group: "fura" },
  "dekkjaþjónustan":                 { bucket: "Dekkjaþjónustan",                group: "fura" },
  "dekkjaþjónustan ehf.":            { bucket: "Dekkjaþjónustan",                group: "fura" },
  "dekkjasalan":                     { bucket: "Dekkjasalan",                    group: "fura" },
  "dekkjasalan ehf":                 { bucket: "Dekkjasalan",                    group: "fura" },
  "hertz":                           { bucket: "Hertz",                          group: "fura" },
  "hassan dekk ehf.":                { bucket: "Iceland Tire / Hassan dekk",     group: "fura" },
  "kd flutningar ehf":               { bucket: "Kristján Daði Valg.",            group: "fura" },
  "kd flutningar ehf.":              { bucket: "Kristján Daði Valg.",            group: "fura" },
  "málmar og partar ehf.":           { bucket: "LANDIÐ / Málmar og Partar",      group: "fura" },
  "suðurverk hf.":                   { bucket: "Suðurverk",                      group: "fura" },
  "n1 ehf":                          { bucket: "N1",                             group: "fura" },
  "suðurtak ehf.":                   { bucket: "Suðurtak",                       group: "fura" },
  "fjarðarbón ehf.":                 { bucket: "Fjarðarbón",                     group: "fura" },
  "geymslusvæðið ehf.,":             { bucket: "Geymslusvæðið",                  group: "fura" },
  "geymslusvæðið ehf.":              { bucket: "Geymslusvæðið",                  group: "fura" },
  "kuldaboli ehf.":                  { bucket: "Kuldaboli",                      group: "fura" },
  "hrt þjónusta ehf.":               { bucket: "HRT þjónusta",                   group: "fura" },
  "bifvélavirkinn ehf.":             { bucket: "Bifvélavirkinn ehf.",            group: "fura" },
  "hagtak hf":                       { bucket: "Hagtak",                         group: "fura" },
  "landsvirkjun":                    { bucket: "Landsvirkjun",                   group: "fura" },
  "m.n. bilaverkstæði ehf.":         { bucket: "M.N. Bílaverkstæði",             group: "fura" },
  "nítró sport ehf":                 { bucket: "Nítró Sport",                    group: "fura" },
  "nt viðgerðir ehf.":               { bucket: "NT Viðgerðir",                   group: "fura" },
  "skeiða- og gnúpverjahreppur":     { bucket: "Skeiða og Gnúpverjahreppur",     group: "fura" },
  "stjörnugarðar ehf.":              { bucket: "Stjörnugarðar",                  group: "fura" },
  "sveitarfélagið ölfus":            { bucket: "Sveitarfélagið Ölfus",           group: "fura" },
  "krókur ehf.":                     { bucket: "Krókur",                         group: "fura" },
  "msp performance ehf.":            { bucket: "MSP Performance",                group: "fura" },
  "j.s. þjónusta ehf":               { bucket: "J.S. Þjónusta",                  group: "fura" },
  "íspan glerborg ehf":              { bucket: "Íspan Glerborg",                 group: "fura" },
  "blikksmiðurinn hf":               { bucket: "Blikksmiðurinn",                 group: "fura" },
  "grafa og grjót ehf.":             { bucket: "Grafa og grjót",                 group: "fura" },
  "kristófer guðjón þórðarson":      { bucket: "Kristófer Guðjón Þórðarson",     group: "fura" },
  "íslenska gámafélagið ehf.":       { bucket: "Ísl.Gámafélagið",                group: "ig" },
  "einka":                           { bucket: "Einkaðili",                      group: "fura" },
};

const DEKK_SORPA_LOCATIONS = {
  "sævarhöfði":   "Sorpa-Sævarhöfða",
  "sævarhöfða":   "Sorpa-Sævarhöfða",
  "breiðhella":   "Sorpa-Breiðhella",
  "ánanaust":     "Sorpa-Ánanaust",
  "mosfellsbær":  "Sorpa-Mosfellsb.",
  "mosfellsb":    "Sorpa-Mosfellsb.",
  "gufunes":      "Sorpa-Gufunes",
  "jafnasel":     "Sorpa-Jafnasel",
  "kópavogur":    "Sorpa-Kópavogur",
  "lambhagi":     "Sorpa-Lambhagi"
};

// ---- Timbur (Hreint timbur 2026) ----
const TIMBUR_MAPPING = {
  "1990 ehf":                        { bucket: "1990 ehf.",                      group: "fura" },
  "fura ehf":                        { bucket: "Fura ehf",                       group: "fura" },
  "1912 - nathan hf":                { bucket: "1912 ehf.",                      group: "fura" },
  "1912 ehf":                        { bucket: "1912 ehf.",                      group: "fura" },
  "bm vallá ehf":                    { bucket: "Bm Vallá",                       group: "fura" },
  "byko ehf.":                       { bucket: "Byko",                           group: "fura" },
  "distica hf":                      { bucket: "Distica",                        group: "fura" },
  "eimskip ísland ehf":              { bucket: "Eimskip",                        group: "fura" },
  "eirberg ehf.":                    { bucket: "Eirberg",                        group: "fura" },
  "eldfjallabrugg ehf":              { bucket: "Eldfjallabrugg",                 group: "fura" },
  "fraktflutningar ehf":             { bucket: "Fraktflutningar",                group: "fura" },
  "garðheimar gróðurvörur ehf":      { bucket: "Garðheimar",                     group: "fura" },
  "gg verk ehf":                     { bucket: "GG verk",                        group: "fura" },
  "húsasmiðjan ehf":                 { bucket: "Húsasmiðjan",                    group: "fura" },
  "höldur ehf.":                     { bucket: "Höldur",                         group: "fura" },
  "icelandic water holdings hf":     { bucket: "Icelandic Water Hold.",          group: "fura" },
  "icelandic water holdings - ice":  { bucket: "Icelandic Water Hold.",          group: "fura" },
  "icetransport ehf":                { bucket: "Ice transport",                  group: "fura" },
  "innnes ehf":                      { bucket: "Innnes",                         group: "fura" },
  "kat ehf.":                        { bucket: "Kat ehf. (Vörubretti)",          group: "fura" },
  "mata hf":                         { bucket: "Mata",                           group: "fura" },
  "orkuveita reykjavíkur":           { bucket: "Orkuveita Reykjav.",             group: "fura" },
  "petmark ehf":                     { bucket: "PetMark",                        group: "fura" },
  "rarik ohf":                       { bucket: "Rarik",                          group: "fura" },
  "redder ehf":                      { bucket: "Redder",                         group: "fura" },
  "rst net ehf.,":                   { bucket: "RST NET",                        group: "fura" },
  "steypustöðin ehf":                { bucket: "Steypustöðin",                   group: "fura" },
  "tengi ehf.,":                     { bucket: "Tengi",                          group: "fura" },
  "torcargo":                        { bucket: "Torcargo",                       group: "fura" },
  "vélsmiðja orms og víglundar eh":  { bucket: "VÉLSMIÐJA ORMS OG VÍGLUNDAR EH", group: "fura" },
  "þarfaþing ehf.,":                 { bucket: "Þarfaþing",                      group: "fura" },
  "þg verktakar ehf":                { bucket: "Þ.G.verk",                       group: "fura" },
  "ölgerðin egill skallagríms hf":   { bucket: "Ölgerðin",                       group: "fura" },
  "einka":                           { bucket: "Einka",                          group: "fura" },
  "terra umhverfisþjónusta hf":      { bucket: "Terra",                          group: "fura" },
  "terra umhverfisþjónusta hf.":     { bucket: "Terra",                          group: "fura" },
  "fóðurblandan hf":                 { bucket: "Fóðurblandan",                   group: "fura" },
  "kalka sorpeyðingarstöð s.f.":     { bucket: "Kalka",                          group: "fura" },
  "geymslusvæðið ehf.,":             { bucket: "Geymslusvæðið",                  group: "fura" },
  "eignabyggð ehf.":                 { bucket: "Eignabyggð",                     group: "fura" },
  "ellingsen s4s tæki ehf":          { bucket: "Ellingsen",                      group: "fura" },
  "samskip hf.":                     { bucket: "Samskip",                        group: "fura" },
  "tvg-zimsen":                      { bucket: "TVG-Zimsen",                     group: "fura" },
  "þbf ehf.":                        { bucket: "ÞBF",                            group: "fura" },
  "gasfélagið ehf.,":                { bucket: "Gasfélagið",                     group: "fura" },
  "bílanaust ehf":                   { bucket: "Bílanaust",                      group: "fura" },
  "hollt og gott ehf.":              { bucket: "Hollt og gott",                  group: "fura" },
  "kjarnavörur ehf.":                { bucket: "Kjarnavörur",                    group: "fura" },
  "landsnet hf.":                    { bucket: "Landsnet",                       group: "fura" },
  "n1 ehf":                          { bucket: "N1",                             group: "fura" },
  "ísfell ehf.":                     { bucket: "Ísfell",                         group: "fura" },
  "kids coolshop iceland ehf":       { bucket: "Kids Coolshop",                  group: "fura" },
  "lina 89 ehf.":                    { bucket: "Lina 89",                        group: "fura" },
  "íspan glerborg ehf":              { bucket: "Íspan Glerborg",                 group: "fura" },
  "lífland ehf":                     { bucket: "Lífland",                        group: "fura" },
  "vr-5 ehf":                        { bucket: "VR-5",                           group: "fura" },
  "sölufélag garðyrkjumanna ehf":    { bucket: "Sölufélag garðyrkjumanna",       group: "fura" },
  "lindex - ldx19 ehf":              { bucket: "Lindex",                         group: "fura" },
  "héðinshurðir ehf":                { bucket: "Héðinshurðir",                   group: "fura" },
  "matfugl ehf":                     { bucket: "Matfugl",                        group: "fura" },
  "álfaborg ehf":                    { bucket: "Álfaborg",                       group: "fura" },
  "mhg verslun ehf":                 { bucket: "MHG verslun ehf.",               group: "fura" },
  "flugger iceland ehf":             { bucket: "Flugger",                        group: "fura" },
  "flügger iceland ehf":             { bucket: "Flugger",                        group: "fura" },
};

// ---- Málmar (Samantekt járns 2026) ----
// Málmar hefur TVÖ-ása flokkun:
//   - "1. Bíll" færslur → grúppast eftir EFNISEIGANDI (eigandi bílsins)
//   - Allar aðrar efnislýsingar → grúppast eftir FLUTNINGSAÐILA

// Efnislýsing → dálkur (E=Bílar, F=Rafgeymar, G=Hvarfakútar, H=Góðmálmar, I=Stór heimilistæki, J=Annað brotajárn)
// Óþekktar efnislýsingar sem eru EKKI útilokaðar lenda sjálfkrafa í J (Annað brotajárn).
const MALMAR_EFNIS_TO_COL = {
  "1. bíll": "E",
  "1 bíll - vaka": "E",   // afbrigði — flokkað í E og Vaka-bakka
  "rafgeymar": "F",
  "hvarfakútar stórir": "G",
  "hvarfakútar litlir": "G",
  "ál": "H", "álfelgur": "H", "álkapall": "H", "álvír": "H",
  "kopar": "H", "koparvír": "H", "koparvír gamall": "H", "koparskinnur": "H",
  "óskrældur koparkapall": "H", "messing": "H", "messing svarf": "H",
  "kopar svarf": "H", "blý": "H", "zink": "H",
  "ryðfrítt stál": "H", "ryðfrítt svarf": "H",
  "rafmótorar - inn": "H", "kapalkefli": "H",
  "jarðkapall": "H", "prentplötur": "H",
  "stór heimilistæki": "I",
  // Annað brotajárn (J) — allir þekktir "rusl" flokkar
  "járn": "J", "járn umb. - gaskútar": "J", "járn umb. - tunnur": "J",
  "þungt efni": "J", "hitaveiturör": "J", "postulín": "J", "spennar": "J",
  "rusl": "J", "járn -  ekki greitt": "J", "járn - ekki greitt": "J",
  "frystigámar": "J", "rúta": "J", "toghlerar": "J", "yleiningar": "J",
  "bambar": "J", "element": "J", "togvír": "J",
};

// Útiloka alfarið — útflutningur, "út"-færslur, þjónustugjöld, ekki málmar
const MALMAR_EFNIS_EXCLUDE = new Set([
  "rafgeymar út",
  "rafmótorar - út",
  "útflutningur tróð",
  "útflutningur blandaðir góðmálmar",
  "akstur gámabifreiðar/km.",
  "umbúðartimbur", "tætt timbur", "óhreint timbur",
  "dekk-inn",
  "furuflís - bali", "furuflís - bretti", "furuflís - bretti m/akstri",
  "furukögglar - sekkur", "furukögglar - poki",
  "losunargjald", "vigtun",
  "fellihýsi", "tjaldvagn", "strætóskýli",
]);

// Default: óþekkt efnislýsing (ekki í TO_COL né EXCLUDE) → J (annað brotajárn)
const MALMAR_UNKNOWN_DEFAULT_COL = "J";

// Efniseigandi → bucket (notaður FYRST — ef Efnis matchar, grúppast rófærslan hingað)
// Þetta er fyrir "svæðisbakka" sem taka allt frá tilteknum eiganda óháð Flutningsaðila.
const MALMAR_EFNIS_MAPPING = {
  "fura ehf - akureyri":        "Fura ehf. - AK.",
  "fura ehf. - akureyri":       "Fura ehf. - AK.",
  "sorpa bs.":                  "Sorpa bs. ",
  "sorpa bs":                   "Sorpa bs. ",
  "hrunamannahreppur":          "Hrunamannahr/Flúðir",
  "málmar og partar ehf.":      "Málmar og partar / Ísafjörður",
  "málmar og partar ehf":       "Málmar og partar / Ísafjörður",
  "terra umhverfisþjónusta hf": "Terra",
  "terra umhverfisþjónusta hf.":"Terra",
  "íslenska gámafélagið ehf.":  "Ísl.Gámafélagið ehf.",
  "íslenska gámafélagið":       "Ísl.Gámafélagið ehf.",
  "sorpsamlag strandasýslu":    "Sorpsamlag Strandasýslu",
  "geymslusvæðið ehf.,":        "Geymslusvæðið",
  "geymslusvæðið ehf.":         "Geymslusvæðið",
};

// Fyrir 1. Bíll (bílar) — grúppun eftir Efniseiganda (eigandi bílsins)
const MALMAR_CAR_EFNIS_MAPPING = {
  "vaka hf":                    "Vaka",
  "bílaflutningar ehf":         "Bílaflutningar",
  "bílaflutningar ehf.":        "Bílaflutningar",
  "krókur ehf.":                "Krókur",
  "kd flutningar ehf":          "Kd Flutningar",
  "kd flutningar ehf.":         "Kd Flutningar",
  "aðalpartasalan ehf.":        "Aðalpartasalan",
  "j-vélar ehf":                "J-vélar",
  "j vélar ehf":                "J-vélar",
  "afl bílaþjónusta ehf.":      "AFL bílaþjónustan",
  "afl bílaþjónustan":          "AFL bílaþjónustan",
};

// Flutningsaðili → bakki (notaður SÍÐAST, bara fyrir annað en 1. Bíll og þegar Efnis-matching klikkaði)
const MALMAR_FLUTN_MAPPING = {
  "fura ehf":                   "Fura ehf.",
  "fura ehf.":                  "Fura ehf.",
  "kd flutningar ehf.":         "Kd Flutningar",
  "kd flutningar ehf":          "Kd Flutningar",
  "kd flutningar":              "Kd Flutningar",
};

// Fast listi af bakka-röðum (í þeirri röð sem þeir eiga að birtast í xlsx)
const MALMAR_BUCKETS = [
  "Fura ehf.", "Fura ehf. - AK.", "Ísl.Gámafélagið ehf.", "Terra", "Sorpa bs. ",
  "Sorpsamlag Strandasýslu", "Krókur", "Vaka", "Bílaflutningar",
  "Bílar og varahlutir",  // section header, no values
  "AFL bílaþjónustan", "Aðalpartasalan", "J-vélar",
  "Kd Flutningar", "Geymslusvæðið", "Hrunamannahr/Flúðir",
  "Hornafjörður", "Málmar og partar / Ísafjörður",
  "Djúpivogur", "Seyðisfjörður", "Borgarfjörður Eystri",
  "Breiðdalshreppur", "Vopnafjörður", "Hvammstangi/Hjalti",
  "E.E. Export", "Ýmsir",
];

// Málmar notar annan placeholder-mapping af því að flokkunin er sérstök
const MALMAR_MAPPING = {
  "einka": { bucket: "Einka", group: "fura" },
};

// Master config per material
const MATERIALS = {
  dekk: {
    name: "Hjólbarðar", mapping: DEKK_MAPPING, sorpa: DEKK_SORPA_LOCATIONS, threshold: 900,
    kopasker: true, storageKey: "dekk",
    taflaYears: [2021, 2022, 2023, 2024, 2025, 2026],
    taflaTitle: "Innkomnir hjólbarðar",
  },
  timbur: {
    name: "Timbur", mapping: TIMBUR_MAPPING, sorpa: {}, threshold: 2000,
    kopasker: false, storageKey: "timbur",
    taflaYears: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
    taflaTitle: "Innkomið  hreint  timbur",
  },
  malmar: {
    name: "Málmar", mapping: MALMAR_MAPPING, sorpa: {}, threshold: 900,
    kopasker: false, storageKey: "malmar",
    taflaYears: [2021, 2022, 2023, 2024, 2025, 2026],
    taflaTitle: "Innkomnir málmar",
  },
};

// ============================================================
// State
// ============================================================
const state = {
  material: loadActiveMaterial(),
  rows: [],
  month: null,
  year: null,
  mapping: null,       // set by applyMaterial()
  threshold: null,
  classified: null,
  pendingQuestions: [],
  excluded: [],
};

function activeConfig() { return MATERIALS[state.material]; }

function loadActiveMaterial() {
  const m = localStorage.getItem("fura-active-material");
  return (m && MATERIALS[m]) ? m : "dekk";
}
function saveActiveMaterial(m) { localStorage.setItem("fura-active-material", m); }

function loadMapping() {
  const cfg = activeConfig();
  try {
    const stored = localStorage.getItem(`fura-${cfg.storageKey}-mapping`);
    if (stored) return { ...cfg.mapping, ...JSON.parse(stored) };
  } catch {}
  return { ...cfg.mapping };
}
function saveMapping() {
  const cfg = activeConfig();
  const defaults = cfg.mapping;
  const custom = {};
  for (const [k, v] of Object.entries(state.mapping)) {
    if (!defaults[k] || JSON.stringify(defaults[k]) !== JSON.stringify(v)) {
      custom[k] = v;
    }
  }
  localStorage.setItem(`fura-${cfg.storageKey}-mapping`, JSON.stringify(custom));
}
function loadThreshold() {
  const cfg = activeConfig();
  const v = parseInt(localStorage.getItem(`fura-${cfg.storageKey}-threshold`), 10);
  return isFinite(v) && v > 0 ? v : cfg.threshold;
}
function saveThreshold(v) {
  const cfg = activeConfig();
  localStorage.setItem(`fura-${cfg.storageKey}-threshold`, String(v));
}

function applyMaterial() {
  state.mapping = loadMapping();
  state.threshold = loadThreshold();
}
applyMaterial();

const normKey = s => (s || "").toString().trim().toLowerCase();
const fmt = n => n == null ? "—" : Math.round(n).toLocaleString("is-IS");

// ============================================================
// DOM refs
// ============================================================
const el = {
  dropZone:    document.getElementById("drop-zone"),
  fileInput:   document.getElementById("file-input"),
  fileStatus:  document.getElementById("file-status"),
  statusFile:  document.getElementById("status-filename"),
  statusMonth: document.getElementById("status-month"),
  statusRows:  document.getElementById("status-rows"),
  statusTotal: document.getElementById("status-total"),
  bucketsPreview: document.getElementById("buckets-preview"),
  bucketsTable: document.getElementById("buckets-table"),
  chatMessages: document.getElementById("chat-messages"),
  chatInputWrap: document.getElementById("chat-input-wrap"),
  chatChoices: document.getElementById("chat-choices"),
  downloadArea: document.getElementById("download-area"),
  btnDownload: document.getElementById("btn-download"),
  btnCopySummary: document.getElementById("btn-copy-summary"),
  btnSettings: document.getElementById("btn-settings"),
  btnReset: document.getElementById("btn-reset"),
  settingsModal: document.getElementById("settings-modal"),
  btnCloseSettings: document.getElementById("btn-close-settings"),
  settingThreshold: document.getElementById("setting-threshold"),
  mappingTable: document.getElementById("mapping-table"),
  btnAddMapping: document.getElementById("btn-add-mapping"),
};

// ============================================================
// Chat helpers
// ============================================================
function botSay(html) {
  const node = document.createElement("div");
  node.className = "msg msg-bot";
  node.innerHTML = `<div class="msg-avatar">🌲</div><div class="msg-body">${html}</div>`;
  el.chatMessages.appendChild(node);
  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
}
function userSay(text) {
  const node = document.createElement("div");
  node.className = "msg msg-user";
  node.innerHTML = `<div class="msg-avatar">👤</div><div class="msg-body"></div>`;
  node.querySelector(".msg-body").textContent = text;
  el.chatMessages.appendChild(node);
  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
}
function askChoices(choices) {
  el.chatInputWrap.classList.remove("hidden");
  el.chatChoices.innerHTML = "";
  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "chat-choice" + (c.variant ? " " + c.variant : "");
    btn.textContent = c.label;
    btn.onclick = () => {
      userSay(c.label);
      el.chatInputWrap.classList.add("hidden");
      c.onPick();
    };
    el.chatChoices.appendChild(btn);
  });
}
function clearChoices() {
  el.chatInputWrap.classList.add("hidden");
  el.chatChoices.innerHTML = "";
}

// ============================================================
// Yfirlit parser — using SheetJS for flexible xlsx reading
// (Yfirlit files from the weighing system use x: namespace which trips ExcelJS)
// ============================================================
async function parseYfirlit(file) {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array", cellDates: true });
  const wsName = wb.SheetNames[0];
  if (!wsName) throw new Error("Fann engan vinnublað í skránni.");
  const ws = wb.Sheets[wsName];

  // Convert to array-of-arrays (preserve blanks)
  const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true, dateNF: 'yyyy-mm-dd hh:mm' });
  if (aoa.length < 2) throw new Error("Skjalið er tómt.");

  const rows = [];
  for (let i = 1; i < aoa.length; i++) {
    const row = aoa[i];
    const [faersla, dags, bilnr, efnis, efnis_kt, verk, athug, flutn, flutn_kt, lysing, fjoldi, thyngd] = row;
    if (!dags || thyngd == null || thyngd === "") continue;
    if (typeof faersla === "string" && faersla.toLowerCase().startsWith("summa")) continue;
    rows.push({
      faersla: faersla ?? "",
      dags: toDate(dags),
      bilnr: str(bilnr),
      efnis: str(efnis),
      efnis_kt: str(efnis_kt),
      verk: str(verk),
      athug: str(athug),
      flutn: str(flutn),
      flutn_kt: str(flutn_kt),
      lysing: str(lysing),
      thyngd: Number(thyngd),
    });
  }
  return rows;
}
const str = v => (v == null ? "" : v.toString().trim());
function toDate(v) {
  if (v instanceof Date) return v;
  if (typeof v === "number") return new Date(Math.round((v - 25569) * 86400 * 1000));
  return new Date(v);
}

function detectMonth(rows) {
  if (!rows.length) return { month: null, year: null };
  const counts = {};
  rows.forEach(r => {
    const key = `${r.dags.getFullYear()}-${r.dags.getMonth() + 1}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  const [key] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  const [y, m] = key.split("-").map(Number);
  return { month: m, year: y };
}

// ============================================================
// Classification
// ============================================================
function classifyRow(row) {
  const efnis = normKey(row.efnis);
  const cfg = activeConfig();

  // 1) SORPA sub-location (only for materials with sorpa config)
  if (Object.keys(cfg.sorpa).length && (efnis === "sorpa bs." || efnis === "sorpa bs" || efnis.startsWith("sorpa"))) {
    const text = normKey(row.verk) || normKey(row.athug);
    for (const [kw, bucket] of Object.entries(cfg.sorpa)) {
      if (text.includes(kw)) return { bucket, group: "sorpa" };
    }
    return { bucket: null, group: "sorpa", unknownSorpa: true, text };
  }

  // 2) Norðurþing + KÓPASKER (dekk-specific)
  if (cfg.kopasker && efnis.startsWith("norðurþing")) {
    const athug = normKey(row.athug);
    if (athug.includes("kópasker") || athug.includes("kopasker")) {
      return { bucket: "Kópasker", group: "fura" };
    }
  }

  // 3) Known mapping
  if (state.mapping[efnis]) return state.mapping[efnis];

  // Fall-through: unknown
  return { bucket: null, group: "fura", unknown: true };
}

function buildBuckets(rows) {
  // Preliminary classification
  const perRow = rows.map(r => ({ row: r, cls: classifyRow(r) }));

  // Aggregate by Efniseigandi (both known + unknown)
  const unknownAgg = {};
  const knownAgg = {}; // efnis → { sum, bucket }
  perRow.forEach(p => {
    const key = p.row.efnis;
    if (p.cls.unknown) {
      unknownAgg[key] = (unknownAgg[key] || 0) + p.row.thyngd;
    } else if (!p.cls.unknownSorpa) {
      if (!knownAgg[key]) knownAgg[key] = { sum: 0, bucket: p.cls.bucket };
      knownAgg[key].sum += p.row.thyngd;
    }
  });

  const questions = [];
  const unknownDecisions = {};   // efnis → "own" | "einka"
  const knownDecisions = {};     // efnis → "own" (keep bucket) | "einka"

  // Unknown Efniseigendur ≥ threshold → ask whether to give own bucket
  for (const [efnis, sum] of Object.entries(unknownAgg)) {
    if (sum >= state.threshold) {
      questions.push({ type: "unknown-big", efnis, sum });
    } else {
      unknownDecisions[efnis] = "einka";
    }
  }

  // KNOWN Efniseigendur < threshold → ask whether to keep bucket or lump into Einka
  for (const [efnis, info] of Object.entries(knownAgg)) {
    if (info.sum < state.threshold) {
      // Don't ask for "Einka" itself (that's already Einka), or for Fura/Fura Ak which are always own
      const bucket = info.bucket;
      if (bucket === "Einkaðili" || bucket === "Einka") continue;
      questions.push({ type: "known-small", efnis, sum: info.sum, bucket });
    }
  }

  return { perRow, unknownAgg, knownAgg, questions, unknownDecisions, knownDecisions };
}

// Málmar question flow
function askNextMalmarQuestion() {
  if (!state.pendingQuestions.length) {
    finishMalmarPipeline();
    return;
  }
  const q = state.pendingQuestions.shift();
  if (q.type === "malmar-suspicious") {
    const r = q.row;
    const d = r.dags.toISOString().slice(0, 10);
    botSay(`Óvenju stór færsla <code>${r.faersla}</code> (${d}): <b>${r.efnis}</b> → <b>${r.flutn}</b>, <b>${fmt(r.thyngd)} kg</b> af ${r.lysing}. Taka með eða sleppa (líklega villa)?`);
    askChoices([
      { label: "Taka með", variant: "primary", onPick: () => askNextMalmarQuestion() },
      { label: "Sleppa", variant: "danger", onPick: () => {
          state.excludedIndices.add(q.idx);
          askNextMalmarQuestion();
        }
      },
    ]);
  } else if (q.type === "malmar-new-efnis") {
    botSay(`Óþekkt efnislýsing: <b>${q.lysing}</b> með <b>${fmt(q.kg)} kg</b>. Vil ég setja í Annað brotajárn (J), Góðmálma (H), Stór heimilistæki (I), eða sleppa?`);
    askChoices([
      { label: "Annað brotajárn (J)", variant: "primary", onPick: () => {
          state.malmarEfnisOverrides[q.lysing] = "J"; askNextMalmarQuestion();
        }
      },
      { label: "Góðmálmar (H)", onPick: () => {
          state.malmarEfnisOverrides[q.lysing] = "H"; askNextMalmarQuestion();
        }
      },
      { label: "Stór heim. (I)", onPick: () => {
          state.malmarEfnisOverrides[q.lysing] = "I"; askNextMalmarQuestion();
        }
      },
      { label: "Sleppa", variant: "danger", onPick: () => {
          state.malmarEfnisOverrides[q.lysing] = "skip"; askNextMalmarQuestion();
        }
      },
    ]);
  } else {
    askNextMalmarQuestion();
  }
}

function finishMalmarPipeline() {
  // Re-classify with overrides + excluded rows
  const overrides = state.malmarEfnisOverrides || {};
  const excluded = state.excludedIndices;
  const rowsFiltered = state.rows.filter((_, i) => !excluded.has(i));
  const { classified: cRows } = classifyMalmarRows(rowsFiltered, overrides);
  const buckets = groupMalmarBuckets(cRows);
  state.classified.malmar.buckets = buckets;
  state.classified.malmar.classified = cRows;
  renderMalmarPreview(buckets);
  botSay(`Flokkun tilbúin. Ýttu á <b>Hlaða niður xlsx</b>.`);
  el.downloadArea.classList.remove("hidden");
}

function einkaBucketName() {
  // Dekk sheet uses "Einkaðili", timbur sheet uses "Einka".
  return state.material === "dekk" ? "Einkaðili" : "Einka";
}

function finalizeBuckets(perRow, unknownDecisions, knownDecisions, excludedIndices = new Set()) {
  const buckets = {};
  const einkaItems = [];
  const EINKA = einkaBucketName();

  perRow.forEach((p, idx) => {
    if (excludedIndices.has(idx)) return;
    const { row, cls } = p;
    let bucket, group;

    if (cls.unknown) {
      const decision = unknownDecisions[row.efnis];
      if (decision === "einka") {
        bucket = EINKA;
        group = "fura";
      } else {
        bucket = row.efnis;
        group = "fura";
      }
    } else if (cls.unknownSorpa) {
      bucket = `Sorpa-${row.verk || row.athug || "?"}`;
      group = "sorpa";
    } else {
      // Known mapping — but user may have decided to lump this into Einka
      if (knownDecisions && knownDecisions[row.efnis] === "einka") {
        bucket = EINKA;
        group = "fura";
      } else {
        bucket = cls.bucket;
        group = cls.group;
      }
    }

    if (bucket === EINKA || bucket === "Einkaðili" || bucket === "Einka") {
      if (!einkaItems.find(e => e.efnis === row.efnis && e.kg === row.thyngd)) {
        einkaItems.push({ efnis: row.efnis, kg: row.thyngd });
      }
    }

    if (!buckets[bucket]) buckets[bucket] = { group, total: 0, trips: 0 };
    buckets[bucket].total += row.thyngd;
    buckets[bucket].trips += 1;
  });

  return { buckets, einkaItems };
}

// ============================================================
// Rendering
// ============================================================
function renderMalmarPreview(buckets) {
  const rows = [`<tr class="group-head"><td>Bakki</td><td class="v">Ferðir</td><td class="v">Bílar</td><td class="v">Heild (kg)</td></tr>`];
  let totalK = 0;
  for (const b of MALMAR_BUCKETS) {
    const info = buckets[b];
    if (!info || b === "Bílar og varahlutir") {
      if (b === "Bílar og varahlutir") rows.push(`<tr class="group-head"><td colspan="4"><i>${b}</i></td></tr>`);
      continue;
    }
    const K = (info.E||0)+(info.F||0)+(info.G||0)+(info.H||0)+(info.I||0)+(info.J||0);
    totalK += K;
    if (K === 0 && info.trips === 0) continue;
    rows.push(`<tr><td>${b}</td><td class="v">${info.trips || 0}</td><td class="v">${info.carCount || 0}</td><td class="v">${fmt(K)}</td></tr>`);
  }
  rows.push(`<tr class="grand-total"><td>Samtals</td><td></td><td></td><td class="v">${fmt(totalK)}</td></tr>`);
  el.bucketsTable.innerHTML = rows.join("");
  el.bucketsPreview.classList.remove("hidden");
}

function renderBucketsTable(buckets) {
  const groups = { fura: [], sorpa: [], terra: [], ig: [] };
  for (const [name, info] of Object.entries(buckets)) {
    groups[info.group || "fura"].push({ name, total: info.total });
  }
  for (const g of Object.values(groups)) g.sort((a, b) => b.total - a.total);

  const furaSum = groups.fura.reduce((s, x) => s + x.total, 0);
  const sorpaSum = groups.sorpa.reduce((s, x) => s + x.total, 0);
  const igSum = groups.ig.reduce((s, x) => s + x.total, 0);
  const grandTotal = furaSum + sorpaSum + igSum;

  const rows = [];
  rows.push(`<tr class="group-head"><td>Fura</td><td class="v">${fmt(furaSum)}</td></tr>`);
  groups.fura.forEach(b => rows.push(
    `<tr${b.name === "Einkaðili" ? ' class="einkadili-row"' : ""}><td>${b.name}</td><td class="v">${fmt(b.total)}</td></tr>`
  ));
  if (groups.sorpa.length) {
    rows.push(`<tr class="group-head"><td>Sorpa</td><td class="v">${fmt(sorpaSum)}</td></tr>`);
    groups.sorpa.forEach(b => rows.push(`<tr><td>${b.name}</td><td class="v">${fmt(b.total)}</td></tr>`));
  }
  if (groups.ig.length) {
    rows.push(`<tr class="group-head"><td>Ísl.Gámafélagið</td><td class="v">${fmt(igSum)}</td></tr>`);
    groups.ig.forEach(b => rows.push(`<tr><td>${b.name}</td><td class="v">${fmt(b.total)}</td></tr>`));
  }
  rows.push(`<tr class="grand-total"><td>Samtals</td><td class="v">${fmt(grandTotal)}</td></tr>`);
  el.bucketsTable.innerHTML = rows.join("");
  el.bucketsPreview.classList.remove("hidden");
}

// ============================================================
// Main flow — pipeline after file upload
// ============================================================
async function handleFile(file) {
  try {
    el.statusFile.textContent = file.name;
    state.rows = await parseYfirlit(file);
    const { month, year } = detectMonth(state.rows);
    state.month = month;
    state.year = year;

    const total = state.rows.reduce((s, r) => s + r.thyngd, 0);
    el.statusMonth.textContent = month ? `${MONTH_NAMES[month-1]} ${year}` : "—";
    el.statusRows.textContent = state.rows.length;
    el.statusTotal.textContent = fmt(total) + " kg";
    el.fileStatus.classList.remove("hidden");
    el.dropZone.classList.add("loaded");

    // --- Málmar branch: specialized classifier + review questions ---
    if (state.material === "malmar") {
      const { classified: cRows, unmapped } = classifyMalmarRows(state.rows);
      state.classified = { malmar: { classified: cRows, unmapped } };
      state.perRow = state.rows.map(row => {
        const cls = cRows.find(c => c.faersla === row.faersla && c.dags === row.dags && c.thyngd === row.thyngd);
        return { row, classifiedMalmar: cls };
      });
      state.excludedIndices = new Set();
      state.malmarEfnisOverrides = {};  // lysing_norm → "H"|"J"|"skip"

      const totalIncluded = cRows.reduce((s, r) => s + r.thyngd, 0);
      const totalExcluded = total - totalIncluded;
      botSay(`Las <b>${state.rows.length}</b> færslur fyrir <b>${MONTH_NAMES[month-1]} ${year}</b>, samtals <b>${fmt(total)} kg</b>. Síaði út <b>${fmt(totalExcluded)} kg</b> (dekk, timbur, útflutningur, "út"-færslur).`);

      // Build questions
      const questions = [];
      // (1) Óvenju stór færsla (>= 50 tonn í einni línu)
      state.rows.forEach((row, idx) => {
        if (row.thyngd >= 50000) {
          questions.push({ type: "malmar-suspicious", idx, row });
        }
      });
      // (2) Nýjar efnislýsingar sem lenda í J sjálfkrafa (ekki þekktar) — spyr ef samtala ≥ 1000 kg
      const byLysing = {};
      cRows.filter(c => c.defaultedToJ).forEach(c => {
        const k = c.lysing;
        if (!byLysing[k]) byLysing[k] = 0;
        byLysing[k] += c.thyngd;
      });
      for (const [lysing, kg] of Object.entries(byLysing)) {
        if (kg >= 1000) questions.push({ type: "malmar-new-efnis", lysing, kg });
      }

      state.pendingQuestions = questions;
      if (questions.length === 0) {
        botSay(`Flokkun tilbúin — engar vafasamar færslur. Ýttu á <b>Hlaða niður xlsx</b>.`);
        finishMalmarPipeline();
      } else {
        botSay(`Ég hef <b>${questions.length}</b> ${questions.length === 1 ? "spurningu" : "spurningar"} áður en við lokum þessu.`);
        askNextMalmarQuestion();
      }
      return;
    }

    botSay(`Las <b>${state.rows.length}</b> færslur fyrir <b>${MONTH_NAMES[month-1]} ${year}</b>, samtals <b>${fmt(total)} kg</b>. Flokka núna…`);

    // Suspicious entries: huge weights
    const suspicious = state.rows
      .map((r, idx) => ({ r, idx }))
      .filter(x => x.r.thyngd >= 20000); // > 20 tonn is unusual

    const built = buildBuckets(state.rows);
    const questions = [];
    suspicious.forEach(s => questions.push({ type: "suspicious", idx: s.idx, row: s.r }));
    built.questions.forEach(q => questions.push(q));
    state.pendingQuestions = questions;
    state.unknownDecisions = built.unknownDecisions;
    state.knownDecisions = built.knownDecisions || {};
    state.excludedIndices = new Set();
    state.perRow = built.perRow;

    if (questions.length === 0) {
      botSay(`Engar vafasamar færslur. Flokkun tilbúin.`);
      finishPipeline();
    } else {
      botSay(`Ég hef <b>${questions.length}</b> ${questions.length === 1 ? "spurningu" : "spurningar"} áður en við lokum þessu.`);
      askNextQuestion();
    }
  } catch (err) {
    console.error(err);
    botSay(`Villa við að lesa skrána: <code>${err.message}</code>`);
  }
}

function askNextQuestion() {
  if (!state.pendingQuestions.length) {
    finishPipeline();
    return;
  }
  const q = state.pendingQuestions.shift();

  if (q.type === "suspicious") {
    const r = q.row;
    const d = r.dags.toISOString().slice(0, 10);
    botSay(
      `Óvenju stór færsla <code>${r.faersla}</code> (${d}): <b>${r.efnis}</b> → <b>${r.flutn}</b>, <b>${fmt(r.thyngd)} kg</b>. Taka með eða sleppa (líklega villa)?`
    );
    askChoices([
      { label: "Taka með", variant: "primary", onPick: () => askNextQuestion() },
      { label: "Sleppa", variant: "danger", onPick: () => {
          state.excludedIndices.add(q.idx);
          askNextQuestion();
        }
      },
    ]);
  } else if (q.type === "unknown-big") {
    botSay(
      `Nýr Efniseigandi: <b>${q.efnis}</b> með <b>${fmt(q.sum)} kg</b> (yfir þröskuldinum ${fmt(state.threshold)}). Gefa honum eigin bakka eða setja í Einka?`
    );
    askChoices([
      { label: "Eigin bakki", variant: "primary", onPick: () => {
          state.unknownDecisions[q.efnis] = "own";
          state.mapping[normKey(q.efnis)] = { bucket: q.efnis, group: "fura" };
          saveMapping();
          askNextQuestion();
        }
      },
      { label: "Setja í Einka", onPick: () => {
          state.unknownDecisions[q.efnis] = "einka";
          askNextQuestion();
        }
      },
    ]);
  } else if (q.type === "known-small") {
    botSay(
      `<b>${q.bucket}</b> (${q.efnis}) með aðeins <b>${fmt(q.sum)} kg</b> — undir þröskuldinum ${fmt(state.threshold)}. Halda sínum bakka eða setja í Einka í þetta skipti?`
    );
    askChoices([
      { label: "Halda bakka", variant: "primary", onPick: () => {
          state.knownDecisions[q.efnis] = "own";
          askNextQuestion();
        }
      },
      { label: "Setja í Einka", onPick: () => {
          state.knownDecisions[q.efnis] = "einka";
          askNextQuestion();
        }
      },
    ]);
  }
}

function finishPipeline() {
  const { buckets, einkaItems } = finalizeBuckets(state.perRow, state.unknownDecisions, state.knownDecisions, state.excludedIndices);
  state.classified = { buckets, einkaItems };
  renderBucketsTable(buckets);

  const totalIn = Object.values(buckets).reduce((s, b) => s + b.total, 0);
  const excludedSum = [...state.excludedIndices].reduce((s, i) => s + state.perRow[i].row.thyngd, 0);
  let summary = `Flokkun tilbúin: <b>${fmt(totalIn)} kg</b> í ${Object.keys(buckets).length} bakka.`;
  if (excludedSum > 0) summary += ` Sleppt: <b>${fmt(excludedSum)} kg</b>.`;
  if (einkaItems.length) {
    const grouped = {};
    einkaItems.forEach(it => { grouped[it.efnis] = (grouped[it.efnis] || 0) + it.kg; });
    const list = Object.entries(grouped).map(([k, v]) => `${k} (${fmt(v)})`).join(", ");
    summary += `<br><br><b>Í Einkaðili:</b><br>${list}`;
  }
  botSay(summary);
  botSay(`Skjalið er tilbúið. Ýttu á <b>Hlaða niður xlsx</b> fyrir neðan.`);
  el.downloadArea.classList.remove("hidden");
}

// ============================================================
// Output xlsx — matches look of master Hjólbarðar 2026.xlsx
// ============================================================

// Theme-matching colors (pulled from master's theme1.xml)
const COLORS = {
  headerFill:    "FF4472C4",   // accent1 — row 2 "Flutningsaðili / Magn:"
  groupFill:     "FFDDEBF7",   // accent5 tint ~0.8 — "Fura" / "Sorpa" / etc. group rows
  samtalsFill:   "FF5B9BD5",   // accent5 — Samtals row
  whiteFont:     "FFFFFFFF",
};

function styleBorder(style = "thin") {
  return { top: { style }, bottom: { style }, left: { style }, right: { style } };
}

function writeDataRow(ws, r, label, value) {
  ws.mergeCells(`B${r}:C${r}`);
  const b = ws.getCell(`B${r}`);
  const d = ws.getCell(`D${r}`);
  b.value = label;
  b.font = { name: "Calibri", size: 10 };
  b.alignment = { horizontal: "left", vertical: "center" };
  b.border = styleBorder("thin");
  if (value !== undefined && value !== null) d.value = value;
  d.font = { name: "Calibri", size: 10 };
  d.alignment = { horizontal: "center", vertical: "center" };
  d.numFmt = "#,##0";
  d.border = styleBorder("thin");
}

function writeGroupRow(ws, r, label, formula) {
  ws.mergeCells(`B${r}:C${r}`);
  const b = ws.getCell(`B${r}`);
  const d = ws.getCell(`D${r}`);
  b.value = label;
  b.font = { name: "Calibri", size: 12, bold: true };
  b.alignment = { horizontal: "right", vertical: "center" };
  b.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.groupFill } };
  b.border = styleBorder("medium");
  if (formula) d.value = { formula };
  d.font = { name: "Calibri", size: 12, bold: true };
  d.alignment = { horizontal: "center", vertical: "center" };
  d.numFmt = "#,##0";
  d.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.groupFill } };
  d.border = styleBorder("medium");
}

async function buildOutput() {
  if (state.material === "dekk") return buildDekkOutput();
  if (state.material === "malmar") return buildMalmarOutput();
  return buildTimburOutput();
}

// ============================================================
// Málmar-specific classification & output
// ============================================================
function classifyMalmarRows(rows, overrides = {}) {
  const classified = [];
  const unmapped = [];
  for (const row of rows) {
    const lysing = normKey(row.lysing);
    if (!lysing || MALMAR_EFNIS_EXCLUDE.has(lysing)) continue;
    if (overrides[row.lysing] === "skip") continue;
    let col;
    if (overrides[row.lysing]) col = overrides[row.lysing];
    else col = MALMAR_EFNIS_TO_COL[lysing] || MALMAR_UNKNOWN_DEFAULT_COL;
    const isUnmapped = !MALMAR_EFNIS_TO_COL[lysing] && !overrides[row.lysing];
    if (isUnmapped) unmapped.push({ ...row, defaultedToJ: true });

    const efnisKey = normKey(row.efnis);
    const flutnKey = normKey(row.flutn);
    let bucket;

    // 1) EFNISEIGANDI-based buckets taka alltaf forgang (Fura AK, SORPA, Hrunamann, Málmar og partar, Terra, ÍG, ...)
    if (MALMAR_EFNIS_MAPPING[efnisKey]) {
      bucket = MALMAR_EFNIS_MAPPING[efnisKey];
    }
    // 2) Fyrir 1. Bíll → grúppa eftir Efniseiganda (eigandi bílsins)
    else if (col === "E") {
      bucket = MALMAR_CAR_EFNIS_MAPPING[efnisKey] || "Ýmsir";
    }
    // 3) Annað → grúppa eftir Flutningsaðila
    else {
      bucket = MALMAR_FLUTN_MAPPING[flutnKey] || "Ýmsir";
    }

    classified.push({ ...row, column: col, bucket, defaultedToJ: isUnmapped });
  }
  return { classified, unmapped };
}

function groupMalmarBuckets(classified) {
  // Build bucket → { trips(C), carCount(D), E,F,G,H,I,J, rows[] }
  const buckets = {};
  for (const b of MALMAR_BUCKETS) {
    buckets[b] = { trips: 0, carCount: 0, E:0, F:0, G:0, H:0, I:0, J:0, rows: [] };
  }
  for (const row of classified) {
    const b = buckets[row.bucket] || buckets["Ýmsir"];
    b[row.column] += row.thyngd;
    if (row.column === "E") b.carCount += 1;
    b.rows.push(row);
  }
  // Compute ferðir (trips) per bucket: cluster timestamps within 30-min gap
  for (const [name, b] of Object.entries(buckets)) {
    if (!b.rows.length) continue;
    // Group rows by key (efnis for cars, flutn for others), date, cluster by time
    const sorted = b.rows.slice().sort((a, b2) => a.dags - b2.dags);
    let trips = 0;
    let lastKey = null;
    let lastTime = null;
    for (const r of sorted) {
      const key = r.column === "E" ? normKey(r.efnis) : normKey(r.flutn);
      const t = r.dags.getTime();
      // Same bucket + same identity + within 30 min of last → same trip
      if (lastKey === key && lastTime !== null && (t - lastTime) <= 30 * 60 * 1000) {
        // same trip, extend lastTime
        lastTime = t;
      } else {
        trips++;
        lastKey = key;
        lastTime = t;
      }
    }
    b.trips = trips;
  }
  return buckets;
}

// Málmar colors (dark-blue theme — matches "Samantekt járns 2026.xlsx")
const MALMAR_COLORS = {
  headerFill: "FFDCE6F1",    // theme-3 tint 0.8 (very light blue-gray)
  samtalsFill: "FFDCE6F1",   // same (matches master)
};

async function buildMalmarOutput() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Fura — Málmar";
  wb.created = new Date();

  const monthName = MONTH_NAMES[state.month - 1];
  const monthNameNice = monthName.charAt(0) + monthName.slice(1).toLowerCase();
  const ws = wb.addWorksheet(monthNameNice, { views: [{ showGridLines: false }] });

  // Column widths matching master EXACTLY
  ws.getColumn(1).width = 3.43;    // A
  ws.getColumn(2).width = 27.86;   // B — Flutningsaðili
  ws.getColumn(3).width = 8;       // C — Fjöldi ferða
  ws.getColumn(4).width = 8.86;    // D — Bílar fjöldi
  ws.getColumn(5).width = 11;      // E — Þyngd bíla
  ws.getColumn(6).width = 10.43;   // F — Rafgeymar
  ws.getColumn(7).width = 11.14;   // G — Hvarfakútar
  ws.getColumn(8).width = 10.71;   // H — Góð-málmar
  ws.getColumn(9).width = 12.43;   // I — Stór heimilistæki
  ws.getColumn(10).width = 11.29;  // J — Annað Brotajárn
  ws.getColumn(11).width = 12;     // K — Heildarþyngd
  ws.getColumn(12).width = 11;     // L — Meðalþungi
  ws.getColumn(13).width = 10.29;  // M — Staða
  ws.getColumn(14).width = 11;     // N — % breyting

  // Row 1 — title
  const b1 = ws.getCell("B1");
  b1.value = `Mánuður: ${monthName}`;
  b1.font = { name: "Calibri", size: 10, bold: true };
  b1.alignment = { vertical: "center" };
  const c1 = ws.getCell("C1");
  c1.value = "Samantekt á innvigtuðu efni hjá";
  c1.font = { name: "Calibri", size: 10, bold: true };
  c1.alignment = { vertical: "center" };
  const f1 = ws.getCell("F1");
  f1.value = "Furu ehf., málmendurvinnslu";
  f1.font = { name: "Calibri", size: 10, bold: true };
  f1.alignment = { vertical: "center" };

  // Row 2 — headers (M2:N2 merged in master)
  ws.mergeCells("M2:N2");
  const headerStyle = cell => {
    cell.font = { name: "Calibri", size: 11, bold: true };
    cell.alignment = { horizontal: "center", vertical: "center", wrapText: true };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: MALMAR_COLORS.headerFill } };
    cell.border = styleBorder("thin");
  };
  const headers = {
    B2: "Flutningsaðili:", C2: "Fjöldi ferða", D2: "Bílar fjöldi", E2: "Þyngd bíla",
    F2: "Rafgeymar", G2: "Hvarfakútar", H2: "Góð-málmar", I2: "Stór heimilistæki",
    J2: "Annað Brotajárn", K2: "Heildar-þyngd kg.", L2: "Meðal-þungi / kg",
    M2: "Staða m.v. síðasta mánuð",
  };
  for (const [addr, val] of Object.entries(headers)) {
    const c = ws.getCell(addr);
    c.value = val;
    headerStyle(c);
  }
  ws.getRow(2).height = 36;

  // Load previous month snapshot
  const prevKey = `fura-malmar-snapshot-${state.year}-${state.month - 1 || 12}`;
  const prevYear = state.month === 1 ? state.year - 1 : state.year;
  const prevKeyAdjusted = `fura-malmar-snapshot-${prevYear}-${state.month === 1 ? 12 : state.month - 1}`;
  let prevSnapshot = {};
  try {
    const stored = localStorage.getItem(prevKeyAdjusted);
    if (stored) prevSnapshot = JSON.parse(stored);
  } catch {}

  // Classify and group
  const classified = state.classified.malmar;  // {buckets, unmapped}
  const buckets = classified.buckets;

  let r = 3;
  const firstDataRow = r;
  for (const bname of MALMAR_BUCKETS) {
    const b = buckets[bname];
    const isSectionHeader = bname === "Bílar og varahlutir";
    const cellB = ws.getCell(`B${r}`);
    cellB.value = bname;
    cellB.font = { name: "Calibri", size: 10, bold: true };  // bucket names are bold in master
    cellB.alignment = { horizontal: "left", vertical: "center", wrapText: true };
    cellB.border = styleBorder("thin");

    if (!isSectionHeader && b) {
      const cells = [
        [`C${r}`, b.trips || 0, "0"],
        [`D${r}`, b.carCount || 0, "0"],
        [`E${r}`, b.E || 0, "#,##0"],
        [`F${r}`, b.F || 0, "#,##0"],
        [`G${r}`, b.G || 0, "#,##0"],
        [`H${r}`, b.H || 0, "#,##0"],
        [`I${r}`, b.I || 0, "#,##0"],
        [`J${r}`, b.J || 0, "#,##0"],
      ];
      for (const [addr, val, fmt] of cells) {
        const c = ws.getCell(addr);
        c.value = val;
        c.font = { name: "Calibri", size: 10 };
        c.alignment = { horizontal: "center", vertical: "center" };
        c.numFmt = fmt;
        c.border = styleBorder("thin");
      }
      // K = heildarþyngd = SUM(E:J)
      const k = ws.getCell(`K${r}`);
      k.value = { formula: `SUM(E${r}:J${r})` };
      k.font = { name: "Calibri", size: 10, bold: true };
      k.alignment = { horizontal: "center", vertical: "center" };
      k.numFmt = "#,##0";
      k.border = styleBorder("thin");
      // L = meðalþungi = K/C
      const l = ws.getCell(`L${r}`);
      l.value = { formula: `IF(C${r}=0,0,K${r}/C${r})` };
      l.font = { name: "Calibri", size: 10 };
      l.alignment = { horizontal: "center", vertical: "center" };
      l.numFmt = "#,##0.00";
      l.border = styleBorder("thin");
      // M/N = compare to prev month
      const currentK = (b.E||0)+(b.F||0)+(b.G||0)+(b.H||0)+(b.I||0)+(b.J||0);
      const prevK = (prevSnapshot[bname] && prevSnapshot[bname].K) || 0;
      let status = "Jafnt";
      let pct = "-";
      if (prevK > 0 || currentK > 0) {
        if (currentK > prevK) status = "Hærra";
        else if (currentK < prevK) status = "Lægra";
        if (prevK > 0) pct = (currentK - prevK) / prevK;
      }
      const m = ws.getCell(`M${r}`);
      m.value = status;
      m.font = { name: "Calibri", size: 10 };
      m.alignment = { horizontal: "center", vertical: "center" };
      m.border = styleBorder("thin");
      const n = ws.getCell(`N${r}`);
      n.value = pct;
      n.font = { name: "Calibri", size: 10 };
      n.alignment = { horizontal: "center", vertical: "center" };
      if (typeof pct === "number") n.numFmt = "0.00%";
      n.border = styleBorder("thin");
    }
    r++;
  }
  const lastDataRow = r - 1;

  // Samtals row — same light-blue fill as headers (matches master)
  const sRow = r;
  const sB = ws.getCell(`B${sRow}`);
  sB.value = "Samtals:  ";
  sB.font = { name: "Calibri", size: 12, bold: true };
  sB.alignment = { horizontal: "right", vertical: "center" };
  sB.fill = { type: "pattern", pattern: "solid", fgColor: { argb: MALMAR_COLORS.samtalsFill } };
  sB.border = styleBorder("medium");
  for (const col of ["C","D","E","F","G","H","I","J","K"]) {
    const c = ws.getCell(`${col}${sRow}`);
    c.value = { formula: `SUM(${col}${firstDataRow}:${col}${lastDataRow})` };
    c.font = { name: "Calibri", size: 11, bold: true };
    c.alignment = { horizontal: "center", vertical: "center" };
    c.numFmt = (col === "C" || col === "D") ? "0" : "#,##0";
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: MALMAR_COLORS.samtalsFill } };
    c.border = styleBorder("medium");
  }
  const sL = ws.getCell(`L${sRow}`);
  sL.value = { formula: `IF(C${sRow}=0,0,K${sRow}/C${sRow})` };
  sL.font = { name: "Calibri", size: 11, bold: true };
  sL.alignment = { horizontal: "center", vertical: "center" };
  sL.numFmt = "#,##0.00";
  sL.fill = { type: "pattern", pattern: "solid", fgColor: { argb: MALMAR_COLORS.samtalsFill } };
  sL.border = styleBorder("medium");

  // "Meðalfjöldi ferða á dag:" row
  r++;
  const avgRow = r;
  const daysInMonth = new Date(state.year, state.month, 0).getDate();
  const aB = ws.getCell(`B${avgRow}`);
  aB.value = "Meðalfjöldi ferða á dag:  ";
  aB.font = { name: "Calibri", size: 10, italic: true, bold: true };
  aB.alignment = { horizontal: "right", vertical: "center" };
  const aC = ws.getCell(`C${avgRow}`);
  aC.value = { formula: `C${sRow}/${daysInMonth}` };
  aC.font = { name: "Calibri", size: 10, italic: true };
  aC.alignment = { horizontal: "center" };
  aC.numFmt = "0.00";

  // Save snapshot for next month
  const snapshot = {};
  for (const [name, b] of Object.entries(buckets)) {
    const K = (b.E||0)+(b.F||0)+(b.G||0)+(b.H||0)+(b.I||0)+(b.J||0);
    snapshot[name] = { K, trips: b.trips || 0 };
  }
  try {
    localStorage.setItem(`fura-malmar-snapshot-${state.year}-${state.month}`, JSON.stringify(snapshot));
  } catch {}

  // ---- Yfirferð sheet ----
  const rv = wb.addWorksheet("Yfirferð");
  rv.getColumn(1).width = 10;
  rv.getColumn(2).width = 24;
  rv.getColumn(3).width = 10;
  rv.getColumn(4).width = 32;
  rv.getColumn(5).width = 32;
  rv.getColumn(6).width = 22;
  rv.getColumn(7).width = 20;
  rv.getColumn(8).width = 10;
  rv.getColumn(9).width = 12;
  rv.addRow(["Færsla","Dags","Bílnr","Efniseigandi","Flutningsaðili","Efnislýsing","Bakki","Dálkur","Þyngd (kg)"]).font = { bold: true };
  for (const row of state.perRow) {
    const r2 = row.row;
    const cls = row.classifiedMalmar;
    rv.addRow([
      r2.faersla, r2.dags, r2.bilnr,
      r2.efnis, r2.flutn, r2.lysing,
      cls ? cls.bucket : "— (sleppt)",
      cls ? cls.column : "",
      r2.thyngd,
    ]);
  }

  const buf = await wb.xlsx.writeBuffer();
  return new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

async function buildDekkOutput() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Fura — Hjólbarðar";
  wb.created = new Date();

  const monthName = MONTH_NAMES[state.month - 1];
  const ws = wb.addWorksheet(monthName, { views: [{ showGridLines: false }] });

  // Column widths (match master)
  ws.getColumn(1).width = 4;
  ws.getColumn(2).width = 17.86;
  ws.getColumn(3).width = 18.57;
  ws.getColumn(4).width = 22.43;

  // Row 1 — title
  const b1 = ws.getCell("B1");
  b1.value = `Mánuður: ${monthName}`;
  b1.font = { name: "Calibri", size: 10, bold: true };
  b1.alignment = { vertical: "center" };
  const c1 = ws.getCell("C1");
  c1.value = "Samantekt á innvigtuðum dekk hjá Furu ehf.";
  c1.font = { name: "Calibri", size: 10, bold: true };
  c1.alignment = { vertical: "center" };

  // Row 2 — column headers
  ws.mergeCells("B2:C2");
  const b2 = ws.getCell("B2");
  b2.value = "Flutningsaðili";
  b2.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  b2.alignment = { horizontal: "center", vertical: "center" };
  b2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerFill } };
  b2.border = styleBorder("medium");
  const d2 = ws.getCell("D2");
  d2.value = "Magn:";
  d2.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  d2.alignment = { horizontal: "center", vertical: "center" };
  d2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerFill } };
  d2.border = styleBorder("medium");

  const { buckets } = state.classified;
  const groups = { fura: [], sorpa: [], ig: [] };
  for (const [name, info] of Object.entries(buckets)) {
    groups[info.group || "fura"].push({ name, total: info.total });
  }
  for (const g of Object.values(groups)) g.sort((a, b) => b.total - a.total);

  let r = 3;
  // --- Fura group ---
  const furaHeaderRow = r++;
  const furaFirst = r;
  groups.fura.forEach(b => { writeDataRow(ws, r, b.name, b.total); r++; });
  const furaLast = r - 1;
  writeGroupRow(ws, furaHeaderRow, "Fura", `SUM(D${furaFirst}:D${furaLast})`);

  // --- Sorpa group ---
  let sorpaHeaderRow = null;
  const sorpaHeader = r++;
  const sorpaFirst = r;
  if (groups.sorpa.length) {
    groups.sorpa.forEach(b => { writeDataRow(ws, r, b.name, b.total); r++; });
    const sorpaLast = r - 1;
    writeGroupRow(ws, sorpaHeader, "Sorpa", `SUM(D${sorpaFirst}:D${sorpaLast})`);
    sorpaHeaderRow = sorpaHeader;
  } else {
    // Still show empty Sorpa header to match master layout
    writeGroupRow(ws, sorpaHeader, "Sorpa", null);
    ws.getCell(`D${sorpaHeader}`).value = 0;
    sorpaHeaderRow = sorpaHeader;
  }

  // --- Terra group (placeholder, always shown — matches master) ---
  const terraHeader = r++;
  writeGroupRow(ws, terraHeader, "Terra", null);
  ws.getCell(`D${terraHeader}`).value = 0;
  // Empty data row below (mimics master)
  writeDataRow(ws, r, "", 0);
  r++;

  // --- Ísl.Gámafélagið group ---
  const igHeader = r++;
  const igFirst = r;
  if (groups.ig.length) {
    groups.ig.forEach(b => { writeDataRow(ws, r, b.name, b.total); r++; });
    const igLast = r - 1;
    writeGroupRow(ws, igHeader, "Ísl.Gámafélagið", `SUM(D${igFirst}:D${igLast})`);
  } else {
    writeDataRow(ws, r, "", 0);
    r++;
    writeGroupRow(ws, igHeader, "Ísl.Gámafélagið", `SUM(D${igFirst}:D${igFirst})`);
  }

  // --- Samtals ---
  const samtalsRow = r;
  ws.mergeCells(`B${samtalsRow}:C${samtalsRow}`);
  const bS = ws.getCell(`B${samtalsRow}`);
  bS.value = "Samtals:";
  bS.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  bS.alignment = { horizontal: "right", vertical: "center" };
  bS.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  bS.border = styleBorder("medium");
  const dS = ws.getCell(`D${samtalsRow}`);
  dS.value = { formula: `D${furaHeaderRow}+D${sorpaHeaderRow}+D${terraHeader}+D${igHeader}` };
  dS.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  dS.alignment = { horizontal: "right", vertical: "center" };
  dS.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  dS.border = styleBorder("medium");
  dS.numFmt = "#,##0";

  // ---- TAFLA sheet (yearly summary, matches master) ----
  const tf = wb.addWorksheet("TAFLA", { views: [{ showGridLines: false }] });
  const monthsShort = ["JAN","FEB","MAR","APR","MAÍ","JÚN","JÚL","ÁGÚ","SEP","OKT","NÓV","DES"];
  const years = [2021, 2022, 2023, 2024, 2025, state.year];
  // Columns: A (months), B..G (6 years)
  tf.getColumn(1).width = 6.71;
  for (let c = 2; c <= 7; c++) tf.getColumn(c).width = 9.14;

  const yearHeaderFill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF2CC" } };
  const sumRowFill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFCE4D6" } };

  // Row 1 — year headers
  years.forEach((y, i) => {
    const c = tf.getCell(1, 2 + i);
    c.value = y;
    c.font = { name: "Arial", size: 11, bold: true, color: { argb: "FF7B2E2E" } };
    c.alignment = { horizontal: "center" };
    c.fill = yearHeaderFill;
    c.border = styleBorder("thin");
  });
  const corner = tf.getCell(1, 1);
  corner.fill = yearHeaderFill;
  corner.border = styleBorder("thin");

  // Rows 2–13 — months
  const currentYearColIdx = 2 + 5; // 2026 is 6th year column = G
  monthsShort.forEach((m, i) => {
    const row = 2 + i;
    const a = tf.getCell(row, 1);
    a.value = m;
    a.font = { name: "Arial", size: 10 };
    a.alignment = { horizontal: "left" };
    a.fill = yearHeaderFill;
    a.border = styleBorder("thin");
    for (let col = 2; col <= 7; col++) {
      const c = tf.getCell(row, col);
      c.font = { name: "Arial", size: 10 };
      c.alignment = { horizontal: "center" };
      c.numFmt = "#,##0.00";
      c.fill = yearHeaderFill;
      c.border = styleBorder("thin");
      // Fill the current month in the current year column
      if (col === currentYearColIdx && (i + 1) === state.month) {
        const totalKg = Object.values(state.classified.buckets).reduce((s, b) => s + b.total, 0);
        c.value = totalKg / 1000;
      }
    }
  });

  // Row 14 — TONN:
  const tonnRow = 14;
  const tonnLabel = tf.getCell(tonnRow, 1);
  tonnLabel.value = "TONN:";
  tonnLabel.font = { name: "Arial", size: 10, bold: true };
  tonnLabel.alignment = { horizontal: "left" };
  tonnLabel.fill = sumRowFill;
  tonnLabel.border = styleBorder("thin");
  for (let col = 2; col <= 7; col++) {
    const c = tf.getCell(tonnRow, col);
    const letter = String.fromCharCode(64 + col);
    c.value = { formula: `SUM(${letter}2:${letter}13)` };
    c.font = { name: "Arial", size: 10, bold: true };
    c.alignment = { horizontal: "center" };
    c.numFmt = "#,##0.00";
    c.fill = sumRowFill;
    c.border = styleBorder("thin");
  }

  // Title line below
  tf.getCell("B18").value = "Innkomnir hjólbarðar";
  tf.getCell("B18").font = { name: "Arial", size: 11, bold: true };

  // ---- Review sheet ----
  const rv = wb.addWorksheet("Yfirferð");
  rv.getColumn(1).width = 10;
  rv.getColumn(2).width = 24;
  rv.getColumn(3).width = 10;
  rv.getColumn(4).width = 32;
  rv.getColumn(5).width = 36;
  rv.getColumn(6).width = 24;
  rv.getColumn(7).width = 12;

  rv.addRow(["Færsla","Dags","Bílnr","Efniseigandi","Flutningsaðili","Verkstaður/Athugs.","Þyngd (kg)"]).font = { bold: true };

  state.perRow.forEach((p, idx) => {
    const r = p.row;
    rv.addRow([
      r.faersla,
      r.dags,
      r.bilnr,
      r.efnis + (state.excludedIndices.has(idx) ? "  [SLEPPT]" : ""),
      r.flutn,
      r.verk || r.athug,
      r.thyngd,
    ]);
  });

  // Styling: shade excluded rows
  for (let i = 2; i <= rv.rowCount; i++) {
    const idx = i - 2;
    if (state.excludedIndices.has(idx)) {
      rv.getRow(i).eachCell(c => c.font = { color: { argb: "FF999999" }, strike: true });
    }
  }

  const buf = await wb.xlsx.writeBuffer();
  return new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

// ============================================================
// Timbur/Málmar output — flat list with trip count + avg weight
// Matches look of "Hreint timbur 2026.xlsx"
// ============================================================
async function buildTimburOutput() {
  const wb = new ExcelJS.Workbook();
  wb.creator = `Fura — ${activeConfig().name}`;
  wb.created = new Date();

  const monthName = MONTH_NAMES[state.month - 1];
  const monthNameLower = monthName.charAt(0) + monthName.slice(1).toLowerCase();
  const ws = wb.addWorksheet(monthName, { views: [{ showGridLines: false }] });

  const subtitle = state.material === "timbur"
    ? "Samantekt á innv. hreinu timbri til Furu ehf., málmendurvinnslu"
    : "Samantekt á innvigtuðum málmum hjá Furu ehf., málmendurvinnslu";

  // Column widths matching master
  ws.getColumn(1).width = 2;
  ws.getColumn(2).width = 32;    // B — Flutningsaðili
  ws.getColumn(3).width = 14;    // C — Fjöldi ferða
  ws.getColumn(4).width = 14;    // D — Þyngd
  for (let c = 5; c <= 9; c++) ws.getColumn(c).width = 4;
  ws.getColumn(10).width = 18;   // J — Meðalþungi

  // Row 1 — title + subtitle
  const b1 = ws.getCell("B1");
  b1.value = `Mánuður: ${monthNameLower}`;
  b1.font = { name: "Calibri", size: 11, bold: true };
  b1.alignment = { vertical: "center" };
  const c1 = ws.getCell("C1");
  c1.value = subtitle;
  c1.font = { name: "Calibri", size: 11, bold: true };
  c1.alignment = { vertical: "center" };

  // Row 2 — column headers (B,C,D,J)
  const headerStyle = cell => {
    cell.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
    cell.alignment = { horizontal: "center", vertical: "center" };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerFill } };
    cell.border = styleBorder("medium");
  };
  ws.getCell("B2").value = "Flutningsaðili"; headerStyle(ws.getCell("B2"));
  ws.getCell("C2").value = "Fjöldi ferða";   headerStyle(ws.getCell("C2"));
  ws.getCell("D2").value = "Þyngd";          headerStyle(ws.getCell("D2"));
  ws.getCell("J2").value = "Meðalþungi / kg"; headerStyle(ws.getCell("J2"));

  // Data rows — flat list sorted alphabetically (matches master)
  const { buckets } = state.classified;
  const EINKA = einkaBucketName();
  const entries = Object.entries(buckets).map(([name, info]) => ({ name, ...info }));
  // Sort alphabetically, but Einka near the middle like the master
  entries.sort((a, b) => a.name.localeCompare(b.name, "is"));

  let r = 3;
  const firstDataRow = r;
  for (const e of entries) {
    const b = ws.getCell(`B${r}`);
    b.value = e.name;
    b.font = { name: "Calibri", size: 10 };
    b.alignment = { horizontal: "left", vertical: "center" };
    b.border = styleBorder("thin");

    const c = ws.getCell(`C${r}`);
    c.value = e.trips;
    c.font = { name: "Calibri", size: 10 };
    c.alignment = { horizontal: "center", vertical: "center" };
    c.border = styleBorder("thin");

    const d = ws.getCell(`D${r}`);
    d.value = e.total;
    d.font = { name: "Calibri", size: 10 };
    d.alignment = { horizontal: "center", vertical: "center" };
    d.numFmt = "#,##0";
    d.border = styleBorder("thin");

    const j = ws.getCell(`J${r}`);
    j.value = { formula: `IF(C${r}=0,0,D${r}/C${r})` };
    j.font = { name: "Calibri", size: 10 };
    j.alignment = { horizontal: "center", vertical: "center" };
    j.numFmt = "#,##0.00";
    j.border = styleBorder("thin");
    r++;
  }
  const lastDataRow = r - 1;

  // Samtals row
  const samtalsRow = r;
  const sB = ws.getCell(`B${samtalsRow}`);
  sB.value = "Samtals: ";
  sB.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  sB.alignment = { horizontal: "right", vertical: "center" };
  sB.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  sB.border = styleBorder("medium");

  const sC = ws.getCell(`C${samtalsRow}`);
  sC.value = { formula: `SUM(C${firstDataRow}:C${lastDataRow})` };
  sC.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  sC.alignment = { horizontal: "center", vertical: "center" };
  sC.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  sC.border = styleBorder("medium");

  const sD = ws.getCell(`D${samtalsRow}`);
  sD.value = { formula: `SUM(D${firstDataRow}:D${lastDataRow})` };
  sD.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  sD.alignment = { horizontal: "center", vertical: "center" };
  sD.numFmt = "#,##0";
  sD.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  sD.border = styleBorder("medium");

  const sJ = ws.getCell(`J${samtalsRow}`);
  sJ.value = { formula: `IF(C${samtalsRow}=0,0,D${samtalsRow}/C${samtalsRow})` };
  sJ.font = { name: "Calibri", size: 12, bold: true, color: { argb: COLORS.whiteFont } };
  sJ.alignment = { horizontal: "center", vertical: "center" };
  sJ.numFmt = "#,##0.00";
  sJ.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.samtalsFill } };
  sJ.border = styleBorder("medium");

  // "Average trips per day" cell (daily rate — mimics master's C32)
  r++;
  const avgRow = r;
  const daysInMonth = new Date(state.year, state.month, 0).getDate();
  const avgC = ws.getCell(`C${avgRow}`);
  avgC.value = { formula: `C${samtalsRow}/${daysInMonth}` };
  avgC.font = { name: "Calibri", size: 10, italic: true };
  avgC.alignment = { horizontal: "center" };
  avgC.numFmt = "0.00";

  // ---- TAFLA sheet (year columns configured per material) ----
  const cfg = activeConfig();
  const tf = wb.addWorksheet("TAFLA", { views: [{ showGridLines: false }] });
  const monthsShort = ["JAN","FEB","MAR","APR","MAÍ","JÚN","JÚL","ÁGÚ","SEP","OKT","NÓV","DES"];
  const years = cfg.taflaYears;
  tf.getColumn(1).width = 6.71;
  for (let c = 2; c <= 1 + years.length; c++) tf.getColumn(c).width = 9.14;

  const yearHeaderFill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF2CC" } };
  const sumRowFill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFCE4D6" } };

  years.forEach((y, i) => {
    const c = tf.getCell(1, 2 + i);
    c.value = y;
    c.font = { name: "Arial", size: 11, bold: true, color: { argb: "FF7B2E2E" } };
    c.alignment = { horizontal: "center" };
    c.fill = yearHeaderFill;
    c.border = styleBorder("thin");
  });
  const corner = tf.getCell(1, 1);
  corner.fill = yearHeaderFill;
  corner.border = styleBorder("thin");

  const yearIdx = years.indexOf(state.year);
  const currentYearColIdx = yearIdx >= 0 ? 2 + yearIdx : null;
  monthsShort.forEach((m, i) => {
    const row = 2 + i;
    const a = tf.getCell(row, 1);
    a.value = m;
    a.font = { name: "Arial", size: 10 };
    a.alignment = { horizontal: "left" };
    a.fill = yearHeaderFill;
    a.border = styleBorder("thin");
    for (let col = 2; col <= 1 + years.length; col++) {
      const c = tf.getCell(row, col);
      c.font = { name: "Arial", size: 10 };
      c.alignment = { horizontal: "center" };
      c.numFmt = "#,##0.00";
      c.fill = yearHeaderFill;
      c.border = styleBorder("thin");
      if (currentYearColIdx !== null && col === currentYearColIdx && (i + 1) === state.month) {
        const totalKg = Object.values(state.classified.buckets).reduce((s, b) => s + b.total, 0);
        c.value = totalKg / 1000;
      }
    }
  });

  const tonnRow = 14;
  const tonnLabel = tf.getCell(tonnRow, 1);
  tonnLabel.value = "TONN:";
  tonnLabel.font = { name: "Arial", size: 10, bold: true };
  tonnLabel.alignment = { horizontal: "left" };
  tonnLabel.fill = sumRowFill;
  tonnLabel.border = styleBorder("thin");
  for (let col = 2; col <= 1 + years.length; col++) {
    const c = tf.getCell(tonnRow, col);
    const letter = col <= 26 ? String.fromCharCode(64 + col) : "A" + String.fromCharCode(64 + col - 26);
    c.value = { formula: `SUM(${letter}2:${letter}13)` };
    c.font = { name: "Arial", size: 10, bold: true };
    c.alignment = { horizontal: "center" };
    c.numFmt = "#,##0.00";
    c.fill = sumRowFill;
    c.border = styleBorder("thin");
  }
  tf.getCell("B18").value = cfg.taflaTitle;
  tf.getCell("B18").font = { name: "Arial", size: 11, bold: true };

  // ---- Yfirferð sheet ----
  const rv = wb.addWorksheet("Yfirferð");
  rv.getColumn(1).width = 10;
  rv.getColumn(2).width = 24;
  rv.getColumn(3).width = 10;
  rv.getColumn(4).width = 32;
  rv.getColumn(5).width = 36;
  rv.getColumn(6).width = 24;
  rv.getColumn(7).width = 12;
  rv.addRow(["Færsla","Dags","Bílnr","Efniseigandi","Flutningsaðili","Verkstaður/Athugs.","Þyngd (kg)"]).font = { bold: true };
  state.perRow.forEach((p, idx) => {
    const row = p.row;
    rv.addRow([
      row.faersla,
      row.dags,
      row.bilnr,
      row.efnis + (state.excludedIndices.has(idx) ? "  [SLEPPT]" : ""),
      row.flutn,
      row.verk || row.athug,
      row.thyngd,
    ]);
  });
  for (let i = 2; i <= rv.rowCount; i++) {
    const idx = i - 2;
    if (state.excludedIndices.has(idx)) {
      rv.getRow(i).eachCell(c => c.font = { color: { argb: "FF999999" }, strike: true });
    }
  }

  const buf = await wb.xlsx.writeBuffer();
  return new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

async function downloadOutput() {
  const blob = await buildOutput();
  const monthShort = MONTH_SHORT[state.month - 1];
  const prefix = { dekk: "Hjolbardar", timbur: "Timbur", malmar: "Malmar" }[state.material] || "Fura";
  const fname = `${prefix}_${monthShort}_${state.year}.xlsx`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fname;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  botSay(`Náði í <code>${fname}</code>.`);
}

function copySummary() {
  const { buckets } = state.classified;
  const groups = { fura: [], sorpa: [], ig: [] };
  for (const [name, info] of Object.entries(buckets)) groups[info.group || "fura"].push({ name, total: info.total });
  for (const g of Object.values(groups)) g.sort((a,b) => b.total - a.total);
  let lines = [];
  lines.push(`Hjólbarðar — ${MONTH_NAMES[state.month-1]} ${state.year}`);
  lines.push("");
  lines.push("Fura");
  groups.fura.forEach(b => lines.push(`  ${b.name}\t${b.total}`));
  if (groups.sorpa.length) { lines.push("Sorpa"); groups.sorpa.forEach(b => lines.push(`  ${b.name}\t${b.total}`)); }
  if (groups.ig.length) { lines.push("Ísl.Gámafélagið"); groups.ig.forEach(b => lines.push(`  ${b.name}\t${b.total}`)); }
  const total = Object.values(buckets).reduce((s,b) => s + b.total, 0);
  lines.push(`Samtals\t${total}`);
  navigator.clipboard.writeText(lines.join("\n"));
  botSay("Yfirlit afritað á klippiborðið.");
}

// ============================================================
// Settings modal
// ============================================================
function renderMappingTable() {
  const rows = Object.entries(state.mapping)
    .sort(([a], [b]) => a.localeCompare(b, "is"))
    .map(([key, v]) => `
      <tr data-key="${encodeURIComponent(key)}">
        <td><input type="text" class="m-efnis" value="${escapeAttr(key)}"></td>
        <td><input type="text" class="m-bucket" value="${escapeAttr(v.bucket)}"></td>
        <td>
          <select class="m-group">
            <option value="fura" ${v.group==="fura"?"selected":""}>Fura</option>
            <option value="sorpa" ${v.group==="sorpa"?"selected":""}>Sorpa</option>
            <option value="ig" ${v.group==="ig"?"selected":""}>Ísl.Gámafélagið</option>
          </select>
        </td>
        <td><button class="del-btn" title="Eyða">✕</button></td>
      </tr>`).join("");
  el.mappingTable.innerHTML = `<thead><tr><th>Efniseigandi (í Yfirliti)</th><th>Bakka-nafn</th><th>Hópur</th><th></th></tr></thead><tbody>${rows}</tbody>`;
}
function escapeAttr(s) { return (s || "").replace(/"/g, "&quot;"); }

function openSettings() {
  el.settingThreshold.value = state.threshold;
  renderMappingTable();
  el.settingsModal.classList.remove("hidden");
}
function closeSettings() {
  const t = parseInt(el.settingThreshold.value, 10);
  if (isFinite(t) && t > 0) { state.threshold = t; saveThreshold(t); }

  // Read mapping table back
  const next = {};
  el.mappingTable.querySelectorAll("tbody tr").forEach(tr => {
    const key = normKey(tr.querySelector(".m-efnis").value);
    const bucket = tr.querySelector(".m-bucket").value.trim();
    const group = tr.querySelector(".m-group").value;
    if (key && bucket) next[key] = { bucket, group };
  });
  state.mapping = next;
  saveMapping();

  el.settingsModal.classList.add("hidden");
}

// ============================================================
// Event wiring
// ============================================================
function resetAll() {
  state.rows = [];
  state.month = null;
  state.year = null;
  state.classified = null;
  state.pendingQuestions = [];
  state.excludedIndices = new Set();
  state.unknownDecisions = {};
  el.fileStatus.classList.add("hidden");
  el.bucketsPreview.classList.add("hidden");
  el.downloadArea.classList.add("hidden");
  el.dropZone.classList.remove("loaded");
  el.chatMessages.innerHTML = "";
  const cfg = activeConfig();
  botSay(`<b>${cfg.name}</b>. Dragðu Yfirlit-skjalið inn hér til vinstri svo við getum skoðað það saman.`);
  clearChoices();
}

// Material tab switching
document.querySelectorAll(".mat-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const mat = tab.dataset.material;
    if (mat === state.material) return;
    document.querySelectorAll(".mat-tab").forEach(t => t.classList.toggle("active", t === tab));
    state.material = mat;
    saveActiveMaterial(mat);
    applyMaterial();
    resetAll();
  });
});

el.dropZone.addEventListener("click", () => el.fileInput.click());
el.dropZone.addEventListener("dragover", e => { e.preventDefault(); el.dropZone.classList.add("dragover"); });
el.dropZone.addEventListener("dragleave", () => el.dropZone.classList.remove("dragover"));
el.dropZone.addEventListener("drop", e => {
  e.preventDefault();
  el.dropZone.classList.remove("dragover");
  const f = e.dataTransfer.files[0];
  if (f) handleFile(f);
});
el.fileInput.addEventListener("change", e => {
  const f = e.target.files[0];
  if (f) handleFile(f);
});

el.btnDownload.addEventListener("click", downloadOutput);
el.btnCopySummary.addEventListener("click", copySummary);
el.btnReset.addEventListener("click", resetAll);
el.btnSettings.addEventListener("click", openSettings);
el.btnCloseSettings.addEventListener("click", closeSettings);
el.settingsModal.addEventListener("click", e => { if (e.target === el.settingsModal) closeSettings(); });
el.btnAddMapping.addEventListener("click", () => {
  const tbody = el.mappingTable.querySelector("tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" class="m-efnis"></td>
    <td><input type="text" class="m-bucket"></td>
    <td><select class="m-group"><option value="fura">Fura</option><option value="sorpa">Sorpa</option><option value="ig">Ísl.Gámafélagið</option></select></td>
    <td><button class="del-btn">✕</button></td>`;
  tbody.appendChild(tr);
});
el.mappingTable.addEventListener("click", e => {
  if (e.target.classList.contains("del-btn")) e.target.closest("tr").remove();
});

// Initial state: set active tab + greeting
document.querySelectorAll(".mat-tab").forEach(t => {
  t.classList.toggle("active", t.dataset.material === state.material);
});
botSay(`<b>${activeConfig().name}</b>. Dragðu Yfirlit-skjalið (xlsx) inn hér til vinstri svo við getum skoðað það saman.`);
