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
