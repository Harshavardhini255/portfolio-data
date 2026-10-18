// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle aria-expanded
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded.toString());
        
        // Toggle hamburger/close icon
        const icon = navToggle.querySelector('i');
        if (icon) {
            if (isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle) {
        const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Smooth scroll offset for fixed nav
document.addEventListener('DOMContentLoaded', () => {
    // Add padding to body to account for fixed nav
    const navHeight = document.querySelector('.nav')?.offsetHeight || 70;
    document.documentElement.style.scrollPaddingTop = navHeight + 'px';
    
    // Set initial aria-expanded
    if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// Update scroll padding on resize
window.addEventListener('resize', () => {
    const navHeight = document.querySelector('.nav')?.offsetHeight || 70;
    document.documentElement.style.scrollPaddingTop = navHeight + 'px';
    
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        navToggle.setAttribute('aria-expanded', 'false');
    }
});