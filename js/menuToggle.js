// Obtén los elementos principales una sola vez
let toggleButton = document.getElementById("toggle");
let mobileMenu = document.getElementById("mobileMenu");
let menuLinks = document.querySelectorAll(".nav-mobile__link");

// Función para cerrar el menú
function closeMenu() {
    mobileMenu.classList.remove("nav-mobile__menu--active");
    toggleButton.classList.remove("on");
    
    // Remover listeners cuando se cierra el menú
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
}

// Función para abrir el menú
function openMenu() {
    mobileMenu.classList.add("nav-mobile__menu--active");
    toggleButton.classList.add("on");
    
    // Agregar listeners cuando se abre el menú (con delay para evitar cierre inmediato)
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    }, 100);
}

// Manejar clic/toque fuera del menú
function handleOutsideClick(event) {
    // Solo procesar si el menú está abierto
    if (!mobileMenu.classList.contains("nav-mobile__menu--active")) {
        return;
    }
    
    if (!mobileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        closeMenu();
    }
}

// Agrega un evento de clic al botón toggle
toggleButton.addEventListener("click", function () {
    const isMenuOpen = toggleButton.classList.contains("on");
    
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Agrega un controlador de eventos a cada enlace para cerrar el menú cuando se hace clic
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Cierra el menú al presionar la tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && mobileMenu.classList.contains("nav-mobile__menu--active")) {
        closeMenu();
    }
});