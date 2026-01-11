// ===============================
// LOGIN SIMPLE (LOCAL)
// ===============================

const form = document.getElementById("login-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Validación básica
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    // Guardar sesión (simulada)
    localStorage.setItem("usuario", JSON.stringify({
      email: email
    }));

    // Ir al home
    window.location.href = "home.html";
  });
}

