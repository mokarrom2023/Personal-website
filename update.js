/* =========================================
   STARLINE BUILDERS LTD. — Script.js
   Full Dynamic CMS + Admin Dashboard
   ========================================= */

'use strict';

// =============================================
// DEFAULT DATA
// =============================================
const DEFAULT_PROPERTIES = [
  { id: 1, name: 'Starline Meridian', location: 'Gulshan', status: 'featured', size: '2200', price: '3.8 Cr', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', description: 'An iconic ultra-luxury residential tower in the heart of Gulshan, offering panoramic city views. Featuring 36 exclusive apartments with world-class amenities and concierge service.', amenities: 'Swimming Pool,Gym & Spa,Private Parking,Rooftop Garden,24/7 Security,Club House,Children Play Area,Generator Backup' },
  { id: 2, name: 'Starline Azure', location: 'Banani', status: 'ongoing', size: '1800', price: '2.4 Cr', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', description: 'A premium residential development in Banani offering sophisticated urban living. Thoughtfully designed with modern architecture and premium finishes throughout.', amenities: 'Swimming Pool,Gym,Covered Parking,Generator Backup,24/7 Security,Intercom System,Fire Safety,Lift' },
  { id: 3, name: 'Starline Crown', location: 'Bashundhara', status: 'handover', size: '1500', price: '1.6 Cr', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80', description: 'Starline Crown offers a perfect balance of luxury and affordability in Bashundhara. Ready for handover with all modern amenities and top-quality construction.', amenities: 'Gym,Parking,Generator,Security,Intercom,Lift,Garden Area' },
  { id: 4, name: 'Starline Regency', location: 'Dhanmondi', status: 'upcoming', size: 'Duplex', price: '4.5 Cr', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', description: 'Starline Regency is our most anticipated upcoming luxury duplex project in Dhanmondi. These exclusive residences redefine the art of living with double-height ceilings and premium imported materials.', amenities: 'Private Pool,Home Automation,Sky Lounge,Concierge,Private Lift,Wine Cellar,Home Theater,4 Car Parking' },
  { id: 5, name: 'Starline Horizon', location: 'Uttara', status: 'processing', size: '1200', price: '1.1 Cr', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80', description: 'Affordable luxury in Uttara\'s most sought-after neighborhood. Starline Horizon brings premium finishes to smart family apartments with excellent connectivity.', amenities: 'Playground,Parking,Generator,Security,CCTV,Fire Safety,Lift,Community Hall' },
  { id: 6, name: 'Starline Pinnacle', location: 'Gulshan', status: 'ongoing', size: 'Commercial', price: '8.2 Cr', image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80', description: 'Starline Pinnacle is a landmark commercial development in Gulshan, designed for leading corporations seeking a prestigious business address with world-class infrastructure.', amenities: 'Conference Rooms,High-Speed Elevator,24/7 Security,Generator,Data Center Ready,VIP Parking,Cafeteria,Prayer Room' },
  { id: 7, name: 'Starline Vista', location: 'Mirpur', status: 'handover', size: '1500', price: '1.4 Cr', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', description: 'Beautifully crafted apartments in Mirpur with all modern comforts. Starline Vista offers smart living solutions at exceptional value.', amenities: 'Gym,Parking,Generator,Security,Intercom,Garden,Lift,CCTV' },
  { id: 8, name: 'Starline Galaxy', location: 'Purbachal', status: 'upcoming', size: '1800', price: '2.1 Cr', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', description: 'Our visionary project in Purbachal New Town — Bangladesh\'s future smart city hub. Starline Galaxy is designed for the next generation of urban living.', amenities: 'Smart Home,Solar Power,EV Charging,Gym,Pool,Community Center,Kids Zone,Jogging Track' },
];

const DEFAULT_HERO_SLIDES = [
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80' },
  { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80' },
  { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80' },
  { url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80' },
];

const DEFAULT_WHY_CARDS = [
  { id: 1, icon: 'fas fa-shield-alt', title: 'Trusted Company', desc: 'Over 25 years of proven excellence and thousands of satisfied families across Dhaka.' },
  { id: 2, icon: 'fas fa-drafting-compass', title: 'Premium Design', desc: 'Award-winning architectural designs crafted by internationally acclaimed design studios.' },
  { id: 3, icon: 'fas fa-map-marker-alt', title: 'Prime Locations', desc: 'All projects are strategically situated in Dhaka\'s most prestigious and sought-after neighborhoods.' },
  { id: 4, icon: 'fas fa-city', title: 'Modern Architecture', desc: 'Iconic structures built with premium materials, setting new benchmarks in real estate design.' },
  { id: 5, icon: 'fas fa-handshake', title: 'Transparent Process', desc: 'Clear contracts, honest pricing, and complete transparency from purchase to handover.' },
  { id: 6, icon: 'fas fa-clock', title: 'On-Time Delivery', desc: 'We honor our commitments. Projects delivered on schedule with zero compromise on quality.' },
  { id: 7, icon: 'fas fa-chart-line', title: 'Smart Investment', desc: 'Our properties consistently deliver superior returns, making them the smartest real estate investments.' },
  { id: 8, icon: 'fas fa-medal', title: 'Award Winning', desc: 'Multiple national and international awards for architectural excellence and customer satisfaction.' },
];

const DEFAULT_SETTINGS = {
  heroTitle: 'Building Future <span class="gold">Luxury</span>',
  heroSubtitle: 'Experience unmatched living with Starline Builders Ltd. — where architecture meets aspiration.',
  heroCta1: 'Explore Properties',
  heroCta2: 'Book Consultation',
  brandName: 'STARLINE BUILDERS LTD.',
  footerDesc: 'Invest Smart. Live Better. Delivering premium real estate experiences across Bangladesh\'s most prestigious addresses.',
  footerCopyright: '© 2025 STARLINE BUILDERS LTD. All Rights Reserved.',
  contactAddress: 'House #12, Road #5, Gulshan-2, Dhaka-1212, Bangladesh',
  contactPhone: '+880-1700-000000 | +880-2-9876543',
  contactEmail: 'info@starlinebuilders.com',
  contactHours: 'Sat–Thu: 9:00 AM – 7:00 PM',
  themeGold: '#c9a84c',
  themeBg: '#0a0a0a',
  themeBg2: '#111111',
  themeCard: '#161616',
  themeText: '#e8e8e8',
  themeFont: "'Cormorant Garamond', serif",
  socialLinks: {
    facebook:  '',
    instagram: '',
    youtube:   '',
    linkedin:  '',
    whatsapp:  '',
  }
};

// =============================================
// STATE
// =============================================
let properties = [];
let heroSlides = [];
let whyCards = [];
let settings = {};
let users = [];
let messages = [];
let activeFilters = { status: null, location: null, size: null };
let filterTabActive = 'all';
let heroInterval = null;
let currentSlide = 0;
let editingPropertyId = null;
let editingWhyId = null;
let adminLoggedIn = false;
let customerLoggedIn = null;

// =============================================
// CUSTOM DROPDOWN OPTIONS (Dynamic)
// Default values — extendable from admin panel
// =============================================
const DEFAULT_CUSTOM_OPTIONS = {
  locations: ['Gulshan','Banani','Bashundhara','Dhanmondi','Uttara','Mirpur','Purbachal'],
  statuses:  ['ongoing','handover','processing','upcoming','featured'],
  sizes:     ['1200','1500','1800','2200','Duplex','Commercial'],
};
let customOptions = {};

function loadCustomOptions() {
  customOptions = JSON.parse(localStorage.getItem('sl_custom_options') || 'null') || {
    locations: [...DEFAULT_CUSTOM_OPTIONS.locations],
    statuses:  [...DEFAULT_CUSTOM_OPTIONS.statuses],
    sizes:     [...DEFAULT_CUSTOM_OPTIONS.sizes],
  };
}
function saveCustomOptions() { localStorage.setItem('sl_custom_options', JSON.stringify(customOptions)); }

// =============================================
// LOCALSTORAGE HELPERS
// =============================================
function loadData() {
  properties = JSON.parse(localStorage.getItem('sl_properties') || 'null') || DEFAULT_PROPERTIES;
  heroSlides = JSON.parse(localStorage.getItem('sl_slides') || 'null') || DEFAULT_HERO_SLIDES;
  whyCards = JSON.parse(localStorage.getItem('sl_why') || 'null') || DEFAULT_WHY_CARDS;
  settings = JSON.parse(localStorage.getItem('sl_settings') || 'null') || { ...DEFAULT_SETTINGS };
  users = JSON.parse(localStorage.getItem('sl_users') || '[]');
  messages = JSON.parse(localStorage.getItem('sl_messages') || '[]');
  loadCustomOptions();
}

function saveProperties() { localStorage.setItem('sl_properties', JSON.stringify(properties)); }
function saveSlides() { localStorage.setItem('sl_slides', JSON.stringify(heroSlides)); }
function saveWhy() { localStorage.setItem('sl_why', JSON.stringify(whyCards)); }
function saveSettings() { localStorage.setItem('sl_settings', JSON.stringify(settings)); }
function saveUsers() { localStorage.setItem('sl_users', JSON.stringify(users)); }
function saveMessages() { localStorage.setItem('sl_messages', JSON.stringify(messages)); }

// =============================================
// LOADER
// =============================================
function runLoader() {
  const fill = document.getElementById('loaderFill');
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 15;
    if (w >= 100) { w = 100; clearInterval(iv); setTimeout(hideLoader, 400); }
    fill.style.width = w + '%';
  }, 80);
}
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
  setTimeout(() => loader.remove(), 800);
}

// =============================================
// SCROLL PROGRESS
// =============================================
window.addEventListener('scroll', () => {
  const el = document.getElementById('scrollProgress');
  const total = document.body.scrollHeight - window.innerHeight;
  el.style.width = (window.scrollY / total * 100) + '%';
  // Navbar
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
  // Back to top
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  // Reveal
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible');
  });
}, { passive: true });

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // ── Hamburger (mobile) ──
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('mobile-open');
    });
  });

  // ── Click-based dropdown toggle ──
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const parent = link.closest('.has-dropdown');
      const isOpen = parent.classList.contains('dd-open');

      // Close all dropdowns first
      document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));

      // Toggle this one
      if (!isOpen) parent.classList.add('dd-open');
    });
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));
    }
  });

  // Close dropdown when a dropdown item is clicked (filter applied)
  document.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      // Close all dropdowns
      document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));
      const filter = item.dataset.filter;
      const value = item.dataset.value;
      activeFilters[filter] = value;
      filterTabActive = filter === 'status' ? value : 'all';
      updateFilterUI();
      renderProperties();
      document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =============================================
