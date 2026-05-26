window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});


// Nav Animation on scroll
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    start: 1, // triggers as soon as user scrolls down 1px
    onEnter: () => {
        gsap.to(".nav_background", {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    },

    onLeaveBack: () => {
        gsap.to(".nav_background", {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    },
});

// Mobile menu toggle
var nav = document.querySelector('.nav');
var menuToggle = document.querySelector('.nav_menu-toggle');


menuToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', isOpen);

});

document.querySelectorAll('.nav_list a, .nav_mobile-actions a').forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');

    });
});

// Theme toggle

document.querySelector('.nav_theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

document.querySelector('.video_play-btn').addEventListener('click', function () {
    const facade = document.querySelector('.video_facade');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1';
    iframe.className = 'video_iframe';
    iframe.title = 'Christophe Damas – Swiss Paralympic Ski Team';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    facade.replaceWith(iframe);
});