// ============================================================
// CCOLR Bible Study Blog — Main Application
// ============================================================

// ---- Translations (i18n) ----
const i18n = {
  en: {
    nav_home:     "Home",
    nav_lessons:  "Lessons",
    nav_bible:    "Bible",
    nav_podcast:  "Podcast",
    nav_about:    "About",
    hero_badge:   "Brothers Bible Study",
    hero_title:   "Bible Study Lessons",
    hero_sub:     "A Family for All of God's Children",
    hero_verse:   '"Your word is a lamp to my feet and a light to my path." — Psalm 119:105',
    search_ph:    "Search lessons, scriptures, topics...",
    search_btn:   "Search",
    all_lessons:  "All Lessons",
    featured:     "Featured",
    view_lesson:  "View Lesson",
    download:     "Download",
    scriptures:   "Scriptures:",
    podcast_title:"Podcast — Coming Soon",
    podcast_desc: "In the future, our Zoom Bible Study recordings will be available here as a podcast. Stay tuned!",
    podcast_note: "Zoom session recordings will be converted and published here for brothers to listen anytime.",
    about_title:  "About This Blog",
    about_desc:   "This blog is dedicated to the brothers of Christian Church of Latter Rain. It provides access to Bible study lessons, scriptures, and teaching notes from our pastor and ministry.",
    footer_main:  "Christian Church of Latter Rain",
    footer_tag:   "A Family for All of God's Children",
    footer_visit: "Visit main website",
    footer_phone: "(610) 609-9016",
    footer_links: "Quick Links",
    footer_reach: "Reach Us",
    footer_copy:  "© 2026 Christian Church of Latter Rain. All rights reserved.",
    no_results:   "No lessons found for your search.",
    lesson_count: (n) => `${n} lesson${n === 1 ? '' : 's'} found`,
  },
  fr: {
    nav_home:     "Accueil",
    nav_lessons:  "Leçons",
    nav_bible:    "Bible",
    nav_podcast:  "Podcast",
    nav_about:    "À Propos",
    hero_badge:   "Étude Biblique des Frères",
    hero_title:   "Leçons d'Étude Biblique",
    hero_sub:     "Une Famille pour Tous les Enfants de Dieu",
    hero_verse:   '"Ta parole est une lampe à mes pieds et une lumière sur mon sentier." — Psaume 119:105',
    search_ph:    "Rechercher des leçons, écritures, sujets...",
    search_btn:   "Rechercher",
    all_lessons:  "Toutes les Leçons",
    featured:     "En Vedette",
    view_lesson:  "Voir la Leçon",
    download:     "Télécharger",
    scriptures:   "Écritures :",
    podcast_title:"Podcast — Bientôt Disponible",
    podcast_desc: "À l'avenir, nos enregistrements d'étude biblique Zoom seront disponibles ici en podcast.",
    podcast_note: "Les enregistrements des sessions Zoom seront convertis et publiés ici.",
    about_title:  "À Propos de Ce Blog",
    about_desc:   "Ce blog est dédié aux frères de l'Église Chrétienne de la Dernière Pluie. Il donne accès aux leçons d'étude biblique, aux écritures et aux notes d'enseignement.",
    footer_main:  "Église Chrétienne de la Dernière Pluie",
    footer_tag:   "Une Famille pour Tous les Enfants de Dieu",
    footer_visit: "Visiter le site principal",
    footer_phone: "(610) 609-9016",
    footer_links: "Liens Rapides",
    footer_reach: "Contactez-nous",
    footer_copy:  "© 2026 Église Chrétienne de la Dernière Pluie. Tous droits réservés.",
    no_results:   "Aucune leçon trouvée.",
    lesson_count: (n) => `${n} leçon${n === 1 ? '' : 's'} trouvée${n === 1 ? '' : 's'}`,
  },
  ht: {
    nav_home:     "Akèy",
    nav_lessons:  "Leson",
    nav_bible:    "Bib",
    nav_podcast:  "Podcast",
    nav_about:    "Enfòmasyon",
    hero_badge:   "Etid Biblik pou Frè yo",
    hero_title:   "Leson Etid Biblik",
    hero_sub:     "Yon Fanmi pou Tout Pitit Bondye",
    hero_verse:   '"Pawòl ou se yon lanp pou pye m, yon limyè sou wout mwen." — Som 119:105',
    search_ph:    "Chèche leson, ekriti, sijè...",
    search_btn:   "Chèche",
    all_lessons:  "Tout Leson",
    featured:     "Vèdèt",
    view_lesson:  "Gade Leson",
    download:     "Telechaje",
    scriptures:   "Ekriti:",
    podcast_title:"Podcast — Byento",
    podcast_desc: "Nan lavni, anrejistreman etid biblik Zoom nou yo ap disponib isit kòm yon podcast.",
    podcast_note: "Anrejistreman sesyon Zoom yo ap konvèti ak pibliye isit.",
    about_title:  "Sou Blog Sa a",
    about_desc:   "Blog sa a dedye pou frè yo nan Legliz Kretyen Plimedènyè. Li bay aksè a leson etid biblik, ekriti, ak nòt ansèyman.",
    footer_main:  "Legliz Kretyen Plimedènyè",
    footer_tag:   "Yon Fanmi pou Tout Pitit Bondye",
    footer_visit: "Vizite sit prensipal la",
    footer_phone: "(610) 609-9016",
    footer_links: "Lyen Rapid",
    footer_reach: "Kontakte Nou",
    footer_copy:  "© 2026 Legliz Kretyen Plimedènyè. Tout dwa rezève.",
    no_results:   "Pa gen leson jwenn.",
    lesson_count: (n) => `${n} leson jwenn`,
  },
  es: {
    nav_home:     "Inicio",
    nav_lessons:  "Lecciones",
    nav_bible:    "Biblia",
    nav_podcast:  "Podcast",
    nav_about:    "Acerca de",
    hero_badge:   "Estudio Bíblico de Hermanos",
    hero_title:   "Lecciones de Estudio Bíblico",
    hero_sub:     "Una Familia para Todos los Hijos de Dios",
    hero_verse:   '"Tu palabra es lámpara a mis pies y lumbrera a mi camino." — Salmo 119:105',
    search_ph:    "Buscar lecciones, escrituras, temas...",
    search_btn:   "Buscar",
    all_lessons:  "Todas las Lecciones",
    featured:     "Destacado",
    view_lesson:  "Ver Lección",
    download:     "Descargar",
    scriptures:   "Escrituras:",
    podcast_title:"Podcast — Próximamente",
    podcast_desc: "En el futuro, nuestras grabaciones de estudio bíblico de Zoom estarán disponibles aquí como podcast.",
    podcast_note: "Las grabaciones de sesiones de Zoom se convertirán y publicarán aquí.",
    about_title:  "Acerca de Este Blog",
    about_desc:   "Este blog está dedicado a los hermanos de la Iglesia Cristiana de la Lluvia Tardía. Proporciona acceso a lecciones de estudio bíblico, escrituras y notas de enseñanza.",
    footer_main:  "Iglesia Cristiana de la Lluvia Tardía",
    footer_tag:   "Una Familia para Todos los Hijos de Dios",
    footer_visit: "Visitar sitio principal",
    footer_phone: "(610) 609-9016",
    footer_links: "Enlaces Rápidos",
    footer_reach: "Contáctenos",
    footer_copy:  "© 2026 Iglesia Cristiana de la Lluvia Tardía. Todos los derechos reservados.",
    no_results:   "No se encontraron lecciones.",
    lesson_count: (n) => `${n} lección${n === 1 ? '' : 'es'} encontrada${n === 1 ? '' : 's'}`,
  }
};

