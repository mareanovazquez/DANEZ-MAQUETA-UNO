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
        
        // Crear los elementos de fondo con sus respectivas posiciones y velocidades
        const shapes = [
            { name: 'circle', class: 'shape--circle', color: 'var(--pilates-bg-color)', left: '10%', top: '30%', speedX: 0.02, speedY: -0.01 },
            { name: 'square', class: 'shape--square', color: 'var(--funcional-bg-color)', left: '40%', top: '50%', speedX: -0.03, speedY: 0.01 },
            { name: 'triangle', class: 'shape--triangle', color: 'var(--stretching-bg-color)', left: '70%', top: '60%', speedX: 0.01, speedY: 0.02 },
            { name: 'diamond', class: 'shape--diamond', color: 'var(--button-bg-color2)', left: '90%', top: '20%', speedX: -0.02, speedY: -0.03 },
            { name: 'circle', class: 'shape--circle', color: 'var(--pilates-bg-color)', left: '29%', top: '44%', speedX: 0.015, speedY: -0.02 },
            { name: 'square', class: 'shape--square', color: 'var(--funcional-bg-color)', left: '50%', top: '30%', speedX: -0.01, speedY: 0.025 },
            { name: 'triangle', class: 'shape--triangle', color: 'var(--stretching-bg-color)', left: '75%', top: '40%', speedX: 0.03, speedY: 0.005 },
            { name: 'diamond', class: 'shape--diamond', color: 'var(--button-bg-color2)', left: '85%', top: '70%', speedX: -0.015, speedY: 0.015 }
        ];
        
        // Crear las formas y asignarles sus posiciones y velocidades
        for (let i = 0; i < shapes.length; i++) {
            const shape = document.createElement('div');
            
            shape.className = `background-shape ${shapes[i].class}`;
            shape.style.color = shapes[i].color;
            
            // Asignar posiciones específicas
            shape.style.left = shapes[i].left;
            shape.style.top = shapes[i].top;
            
            // Asignar velocidades específicas
            shape.dataset.speedX = shapes[i].speedX.toFixed(3); // velocidad X controlada
            shape.dataset.speedY = shapes[i].speedY.toFixed(3); // velocidad Y controlada
            
            bgElementsContainer.appendChild(shape);
        }
    }
    
    // Función para mover los elementos con efecto parallax (y rotación)
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
            
            // Aplicar la transformación de movimiento y rotación
            shape.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${scrollPosition * 0.05}deg)`;
        });
    }
    
    // Aplicar el movimiento al hacer scroll
    window.addEventListener('scroll', moveShapes);
    
    // Llamar una vez al cargar para establecer posiciones iniciales
    moveShapes();
});
