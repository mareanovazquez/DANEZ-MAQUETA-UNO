document.addEventListener('DOMContentLoaded', function () {
    // Verificar si estamos en la sección de staff (para no cargar innecesariamente en otras páginas)
    const staffSection = document.getElementById('staff');
    if (!staffSection) return;
    
    // Crear el contenedor de elementos de fondo si no existe
    let bgElementsContainer = document.querySelector('.staff-background-elements');
    if (!bgElementsContainer) {
        bgElementsContainer = document.createElement('div');
        bgElementsContainer.className = 'staff-background-elements';
        staffSection.appendChild(bgElementsContainer);
        
        // Crear los elementos de fondo
        const shapes = [
            { name: 'circle', class: 'shape--circle', color: 'var(--pilates-bg-color)' },
            { name: 'square', class: 'shape--square', color: 'var(--funcional-bg-color)' },
            { name: 'triangle', class: 'shape--triangle', color: 'var(--stretching-bg-color)' },
            { name: 'diamond', class: 'shape--diamond', color: 'var(--button-bg-color2)' }
        ];
        
        // Crear múltiples formas con posiciones aleatorias
        for (let i = 0; i < 9; i++) {
            const shapeIndex = i % shapes.length;
            const shape = document.createElement('div');
            
            shape.className = `background-shape ${shapes[shapeIndex].class}`;
            shape.style.color = shapes[shapeIndex].color;
            
            // Asignar posiciones iniciales aleatorias
            const x = Math.random() * 100; // posición X aleatoria (0-100%)
            const y = 20 + (i * 20) % 60; // distribuir verticalmente (20-80%)
            
            shape.style.left = `${x}%`;
            shape.style.top = `${y}%`;
            
            // Asignar velocidad y dirección de movimiento aleatoria
            shape.dataset.speedX = (Math.random() * 0.05 - 0.025).toFixed(3); // entre -0.025 y 0.025
            shape.dataset.speedY = (Math.random() * 0.05 - 0.025).toFixed(3); // entre -0.025 y 0.025
            
            bgElementsContainer.appendChild(shape);
        }
    }
    
    // Función para mover los elementos con efecto parallax
    function moveShapes() {
        const scrollPosition = window.scrollY;
        const shapes = document.querySelectorAll('.background-shape');
        
        shapes.forEach(shape => {
            const speedX = parseFloat(shape.dataset.speedX);
            const speedY = parseFloat(shape.dataset.speedY);
            
            // Obtener la posición inicial (extraer el número del estilo)
            const initialX = parseFloat(shape.style.left);
            const initialY = parseFloat(shape.style.top);
            
            // Calcular el desplazamiento basado en el scroll
            const offsetX = scrollPosition * speedX;
            const offsetY = scrollPosition * speedY;
            
            // Aplicar la transformación sin cambiar la posición base
            shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    }
    
    // Aplicar el movimiento al hacer scroll
    window.addEventListener('scroll', moveShapes);
    
    // Llamar una vez al cargar para establecer posiciones iniciales
    moveShapes();
});