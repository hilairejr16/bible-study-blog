# CCOLR Bible Study Blog — Project Documentation
**Christian Church of Latter Rain**
*Maintained by Claude (AI Developer) in partnership with hilairejr16*

---

## 🔗 Live URLs

| Resource | URL |
|---|---|
| **Live Blog** | https://hilairejr16.github.io/bible-study-blog/ |
| **GitHub Repo** | https://github.com/hilairejr16/bible-study-blog |
| **Main Church Website** | https://www.churchoflatterrain.org/ |

---

## 👤 Accounts & Credentials

| Service | Account | Notes |
|---|---|---|
| **GitHub** | `hilairejr16` | Hosts code & deploys via GitHub Pages. Already authenticated via GitHub CLI (`gh`). |
| **GitHub Pages** | Auto-deploy from `main` branch | Free, zero config needed. Changes go live ~1–2 min after `git push`. |
| **Bible API** | `https://bible-api.com/` | Free, no API key required. English KJV/WEB/BBE/ASV. |
| **Bible Gateway** | No account needed | External links for French (LSG), Haitian Creole (BDH), Spanish (RVR1960). |
| **Zoom** | Meeting ID: `312 626 6799` · Passcode: `5551549444` | Weekly Bible Study join link. |

---

## 🏗️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Hosting** | GitHub Pages | Free forever, no server needed |
| **Framework** | Pure HTML / CSS / Vanilla JS | Zero dependencies, zero cost, easy to maintain |
| **Bible data** | bible-api.com REST API | Free, no key, all 66 books |
| **PDF viewing** | Browser-native `<iframe>` | Ctrl+F search works built-in |
| **Audio (Podcast)** | HTML5 `<audio>` + GitHub-hosted M4A/MP3 | No third-party service needed |
| **i18n** | Custom JS object | EN / FR / HT / ES — stored in `localStorage` |

---

## 📁 File Structure

```
blog/
├── index.html          ← Single-page app (all pages/tabs live here)
├── lessons.json        ← Lesson database — edit to add new PDF lessons
├── podcast.json        ← Podcast episode database — edit to add Zoom recordings
├── PROJECT-DOCS.md     ← THIS FILE — project documentation
├── README.md           ← End-user deployment & maintenance guide
├── .nojekyll           ← Required by GitHub Pages (bypasses Jekyll processing)
│
├── css/
│   └── style.css       ← All visual styles (CSS custom properties at top)
│
├── js/
│   ├── app.js          ← Core: navigation, i18n, search, PDF modal, lesson rendering
│   ├── bible.js        ← Bible reader: 66 books, chapter nav, verse highlight, passage lookup
│   └── podcast.js      ← Podcast: loads podcast.json, renders HTML5 audio player, episode cards
│
├── pdfs/               ← Drop PDF lesson files here, then add to lessons.json
│   └── README.txt
│
└── podcast/            ← Drop Zoom audio files (M4A/MP3) here, then add to podcast.json
    └── README.txt
```

---

## ⚙️ How the Site Works

### Single-Page Architecture
`index.html` contains all five pages as `<div class="page">` sections:
- `#page-home` — Hero + search + lessons grid
- `#page-lessons` — All lessons with filters
- `#page-bible` — Bible reader
- `#page-podcast` — Podcast player
- `#page-about` — About & contact

Navigation is handled by `navigateTo(page)` in `app.js` — shows/hides pages with CSS class `.active`, no page reloads.

### Language System (i18n)
- All UI strings live in the `i18n` object at the top of `app.js`
- Languages: `en`, `fr`, `ht`, `es`
- HTML elements use `data-i18n="key"` attributes
- `applyLanguage(lang)` swaps all text at once
- User's choice saved in `localStorage` key `ccolr_lang`

### Lesson System
- `lessons.json` is the source of truth
- `loadLessons()` in `app.js` fetches it on page load
- `renderLessons(array)` builds the card HTML
- Search: `filterAndRender()` filters by `activeFilter` category + `searchQuery` string
- PDFs open in a modal (`openPDF()`) with native browser PDF viewer (supports Ctrl+F)

### Bible Reader
- `initBible()` in `bible.js` called once when Bible page first opened
- Book sidebar auto-built from `BIBLE_BOOKS` array (all 66 books with chapter counts)
- Fetches from `https://bible-api.com/{book}+{chapter}?translation={kjv|web|bbe|asv}`
- Response cached in `fetchCache` object (avoids repeat API calls)
- French / Haitian Creole / Spanish open Bible Gateway links in new tab
- Passage lookup: parse "John 3:16" → jump to book/chapter/verse

