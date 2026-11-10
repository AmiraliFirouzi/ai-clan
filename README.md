# ai_clan — association website

A terminal-style, dark, one-page website for the AI Clan association.
Pure **HTML + CSS + JS** — no frameworks, no build step. Hosts perfectly on
**GitHub Pages**.

Inspired by [richardapps.net](https://www.richardapps.net) (old-terminal /
cyberpunk aesthetic).

```
├── index.html    ← page skeleton (you rarely need to touch this)
├── data.js       ← ✏️ ALL content: texts, contacts, events — edit this!
├── style.css     ← styling (colors + noise strength in :root at the top)
├── script.js     ← logic: countdown, accordion, snow, grain (no content)
└── README.md
```

---

## ✏️ Editing the content — only `data.js`

Everything editable lives in **`data.js`** as the `SITE_DATA` object:

| Field | What it is |
|---|---|
| `siteName` | short name — browser tab title + footer |
| `asciiLogo` | the big ASCII name (see below) |
| `tagline` | the typed one-liner under the logo |
| `titlebar` / `titlebarRight` | window titlebar texts |
| `about` | welcome box blocks: `cmd` (terminal line) + `text` (paragraph) |
| `contacts` | footer links: `label`, `value`, `href` |
| `joinNote` | the note under the contacts |
| `events` | the events list (see below) |

Save + refresh — done. `index.html` and `script.js` never need editing for
content.

### Association name (ASCII logo)
Generate a new one at [patorjk.com/software/taag](https://patorjk.com/software/taag)
using the font **ANSI Shadow**, and paste it into `asciiLogo` in `data.js`
(use backticks, keep it multi-line). Also update `siteName`, `titlebar` and
the `<meta name="description">` in `index.html` if you like.

### Events
Edit the `events` array in `data.js`:

```js
{ date: "2026-11-20",  // YYYY-MM-DD
  time: "18:00",       // 24h local time — used by the countdown
  title: "Kickoff meeting",
  summary: "Text shown when the box is expanded." }
```

Everything updates automatically: date ordering, the **next event** line,
the **live countdown**, the **● NEXT badge**, scrolling and dim-reveal once
there are more than 3 events, and past events stay dimmed.

### Colors / effects
`style.css → :root` at the top: accent & border colors, `--noise-opacity`
(grain strength), etc.

---

## 🚀 Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `ai-clan`).
2. Upload / commit these files to the `main` branch.
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, set **Source: Deploy from a branch**,
   **Branch: main / (root)** → **Save**.
5. Wait ~1 minute — your site is live at
   `https://<username>.github.io/ai-clan/`.

Or from the command line:

```bash
git init
git add .
git commit -m "initial: terminal-style site"
git branch -M main
git remote add origin https://github.com/<username>/ai-clan.git
git push -u origin main
```

…then do step 3–4 above once.

---

## راهنمای سریع (فارسی)

- **همه‌ی متن‌ها، راه‌های ارتباطی و ایونت‌ها** در فایل `data.js` است — فقط
  همان فایل را ویرایش کنید و رفرش بزنید.
- **ایونت‌ها**: آرایه‌ی `events` داخل `data.js`؛ ترتیب، بج NEXT، شمارش
  معکوس، اسکرول و محو شدن خودکار تنظیم می‌شوند.
- **اسم انجمن**: در [patorjk TAAG](https://patorjk.com/software/taag) با
  فونت ANSI Shadow خروجی ASCII بگیرید و در `asciiLogo` بگذارید؛ بعد
  `siteName` و `titlebar` را هم عوض کنید.
- **رنگ‌ها و شدت نویز**: بالای `style.css` در بخش `:root`.
- **انتشار**: مخزن بسازید → push → در Settings → Pages شاخه‌ی `main`
  (root) را انتخاب کنید.
- دکمه‌ی `[ snow: ON/OFF ]` پایین صفحه، افکت برف را خاموش/روشن می‌کند
  (انتخاب کاربر در localStorage ذخیره می‌شود).
