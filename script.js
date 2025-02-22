// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// Project Details Toggle
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details) {
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                details.classList.remove('hidden');
                button.textContent = 'Hide Details';
            } else {
                details.classList.add('hidden');
                setTimeout(() => {
                    details.style.display = 'none';
                }, 300);
                button.textContent = 'Details';
            }
        }
    });
});

// CTA Button Action
const ctaButton = document.querySelector('.cta');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        window.scrollTo({ top: document.querySelector('#contact').offsetTop, behavior: 'smooth' });
    });
}

// Staggered Fade-In
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked on mobile
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}