// HERO SLIDER
// =============================================
function initHeroSlider() {
  const container = document.getElementById('heroSlides');
  const dotsEl = document.getElementById('heroDots');
  container.innerHTML = '';
  dotsEl.innerHTML = '';
  heroSlides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'hero-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url('${slide.url}')`;
    container.appendChild(div);
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });
  document.getElementById('heroPrev').addEventListener('click', () => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length));
  document.getElementById('heroNext').addEventListener('click', () => goToSlide((currentSlide + 1) % heroSlides.length));
  startHeroAuto();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startHeroAuto() {
  clearInterval(heroInterval);
  heroInterval = setInterval(() => goToSlide((currentSlide + 1) % heroSlides.length), 5000);
}

function applyHeroSettings() {
  document.getElementById('heroTitle').innerHTML = settings.heroTitle || DEFAULT_SETTINGS.heroTitle;
  document.getElementById('heroSubtitle').textContent = settings.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle;
  document.getElementById('heroCta1').textContent = settings.heroCta1 || DEFAULT_SETTINGS.heroCta1;
  document.getElementById('heroCta2').textContent = settings.heroCta2 || DEFAULT_SETTINGS.heroCta2;
}

// =============================================
// PROPERTIES
// =============================================
function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  const noResults = document.getElementById('noResults');
  grid.innerHTML = '';
  let filtered = [...properties];
  // Tab filter (status)
  if (filterTabActive !== 'all') {
    filtered = filtered.filter(p => p.status === filterTabActive);
  }
  // Additional active filters
  if (activeFilters.location) filtered = filtered.filter(p => p.location === activeFilters.location);
  if (activeFilters.size) filtered = filtered.filter(p => p.size === activeFilters.size);
  if (activeFilters.status && filterTabActive === 'all') filtered = filtered.filter(p => p.status === activeFilters.status);

  if (filtered.length === 0) {
    noResults.style.display = 'flex';
    noResults.style.flexDirection = 'column';
    noResults.style.alignItems = 'center';
    noResults.style.gap = '1rem';
    noResults.style.padding = '4rem 0';
    return;
  }
  noResults.style.display = 'none';

  filtered.forEach((prop, idx) => {
    const card = document.createElement('div');
    card.className = 'property-card reveal';
    card.style.animationDelay = (idx * 0.1) + 's';
    card.innerHTML = `
      <div class="prop-img-wrap">
        <img class="prop-img" src="${prop.image}" alt="${prop.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=60'"/>
        <div class="prop-badge badge-${prop.status}">${prop.status.charAt(0).toUpperCase()+prop.status.slice(1)}</div>
        <div class="prop-overlay">
          <div class="prop-view-btn"><i class="fas fa-eye"></i> View Details</div>
        </div>
      </div>
      <div class="prop-body">
        <div class="prop-name">${prop.name}</div>
        <div class="prop-location"><i class="fas fa-map-marker-alt"></i> ${prop.location}</div>
        <div class="prop-meta">
          <div class="prop-size"><i class="fas fa-vector-square"></i> ${prop.size === 'Duplex' || prop.size === 'Commercial' ? prop.size : prop.size + ' sqft'}</div>
          <div class="prop-price">৳ ${prop.price}</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openPropertyModal(prop.id));
    grid.appendChild(card);
  });

  // Trigger reveal for new cards
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
    });
  }, 50);
}

function openPropertyModal(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;
  const amenities = (prop.amenities || '').split(',').map(a => a.trim()).filter(Boolean);
  const modal = document.getElementById('propertyModal');
  const content = document.getElementById('propertyModalContent');
  const sideImgs = [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=70',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=70'
  ];
  content.innerHTML = `
    <div class="pm-gallery">
      <img class="pm-main-img" src="${prop.image}" alt="${prop.name}" onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=60'"/>
      <div class="pm-side-imgs">
        ${sideImgs.map(u => `<img src="${u}" alt="interior" onerror="this.style.display='none'"/>`).join('')}
      </div>
    </div>
    <div class="pm-header">
      <div>
        <div class="prop-badge badge-${prop.status}" style="display:inline-block;margin-bottom:0.5rem">${prop.status.charAt(0).toUpperCase()+prop.status.slice(1)}</div>
        <div class="pm-title">${prop.name}</div>
        <div class="prop-location" style="margin-top:0.4rem"><i class="fas fa-map-marker-alt"></i> ${prop.location}, Dhaka</div>
      </div>
      <div class="pm-price">৳ ${prop.price}</div>
    </div>
    <div class="pm-meta">
      <div class="pm-meta-item"><i class="fas fa-vector-square"></i> ${prop.size === 'Duplex' || prop.size === 'Commercial' ? prop.size : prop.size + ' sqft'}</div>
      <div class="pm-meta-item"><i class="fas fa-map-marker-alt"></i> ${prop.location}</div>
      <div class="pm-meta-item"><i class="fas fa-tag"></i> ${prop.status.charAt(0).toUpperCase()+prop.status.slice(1)}</div>
      <div class="pm-meta-item"><i class="fas fa-building"></i> Premium Residential</div>
    </div>
    <p class="pm-desc">${prop.description || 'A premium property by Starline Builders Ltd.'}</p>
    ${amenities.length ? `
    <div class="pm-amenities">
      <h4>Amenities & Features</h4>
      <div class="amenities-grid">${amenities.map(a => `<span class="amenity-tag"><i class="fas fa-check" style="color:var(--gold);margin-right:5px;font-size:0.7rem"></i>${a}</span>`).join('')}</div>
    </div>` : ''}
    <div class="pm-actions">
      <button class="btn-primary" onclick="closeModal('propertyModal');openLoginModal()">
        <i class="fas fa-calendar-check"></i> Book Now
      </button>
      <a href="#contact" class="btn-outline" onclick="closeModal('propertyModal')">
        <i class="fas fa-phone"></i> Contact Us
      </a>
    </div>
  `;
  openModal('propertyModal');
}

// =============================================
// FILTER SYSTEM
// =============================================
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTabActive = btn.dataset.filter;
      activeFilters.status = null;
      updateFilterUI();
      renderProperties();
    });
  });
}

function updateFilterUI() {
  const el = document.getElementById('activeFilters');
  el.innerHTML = '';
  if (activeFilters.location) {
    el.innerHTML += `<span class="filter-badge">📍 ${activeFilters.location} <button onclick="clearFilter('location')">✕</button></span>`;
  }
  if (activeFilters.size) {
    el.innerHTML += `<span class="filter-badge">📐 ${activeFilters.size} <button onclick="clearFilter('size')">✕</button></span>`;
  }
  if (activeFilters.status) {
    el.innerHTML += `<span class="filter-badge">🏷 ${activeFilters.status} <button onclick="clearFilter('status')">✕</button></span>`;
  }
}

window.clearFilter = function(type) {
  activeFilters[type] = null;
  updateFilterUI();
  renderProperties();
};

window.resetFilters = function() {
  activeFilters = { status: null, location: null, size: null };
  filterTabActive = 'all';
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-tab[data-filter="all"]').classList.add('active');
  updateFilterUI();
  renderProperties();
};

// =============================================
// WHY CHOOSE
// =============================================
function renderWhyCards() {
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = '';
  whyCards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'why-card reveal';
    el.style.transitionDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="why-icon"><i class="${card.icon}"></i></div>
      <div class="why-title">${card.title}</div>
      <div class="why-desc">${card.desc}</div>
    `;
    grid.appendChild(el);
  });
}

// =============================================
// COUNTERS
// =============================================
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = +entry.target.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 80);
        const iv = setInterval(() => {
          current = Math.min(current + step, target);
          entry.target.textContent = current.toLocaleString();
          if (current >= target) clearInterval(iv);
        }, 20);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// =============================================
// CONTACT INFO
// =============================================
function applyContactSettings() {
  const s = settings;
  const addr = document.getElementById('contactAddress');
  const phone = document.getElementById('contactPhone');
  const email = document.getElementById('contactEmail');
  const hours = document.getElementById('contactHours');
  if (addr) addr.textContent = s.contactAddress || DEFAULT_SETTINGS.contactAddress;
  if (phone) phone.textContent = s.contactPhone || DEFAULT_SETTINGS.contactPhone;
  if (email) email.textContent = s.contactEmail || DEFAULT_SETTINGS.contactEmail;
  if (hours) hours.textContent = s.contactHours || DEFAULT_SETTINGS.contactHours;
}

// =============================================
// CONTACT FORM
// =============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, select, textarea');
    const msg = {
      id: Date.now(),
      name:     inputs[0].value.trim(),
      phone:    inputs[1].value.trim(),
      email:    inputs[2].value.trim(),
      interest: inputs[3].value,
      message:  inputs[4].value.trim(),
      date:     new Date().toLocaleDateString('en-GB'),
      time:     new Date().toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' })
    };
    // Always reload & push to avoid overwriting
    messages = JSON.parse(localStorage.getItem('sl_messages') || '[]');
    messages.push(msg);
    saveMessages();
    showToast('✓ Message sent successfully! We\'ll contact you soon.');
    form.reset();
    refreshAdminData();
  });
}

