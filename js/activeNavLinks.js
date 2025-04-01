document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces del navbar (tanto móvil como desktop)
    const mobileNavLinks = document.querySelectorAll('.nav-mobile__link');
    const desktopNavLinks = document.querySelectorAll('.nav-desktop__link:not(.nav-desktop__link--icon)');
    
    // Función para determinar qué sección está actualmente visible
    function setActiveNavLink() {
        // Obtener la posición actual de scroll
        const scrollPosition = window.scrollY;
        
        // Obtener todas las secciones
        const sections = document.querySelectorAll('section[id], main[id]');
        
        // Verificar cada sección para ver si está en la vista actual
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset para mejorar la experiencia
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover la clase activa de todos los enlaces
                mobileNavLinks.forEach(link => {
                    link.classList.remove('nav-mobile__link--active');
                });
                desktopNavLinks.forEach(link => {
                    link.classList.remove('nav-desktop__link--active');
                });
                
                // Añadir la clase activa al enlace correspondiente a la sección actual
                mobileNavLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-mobile__link--active');
                    }
                });
                desktopNavLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-desktop__link--active');
                    }
                });
            }
        });
    }
    
    // Establecer enlace activo al cargar la página
    setActiveNavLink();
    
    // Establecer enlace activo al hacer scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Añadir evento click para cada enlace del navbar móvil
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover clase activa de todos los enlaces
            mobileNavLinks.forEach(l => l.classList.remove('nav-mobile__link--active'));
            
            // Añadir clase activa al enlace clicado
            this.classList.add('nav-mobile__link--active');
        });
    });
    
    // Añadir evento click para cada enlace del navbar desktop
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover clase activa de todos los enlaces
            desktopNavLinks.forEach(l => l.classList.remove('nav-desktop__link--active'));
            
            // Añadir clase activa al enlace clicado
            this.classList.add('nav-desktop__link--active');
        });
    });
});