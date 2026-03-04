/* ===== CARRITO CON CONTADOR ===== */

let contador = 0;

document.addEventListener("DOMContentLoaded", () => {

    const spanContador = document.getElementById("contador");
    const botones = document.querySelectorAll(".btn-carrito");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            contador++;

            if (spanContador) {
                spanContador.textContent = contador;
            }
        });
    });

});

/* ===== VALIDACIÓN FORMULARIO COMPLETA ===== */

const form = document.getElementById("formulario");

if(form){

form.addEventListener("submit", (e) => {

e.preventDefault();

let nombre = document.getElementById("nombre").value.trim();
let ciudad = document.getElementById("ciudad").value.trim();
let email = document.getElementById("email").value.trim();
let asunto = document.getElementById("asunto").value.trim();
let descripcion = document.getElementById("descripcion").value.trim();

let valido = true;

document.querySelectorAll(".error").forEach(e => e.textContent = "");

if(nombre.length < 3){
document.getElementById("error-nombre").textContent = "Mínimo 3 caracteres";
valido = false;
}

if(ciudad === ""){
document.getElementById("error-ciudad").textContent = "Campo obligatorio";
valido = false;
}

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email)){
document.getElementById("error-email").textContent = "Email inválido";
valido = false;
}

if(asunto === ""){
document.getElementById("error-asunto").textContent = "Campo obligatorio";
valido = false;
}

if(descripcion.length < 10){
document.getElementById("error-descripcion").textContent = "Mínimo 10 caracteres";
valido = false;
}

if(valido){
document.getElementById("mensaje-final").textContent = "Formulario enviado correctamente ✅";
document.getElementById("mensaje-final").style.color = "green";
form.reset();
}

});

}