// =============================================
// FOOTER
// =============================================
function applyFooterSettings() {
  const desc  = document.getElementById('footerDesc');
  const brand = document.getElementById('footerBrandName');
  const copy  = document.getElementById('footerCopyright');
  if (desc)  desc.textContent  = settings.footerDesc      || DEFAULT_SETTINGS.footerDesc;
  if (brand) brand.textContent = settings.brandName        || DEFAULT_SETTINGS.brandName;
  if (copy)  copy.innerHTML    = settings.footerCopyright  || DEFAULT_SETTINGS.footerCopyright;

  // Apply social links
  const sl = settings.socialLinks || DEFAULT_SETTINGS.socialLinks;
  const socialMap = {
    facebook:  { icon: 'fab fa-facebook-f',  sel: '#socialLinks .social-link:nth-child(1)' },
    instagram: { icon: 'fab fa-instagram',    sel: '#socialLinks .social-link:nth-child(2)' },
    youtube:   { icon: 'fab fa-youtube',      sel: '#socialLinks .social-link:nth-child(3)' },
    linkedin:  { icon: 'fab fa-linkedin-in',  sel: '#socialLinks .social-link:nth-child(4)' },
    whatsapp:  { icon: 'fab fa-whatsapp',     sel: '#socialLinks .social-link:nth-child(5)' },
  };
  Object.entries(socialMap).forEach(([key, cfg]) => {
    const el = document.querySelector(cfg.sel);
    if (!el) return;
    const url = sl[key] || '#';
    el.href = url;
    el.target = url !== '#' ? '_blank' : '';
    el.rel = url !== '#' ? 'noopener noreferrer' : '';
    // Visual indicator if link is set
    el.style.borderColor = url !== '#' ? 'rgba(201,168,76,0.5)' : '';
  });
}

// =============================================
// MODALS
// =============================================
function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }

window.openLoginModal = function() { openModal('loginModal'); };
document.getElementById('openLoginModal').addEventListener('click', () => openModal('loginModal'));
document.getElementById('closeLoginModal').addEventListener('click', () => closeModal('loginModal'));
document.getElementById('closePropertyModal').addEventListener('click', () => closeModal('propertyModal'));

// Close on overlay click
['loginModal', 'propertyModal'].forEach(id => {
  document.getElementById(id).addEventListener('click', e => {
    if (e.target.id === id) closeModal(id);
  });
});

window.closeModal = closeModal;

// =============================================
// LOGIN TABS
// =============================================
function switchTab(tab) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.login-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`.login-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById('panel' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
}
window.switchTab = switchTab;

document.querySelectorAll('.login-tab').forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

// =============================================
// AUTH FORMS — with password toggle & proper data saving
// =============================================

// ── Password visibility toggle helper ──────
function addPasswordToggle(inputId) {
  const input = document.getElementById(inputId);
  if (!input || input.parentElement.querySelector('.pw-toggle')) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'pw-toggle';
  btn.innerHTML = '<i class="fas fa-eye"></i>';
  btn.title = 'Show/hide password';
  btn.style.cssText = `
    position:absolute; right:1rem; top:50%; transform:translateY(-50%);
    background:none; border:none; color:var(--text-muted);
    font-size:0.85rem; cursor:pointer; z-index:3; padding:0;
    transition:color 0.2s;
  `;
  btn.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.innerHTML = show ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
    btn.style.color = show ? 'var(--gold)' : 'var(--text-muted)';
  });
  input.style.paddingRight = '3rem';
  input.parentElement.style.position = 'relative';
  input.parentElement.appendChild(btn);
}

// Add toggles on page load
window.addEventListener('load', () => {
  ['custPass','adminPass','regPass','credCurrentPass','credNewPass','credConfirmPass'].forEach(addPasswordToggle);
});

document.getElementById('adminLoginForm').addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  const savedPass = localStorage.getItem('sl_admin_pass') || 'starline2025';
  const savedUser = localStorage.getItem('sl_admin_user') || 'admin';
  if (user === savedUser && pass === savedPass) {
    adminLoggedIn = true;
    sessionStorage.setItem('sl_admin_session', '1'); // ← save session
    closeModal('loginModal');
    openAdminDashboard();
    showToast('✓ Welcome, Super Admin!');
  } else {
    showToast('✗ Invalid credentials. Try admin / starline2025');
  }
});

document.getElementById('customerLoginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('custEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('custPass').value;
  // Reload latest users from localStorage before checking
  users = JSON.parse(localStorage.getItem('sl_users') || '[]');
  const user = users.find(u => u.email.toLowerCase() === email && u.password === pass && !u.blocked);
  if (user) {
    customerLoggedIn = user;
    closeModal('loginModal');
    showToast(`✓ Welcome back, ${user.name}!`);
    document.getElementById('openLoginModal').innerHTML = `<i class="fas fa-user-check"></i> ${user.name.split(' ')[0]}`;
  } else {
    showToast('✗ Invalid email or password. Please register first.');
  }
});

document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const phone = document.getElementById('regPhone').value.trim();
  const pass  = document.getElementById('regPass').value;
  if (!name || !email || !pass) { showToast('✗ Please fill all required fields.'); return; }
  // Always reload from localStorage to avoid stale data
  users = JSON.parse(localStorage.getItem('sl_users') || '[]');
  if (users.find(u => u.email.toLowerCase() === email)) {
    showToast('✗ Email already registered. Please login.'); return;
  }
  const serial = users.length + 1;
  const user = {
    id: Date.now(),
    serial,
    name, email, phone,
    password: pass,
    blocked: false,
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' })
  };
  users.push(user);
  saveUsers();
  customerLoggedIn = user;
  closeModal('loginModal');
  showToast(`✓ Account created! Welcome, ${name}!`);
  document.getElementById('openLoginModal').innerHTML = `<i class="fas fa-user-check"></i> ${name.split(' ')[0]}`;
  refreshAdminData();
});

// =============================================
// ADMIN DASHBOARD
// =============================================
function openAdminDashboard() {
  document.getElementById('adminDashboard').classList.add('open');
  document.body.style.overflow = 'hidden';
  refreshAdminData();
  renderAdminProperties();
  renderAdminWhy();
  populateAdminForms();
  renderCharts();
  renderAdminSlides();
  renderCustomOptionsUI();
  renderCredentialsUI();
  renderSocialLinksUI();     // ← social media links manager
  fixMessageTableHeaders();
  buildAdminTopbar();
  syncNavbarDropdowns();
}

document.getElementById('adminLogout').addEventListener('click', () => {
  adminLoggedIn = false;
  sessionStorage.removeItem('sl_admin_session'); // ← clear session
  document.getElementById('adminDashboard').classList.remove('open');
  document.body.style.overflow = '';
  showToast('Logged out successfully.');
});

document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('adminSidebar').classList.toggle('open');
});

// Admin Navigation
document.querySelectorAll('.admin-nav').forEach(nav => {
  nav.addEventListener('click', e => {
    e.preventDefault();
    const panel = nav.dataset.panel;
    document.querySelectorAll('.admin-nav').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    nav.classList.add('active');
    document.getElementById(panel).classList.add('active');
    document.getElementById('adminPageTitle').textContent = nav.textContent.trim();
    // Mobile: close sidebar
    document.getElementById('adminSidebar').classList.remove('open');
  });
});

// =============================================
// ADMIN: REFRESH DATA
// =============================================
function refreshAdminData() {
  // Always reload fresh from localStorage
  users    = JSON.parse(localStorage.getItem('sl_users')    || '[]');
  messages = JSON.parse(localStorage.getItem('sl_messages') || '[]');
  document.getElementById('statProperties').textContent = properties.length;
  document.getElementById('statUsers').textContent      = users.length;
  document.getElementById('statMessages').textContent   = messages.length;
  document.getElementById('statFeatured').textContent   = properties.filter(p => p.status === 'featured').length;
  renderAdminMessages();
  renderAdminUsers();
  renderActivity();
}

function renderActivity() {
  const list = document.getElementById('activityList');
  const activities = [
    { icon: 'fas fa-building', text: `${properties.length} properties in portfolio`, time: 'Now' },
    { icon: 'fas fa-users', text: `${users.length} registered customers`, time: 'Now' },
    { icon: 'fas fa-envelope', text: `${messages.length} enquiry messages received`, time: 'Now' },
    { icon: 'fas fa-star', text: `${properties.filter(p=>p.status==='featured').length} featured properties`, time: 'Now' },
  ];
  list.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-icon"><i class="${a.icon}"></i></div>
      <span class="activity-text">${a.text}</span>
      <span class="activity-time">${a.time}</span>
    </div>
  `).join('');
}

