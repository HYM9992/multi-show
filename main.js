const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.main-nav a');

const highlightNav = () => {
  let currentId = '';

  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 100;
    if (window.scrollY >= offsetTop) {
      currentId = section.id;
    }
  });

  navItems.forEach((item) => {
    const target = item.getAttribute('href')?.replace('#', '');
    item.classList.toggle('active', target === currentId);
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -6% 0px'
  }
);

revealItems.forEach((item) => observer.observe(item));
