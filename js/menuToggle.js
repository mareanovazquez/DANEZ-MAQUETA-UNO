// Obtén los elementos principales una sola vez
let toggleButton = document.getElementById("toggle");
let mobileMenu = document.getElementById("mobileMenu");
let menuLinks = document.querySelectorAll(".nav-mobile__link");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function () {
    // Toggle de la clase "on" en el botón (mantenemos "on" como estado)
    toggleButton.classList.toggle("on");

    // Alternar la clase para la transición deslizante
    mobileMenu.classList.toggle("nav-mobile__menu--active");
});

// Agrega un controlador de eventos a cada enlace para cerrar el menú cuando se hace clic
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Cierra el menú quitando la clase active
        mobileMenu.classList.remove("nav-mobile__menu--active");

        // Asegúrate de quitar la clase "on" del botón toggle
        if (toggleButton.classList.contains("on")) {
            toggleButton.classList.remove("on");
        }
    });
});

// Cierra el menú al presionar la tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        // Cierra el menú quitando la clase active
        if (mobileMenu) {
            mobileMenu.classList.remove("nav-mobile__menu--active");
        }

        if (toggleButton) {
            toggleButton.classList.remove("on");
        }
    }
});