document.addEventListener("DOMContentLoaded", function() {
 
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//Esta función irá en todos los js que quieramos proteger y sea necesario iniciar sesión
window.onload = function() {
    // Verificar si la sesión está activa
    const sesionIniciada = localStorage.getItem('sesionIniciada');

    if (sesionIniciada !== 'true') {
        // Redirige a login.html si no está la sesión iniciada
        window.location.href = 'login.html';
    }
};

// Dark Mode
const switchElement = document.querySelector(".switch");
const bodyElement = document.querySelector("body");


switchElement.addEventListener("click", () => {
    switchElement.classList.toggle("active");
  
// Dark Mode
const switchElement = document.querySelector(".switch");
const bodyElement = document.querySelector("body");

switchElement.addEventListener("click", () => {
  switchElement.classList.toggle("active");

  // Forzar el cambio de fondo
  if (switchElement.classList.contains("active")) {
    bodyElement.style.backgroundColor = "black";
    bodyElement.style.color = "white"; // Cambiar también el texto a blanco para visibilidad
  } else {
    bodyElement.style.backgroundColor = "white";
    bodyElement.style.color = "black"; // Restaurar el color del texto
  }
});

