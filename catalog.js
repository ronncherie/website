/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║              RONNCHERIE — CATALOG DATA                   ║
 * ║                                                          ║
 * ║  To REORDER items: drag/move entries up or down.         ║
 * ║  The website renders them top-to-bottom in this order.   ║
 * ║                                                          ║
 * ║  Each item has:                                          ║
 * ║    id          – unique slug (no spaces)                 ║
 * ║    name        – display name                            ║
 * ║    description – short text shown on the card            ║
 * ║    tags        – array of category strings               ║
 * ║    priceFrom   – starting price (number, in €)           ║
 * ║    priceTo     – optional upper price (for ranges)       ║
 * ║    image       – path to image, e.g. "assets/choco.jpg"  ║
 * ║                  or null if no photo yet                 ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const CATALOG = [

  {
    id: "chocolate-crunch-cake",
    name: "Chocolate Crunch Cake",
    description:
      "Our most beloved everyday treat. A rich, layered chocolate cake with a satisfying crunch in every bite. Gone within minutes at any table.",
    tags: ["cakes", "chocolate"],
    priceFrom: 15,
    priceTo: null,
    image: null  // Replace with: "assets/chocolate-crunch.jpg"
  },

  {
    id: "classic-cheesecake",
    name: "Classic Cheesecake",
    description:
      "Velvety smooth, with a buttery biscuit base. Available plain or with seasonal fruit toppings. A timeless crowd-pleaser.",
    tags: ["cakes", "classics"],
    priceFrom: 22,
    priceTo: 28,
    image: null
  },

  {
    id: "lotus-tart",
    name: "Lotus Biscoff Tart",
    description:
      "A silky caramel cream on a crisp Biscoff crust, crowned with whole Lotus biscuits. Decadent and deeply satisfying.",
    tags: ["tarts", "caramel"],
    priceFrom: 25,
    priceTo: null,
    image: null
  },

  {
    id: "fruit-tart",
    name: "Fresh Fruit Tart",
    description:
      "A buttery pastry shell filled with vanilla custard cream, topped with seasonal fresh fruits. Light, elegant, and beautiful.",
    tags: ["tarts", "fruit"],
    priceFrom: 22,
    priceTo: 30,
    image: null
  },

  {
    id: "truffle-box",
    name: "Handmade Truffle Box",
    description:
      "A curated selection of hand-rolled chocolate truffles. Dark, milk, and white chocolate in a range of flavours. A perfect gift.",
    tags: ["chocolate", "gifts"],
    priceFrom: 18,
    priceTo: 35,
    image: null
  },

  {
    id: "birthday-cake-custom",
    name: "Custom Birthday Cake",
    description:
      "A cake designed around the person you're celebrating. We develop the concept together — flavours, decoration, and size all tailored to your wishes.",
    tags: ["custom", "cakes"],
    priceFrom: 45,
    priceTo: 70,
    image: null
  },

  {
    id: "event-cake-custom",
    name: "Custom Event Cake",
    description:
      "For weddings, baby showers, anniversaries, and milestones. We create something truly one of a kind, developed from scratch with you.",
    tags: ["custom", "cakes"],
    priceFrom: 55,
    priceTo: 70,
    image: null
  },

  {
    id: "brownie-tray",
    name: "Fudgy Brownie Tray",
    description:
      "Dense, deeply chocolatey, with a slightly crisp top and a molten centre. Cut into portions for easy serving at events.",
    tags: ["chocolate", "traybakes"],
    priceFrom: 18,
    priceTo: null,
    image: null
  },

  {
    id: "meringue-kisses",
    name: "Meringue Kiss Box",
    description:
      "Delicate cloud-like meringues, crisp on the outside and pillowy within. Available in pastel colours to match your event palette.",
    tags: ["gifts", "classics"],
    priceFrom: 15,
    priceTo: 22,
    image: null
  },

];
