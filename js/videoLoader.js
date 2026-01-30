document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.main__video');
    const loadingOverlay = document.getElementById('videoLoading');
    
    // Si no hay video o loading overlay, salir
    if (!video || !loadingOverlay) return;
    
    // Función para ocultar el loading
    function hideLoading() {
        loadingOverlay.classList.add('video-loading--hide');
        
        // Remover el elemento después de la animación
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }
    
    // Verificar si el video ya está listo
    if (video.readyState >= 3) {
        // El video ya está listo (tiene suficiente data para reproducir)
        hideLoading();
    } else {
        // Esperar a que el video pueda reproducirse
        video.addEventListener('canplay', hideLoading, { once: true });
        
        // Fallback: ocultar después de 3 segundos aunque el video no esté listo
        setTimeout(hideLoading, 3000);
    }
});