// =============================================
// ADMIN: PROPERTIES
// =============================================
function renderAdminProperties() {
  const tbody = document.getElementById('propertiesTableBody');
  tbody.innerHTML = properties.map(p => `
    <tr>
      <td><img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&q=50'"/></td>
      <td style="color:var(--text);font-weight:600">${p.name}</td>
      <td>${p.location}</td>
      <td><span class="prop-badge badge-${p.status}" style="display:inline-block">${p.status}</span></td>
      <td>${p.size}</td>
      <td style="color:var(--gold);font-weight:600">৳ ${p.price}</td>
      <td>
        <div class="action-btns">
          <button class="btn-edit" onclick="editProperty(${p.id})"><i class="fas fa-edit"></i> Edit</button>
          <button class="btn-delete" onclick="deleteProperty(${p.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="7" style="text-align:center;color:var(--text-muted)">No properties yet</td></tr>';
}

// ─── Helper: rebuild <select> options from customOptions ───────────────────
function buildSelect(selectId, optionsArr, labelFn) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = optionsArr.map(v =>
    `<option value="${v}">${labelFn ? labelFn(v) : v}</option>`
  ).join('');
  if (optionsArr.includes(current)) sel.value = current;
}

function rebuildPropertySelects() {
  buildSelect('propLocation', customOptions.locations);
  buildSelect('propStatus',   customOptions.statuses,  v => v.charAt(0).toUpperCase() + v.slice(1));
  buildSelect('propSize',     customOptions.sizes,      v => (v === 'Duplex' || v === 'Commercial') ? v : v + ' sqft');
}

// ─── Image picker: replace URL input with file-browse button ───────────────
function upgradeImageInput() {
  const existing = document.getElementById('propImageWrap');
  if (existing) return; // already upgraded

  const urlInput = document.getElementById('propImage');
  if (!urlInput) return;
  const parent = urlInput.parentElement;

  // Build replacement UI
  const wrap = document.createElement('div');
  wrap.id = 'propImageWrap';
  wrap.style.cssText = 'position:relative;';

  wrap.innerHTML = `
    <!-- Hidden file input -->
    <input type="file" id="propImageFile" accept="image/*"
      style="position:absolute;inset:0;opacity:0;cursor:pointer;z-index:2;width:100%;height:100%"/>

    <!-- Visual display row -->
    <div id="propImageDisplay" style="
      display:flex;align-items:center;gap:0.8rem;
      padding:0.9rem 1rem;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:12px;cursor:pointer;
      transition:all 0.3s ease;
      position:relative;z-index:1;
    "
    onmouseover="this.style.borderColor='var(--gold)'"
    onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'"
    >
      <div id="propImageThumb" style="
        width:54px;height:40px;border-radius:8px;
        background:rgba(201,168,76,0.1);border:1px dashed rgba(201,168,76,0.4);
        display:flex;align-items:center;justify-content:center;
        flex-shrink:0;overflow:hidden;
      ">
        <i class="fas fa-image" style="color:var(--gold);font-size:1.1rem" id="propImageIcon"></i>
      </div>
      <div>
        <div style="font-size:0.83rem;color:var(--text);font-weight:600" id="propImageName">
          Click to choose image from your computer
        </div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:2px">
          JPG, PNG, WEBP — or paste a URL below
        </div>
      </div>
      <i class="fas fa-folder-open" style="color:var(--gold);margin-left:auto;font-size:1rem"></i>
    </div>

    <!-- URL fallback input (still usable) -->
    <div style="margin-top:0.6rem;display:flex;align-items:center;gap:0.5rem">
      <input type="text" id="propImage" placeholder="…or paste image URL here"
        style="
          flex:1;padding:0.7rem 1rem;
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:10px;color:var(--text);font-size:0.82rem;
          font-family:var(--body-font);
        "
      />
    </div>
  `;

  parent.replaceWith(wrap);

  // File chosen → convert to base64 and fill URL input + preview
  document.getElementById('propImageFile').addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64 = e.target.result;
      document.getElementById('propImage').value = base64;

      // Show thumb
      const thumb = document.getElementById('propImageThumb');
      thumb.innerHTML = `<img src="${base64}" style="width:100%;height:100%;object-fit:cover;border-radius:6px"/>`;

      // Show filename
      document.getElementById('propImageName').textContent = file.name;
    };
    reader.readAsDataURL(file);
  });

  // If URL is typed manually, show preview
  document.getElementById('propImage').addEventListener('input', function() {
    const url = this.value.trim();
    const thumb = document.getElementById('propImageThumb');
    if (url && (url.startsWith('http') || url.startsWith('data:'))) {
      thumb.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:6px" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'color:var(--gold);font-size:1.1rem\\'></i>'"/>`;
      document.getElementById('propImageName').textContent = 'Custom URL set';
    } else {
      thumb.innerHTML = `<i class="fas fa-image" style="color:var(--gold);font-size:1.1rem"></i>`;
      document.getElementById('propImageName').textContent = 'Click to choose image from your computer';
    }
  });
}

