document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        // Evitamos el comportamiento predeterminado del formulario (recarga de la página)
        e.preventDefault();

        // Creamos un objeto con los datos del formulario y metadatos adicionales
        const formData = {
            // Capturamos los valores de los campos del formulario
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            activityType: document.getElementById('activityType').value,
            mensaje: document.getElementById('mensaje').value,

            // Agregamos metadatos:
            createdAt: new Date(),        // Fecha y hora de creación
            isActive: true,               // Campo para marcar si el mensaje está activo
            statusMessage: "nuevo"        // Estado inicial del mensaje
        };

        // Enviamos los datos a Firebase Firestore
        db.collection("mensajes").add(formData)
            .then(function () {
                // Mostramos una notificación de éxito al usuario
                showToast("¡Gracias por escribirnos!", "success");
                // Limpiamos los campos del formulario
                form.reset();
            })
            .catch(function (error) {
                // Mostramos una notificación de error al usuario
                showToast("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
            });
    });
});