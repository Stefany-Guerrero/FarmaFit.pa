document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("login-form");
  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      const usuario = JSON.parse(localStorage.getItem("usuario"));

      if (usuario && usuario.email === email && usuario.password === password) {
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

  const secciones = {
    inicio: document.getElementById("seccion-inicio"),
    productos: document.getElementById("seccion-productos"),
    cuenta: document.getElementById("seccion-cuenta"),
    carrito: document.getElementById("seccion-carrito"),
    compras: document.getElementById("seccion-compras"),
    detalle: document.getElementById("seccion-detalle")
  };

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function mostrarSeccion(nombre) {
    Object.values(secciones).forEach(sec => {
      if (sec) sec.style.display = "none";
    });
    if (secciones[nombre]) {
      secciones[nombre].style.display = "block";
    }

    localStorage.setItem('ultimaSeccion', 'seccion-' + nombre);

    if (nombre === "productos") {
      if (typeof mostrarProductos === 'function' && typeof allProducts !== 'undefined') {
        mostrarProductos(mezclarProductos(allProducts));
      }
    }

    if (nombre === "carrito") {
      if (typeof renderCarrito === 'function') {
        renderCarrito();
      }
    }

    if (nombre === "compras") {
      if (typeof renderCarrito === 'function') {
        renderCarrito();
      }
    }

    if (nombre === "cuenta") {
      if (typeof renderCuenta === 'function') {
        renderCuenta();
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function safeClick(id, callback) {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", callback);
  }

  function mezclarProductos(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  safeClick("nav-inicio", e => { e.preventDefault(); mostrarSeccion("inicio"); });
  safeClick("nav-productos", e => { e.preventDefault(); mostrarSeccion("productos"); });
  safeClick("nav-cuenta", e => { e.preventDefault(); mostrarSeccion("cuenta"); });
  safeClick("nav-carrito", e => { e.preventDefault(); mostrarSeccion("carrito"); }); 
  safeClick("nav-historial", e => { e.preventDefault(); mostrarSeccion("compras"); });  
  safeClick("btn-ver-productos", e => { e.preventDefault(); mostrarSeccion("productos"); });

  const btnHistorial = document.getElementById("btn-ver-historial");
  if (btnHistorial) {
    btnHistorial.addEventListener("click", () => {
      mostrarSeccion("compras");
    });
  }

  const btnFavoritos = document.getElementById("btn-ver-favoritos");
  if (btnFavoritos) {
    btnFavoritos.addEventListener("click", () => {
      if (typeof allProducts !== 'undefined') {
        const favoritos = allProducts.filter(p => p.favorito === true);
        if (favoritos.length === 0) {
          alert("No tienes productos favoritos aún");
        } else {
          if (typeof mostrarProductos === 'function') {
            mostrarProductos(favoritos);
            mostrarSeccion("productos");
          }
        }
      }
    });
  }

  const btnCarrito = document.getElementById("btn-ver-carrito");
  if (btnCarrito) {
    btnCarrito.addEventListener("click", () => {
      mostrarSeccion("carrito");
    });
  }

  function renderCuenta() {
    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");
    const userPhone = document.getElementById("user-phone");
    
    if (userName) userName.textContent = usuario.nombre || "Invitado";
    if (userEmail) userEmail.textContent = usuario.email || "—";
    if (userPhone) userPhone.textContent = usuario.telefono || "No registrado";
    
    const avatar = localStorage.getItem("avatar");
    if (avatar) {
      const img = document.getElementById("avatar-img");
      if (img) {
        img.src = avatar;
        img.style.display = "block";
      }
    }
  }

  const avatarUpload = document.getElementById("avatar-upload");
  if (avatarUpload) {
    avatarUpload.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.match('image.*')) {
          alert('❌ Selecciona una imagen');
          return;
        }
        if (file.size > 2 * 1024 * 1024) {
          alert('❌ Máximo 2MB');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.getElementById("avatar-img");
          if (img) {
            img.src = e.target.result;
            img.style.display = "block";
            localStorage.setItem("avatar", e.target.result);
            alert("✅ Foto actualizada");
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  console.log("Login.js cargado correctamente");
});
