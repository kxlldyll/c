const PRODUCTS = [
  {
    id: "pkg-starter",
    name: "Criminal Reset",
    price: "$10.00",
    eta: "⚡ 10–15 min",
    desc: "A baseline structural overhaul designed for corrupted characters requiring a clean integration path away from tracking parameters.",
    features: ["$15,000,000 Verified Cash Drop", "Rank Variable Config up to 120", "Standard Max Stats Calibration", "All Base LSC Unlocks Map Bypass"]
  },
  {
    id: "pkg-executive",
    name: "Executive Syndicate",
    price: "$25.00",
    eta: "⚡ 15–20 min",
    desc: "Automates multi-tier corporate properties, bypassing individual purchase barriers to load your map infrastructure instantly.",
    features: ["$60,000,000 Core Bank Balance", "Rank Variable Config up to 500", "Full Nightclub Setup (5 Technicians)", "Fully Upgraded CEO Office & Hangar"]
  },
  {
    id: "pkg-godtier",
    name: "God Tier Outfit Bundle",
    price: "$15.00",
    eta: "⚡ 5–10 min",
    desc: "Injects impossible cosmetic layers and cross-category clothing component flags straight into your interaction save slots.",
    features: ["20 Custom Glitched Mesh Outfits", "Invisible Torso & Colored Jogger Presets", "Cross-Saves Badge Component Anchors", "Zero Wardrobe Validation Conflicts"]
  },
  {
    id: "pkg-heist",
    name: "Heist Master Override",
    price: "$30.00",
    eta: "⚡ 20–30 min",
    desc: "Force-completes narrative setup pipelines and setup tasks, unlocking repeatable high-yield heist finales immediately.",
    features: ["$100,000,000 Direct Vault Allocation", "Submarine Kosatka + Sparrow Fleet Access", "All Vault Prep Layout Approvals Bypassed", "Infinite Repeat Interval Glitch Enabled"]
  },
  {
    id: "pkg-8k",
    name: "Rank 8000 Tryhard Core",
    price: "$45.00",
    eta: "⚡ Immediate Injection",
    desc: "Pushes your character profile integers straight to the absolute theoretical memory limit of the live multi-session platform.",
    features: ["Locked Rank 8000 Metadata Badge", "1.8 Billion RP Cumulative Matrix", "Maximum Health and Armor Slot Pool", "Rockstar Admins will assume you're cracked"]
  },
  {
    id: "pkg-nexus",
    name: "The Nexus Infinite Omnis",
    price: "$75.00",
    eta: "⚡ Priority Queue",
    desc: "The entire catalog combined into a single continuous injection thread. Full infrastructure automation with absolute asset safety rules.",
    features: ["$500,000,000 Continuous Safe Drop", "Rank 8000 + Custom Rank Choice Select", "All 50 Modded Save Outfits Saved", "Orbital Cannon Charge Limit Overruled"]
  }
];

let cartCount = 0;

function renderProducts() {
  const container = document.getElementById('product-container');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(product => `
    <div class="price-card">
      <h3>${product.name}</h3>
      <div class="price-meta">
        <span class="price-tag">${product.price}</span>
        <span class="eta-tag">${product.eta}</span>
      </div>
      <p class="product-desc">${product.desc}</p>
      <ul class="feature-list">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <button class="buy-btn" onclick="handlePurchase('${product.name}')">Initialize Injection</button>
    </div>
  `).join('');
}

function handlePurchase(productName) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  
  alert(`[NEXUS MEMORY INJECTION] \n"${productName}" added to simulation queue.\n\n⚠️ Reminder: This is a frontend demo shop. No real cash is processed, and your real GTA bank balance remains completely unchanged. 💀`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
