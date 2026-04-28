// ============================================================
// CCOLR Bible Study Blog — Bible Reader
// ============================================================

const BIBLE_BOOKS = [
  // Old Testament
  { name:"Genesis",         api:"genesis",         ch:50,  t:"OT" },
  { name:"Exodus",          api:"exodus",           ch:40,  t:"OT" },
  { name:"Leviticus",       api:"leviticus",        ch:27,  t:"OT" },
  { name:"Numbers",         api:"numbers",          ch:36,  t:"OT" },
  { name:"Deuteronomy",     api:"deuteronomy",      ch:34,  t:"OT" },
  { name:"Joshua",          api:"joshua",           ch:24,  t:"OT" },
  { name:"Judges",          api:"judges",           ch:21,  t:"OT" },
  { name:"Ruth",            api:"ruth",             ch:4,   t:"OT" },
  { name:"1 Samuel",        api:"1+samuel",         ch:31,  t:"OT" },
  { name:"2 Samuel",        api:"2+samuel",         ch:24,  t:"OT" },
  { name:"1 Kings",         api:"1+kings",          ch:22,  t:"OT" },
  { name:"2 Kings",         api:"2+kings",          ch:25,  t:"OT" },
  { name:"1 Chronicles",    api:"1+chronicles",     ch:29,  t:"OT" },
  { name:"2 Chronicles",    api:"2+chronicles",     ch:36,  t:"OT" },
  { name:"Ezra",            api:"ezra",             ch:10,  t:"OT" },
  { name:"Nehemiah",        api:"nehemiah",         ch:13,  t:"OT" },
  { name:"Esther",          api:"esther",           ch:10,  t:"OT" },
  { name:"Job",             api:"job",              ch:42,  t:"OT" },
  { name:"Psalms",          api:"psalms",           ch:150, t:"OT" },
  { name:"Proverbs",        api:"proverbs",         ch:31,  t:"OT" },
  { name:"Ecclesiastes",    api:"ecclesiastes",     ch:12,  t:"OT" },
  { name:"Song of Solomon", api:"song+of+solomon",  ch:8,   t:"OT" },
  { name:"Isaiah",          api:"isaiah",           ch:66,  t:"OT" },
  { name:"Jeremiah",        api:"jeremiah",         ch:52,  t:"OT" },
  { name:"Lamentations",    api:"lamentations",     ch:5,   t:"OT" },
  { name:"Ezekiel",         api:"ezekiel",          ch:48,  t:"OT" },
  { name:"Daniel",          api:"daniel",           ch:12,  t:"OT" },
  { name:"Hosea",           api:"hosea",            ch:14,  t:"OT" },
  { name:"Joel",            api:"joel",             ch:3,   t:"OT" },
  { name:"Amos",            api:"amos",             ch:9,   t:"OT" },
  { name:"Obadiah",         api:"obadiah",          ch:1,   t:"OT" },
  { name:"Jonah",           api:"jonah",            ch:4,   t:"OT" },
  { name:"Micah",           api:"micah",            ch:7,   t:"OT" },
  { name:"Nahum",           api:"nahum",            ch:3,   t:"OT" },
  { name:"Habakkuk",        api:"habakkuk",         ch:3,   t:"OT" },
  { name:"Zephaniah",       api:"zephaniah",        ch:3,   t:"OT" },
  { name:"Haggai",          api:"haggai",           ch:2,   t:"OT" },
  { name:"Zechariah",       api:"zechariah",        ch:14,  t:"OT" },
  { name:"Malachi",         api:"malachi",          ch:4,   t:"OT" },
  // New Testament
  { name:"Matthew",         api:"matthew",          ch:28,  t:"NT" },
  { name:"Mark",            api:"mark",             ch:16,  t:"NT" },
  { name:"Luke",            api:"luke",             ch:24,  t:"NT" },
  { name:"John",            api:"john",             ch:21,  t:"NT" },
  { name:"Acts",            api:"acts",             ch:28,  t:"NT" },
  { name:"Romans",          api:"romans",           ch:16,  t:"NT" },
  { name:"1 Corinthians",   api:"1+corinthians",    ch:16,  t:"NT" },
  { name:"2 Corinthians",   api:"2+corinthians",    ch:13,  t:"NT" },
  { name:"Galatians",       api:"galatians",        ch:6,   t:"NT" },
  { name:"Ephesians",       api:"ephesians",        ch:6,   t:"NT" },
  { name:"Philippians",     api:"philippians",      ch:4,   t:"NT" },
  { name:"Colossians",      api:"colossians",       ch:4,   t:"NT" },
  { name:"1 Thessalonians", api:"1+thessalonians",  ch:5,   t:"NT" },
  { name:"2 Thessalonians", api:"2+thessalonians",  ch:3,   t:"NT" },
  { name:"1 Timothy",       api:"1+timothy",        ch:6,   t:"NT" },
  { name:"2 Timothy",       api:"2+timothy",        ch:4,   t:"NT" },
  { name:"Titus",           api:"titus",            ch:3,   t:"NT" },
  { name:"Philemon",        api:"philemon",         ch:1,   t:"NT" },
  { name:"Hebrews",         api:"hebrews",          ch:13,  t:"NT" },
  { name:"James",           api:"james",            ch:5,   t:"NT" },
  { name:"1 Peter",         api:"1+peter",          ch:5,   t:"NT" },
  { name:"2 Peter",         api:"2+peter",          ch:3,   t:"NT" },
  { name:"1 John",          api:"1+john",           ch:5,   t:"NT" },
  { name:"2 John",          api:"2+john",           ch:1,   t:"NT" },
  { name:"3 John",          api:"3+john",           ch:1,   t:"NT" },
  { name:"Jude",            api:"jude",             ch:1,   t:"NT" },
  { name:"Revelation",      api:"revelation",       ch:22,  t:"NT" },
];

