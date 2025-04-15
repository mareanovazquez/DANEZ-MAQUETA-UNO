document.addEventListener('DOMContentLoaded', function () {
    const pilates = document.querySelector('.background-word--pilates');
    const funcional = document.querySelector('.background-word--funcional');
    const stretching = document.querySelector('.background-word--stretching');

    // Offsets iniciales (en porcentaje del ancho del contenedor)
    const pilatesStart = -40;
    const funcionalStart = 50;
    const stretchingStart = -20;

    const pilatesSpeed = 0.05;
    const funcionalSpeed = -0.04;
    const stretchingSpeed = 0.03;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        const pilatesX = pilatesStart + (scrollPosition * pilatesSpeed);
        const funcionalX = funcionalStart + (scrollPosition * funcionalSpeed);
        const stretchingX = stretchingStart + (scrollPosition * stretchingSpeed);

        pilates.style.transform = `translateX(${pilatesX}%) translateY(-50%)`;
        funcional.style.transform = `translateX(${funcionalX}%) translateY(-50%)`;
        stretching.style.transform = `translateX(${stretchingX}%) translateY(-50%)`;
    });

    window.dispatchEvent(new Event('scroll'));
});
