// ======= MENÚ DINÁMICO =======
const secciones = {
  inicio: document.getElementById("seccion-inicio"),
  productos: document.getElementById("seccion-productos"),
  cuenta: document.getElementById("seccion-cuenta"),
  compras: document.getElementById("seccion-compras")
};

document.getElementById("nav-inicio").addEventListener("click", () => mostrarSeccion("inicio"));
document.getElementById("nav-productos").addEventListener("click", () => mostrarSeccion("productos"));
document.getElementById("nav-cuenta").addEventListener("click", () => mostrarSeccion("cuenta"));
document.getElementById("nav-compras").addEventListener("click", () => mostrarSeccion("compras"));
document.getElementById("btn-ver-productos").addEventListener("click", () => mostrarSeccion("productos"));

function mostrarSeccion(nombre) {
  Object.values(secciones).forEach(sec => sec.style.display = "none");
  secciones[nombre].style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
    div.classList.add("product");

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h4>${prod.nombre}</h4>
      <p>$${prod.precio}</p>
      <button>Agregar al carrito</button>
    `;

    div.addEventListener("mouseenter", () => div.style.transform = "translateY(-5px)");
    div.addEventListener("mouseleave", () => div.style.transform = "translateY(0)");
    div.addEventListener("click", () => alert(`Agregaste ${prod.nombre} al carrito`));

    productsContainer.appendChild(div);
  });
}

mostrarProductos(allProducts);

// ======= FILTRO POR PRECIO =======
document.getElementById("filter-btn").addEventListener("click", () => {
  const min = parseFloat(document.getElementById("min-price").value) || 0;
  const max = parseFloat(document.getElementById("max-price").value) || Infinity;

  const filtrados = allProducts.filter(
    p => p.precio >= min && p.precio <= max
  );

  mostrarProductos(filtrados);
});

