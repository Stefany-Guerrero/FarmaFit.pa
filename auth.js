function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Completa todos los campos");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email, pass }));
  alert("Registro exitoso");
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email || user.pass !== pass) {
    alert("Datos incorrectos");
    return;
  }

  localStorage.setItem("logged", "true");
  window.location.href = "home.html";
}

function checkAuth() {
  if (localStorage.getItem("logged") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
}
