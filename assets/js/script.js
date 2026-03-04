// Seleccionamos todos los botones de productos
const botones = document.querySelectorAll(".producto button");

// Recorremos cada botón
botones.forEach(boton => {
    boton.addEventListener("click", function() {
        
        // Obtenemos el nombre del producto
        const producto = this.parentElement.querySelector("h3").textContent;
        
        // Mostramos mensaje
        alert("Has agregado al carrito: " + producto);
    });
});