document.getElementById('addPropertyBtn').addEventListener('click', () => {
  editingPropertyId = null;
  document.getElementById('propertyFormTitle').textContent = 'Add New Property';
  document.getElementById('propName').value = '';
  document.getElementById('propPrice').value = '';
  document.getElementById('propDesc').value = '';
  document.getElementById('propAmenities').value = '';
  rebuildPropertySelects();
  upgradeImageInput();
  // Reset image field
  const propImg = document.getElementById('propImage');
  if (propImg) propImg.value = '';
  const thumb = document.getElementById('propImageThumb');
  if (thumb) thumb.innerHTML = `<i class="fas fa-image" style="color:var(--gold);font-size:1.1rem"></i>`;
  const nameEl = document.getElementById('propImageName');
  if (nameEl) nameEl.textContent = 'Click to choose image from your computer';
  const fileInput = document.getElementById('propImageFile');
  if (fileInput) fileInput.value = '';
  document.getElementById('propertyFormCard').style.display = 'block';
  document.getElementById('propertyFormCard').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('cancelPropertyBtn').addEventListener('click', () => {
  document.getElementById('propertyFormCard').style.display = 'none';
  editingPropertyId = null;
});

document.getElementById('savePropertyBtn').addEventListener('click', () => {
  const name = document.getElementById('propName').value.trim();
  if (!name) { showToast('✗ Property name is required.'); return; }
  const prop = {
    id: editingPropertyId || Date.now(),
    name,
    location: document.getElementById('propLocation').value,
    status: document.getElementById('propStatus').value,
    size: document.getElementById('propSize').value,
    price: document.getElementById('propPrice').value || 'Price on request',
    image: document.getElementById('propImage').value || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description: document.getElementById('propDesc').value,
    amenities: document.getElementById('propAmenities').value,
  };
  if (editingPropertyId) {
    const idx = properties.findIndex(p => p.id === editingPropertyId);
    if (idx !== -1) properties[idx] = prop;
    showToast('✓ Property updated successfully!');
  } else {
    properties.push(prop);
    showToast('✓ Property added successfully!');
  }
  saveProperties();
  renderAdminProperties();
  renderProperties();
  refreshAdminData();
  renderCharts();
  document.getElementById('propertyFormCard').style.display = 'none';
  editingPropertyId = null;
});

window.editProperty = function(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;
  editingPropertyId = id;
  document.getElementById('propertyFormTitle').textContent = 'Edit Property';
  document.getElementById('propName').value = prop.name;
  document.getElementById('propPrice').value = prop.price;
  document.getElementById('propDesc').value = prop.description || '';
  document.getElementById('propAmenities').value = prop.amenities || '';
  rebuildPropertySelects();
  document.getElementById('propLocation').value = prop.location;
  document.getElementById('propStatus').value = prop.status;
  document.getElementById('propSize').value = prop.size;
  upgradeImageInput();
  // Fill image preview
  const propImg = document.getElementById('propImage');
  if (propImg) propImg.value = prop.image || '';
  const thumb = document.getElementById('propImageThumb');
  if (thumb && prop.image) {
    thumb.innerHTML = `<img src="${prop.image}" style="width:100%;height:100%;object-fit:cover;border-radius:6px" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'color:var(--gold);font-size:1.1rem\\'></i>'"/>`;
  }
  const nameEl = document.getElementById('propImageName');
  if (nameEl) nameEl.textContent = prop.image ? 'Image set — click to change' : 'Click to choose image';
  document.getElementById('propertyFormCard').style.display = 'block';
  document.getElementById('propertyFormCard').scrollIntoView({ behavior: 'smooth' });
};

window.deleteProperty = function(id) {
  if (!confirm('Delete this property? This cannot be undone.')) return;
  properties = properties.filter(p => p.id !== id);
  saveProperties();
  renderAdminProperties();
  renderProperties();
  refreshAdminData();
  renderCharts();
  showToast('✓ Property deleted.');
};

// =============================================
// ADMIN: HERO
// =============================================
function populateAdminForms() {
  document.getElementById('editHeroTitle').value = settings.heroTitle ? settings.heroTitle.replace(/<[^>]+>/g, '') : 'Building Future Luxury';
  document.getElementById('editHeroSubtitle').value = settings.heroSubtitle || DEFAULT_SETTINGS.heroSubtitle;
  document.getElementById('editCta1').value = settings.heroCta1 || DEFAULT_SETTINGS.heroCta1;
  document.getElementById('editCta2').value = settings.heroCta2 || DEFAULT_SETTINGS.heroCta2;
  document.getElementById('editBrandName').value = settings.brandName || DEFAULT_SETTINGS.brandName;
  document.getElementById('editAboutP1').value = document.querySelector('.about-text p:first-of-type')?.textContent || '';
  document.getElementById('editAddress').value = settings.contactAddress || DEFAULT_SETTINGS.contactAddress;
  document.getElementById('editPhone').value = settings.contactPhone || DEFAULT_SETTINGS.contactPhone;
  document.getElementById('editEmail').value = settings.contactEmail || DEFAULT_SETTINGS.contactEmail;
  document.getElementById('editHours').value = settings.contactHours || DEFAULT_SETTINGS.contactHours;
  document.getElementById('editFooterDesc').value = settings.footerDesc || DEFAULT_SETTINGS.footerDesc;
  document.getElementById('editCopyright').value = settings.footerCopyright || DEFAULT_SETTINGS.footerCopyright;
  document.getElementById('themeGold').value = settings.themeGold || '#c9a84c';
  document.getElementById('themeBg').value = settings.themeBg || '#0a0a0a';
  document.getElementById('themeBg2').value = settings.themeBg2 || '#111111';
  document.getElementById('themeCard').value = settings.themeCard || '#161616';
  document.getElementById('themeText').value = settings.themeText || '#e8e8e8';
}

document.getElementById('saveHeroBtn').addEventListener('click', () => {
  const raw = document.getElementById('editHeroTitle').value;
  settings.heroTitle = raw.includes('Luxury') || raw.includes('Premium') || raw.includes('Modern')
    ? raw.replace(/(Luxury|Premium|Modern|Future|Excellence)/, '<span class="gold">$1</span>')
    : raw;
  settings.heroSubtitle = document.getElementById('editHeroSubtitle').value;
  settings.heroCta1 = document.getElementById('editCta1').value;
  settings.heroCta2 = document.getElementById('editCta2').value;
  saveSettings();
  applyHeroSettings();
  showToast('✓ Hero settings saved!');
});

document.getElementById('addSlideBtn').addEventListener('click', () => {
  const url = document.getElementById('newSlideUrl').value.trim();
  if (!url) return;
  heroSlides.push({ url });
  saveSlides();
  initHeroSlider();
  renderAdminSlides();
  document.getElementById('newSlideUrl').value = '';
  showToast('✓ Slide added!');
});

function renderAdminSlides() {
  const preview = document.getElementById('slidesPreview');
  preview.innerHTML = heroSlides.map((s, i) => `
    <div class="slide-preview-item">
      <img src="${s.url}" alt="Slide ${i+1}" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=60'"/>
      <button class="slide-remove" onclick="removeSlide(${i})"><i class="fas fa-times"></i></button>
    </div>
  `).join('');
}

window.removeSlide = function(i) {
  if (heroSlides.length <= 1) { showToast('✗ Must keep at least one slide.'); return; }
  heroSlides.splice(i, 1);
  saveSlides();
  initHeroSlider();
  renderAdminSlides();
  showToast('✓ Slide removed.');
};

// =============================================
// ADMIN: ABOUT
// =============================================
document.getElementById('saveAboutBtn').addEventListener('click', () => {
  showToast('✓ About section saved!');
});

// =============================================
// ADMIN: WHY CHOOSE
// =============================================
function renderAdminWhy() {
  const list = document.getElementById('whyAdminList');
  list.innerHTML = whyCards.map(card => `
    <div class="why-admin-item">
      <i class="${card.icon}"></i>
      <div class="why-admin-item-text">
        <div class="why-admin-item-title">${card.title}</div>
        <div class="why-admin-item-desc">${card.desc.substring(0, 80)}...</div>
      </div>
      <div class="why-admin-actions">
        <button class="btn-edit" onclick="editWhy(${card.id})"><i class="fas fa-edit"></i></button>
        <button class="btn-delete" onclick="deleteWhy(${card.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addWhyBtn').addEventListener('click', () => {
  editingWhyId = null;
  document.getElementById('whyFormTitle').textContent = 'Add Why Card';
  document.getElementById('whyIcon').value = '';
  document.getElementById('whyTitle').value = '';
  document.getElementById('whyDesc').value = '';
  document.getElementById('whyFormCard').style.display = 'block';
});

document.getElementById('cancelWhyBtn').addEventListener('click', () => {
  document.getElementById('whyFormCard').style.display = 'none';
  editingWhyId = null;
});

document.getElementById('saveWhyBtn').addEventListener('click', () => {
  const title = document.getElementById('whyTitle').value.trim();
  if (!title) { showToast('✗ Title required.'); return; }
  const card = {
    id: editingWhyId || Date.now(),
    icon: document.getElementById('whyIcon').value || 'fas fa-star',
    title, desc: document.getElementById('whyDesc').value,
  };
  if (editingWhyId) {
    const idx = whyCards.findIndex(c => c.id === editingWhyId);
    if (idx !== -1) whyCards[idx] = card;
    showToast('✓ Card updated!');
  } else {
    whyCards.push(card);
    showToast('✓ Card added!');
  }
  saveWhy();
  renderWhyCards();
  renderAdminWhy();
  document.getElementById('whyFormCard').style.display = 'none';
  editingWhyId = null;
});

window.editWhy = function(id) {
  const card = whyCards.find(c => c.id === id);
  if (!card) return;
  editingWhyId = id;
  document.getElementById('whyFormTitle').textContent = 'Edit Why Card';
  document.getElementById('whyIcon').value = card.icon;
  document.getElementById('whyTitle').value = card.title;
  document.getElementById('whyDesc').value = card.desc;
  document.getElementById('whyFormCard').style.display = 'block';
};

window.deleteWhy = function(id) {
  if (whyCards.length <= 1) { showToast('✗ Keep at least one card.'); return; }
  whyCards = whyCards.filter(c => c.id !== id);
  saveWhy();
  renderWhyCards();
  renderAdminWhy();
  showToast('✓ Card deleted.');
};

// =============================================
// ADMIN: CONTACT
// =============================================
document.getElementById('saveContactBtn').addEventListener('click', () => {
  settings.contactAddress = document.getElementById('editAddress').value;
  settings.contactPhone = document.getElementById('editPhone').value;
  settings.contactEmail = document.getElementById('editEmail').value;
  settings.contactHours = document.getElementById('editHours').value;
  saveSettings();
  applyContactSettings();
  showToast('✓ Contact info updated!');
});

// =============================================
// ADMIN: FOOTER
// =============================================
document.getElementById('saveFooterBtn').addEventListener('click', () => {
  settings.footerDesc      = document.getElementById('editFooterDesc').value;
  settings.footerCopyright = document.getElementById('editCopyright').value;
  saveSettings();
  applyFooterSettings();
  showToast('✓ Footer updated!');
});

// ── Social Links Admin UI ────────────────────────────────────────────────────
function renderSocialLinksUI() {
  if (document.getElementById('socialLinksAdminCard')) return;

  const card = document.createElement('div');
  card.id = 'socialLinksAdminCard';
  card.className = 'admin-form-card';
  card.style.marginTop = '1.5rem';

  const sl = settings.socialLinks || DEFAULT_SETTINGS.socialLinks;

  const platforms = [
    { key: 'facebook',  label: 'Facebook',  icon: 'fab fa-facebook-f',  color: '#1877f2', placeholder: 'https://facebook.com/yourpage' },
    { key: 'instagram', label: 'Instagram', icon: 'fab fa-instagram',    color: '#e1306c', placeholder: 'https://instagram.com/yourprofile' },
    { key: 'youtube',   label: 'YouTube',   icon: 'fab fa-youtube',      color: '#ff0000', placeholder: 'https://youtube.com/yourchannel' },
    { key: 'linkedin',  label: 'LinkedIn',  icon: 'fab fa-linkedin-in',  color: '#0a66c2', placeholder: 'https://linkedin.com/company/yourpage' },
    { key: 'whatsapp',  label: 'WhatsApp',  icon: 'fab fa-whatsapp',     color: '#25d366', placeholder: 'https://wa.me/8801700000000' },
  ];

  card.innerHTML = `
    <h4 style="color:var(--gold);font-family:var(--heading-font);font-size:1.3rem;margin-bottom:0.5rem">
      <i class="fas fa-share-alt" style="margin-right:0.5rem"></i>Social Media Links
    </h4>
    <p style="color:var(--text-muted);font-size:0.82rem;margin-bottom:1.5rem">
      Add your social media page URLs. Links will appear in the footer. Leave blank to keep as placeholder.
    </p>
    ${platforms.map(p => `
      <div class="form-group" style="margin-bottom:1rem">
        <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted)">
          <span style="width:26px;height:26px;border-radius:50%;background:${p.color};display:inline-flex;align-items:center;justify-content:center;font-size:0.72rem">
            <i class="${p.icon}" style="color:#fff"></i>
          </span>
          ${p.label}
        </label>
        <input type="url" id="social_${p.key}"
          value="${sl[p.key] || ''}"
          placeholder="${p.placeholder}"
          style="padding-left:1rem;width:100%;padding:0.85rem 1rem;
            background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
            border-radius:10px;color:var(--text);font-size:0.85rem;font-family:var(--body-font);
            transition:all 0.3s ease;"
          onfocus="this.style.borderColor='var(--gold)'"
          onblur="this.style.borderColor='rgba(255,255,255,0.08)'"
        />
      </div>
    `).join('')}
    <div style="display:flex;gap:1rem;margin-top:1.2rem;flex-wrap:wrap">
      <button class="btn-primary" onclick="saveSocialLinks()">
        <i class="fas fa-save"></i> Save Social Links
      </button>
      <button class="btn-outline" onclick="previewSocialLinks()" style="font-size:0.78rem">
        <i class="fas fa-eye"></i> Preview in Footer
      </button>
    </div>
    <div id="socialLinksStatus" style="margin-top:1rem;font-size:0.78rem;color:var(--text-muted)"></div>
  `;

  document.getElementById('dashFooter').appendChild(card);
}

window.saveSocialLinks = function() {
  if (!settings.socialLinks) settings.socialLinks = {};
  ['facebook','instagram','youtube','linkedin','whatsapp'].forEach(key => {
    const val = document.getElementById(`social_${key}`)?.value.trim() || '';
    settings.socialLinks[key] = val;
  });
  saveSettings();
  applyFooterSettings();

  // Show status summary
  const set = Object.entries(settings.socialLinks).filter(([,v]) => v).length;
  document.getElementById('socialLinksStatus').innerHTML =
    `<i class="fas fa-check-circle" style="color:var(--gold)"></i> ${set} of 5 social links saved successfully.`;
  showToast('✓ Social media links saved!');
};

window.previewSocialLinks = function() {
  document.getElementById('adminDashboard').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    document.getElementById('footer').scrollIntoView({ behavior:'smooth' });
    showToast('Social links preview — scroll to footer');
  }, 300);
};

// =============================================
// ADMIN: THEME
// =============================================
document.getElementById('saveThemeBtn').addEventListener('click', () => {
  settings.themeGold = document.getElementById('themeGold').value;
  settings.themeBg = document.getElementById('themeBg').value;
  settings.themeBg2 = document.getElementById('themeBg2').value;
  settings.themeCard = document.getElementById('themeCard').value;
  settings.themeText = document.getElementById('themeText').value;
  settings.themeFont = document.getElementById('themeFont').value;
  saveSettings();
  applyTheme();
  showToast('✓ Theme applied!');
});

document.getElementById('resetThemeBtn').addEventListener('click', () => {
  settings.themeGold = DEFAULT_SETTINGS.themeGold;
  settings.themeBg = DEFAULT_SETTINGS.themeBg;
  settings.themeBg2 = DEFAULT_SETTINGS.themeBg2;
  settings.themeCard = DEFAULT_SETTINGS.themeCard;
  settings.themeText = DEFAULT_SETTINGS.themeText;
  settings.themeFont = DEFAULT_SETTINGS.themeFont;
  saveSettings();
  applyTheme();
  populateAdminForms();
  showToast('✓ Theme reset to default!');
});

function applyTheme() {
  const root = document.documentElement;
  if (settings.themeGold) {
    root.style.setProperty('--gold', settings.themeGold);
    // Recompute gradients with new gold
    root.style.setProperty('--gold-gradient', `linear-gradient(135deg, ${settings.themeGold}, #f0d080, ${settings.themeGold})`);
  }
  if (settings.themeBg) root.style.setProperty('--bg', settings.themeBg);
  if (settings.themeBg2) root.style.setProperty('--bg2', settings.themeBg2);
  if (settings.themeCard) root.style.setProperty('--card-bg', settings.themeCard);
  if (settings.themeText) root.style.setProperty('--text', settings.themeText);
  if (settings.themeFont) root.style.setProperty('--heading-font', settings.themeFont);
}

// =============================================
// ADMIN: NAVBAR
// =============================================
document.getElementById('saveNavbarBtn').addEventListener('click', () => {
  settings.brandName = document.getElementById('editBrandName').value;
  saveSettings();
  document.getElementById('navBrandName').textContent = settings.brandName;
  document.getElementById('footerBrandName').textContent = settings.brandName;
  showToast('✓ Navbar updated!');
});

// =============================================
// ADMIN: CUSTOM OPTIONS MANAGER
// Inject UI into each admin panel at open time
// =============================================
function renderCustomOptionsUI() {
  // We inject a "Manage Options" card into Properties panel, once
  if (document.getElementById('customOptionsCard')) return;

  const card = document.createElement('div');
  card.id = 'customOptionsCard';
  card.className = 'admin-form-card';
  card.style.marginTop = '2rem';
  card.innerHTML = `
    <h4 style="color:var(--gold);font-family:var(--heading-font);font-size:1.3rem;margin-bottom:1.2rem">
      <i class="fas fa-sliders-h" style="margin-right:0.5rem"></i>Manage Dropdown Options
    </h4>
    <p style="color:var(--text-muted);font-size:0.83rem;margin-bottom:1.5rem">
      Add or remove custom options for Location, Status, and Size dropdowns used in property forms.
    </p>

    ${['locations','statuses','sizes'].map(type => {
      const label = type === 'locations' ? '📍 Locations' : type === 'statuses' ? '🏷 Statuses' : '📐 Sizes';
      return `
        <div style="margin-bottom:1.8rem">
          <div style="font-size:0.75rem;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:0.8rem;font-weight:700">${label}</div>
          <div id="optTags_${type}" style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem"></div>
          <div style="display:flex;gap:0.8rem">
            <div class="form-group" style="flex:1;margin-bottom:0">
              <input type="text" id="optInput_${type}" placeholder="Type new option and press Add…" style="padding-left:1rem"/>
            </div>
            <button class="btn-primary" style="padding:0 1.4rem;border-radius:50px;font-size:0.78rem;white-space:nowrap"
              onclick="addCustomOption('${type}')">
              <i class="fas fa-plus"></i> Add
            </button>
          </div>
        </div>
      `;
    }).join('')}
  `;

  const propPanel = document.getElementById('dashProperties');
  propPanel.appendChild(card);

  // Allow Enter key to add
  ['locations','statuses','sizes'].forEach(type => {
    document.getElementById(`optInput_${type}`).addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); addCustomOption(type); }
    });
  });

  renderOptionTags();
}

