// Scroll-triggered fade-in animations
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
fadeIns.forEach(el => observer.observe(el));

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Pricing toggle
const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');
const freePrice = document.getElementById('free-price');
const proPrice = document.getElementById('pro-price');
monthlyBtn.addEventListener('click', () => {
  monthlyBtn.classList.add('active');
  yearlyBtn.classList.remove('active');
  freePrice.innerHTML = '$0<span>/month</span>';
  proPrice.innerHTML = '$9.99<span>/month</span>';
});
yearlyBtn.addEventListener('click', () => {
  yearlyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  freePrice.innerHTML = '$0<span>/year</span>';
  proPrice.innerHTML = '$99.99<span>/year</span>';
});

// FAQ accordion


// Testimonial slider
