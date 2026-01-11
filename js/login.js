document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Guardar usuario (lo que el usuario escribió)
    const usuario = {
      nombre: email.split("@")[0],
      email: email
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Ir al home
    window.location.href = "home.html";
  });
});
