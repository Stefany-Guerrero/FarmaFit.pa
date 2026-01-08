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
    favorito: false,
    info: {
      descripcion: "Máscara que alarga y define las pestañas.",
      beneficios: "No se corre, larga duración.",
      uso: "Aplicar desde la raíz hasta la punta.",
      ingredientes: "Cera natural, pigmentos.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-MK-002",
    nombre: "Eyebrow & Lash Serum",
    precio: 37.00,
    imagen: "productos/eyebrow&lashserum.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: "Sérum fortalecedor para cejas y pestañas.",
      beneficios: "Estimula crecimiento y densidad.",
      uso: "Aplicar por la noche en cejas y pestañas limpias.",
      ingredientes: "Extractos naturales y vitaminas.",
      advertencias: "Evitar contacto directo con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-MK-003",
    nombre: "Full Blast Mascara",
    precio: 36.50,
    imagen: "productos/fullblastmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: "Máscara de volumen extremo para pestañas.",
      beneficios: "Volumen y definición instantánea.",
      uso: "Aplicar de raíz a punta con movimientos zig-zag.",
      ingredientes: "Cera natural y pigmentos intensos.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-NT-004",
    nombre: "Infinilash Mascara",
    precio: 33.50,
    imagen: "productos/infinilashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: "Máscara que alarga y da definición intensa.",
      beneficios: "Resistente al agua y de larga duración.",
      uso: "Aplicar desde la raíz hasta la punta.",
      ingredientes: "Cera y pigmentos especiales.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-NT-005",
    nombre: "Infinilash Mascara - Brown",
    precio: 30.90,
    imagen: "productos/infinilashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: "Máscara marrón para un look natural.",
      beneficios: "No se corre y de larga duración.",
      uso: "Aplicar de raíz a punta.",
      ingredientes: "Cera natural y pigmentos marrón.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-NT-006",
    nombre: "Zen Extension Lash Mascara",
    precio: 15.50,
    imagen: "productos/zenextensionlashmascara.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: "Máscara ligera para un look natural.",
      beneficios: "Fácil de aplicar y resistente.",
      uso: "Aplicar suavemente de raíz a punta.",
      ingredientes: "Cera ligera y pigmentos suaves.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
  },
  {
    id: "FF-MK-007",
    nombre: "Eye Liner Pencil",
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
        colorHex: "#000000"
      },
      {
        color: "Eye Liner Pencil - 02 Deep Brown",
        codigo: "FF-MK-007-02",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-02deepbrown.png",
        colorHex: "#654321"
      },
      {
        color: "Eye Liner Pencil - 03 Bronze",
        codigo: "FF-MK-007-03",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-03bronze.jpg",
        colorHex: "#cd7f32"
      },
      {
        color: "Eye Liner Pencil - 04 Glitz Brown",
        codigo: "FF-MK-007-04",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-04glitzbrown.jpg",
        colorHex: "#8b4513"
      },
      {
        color: "Eye Liner Pencil - 05 Nude",
        codigo: "FF-MK-007-05",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-05nude.jpg",
        colorHex: "#d2b48c"
      },
      {
        color: "Eye Liner Pencil - 06 Purple",
        codigo: "FF-MK-007-06",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-06purple.jpg",
        colorHex: "#800080"
      },
      {
        color: "Eye Liner Pencil - 07 Dark Blue",
        codigo: "FF-MK-007-07",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-07darkblue.jpg",
        colorHex: "#00008b"
      },
      {
        color: "Eye Liner Pencil - 08 Metal Green",
        codigo: "FF-MK-007-08",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-08metalgreen.jpg",
        colorHex: "#008000"
      },
      {
        color: "Eye Liner Pencil - 09 Burgundy",
        codigo: "FF-MK-007-09",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-09burgundy.png",
        colorHex: "#800020"
      },
      {
        color: "Eye Liner Pencil - 10 Glitz Grey",
        codigo: "FF-MK-007-010",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-10glitzgrey.jpg",
        colorHex: "#808080"
      }
    ],
    info: {
      descripcion: "Lápiz delineador de ojos de alta precisión.",
      beneficios: "Resistente, fácil de aplicar, larga duración.",
      uso: "Aplicar cerca de las pestañas según el estilo deseado.",
      ingredientes: "Pigmentos, ceras y aceites naturales.",
      advertencias: "Evitar contacto con los ojos.",
      envio: "Envíos en 24–48 horas."
    }
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
// MOSTRAR DETALLE PRODUCTO CON VARIANTES Y ACORDEÓN
// ===============================
function mostrarDetalleProducto(producto, varianteSeleccionada = null) {
  const detalleContainer = document.getElementById("detalle-producto");

  const info = producto.info;
  const precio = varianteSeleccionada?.precio || producto.precio;
  const imagen = varianteSeleccionada?.imagen || producto.imagen;

  const secciones = [
    { titulo: "Descripción", contenido: info.descripcion },
    { titulo: "Beneficios", contenido: info.beneficios },
    { titulo: "Modo de uso", contenido: info.uso },
    { titulo: "Ingredientes", contenido: info.ingredientes },
    { titulo: "Advertencias", contenido: info.advertencias },
    { titulo: "Envíos y devoluciones", contenido: info.envio }
  ];

  // Render detalle
  detalleContainer.innerHTML = `
    <div class="detalle-card">

      <!-- IZQUIERDA -->
      <div class="detalle-img">
        <img src="${imagen}" alt="${producto.nombre}">
      </div>

      <!-- DERECHA -->
      <div class="detalle-info">
        <h2>${producto.nombre}</h2>
        <p class="price">$${precio.toFixed(2)}</p>

      ${
  producto.variantes
    ? `<div class="variantes">
          ${producto.variantes.map(v => `
  <div class="color-item" style="display:flex; align-items:center; margin-bottom:6px;">
    <button
      class="color-btn ${v.color === varianteSeleccionada?.color ? "activo" : ""}"
      style="background-color:${v.colorHex}; margin-right:8px;">
    </button>

    <div style="display:flex; flex-direction:column; line-height:1.1;">
      <span class="color-nombre">${v.color}</span>
      <span class="color-code">${v.codigo}</span>
    </div>
  </div>
`).join("")}
      </div>`
    : ""
}

        <div class="acordeones">
          ${secciones
            .filter(sec => sec.contenido)
            .map(sec => `
              <div class="acordeon">
                <h4 onclick="toggleAcordeon(this)">${sec.titulo}</h4>
                <div class="contenido">${sec.contenido}</div>
              </div>
            `).join("")}
        </div>

        <button class="btn">Agregar</button>
      </div>
    </div>
  `;

  // Evento para variantes
  if (producto.variantes) {
    const botones = detalleContainer.querySelectorAll(".color-btn");
    botones.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        mostrarDetalleProducto(producto, producto.variantes[idx]);
      });
    });
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

function cambiarImagen(src, precio, codigo) {
  document.querySelector(".detalle-img img").src = src;
}

function toggleAcordeon(titulo) {
  const contenido = titulo.nextElementSibling;
  const estaActivo = titulo.classList.contains("active");

  // Cierra todos
  document.querySelectorAll(".acordeon h4").forEach(h => h.classList.remove("active"));
  document.querySelectorAll(".acordeon .contenido").forEach(c => c.style.maxHeight = null);

  if (!estaActivo) {
    titulo.classList.add("active");
    contenido.style.maxHeight = contenido.scrollHeight + "px";
  }
}

// ===============================
// CARGA INICIAL
// ===============================
mostrarSeccion("inicio");
