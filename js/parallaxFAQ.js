document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos que queremos animar
    const pilates = document.querySelector('.background-word--pilates');
    const funcional = document.querySelector('.background-word--funcional');
    const stretching = document.querySelector('.background-word--stretching');

    // Velocidades diferentes para cada palabra
    const pilatesSpeed = 0.05;     // Positivo: de izquierda a derecha
    const funcionalSpeed = -0.04;  // Negativo: de derecha a izquierda
    const stretchingSpeed = 0.03;  // Positivo: de izquierda a derecha (cambiado)

    // Función para manejar el scroll
    window.addEventListener('scroll', function () {
        // Obtener posición actual de scroll
        const scrollPosition = window.scrollY;
        // Calcular nuevas posiciones basadas en el scroll
        const pilatesPosition = -30 + (scrollPosition * pilatesSpeed);
        const funcionalPosition = -50 - (scrollPosition * funcionalSpeed);
        const stretchingPosition = -20 - (scrollPosition * stretchingSpeed);

        // Aplicar las nuevas posiciones
        pilates.style.transform = `translateX(${pilatesPosition}%) translateY(-50%)`;
        funcional.style.transform = `translateX(${funcionalPosition}%) translateY(-50%)`;
        stretching.style.transform = `translateX(${stretchingPosition}%) translateY(-50%)`;
    });

    // Disparar el evento de scroll al cargar para posicionar inicialmente
    window.dispatchEvent(new Event('scroll'));
});