function showToast(message, type) {
    // Crear un elemento div para el toast
    const toast = document.createElement('div');
    
    // Asignar clases CSS para el estilo base y el tipo específico de toast
    toast.className = `toast toast--${type}`;
    
    // Establecer el contenido del mensaje
    toast.textContent = message;
    
    // Agregar el toast al cuerpo del documento
    document.body.appendChild(toast);
    
    // Pequeño retraso para permitir que el elemento se procese
    
    // antes de iniciar la animación de entrada
    setTimeout(() => {
        // Añadir clase para activar la animación y hacer visible el toast
        toast.classList.add('toast--show');
    }, 100);
    
    // Esperar 3 segundos antes de comenzar a ocultar el toast
    setTimeout(() => {
        // Remover clase para activar la animación de salida
        toast.classList.remove('toast--show');
        
        // Esperar a que termine la animación de salida
        // antes de eliminar completamente el elemento del DOM
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}