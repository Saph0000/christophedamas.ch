window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

gsap.registerPlugin(SplitText, ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

const images = gsap.utils.toArray(".preloader_image");
const imageWrappers = gsap.utils.toArray(".preloader_image-wrapper");

const heroBgWrapper = document.querySelector(".hero_background-image-wrapper");

// LAST IMAGE
const lastImage = images[images.length - 1];


// SPLIT TEXT
const split = SplitText.create(".preloader_text", {
    type: "words, chars",
    mask: "words"
});


// SET IMAGE STACKING
gsap.set(images, {
    zIndex: (i, target, arr) => arr.length - i
});


// TIMELINE
const tl = gsap.timeline();


// TEXT IN
tl.from(split.words, {
    yPercent: 100,
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.1
});


// IMAGE WRAPPER REVEAL
tl.from(imageWrappers, {
    height: 0,
    duration: 1.2,
    ease: "power4.inOut"
}, "-=0.5");


// IMAGE PEEL ANIMATION
images.forEach((image, index) => {

    // don't remove last image
    if (index !== images.length - 1) {

        tl.to(image, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.2,
            ease: "power4.inOut"
        }, "-=0.5");

    }

});




// PRELOADER OUT
tl.to(".preloader", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    pointerEvents: "none"
}, "-=0.05");


// HERO CONTENT IN
tl.from(".hero_title", {
    y: 100,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out"
}, "-=0.6");

tl.from(".hero_description, .button-wrapper", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
}, "-=0.4");


// Nav Animation on scroll
ScrollTrigger.create({
    start: "20% 80%", // triggers as soon as user scrolls down 20% of the page and the trigger element is 80% from the top of the viewport
    onEnter: () => {
        gsap.to(".nav_background", {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
        }),
            gsap.to(".nav", {
                top: "-1rem",
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
        gsap.to(".nav", {
            top: "0rem",
            duration: 0.3,
            ease: "power2.out",
        });
    },
});

// Mobile menu toggle
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.nav_menu-toggle');


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