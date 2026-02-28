// Smooth scroll to section
function scrollToSection(id) {
 const el = document.getElementById(id);
 if (!el) return;
 const offset = 64; // header height
 const top = el.getBoundingClientRect().top + window.scrollY - offset;
 window.scrollTo({ top, behavior: 'smooth' });
 closeMobileMenu();
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

menuToggle.addEventListener('click', () => {
 const isOpen = mobileNav.classList.toggle('open');
 iconMenu.style.display = isOpen ? 'none' : 'block';
 iconClose.style.display = isOpen ? 'block' : 'none';
});

function closeMobileMenu() {
 mobileNav.classList.remove('open');
 iconMenu.style.display = 'block';
 iconClose.style.display = 'none';
}
