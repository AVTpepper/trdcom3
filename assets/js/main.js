/**
 * KOMMÆRSJ - Main JavaScript
 * Vanilla JS functionality for the site
 */

// ============================================================================
// LOADING OVERLAY ANIMATION
// ============================================================================

function initLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  
  // If no loading overlay exists (not index.html), content is visible by default
  if (!overlay) {
    return;
  }

  // Check if animation was already shown this session
  if (sessionStorage.getItem('loadingShown')) {
    overlay.classList.add('hidden');
    document.body.classList.add('content-visible');
    document.documentElement.classList.add('loading-complete');
    return;
  }

  // Start animations
  const taglines = overlay.querySelectorAll('.loading-tagline');
  const divider = overlay.querySelector('.loading-divider');
  const brandText = overlay.querySelector('.loading-brand-text');

  // Trigger animations
  taglines.forEach(tagline => tagline.classList.add('animate'));
  if (divider) divider.classList.add('animate');
  if (brandText) brandText.classList.add('animate');

  // Fade out overlay after 3.5 seconds (visible time)
  setTimeout(() => {
    overlay.classList.add('fade-out');
    document.body.classList.add('content-visible');
    
    // Remove from DOM after fade completes
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 1000);
  }, 3500);

  // Mark as shown for this session
  sessionStorage.setItem('loadingShown', 'true');
}

// ============================================================================
// MOBILE NAVIGATION
// ============================================================================

function initMobileNav() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    
    if (isOpen) {
      mobileNav.classList.remove('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileNav.classList.add('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.add('open');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // Close mobile nav when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Close mobile nav when clicking the overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileMenuOverlay.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  }
}

// ============================================================================
// FAQ ACCORDION
// ============================================================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
}

// ============================================================================
// SCROLL ANIMATIONS
// Only runs on pages with loading overlay (index.html) for performance
// ============================================================================

function initScrollAnimations() {
  // Skip scroll animations on pages without loading overlay
  // Elements are visible by default via CSS on those pages
  if (!document.body.classList.contains('has-loading-overlay')) {
    return;
  }

  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================================================
// CONTACT FORM
// ============================================================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic validation
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    
    let isValid = true;

    if (name && !name.value.trim()) {
      isValid = false;
      name.style.borderColor = '#d4183d';
    } else if (name) {
      name.style.borderColor = '';
    }

    if (email && !isValidEmail(email.value)) {
      isValid = false;
      email.style.borderColor = '#d4183d';
    } else if (email) {
      email.style.borderColor = '';
    }

    if (message && !message.value.trim()) {
      isValid = false;
      message.style.borderColor = '#d4183d';
    } else if (message) {
      message.style.borderColor = '';
    }

    if (isValid) {
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'SENDER...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = 'SENDT! ✓';
        submitBtn.style.backgroundColor = '#22c55e';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
          form.reset();
        }, 2000);
      }, 1000);
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================================================
// NAVBAR SCROLL EFFECT
// ============================================================================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = '';
    }

    lastScroll = currentScroll;
  });
}

// ============================================================================
// SET ACTIVE NAV LINK
// ============================================================================

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Remove .html extension for comparison
    const cleanPath = currentPath.replace('.html', '').replace(/\/$/, '');
    const cleanHref = href.replace('.html', '').replace(/\/$/, '');
    
    // Handle index/home page
    if ((cleanPath === '' || cleanPath === '/index' || cleanPath.endsWith('/')) && 
        (cleanHref === 'index' || cleanHref === '/' || cleanHref === '')) {
      link.classList.add('active');
    } else if (cleanPath.includes(cleanHref) && cleanHref !== '' && cleanHref !== 'index') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================================================
// SERVICES DATA (for dynamic service detail page)
// ============================================================================

const servicesData = {
  'beslutningssprint': {
    id: 'beslutningssprint',
    title: 'KOMMERSIELL BESLUTNINGSSPRINT',
    shortDesc: 'Når retning eller gjennomføring er uklar. På 2–4 uker lander vi valg, risiko/antakelser og en 90-dagers plan – klar for leder/styre.',
    fullDesc: 'Vi hjelper ledergrupper med å ta de vanskelige valgene. Gjennom en strukturert prosess på 2–4 uker går vi fra usikkerhet til en klar handlingsplan. Vi kutter støyen og fokuserer på det som faktisk flytter tallene.',
    duration: '2–4 Uker',
    features: [
      'Prioritert portefølje (3–5 satsinger)',
      'Beslutningslogg & risiko',
      '90-dagers plan med eiere',
      'Executive-presentasjon'
    ]
  },
  'hire': {
    id: 'hire',
    title: 'KOMMÆRSJ FOR HIRE',
    shortDesc: 'Interim kommersiell ledelse. Når det virkelig gjelder: få inn et senior ressurs som driver fra strategi til leveranse.',
    fullDesc: 'Trenger dere en kommersiell leder som kan tre inn umiddelbart og levere resultater? Våre interimledere har erfaring fra toppledelse og vet hva som skal til for å snu en skute eller skalere raskt.',
    duration: 'Interim Ledelse',
    features: [
      'Senior ressurs on-demand',
      'Strategi til leveranse',
      'Kritiske endringer/skalering',
      'Momentum og måloppnåelse'
    ]
  },
  'sparring': {
    id: 'sparring',
    title: 'EXECUTIVE SPARRING',
    shortDesc: 'Fortrolig sparring for ledere som vil ta bedre beslutninger og få mindre støy i hverdagen. 1–2 økter/mnd.',
    fullDesc: 'Det er ensomt på toppen. Få en fortrolig sparringspartner som utfordrer deg, støtter deg i vanskelige valg, og hjelper deg å holde fokus på det viktigste.',
    duration: 'Abonnement',
    features: [
      '1–2 økter per måned',
      'Fokus på prioritering',
      'Risiko og gjennomføring',
      'Raskere beslutninger'
    ]
  },
  'enterprise-salg': {
    id: 'enterprise-salg',
    title: 'ENTERPRISE SALG – SOM TJENESTE',
    shortDesc: 'Skal dere selge til store kunder, men mangler kapasitet, nettverk eller metode? Vi gjør salget for dere.',
    fullDesc: 'Vi fungerer som deres forlengede salgsarm mot enterprise-markedet. Med vår metodikk og nettverk åpner vi dører og lukker avtaler som ellers ville vært utilgjengelige.',
    duration: 'Ny tjeneste!',
    features: [
      'Posisjonering & møtebooking',
      'Forhandling & signering',
      'Lav fastpris + suksesshonorar',
      'Kvalifiserte møter, signerte avtaler'
    ]
  }
};

// Export for use in service detail page
window.servicesData = servicesData;

// ============================================================================
// INITIALIZE
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLoadingOverlay();
  initMobileNav();
  initFaqAccordion();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
  initNavbarScroll();
  setActiveNavLink();
});
