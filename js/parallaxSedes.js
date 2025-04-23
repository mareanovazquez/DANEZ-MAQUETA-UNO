// Código JavaScript para controlar el efecto parallax al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const parallaxRows = document.querySelectorAll('.parallax-row');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Aplicar diferentes velocidades a cada fila
        parallaxRows.forEach((row, index) => {
            const direction = row.classList.contains('parallax-row--right') ? 1 : -1;
            const speed = 0.1 + (index * 0.05); // Velocidades diferentes para cada fila
            
            // Calculamos la posición basada en el scroll
            const position = direction * scrollPosition * speed;
            
            // Aplicamos la transformación
            row.style.transform = `translateX(${position}px)`;
        });
    });
});