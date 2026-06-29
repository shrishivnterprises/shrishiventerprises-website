// ============================================================
// SHRI SHIV ENTERPRISES — E-Commerce App JS
// ============================================================

// ===================== PRODUCT DATA =====================
const PRODUCTS = [
  {
    id: 1, name: "Piyus Series School Notebook", category: "school",
    image: "images/lifestyle-piyus.jpg",
    price: 45, originalPrice: 60, discount: 25,
    size: "20×14 cm", pages: 200, paper: "60 GSM Ruled",
    brand: "Piyus", description: "Vibrant cartoon cover featuring Piyus — the most popular notebook brand with school students. Single line ruled, smooth 60GSM paper, strong binding.",
    badge: "Best Seller", stars: 5, reviews: 248, isNew: false, featured: true,
    images: ["images/lifestyle-piyus.jpg", "images/promo-notebooks.jpg"]
  },
  {
    id: 2, name: "Harsh Sports Edition Notebook", category: "school",
    image: "images/lifestyle-harsh.jpg",
    price: 48, originalPrice: 65, discount: 26,
    size: "20×14 cm", pages: 200, paper: "60 GSM Ruled",
    brand: "Harsh", description: "Energetic sports-themed cover with premium single-line ruled paper. Perfect for students who love sports. Durable binding, bright white pages.",
    badge: "Popular", stars: 5, reviews: 196, isNew: false, featured: true,
    images: ["images/lifestyle-harsh.jpg", "images/promo-notebooks.jpg"]
  },
  {
    id: 3, name: "Anshika Premium A4 Notebook", category: "a4",
    image: "images/notebook-anshika-a4.jpg",
    price: 75, originalPrice: 95, discount: 21,
    size: "A4 (30×21 cm)", pages: 140, paper: "70 GSM Ruled",
    brand: "Anshika", description: "Premium A4 exercise notebook with stunning horse cover design. 70GSM paper for professional note-taking. Wide ruled lines, eco-friendly certified.",
    badge: "New", stars: 5, reviews: 89, isNew: true, featured: true,
    images: ["images/notebook-anshika-a4.jpg", "images/notebooks-a4-set.jpg", "images/lifestyle-anshika.jpg"]
  },
  {
    id: 4, name: "Vaishnavi Ice Skating Notebook", category: "school",
    image: "images/notebook-vaishnavi.jpg",
    price: 48, originalPrice: 62, discount: 23,
    size: "20×14 cm", pages: 200, paper: "60 GSM Ruled",
    brand: "Vaishnavi", description: "Beautiful ice skating adventure themed notebook. No.1 Brand, Superior Quality. 200 pages single line ruled. Perfect for primary and middle school students.",
    badge: "Top Rated", stars: 5, reviews: 312, isNew: false, featured: true,
    images: ["images/notebook-vaishnavi.jpg", "images/promo-notebooks.jpg"]
  },
  {
    id: 5, name: "Siya Summer Fun Notebook", category: "school",
    image: "images/notebook-summer.jpg",
    price: 45, originalPrice: 58, discount: 22,
    size: "20×14 cm", pages: 200, paper: "60 GSM Ruled",
    brand: "Siya", description: "Cheerful Summer collection notebook with a happy child illustration. No.1 Brand, bright and engaging cover. Single ruled, smooth finish paper.",
    badge: "Best Seller", stars: 5, reviews: 276, isNew: false, featured: false,
    images: ["images/notebook-summer.jpg", "images/promo-notebooks.jpg"]
  },
  {
    id: 6, name: "A4 Exercise Notebooks Set (4 pcs)", category: "a4",
    image: "images/notebooks-a4-set.jpg",
    price: 260, originalPrice: 340, discount: 24,
    size: "A4 (30×21 cm)", pages: 140, paper: "70 GSM Ruled",
    brand: "Shiv", description: "Set of 4 premium A4 exercise notebooks — Sainesh, Shivangi, Sushant, and Sainesh Gaming editions. Vibrant covers, premium writing paper. Best value pack.",
    badge: "Bundle Deal", stars: 4, reviews: 134, isNew: true, featured: true,
    images: ["images/notebooks-a4-set.jpg", "images/notebook-anshika-a4.jpg"]
  },
  {
    id: 7, name: "Anshika Reading Notebook", category: "exercise",
    image: "images/lifestyle-anshika.jpg",
    price: 72, originalPrice: 90, discount: 20,
    size: "A4 (30×21 cm)", pages: 160, paper: "70 GSM Ruled",
    brand: "Anshika", description: "The classic Anshika notebook series — preferred by students for over a decade. White horse cover, premium 70GSM paper, wide ruled. Eco-friendly manufacturing.",
    badge: "Classic", stars: 5, reviews: 421, isNew: false, featured: false,
    images: ["images/lifestyle-anshika.jpg", "images/notebook-anshika-a4.jpg"]
  },
  {
    id: 8, name: "Customized School Notebook (OEM)", category: "custom",
    image: "images/promo-notebooks.jpg",
    price: 38, originalPrice: 55, discount: 31,
    size: "Custom Size", pages: 100, paper: "60-80 GSM",
    brand: "Custom / OEM", description: "Get your school or company name printed on premium quality notebooks. Minimum 500 units. Custom cover design, size, page count & paper quality. Contact us for bulk pricing.",
    badge: "Custom Order", stars: 5, reviews: 89, isNew: false, featured: false,
    images: ["images/promo-notebooks.jpg", "images/notebook-vaishnavi.jpg", "images/notebook-summer.jpg"]
  },
  {
    id: 9, name: "Practical Science Notebook", category: "practical",
    image: "images/notebook-anshika-a4.jpg",
    price: 85, originalPrice: 110, discount: 23,
    size: "A4 (30×21 cm)", pages: 80, paper: "80 GSM Plain+Ruled",
    brand: "Shiv", description: "Practical notebook with alternating plain and ruled pages, ideal for science experiments, art records and diagrams. Strong binding, 80GSM paper.",
    badge: null, stars: 4, reviews: 67, isNew: true, featured: false,
    images: ["images/notebook-anshika-a4.jpg"]
  },
  {
    id: 10, name: "School Register A4 (200 pages)", category: "registers",
    image: "images/notebooks-a4-set.jpg",
    price: 120, originalPrice: 150, discount: 20,
    size: "A4 (30×21 cm)", pages: 200, paper: "70 GSM Ruled",
    brand: "Shiv", description: "Premium school register with hard cover, 200 pages, single line ruled. Ideal for teachers, school offices and institutions. Bulk discounts available.",
    badge: null, stars: 4, reviews: 45, isNew: false, featured: false,
    images: ["images/notebooks-a4-set.jpg"]
  },
  {
    id: 11, name: "Long Book 500 Pages", category: "long",
    image: "images/lifestyle-harsh.jpg",
    price: 150, originalPrice: 190, discount: 21,
    size: "20×14 cm", pages: 500, paper: "65 GSM Ruled",
    brand: "Shiv", description: "High-capacity long book with 500 ruled pages. Perfect for notes, journals, and study materials. Durable binding ensures pages stay intact under heavy use.",
    badge: null, stars: 4, reviews: 38, isNew: false, featured: false,
    images: ["images/lifestyle-harsh.jpg"]
  },
  {
    id: 12, name: "Drawing Book A4 (40 Pages)", category: "drawing",
    image: "images/promo-notebooks.jpg",
    price: 55, originalPrice: 70, discount: 21,
    size: "A4 (30×21 cm)", pages: 40, paper: "120 GSM Plain",
    brand: "Shiv", description: "Premium drawing book with thick 120GSM plain art paper. Spiral bound for easy open-flat drawing. Ideal for school art classes, sketching and painting.",
    badge: "New", stars: 4, reviews: 52, isNew: true, featured: false,
    images: ["images/promo-notebooks.jpg"]
  }
];

