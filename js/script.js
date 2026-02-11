/* === PORTFOLIO JAVASCRIPT - script.js
Created for: My portfolio Website

This file contains ALL interactive functionality in the portfolio.
It handles:
- Page loading animation
- Mobile menu
- Smooth scrolling
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
    navLinks.classList.toggle('active');
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
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', //Smooth scrolling instead of instant
                block: 'start' // Align to top of section   
            });
        }         
    });
});

/* === NAVBAR SCROLL EFFECT === */
/* Adds shadow to navbar when user scrolls down */

window.addEventListener('scroll', () => {
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
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
};

// Create intersection Observer instance
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
});
}, observerOptions);

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
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Watch about text sections
document.querySelectorAll('.about-text').forEach(el => observer.observe(el));

// Watch about stats section
document.querySelectorAll('.about-stats').forEach(el => observer.observe(el));

// === ACTIVE NAVIGATION HIGHLIGHT ===
// Highlights the current section in the navigation menu as you scroll

window.addEventListener('scroll', () => {
    let current = "";

    const sections = document.querySelectorAll('section');

    // Loop through each section
    sections.forEach(section => {
        // Get section's position from top of page
        const sectionTop = section.offsetTop;

        // Check if you've scrolled past this section
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {

        // Remove 'active' class from all links
        link.classList.remove('active');

        // Get the link's href (like "#about")
        const linkHref = link.getAttribute('href').slice(1); // Remove the # symbol

        // If this link matches the current section, add 'active' class
        if (linkHref === current) {
            link.classList.add('active');
        }
    });
});

// === CONTACT FORM WITH EMAILJS ===
// Handles contact form submission and sends email using EmailJS service

// EMAILJS CREDENTIALS
const EMAILJS_PUBLIC_KEY = "dvTwS8mDyP75f3at1"
const EMAILJS_SERVICE_ID = "service_yz5fzzx"
const EMAILJS_TEMPLATE_ID = "template_8qpltmc"

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Get contact form element
const contactForm = document.getElementById('contactForm');

// If form exists on page, adds submit handler
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Prevent default form submission
        e.preventDefault();

        // Get form data from input fields
        const formData = {
            from_name: document.getElementById('name').value, // Sender's name
            from_email: document.getElementById('email').value, // Sender's email
            message: document.getElementById('message').value // Message content
        };

        // === CHECKS IF EMAILJS IS CONFIGURED ===
        if (EMAILJS_PUBLIC_KEY === 'dvTwS8mDyP75f3at1' ||
            EMAILJS_SERVICE_ID === 'service_zk0yz9a' ||
            EMAILJS_TEMPLATE_ID === 'template_m39jcyo') {
            }             
        });
        // Reset the form
        contactForm.requestFullscreen();
        return;
}

// === SEND EMAIL VIA EMAILJS ===
// Change button text to show that it's sending
const submitButton = contactForm.querySelector('.form-submit');
const originalButtonText = submitButton.textContent;
submitButton.textContent = 'Sending...';
submitButton.disabled = true; // To prevent mul tiple submissions

// Send email using EmailJS
emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);

    alert('✅ Thank you for your message!\n\nI will get back to you as soon as possible.');

    // Reset the form
    contactForm.reset();

    // Restore button
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
})