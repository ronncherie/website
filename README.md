# Ronncherie Website

## File Structure

```
ronncherie/
├── index.html          ← Main website
├── catalog.js          ← ALL product data lives here
├── event-template.html ← Template for special event pages
├── assets/             ← Create this folder for images & logo
│   ├── logo.png        ← Export your logo PDF to PNG, put it here
│   └── *.jpg           ← Product photos go here
└── README.md
```

---

## Editing the Catalog

Open `catalog.js`. Each item looks like this:

```js
{
  id: "chocolate-crunch-cake",     // unique slug, no spaces
  name: "Chocolate Crunch Cake",
  description: "...",
  tags: ["cakes", "chocolate"],    // used for filter buttons
  priceFrom: 15,
  priceTo: null,                   // null = no range shown
  image: "assets/choco.jpg"        // or null if no photo yet
},
```

**To reorder:** simply move items up or down in the array. The website renders them in that order.

**To add an item:** copy an existing block, change the values, give it a unique `id`.

**To add a photo:** put the image in `assets/`, set `image: "assets/your-file.jpg"`.

---

## Creating an Event Page

1. Duplicate `event-template.html` — rename it, e.g. `birthday-sara.html`
2. Open it and edit the three config lines near the bottom:

```js
const EVENT_TITLE = "Sara's Birthday";
const EVENT_DESC  = "A sweet selection for a special day.";
const EVENT_ITEMS = [
  "chocolate-crunch-cake",
  "lotus-tart",
  "birthday-cake-custom",
];
```

3. Save and deploy. Share the URL with your client.

---

## Logo

Export `Logo2.pdf` to a PNG (or SVG) using:
- **Illustrator / Affinity Designer**: File → Export → PNG
- **macOS Preview**: File → Export → PNG
- **Online**: cloudconvert.com (PDF → PNG, 300 DPI)

Then place it in `assets/logo.png` and in `index.html` replace:
```html
<div class="logo-placeholder">Ronncherie</div>
```
with:
```html
<img src="assets/logo.png" alt="Ronncherie" class="logo-img" />
```

---

## WhatsApp Number

In **both** `index.html` and `event-template.html`, find:
```js
const WA_NUMBER = "PHONENUMBER";
```
Replace `PHONENUMBER` with the number in international format, no `+` or spaces:
- Dutch number `06 12 345 678` → `31612345678`

---

## Deployment (GitHub + Netlify)

### First time

1. Create a free GitHub account → New repository → `ronncherie`
2. Upload all files (or use GitHub Desktop)
3. Create a free Netlify account → "Add new site" → "Import from GitHub"
4. Select your repo → Deploy. Done. Live at `something.netlify.app`

### Adding a custom domain later

1. Buy domain at cloudflare.com/products/registrar or namecheap.com
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow Netlify's DNS instructions (takes ~10 minutes)
4. SSL is provisioned automatically — no action needed

### Updating the site after changes

Just push to GitHub (or use GitHub Desktop to sync). Netlify redeploys automatically within ~30 seconds.
