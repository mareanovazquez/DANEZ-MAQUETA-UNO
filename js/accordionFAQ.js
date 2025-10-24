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
            
        });
    });

    })