// ===================== STATE =====================
let cart = JSON.parse(localStorage.getItem('sse_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('sse_wishlist') || '[]');
let activeCategory = 'all';
let currentSlide = 0;
let slideInterval;

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderNewArrivals();
  renderShopProducts(PRODUCTS);
  renderCategoriesPage();
  updateCartUI();
  updateWishlistUI();
  startSlider();
  initScrollEffects();
  setupScrollTop();
});

// ===================== NAVIGATION =====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (page === 'shop') renderShopProducts(PRODUCTS);
}

function setActiveNav(el) {
  if (!el) return;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function toggleMobileMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('mobile-open');
}

// ===================== HERO SLIDER =====================
function startSlider() {
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  updateDots();
  resetSliderInterval();
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  updateDots();
  resetSliderInterval();
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function resetSliderInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

// ===================== PRODUCTS RENDERING =====================
function createProductCard(p) {
  const inWishlist = wishlist.some(w => w.id === p.id);
  return `
    <div class="product-card" data-cat="${p.category}" data-price="${p.price}">
      <div class="product-img-wrap" onclick="openProductModal(${p.id})">
        ${p.badge ? `<div class="product-badge ${p.badge === 'Best Seller' || p.badge === 'Bundle Deal' ? 'gold' : ''}">${p.badge}</div>` : ''}
        <div class="wishlist-icon ${inWishlist ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="Add to Wishlist">
          ${inWishlist ? '❤️' : '🤍'}
        </div>
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <div class="product-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)} <span style="color:var(--text-muted);font-size:11px;">(${p.reviews})</span></div>
        <h3 onclick="openProductModal(${p.id})">${p.name}</h3>
        <div class="product-specs">
          <span class="spec-tag">📐 ${p.size}</span>
          <span class="spec-tag">📄 ${p.pages}pp</span>
          <span class="spec-tag">✍️ ${p.paper}</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price}</span>
          <span class="price-original">₹${p.originalPrice}</span>
          <span class="price-discount">${p.discount}% off</span>
        </div>
        <div class="product-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
          <button class="btn-buy" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  document.getElementById('featuredProductsGrid').innerHTML = featured.map(createProductCard).join('');
}

function renderNewArrivals() {
  const newItems = PRODUCTS.filter(p => p.isNew).slice(0, 4);
  document.getElementById('newArrivalsGrid').innerHTML = newItems.map(createProductCard).join('');
}

function renderShopProducts(products) {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;
  const cat = activeCategory;
  let filtered = cat === 'all' ? [...products] : products.filter(p => p.category === cat);

  const priceMax = parseInt(document.getElementById('priceRange')?.value || 500);
  filtered = filtered.filter(p => p.price <= priceMax);

  const sort = document.getElementById('sortBy')?.value || 'default';
  if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const count = document.getElementById('shopResultCount');
  if (count) count.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  grid.innerHTML = filtered.length ? filtered.map(createProductCard).join('') : '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted);">No products found in this category.</div>';
}

function renderCategoriesPage() {
  const cats = [
    { key: 'school', icon: '📚', name: 'School Notebooks', desc: 'Ruled & Blank • All Standards', count: '12 Products', img: 'images/lifestyle-piyus.jpg' },
    { key: 'exercise', icon: '📓', name: 'Exercise Notebooks', desc: 'Ruled • Graph • Square', count: '8 Products', img: 'images/lifestyle-anshika.jpg' },
    { key: 'a4', icon: '📄', name: 'A4 Notebooks', desc: 'Premium writing paper', count: '10 Products', img: 'images/notebooks-a4-set.jpg' },
    { key: 'practical', icon: '🔬', name: 'Practical Notebooks', desc: 'Science • Art • Lab records', count: '6 Products', img: 'images/notebook-anshika-a4.jpg' },
    { key: 'registers', icon: '📋', name: 'Registers', desc: 'Office • School • Account', count: '7 Products', img: 'images/lifestyle-harsh.jpg' },
    { key: 'long', icon: '📜', name: 'Long Books', desc: '200 to 500 pages', count: '4 Products', img: 'images/notebook-summer.jpg' },
    { key: 'drawing', icon: '🎨', name: 'Drawing Books', desc: 'Plain • Art paper quality', count: '5 Products', img: 'images/promo-notebooks.jpg' },
    { key: 'custom', icon: '✏️', name: 'Customized Printed', desc: 'Your brand • OEM orders', count: 'Custom Order', img: 'images/notebook-vaishnavi.jpg' },
  ];
  const grid = document.getElementById('categoriesPageGrid');
  if (grid) {
    grid.innerHTML = cats.map(c => `
      <div class="cat-card" onclick="filterCategory('${c.key}');showPage('shop')">
        <div class="cat-icon">${c.icon}</div>
        <div class="cat-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"/></div>
        <h3>${c.name}</h3><p>${c.desc}</p>
        <span class="cat-count">${c.count}</span>
      </div>
    `).join('');
  }
}

function filterCategory(cat) {
  activeCategory = cat;
  renderShopProducts(PRODUCTS);
}

function filterProducts() {
  renderShopProducts(PRODUCTS);
}

function setView(type, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('shopProductsGrid');
  if (type === 'list') {
    grid.style.gridTemplateColumns = '1fr';
  } else {
    grid.style.gridTemplateColumns = '';
  }
}

// ===================== PRODUCT MODAL =====================
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const imgs = p.images || [p.image];
  const thumbs = imgs.map((img, i) => `<img src="${img}" class="pm-thumb ${i === 0 ? 'active' : ''}" onclick="swapMainImg(this,'${img}')" alt="Product view ${i+1}" loading="lazy" />`).join('');

  document.getElementById('productModalContent').innerHTML = `
    <div class="pm-grid">
      <div>
        <img src="${imgs[0]}" alt="${p.name}" class="pm-img-main" id="pmMainImg" />
        <div class="pm-thumbnails">${thumbs}</div>
      </div>
      <div>
        <h2 class="pm-title">${p.name}</h2>
        <div class="pm-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)} <span style="color:var(--text-muted);font-size:13px;">${p.reviews} reviews</span></div>
        <div class="pm-price">₹${p.price} <span style="font-size:1rem;font-weight:400;color:var(--text-muted);text-decoration:line-through;">₹${p.originalPrice}</span> <span style="font-size:14px;color:var(--green);font-weight:700;">${p.discount}% OFF</span></div>
        <div class="pm-specs-list">
          <div class="pm-spec"><span>Brand</span><span>${p.brand}</span></div>
          <div class="pm-spec"><span>Size</span><span>${p.size}</span></div>
          <div class="pm-spec"><span>Pages</span><span>${p.pages}</span></div>
          <div class="pm-spec"><span>Paper</span><span>${p.paper}</span></div>
          <div class="pm-spec"><span>Category</span><span>${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span></div>
        </div>
        <p class="pm-desc">${p.description}</p>
        <div class="pm-actions">
          <button class="btn-cart" style="padding:12px 24px;border-radius:50px;font-size:15px;" onclick="addToCart(${p.id});closeProductModal()">🛒 Add to Cart</button>
          <button class="btn-buy" style="padding:12px 24px;border-radius:50px;font-size:15px;" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
        <div style="margin-top:16px;">
          <button class="pm-bulk-btn" onclick="closeProductModal();showPage('bulk')">📦 Enquire Bulk Order</button>
        </div>
        <div style="margin-top:16px;">
          <a href="https://wa.me/916393539533?text=Hello!%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}%20(₹${p.price}).%20Please%20share%20details." target="_blank" style="display:inline-flex;align-items:center;gap:8px;color:#25D366;font-weight:600;font-size:14px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('productModalOverlay').style.display = 'block';
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function swapMainImg(thumb, src) {
  document.getElementById('pmMainImg').src = src;
  document.querySelectorAll('.pm-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModalOverlay').style.display = 'none';
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===================== CART =====================
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
}

function buyNow(id) {
  addToCart(id);
  setTimeout(() => {
    toggleCart();
  }, 500);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    if (item.qty === 0) removeFromCart(id);
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('sse_cart', JSON.stringify(cart));
}

let couponDiscount = 0;
const COUPONS = { 'SHIV10': 10, 'BULK20': 20, 'WELCOME15': 15 };

function applyCoupon() {
  const code = document.getElementById('couponInput').value.toUpperCase().trim();
  if (COUPONS[code]) {
    couponDiscount = COUPONS[code];
    showToast(`🎉 Coupon applied! ${couponDiscount}% discount`);
    updateCartUI();
  } else {
    showToast('❌ Invalid coupon code');
  }
}

function updateCartUI() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(total * 0.18);
  const shipping = total >= 5000 ? 0 : (total > 0 ? 99 : 0);
  const discountAmt = Math.round(total * couponDiscount / 100);
  const grandTotal = total + gst + shipping - discountAmt;

  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartSubtotal').textContent = '₹' + total;
  document.getElementById('cartGST').textContent = '₹' + gst;
  document.getElementById('cartShipping').textContent = shipping === 0 ? 'FREE' : '₹' + shipping;
  document.getElementById('cartTotal').textContent = '₹' + grandTotal;

  const discRow = document.getElementById('discountRow');
  if (couponDiscount > 0) {
    discRow.style.display = 'flex';
    document.getElementById('cartDiscount').textContent = '-₹' + discountAmt;
  } else {
    discRow.style.display = 'none';
  }

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty</p><button onclick="toggleCart();showPage('shop')">Start Shopping</button></div>`;
    cartFooter.style.display = 'none';
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.size} • ${item.pages} pages</p>
          <div class="cart-item-price">₹${item.price * item.qty}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
    cartFooter.style.display = 'block';
  }

  // Update checkout modal if open
  const checkoutSummary = document.getElementById('checkoutOrderSummary');
  if (checkoutSummary) {
    checkoutSummary.innerHTML = cart.map(item => `
      <div class="checkout-order-item">
        <img src="${item.image}" alt="${item.name}" />
        <div><strong>${item.name}</strong><br/><span style="color:var(--text-muted);font-size:13px;">Qty: ${item.qty} × ₹${item.price}</span></div>
        <div style="margin-left:auto;font-weight:700;">₹${item.price * item.qty}</div>
      </div>
    `).join('');
    document.getElementById('checkoutSubtotal').textContent = '₹' + total;
    document.getElementById('checkoutGST').textContent = '₹' + gst;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : '₹' + shipping;
    document.getElementById('checkoutTotal').textContent = '₹' + grandTotal;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ===================== WISHLIST =====================
function toggleWishlist(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.push(product);
    showToast('❤️ Added to wishlist!');
  }
  localStorage.setItem('sse_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  // Re-render product cards to update wishlist icons
  renderFeaturedProducts();
  renderNewArrivals();
  renderShopProducts(PRODUCTS);
}

function updateWishlistUI() {
  document.getElementById('wishlistCount').textContent = wishlist.length;
  const wishlistItems = document.getElementById('wishlistItems');
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `<div class="cart-empty"><div class="empty-icon">❤️</div><p>Your wishlist is empty</p></div>`;
  } else {
    wishlistItems.innerHTML = wishlist.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">₹${item.price}</div>
          <div style="display:flex;gap:8px;margin-top:8px;">
            <button class="btn-cart" style="padding:7px 14px;border-radius:8px;font-size:12px;" onclick="addToCart(${item.id});toggleWishlist(${item.id})">Add to Cart</button>
            <button class="remove-item" onclick="toggleWishlist(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function toggleWishlistPanel() {
  const sidebar = document.getElementById('wishlistSidebar');
  const overlay = document.getElementById('wishlistOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ===================== SEARCH =====================
function handleSearch(e) {
  if (e.key === 'Enter') performSearch();
  else liveSearch();
}

function liveSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const dropdown = document.getElementById('searchResults');
  const overlay = document.getElementById('searchResultsOverlay');

  if (q.length < 2) { dropdown.style.display = 'none'; overlay.style.display = 'none'; return; }

  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  if (results.length === 0) { dropdown.style.display = 'none'; overlay.style.display = 'none'; return; }

  dropdown.innerHTML = results.slice(0, 6).map(p => `
    <div class="search-result-item" onclick="closeSearch();openProductModal(${p.id})">
      <img src="${p.image}" alt="${p.name}" />
      <div class="search-result-text">
        <strong>${p.name}</strong>
        <span>₹${p.price} • ${p.size} • ${p.pages} pages</span>
      </div>
    </div>
  `).join('');

  dropdown.style.display = 'block';
  overlay.style.display = 'block';
}

function performSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  closeSearch();
  if (!q) return;
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  activeCategory = 'all';
  showPage('shop');
  setTimeout(() => renderShopProducts(results), 100);
}

function closeSearch() {
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchResultsOverlay').style.display = 'none';
}

// ===================== MODALS =====================
function showModal(id) {
  document.getElementById(id + 'Overlay').style.display = 'block';
  document.getElementById(id).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id + 'Overlay').style.display = 'none';
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = '';
}

function switchTab(tab, btn) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginTab').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupTab').style.display = tab === 'signup' ? 'block' : 'none';
}

function placeOrder() {
  showToast('🎉 Order placed! We will contact you shortly.');
  cart = []; couponDiscount = 0;
  saveCart(); updateCartUI();
  closeModal('checkoutModal');
}

// ===================== FORMS =====================
function submitContactForm(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll reply within 24 hours.');
  e.target.reset();
}

function submitBulkForm(e) {
  e.preventDefault();
  showToast('📦 Bulk enquiry submitted! We\'ll call you within 2 hours.');
  e.target.reset();
}

// ===================== THEME =====================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('sse_theme', isDark ? 'light' : 'dark');
}

// Restore theme
const savedTheme = localStorage.getItem('sse_theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

// ===================== FAQ =====================
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const arrow = btn.querySelector('.faq-arrow');
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-answer.open').forEach(a => { a.classList.remove('open'); a.previousElementSibling.querySelector('.faq-arrow').style.transform = ''; });
  if (!isOpen) { answer.classList.add('open'); arrow.style.transform = 'rotate(180deg)'; }
}

// ===================== TOAST =====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===================== SCROLL EFFECTS =====================
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.product-card, .cat-card, .why-card, .review-card, .value-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

function setupScrollTop() {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    btn.classList.toggle('visible', window.scrollY > 400);
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = window.scrollY > 60 ? '0 4px 30px rgba(0,0,0,0.4)' : '';
  });
}

// ============================================================
// BACKEND INTEGRATION — Order Notifications
// ============================================================
const API_BASE = window.location.origin.replace('8080', '5050');
// If same origin doesn't work (different ports), use absolute
const BACKEND = 'https://08veehst04-5050.hosted.obvious.ai';

async function apiPost(endpoint, data) {
  try {
    const res = await fetch(BACKEND + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (e) {
    console.error('API error:', e);
    return { success: false };
  }
}

// ---- Override: Place Order (Checkout) ----
async function placeOrder() {
  const name    = document.querySelector('#checkoutModal input[type=text]')?.value || '';
  const phone   = document.querySelector('#checkoutModal input[type=tel]')?.value || '';
  const address = document.querySelector('#checkoutModal textarea')?.value || '';
  const city    = document.querySelectorAll('#checkoutModal input[type=text]')[1]?.value || '';
  const pincode = document.querySelectorAll('#checkoutModal input[type=text]')[2]?.value || '';
  const payment = document.querySelector('#checkoutModal input[name=payment]:checked')?.value || 'UPI';

  if (!name || !phone) { showToast('⚠️ Please fill name and phone number'); return; }

  const subtotal = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const gst      = Math.round(subtotal * 0.18);
  const shipping = subtotal >= 5000 ? 0 : 99;
  const total    = subtotal + gst + shipping;

  const orderBtn = document.querySelector('#checkoutModal .submit-btn');
  orderBtn.textContent = 'Placing Order...';
  orderBtn.disabled = true;

  const result = await apiPost('/api/order', {
    name, phone, address, city, pincode, payment,
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    subtotal, gst, shipping, total,
    timestamp: new Date().toISOString()
  });

  orderBtn.textContent = 'Place Order →';
  orderBtn.disabled = false;

  if (result.success) {
    showToast(`🎉 Order placed! ID: ${result.order_id}. Hum aapse jald contact karenge.`);
    cart = []; couponDiscount = 0;
    saveCart(); updateCartUI();
    closeModal('checkoutModal');
    // Show success screen
    setTimeout(() => {
      showToast('📱 Aapko WhatsApp aur Email par confirmation milega!');
    }, 3000);
  } else {
    showToast('✅ Order received! Hum aapse contact karenge.');
    cart = []; saveCart(); updateCartUI();
    closeModal('checkoutModal');
  }
}

// ---- Override: Contact Form ----
async function submitContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('input, textarea, select');
  const data = {
    name:    inputs[0]?.value || '',
    phone:   inputs[1]?.value || '',
    email:   inputs[2]?.value || '',
    subject: inputs[3]?.value || '',
    message: inputs[4]?.value || '',
  };

  const btn = form.querySelector('button[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const result = await apiPost('/api/contact', data);

  btn.textContent = 'Send Message →';
  btn.disabled = false;

  showToast('✅ Message bhej diya! Hum 24 ghante mein reply karenge.');
  form.reset();
}

// ---- Override: Bulk Enquiry Form ----
async function submitBulkForm(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('input, select, textarea');
  const data = {
    company:  inputs[0]?.value || '',
    contact:  inputs[1]?.value || '',
    phone:    inputs[2]?.value || '',
    email:    inputs[3]?.value || '',
    product:  inputs[4]?.value || '',
    quantity: inputs[5]?.value || '',
    city:     inputs[6]?.value || '',
    notes:    inputs[7]?.value || '',
  };

  const btn = form.querySelector('button[type=submit]');
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  const result = await apiPost('/api/bulk-enquiry', data);

  btn.textContent = 'Submit Bulk Enquiry →';
  btn.disabled = false;

  showToast('📦 Bulk enquiry mili! 2 ghante mein call karenge.');
  form.reset();
}

// ============================================================
// ADMIN NOTIFICATIONS — Gmail (EmailJS) + WhatsApp
// ============================================================
const EMAILJS_SERVICE_ID  = 'service_t4w5ke6';
const EMAILJS_TEMPLATE_ID = 'template_6l2w57s';
const EMAILJS_PUBLIC_KEY  = 'QzwlIy0VFBieA11zz';
const ADMIN_EMAIL         = 'shrishiventerprises2025@gmail.com';
const ADMIN_WHATSAPP      = '916393539533';

function sendAdminWhatsApp(orderData) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {day:'2-digit',month:'numeric',year:'numeric'});
  const timeStr = now.toLocaleTimeString('en-IN', {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true});

  const itemsList = (orderData.items || []).map(i =>
    `• ${i.name} x${i.qty} = ₹${i.qty * i.price}`
  ).join('\n');

  // 1. GMAIL via EmailJS
  if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      order_id:      orderData.order_id || 'SSE001',
      customer_name: orderData.name     || '',
      phone:         orderData.phone    || '',
      address:       (orderData.address || '') + (orderData.city ? ', ' + orderData.city : '') + (orderData.pincode ? ' - ' + orderData.pincode : ''),
      items:         itemsList,
      total:         '₹' + (orderData.total || 0),
      payment:       orderData.payment  || 'UPI',
      time:          dateStr + ', ' + timeStr,
      to_email:      ADMIN_EMAIL
    }).then(() => {
      console.log('✅ Email sent to admin!');
    }).catch(err => {
      console.error('❌ Email failed:', err);
    });
  }

  // 2. WHATSAPP
  const waMsg = `🛒 *NEW ORDER - ${orderData.order_id}*

👤 Customer: ${orderData.name}
📞 Phone: ${orderData.phone}
📍 Address: ${orderData.address || ''}${orderData.city ? ', ' + orderData.city : ''}${orderData.pincode ? ', ' + orderData.pincode : ''}
📦 Items:
${itemsList}
💰 Total: ₹${orderData.total}
💳 Payment: ${orderData.payment || 'UPI'}
⏰ ${dateStr}, ${timeStr}`;

  window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(waMsg)}`, '_blank');
}

// ============================================================
// INVOICE DOWNLOAD SUPPORT — Browser-side PDF (no backend needed)
// ============================================================
let lastOrderId = null;
let lastOrderData = null;

// Company Details
const COMPANY_INFO = {
  name:    'Shri Shiv Enterprises',
  tagline: 'Manufacturer & Wholesaler of Premium Notebooks & Stationery',
  address: '41/1 Bajrang Vihar, Khadepur, Kanpur, UP - 208021',
  phone:   '+91 6393539533',
  email:   'shrishiventerprises2025@gmail.com',
  gstin:   '09BYUPP5969E2ZF',
  state:   'Uttar Pradesh (09)'
};

function generateInvoicePDF(orderData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210, H = 297;

  // ── HEADER BACKGROUND ──────────────────────────────
  doc.setFillColor(36, 59, 107); // Navy
  doc.rect(0, 0, W, 55, 'F');

  // Company Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Shri Shiv Enterprises', 15, 16);

  // Tagline
  doc.setTextColor(244, 197, 66); // Gold
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Manufacturer & Wholesaler of Premium Notebooks & Stationery', 15, 23);

  // Address & Contact
  doc.setTextColor(200, 220, 255);
  doc.setFontSize(8.5);
  doc.text('41/1 Bajrang Vihar, Khadepur, Kanpur, UP - 208021', 15, 30);
  doc.text('Ph: +91 6393539533  |  Email: shrishiventerprises2025@gmail.com', 15, 36);

  // GSTIN BOX — Gold highlight
  doc.setFillColor(244, 197, 66);
  doc.roundedRect(14, 39, 85, 9, 2, 2, 'F');
  doc.setTextColor(36, 59, 107);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('GSTIN: 09BYUPP5969E2ZF', 17, 45);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(200, 220, 255);
  doc.text('State: Uttar Pradesh (09)', 105, 45);

  // TAX INVOICE label
  doc.setTextColor(244, 197, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('TAX INVOICE', W - 15, 16, { align: 'right' });

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Invoice No: ' + orderData.order_id, W - 15, 24, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const now = new Date();
  doc.text('Date: ' + now.toLocaleDateString('en-IN', {day:'2-digit',month:'long',year:'numeric'}), W - 15, 31, { align: 'right' });
  doc.text('Time: ' + now.toLocaleTimeString('en-IN', {hour:'2-digit',minute:'2-digit'}), W - 15, 37, { align: 'right' });
  doc.text('Payment: ' + (orderData.payment || 'UPI'), W - 15, 43, { align: 'right' });

  // Gold divider
  doc.setFillColor(244, 197, 66);
  doc.rect(0, 56, W, 2, 'F');

  // ── BILL TO ─────────────────────────────────────────
  doc.setTextColor(244, 197, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('BILL TO:', 15, 67);

  doc.setTextColor(26, 26, 46);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(orderData.name || 'Customer', 15, 75);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 120);
  doc.text('Ph: ' + (orderData.phone || ''), 15, 82);
  if (orderData.address) doc.text(orderData.address + (orderData.city ? ', ' + orderData.city : '') + (orderData.pincode ? ' - ' + orderData.pincode : ''), 15, 88);

  // ── PRODUCT TABLE ────────────────────────────────────
  const tableY = 98;
  doc.setFillColor(36, 59, 107);
  doc.rect(15, tableY, W - 30, 9, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('PRODUCT NAME', 18, tableY + 6);
  doc.text('SPEC', 95, tableY + 6);
  doc.text('QTY', 128, tableY + 6);
  doc.text('RATE (Rs)', 143, tableY + 6);
  doc.text('AMOUNT (Rs)', 165, tableY + 6);

  let rowY = tableY + 9;
  const items = orderData.items || [];
  items.forEach((item, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 249 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(15, rowY, W - 30, 9, 'F');
    doc.setTextColor(26, 26, 46);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text((item.name || '').substring(0, 38), 18, rowY + 6);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 120);
    doc.text((item.spec || 'Standard').substring(0, 18), 95, rowY + 6);
    doc.setTextColor(26, 26, 46);
    doc.text(String(item.qty || 1), 130, rowY + 6);
    doc.text('Rs ' + (item.price || 0), 143, rowY + 6);
    doc.setFont('helvetica', 'bold');
    doc.text('Rs ' + ((item.qty || 1) * (item.price || 0)), 165, rowY + 6);
    rowY += 9;
  });

  // Table border
  doc.setDrawColor(220, 220, 220);
  doc.rect(15, tableY, W - 30, rowY - tableY, 'S');

  // ── TOTALS ──────────────────────────────────────────
  let totY = rowY + 8;
  const subtotal = orderData.subtotal || 0;
  const gst      = orderData.gst || 0;
  const shipping = orderData.shipping || 0;
  const total    = orderData.total || 0;

  doc.setFillColor(248, 249, 252);
  doc.rect(120, totY - 4, W - 135, 46, 'F');

  const totRow = (label, val, bold) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(bold ? 10 : 9);
    doc.setTextColor(bold ? 36 : 80, bold ? 59 : 80, bold ? 107 : 100);
    doc.text(label, 122, totY);
    doc.text(val, W - 17, totY, { align: 'right' });
    totY += 8;
  };

  totRow('Subtotal:', 'Rs ' + subtotal);
  totRow('CGST (9%):', 'Rs ' + Math.floor(gst/2));
  totRow('SGST (9%):', 'Rs ' + (gst - Math.floor(gst/2)));
  totRow('Shipping:', shipping === 0 ? 'FREE' : 'Rs ' + shipping);

  // Grand Total highlight
  doc.setFillColor(36, 59, 107);
  doc.rect(120, totY - 5, W - 135, 10, 'F');
  doc.setTextColor(244, 197, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('GRAND TOTAL:', 122, totY + 2);
  doc.text('Rs ' + total, W - 17, totY + 2, { align: 'right' });
  totY += 14;

  // Amount in words
  doc.setFillColor(248, 249, 252);
  doc.rect(15, totY, W - 30, 10, 'F');
  doc.setTextColor(36, 59, 107);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Amount in Words:', 18, totY + 7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(26, 26, 46);
  doc.text(amountInWords(total) + ' Only', 58, totY + 7);

  // ── FOOTER ──────────────────────────────────────────
  doc.setFillColor(36, 59, 107);
  doc.rect(0, H - 22, W, 22, 'F');

  // GSTIN in footer — BOLD GOLD
  doc.setTextColor(244, 197, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('GSTIN: 09BYUPP5969E2ZF', W / 2, H - 15, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('For Shri Shiv Enterprises  |  Authorised Signatory', W / 2, H - 9, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(180, 200, 230);
  doc.text('This is a computer-generated invoice.  |  shrishiventerprises2025@gmail.com  |  +91 6393539533', W / 2, H - 4, { align: 'center' });

  // Save PDF
  doc.save('Invoice_' + orderData.order_id + '_ShriShivEnterprises.pdf');
}

function amountInWords(n) {
  if (!n || n === 0) return 'Zero Rupees';
  const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  function say(num) {
    if (num < 20) return ones[num];
    if (num < 100) return tens[Math.floor(num/10)] + (num%10 ? ' '+ones[num%10] : '');
    if (num < 1000) return ones[Math.floor(num/100)]+' Hundred'+(num%100?' and '+say(num%100):'');
    if (num < 100000) return say(Math.floor(num/1000))+' Thousand'+(num%1000?' '+say(num%1000):'');
    if (num < 10000000) return say(Math.floor(num/100000))+' Lakh'+(num%100000?' '+say(num%100000):'');
    return say(Math.floor(num/10000000))+' Crore'+(num%10000000?' '+say(num%10000000):'');
  }
  return 'Rupees ' + say(Math.round(n));
}

// Override placeOrder to handle invoice
const _origPlaceOrder = placeOrder;
window.placeOrder = async function() {
  const name    = document.querySelector('#checkoutModal input[type=text]')?.value || '';
  const phone   = document.querySelector('#checkoutModal input[type=tel]')?.value || '';
  const address = document.querySelector('#checkoutModal textarea')?.value || '';
  const city    = document.querySelectorAll('#checkoutModal input[type=text]')[1]?.value || '';
  const pincode = document.querySelectorAll('#checkoutModal input[type=text]')[2]?.value || '';
  const payment = document.querySelector('#checkoutModal input[name=payment]:checked')?.value || 'UPI';

  if (!name || !phone) { showToast('⚠️ Naam aur phone number zaroor bharen'); return; }

  const subtotal = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const gst      = Math.round(subtotal * 0.18);
  const shipping = subtotal >= 5000 ? 0 : 99;
  const total    = subtotal + gst + shipping;

  const orderBtn = document.querySelector('#checkoutModal .submit-btn');
  orderBtn.textContent = '⏳ Order place ho raha hai...';
  orderBtn.disabled = true;

  const result = await apiPost('/api/order', {
    name, phone, address, city, pincode, payment,
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, spec: i.size + ', ' + i.pages + 'pp' })),
    subtotal, gst, shipping, total,
    timestamp: new Date().toISOString()
  });

  orderBtn.textContent = 'Place Order →';
  orderBtn.disabled = false;

  closeModal('checkoutModal');
  cart = []; couponDiscount = 0;
  saveCart(); updateCartUI();

  // Show success modal with invoice download
  lastOrderId = result.order_id || 'SSE0001';
  window._lastOrderData = {
    order_id: lastOrderId,
    name, phone, address, city, pincode,
    payment,
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, spec: (i.size||'') + ', ' + (i.pages||'') + 'pp' })),
    subtotal, gst, shipping, total,
    timestamp: new Date().toISOString()
  };

  // Send WhatsApp notification to Admin
  sendAdminWhatsApp(window._lastOrderData);

  showOrderSuccess(lastOrderId, total, name, result.invoice_url);
};

