document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('faqSearch');
    const clearButton = document.getElementById('faqSearchClear');
    const faqItems = document.querySelectorAll('.faq__item');
    
    // Agregar un mensaje de "no se encontraron resultados"
    const noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'faq__no-results';
    noResultsMessage.textContent = 'No se encontraron preguntas que coincidan con tu búsqueda. Intenta con otras palabras.';
    document.querySelector('.faq__accordion').appendChild(noResultsMessage);
    
    // Función para realizar la búsqueda
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Mostrar/ocultar el botón para limpiar
        clearButton.style.display = searchTerm.length > 0 ? 'block' : 'none';
        
        let resultsFound = false;
        
        // Filtrar elementos que coinciden con la búsqueda
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question').textContent.toLowerCase();
            const answer = item.querySelector('.faq__answer-text').textContent.toLowerCase();
            
            // Si el término de búsqueda está vacío o hay coincidencia
            if (searchTerm.length === 0 || question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.classList.remove('faq__item--hidden');
                resultsFound = true;
            } else {
                item.classList.add('faq__item--hidden');
            }
        });
        
        // Mostrar mensaje si no hay resultados
        noResultsMessage.classList.toggle('faq__no-results--visible', !resultsFound && searchTerm.length > 0);
    }
    
    // Limpiar la búsqueda
    function clearSearch() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        
        // Mostrar todos los elementos
        faqItems.forEach(item => {
            item.classList.remove('faq__item--hidden');
        });
        
        // Ocultar mensaje de no resultados
        noResultsMessage.classList.remove('faq__no-results--visible');
        
        // Enfocar el campo de búsqueda
        searchInput.focus();
    }
    
    // Event listeners
    searchInput.addEventListener('input', performSearch);
    clearButton.addEventListener('click', clearSearch);
    
    // También limpiar búsqueda con Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
});