### Podcast Player
- `initPodcast()` in `podcast.js` called once when Podcast page first opened
- Loads `podcast.json`, renders episode cards with HTML5 `<audio controls>` player
- If no real episodes yet, shows step-by-step "how to add" instructions
- Audio files served directly from `podcast/` folder on GitHub

---

## 📄 How to Add a Lesson (PDF)

1. Upload PDF to `blog/pdfs/` folder on GitHub
2. Edit `lessons.json` — add new object to `"lessons"` array:

```json
{
  "id": "004",
  "title": "English Title",
  "titleFr": "Titre Français",
  "titleHt": "Tit Kreyòl",
  "titleEs": "Título Español",
  "date": "YYYY-MM-DD",
  "category": "Prayer",
  "description": "English description.",
  "descriptionFr": "Description française.",
  "descriptionHt": "Deskripsyon kreyòl.",
  "descriptionEs": "Descripción española.",
  "tags": ["prayer", "brothers"],
  "scriptures": ["Matthew 6:9-13"],
  "pdf": "pdfs/your-file.pdf",
  "featured": false
}
```

3. Commit → live in ~2 minutes.

**Available categories:** `Prayer` · `Holy Spirit` · `Spiritual Warfare` · `Discipleship` · `Scripture` · `Faith` · `Worship`

---

## 🎙️ How to Add a Podcast Episode (Zoom Recording)

1. After Zoom meeting: find `Documents → Zoom → [date] → audio_only.m4a`
2. Rename: `bible-study-YYYY-MM-DD.m4a`
3. Upload to `blog/podcast/` folder on GitHub
4. Edit `podcast.json` — add new object to `"episodes"` array:

```json
{
  "id": "001",
  "title": "Episode Title",
  "titleFr": "Titre Français",
  "titleHt": "Tit Kreyòl",
  "titleEs": "Título Español",
  "date": "YYYY-MM-DD",
  "description": "What was studied in this session.",
  "duration": "45:30",
  "scriptures": ["Ephesians 6:10-18"],
  "category": "Bible Study",
  "audio": "podcast/bible-study-YYYY-MM-DD.m4a"
}
```

5. Commit → live in ~2 minutes.

**File size guide:** M4A audio-only ~20–50 MB/hour ✅ · MP4 video ~200–600 MB/hour ⚠️ (too large)

---

## 🔵 Zoom Service Access

| Field | Value |
|---|---|
| **Meeting ID** | `312 626 6799` |
| **Passcode** | `5551549444` |
| **Join Link** | `https://zoom.us/j/3126266799` |
| **Phone Dial-in** | Dial Zoom number → enter `3126266799#` → enter `5551549444#` |

---

## 🎨 Design System (CSS Variables)

Defined in `:root` at the top of `style.css`:

| Variable | Value | Used For |
|---|---|---|
| `--navy` | `#1B3A6B` | Primary buttons, headings, nav |
| `--navy-dark` | `#0f2244` | Header background, card accents |
| `--gold` | `#C8A951` | Accent color, verse numbers, borders |
| `--cream` | `#F8F4EC` | Page background |
| `--white` | `#ffffff` | Cards, panels |
| `--text` | `#2c2c2c` | Body text |
| `--text-light` | `#555555` | Descriptions, secondary text |

---

## 🚀 Developer Workflow (Claude's Standard Process)

Every change follows this pattern — **no exceptions**:

```
1. Edit files locally (Desktop/Church.../blog/)
2. git add . && git commit -m "clear message"
3. git push
4. Confirm push succeeded
5. Provide live URL to user for review
```

GitHub Pages redeploys automatically on every push. Changes visible at
**https://hilairejr16.github.io/bible-study-blog/** within ~1–2 minutes.

---

## 📋 Feature Roadmap

| Status | Feature |
|---|---|
| ✅ Done | Blog homepage with lesson cards |
| ✅ Done | PDF viewer with Ctrl+F search |
| ✅ Done | Bible reader (all 66 books, KJV/WEB/BBE/ASV) |
| ✅ Done | 4-language switcher (EN/FR/HT/ES) |
| ✅ Done | Podcast player with episode cards + HTML5 audio |
| ✅ Done | GitHub Pages deployment (free) |
| 🔜 Next | Zoom meeting link on blog |
| 🔜 Future | Contact / prayer request form |
| 🔜 Future | Podcast Spotify/Apple distribution |
| 🔜 Future | Search inside PDF content (full-text index) |
| 🔜 Future | Email notification for new lessons |

---

*Last updated: 2026-04-28 · Developer: Claude (Anthropic)*
*Church: Christian Church of Latter Rain · hilairejr16@GitHub*
