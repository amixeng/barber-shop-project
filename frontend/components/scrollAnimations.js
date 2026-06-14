const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

// ← hero retiré d'ici
const elements = document.querySelectorAll(
    '.service-card, .barber-card, .testimonial, ' +
    '.section-title, .label, .section-sub, ' +
    '.time-row, .booking-form, .footer-grid, ' +
    '.barber-name, .barber-role, .avail-header, ' +
    '.opening-times, .submit-btn'
);

elements.forEach(el => {
    el.classList.add('slide-up');
    observer.observe(el);
});

// Logo
const logo = document.querySelector('.logo');
logo.classList.add('slide-left');
setTimeout(() => logo.classList.add('visible'), 300);

// Liens nav
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link, i) => {
    link.classList.add('slide-right');
    setTimeout(() => link.classList.add('visible'), 500 + (i * 100));
});

// Téléphone
const navPhone = document.querySelector('.nav-phone');
navPhone.classList.add('slide-right');
setTimeout(() => navPhone.classList.add('visible'), 900);

// Hero cascade
const heroElements = [
    { el: document.querySelector('.hero-eyebrow'), delay: 800 },
    { el: document.querySelector('.hero h1'),      delay: 1000 },
    { el: document.querySelector('.hero p'),       delay: 1200 },
    { el: document.querySelector('.hero-btns'),    delay: 1400 },
];

heroElements.forEach(({ el, delay }) => {
    if (!el) return;
    el.classList.add('slide-left');
    setTimeout(() => el.classList.add('visible'), delay);
});