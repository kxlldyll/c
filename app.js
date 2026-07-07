const products = [
  {
    id: 1,
    name: "God Tier Outfits Pack",
    category: "outfits",
    price: 35,
    desc: "50 outfits so clean your character will file for divorce."
  },
  {
    id: 2,
    name: "30M Safe Cash Drop",
    category: "economy",
    price: 22,
    desc: "We drop it. You pick it up. Rockstar pretends not to notice."
  },
  {
    id: 3,
    name: "Oppressor MK II (Missiles Included)",
    category: "vehicles",
    price: 45,
    desc: "The griefing meta never dies."
  },
  {
    id: 4,
    name: "Rank 8000 Boost",
    category: "economy",
    price: 60,
    desc: "From zero to tryhard in under 40 minutes."
  },
  {
    id: 5,
    name: "Flying Deluxo Bundle",
    category: "vehicles",
    price: 38,
    desc: "Yes it still works in 2026. Don't ask how."
  },
  {
    id: 6,
    name: "Invisible Character + Godmode",
    category: "outfits",
    price: 55,
    desc: "Become the final boss of every lobby."
  }
];

let cart = [];

// Render Products
function renderProducts(filteredProducts = products) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = filteredProducts.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">$${p.price}</div>
      <button class="add-btn" data-id="${p.id}">Add to Cart</button>
    </div>
  `).join('');

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = products.find(p => p.id === parseInt(btn.dataset.id));
      cart.push(product);
      updateCart();
      alert(`Added: ${product.name}\n(We both know this is fake money)`);
    });
  });
}

// Cart
function updateCart() {
  document.getElementById('cart-count').textContent = cart.length;
  
  const itemsContainer = document.getElementById('cart-items');
  itemsContainer.innerHTML = cart.map((item, i) => `
    <div style="padding:12px 0; border-bottom:1px solid #334;">
      ${item.name} — $${item.price}
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = `$${total}`;
}

// Event Listeners
document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart-drawer').classList.toggle('open');
});

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-drawer').classList.remove('open');
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  document.getElementById('checkout-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('checkout-modal').style.display = 'none';
});

document.getElementById('place-order').addEventListener('click', () => {
  const jokes = [
    "Transaction complete. Your account has been sold to a Russian teenager.",
    "Thank you for your purchase. Rockstar banned you while you were reading this.",
    "Funds received. We are now ghosting you on Discord.",
    "Congratulations. You are now the proud owner of digital nothing."
  ];
  alert(jokes[Math.floor(Math.random() * jokes.length)]);
  cart = [];
  updateCart();
  document.getElementById('checkout-modal').style.display = 'none';
  document.getElementById('cart-drawer').classList.remove('open');
});

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => p.category === filter);
    renderProducts(filtered);
  });
});

// Theme
function setTheme(color) {
  document.documentElement.style.setProperty('--accent', color);
}

document.getElementById('theme-btn').addEventListener('click', () => {
  const panel = document.getElementById('theme-panel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});

// Init
renderProducts();