// ---- State ----
let currentLang = localStorage.getItem('ccolr_lang') || 'en';
let allLessons  = [];
let currentPage = 'home';
let activeFilter = 'all';
let searchQuery = '';

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  loadLessons();
  applyLanguage(currentLang);
  setupNavigation();
  setupSearch();
  setupFilters();
  setupLangSwitcher();
  setupModal();

  // Deep-link: check URL hash for page
  const hash = window.location.hash.replace('#', '');
  if (['lessons','bible','podcast','about'].includes(hash)) navigateTo(hash);
});

// ---- Load lessons from lessons.json ----
async function loadLessons() {
  try {
    const res  = await fetch('lessons.json');
    const data = await res.json();
    allLessons = data.lessons;
    renderLessons(allLessons);
  } catch(e) {
    console.warn('Could not load lessons.json', e);
    allLessons = [];
    renderLessons([]);
  }
}

// ---- Render Lessons ----
function renderLessons(lessons) {
  const grid = document.getElementById('lessons-grid');
  if (!grid) return;

  const t = i18n[currentLang];
  grid.innerHTML = '';

  if (!lessons.length) {
    grid.innerHTML = `<div class="no-results"><span>📖</span><p>${t.no_results}</p></div>`;
    updateResultsInfo(0);
    return;
  }

  updateResultsInfo(lessons.length);

  lessons.forEach((lesson, idx) => {
    const title = lesson[`title${currentLang.charAt(0).toUpperCase()+currentLang.slice(1)}`] || lesson.title;
    const desc  = lesson[`description${currentLang.charAt(0).toUpperCase()+currentLang.slice(1)}`] || lesson.description;
    const isFeatured = lesson.featured && idx === 0;
    const dateStr = formatDate(lesson.date);
    const scriptureList = (lesson.scriptures || []).join(' • ');
    const tags = (lesson.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

    if (isFeatured) {
      grid.innerHTML += `
        <div class="lesson-card featured featured-card" data-id="${lesson.id}">
          <div class="card-body">
            <div class="card-meta">
              <span class="card-date">${dateStr}</span>
              <span class="card-category featured">${lesson.category}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${desc}</p>
            ${scriptureList ? `<div class="card-scriptures" style="background:transparent;padding:12px 0 0;"><span>${t.scriptures} ${scriptureList}</span></div>` : ''}
            <div class="card-tags" style="padding:10px 0 0;">${tags}</div>
            <div class="card-actions" style="padding:16px 0 0;border:none;">
              <a href="${lesson.pdf}" class="btn-primary" onclick="openPDF(event,'${lesson.pdf}','${escHtml(title)}')">📄 ${t.view_lesson}</a>
              <a href="${lesson.pdf}" download class="btn-secondary">⬇ ${t.download}</a>
            </div>
          </div>
          <div class="card-aside">
            <div class="featured-label">${t.featured}</div>
            <div style="font-size:3rem;">✨</div>
            <div style="font-size:0.82rem;opacity:0.8;font-family:Arial,sans-serif;">${t.hero_badge}</div>
          </div>
        </div>`;
    } else {
      grid.innerHTML += `
        <div class="lesson-card" data-id="${lesson.id}">
          <div class="card-header">
            <div class="card-meta">
              <span class="card-date">${dateStr}</span>
              <span class="card-category">${lesson.category}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${desc}</p>
          </div>
          ${scriptureList ? `<div class="card-scriptures"><span>${t.scriptures} ${scriptureList}</span></div>` : ''}
          <div class="card-tags">${tags}</div>
          <div class="card-actions">
            <a href="${lesson.pdf}" class="btn-primary" onclick="openPDF(event,'${lesson.pdf}','${escHtml(title)}')">📄 ${t.view_lesson}</a>
            <a href="${lesson.pdf}" download class="btn-secondary" title="${t.download}">⬇</a>
          </div>
        </div>`;
    }
  });
}

function updateResultsInfo(count) {
  const el = document.getElementById('search-results-info');
  if (!el) return;
  const t = i18n[currentLang];
  el.textContent = searchQuery ? t.lesson_count(count) : '';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(
    currentLang === 'fr' ? 'fr-FR' :
    currentLang === 'es' ? 'es-ES' :
    currentLang === 'ht' ? 'fr-HT' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}

function escHtml(s) {
  return s.replace(/'/g, "&#39;").replace(/"/g, '&quot;');
}

// ---- Search ----
function setupSearch() {
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');
  if (!input) return;

  const doSearch = () => {
    searchQuery = input.value.trim().toLowerCase();
    filterAndRender();
  };

  btn.addEventListener('click', doSearch);
  input.addEventListener('keyup', e => { if (e.key === 'Enter') doSearch(); });
  input.addEventListener('input', () => {
    if (!input.value.trim()) { searchQuery = ''; filterAndRender(); }
  });
}

function filterAndRender() {
  let list = allLessons;

  if (activeFilter && activeFilter !== 'all') {
    list = list.filter(l => l.category === activeFilter || (l.tags||[]).includes(activeFilter));
  }

  if (searchQuery) {
    list = list.filter(l => {
      const haystack = [
        l.title, l.titleFr, l.titleHt, l.titleEs,
        l.description, l.descriptionFr, l.descriptionHt, l.descriptionEs,
        l.category,
        ...(l.scriptures || []),
        ...(l.tags || [])
      ].join(' ').toLowerCase();
      return haystack.includes(searchQuery);
    });
  }

  renderLessons(list);
}

// ---- Filters ----
function setupFilters() {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.dataset.filter;
      filterAndRender();
    }
  });
}

