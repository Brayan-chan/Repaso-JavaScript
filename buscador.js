// Objeto que contiene la información relevante para cada tema
var temas = {
    "javascript": "JavaScript es un lenguaje de programación...",
    "css": "CSS es un lenguaje utilizado para..."
};

// Obtener el div donde se mostrará la información
var infoDiv = document.querySelector('.info');
// Obtener el campo de búsqueda
var buscadorInput = document.getElementById('buscador');

// Agregar el evento input al campo de búsqueda
buscadorInput.addEventListener('input', function() { // el evento input se activa cuando el usuario cambia el valor del campo de búsqueda
    // Obtener el valor del campo de búsqueda
    var terminoBusqueda = this.value.toLowerCase();
    // Verificar si el tema buscado está en el objeto 'temas'
    if (temas.hasOwnProperty(terminoBusqueda)) { // hasOwnProperty verifica si un objeto tiene una propiedad
        // Si está, insertar la información relevante en el div info
        infoDiv.textContent = temas[terminoBusqueda]; // el objeto temas es un objeto que contiene la información relevante para cada tema
    } else if (terminoBusqueda === '') { // si el campo de búsqueda está vacío
        // Si no está, mostrar un mensaje de error
        infoDiv.textContent = '';
    } else {
        // Si no está, mostrar un mensaje de error
        infoDiv.textContent = "No se encontró información para '" + terminoBusqueda + "'";
    }
});
