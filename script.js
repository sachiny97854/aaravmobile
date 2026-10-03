const categories = [
  {
    icon: '📱',
    name: 'Smartphones',
    description: 'Flagships, budget picks, and everything in between.',
  },
  {
    icon: '⌚',
    name: 'Smartwatches',
    description: 'Track fitness and stay connected in style.',
  },
  {
    icon: '🎧',
    name: 'Audio Gear',
    description: 'Immersive sound and seamless wireless comfort.',
  },
  {
    icon: '🔋',
    name: 'Accessories',
    description: 'Chargers, cases, and power solutions that last.',
  },
];

const products = [
  {
    name: 'iPhone 15 Pro',
    category: 'Premium',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    price: '₹1,29,999',
    oldPrice: '₹1,49,999',
  },
  {
    name: 'Samsung Galaxy S24',
    category: 'Flagship',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    price: '₹89,999',
    oldPrice: '₹1,04,999',
  },
  {
    name: 'OnePlus 12R',
    category: 'Top Pick',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1601784551446-20c9e07dbf89?auto=format&fit=crop&w=900&q=80',
    price: '₹56,999',
    oldPrice: '₹64,999',
  },
  {
    name: 'Nothing Phone 2',
    category: 'New Arrival',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    price: '₹49,999',
    oldPrice: '₹59,999',
  },
  {
    name: 'Nothing Phone 33333',
    category: 'New Arrival T',
    rating: 3,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    price: '₹99,999',
    oldPrice: '₹159,999',
  },
];

function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  grid.innerHTML = categories
    .map(
      (item) => `
        <article class="category-card">
          <div class="category-icon">${item.icon}</div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <span class="product-tag">${product.category}</span>
          </div>
          <div class="product-body">
            <div class="product-top">
              <h3>${product.name}</h3>
              <span class="rating">${'★'.repeat(product.rating)}</span>
            </div>
            <p>Premium performance with next-gen camera clarity.</p>
            <div class="product-footer">
              <div class="price">${product.price}<small>${product.oldPrice}</small></div>
              <button class="buy-btn">Buy</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function initMenuToggle() {
  const toggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  if (!toggle || !navbar) return;

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('visible');
  });

  navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('visible');
    });
  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    const email = input.value.trim();

    if (!email) {
      input.focus();
      return;
    }

    alert('Thanks! You are subscribed for AARV mobile deals.');
    form.reset();
  });
}

function initFooterYear() {
  const year = document.getElementById('year');
  if (!year) return;
  year.textContent = new Date().getFullYear();
}

renderCategories();
renderProducts();
initMenuToggle();
initNewsletterForm();
initFooterYear();