// ---- Language Switcher ----
function setupLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('ccolr_lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // Update all data-i18n elements
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] && typeof t[key] === 'string') el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key]) el.placeholder = t[key];
  });

  // Re-render lessons in selected language
  filterAndRender();

  // Update Bible page language tabs if open
  if (typeof updateBibleLangTabs === 'function') updateBibleLangTabs(lang);
}

// ---- Navigation (single-page tabs) ----
function setupNavigation() {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
}

function navigateTo(page) {
  currentPage = page;

  // Hide/show pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.site-nav a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  window.location.hash = page === 'home' ? '' : page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Initialize Bible when first opened
  if (page === 'bible' && typeof initBible === 'function') initBible();
}

// ---- PDF Viewer Modal ----
function setupModal() {
  const overlay = document.getElementById('pdf-modal');
  if (!overlay) return;

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openPDF(event, pdfPath, title) {
  event.preventDefault();

  const overlay  = document.getElementById('pdf-modal');
  const titleEl  = document.getElementById('modal-title');
  const dlBtn    = document.getElementById('modal-download');
  const body     = document.getElementById('modal-body');

  if (!overlay) { window.open(pdfPath, '_blank'); return; }

  titleEl.textContent = title;
  dlBtn.href = pdfPath;

  // Try embedding; show fallback if browser can't display PDF
  body.innerHTML = `
    <iframe src="${pdfPath}" title="${escHtml(title)}">
      <div class="pdf-fallback">
        <p>Your browser cannot display this PDF inline.</p>
        <a href="${pdfPath}" class="btn-primary" target="_blank">Open PDF in New Tab</a>
        <a href="${pdfPath}" download class="btn-secondary">Download PDF</a>
      </div>
    </iframe>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('pdf-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Stop PDF loading
  const iframe = overlay.querySelector('iframe');
  if (iframe) iframe.src = '';
}
