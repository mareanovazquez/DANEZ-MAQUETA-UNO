document.addEventListener('DOMContentLoaded', function() {
    // Mostrar y ocultar botón "Volver arriba"
    var btnBackToTop = document.getElementById('btnBackToTop');

    window.addEventListener('scroll', function() {
        // Puedes cambiar 'nosotros' por la sección a partir de la cual
        // quieres que aparezca el botón, ya que 'experiencias' no existe en tu HTML
        var seccionReferencia = document.getElementById('nosotros');
        var seccionOffsetTop = seccionReferencia.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= seccionOffsetTop) {
            btnBackToTop.style.marginLeft = '0px';
        } else if (window.scrollY <= seccionOffsetTop / 2) {
            btnBackToTop.style.marginLeft = '-60px';
        }
    });
});