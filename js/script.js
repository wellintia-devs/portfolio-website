/* === PORTFOLIO JAVASCRIPT - script.js
Created for: My portfolio Website

This file contains ALL interactive functionality in the portfolio.
It handles:
- Page loading animation
- Mobile menu
- Smooth schrolling
- Scroll animations
- Contact form (with EmailJS email sending)
=== */

/* === PAGE LOADING === */
/* Removes the loading screen once the page has been fully loaded */

// Wait for page to load (including images)
window.addEventListener('load', () => {
    // Wait 500ms (half a second) before hiding the loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        loadingScreen.classList.add('hide');
    }, 500);
});


/* === MOBILE MENU TOGGLE === */
/* Makes the hamburger menu on mobile device */

// Get hamburger button element
const menuToggle = document.getElementById('menuToggle');
//Get navigation link container
const navLinks = document.getElementById('navLinks');

// When hamburger is clicked, open/close the menu
menuToggle.addEventListener('click', () => {
    //Toggle 'active' class on hamburger (transforms it to X shape)
    menuToggle.classList.toggle('active');
    //Toggle 'active' class on menu (slides it in/out)
});

/* === CLOSE MOBILE MENU WHEN LINK CLICKED === */
/* Automatically closes mobile menu when user clicks a navigation link */

// Select all navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    // Add click listener to each link
    link.addEventListener('click', () => {
        // Remove 'active' class from hamburger (returns to hamburger shape)
        menuToggle.classList.remove('active');
        // Remove 'active' class from menu (slides out)
        navLinks.classList.remove('active');
    });
});

/* === SMOOTH SCROLLING === */
/* Makes clicking navigation links scroll smoothly to sections instead of jumping */

// Select all links that start with # (internal page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click listener to each link
    anchor.addEventListener('click', function (e) {
        // Prevent default jump behavior
        e.preventDefault();

        // Get the target section (the href value like "#about")
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // If target section exists, scroll to it smoothly
        if (targetSecion) {
            targetSection.scrollIntoView({
                behavior: 'smooth', //Smooth scrolling instead of instant
                block: 'start' // Align to top of section   
            });
        }         
    });
});

/* === NAVBAR SCROLL EFFECT === */
/* Adds shadow to navbar when user scrolls down */

windows.addEventListener('scroll', () => {
    // Get navbar element
    const navbar = document.getElementById('navbar');

    // Check if user has scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// === SCROLL ANIMATION ===
// Makes sections fade in and slide up when they appear on screen */

const observerOptions = {
    threshold: 0.1, // Triggen when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
};

// Create intersection Observer instance
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
});
}, observeroptions);

// === OBSERVE DIFFERENT ELEMENTS ===
// Tell the observer to watch these elements for animation

// Watch all elements with 'fade-in' class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Watch all section headers
document.querySelectorAll('.section-header').forEach(el => observer.observe(el));

// Watch all project cards
document.querySelectorAll('.project-card').forEach(el => observer.observe(el));

// Watch skill items with staggered delay for cool cascade effect
document.querySelectorAll('.skill-item').forEach((el, index) => {
    el.style.transitionDelay = '${index * 0.1}s';
    observer.observe(el);
});

// Watch about text section
document.querySelectorAll('.about-stats').forEach(el => observer.observe(el));

// Watch about stats section
document.querySelectorAll('.about-stats').forEach(el => observer.observe(el));

