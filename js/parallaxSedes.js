document.addEventListener('DOMContentLoaded', function() {
    const parallaxRows = document.querySelectorAll('.parallax-row');
    
    // Establecer posición inicial de las filas
    parallaxRows.forEach((row, index) => {
        const direction = row.classList.contains('parallax-row--right') ? 1 : -1;
        // Posición inicial alternada
        row.style.transform = `translateX(${direction * -25}%)`;
    });
    
    window.addEventListener('scroll', function() {
        // Obtener la posición de la sección de sedes para activar el parallax solo cuando está visible
        const sedesSection = document.querySelector('.parallax-wrapper');
        const sedesBounds = sedesSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Solo activar el parallax cuando la sección está visible
        if (sedesBounds.top < windowHeight && sedesBounds.bottom > 0) {
            const scrollPosition = window.scrollY;
            
            // Calcular la posición relativa al elemento
            const sectionTop = sedesSection.offsetTop;
            const relativeScroll = scrollPosition - sectionTop + windowHeight;
            
            // Aplicar diferentes velocidades a cada fila
            parallaxRows.forEach((row, index) => {
                const direction = row.classList.contains('parallax-row--right') ? 1 : -1;
                // Velocidades muy pronunciadas para que se note claramente el efecto
                const speed = 0.8 + (index * 0.3);
                
                // Calculamos la posición basada en el scroll con un offset inicial
                const offset = direction * -25; // Porcentaje de offset inicial
                const scrollEffect = direction * relativeScroll * speed;
                
                // Aplicamos la transformación
                row.style.transform = `translateX(calc(${offset}% + ${scrollEffect}px))`;
            });
        }
    });
});