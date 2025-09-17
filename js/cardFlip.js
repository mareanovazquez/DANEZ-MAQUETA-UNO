/**
 * Maneja el efecto flip de las tarjetas en dispositivos táctiles
 * En dispositivos táctiles, el hover no funciona como en desktop,
 * por lo que necesitamos manejar el flip con clics
 */
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas
    const cards = document.querySelectorAll('.staff__card');
    
    // Verificar si es un dispositivo táctil
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Para dispositivos táctiles, agregar evento de clic
        cards.forEach(card => {
            card.addEventListener('click', function() {
                // Toggle de la clase para el flip
                this.classList.toggle('staff__card-flipped');
            });
        });
    }
});