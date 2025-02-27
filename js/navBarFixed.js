document.addEventListener("scroll", function () {
    // Seleccionamos los elementos usando las nuevas clases BEM
    let navDesktop = document.getElementById('navbar-desktop');
    let mainSection = document.getElementById("principal");

    // Calcula la posición del final de la sección principal
    let mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;
    
    // Agrega o quita la clase modificadora BEM según la posición de scroll
    if (window.scrollY > mainSectionBottom) {
    
        navDesktop.classList.add("nav-desktop--fixed");
    } else {
        navDesktop.classList.remove("nav-desktop--fixed");
    }
});