document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.main__video');
    const loadingOverlay = document.getElementById('videoLoading');

    if (!videos.length || !loadingOverlay) return;

    let hidden = false;

    function hideLoading() {
        if (hidden) return;
        hidden = true;
        loadingOverlay.classList.add('video-loading--hide');
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }

    function getVisibleVideo() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            return document.querySelector('.main__video--mobile');
        }
        return document.querySelector('.main__video--desktop');
    }

    function watchVideo(video) {
        if (!video) return;
        if (video.readyState >= 3) {
            hideLoading();
        } else {
            video.addEventListener('canplay', hideLoading, { once: true });
        }
    }

    const visibleVideo = getVisibleVideo();
    watchVideo(visibleVideo);

    setTimeout(hideLoading, 3000);
});
