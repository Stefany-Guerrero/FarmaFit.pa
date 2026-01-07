// ===============================
// SECCIONES
// ===============================
const secciones = {
  inicio: document.getElementById("seccion-inicio"),
  productos: document.getElementById("seccion-productos"),
  cuenta: document.getElementById("seccion-cuenta"),
  compras: document.getElementById("seccion-compras"),
  detalle: document.getElementById("seccion-detalle") // NUEVO: sección detalle producto
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
    nombre: "Eye Liner Pencil - Black",
    precio:17.50,
    imagen: "productos/eyelinerpencil-01black.png",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "delineador",
    favorito: false,
    variantes: [
      {
        color: "Eye Liner Pencil - 01 Black",
        codigo: "FF-MK-007-01",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-01black.png",
      },
      {
        color: "Eye Liner Pencil - 02 Deep Brown",
        codigo: "FF-MK-007-02",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-02deepbrown.png"
      },
      {
        color: "Eye Liner Pencil - 03 Bronze",
        codigo: "FF-MK-007-03",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-03bronze.jpg"
      },
        {
        color: "Eye Liner Pencil - 04 Glitz Brown",
        codigo: "FF-MK-007-04",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-04glitzbrown.jpg"
      },
        {
        color: "Eye Liner Pencil - 04 Glitz Brown",
        codigo: "FF-MK-007-04",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-04glitzbrown.jpg"
      },
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
      e.stopPropagation();
      p.favorito = !p.favorito;
      favBtn.classList.toggle("active");
    });

    // 🛒 BOTÓN AGREGAR
    card.querySelector("button").addEventListener("click", e => {
      e.stopPropagation();
      alert(`Agregaste ${p.nombre} al carrito`);
    });

    // NUEVO: al hacer clic en la tarjeta se abre detalle
    card.addEventListener("click", () => {
      mostrarDetalleProducto(p);
      mostrarSeccion("detalle");
    });

    productsContainer.appendChild(card);
  });
}

// ===============================
// MOSTRAR DETALLE DEL PRODUCTO CON VARIANTES
// ===============================
function mostrarDetalleProducto(producto) {
  const detalleContainer = document.getElementById("detalle-producto");
  detalleContainer.innerHTML = "";

  // Imagen principal
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.id = "detalle-img";

  // Nombre y precio
  const nombre = document.createElement("h2");
  nombre.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.classList.add("price");
  precio.textContent = `$${producto.precio.toFixed(2)}`;

  detalleContainer.appendChild(img);
  detalleContainer.appendChild(nombre);
  detalleContainer.appendChild(precio);

  // Botón agregar
  const btnAgregar = document.createElement("button");
  btnAgregar.textContent = "Agregar";
  btnAgregar.classList.add("btn");
  btnAgregar.addEventListener("click", () => {
    alert(`Agregaste ${producto.nombre} al carrito`);
  });
  detalleContainer.appendChild(btnAgregar);

  // Si el producto tiene variantes
  if (producto.variantes && producto.variantes.length > 0) {
    const variantesContainer = document.createElement("div");
    variantesContainer.id = "variantes-container";

    producto.variantes.forEach(variant => {
      const btnVar = document.createElement("button");
      btnVar.textContent = variant.color;
      btnVar.classList.add("btn-variant");

      btnVar.addEventListener("click", () => {
        // Actualiza imagen y precio
        img.src = variant.imagen;
        precio.textContent = `$${variant.precio.toFixed(2)}`;
      });

      variantesContainer.appendChild(btnVar);
    });

    detalleContainer.appendChild(variantesContainer);
  }
}

// ===============================
// FILTROS
// ===============================
function actualizarSubcategoriasYTipos() {
  const categoriaSelect = document.getElementById("filter-category");
  const subSelect = document.getElementById("filter-subcategory");
  const tipoSelect = document.getElementById("filter-type");

  const categoria = categoriaSelect.value;

  subSelect.innerHTML = `<option value="all">Todas</option>`;
  tipoSelect.innerHTML = `<option value="all">Todos</option>`;

  if (categoria === "all" || !filtrosPorCategoria[categoria]) return;

  const subcategorias = filtrosPorCategoria[categoria].subcategorias;

  Object.keys(subcategorias).forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
    subSelect.appendChild(opt);
  });

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

document.getElementById("filter-category").addEventListener("change", actualizarSubcategoriasYTipos);

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

