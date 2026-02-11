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