// External Bible links by language
const EXTERNAL_BIBLES = {
  fr: {
    label: "Louis Segond (Français)",
    base:  "https://www.biblegateway.com/passage/?search={REF}&version=LSG",
    home:  "https://www.biblegateway.com/versions/Louis-Segond-LSG-Bible/"
  },
  ht: {
    label: "Bib Kreyòl Ayisyen",
    base:  "https://www.biblegateway.com/passage/?search={REF}&version=BDH",
    home:  "https://www.biblegateway.com/versions/Haitian-Creole-Version-BDH-Bible/"
  },
  es: {
    label: "Reina-Valera 1960 (Español)",
    base:  "https://www.biblegateway.com/passage/?search={REF}&version=RVR1960",
    home:  "https://www.biblegateway.com/versions/Reina-Valera-1960-RVR1960-Bible/"
  }
};

// ---- State ----
let bibleBookIdx   = 42; // John (NT)
let bibleChapter   = 3;
let bibleTranslation = 'kjv';
let bibleLang      = 'en';
let bibleInitialized = false;
let fetchCache     = {};

// ---- Init (called when Bible page is opened) ----
function initBible() {
  if (bibleInitialized) return;
  bibleInitialized = true;

  buildBookList();
  buildChapterSelect();
  loadBibleChapter();
}

// ---- Build sidebar book list ----
function buildBookList() {
  const list = document.getElementById('book-list');
  if (!list) return;

  let html = '';
  let lastT = '';
  BIBLE_BOOKS.forEach((book, idx) => {
    if (book.t !== lastT) {
      html += `<div class="testament-label">${book.t === 'OT' ? 'Old Testament' : 'New Testament'}</div>`;
      lastT = book.t;
    }
    html += `<li class="${idx === bibleBookIdx ? 'active' : ''}" data-book="${idx}">${book.name}</li>`;
  });

  list.innerHTML = html;
  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => selectBook(parseInt(li.dataset.book)));
  });
}

function selectBook(idx) {
  bibleBookIdx = idx;
  bibleChapter = 1;

  // Update sidebar active state
  document.querySelectorAll('#book-list li').forEach((li, i) => {
    li.classList.toggle('active', i === idx);
    if (i === idx) li.scrollIntoView({ block: 'nearest' });
  });

  buildChapterSelect();
  loadBibleChapter();
}

// ---- Chapter select ----
function buildChapterSelect() {
  const sel = document.getElementById('chapter-select');
  if (!sel) return;
  const book = BIBLE_BOOKS[bibleBookIdx];
  sel.innerHTML = '';
  for (let c = 1; c <= book.ch; c++) {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = `Chapter ${c}`;
    if (c === bibleChapter) opt.selected = true;
    sel.appendChild(opt);
  }
  sel.onchange = () => { bibleChapter = parseInt(sel.value); loadBibleChapter(); };
}

