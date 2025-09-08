document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Si no hay elementos, salir silenciosamente
    if (elementsToAnimate.length === 0) {
        return;
    }
    
    // Crear un observador de intersección
    const observer = new IntersectionObserver((entries) => {
        // Para cada elemento observado
        entries.forEach(entry => {
            // Si el elemento es visible en el viewport
            if (entry.isIntersecting) {
                // Agregar la clase que dispara la animación
                entry.target.classList.add('visible');
                
                // Dejar de observar el elemento una vez que se ha animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Opciones del observador
        threshold: 0.15, // El elemento se considera visible cuando al menos el 15% está en el viewport
        rootMargin: '0px 0px -50px 0px' // Margen para activar un poco antes
    });
    
    // Observar cada elemento
    elementsToAnimate.forEach(elemento => {
        observer.observe(elemento);
    });
    
    // Función para comprobar si un elemento está en el viewport (fallback)
    function estaEnViewport(elemento) {
        const rect = elemento.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Verificar elementos que ya están visibles al cargar la página
    elementsToAnimate.forEach(elemento => {
        if (estaEnViewport(elemento)) {
            elemento.classList.add('visible');
            observer.unobserve(elemento);
        }
    });
    
    // Para navegadores que no soportan IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        // Desconectar el observador si existe
        if (observer) {
            observer.disconnect();
        }
        
        // Función para verificar elementos en el viewport durante el scroll
        function verificarElementosVisibles() {
            elementsToAnimate.forEach(elemento => {
                if (estaEnViewport(elemento) && !elemento.classList.contains('visible')) {
                    elemento.classList.add('visible');
                }
            });
        }
        
        // Verificar al hacer scroll
        window.addEventListener('scroll', verificarElementosVisibles);
        // Verificar al cargar la página
        verificarElementosVisibles();
    }
});