function renderOptionTags() {
  ['locations','statuses','sizes'].forEach(type => {
    const container = document.getElementById(`optTags_${type}`);
    if (!container) return;
    container.innerHTML = customOptions[type].map((v, i) => `
      <span style="
        display:inline-flex;align-items:center;gap:0.5rem;
        padding:0.3rem 0.85rem;border-radius:50px;
        background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);
        color:var(--gold);font-size:0.78rem;font-weight:600;
      ">
        ${type === 'sizes' && v !== 'Duplex' && v !== 'Commercial' ? v + ' sqft' : v}
        <button onclick="removeCustomOption('${type}',${i})" style="
          background:none;color:rgba(201,168,76,0.6);
          font-size:0.75rem;line-height:1;cursor:pointer;
          transition:color 0.2s;
        " title="Remove" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='rgba(201,168,76,0.6)'">✕</button>
      </span>
    `).join('');
  });
}

window.addCustomOption = function(type) {
  const input = document.getElementById(`optInput_${type}`);
  const val = input.value.trim();
  if (!val) { showToast('✗ Please type an option first.'); return; }

  // For sizes, store raw number/word; strip "sqft" if user typed it
  const cleaned = (type === 'sizes') ? val.replace(/\s*sqft\s*/i, '').trim() : val;

  if (customOptions[type].map(v=>v.toLowerCase()).includes(cleaned.toLowerCase())) {
    showToast('✗ This option already exists.'); return;
  }
  customOptions[type].push(cleaned);
  saveCustomOptions();
  renderOptionTags();
  syncNavbarDropdowns();   // ← update navbar dropdowns live
  input.value = '';
  showToast(`✓ "${cleaned}" added to ${type}.`);
};

window.removeCustomOption = function(type, index) {
  const val = customOptions[type][index];
  // Safety: keep at least 1 option
  if (customOptions[type].length <= 1) { showToast('✗ Must keep at least one option.'); return; }
  customOptions[type].splice(index, 1);
  saveCustomOptions();
  renderOptionTags();
  syncNavbarDropdowns();   // ← update navbar dropdowns live
  showToast(`✓ "${val}" removed.`);
};

// =============================================
// SYNC NAVBAR DROPDOWNS with customOptions
// =============================================
function syncNavbarDropdowns() {
  // Target each dropdown by the data-filter of its first item — reliable, no nth-child guessing

  // --- Property/Status dropdown (1st has-dropdown) ---
  const statusDropdown = document.querySelector('.dropdown-menu:has([data-filter="status"])');
  if (statusDropdown) {
    const dotClass = { ongoing:'ongoing', handover:'handover', processing:'processing', upcoming:'upcoming', featured:'featured' };
    statusDropdown.innerHTML = customOptions.statuses.map(s => `
      <a href="#properties" class="dropdown-item" data-filter="status" data-value="${s}">
        <span class="dot ${dotClass[s] || 'featured'}"></span>
        ${s.charAt(0).toUpperCase() + s.slice(1)}
      </a>
    `).join('');
    statusDropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));
        activeFilters['status'] = item.dataset.value;
        filterTabActive = item.dataset.value;
        updateFilterUI();
        renderProperties();
        document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // --- Location dropdown (2nd has-dropdown) ---
  const locDropdown = document.querySelector('.dropdown-menu:has([data-filter="location"])');
  if (locDropdown) {
    locDropdown.innerHTML = customOptions.locations.map(loc => `
      <a href="#properties" class="dropdown-item" data-filter="location" data-value="${loc}">
        <i class="fas fa-map-marker-alt" style="color:var(--gold);font-size:0.75rem"></i> ${loc}
      </a>
    `).join('');
    locDropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));
        activeFilters['location'] = item.dataset.value;
        filterTabActive = 'all';
        updateFilterUI();
        renderProperties();
        document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // --- Size dropdown (3rd has-dropdown) ---
  const sizeDropdown = document.querySelector('.dropdown-menu:has([data-filter="size"])');
  if (sizeDropdown) {
    sizeDropdown.innerHTML = customOptions.sizes.map(s => `
      <a href="#properties" class="dropdown-item" data-filter="size" data-value="${s}">
        <i class="fas fa-vector-square" style="color:var(--gold);font-size:0.75rem"></i>
        ${(s === 'Duplex' || s === 'Commercial') ? s : s + ' sqft'}
      </a>
    `).join('');
    sizeDropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dd-open'));
        activeFilters['size'] = item.dataset.value;
        filterTabActive = 'all';
        updateFilterUI();
        renderProperties();
        document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}

// =============================================
// ADMIN: CREDENTIALS UPDATE
// Inject UI into Navbar panel
// =============================================
function renderCredentialsUI() {
  if (document.getElementById('credentialsCard')) return;

  const card = document.createElement('div');
  card.id = 'credentialsCard';
  card.className = 'admin-form-card';
  card.style.marginTop = '2rem';
  card.innerHTML = `
    <h4 style="color:var(--gold);font-family:var(--heading-font);font-size:1.3rem;margin-bottom:1.2rem">
      <i class="fas fa-key" style="margin-right:0.5rem"></i>Update Admin Credentials
    </h4>
    <p style="color:var(--text-muted);font-size:0.83rem;margin-bottom:1.5rem">
      Change your admin username and password. You will need to login again after saving.
    </p>
    <div class="admin-form-grid">
      <div class="form-group">
        <label style="font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.4rem">Current Password (required)</label>
        <input type="password" id="credCurrentPass" placeholder="Enter current password" style="padding-left:1rem"/>
      </div>
      <div style="display:none"></div>
      <div class="form-group">
        <label style="font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.4rem">New Username</label>
        <input type="text" id="credNewUser" placeholder="Leave blank to keep current" style="padding-left:1rem"/>
      </div>
      <div class="form-group">
        <label style="font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.4rem">New Password</label>
        <input type="password" id="credNewPass" placeholder="Leave blank to keep current" style="padding-left:1rem"/>
      </div>
      <div class="form-group">
        <label style="font-size:0.75rem;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.4rem">Confirm New Password</label>
        <input type="password" id="credConfirmPass" placeholder="Re-enter new password" style="padding-left:1rem"/>
      </div>
    </div>
    <div style="margin-top:0.5rem;padding:0.8rem 1rem;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.2);border-radius:10px;font-size:0.8rem;color:var(--text-muted)">
      <i class="fas fa-info-circle" style="color:var(--gold);margin-right:0.4rem"></i>
      Current default — Username: <strong style="color:var(--text)">admin</strong> &nbsp;|&nbsp; Password: <strong style="color:var(--text)">starline2025</strong>
    </div>
    <div style="display:flex;gap:1rem;margin-top:1rem">
      <button class="btn-primary" onclick="saveAdminCredentials()">
        <i class="fas fa-save"></i> Save Credentials
      </button>
    </div>
  `;

  document.getElementById('dashNavbar').appendChild(card);
}

