// form-handler.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            activityType: document.getElementById('activityType').value,
            mensaje: document.getElementById('mensaje').value,
            createdAt: new Date(),
            isActive: true,
            statusMessage: "nuevo"
        };
        
        db.collection("mensajes").add(formData)
            .then(function(docRef) {
                console.log("Documento escrito con ID: ", docRef.id);
                showToast("¡Mensaje enviado correctamente!", "success");
                form.reset();
            })
            .catch(function(error) {
                console.error("Error al agregar documento: ", error);
                showToast("Error al enviar el mensaje. Por favor, intenta nuevamente.", "error");
            });
    });
});