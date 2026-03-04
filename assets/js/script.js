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

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const mensaje = document.getElementById("mensaje");
        const mensajeGeneral = document.getElementById("mensaje-general");

        let valido = true;

        const campos = [nombre, correo, mensaje];

        campos.forEach(campo => {
            campo.classList.remove("error", "correcto");
            campo.nextElementSibling.textContent = "";
        });

        // Nombre
        if (nombre.value.trim().length < 4) {
            nombre.classList.add("error");
            nombre.nextElementSibling.textContent = "Debe tener al menos 4 caracteres.";
            valido = false;
        } else {
            nombre.classList.add("correcto");
        }

        // Correo
        if (!correo.value.includes("@") || correo.value.length < 5) {
            correo.classList.add("error");
            correo.nextElementSibling.textContent = "Correo inválido.";
            valido = false;
        } else {
            correo.classList.add("correcto");
        }

        // Mensaje
        if (mensaje.value.trim().length < 5) {
            mensaje.classList.add("error");
            mensaje.nextElementSibling.textContent = "El mensaje es muy corto.";
            valido = false;
        } else {
            mensaje.classList.add("correcto");
        }

        if (!valido) {
            mensajeGeneral.textContent = "Corrige los campos en rojo.";
            mensajeGeneral.style.color = "red";
            return;
        }

        mensajeGeneral.textContent = "Mensaje enviado correctamente.";
        mensajeGeneral.style.color = "grey";

        formulario.reset();

        campos.forEach(campo => campo.classList.remove("correcto"));
    });

}