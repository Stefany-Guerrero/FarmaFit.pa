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

  // Si entra a productos, cargar todos mezclados
  if (nombre === "productos") {
    mostrarProductos(mezclarProductos(allProducts));
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// FUNCION MEZCLAR (SHUFFLE)
// ===============================
function mezclarProductos(array) {
  return array.sort(() => Math.random() - 0.5);
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
// PRODUCTOS (DATA) CON PRODUCTO 7
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
    id: "FF-NT-004",
    nombre: "Infinilash Mascara",
    precio: 33.50,
    imagen: "productos/infinilashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  {
    id: "FF-NT-005",
    nombre: "Infinilash Mascara - Brown",
    precio: 30.90,
    imagen: "productos/infinilashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  {
    id: "FF-NT-006",
    nombre: "Zen Extension Lash Mascara",
    precio: 15.50,
    imagen: "productos/zenextensionlashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false
  },
  
  {
    id: "FF-MK-007",
    nombre: "Eye Liner Pencil - 01 Black",
    precio:17.50,
    imagen: "productos/eyelinerpencil-01black.png",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "Delineador de ojos/Dipliner",
    favorito: false,
    variantes: [
      {
        color: "Black",
        codigo: "FF-MK-007-01",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-01black.png",
      },
      {
        color: "Brown",
        codigo: "FF-MK-007-02",
        precio: 30.90,
        imagen: "productos/infinilashmascara_brown.jpg"
      },
      {
        color: "Blue",
        codigo: "FF-MK-007-03",
        precio: 34.50,
        imagen: "productos/infinilashmascara_blue.jpg"
      }
    ]
  }
];

// ===============================
// RELACIÓN CATEGORÍA → SUBCATEGORÍA → TIPO
// ===============================
const filtrosPorCategoria = {
  maquillaje: {
    subcategorias: {
      ojos: ["mascara", "delineador", "sombras"],
      labios: ["labial", "gloss"],
      rostro: ["base", "rubor"]
    }
  },

  nutricion: {
    subcategorias: {
      suplementos: ["proteina", "whey", "creatina"],
      vitaminas: ["vitamina c", "multivitaminico"]
    }
  },

  piel: {
    subcategorias: {
      limpieza: ["gel", "espuma"],
      hidratacion: ["crema", "serum"]
    }
  }
};

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

    // CONTENIDO DEL PRODUCTO
    card.innerHTML = `
      <div class="product-fav ${p.favorito ? "active" : ""}" data-id="${p.id}">
        ❤
      </div>

      <img src="${p.imagen}" alt="${p.nombre}">

      <h4>${p.nombre}</h4>
      <span class="product-code">${p.id}</span>

      <p class="price">$${p.precio.toFixed(2)}</p>

      <button class="btn">Agregar</button>
    `;

    // ❤️ FAVORITOS (FUNCIONAL)
    const favBtn = card.querySelector(".product-fav");
    favBtn.addEventListener("click", e => {
      e.stopPropagation(); // evita conflictos de click
      p.favorito = !p.favorito;
      favBtn.classList.toggle("active");
    });

    // 🛒 BOTÓN AGREGAR
    card.querySelector("button").addEventListener("click", e => {
      e.stopPropagation();
      alert(`Agregaste ${p.nombre} al carrito`);
    });

    // AGREGAR AL CONTENEDOR
    productsContainer.appendChild(card);
  });
}

function actualizarSubcategoriasYTipos() {
  const categoriaSelect = document.getElementById("filter-category");
  const subSelect = document.getElementById("filter-subcategory");
  const tipoSelect = document.getElementById("filter-type");

  const categoria = categoriaSelect.value;

  // Reset
  subSelect.innerHTML = `<option value="all">Todas</option>`;
  tipoSelect.innerHTML = `<option value="all">Todos</option>`;

  if (categoria === "all" || !filtrosPorCategoria[categoria]) return;

  const subcategorias = filtrosPorCategoria[categoria].subcategorias;

  // Cargar subcategorías
  Object.keys(subcategorias).forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
    subSelect.appendChild(opt);
  });

  // Cuando cambia subcategoría → cargar tipos
  subSelect.onchange = () => {
    tipoSelect.innerHTML = `<option value="all">Todos</option>`;

    const sub = subSelect.value;
    if (sub === "all") return;

    subcategorias[sub].forEach(tipo => {
      const opt = document.createElement("option");
      opt.value = tipo;
      opt.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
      tipoSelect.appendChild(opt);
    });
  };
}


  document
  .getElementById("filter-category")
  .addEventListener("change", actualizarSubcategoriasYTipos);

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


