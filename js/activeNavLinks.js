document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los enlaces del navbar (tanto móvil como desktop)
    const mobileNavLinks = document.querySelectorAll('.nav-mobile__link');
    const desktopNavLinks = document.querySelectorAll('.nav-desktop__link:not(.nav-desktop__link--icon)');

    // Función para determinar qué sección está actualmente visible
    function setActiveNavLink() {
        // Obtener todas las secciones
        const sections = document.querySelectorAll('section[id], main[id]');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.getAttribute('id');

            // Ajustar el umbral según tu necesidad (100 px desde el top del viewport)
            if (rect.top <= 100 && rect.bottom >= 100) {
                // Remover la clase activa de todos los enlaces
                mobileNavLinks.forEach(link => {
                    link.classList.remove('nav-mobile__link--active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-mobile__link--active');
                    }
                });

                desktopNavLinks.forEach(link => {
                    link.classList.remove('nav-desktop__link--active');
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
        link.addEventListener('click', function () {
            // Remover clase activa de todos los enlaces
            mobileNavLinks.forEach(l => l.classList.remove('nav-mobile__link--active'));

            // Añadir clase activa al enlace clicado
            this.classList.add('nav-mobile__link--active');
        });
    });

    // Añadir evento click para cada enlace del navbar desktop
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remover clase activa de todos los enlaces
            desktopNavLinks.forEach(l => l.classList.remove('nav-desktop__link--active'));

            // Añadir clase activa al enlace clicado
            this.classList.add('nav-desktop__link--active');
        });
    });
});
