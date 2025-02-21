// Obtén el elemento del botón toggle usando el id
let toggleButton = document.getElementById("toggle");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function () {
    // Toggle de la clase "on" en el botón (mantenemos "on" como estado, no como clase BEM)
    toggleButton.classList.toggle("on");

    // Obtén el elemento del menú móvil
    let mobileMenu = document.getElementById("menu");

    // Alternar la visibilidad del menú
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
    }
});

// Obtén todos los elementos de enlace del menú móvil usando la nueva clase BEM
let menuLinks = document.querySelectorAll(".nav-mobile__link");

// Agrega un controlador de eventos a cada enlace para cerrar el menú cuando se hace clic
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Obtén el elemento del menú móvil
        let mobileMenu = document.getElementById("menu");

        // Cierra el menú
        mobileMenu.style.display = "none";

        // Asegúrate de quitar la clase "on" del botón toggle
        if (toggleButton.classList.contains("on")) {
            toggleButton.classList.remove("on");
        }
    });
});

// Cierra el menú al presionar la tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        // Obtén el elemento del menú para asegurarnos de que existe
        let mobileMenu = document.getElementById("menu");
        
        // Cierra el menú y resetea el botón toggle
        if (mobileMenu) {
            mobileMenu.style.display = "none";
        }
        
        if (toggleButton) {
            toggleButton.classList.remove("on");
        }
    }
});