document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        // Evitamos el comportamiento predeterminado del formulario (recarga de la página)
        e.preventDefault();

        // Capturamos los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const activityType = document.getElementById('activityType').value;
        const mensaje = document.getElementById('mensaje').value;

        // Creamos un objeto con los datos del formulario y metadatos adicionales para Firebase
        const formData = {
            nombre: nombre,
            email: email,
            activityType: activityType,
            mensaje: mensaje,
            createdAt: new Date(),        // Fecha y hora de creación
            isActive: true,               // Campo para marcar si el mensaje está activo
            statusMessage: "nuevo"        // Estado inicial del mensaje
        };

        // Función para enviar a Firebase
        function sendToFirebase() {
            return db.collection("mensajes").add(formData);
        }

     // Función para enviar a Formspree
function sendToFormspree() {
    const formspreeUrl = 'https://formspree.io/f/xnnbnedp';
    
    // Creamos FormData para Formspree
    const formspreeData = new FormData();
    formspreeData.append('Nombre', nombre);
    formspreeData.append('Email', email);
    formspreeData.append('Actividad', activityType);
    formspreeData.append('Mensaje', mensaje);
    formspreeData.append('_subject', `Mensaje de ${nombre} sobre ${activityType}`);

    return fetch(formspreeUrl, {
        method: 'POST',
        body: formspreeData,
        headers: {
            'Accept': 'application/json'
        }
    });
}

        // Ejecutamos ambos envíos simultáneamente
        Promise.all([sendToFirebase(), sendToFormspree()])
            .then(function (results) {
                // Verificamos que Formspree respondió correctamente
                const formspreeResponse = results[1];
                if (formspreeResponse.ok) {
                    // Ambos envíos fueron exitosos
                    showToast("¡Gracias por escribirnos!", "success");
                    form.reset();
                } else {
                    // Firebase exitoso, pero Formspree falló
                    showToast("¡Gracias por escribirnos!", "success");
                    form.reset();
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
                
                // Si hay error, intentamos al menos uno de los métodos
                // Primero intentamos solo Firebase
                sendToFirebase()
                    .then(function () {
                        showToast("¡Gracias por escribirnos!", "success");
                        form.reset();
                    })
                    .catch(function (firebaseError) {
                        console.error('Firebase error:', firebaseError);
                        
                        // Si Firebase también falla, intentamos solo Formspree
                        sendToFormspree()
                            .then(function (response) {
                                if (response.ok) {
                                    showToast("¡Gracias por escribirnos!", "success");
                                    form.reset();
                                } else {
                                    showToast("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
                                }
                            })
                            .catch(function (formspreeError) {
                                console.error('Formspree error:', formspreeError);
                                showToast("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
                            });
                    });
            });
    });
});