// ---- Translation select ----
document.addEventListener('DOMContentLoaded', () => {
  const tSel = document.getElementById('translation-select');
  if (tSel) tSel.onchange = () => { bibleTranslation = tSel.value; fetchCache = {}; loadBibleChapter(); };

  // Language tabs
  document.querySelectorAll('.bible-lang-tab').forEach(tab => {
    tab.addEventListener('click', () => switchBibleLang(tab.dataset.bibleLang));
  });

  // Prev/Next chapter
  const prev = document.getElementById('prev-chapter');
  const next = document.getElementById('next-chapter');
  if (prev) prev.addEventListener('click', () => changeChapter(-1));
  if (next) next.addEventListener('click', () => changeChapter(1));

  // Bible passage search
  const bSearchBtn = document.getElementById('bible-search-btn');
  const bSearchIn  = document.getElementById('bible-search-input');
  if (bSearchBtn) bSearchBtn.addEventListener('click', () => lookupPassage(bSearchIn.value));
  if (bSearchIn) bSearchIn.addEventListener('keyup', e => { if (e.key === 'Enter') lookupPassage(bSearchIn.value); });
});

function switchBibleLang(lang) {
  bibleLang = lang;

  document.querySelectorAll('.bible-lang-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.bibleLang === lang);
  });

  if (lang === 'en') {
    showEnglishReader();
    loadBibleChapter();
  } else {
    showExternalReader(lang);
  }
}

function updateBibleLangTabs(appLang) {
  // When the app language changes, switch Bible to match if on Bible page
  if (document.getElementById('page-bible').classList.contains('active')) {
    switchBibleLang(appLang);
  }
}

function showEnglishReader() {
  const reader  = document.getElementById('bible-en-reader');
  const extLink = document.getElementById('bible-ext-link');
  const controls = document.getElementById('bible-en-controls');
  if (reader) reader.style.display = 'block';
  if (extLink) extLink.style.display = 'none';
  if (controls) controls.style.display = 'flex';
}

function showExternalReader(lang) {
  const reader   = document.getElementById('bible-en-reader');
  const extLink  = document.getElementById('bible-ext-link');
  const controls = document.getElementById('bible-en-controls');
  const info     = EXTERNAL_BIBLES[lang];
  if (!info) return;

  const book = BIBLE_BOOKS[bibleBookIdx];
  const ref  = `${book.name.replace(' ', '+')}+${bibleChapter}`;
  const url  = info.base.replace('{REF}', ref);

  if (reader) reader.style.display = 'none';
  if (controls) controls.style.display = 'none';
  if (extLink) {
    extLink.style.display = 'block';
    extLink.innerHTML = `
      <div class="bible-lang-link">
        <p>${info.label}</p>
        <p style="font-size:0.85rem;margin-bottom:16px;">${book.name} Chapter ${bibleChapter}</p>
        <a href="${url}" target="_blank" class="btn-primary" style="display:inline-flex;text-decoration:none;">
          📖 Open ${info.label} on Bible Gateway
        </a>
        <br><br>
        <a href="${info.home}" target="_blank" class="btn-secondary" style="display:inline-flex;text-decoration:none;margin-top:8px;">
          Browse Full Bible →
        </a>
        <p style="margin-top:20px;font-size:0.78rem;color:#888;font-family:Arial,sans-serif;">
          Bible Gateway opens in a new tab — free to use, no account needed.
        </p>
      </div>`;
  }
}

// ---- Load a Chapter from bible-api.com ----
async function loadBibleChapter() {
  if (bibleLang !== 'en') return;

  const book = BIBLE_BOOKS[bibleBookIdx];
  const cacheKey = `${book.api}_${bibleChapter}_${bibleTranslation}`;

  if (fetchCache[cacheKey]) {
    renderVerses(fetchCache[cacheKey]);
    return;
  }

  showLoading();

  try {
    const url  = `https://bible-api.com/${book.api}+${bibleChapter}?translation=${bibleTranslation}`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    fetchCache[cacheKey] = data;
    renderVerses(data);
  } catch(e) {
    showError(book.name, bibleChapter, bibleTranslation);
  }

  updateNavButtons();
  syncChapterSelect();
}