window.saveAdminCredentials = function() {
  const currentPass   = document.getElementById('credCurrentPass').value;
  const newUser       = document.getElementById('credNewUser').value.trim();
  const newPass       = document.getElementById('credNewPass').value;
  const confirmPass   = document.getElementById('credConfirmPass').value;

  const storedPass = localStorage.getItem('sl_admin_pass') || 'starline2025';
  const storedUser = localStorage.getItem('sl_admin_user') || 'admin';

  // Verify current password
  if (currentPass !== storedPass) {
    showToast('✗ Current password is incorrect.'); return;
  }

  // Validate new password match
  if (newPass && newPass !== confirmPass) {
    showToast('✗ New passwords do not match.'); return;
  }
  if (newPass && newPass.length < 6) {
    showToast('✗ Password must be at least 6 characters.'); return;
  }

  const finalUser = newUser || storedUser;
  const finalPass = newPass || storedPass;

  localStorage.setItem('sl_admin_user', finalUser);
  localStorage.setItem('sl_admin_pass', finalPass);

  // Clear fields
  document.getElementById('credCurrentPass').value = '';
  document.getElementById('credNewUser').value = '';
  document.getElementById('credNewPass').value = '';
  document.getElementById('credConfirmPass').value = '';

  showToast(`✓ Credentials updated! New login: ${finalUser} / ****`);

  // Auto-logout after 2s so they re-login with new credentials
  setTimeout(() => {
    adminLoggedIn = false;
    sessionStorage.removeItem('sl_admin_session'); // ← clear session
    document.getElementById('adminDashboard').classList.remove('open');
    document.body.style.overflow = '';
    openModal('loginModal');
    switchTab('admin');
    showToast('Please login with your new credentials.');
  }, 2000);
};

