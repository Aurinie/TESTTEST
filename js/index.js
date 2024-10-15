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

// Botón de alternancia del modo oscuro
document.addEventListener("DOMContentLoaded", function () {
    
    const toggleDarkModeButton = document.getElementById("toggleDarkMode");
    const iconMoon = document.getElementById("iconMoon");
    const iconSun = document.getElementById("iconSun");
    const body = document.body;

    // Verificar si el modo oscuro está activado previamente
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');  // Aplica la clase de modo oscuro
      iconSun.classList.add('d-none');  // Oculta el sol
      iconMoon.classList.remove('d-none');   // Muestra la luna
    }

    // Evento para alternar entre modo oscuro y claro
    toggleDarkModeButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');  // Alterna la clase de modo oscuro
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');  // Guarda el estado en localStorage
        iconSun.classList.add('d-none');  // Oculta el sol
        iconMoon.classList.remove('d-none');   // Muestra la luna
      } else {
        localStorage.setItem('darkMode', 'disabled');  // Desactiva modo oscuro en localStorage
        iconSun.classList.remove('d-none');   // Muestra el sol
        iconMoon.classList.add('d-none');  // Oculta la luna
      }
    });
  });



