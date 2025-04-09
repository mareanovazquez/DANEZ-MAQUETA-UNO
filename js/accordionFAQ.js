document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de preguntas
    const buttons = document.querySelectorAll('.faq__question');
    
    // Agregar evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle clase activa en el botón
            this.classList.toggle('faq__question--active');
            
            // Obtener el contenedor de respuesta
            const answer = this.nextElementSibling;
            
            // Toggle clase activa en la respuesta
            answer.classList.toggle('faq__answer--active');
            
            // Cerrar otras respuestas abiertas (comportamiento de acordeón)
            buttons.forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('faq__question--active');
                    otherButton.nextElementSibling.classList.remove('faq__answer--active');
                }
            });
        });
    });

    
// Añadir al final del evento DOMContentLoaded existente
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Cerrar todos los acordeones abiertos
        document.querySelectorAll('.faq__question--active').forEach(activeButton => {
            // Simular un clic en el botón activo para cerrarlo
            activeButton.click();
            // O alternativamente, remover directamente las clases:
            // activeButton.classList.remove('faq__question--active');
            // activeButton.nextElementSibling.classList.remove('faq__answer--active');
        });
    }
});
})