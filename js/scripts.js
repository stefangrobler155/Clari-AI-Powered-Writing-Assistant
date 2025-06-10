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
  freePrice.innerHTML = 'R0<span>/month</span>';
  proPrice.innerHTML = 'R9.99<span>/month</span>';
});
yearlyBtn.addEventListener('click', () => {
  yearlyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  freePrice.innerHTML = 'R0<span>/year</span>';
  proPrice.innerHTML = 'R99.99<span>/year</span>';
});

// FAQ accordion
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the active class on the header
            this.classList.toggle('active');
            
            // Get the content element
            const content = this.nextElementSibling;
            
            // Toggle the content visibility
            if (content.classList.contains('open')) {
                content.classList.remove('open');
            } else {
                // Close all other open accordion items
                document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                    if (openContent !== content) {
                        openContent.classList.remove('open');
                        openContent.previousElementSibling.classList.remove('active');
                    }
                });
                
                // Open the clicked item
                content.classList.add('open');
            }
        });
    });
});

// Testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    let intervalId;
    const slideCount = slides.length;
    
    // Initialize carousel
    function initCarousel() {
        updateCarousel();
        startAutoPlay();
        
        // Event listeners for buttons
        prevBtn.addEventListener('click', goToPrevSlide);
        nextBtn.addEventListener('click', goToNextSlide);
        
        // Event listeners for indicators
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateCarousel();
                resetAutoPlay();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                goToNextSlide();
            }
        });
    }
    
    // Update carousel position and indicators
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to next slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Go to previous slide
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Start auto-play
    function startAutoPlay() {
        intervalId = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    }
    
    // Reset auto-play timer
    function resetAutoPlay() {
        clearInterval(intervalId);
        startAutoPlay();
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Pause on hover
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        resetAutoPlay();
    });
});