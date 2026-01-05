// ===============================
// SECCIONES
// ===============================
const secciones = {
  inicio: document.getElementById("seccion-inicio"),
  productos: document.getElementById("seccion-productos"),
  cuenta: document.getElementById("seccion-cuenta"),
  compras: document.getElementById("seccion-compras")
};

function mostrarSeccion(nombre) {
  Object.values(secciones).forEach(sec => {
    sec.style.display = "none";
  });

  secciones[nombre].style.display = "block";

  // Si entra a productos, cargar todos
  if (nombre === "productos") {
    mostrarProductos(allProducts);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// EVENTOS DEL NAV
// ===============================
document.getElementById("nav-inicio").addEventListener("click", e => {
  e.preventDefault();
  mostrarSeccion("inicio");
});

document.getElementById("nav-productos").addEventListener("click", e => {
  e.preventDefault();
  mostrarSeccion("productos");
});

document.getElementById("nav-cuenta").addEventListener("click", e => {
  e.preventDefault();
  mostrarSeccion("cuenta");
});

document.getElementById("nav-compras").addEventListener("click", e => {
  e.preventDefault();
  mostrarSeccion("compras");
});

document.getElementById("btn-ver-productos").addEventListener("click", e => {
  e.preventDefault();
  mostrarSeccion("productos");
});

// ===============================
// PRODUCTOS (DATA)
// ===============================
const allProducts = [
  {
    nombre: "Proteína Whey",
    categoria: "proteinas",
    precio: 35,
    imagen: "img/productos/whey.jpg"
  },
  {
    nombre: "Creatina",
    categoria: "energia",
    precio: 18,
    imagen: "img/productos/creatina.jpg"
  },
  {
    nombre: "Multivitamínico",
    categoria: "vitaminas",
    precio: 20,
    imagen: "img/productos/multivitaminico.jpg"
  },
  {
    nombre: "Omega 3",
    categoria: "salud",
    precio: 25,
    imagen: "img/productos/omega3.jpg"
  },
  {
    nombre: "BCAA",
    categoria: "energia",
    precio: 22,
    imagen: "img/productos/bcaa.jpg"
  }
];

// ===============================
// RENDER PRODUCTOS
// ===============================
const productsContainer = document.getElementById("products-container");

function mostrarProductos(productos) {
  productsContainer.innerHTML = "";

  if (productos.length === 0) {
    productsContainer.innerHTML =
      "<p>No hay productos para esos filtros</p>";
    return;
  }

  productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <p>$${p.precio}</p>
      <button class="btn">Agregar</button>
    `;

    productsContainer.appendChild(card);
  });
}

// ===============================
// FILTROS
// ===============================
document.getElementById("filter-btn").addEventListener("click", () => {
  const min =
    parseFloat(document.getElementById("min-price").value) || 0;
  const max =
    parseFloat(document.getElementById("max-price").value) || Infinity;
  const categoria =
    document.getElementById("category-filter").value;

  const filtrados = allProducts.filter(p => {
    const precioOk = p.precio >= min && p.precio <= max;
    const categoriaOk =
      categoria === "all" || p.categoria === categoria;
    return precioOk && categoriaOk;
  });

  mostrarProductos(filtrados);
});

// ===============================
// CARGA INICIAL
// ===============================
mostrarSeccion("inicio");


