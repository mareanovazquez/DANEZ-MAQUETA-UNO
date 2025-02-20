// Obtén el elemento con el id "toggle"
let toggleButton = document.getElementById("toggle");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function () {
    // Toggle de la clase "on" en el botón
    toggleButton.classList.toggle("on");

    // Obtén el elemento con el id "menu"
    let menu = document.getElementById("menu");

    // Alternar la visibilidad del menú
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// Obtén todos los elementos con la clase "itemMenuMobile"
let menuItems = document.querySelectorAll(".itemMenuMobile");

// Agrega un controlador de eventos a cada elemento de menú para cerrar el menú cuando se hace clic
menuItems.forEach(item => {
    item.addEventListener("click", function () {
        // Obtén el elemento con el id "menu"
        let menu = document.getElementById("menu");

        // Cierra el menú
        menu.style.display = "none";

        // Asegúrate de quitar la clase "on" si es necesario
        if (toggleButton.classList.contains("on")) {
            toggleButton.classList.remove("on");
        }
    });
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        menu.style.display = "none";
        toggleButton.classList.remove("on")
    }
});