// =============================================
// ADMIN: USERS & MESSAGES
// =============================================
function renderAdminUsers() {
  const tbody = document.getElementById('usersTableBody');
  // Always reload fresh from localStorage
  users = JSON.parse(localStorage.getItem('sl_users') || '[]');
  if (!users.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted)">No registered users yet</td></tr>';
    return;
  }
  // Newest first
  const sorted = [...users].reverse();
  tbody.innerHTML = sorted.map((u, i) => `
    <tr>
      <td style="color:var(--gold);font-weight:700;text-align:center">#${i + 1}</td>
      <td style="color:var(--text);font-weight:600">${u.name || '-'}</td>
      <td>${u.email || '-'}</td>
      <td>${u.phone || '-'}</td>
      <td style="font-size:0.78rem;color:var(--text-muted)">${u.date || '-'} ${u.time || ''}</td>
      <td><span style="padding:0.25rem 0.7rem;border-radius:50px;font-size:0.72rem;font-weight:700;
        background:${u.blocked ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)'};
        color:${u.blocked ? '#ef4444' : '#22c55e'};
        border:1px solid ${u.blocked ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'}">
        ${u.blocked ? '🔒 Blocked' : '✓ Active'}
      </span></td>
      <td>
        <div class="action-btns">
          <button class="btn-block" onclick="toggleBlock(${u.id})">${u.blocked ? 'Unblock' : 'Block'}</button>
          <button class="btn-delete" onclick="deleteUser(${u.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.toggleBlock = function(id) {
  const u = users.find(u => u.id === id);
  if (u) { u.blocked = !u.blocked; saveUsers(); renderAdminUsers(); showToast(`✓ User ${u.blocked ? 'blocked' : 'unblocked'}.`); }
};
window.deleteUser = function(id) {
  if (!confirm('Delete this user?')) return;
  users = users.filter(u => u.id !== id);
  saveUsers();
  renderAdminUsers();
  refreshAdminData();
  showToast('✓ User deleted.');
};

function renderAdminMessages() {
  const tbody        = document.getElementById('messagesTableBody');
  const enquiryTbody = document.getElementById('enquiriesTableBody');
  // Always reload fresh
  messages = JSON.parse(localStorage.getItem('sl_messages') || '[]');
  if (!messages.length) {
    const empty = '<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted)">No messages yet</td></tr>';
    tbody.innerHTML = empty;
    enquiryTbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-muted)">No enquiries yet</td></tr>';
    return;
  }
  // Newest first
  const sorted = [...messages].reverse();
  tbody.innerHTML = sorted.map((m, i) => `
    <tr>
      <td style="color:var(--gold);font-weight:700;text-align:center">#${i + 1}</td>
      <td style="color:var(--text);font-weight:600">${m.name || '-'}</td>
      <td>${m.email || '-'}</td>
      <td>${m.phone || '-'}</td>
      <td>${m.interest || '-'}</td>
      <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${m.message || ''}">${m.message || '-'}</td>
      <td style="font-size:0.78rem;white-space:nowrap;color:var(--text-muted)">${m.date || '-'} ${m.time || ''}</td>
    </tr>
  `).join('');
  enquiryTbody.innerHTML = sorted.map((m, i) => `
    <tr>
      <td style="color:var(--gold);font-weight:700;text-align:center">#${i + 1}</td>
      <td style="color:var(--text);font-weight:600">${m.name || '-'}</td>
      <td>${m.phone || '-'}</td>
      <td>${m.email || '-'}</td>
      <td>${m.interest || '-'}</td>
      <td>${m.message || '-'}</td>
    </tr>
  `).join('');
}

// =============================================
// SIMPLE CHARTS (Canvas)
// =============================================
function renderCharts() {
  renderStatusChart();
  renderLocationChart();
}

function renderStatusChart() {
  const canvas = document.getElementById('statusChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const statuses = ['ongoing', 'handover', 'processing', 'upcoming', 'featured'];
  const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#a855f7', '#c9a84c'];
  const labels = ['Ongoing', 'Handover', 'Processing', 'Upcoming', 'Featured'];
  const counts = statuses.map(s => properties.filter(p => p.status === s).length);
  drawBarChart(ctx, canvas.width, canvas.height, labels, counts, colors);
}

function renderLocationChart() {
  const canvas = document.getElementById('locationChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const locs = ['Gulshan','Banani','Bashundhara','Dhanmondi','Uttara','Mirpur','Purbachal'];
  const colors = ['#c9a84c','#e8c96a','#f0d080','#9a7520','#b8941e','#d4b060','#a88030'];
  const counts = locs.map(l => properties.filter(p => p.location === l).length);
  drawBarChart(ctx, canvas.width, canvas.height, locs, counts, colors);
}

function drawBarChart(ctx, w, h, labels, data, colors) {
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(...data, 1);
  const padding = { top: 20, right: 20, bottom: 50, left: 40 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const barW = Math.min(chartW / data.length - 12, 50);
  const gap = (chartW - barW * data.length) / data.length;

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + chartH - (i / 4) * chartH;
    ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(w - padding.right, y); ctx.stroke();
  }

  // Bars
  data.forEach((val, i) => {
    const barH = (val / max) * chartH;
    const x = padding.left + gap / 2 + i * (barW + gap);
    const y = padding.top + chartH - barH;

    // Gradient fill
    const grad = ctx.createLinearGradient(0, y, 0, y + barH);
    grad.addColorStop(0, colors[i] || '#c9a84c');
    grad.addColorStop(1, colors[i] ? colors[i] + '44' : '#c9a84c44');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(x, y, barW, barH, 4) : ctx.rect(x, y, barW, barH);
    ctx.fill();

    // Value label
    ctx.fillStyle = 'rgba(232,232,232,0.7)';
    ctx.font = '11px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(val, x + barW / 2, y - 5);

    // X label
    ctx.fillStyle = 'rgba(136,136,136,0.8)';
    ctx.font = '9px Montserrat, sans-serif';
    ctx.fillText(labels[i].substring(0, 7), x + barW / 2, padding.top + chartH + 16);
  });
}

// =============================================
// REVEAL ON SCROLL
// =============================================
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =============================================
// TOAST
// =============================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// =============================================
// SMOOTH SCROLL NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =============================================
// APPLY ALL SETTINGS TO DOM
// =============================================
function applyAllSettings() {
  applyHeroSettings();
  applyContactSettings();
  applyFooterSettings();
  applyTheme();
  // Brand name
  const bn = document.getElementById('navBrandName');
  if (bn && settings.brandName) bn.textContent = settings.brandName;
}

// =============================================
// PREMIUM ADMIN TOPBAR
// =============================================
function buildAdminTopbar() {
  if (document.getElementById('adminTopbarBuilt')) return;

  const topbar = document.querySelector('.admin-topbar');
  if (!topbar) return;
  topbar.id = 'adminTopbarBuilt';

  // Inject CSS for topbar enhancements
  const style = document.createElement('style');
  style.textContent = `
    .admin-topbar {
      display: flex !important;
      align-items: center !important;
      gap: 0 !important;
      padding: 0 1.5rem !important;
      height: 58px;
      background: rgba(5,5,5,0.96) !important;
      border-bottom: 1px solid rgba(201,168,76,0.15) !important;
    }
    .atb-logo-link {
      display: flex; align-items: center; gap: 0.6rem;
      text-decoration: none; flex-shrink: 0;
      padding: 0 1rem 0 0;
      border-right: 1px solid rgba(255,255,255,0.06);
      margin-right: 1rem; height: 100%;
      transition: opacity 0.2s;
    }
    .atb-logo-link:hover { opacity: 0.8; }
    .atb-logo-img {
      width: 32px; height: 32px; object-fit: contain;
      border-radius: 50%; border: 1px solid rgba(201,168,76,0.4);
    }
    .atb-brand {
      font-family: var(--heading-font);
      font-size: 1rem; font-weight: 700;
      color: var(--gold); white-space: nowrap;
      letter-spacing: 0.5px;
    }
    .atb-collapse-btn {
      background: none; color: rgba(232,232,232,0.5);
      font-size: 1rem; padding: 0.3rem; cursor: pointer;
      transition: color 0.2s; flex-shrink: 0;
    }
    .atb-collapse-btn:hover { color: var(--gold); }
    .atb-page-badge {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.25rem 0.8rem; border-radius: 50px; font-size: 0.68rem;
      font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
      background: rgba(201,168,76,0.15); color: var(--gold);
      border: 1px solid rgba(201,168,76,0.3); margin-left: 0.8rem;
      flex-shrink: 0;
    }
    #adminPageTitleBar {
      font-family: var(--heading-font);
      font-size: 1.2rem; font-weight: 600; color: var(--text);
      margin-left: 0.8rem;
    }
    .atb-spacer { flex: 1; }
    .atb-datetime {
      display: flex; align-items: center; gap: 0.5rem;
      font-size: 0.75rem; color: var(--text-muted);
      padding: 0.4rem 1rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 50px; margin-right: 1rem; white-space: nowrap;
    }
    .atb-datetime i { color: var(--gold); font-size: 0.8rem; }
    .atb-profile-wrap { position: relative; flex-shrink: 0; }
    .atb-profile-btn {
      display: flex; align-items: center; gap: 0.6rem;
      background: rgba(201,168,76,0.08);
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 50px; padding: 0.35rem 0.9rem 0.35rem 0.4rem;
      cursor: pointer; transition: all 0.25s;
    }
    .atb-profile-btn:hover {
      background: rgba(201,168,76,0.16);
      border-color: rgba(201,168,76,0.5);
    }
    .atb-avatar {
      width: 30px; height: 30px; border-radius: 50%;
      background: var(--gold-gradient); color: #000;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem; font-weight: 800;
    }
    .atb-name { font-size: 0.78rem; font-weight: 600; color: var(--text); }
    .atb-role { font-size: 0.65rem; color: var(--text-muted); }
    .atb-chevron { color: var(--text-muted); font-size: 0.65rem; transition: transform 0.25s; }
    .atb-dropdown {
      position: absolute; top: calc(100% + 10px); right: 0;
      background: rgba(10,10,10,0.98);
      border: 1px solid rgba(201,168,76,0.2);
      border-radius: 14px; padding: 0.5rem; min-width: 200px;
      z-index: 500; box-shadow: 0 20px 60px rgba(0,0,0,0.8);
      backdrop-filter: blur(20px);
      opacity: 0; visibility: hidden; transform: translateY(-8px);
      transition: all 0.25s cubic-bezier(0.25,0.8,0.25,1);
    }
    .atb-dropdown.open {
      opacity: 1; visibility: visible; transform: translateY(0);
    }
    .atb-dd-header {
      padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 0.4rem;
    }
    .atb-dd-name { font-size: 0.88rem; font-weight: 700; color: var(--text); }
    .atb-dd-email { font-size: 0.72rem; color: var(--text-muted); margin-top: 2px; }
    .atb-dd-item {
      display: flex; align-items: center; gap: 0.7rem;
      padding: 0.65rem 1rem; border-radius: 10px;
      font-size: 0.82rem; color: var(--text-muted);
      cursor: pointer; transition: all 0.2s;
    }
    .atb-dd-item:hover { background: rgba(201,168,76,0.1); color: var(--text); }
    .atb-dd-item i { color: var(--gold); width: 16px; text-align: center; font-size: 0.85rem; }
    .atb-dd-sep { height: 1px; background: rgba(255,255,255,0.06); margin: 0.3rem 0.5rem; }
    .atb-dd-item.danger { color: #ef4444; }
    .atb-dd-item.danger i { color: #ef4444; }
    .atb-dd-item.danger:hover { background: rgba(239,68,68,0.1); }
  `;
  document.head.appendChild(style);

  // Get admin username
  const adminUsername = localStorage.getItem('sl_admin_user') || 'admin';
  const adminEmail    = localStorage.getItem('sl_admin_email') || 'admin@starlinebuilders.com';

  // Clear topbar, rebuild
  topbar.innerHTML = `
    <!-- Left: Logo → back to website -->
    <a class="atb-logo-link" href="#" id="atbLogoLink" title="Go to Website">
      <img class="atb-logo-img" src="/mnt/user-data/uploads/company_.jpeg"
        alt="Starline" onerror="this.style.display='none'"/>
      <span class="atb-brand">Starline <span style="color:var(--text);font-weight:400">Ltd.</span></span>
    </a>

    <!-- Sidebar toggle -->
    <button class="atb-collapse-btn" id="atbSidebarToggle" title="Toggle sidebar">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Page title + badge -->
    <span id="adminPageTitleBar">Dashboard</span>
    <span class="atb-page-badge" id="atbPageBadge"><i class="fas fa-circle" style="font-size:0.5rem"></i>ADMIN</span>

    <div class="atb-spacer"></div>

    <!-- Date & Time -->
    <div class="atb-datetime" id="atbDatetime">
      <i class="fas fa-calendar-alt"></i>
      <span id="atbDateStr">--</span>
      <span style="color:rgba(255,255,255,0.15)">|</span>
      <i class="fas fa-clock" style="margin-left:2px"></i>
      <span id="atbTimeStr">--:--</span>
    </div>

    <!-- Profile dropdown -->
    <div class="atb-profile-wrap">
      <div class="atb-profile-btn" id="atbProfileBtn">
        <div class="atb-avatar">${adminUsername.charAt(0).toUpperCase()}</div>
        <div>
          <div class="atb-name">${adminUsername.charAt(0).toUpperCase() + adminUsername.slice(1)}</div>
          <div class="atb-role">Administrator</div>
        </div>
        <i class="fas fa-chevron-down atb-chevron" id="atbChevron"></i>
      </div>
      <div class="atb-dropdown" id="atbDropdown">
        <div class="atb-dd-header">
          <div class="atb-dd-name">${adminUsername.charAt(0).toUpperCase() + adminUsername.slice(1)}</div>
          <div class="atb-dd-email">${adminEmail}</div>
        </div>
        <div class="atb-dd-item" onclick="atbGoTo('dashNavbar')">
          <i class="fas fa-key"></i> Update Credentials
        </div>
        <div class="atb-dd-item" onclick="atbGoTo('dashTheme')">
          <i class="fas fa-palette"></i> Theme Settings
        </div>
        <div class="atb-dd-sep"></div>
        <div class="atb-dd-item" onclick="atbGoBackToSite()">
          <i class="fas fa-globe"></i> View Website
        </div>
        <div class="atb-dd-sep"></div>
        <div class="atb-dd-item danger" onclick="atbLogout()">
          <i class="fas fa-sign-out-alt"></i> Sign Out
        </div>
      </div>
    </div>
  `;

  // Logo click → close dashboard, go to website
  document.getElementById('atbLogoLink').addEventListener('click', e => {
    e.preventDefault();
    atbGoBackToSite();
  });

  // Sidebar toggle
  document.getElementById('atbSidebarToggle').addEventListener('click', () => {
    document.getElementById('adminSidebar').classList.toggle('open');
  });

  // Profile dropdown toggle
  document.getElementById('atbProfileBtn').addEventListener('click', e => {
    e.stopPropagation();
    const dd = document.getElementById('atbDropdown');
    const ch = document.getElementById('atbChevron');
    dd.classList.toggle('open');
    ch.style.transform = dd.classList.contains('open') ? 'rotate(180deg)' : '';
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    const dd = document.getElementById('atbDropdown');
    if (dd) { dd.classList.remove('open'); document.getElementById('atbChevron').style.transform = ''; }
  });

  // Clock
  function updateClock() {
    const now = new Date();
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    let h = now.getHours(), m = now.getMinutes(), ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const timeStr = `${h}:${String(m).padStart(2,'0')} ${ampm}`;
    const ds = document.getElementById('atbDateStr');
    const ts = document.getElementById('atbTimeStr');
    if (ds) ds.textContent = dateStr;
    if (ts) ts.textContent = timeStr;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Sync page title with admin nav clicks
  document.querySelectorAll('.admin-nav').forEach(nav => {
    nav.addEventListener('click', () => {
      const titleEl = document.getElementById('adminPageTitleBar');
      if (titleEl) titleEl.textContent = nav.textContent.trim().replace(/^\s*\S+\s*/, '').trim() || nav.textContent.trim();
    });
  });
}

window.atbGoBackToSite = function() {
  document.getElementById('adminDashboard').classList.remove('open');
  document.body.style.overflow = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Welcome back to the website!');
};

window.atbGoTo = function(panel) {
  document.querySelectorAll('.admin-nav').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  const nav = document.querySelector(`.admin-nav[data-panel="${panel}"]`);
  if (nav) nav.classList.add('active');
  const panelEl = document.getElementById(panel);
  if (panelEl) panelEl.classList.add('active');
  const dd = document.getElementById('atbDropdown');
  if (dd) dd.classList.remove('open');
};

window.atbLogout = function() {
  adminLoggedIn = false;
  sessionStorage.removeItem('sl_admin_session'); // ← clear session
  document.getElementById('adminDashboard').classList.remove('open');
  document.body.style.overflow = '';
  showToast('Logged out successfully.');
};

// =============================================
// FIX TABLE HEADERS — Add Serial # column
// =============================================
function fixMessageTableHeaders() {
  // Messages panel table — add # column
  const msgTable = document.querySelector('#dashMessages .admin-table thead tr');
  if (msgTable && !msgTable.querySelector('.serial-th')) {
    const th = document.createElement('th');
    th.className = 'serial-th';
    th.textContent = '#';
    th.style.cssText = 'width:40px;text-align:center;color:var(--gold)';
    msgTable.insertBefore(th, msgTable.firstChild);
  }
  // Contact enquiries table — add # column
  const enquiryTable = document.querySelector('#dashContact .admin-table thead tr');
  if (enquiryTable && !enquiryTable.querySelector('.serial-th')) {
    const th = document.createElement('th');
    th.className = 'serial-th';
    th.textContent = '#';
    th.style.cssText = 'width:40px;text-align:center;color:var(--gold)';
    enquiryTable.insertBefore(th, enquiryTable.firstChild);
  }
  // Users table — rebuild header with 7 columns
  const usersTable = document.querySelector('#dashUsers .admin-table thead tr');
  if (usersTable) {
    usersTable.innerHTML = `
      <th style="width:40px;text-align:center;color:var(--gold)">#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Registered</th>
      <th>Status</th>
      <th>Actions</th>
    `;
  }
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  runLoader();
  initNavbar();
  initHeroSlider();
  renderProperties();
  renderWhyCards();
  initFilterTabs();
  initContactForm();
  initCounters();
  applyAllSettings();
  initReveal();
  syncNavbarDropdowns();
  applyFooterSettings();

  document.querySelectorAll('.about-grid > *, .why-card, .contact-detail, .footer-col').forEach(el => {
    el.classList.add('reveal');
  });
  setTimeout(initReveal, 100);

  // ── Restore admin session after refresh ──
  if (sessionStorage.getItem('sl_admin_session') === '1') {
    adminLoggedIn = true;
    // Small delay so DOM is fully ready
    setTimeout(() => openAdminDashboard(), 200);
  }
});

// =============================================
// Escape key closes modals
// =============================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal('loginModal');
    closeModal('propertyModal');
  }
});