function renderVerses(data) {
  const box = document.getElementById('bible-text-box');
  if (!box) return;

  const book = BIBLE_BOOKS[bibleBookIdx];
  const translation = bibleTranslation.toUpperCase();

  let html = `
    <h2 class="bible-book-title">${book.name}</h2>
    <div class="bible-chapter-label">${translation} &nbsp;·&nbsp; Chapter ${bibleChapter}</div>
    <div class="bible-verses" id="verse-content">`;

  if (data.verses) {
    data.verses.forEach(v => {
      html += `<span class="verse" id="v${v.verse}">
        <sup class="verse-num" title="Verse ${v.verse}" onclick="highlightVerse(${v.verse})">${v.verse}</sup>
        <span class="verse-text">${v.text.trim()}</span>
        </span> `;
    });
  } else if (data.text) {
    html += `<span class="verse-text">${data.text}</span>`;
  }

  html += '</div>';
  box.innerHTML = html;
}

function showLoading() {
  const box = document.getElementById('bible-text-box');
  if (box) box.innerHTML = `<div class="bible-loading"><div class="spinner"></div> Loading scripture...</div>`;
}

function showError(bookName, chapter, translation) {
  const box = document.getElementById('bible-text-box');
  if (!box) return;
  box.innerHTML = `
    <div class="bible-error">
      <p>⚠️ Could not load ${bookName} ${chapter} (${translation.toUpperCase()}).</p>
      <p style="margin-top:10px;font-size:0.85rem;">Check your internet connection, then try again.</p>
      <button onclick="loadBibleChapter()" class="btn-primary" style="margin-top:16px;display:inline-flex;">Retry</button>
    </div>`;
}

function changeChapter(delta) {
  const book = BIBLE_BOOKS[bibleBookIdx];
  const newCh = bibleChapter + delta;
  if (newCh < 1 || newCh > book.ch) return;
  bibleChapter = newCh;
  syncChapterSelect();
  loadBibleChapter();
  document.getElementById('bible-text-box')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function syncChapterSelect() {
  const sel = document.getElementById('chapter-select');
  if (sel) sel.value = bibleChapter;
}

function updateNavButtons() {
  const book = BIBLE_BOOKS[bibleBookIdx];
  const prev = document.getElementById('prev-chapter');
  const next = document.getElementById('next-chapter');
  if (prev) prev.disabled = bibleChapter <= 1;
  if (next) next.disabled = bibleChapter >= book.ch;
}

// ---- Highlight a verse on click ----
function highlightVerse(verseNum) {
  document.querySelectorAll('.verse').forEach(v => v.classList.remove('highlighted'));
  const el = document.getElementById(`v${verseNum}`);
  if (el) {
    el.classList.add('highlighted');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Update URL fragment
    history.replaceState(null, '', `#bible`);
  }
}

// ---- Passage Lookup (e.g. "John 3:16") ----
function lookupPassage(query) {
  if (!query.trim()) return;
  const q = query.trim();

  // Try to parse "Book Chapter:Verse" or "Book Chapter"
  const match = q.match(/^(\d*\s*[A-Za-z\s]+)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/);
  if (!match) {
    alert(`Could not parse "${q}". Try formats like: John 3:16 or Romans 8`);
    return;
  }

  const bookName = match[1].trim();
  const chapter  = parseInt(match[2]);
  const verse    = match[3] ? parseInt(match[3]) : null;

  const bookIdx = BIBLE_BOOKS.findIndex(b =>
    b.name.toLowerCase() === bookName.toLowerCase() ||
    b.name.toLowerCase().startsWith(bookName.toLowerCase())
  );

  if (bookIdx === -1) {
    alert(`Book "${bookName}" not found. Check the spelling.`);
    return;
  }

  bibleBookIdx = bookIdx;
  bibleChapter = chapter;

  // Update UI
  document.querySelectorAll('#book-list li').forEach((li, i) => {
    li.classList.toggle('active', i === bookIdx);
    if (i === bookIdx) li.scrollIntoView({ block: 'nearest' });
  });

  buildChapterSelect();
  loadBibleChapter().then ? loadBibleChapter().then(() => { if (verse) highlightVerse(verse); })
                          : setTimeout(() => { if (verse) highlightVerse(verse); }, 1200);
}
