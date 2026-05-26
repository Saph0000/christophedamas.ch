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