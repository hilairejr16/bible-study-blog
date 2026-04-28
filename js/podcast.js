// ============================================================
// CCOLR Bible Study Blog — Podcast Player
// ============================================================

let podcastData   = null;
let currentAudio  = null;
let currentEpId   = null;

// ---- Init ----
async function initPodcast() {
  if (podcastData) { renderPodcast(); return; }

  try {
    const res  = await fetch('podcast.json');
    podcastData = await res.json();
    renderPodcast();
  } catch(e) {
    document.getElementById('podcast-content').innerHTML =
      '<p style="text-align:center;color:#888;font-family:Arial,sans-serif;padding:40px;">Could not load podcast episodes. Please try again.</p>';
  }
}

// ---- Render podcast page ----
function renderPodcast() {
  const container = document.getElementById('podcast-content');
  if (!container || !podcastData) return;

  const lang  = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const info  = podcastData.podcast;
  const eps   = podcastData.episodes || [];

  const podTitle = info[`title${cap(lang)}`] || info.title;
  const podDesc  = info[`description${cap(lang)}`] || info.description;

  let html = `
    <div class="podcast-header">
      <div class="podcast-logo">🎙️</div>
      <div class="podcast-info">
        <h2 class="podcast-title">${podTitle}</h2>
        <p class="podcast-desc">${podDesc}</p>
        <div class="podcast-meta">
          <span>📍 ${info.author}</span>
          <span>·</span>
          <span>${eps.filter(e => !e.isPlaceholder).length} episode${eps.filter(e=>!e.isPlaceholder).length===1?'':'s'}</span>
        </div>
      </div>
    </div>`;

  const realEps = eps.filter(e => !e.isPlaceholder);

  if (!realEps.length) {
    html += `
      <div class="podcast-empty">
        <div class="podcast-empty-icon">🎙️</div>
        <h3>Episodes Coming Soon</h3>
        <p>Your Zoom Bible Study recordings will appear here. Follow the steps below to add your first episode.</p>

        <div class="how-to-add">
          <h4>How to Add a Zoom Recording</h4>
          <ol>
            <li>
              <strong>Record your Zoom Bible Study</strong><br>
              <span>In Zoom, click <em>Record</em> before the session starts. Zoom saves the file automatically when the meeting ends.</span>
            </li>
            <li>
              <strong>Find the recording on your computer</strong><br>
              <span>Zoom saves to: <code>Documents → Zoom → [Date] → audio_only.m4a</code> (or .mp4 for video)</span>
            </li>
            <li>
              <strong>Rename the file clearly</strong><br>
              <span>Example: <code>bible-study-2026-05-01.m4a</code></span>
            </li>
            <li>
              <strong>Upload to GitHub</strong><br>
              <span>Go to <a href="https://github.com/hilairejr16/bible-study-blog" target="_blank">your GitHub repo</a> → <code>podcast/</code> folder → Upload file</span>
            </li>
            <li>
              <strong>Add the episode to podcast.json</strong><br>
              <span>Edit <code>podcast.json</code> on GitHub and paste in the episode template below.</span>
            </li>
          </ol>

          <div class="episode-template">
            <p><strong>Episode template — copy and paste into podcast.json:</strong></p>
            <pre>{
  "id": "001",
  "title": "Your Episode Title Here",
  "titleFr": "Titre en Français",
  "titleHt": "Tit an Kreyòl",
  "titleEs": "Título en Español",
  "date": "2026-05-01",
  "description": "Short description of what was studied.",
  "duration": "45:30",
  "scriptures": ["John 3:16", "Romans 8:1"],
  "category": "Bible Study",
  "audio": "podcast/bible-study-2026-05-01.m4a"
}</pre>
          </div>

          <div class="file-tip">
            <strong>💡 File size tip:</strong> Zoom audio-only files (M4A) are small — a 1-hour session is usually 20–50 MB, well within GitHub's free limits.
          </div>
        </div>
      </div>`;
  } else {
    html += '<div class="episodes-list">';
    realEps.forEach((ep, idx) => {
      const epTitle = ep[`title${cap(lang)}`] || ep.title;
      const epDesc  = ep[`description${cap(lang)}`] || ep.description;
      const dateStr = formatEpDate(ep.date, lang);
      const scripts = (ep.scriptures || []).join(' · ');

      html += `
        <div class="episode-card" id="ep-${ep.id}">
          <div class="ep-number">EP ${String(idx+1).padStart(2,'0')}</div>
          <div class="ep-body">
            <div class="ep-meta">
              <span class="ep-date">${dateStr}</span>
              ${ep.category ? `<span class="ep-cat">${ep.category}</span>` : ''}
              ${ep.duration && ep.duration !== '00:00' ? `<span class="ep-dur">⏱ ${ep.duration}</span>` : ''}
            </div>
            <h3 class="ep-title">${epTitle}</h3>
            <p class="ep-desc">${epDesc}</p>
            ${scripts ? `<p class="ep-scripts">📖 ${scripts}</p>` : ''}

            ${ep.audio ? `
            <div class="ep-player" id="player-${ep.id}">
              <audio
                id="audio-${ep.id}"
                src="${ep.audio}"
                preload="metadata"
                style="width:100%;margin-top:12px;border-radius:8px;"
                controls
                controlsList="nodownload"
                onplay="onEpisodePlay('${ep.id}')"
              ></audio>
              <div class="ep-actions">
                <a href="${ep.audio}" download class="btn-secondary" style="font-size:0.82rem;">⬇ Download Episode</a>
              </div>
            </div>` : `
            <div class="ep-no-audio">Audio file not yet linked — edit podcast.json to add the audio path.</div>`}
          </div>
        </div>`;
    });
    html += '</div>';
  }

  container.innerHTML = html;
}

// ---- Track currently playing episode ----
function onEpisodePlay(epId) {
  // Pause any other playing episode
  if (currentEpId && currentEpId !== epId) {
    const prev = document.getElementById(`audio-${currentEpId}`);
    if (prev) prev.pause();
  }
  currentEpId = epId;
}

// ---- Helpers ----
function cap(lang) {
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

function formatEpDate(dateStr, lang) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString(
      lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'ht' ? 'fr-HT' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  } catch { return dateStr; }
}
