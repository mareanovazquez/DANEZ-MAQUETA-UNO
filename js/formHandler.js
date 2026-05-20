document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Capturamos los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const activityType = document.getElementById('activityType').value;
        const mensaje = document.getElementById('mensaje').value;

        // URL de Formspree
        const formspreeUrl = 'https://formspree.io/f/xnnbnedp';
        
        // Creamos FormData para Formspree
        const formData = new FormData();
        formData.append('Nombre', nombre);
        formData.append('Email', email);
        formData.append('Actividad', activityType);
        formData.append('Mensaje', mensaje);
        formData.append('_subject', `Mensaje de ${nombre} sobre ${activityType}`);

        // Enviar a Formspree
        fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            if (response.ok) {
                showToast("¡Gracias por escribirnos!", "success");
                form.reset();
            } else {
                showToast("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
            }
        })
        .catch(function (error) {
            console.error('Error:', error);
            showToast("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
        });
    });
});