function showOrderSuccess(orderId, total, name, invoiceUrl) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9000;display:flex;align-items:center;justify-content:center;';

  overlay.innerHTML = `
    <div style="background:var(--card-bg);border-radius:24px;padding:40px;max-width:440px;width:90%;text-align:center;position:relative;box-shadow:0 24px 80px rgba(0,0,0,0.3);">
      <div style="font-size:56px;margin-bottom:16px;">🎉</div>
      <h2 style="color:var(--navy);font-size:1.6rem;margin-bottom:8px;">Order Placed!</h2>
      <p style="color:var(--text-muted);margin-bottom:4px;">Order ID: <strong>${orderId}</strong></p>
      <p style="color:var(--text-muted);margin-bottom:24px;">Dhanyawad ${name} ji! Hum aapse jaldi contact karenge. 🙏</p>

      <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:12px;padding:16px;margin-bottom:24px;">
        <p style="font-size:14px;color:#16a34a;font-weight:600;">✅ Aapko WhatsApp + Email notification bheja ja raha hai</p>
        <p style="font-size:13px;color:#6b7280;margin-top:4px;">Total Amount: <strong>₹${total}</strong></p>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="generateInvoicePDF(window._lastOrderData || {order_id:'${orderId}',name:'${name}',total:${total},items:[],subtotal:${total},gst:Math.round(${total}*0.18/1.18),shipping:0,payment:'UPI'})"
           style="background:#243B6B;color:#fff;padding:12px 24px;border-radius:50px;font-weight:700;font-size:14px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;border:none;">
          🧾 Bill Download Karein (PDF)
        </button>
        <a href="https://wa.me/916393539533?text=Mera order ${orderId} place ho gaya hai. Total: ₹${total}. Please confirm karein." target="_blank"
           style="background:#25D366;color:#fff;padding:12px 24px;border-radius:50px;font-weight:700;font-size:14px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;">
          💬 WhatsApp Confirm
        </a>
      </div>

      <button onclick="this.closest('.modal-overlay').remove()" style="margin-top:20px;color:var(--text-muted);background:none;font-size:14px;cursor:pointer;">
        Close
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.remove(); });
}

// ============================================================
// AUTH SYSTEM — Login required before order
// ============================================================

let currentUser = JSON.parse(localStorage.getItem('sse_user') || 'null');
let authToken   = localStorage.getItem('sse_token') || null;

// On page load, restore session
document.addEventListener('DOMContentLoaded', () => {
  if (authToken) verifySessionOnLoad();
  updateAuthUI();
});

async function verifySessionOnLoad() {
  try {
    const res = await fetch(BACKEND + '/api/auth/verify', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ token: authToken })
    });
    const data = await res.json();
    if (data.success) {
      currentUser = data.user;
      localStorage.setItem('sse_user', JSON.stringify(currentUser));
      updateAuthUI();
    } else {
      logoutUser();
    }
  } catch(e) { /* offline — keep session */ }
}

function updateAuthUI() {
  const loginBtn = document.querySelector('.login-btn');
  if (!loginBtn) return;
  if (currentUser) {
    loginBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${currentUser.name.split(' ')[0]} ▾`;
    loginBtn.onclick = showProfileMenu;
  } else {
    loginBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Login`;
    loginBtn.onclick = () => showModal('loginModal');
  }
}

function showProfileMenu() {
  // Simple dropdown
  const existing = document.getElementById('profileMenu');
  if (existing) { existing.remove(); return; }
  const menu = document.createElement('div');
  menu.id = 'profileMenu';
  menu.style.cssText = `position:fixed;top:80px;right:80px;background:var(--card-bg);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.2);padding:8px 0;z-index:2000;min-width:180px;border:1px solid var(--border);`;
  menu.innerHTML = `
    <div style="padding:12px 16px;border-bottom:1px solid var(--border);">
      <div style="font-weight:700;font-size:14px;">${currentUser.name}</div>
      <div style="font-size:12px;color:var(--text-muted);">${currentUser.phone || currentUser.email}</div>
    </div>
    <button onclick="document.getElementById('profileMenu').remove();showMyOrders()" style="width:100%;padding:10px 16px;text-align:left;background:none;font-size:14px;color:var(--text-primary);cursor:pointer;">📦 Mere Orders</button>
    <button onclick="document.getElementById('profileMenu').remove();logoutUser()" style="width:100%;padding:10px 16px;text-align:left;background:none;font-size:14px;color:#dc2626;cursor:pointer;">🚪 Logout</button>
  `;
  document.body.appendChild(menu);
  setTimeout(() => document.addEventListener('click', function h(e){ if(!menu.contains(e.target)){menu.remove();document.removeEventListener('click',h);} }), 100);
}

function logoutUser() {
  currentUser = null; authToken = null;
  localStorage.removeItem('sse_user');
  localStorage.removeItem('sse_token');
  updateAuthUI();
  showToast('👋 Aap logout ho gaye hain');
}

// ---- Override Login Modal ----
// Replace login submit handler
document.addEventListener('DOMContentLoaded', () => {
  const loginTabBtn = document.querySelector('#loginTab .submit-btn');
  if (loginTabBtn) loginTabBtn.onclick = handleLogin;
  const signupTabBtn = document.querySelector('#signupTab .submit-btn');
  if (signupTabBtn) signupTabBtn.onclick = handleSignup;
});

async function handleLogin() {
  const identifier = document.querySelector('#loginTab input[type=text]')?.value?.trim();
  const password   = document.querySelector('#loginTab input[type=password]')?.value;
  if (!identifier || !password) { showToast('⚠️ Phone/Email aur password dono bharen'); return; }

  const btn = document.querySelector('#loginTab .submit-btn');
  btn.textContent = 'Login ho raha hai...'; btn.disabled = true;

  const res = await fetch(BACKEND + '/api/auth/login', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ identifier, password })
  });
  const data = await res.json();
  btn.textContent = 'Login'; btn.disabled = false;

  if (data.success) {
    currentUser = data.user; authToken = data.token;
    localStorage.setItem('sse_user', JSON.stringify(currentUser));
    localStorage.setItem('sse_token', authToken);
    updateAuthUI();
    closeModal('loginModal');
    showToast(`🙏 Welcome back ${currentUser.name} ji!`);
  } else {
    showToast('❌ ' + data.message);
  }
}

async function handleSignup() {
  const name     = document.querySelector('#signupTab input[type=text]')?.value?.trim();
  const lastName = document.querySelectorAll('#signupTab input[type=text]')[1]?.value?.trim();
  const email    = document.querySelector('#signupTab input[type=email]')?.value?.trim();
  const phone    = document.querySelector('#signupTab input[type=tel]')?.value?.trim();
  const password = document.querySelector('#signupTab input[type=password]')?.value;
  const fullName = (name + ' ' + (lastName||'')).trim();

  if (!phone || !password || !fullName) { showToast('⚠️ Naam, phone aur password zaroor bharen'); return; }

  const btn = document.querySelector('#signupTab .submit-btn');
  btn.textContent = 'Account ban raha hai...'; btn.disabled = true;

  const res = await fetch(BACKEND + '/api/auth/signup', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ name: fullName, email, phone, password })
  });
  const data = await res.json();
  btn.textContent = 'Create Account'; btn.disabled = false;

  if (data.success) {
    currentUser = data.user; authToken = data.token;
    localStorage.setItem('sse_user', JSON.stringify(currentUser));
    localStorage.setItem('sse_token', authToken);
    updateAuthUI();
    closeModal('loginModal');
    showToast(`🎉 ${data.message}`);
  } else {
    showToast('❌ ' + data.message);
  }
}

// ---- Guard: Checkout requires login ----
// Override toggleCart to check login before showing checkout btn
const _origToggleCart = toggleCart;
window.toggleCart = function() {
  _origToggleCart();
};

// Override showModal for checkout — require login
const _origShowModal = showModal;
window.showModal = function(id) {
  if (id === 'checkoutModal' && !currentUser) {
    showToast('⚠️ Order place karne ke liye pehle login karein');
    setTimeout(() => _origShowModal('loginModal'), 400);
    return;
  }
  _origShowModal(id);
  if (id === 'checkoutModal' && currentUser) {
    // Pre-fill customer details from account
    setTimeout(() => {
      const nameInput = document.querySelector('#checkoutModal input[type=text]');
      const phoneInput = document.querySelector('#checkoutModal input[type=tel]');
      if (nameInput && !nameInput.value) nameInput.value = currentUser.name || '';
      if (phoneInput && !phoneInput.value) phoneInput.value = currentUser.phone || '';
    }, 100);
  }
};

function showMyOrders() {
  showToast('📦 Order history coming soon!');
}
