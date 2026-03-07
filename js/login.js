document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("login-form");
  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      const usuario = JSON.parse(localStorage.getItem("usuario"));

      if (usuario && usuario.email === email && usuario.password === password) {
        // Marcar como logueado para esta sesión
        localStorage.setItem("usuario", JSON.stringify({
          ...usuario,
          logged: true
        }));
        
        alert('¡Bienvenido ' + usuario.nombre + '!');
        window.location.href = "home.html";
      } else {
        alert("Correo o contraseña incorrectos");
      }
    });
  }

  console.log("Login.js cargado correctamente");
});
