// ======= MENÚ DINÁMICO =======
const secciones = {
  inicio: document.getElementById("seccion-inicio"),
  productos: document.getElementById("seccion-productos"),
  cuenta: document.getElementById("seccion-cuenta"),
  compras: document.getElementById("seccion-compras")
};

function mostrarSeccion(nombre) {
  Object.values(secciones).forEach(sec => sec.style.display = "none");
  secciones[nombre].style.display = "block";

  // 👉 si entra a productos, cargar productos
  if (nombre === "productos") {
    mostrarProductos(allProducts);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======= EVENTOS NAV (PREVENT DEFAULT) =======
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

// ======= PRODUCTOS =======
const allProducts = [
  { nombre: "Proteína Whey", imagen: "img/productos/whey.jpg", precio: 35 },
  { nombre: "Multivitamínico", imagen: "img/productos/multivitaminico.jpg", precio: 20 },
  { nombre: "Creatina", imagen: "img/productos/creatina.jpg", precio: 18 },
  { nombre: "Omega 3", imagen: "img/productos/omega3.jpg", precio: 25 },
  { nombre: "BCAA", imagen: "img/productos/bcaa.jpg", precio: 22 }
];

const productsContainer = document.getElementById("products-container");

function mostrarProductos(productos) {
  productsContainer.innerHTML = "";

  productos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h4>${prod.nombre}</h4>
      <p>$${prod.precio}</p>
      <button class="btn">Agregar al carrito</button>
    `;

    div.querySelector("button").addEventListener("click", e => {
      e.stopPropagation();
      alert(`Agregaste ${prod.nombre} al carrito`);
    });

    productsContainer.appendChild(div);
  });
}

// ======= FILTRO POR PRECIO =======
document.getElementById("filter-btn").addEventListener("click", () => {
  const min = parseFloat(document.getElementById("min-price").value) || 0;
  const max = parseFloat(document.getElementById("max-price").value) || Infinity;

  const filtrados = allProducts.filter(
    p => p.precio >= min && p.precio <= max
  );

  mostrarProductos(filtrados);
});

