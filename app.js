const services = [
  { id: 1, name: "Custom Modded Outfits", price: 18, desc: "High quality saved outfits delivered to your wardrobe." },
  { id: 2, name: "30M Cash Drop", price: 25, desc: "Safe money delivery in private session." },
  { id: 3, name: "Modded Oppressor MK II", price: 32, desc: "Fully upgraded with missiles and performance mods." },
  { id: 4, name: "Rank Boost to 5000", price: 55, desc: "Stable and fast rank progression." }
];

const bundles = [
  { id: 5, name: "Ultimate Los Santos Bundle", price: 149, desc: "Rank 8000 + 50 Outfits + 25 Vehicles + $2B" }
];

function renderItems(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => `
    <div class="card">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">$${item.price}</div>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  `).join('');
}

let cart = [];

function addToCart(id) {
  const item = [...services, ...bundles].find(i => i.id === id);
  if (item) {
    cart.push(item);
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${item.name} has been added to your cart.`);
  }
}

// Initialize
renderItems(services, 'services-grid');
renderItems(bundles, 'bundles-grid');
