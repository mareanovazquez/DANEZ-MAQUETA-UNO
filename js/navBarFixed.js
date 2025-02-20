document.addEventListener("scroll", function () {
    let navBarDesktop = document.getElementById('navbar-desktop')
    let principal = document.getElementById("principal");

    // Calcula la posición de sectionUno
    let principalRect = principal.offsetTop + principal.offsetHeight;
    
    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > principalRect) {

        navBarDesktop.classList.add("fixed");
    } else {
        navBarDesktop.classList.remove("fixed");
    }
});
