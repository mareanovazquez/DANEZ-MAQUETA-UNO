document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos de dirección de cada sede
    let sedeCampana = document.getElementById('sedeCampana');
    let sedeCuenca = document.getElementById('sedeCuenca');
    let contenedorModalMap = document.getElementById('contenedorModalMap');

    // Seleccionar los nuevos botones de mapa en la sección de sedes
let sedeCampanaMap = document.getElementById('sedeCampanaMap');
let sedeCuencaMap = document.getElementById('sedeCuencaMap');

    // URLs de iframe de Google Maps para cada sede
    const mapasIframe = {
        'campana': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.097090688696!2d-58.46681692452988!3d-34.602799172374226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca10199d2c21%3A0x7e01d374eb4986e9!2sAv.%20Campana%201644%2C%20C1416%20CABA!5e0!3m2!1ses-419!2sar!4v1712193694867!5m2!1ses-419!2sar',
        'cuenca': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9887037113933!2d-58.48240602452975!3d-34.60566057237247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0a419d3497%3A0xbc3dc55c3cbaa59!2sCuenca%202118%2C%20C1416%20CABA!5e0!3m2!1ses-419!2sar!4v1712193743213!5m2!1ses-419!2sar'
    };

    // Función para desplegar el modal con el mapa
    function desplegarModalMapa(sede) {
        // Crear el contenedor del modal y ya le agrega la clase para animación y el id único
        let modal = document.createElement('div');
        modal.id = 'modalMapa';
        modal.classList.add('modal-mapa');

        // Crear el contenido del modal y se le agrega una clase para el estilo
        let contenidoModal = document.createElement('div');
        contenidoModal.classList.add('modal-mapa__contenido');

        // Crear el título del modal en un H3 y le agrega una clase para el estilo
        // y el texto del título
        let tituloModal = document.createElement('h3');
        tituloModal.classList.add('modal-mapa__titulo');
        tituloModal.textContent = `SEDE ${sede.toUpperCase()}`;

        // Crear el contenedor del mapa y le agrega una clase para el estilo
        // y el id único para el iframe
        let mapaContenedor = document.createElement('div');
        mapaContenedor.id = 'mapa';
        mapaContenedor.classList.add('modal-mapa__mapa');

        // Crear un iframe para el mapa de Google
        let iframeMapa = document.createElement('iframe');
        iframeMapa.style.width = '100%';
        iframeMapa.style.height = '400px';
        iframeMapa.style.border = '0';

        // Configurar el mapa según la sede
        if (sede === 'campana' || sede === 'cuenca') {
            // Usar la URL de iframe predefinida
            iframeMapa.src = mapasIframe[sede];
            // Agregar atributos necesarios para accesibilidad
            iframeMapa.setAttribute('allowfullscreen', '');
            iframeMapa.setAttribute('loading', 'lazy');
            iframeMapa.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        }

        mapaContenedor.appendChild(iframeMapa);

        // Crear el elemento div que funcionará como botón para cerrar el modal
        let btnCerrarModal = document.createElement('div');
        // Añadir la clase CSS 'modal-mapa__cerrar' para dar estilo al botón de cierre
        btnCerrarModal.classList.add('modal-mapa__cerrar');
        // Asignar un ID 'btnCerrarMapa' para poder referenciar este elemento específico más tarde
        btnCerrarModal.id = 'btnCerrarMapa';

        // Crear un elemento <i> que contendrá el icono de cierre (X)
        let iconoCerrar = document.createElement('i');
        // Añadir las clases de Font Awesome para mostrar el icono X ('times')
        // 'fa-solid' define el estilo del icono y 'fa-times' especifica que es una X
        iconoCerrar.classList.add('fa-solid', 'fa-times');
        // Insertar el elemento icono como hijo del botón de cierre
        btnCerrarModal.appendChild(iconoCerrar);

        // Agregar evento para cerrar el modal
        btnCerrarModal.addEventListener('click', cerrarModalMapa);

        // Ensamblar el modal
        contenidoModal.appendChild(tituloModal);
        contenidoModal.appendChild(mapaContenedor);
        contenidoModal.appendChild(btnCerrarModal);
        modal.appendChild(contenidoModal);

        // Agregar el modal al contenedor
        contenedorModalMap.appendChild(modal);

        // Mostrar el modal suavemente
        setTimeout(() => {
            modal.classList.add('modal-mapa--active');
        }, 10);
    }

    // Función para cerrar el modal
    function cerrarModalMapa() {
        let modal = document.getElementById('modalMapa');

        // Añadir una clase para animar la salida
        modal.classList.remove('modal-mapa--active');

        // Eliminar el modal después de la animación
        setTimeout(() => {
            modal.remove();
        }, 300); // Mismo tiempo que la duración de la transición CSS
    }

    // Asignar eventos de clic a las direcciones de las sedes
    if (sedeCampana) {
        sedeCampana.addEventListener('click', function () {
            desplegarModalMapa('campana');
        });
        // Agregar cursor pointer para indicar que es clickeable
        sedeCampana.style.cursor = 'pointer';
    }

    if (sedeCuenca) {
        sedeCuenca.addEventListener('click', function () {
            desplegarModalMapa('cuenca');
        });
        // Agregar cursor pointer para indicar que es clickeable
        sedeCuenca.style.cursor = 'pointer';
    }

    // Asignar eventos de clic a los nuevos botones de mapa en la sección de sedes
if (sedeCampanaMap) {
    sedeCampanaMap.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        desplegarModalMapa('campana');
    });
}

if (sedeCuencaMap) {
    sedeCuencaMap.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        desplegarModalMapa('cuenca');
    });
}

    // Si el usuario presiona la tecla escape
    window.addEventListener("keydown", function (event) {
        let modal = document.getElementById('modalMapa');
        if (event.key === 'Escape' && modal) {
            cerrarModalMapa();
        }
    });

    // Si el usuario hace clic fuera del modal
    window.addEventListener('click', function (event) {
        let modal = document.getElementById('modalMapa');
        if (modal && event.target === modal) {
            cerrarModalMapa();
        }
    });
});