# CCOLR Bible Study Blog
## Christian Church of Latter Rain — Brothers Bible Study

A free, mobile-friendly blog for Bible study lessons, scripture access, and a built-in Bible reader.

---

## 🚀 DEPLOY TO GITHUB PAGES (Free Hosting)

### Step 1 — Create a Free GitHub Account
1. Go to **https://github.com** and click **Sign up**
2. Choose a username (e.g., `ccolr-church` or `latterrain-church`)
3. Verify your email address

### Step 2 — Create a Repository
1. Click the **+** button (top right) → **New repository**
2. Name it: `bible-study-blog` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the Blog Files
1. On the repository page, click **uploading an existing file**
2. Drag and drop the **entire contents** of this `blog/` folder
   - `index.html`
   - `lessons.json`
   - `css/` folder
   - `js/` folder
   - `pdfs/` folder
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to **Settings** tab in your repository
2. Scroll to **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then your blog is live at:
   **`https://YOUR-USERNAME.github.io/bible-study-blog/`**

> **Share this URL with all the brothers!** It works on phone, tablet, and computer.

---

## 📄 HOW TO ADD A NEW LESSON (PDF)

### Step 1 — Prepare Your PDF
- Scan your paper document or save the file as PDF
- Name it clearly: `lesson-title-no-spaces.pdf`
  - Example: `armor-of-god.pdf` or `holy-spirit-fruits.pdf`

### Step 2 — Upload the PDF to GitHub
1. Go to your GitHub repository
2. Click the `pdfs/` folder
3. Click **Add file** → **Upload files**
4. Upload your PDF
5. Click **Commit changes**

### Step 3 — Add the Lesson to the Blog List
1. Go to your GitHub repository
2. Click `lessons.json`
3. Click the ✏️ **pencil icon** (Edit)
4. Add a new lesson entry inside the `"lessons": [...]` array.
   Copy and paste this template and fill in your details:

```json
{
  "id": "004",
  "title": "Your Lesson Title in English",
  "titleFr": "Titre en Français",
  "titleHt": "Tit an Kreyòl",
  "titleEs": "Título en Español",
  "date": "2026-05-01",
  "category": "Prayer",
  "description": "Short description of the lesson in English.",
  "descriptionFr": "Courte description en français.",
  "descriptionHt": "Ti deskripsyon an kreyòl.",
  "descriptionEs": "Breve descripción en español.",
  "tags": ["prayer", "brothers"],
  "scriptures": ["Matthew 6:9-13"],
  "pdf": "pdfs/your-lesson-filename.pdf",
  "featured": false
}
```

5. Click **Commit changes**
6. The lesson appears on the blog within 1-2 minutes!

### Available Categories
`Prayer` · `Holy Spirit` · `Spiritual Warfare` · `Discipleship` · `Scripture` · `Faith` · `Worship`

---

## 🔍 HOW BROTHERS CAN SEARCH

### Search the Blog
- Use the **Search bar** on the homepage
- Type a topic, scripture reference, or keyword
- Results update instantly

### Search Inside a PDF Lesson
1. Click **View Lesson** on any lesson card
2. The PDF opens in a viewer
3. Press **Ctrl+F** (Windows/Android) or **⌘+F** (Mac/iPhone)
4. Type your search word — all matches highlight in the PDF

---

## 📖 USING THE BIBLE READER

1. Click **Bible** in the navigation
2. Select a language tab:
   - 🇺🇸 **English** — Full built-in reader (KJV, WEB, BBE, ASV)
   - 🇫🇷 **Français** — Opens Louis Segond on Bible Gateway
   - 🇭🇹 **Kreyòl** — Opens Haitian Creole Bible on Bible Gateway
   - 🇪🇸 **Español** — Opens Reina-Valera 1960 on Bible Gateway
3. Select a book from the left panel
4. Use chapter navigation or the **Go to Passage** bar (e.g., `John 3:16`)
5. Click any verse number to highlight it

---

## 🎙️ FUTURE PODCAST SETUP (Zoom Recordings)

When you're ready to add podcasts:

1. **Export your Zoom recording** as MP3 or MP4
2. **Upload to a free host** — recommended:
   - **Anchor.fm** (now Spotify for Podcasters) — 100% free
   - **Buzzsprout** — free tier available
3. Each episode gets a link — add it to the blog's Podcast section
4. Brothers can listen on any device, subscribe, and get new episodes automatically

> Tell Claude: *"Help me set up the Podcast page with Zoom recordings"* when you're ready.

---

## 🌐 LANGUAGES

The blog supports 4 languages. The language switcher is at the top right:
- **EN** — English
- **FR** — French
- **HT** — Haitian Creole (Kreyòl Ayisyen)
- **ES** — Spanish

The browser remembers the selected language between visits.

To add translations for a new lesson, fill in the `titleFr`, `titleHt`, `titleEs`, `descriptionFr`, `descriptionHt`, `descriptionEs` fields in `lessons.json`.

---

## 📁 FILE STRUCTURE

```
blog/
├── index.html          ← Main site (open this file)
├── lessons.json        ← Lesson database (edit to add lessons)
├── css/
│   └── style.css       ← All visual styling
├── js/
│   ├── app.js          ← Blog logic, search, language switching
│   └── bible.js        ← Bible reader (all 66 books)
├── pdfs/
│   └── (upload your PDF files here)
└── README.md           ← This file
```

---

## 💡 TIPS

- **The blog works offline** once loaded in a browser (except the Bible reader needs internet)
- **No login required** for brothers to read — just share the URL
- **Add a shortcut** on your phone: open the blog in Chrome/Safari → tap Share → "Add to Home Screen"
- **Print any lesson**: open it and use Ctrl+P — headers/footers are hidden automatically

---

## 🆘 NEED HELP?

Claude is your developer. Simply describe what you need:
- *"Add a new lesson about [topic] with these scriptures..."*
- *"Change the color scheme"*
- *"Add a contact form"*
- *"Help me upload the Zoom recording as a podcast"*
- *"Add a new language"*

---

*Christian Church of Latter Rain · A Family for All of God's Children*
*(610) 609-9016 · www.churchoflatterrain.org*
