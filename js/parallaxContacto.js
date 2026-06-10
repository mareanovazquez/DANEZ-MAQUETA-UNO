document.addEventListener('DOMContentLoaded', function() {
    let containerContacto = document.getElementById('contacto');

    if (!containerContacto) return;

    function parallaxContacto() {
        let scrollTop = window.scrollY;
        let containerTop = containerContacto.offsetTop;
        let containerHeight = containerContacto.offsetHeight;
        let windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > containerTop && scrollTop < containerTop + containerHeight) {
            let posicion = (scrollTop - containerTop) * 0.2;
            containerContacto.style.backgroundPosition = `center ${posicion}px`;
        }
    }

    window.addEventListener('scroll', parallaxContacto);
});
