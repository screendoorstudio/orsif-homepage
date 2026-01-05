/**
 * ORSIF Homepage JavaScript
 * Handles navigation, scroll effects, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            // Toggle hamburger animation
            const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                lines[0].style.transform = '';
                lines[1].style.opacity = '';
                lines[2].style.transform = '';
            }
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
                    lines[0].style.transform = '';
                    lines[1].style.opacity = '';
                    lines[2].style.transform = '';
                }
            });
        });
    }

    // Navbar Scroll Effect
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation class to elements
    const animatedElements = document.querySelectorAll(
        '.stat-card, .hazard-card, .path-card, .value-item, .resource-card, .credibility-item'
    );

    animatedElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.transitionDelay = (index % 4) * 0.1 + 's';
        animateOnScroll.observe(el);
    });

    // Handle animation class
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);

    // Newsletter Form Handling (prevent default, show feedback)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email) {
                // Here you would typically send to your backend
                // For now, just show feedback
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.style.backgroundColor = '#27ae60';
                emailInput.value = '';

                setTimeout(function() {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 3000);
            }
        });
    }

    // Stats Counter Animation
    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format the number
            let display = '';
            if (target >= 1000000) {
                display = (current / 1000000).toFixed(1) + 'M+';
            } else if (target >= 1000) {
                display = Math.floor(current / 1000) + 'M+';
            } else if (Number.isInteger(target)) {
                display = Math.floor(current) + '%';
            } else {
                display = current.toFixed(1) + '%';
            }

            element.textContent = display;
        }, 16);
    }

    // Observe stats section for counter animation
    const statsSection = document.querySelector('.statistics');
    let statsAnimated = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    // Stats are static text for now, animation could be added here
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    // Scroll Indicator Click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const statisticsSection = document.getElementById('statistics');
            if (statisticsSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = statisticsSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
            lines[0].style.transform = '';
            lines[1].style.opacity = '';
            lines[2].style.transform = '';
        }
    });

    console.log('ORSIF Homepage initialized');
});
