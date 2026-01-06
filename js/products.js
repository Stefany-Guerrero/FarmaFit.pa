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
  Object.values(secciones).forEach(sec => sec.style.display = "none");
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
    id: "FF-MK-001",
    nombre: "Double Lash Extend Mascara",
    precio: 26.90,
    imagen: "productos/doublelashextendmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  {
    id: "FF-MK-002",
    nombre: "Eyebrow & Lash Serum",
    precio: 37.00,
    imagen: "productos/eyebrow&lashserum.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  {
    id: "FF-MK-003",
    nombre: "Full Blast Mascara",
    precio: 36.50,
    imagen: "productos/fullblastmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  {
    id: "FF-NT-001",
    nombre: "Proteína Whey",
    precio: 35,
    imagen: "img/productos/whey.jpg",
    categoria: "nutricion",
    subcategoria: "proteinas",
    tipo: "whey",
    favorito: false
  }
];

// ===============================
// RENDER PRODUCTOS
// ===============================
const productsContainer = document.getElementById("products-container");

function mostrarProductos(productos) {
  productsContainer.innerHTML = "";

  if (productos.length === 0) {
    productsContainer.innerHTML = "<p>No hay productos para esos filtros</p>";
    return;
  }

productos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product");

  // 👇 AQUÍ se define todo lo que se ve en cada producto
  card.innerHTML = `
    <div class="product-fav ${p.favorito ? "active" : ""}" data-id="${p.id}">
      ❤
    </div>

    <img src="${p.imagen}" alt="${p.nombre}">

    <h4>${p.nombre}</h4>
    <span class="product-code">${p.id}</span>

    <p class="price">$${p.precio}</p>

    <button class="btn">Agregar</button>
  `;
});

    // Favoritos
    const favBtn = card.querySelector(".product-fav");
    favBtn.addEventListener("click", () => {
      p.favorito = !p.favorito;
      favBtn.classList.toggle("active");
    });

    // Botón agregar funcional
    card.querySelector("button").addEventListener("click", () => {
      alert(`Agregaste ${p.nombre} al carrito`);
    });

    productsContainer.appendChild(card);
  });
}

// ===============================
// FILTROS
// ===============================
document.getElementById("filter-btn").addEventListener("click", e => {
  e.preventDefault();

  const min = parseFloat(document.getElementById("min-price").value) || 0;
  const max = parseFloat(document.getElementById("max-price").value) || Infinity;
  const cat = document.getElementById("filter-category").value;
  const sub = document.getElementById("filter-subcategory").value;
  const tipo = document.getElementById("filter-type").value;

  const filtrados = allProducts.filter(p => {
    return (
      p.precio >= min &&
      p.precio <= max &&
      (cat === "all" || p.categoria === cat) &&
      (sub === "all" || p.subcategoria === sub) &&
      (tipo === "all" || p.tipo === tipo)
    );
  });

  mostrarProductos(filtrados);
});

// ===============================
// CARGA INICIAL
// ===============================
mostrarSeccion("inicio");

