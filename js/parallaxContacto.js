let containerContacto = document.getElementById('contacto');

function parallaxContacto() {
    // Obtiene la cantidad de píxeles que el usuario ha desplazado en la página
    let scrollTop = window.scrollY;
    
    // Obtiene la posición superior del elemento con respecto al documento
    let containerTop = containerContacto.offsetTop;
    
    // Obtiene la altura del elemento
    let containerHeight = containerContacto.offsetHeight;
    
    // Obtiene la altura visible de la ventana del navegador
    let windowHeight = window.innerHeight;

    // Verifica si la sección está visible en la pantalla
    if (scrollTop + windowHeight > containerTop && scrollTop < containerTop + containerHeight) {
        // Calcula la nueva posición del fondo para lograr el efecto parallax
        let posicion = (scrollTop - containerTop) * 0.2; // Ajusta la velocidad del efecto
        
        // Aplica la nueva posición del fondo manteniéndolo centrado horizontalmente
        containerContacto.style.backgroundPosition = `center ${posicion}px`;
    }
}

// Agrega un listener para ejecutar la función cuando el usuario haga scroll
window.addEventListener('scroll', parallaxContacto);
