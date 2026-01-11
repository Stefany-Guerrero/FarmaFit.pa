// ===============================
// SECCIONES (DECLARACIÓN)
// ===============================
const secciones = {
  inicio: document.getElementById("seccion-inicio"),
  productos: document.getElementById("seccion-productos"),
  cuenta: document.getElementById("seccion-cuenta"),
  compras: document.getElementById("seccion-compras"),
  detalle: document.getElementById("seccion-detalle")
};

// ===============================
// CARRITO (GLOBAL)
// ===============================
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarSeccion(nombre) {
  Object.values(secciones).forEach(sec => sec.style.display = "none");
  secciones[nombre].style.display = "block";

  if (nombre === "productos") {
    mostrarProductos(mezclarProductos(allProducts));
  }

  if (nombre === "compras") {
    //renderCarrito();
  }

  // 🔑 CLAVE
  if (nombre === "cuenta") {
    //renderCuenta();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function safeClick(id, callback) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", callback);
  }
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
safeClick("nav-inicio", e => {
  e.preventDefault();
  mostrarSeccion("inicio");
});

safeClick("nav-productos", e => {
  e.preventDefault();
  mostrarSeccion("productos");
});

safeClick("nav-cuenta", e => {
  e.preventDefault();
  mostrarSeccion("cuenta");
});

safeClick("nav-compras", e => {
  e.preventDefault();
  mostrarSeccion("compras");
});

safeClick("btn-ver-productos", e => {
  e.preventDefault();
  mostrarSeccion("productos");
});

// ===============================
// PRODUCTOS (DATA) CORREGIDOS
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
      descripcion: "Máscara de pestañas con cepillo doble de silicón que aporta volumen y definición desde la raíz hasta la punta, logrando una mirada intensa y duradera.",
      uso: "Peina las pestañas desde la raíz hasta las puntas como primer paso para un efecto de alargamiento Aplicar desde la raíz hasta las puntas en movimiento zigzag. Repetir para un look más dramático.",
      detalles: "Agua/aguamarina, estireno/acrilatos/copolímero de metacrilato de amonio, cera de abejas, aceite de ricino/aceite de semilla de Ricinus communis, butilenglicol, ácido esteárico, poliuretano-35, polimetilsilsesquioxano, estearato de glicerilo, VP/copolímero de eicoseno, goma arábiga Senegal, PVP, fluorflogopita sintética, cera de carnauba/Copernicia Cerifera Cera, alcohol polivinílico, estearato de PEG-100, cera de Candellila/Cera de Euphorbia Cerifera, trietanolamina, fenoxietanol, sílice, goma de xantano, etilhexilglicerina, EDTA tetrasódico, hidroxihidrocinamato de pentaeritritil tetra-di-t-butilo, óxido de hierro/ CI 77499.",
      advertencias: "Creado para uso personal. Manipule y aplique siempre de manera cuidadosa e higiénica. Tratar el aplicador con el debido cuidado higiénico. Nunca aplicar este producto en un vehículo en movimiento. No diluir con agua, saliva o cualquier otra sustancia. Siempre cerrar después de su uso. Suspender el uso si se produce un cambio en el olor o apariencia. No usar este ni ningún otro cosmético para ojos si se tiene una lesión, irritación o infección. Consulte a su médico. Mantener fuera del alcance de los niños.",
      sostenibilidad: "Fórmula vegana y libre de crueldad animal.",
      resultados: "Pestañas más largas, densas y definidas con acabado intenso."
    }
  },

  {
    id: "FF-MK-002",
    nombre: "Eyebrow & Lash Serum",
    precio: 37.00,
    imagen: "productos/eyebrow&lashserum.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "serum",
    favorito: false,
    info: {
      descripcion: "Un suero intensivo diseñado para nutrir y fortalecer tus cejas y pestañas, promoviendo un crecimiento más saludable y un aspecto más denso y definido. Su fórmula ligera se absorbe rápidamente, dejando un acabado suave y sin sensación grasosa.",
      uso: "Aplica una fina capa del suero sobre las cejas y la línea de las pestañas limpias y secas, preferiblemente por la noche. Utiliza el aplicador como si fuera un delineador, trazando suavemente desde la raíz hasta las puntas. Deja que se absorba completamente antes de aplicar otros productos. Usa de manera constante para mejores resultados",
      detalles: "Aqua (agua), butilenglicol, dextrano, acetil tetrapéptido-3, extracto de flor de trifolium pratense (trébol), fenoxietanol, etilhexilglicerina, carbómero, trietanolamina.",
      advertencias: "Solo para uso externo. Evita el contacto directo con los ojos; en caso de contacto, enjuaga con abundante agua. Suspende su uso si se presenta irritación o enrojecimiento. Mantener fuera del alcance de los niños. Conservar en un lugar fresco y seco, alejado de la luz directa.",
      sostenibilidad: "No testado en animales. Sin parabenos.",
      resultados: "Pestañas y cejas más fuertes, densas y con apariencia saludable."
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
      descripcion: "Máscara de pestañas que brinda un volumen explosivo, ideal para quienes buscan un look dramático y llamativo desde la primera aplicación.",
      uso: "Aplica cubriendo las pestañas desde la raíz hasta las puntas y para separarlas aplica con un movimiento en zigzag. Puedes poner una segunda capa si lo prefieres. Farmasi Pro tips: Para mejores resultados prepara tus pestañas aplicando antes de la Mascara , el lash primer.",
      detalles: "Ceras naturales, polímeros fijadores, pigmentos negros intensos.",
      advertencias: "Solo para uso externo. Evita el contacto directo con los ojos; en caso de ocurrir, enjuaga con abundante agua. Mantén el envase bien cerrado y en un lugar fresco, lejos de la luz solar directa. No compartir el aplicador para evitar contaminación. Suspende su uso si presentas irritación o enrojecimiento. Mantener fuera del alcance de los niños.",
      sostenibilidad: "Fórmula vegana y libre de crueldad animal.",
      resultados: "Aporta volumen intenso y una mirada de alto impacto."
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
      descripcion: "Máscara de pestañas de fórmula flexible que ofrece alargamiento y definición natural, disponible en negro y café para looks versátiles.",
      uso: "Aplica el rímel desde la raíz hasta las puntas de las pestañas con movimientos en zigzag para lograr mayor definición y volumen. Repite las capas necesarias según la intensidad deseada. Para un efecto más dramático, aplica también en las pestañas inferiores.",
      detalles: "Pigmentos intensos, polímeros de fijación ligera, ceras vegetales.",
      advertencias: "Solo para uso externo. Evita el contacto directo con los ojos; en caso de ocurrir, enjuaga con abundante agua. Mantén el envase bien cerrado y en un lugar fresco, lejos de la luz solar directa. No compartir el aplicador para evitar contaminación. Suspende su uso si presentas irritación o enrojecimiento. Mantener fuera del alcance de los niños.",
      sostenibilidad: "No testado en animales. Sin parabenos.",
      resultados: "Pestañas alargadas, definidas y con acabado natural"
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
      descripcion: "El secreto para unas pestañas infinitas, ahora en tono marrón suave. INFINILASH MASCARA – BROWN es una edición limitada de nuestra fórmula alargadora más vendida, con un tono marrón intenso que realza tus pestañas con una definición suave y natural.",
      uso: "Esta fórmula cremosa y ligera ofrece un alargamiento espectacular con un acabado suave y fácil de llevar. Perfecta para definir tus ojos sin la intensidad del negro, ideal para looks de día, maquillaje ligero o quienes buscan un efecto más suave pero impactante.",
      detalles: "Por qué la amamos: alarga y da volumen al instante. Resistente a manchas y de larga duración. Ofrece elevación y separación precisas con el cepillo Twin-Vortex.",
      advertencias: "Ingredientes clave: Aceite de ricino – nutre y reduce la rotura de las pestañas. Agente gelificante natural – crea una base suave y adaptable. Cera de cáscara de naranja – aporta volumen y brillo. Goma de acacia de Senegal – mejora la fijación y proporciona elevación.",
      sostenibilidad: "No testado en animales. Sin parabenos.",
      resultados: "Un imprescindible para una belleza natural y sin esfuerzo."
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
      descripcion: "Máscara de pestañas que combina definición y volumen ligero con un cepillo ergonómico para una aplicación uniforme.",
      uso: "Aplica el rímel desde la raíz hasta las puntas de las pestañas con movimientos en zigzag para lograr mayor definición y volumen. Repite las capas necesarias según la intensidad deseada. Para un efecto más dramático, aplica también en las pestañas inferiores.",
      detalles: "Agua (Aqua), Copolímero de estireno/acrilatos/metacrilato de amonio, cera de abejas, aceite de ricino (aceite de semilla de Ricinus communis), butilenglicol, ácido esteárico, poliuretano-35, polimetilsilsesquioxano, estearato de glicerilo, copolímero de VP/eicoseno, goma Acacia Senegal, PVP, fluorflogopita sintética, cera de carnauba (Copernicia Cerifera Cera), alcohol polivinílico, estearato de PEG-100, cera de candelilla (Euphorbia Cerifera Cera), trietanolamina, fenoxietanol, sílice, goma xantana, alantoína, etilhexilglicerina, EDTA tetrasódico, BHT, óxido de hierro (CI 77499).",
      advertencias: "Creado para uso personal. Manipule y aplique siempre de manera cuidadosa e higiénica. Tratar el aplicador con el debido cuidado higiénico. Nunca aplicar este producto en un vehículo en movimiento. No diluir con agua, saliva o cualquier otra sustancia. Siempre cerrar después de su uso. Suspender el uso si se produce un cambio en el olor o apariencia. No usar este ni ningún otro cosmético para ojos si se tiene una lesión, irritación o infección. Consulte a su médico. Mantener fuera del alcance de los niños.",
      sostenibilidad: "No testado en animales. Sin parabenos.",
      resultados: "Mirada definida con pestañas naturales y ligeras."
    }
  },

  {
    id: "FF-MK-007",
    nombre: "Eye Liner Pencil",
    precio: 17.50,
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
        codigo: "FF-MK-007-10",
        precio: 17.50,
        imagen: "productos/eyelinerpencil-10glitzgrey.jpg",
        colorHex: "#808080"
      }
    ],
    info: {
      descripcion: "Lápiz delineador de textura cremosa que permite crear líneas precisas, suaves y de larga duración, adaptable a looks naturales o intensos.",
      uso: "Aplica directamente sobre la línea de las pestañas superiores o inferiores. Para un look más intenso, repite la aplicación hasta lograr la definición deseada. También puedes difuminar con un pincel para un efecto ahumado.",
      detalles: "Trimetilsiloxisilicato, Cera Microcristallina, Trisiloxano, Dimeticona, Mica, Copolímero de acrilatos/acrilato de estearilo/metacrilato de dimeticona, Cera sintética, Polibuteno, Cera microcristalina hidrogenada, Fluorflogopita sintética, Polipropilsesquioxano, triglicérido caprílico/cáprico, ácido polihidroxiesteárico, sílice, copolímero Vp/hexadeceno, ácido isosteárico, tocoferol, caolín, aceite de semilla de Helianthus annuus, lecitina, óxido de estaño, poligliceril-3 polirricinoleato, tetra-di-t-butil hidroxihidrocinamato de pentaeritritilo [+/- Puede contener: CI 77742, CI 77007, CI 16035, CI 77891, CI 77499, CI 77510, CI 77491, CI 77492, CI 77288].",
      advertencias: "Solo para uso externo. Evita el contacto directo con los ojos; en caso de contacto, enjuaga con abundante agua. Suspende su uso si se presenta irritación o enrojecimiento. Mantener fuera del alcance de los niños.",
      sostenibilidad: "Producto cruelty free, vegano y libre de parabenos, desarrollado bajo principios de belleza consciente.",
      resultados: "Líneas definidas, de larga duración y con la posibilidad de looks versátiles."
    }
  },

{
  id: "FF-MK-008",
  nombre: "Hera Glam Set",
  precio: 75.00,
  imagen: "productos/heraglamsetjpg.jpg",
  categoria: "maquillaje",
  subcategoria: "ojos",
  tipo: "set",
  favorito: false,
  info: {
    descripcion: `Eleva tu look diario con el set Hera Glam, una colección cuidadosamente seleccionada que combina elegancia atemporal y belleza moderna.

Incluye la icónica Hera Eau de Parfum para una fragancia sofisticada, la Double Lash Extend Mascara para pestañas voluminosas y definidas, y el Matte Liquid Lipstick 08 en Rose Dream para un acabado elegante y duradero, todo presentado en un lujoso bolso de terciopelo verde.

Perfecto como regalo o como un detalle elegante para ti misma, este set está diseñado para que cada día se sienta naturalmente glamuroso.`,
    
    uso: `• Fragancia: Aplica Hera Eau de Parfum en los puntos de pulso como muñecas, cuello y detrás de las orejas para una fragancia duradera.
• Máscara: Aplica Double Lash Mascara desde la base hasta las puntas de las pestañas, creando capas para un mayor volumen y definición.
• Labial: Finaliza tu look con el Matte Liquid Lipstick 08 Rose Dream, aplicándolo desde el centro de los labios hacia afuera para un acabado uniforme y suave.`,
    
    detalles: `Hera Eau de Parfum (50 ml): mezcla aromática de notas florales y amaderadas.

Double Lash Extend Mascara: Las ceras naturales como abeja (beeswax), carnauba y candelilla ayudan a acondicionar y proteger las pestañas, proporcionando una aplicación suave y fijación flexible.
El aceite de ricino (castor oil) fortalece y cuida las pestañas, mientras que los polímeros ligeros de formación de película ofrecen longitud, elevación y definición duraderas sin apelmazar.
El resultado: pestañas bellas y llenas que se ven más voluminosas y cuidadas con cada uso.

Matte Liquid Lipstick 08 Rose Dream: color intenso con una textura mate cómoda.`,
    
    advertencias: `Ideal para ocasiones especiales o para elevar tu estilo diario.
El bolso compacto hace que sea fácil llevar tus esenciales del día a la noche.`
  }
},
    {
    id: "FF-MK-009",
    nombre: "Midnight Glam Set",
    precio: 65.00,
    imagen: "productos/midnightglamset.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "mascara",
    favorito: false,
    info: {
      descripcion: `Definición, longitud y color intenso — tus esenciales para un glamour festivo.

Descubre una sofisticación sin esfuerzo con el set Midnight Glam, un trío de maquillaje cuidadosamente seleccionado para esculpir, definir y realzar tu belleza natural.
Incluye el Stick Bronzer Smize para un contorno bronceado y un brillo radiante, la Infinilash Length Mascara para pestañas dramáticas y alargadas, y el Latina Lip Lacquer 10 Valiente para un color vibrante y de larga duración — todo presentado en un lujoso bolso de terciopelo azul oscuro.
Perfecto para regalar o para elevar tu propia rutina de belleza, este set ofrece todo lo que necesitas para un look pulido y glamuroso.`,
      uso: `Bronzer: Aplica el Stick Bronzer Smize sobre los pómulos, sienes y mandíbula, luego difumina para lograr un contorno natural con efecto bronceado.

Máscara: Aplica la Infinilash Length Mascara desde la raíz hasta las puntas, aplicando capas según se desee para pestañas más largas y definidas.

Color de labios: Finaliza con el Latina Lip Lacquer 10 Valiente, aplicándolo directamente sobre los labios para un color intenso, audaz y un acabado suave.`,
      advertencias: "Perfecto para una elegancia diaria, ocasiones especiales o para experimentar con looks de ojos creativos y audaces.",
      resultados: "Un maquillaje pulido con mejillas luminosas, rasgos definidos y combinaciones de color que atraen miradas — glamour sin esfuerzo de día a noche."
    }
  },
    {
    id: "FF-MK-010",
    nombre: "Glam Up Eyeshadow Palette",
    precio: 37.50,
    imagen: "productos/glamupeyeshadowpalette.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "sombras",
    favorito: false,
    info: {
      descripcion: `Conoce la nueva Glam Up Palette
12 tonos icónicos (8 mate + 4 brillantes), ahora con nuestra fórmula suave y libre de talco.

Desde un look chic de día hasta un glam audaz de noche, esta paleta ofrece estilos infinitos con pigmentación intensa que ama tu piel tanto como tú.

Tu esencial de maquillaje—porque el glam siempre debe ser seguro.`,
      uso: `1.     Aplica un tono mate como base.

2.     Define la cuenca y el extremo externo con tonos mates más oscuros.

3.     Ilumina el centro del párpado o lagrimal con tonos brillantes.

4.     Difumina bien para un acabado uniforme.

5.     Crea capas según el look deseado, de natural a intenso.`,
      detalles: `Mica: aporta brillo sedoso y un acabado luminoso.
Pigmentos minerales: ofrecen intensidad y duración.
Antioxidantes: cuidan la delicada piel de los ojos.
Conservantes seguros: mantienen la paleta fresca y estable por más tiempo.
Ingredientes:
Mica, Magnesium Stearate, Polyethylene, Silica, Boron Nitride, Kaolin, Mineral Oil,
2-Ethylhexyl Palmitate, Dimethicone, Hydrogenated Polyisobutene, Dipentaerythrityl Pentaisononanoate, Octyldodecanol, Tridecyl Trimellitate, Microcrystalline Wax, Dimethicone Crosspolymer, Phenyl, Trimethicone, Triethoxycaprylylsilane, Aluminum Hydroxide, Calcium Aluminum Borosilicate, Synthetic Fluorphlogopite, Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol, Ethylhexylglycerin, Tin Oxide, Tocopherol, Fragrance (Parfum).

Puede contener: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499), Ultramarines (CI 77007), D&C Black No. 2 (CI 77266), Manganese Violet (CI 77742), FD&C Red No. 40 Aluminum Lake (CI 16035), FD&C Yellow No. 5 Aluminum Lake (CI 19140).`,
      advertencias: "Usa los mates para definir y los brillantes para resaltar. Mezcla y difumina como quieras para un look de día o de noche.",
      sostenibilidad: "La Glam Up Palette está formulada con ingredientes veganos y libres de talco, desarrollada bajo principios de belleza consciente. Además, es cruelty-free, cuidando tu piel y respetando el planeta.",
    }
  },
  {
  id: "FF-MK-011",
  nombre: "No. 75 Anniversary Eyeshadow Palette",
  precio: 75.00,
  imagen: "productos/no.75anniversaryeyeshadowpalette.jpg",
  categoria: "maquillaje",
  subcategoria: "ojos",
  tipo: "sombras",
  favorito: false,
    info: {
  descripcion: "FARMASI cumple 75 años, ¡y lo celebramos a todo color! La paleta de sombras No.75 Anniversary es una edición limitada con 28 tonos atemporales y sofisticados inspirados en 75 años de belleza, fuerza y estilo. Cada tono rinde homenaje a las mujeres que hicieron posible este recorrido: un verdadero tributo al legado femenino.",
  uso: "Aplicar sobre el rostro limpio por la mañana y noche.",
  detalles: "Contiene 12 tonos mate, 6 satinados y 10 ultra-brillantes para una creatividad sin límites. Los pigmentos de calidad profesional ofrecen una aplicación suave y colores de alto impacto para cualquier ocasión.",
  advertencias: "Para uso externo únicamente. Evite el contacto con los ojos. Si se produce irritación, suspenda su uso. Mantener fuera del alcance de los niños.",
  sostenibilidad: "Vegana, libre de crueldad animal y formulada con ingredientes de alta calidad. Empaque reciclable.",
  resultados: "Una paleta que honra tu belleza y celebra nuestra historia, empoderando tu confianza a través del color."
    }
  },
      {
    id: "FF-MK-012",
    nombre: "Oasis Collection - Desert Sands Palette",
    precio: 37.50,
    imagen: "productos/oasiscollection-desertsandspalette.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "sombras",
    favorito: false,
    info: {
      descripcion: "¡Inspiración del desierto! Déjate llevar por su fórmula luminosa y versátil. Tonos mate, brillantes y con destellos que te ayudan a crear looks cautivadores. Nueve tonos inspirados en los diferentes matices de la arena del desierto. Beneficio principal: fórmula luminosa y versátil.",
      uso: "Aplique en el área de los ojos, difuminando y combinando los tonos según el look deseado.",
      detalles: "Talco, Mica, Estearato de Magnesio, Polietileno, Aceite Mineral, Palmitato de Etilhexilo, Sílice, Dimeticona, Poliisobuteno Hidrogenado, Malato de Diisosteárilo, Cera Microcristalina, Trimelitato de Tridecilo, Octildodecanol, Nitruro de Boro, Copolímero de Dimeticona, Fluorflogopita Sintética, Borosilicato de Aluminio y Calcio, Poliisobuteno, Tereftalato de Polietileno, Ácido Hidroxiestearico, Aluminio, Copolímero de Acrilatos, Aceite Vegetal Hidrogenado, Cera Sintética, Hidróxido de Aluminio, Trietoxicaprillisilano, Fenoxietanol, Etilhexilglicerina, Fragancia. Puede contener: Mica (CI 77019), Óxido de Estaño (CI 77861), Óxidos de Hierro Sintéticos (CI 77492, CI 77499, CI 77491), Dióxido de Titanio (CI 77891), Ultramarinos (CI 77007), Violeta de Manganeso (CI 77742), Lago de Aluminio Amarillo N°5 (CI 19140), Lago de Aluminio Rojo N°40 (CI 16035), Negro D&C 2 (CI 77266).",
      advertencias: "Solo para uso externo. En caso de irritación o reacción, suspenda el uso inmediatamente y consulte a su médico. Mantenga fuera del alcance de los niños.",
    }   
      },
      {
    id: "FF-MK-013",
    nombre: "Oasis Collection - Lost Lagoon Eyeshadow Palette",
    precio: 87.50,
    imagen: "productos/oasiscollection-lostlagooneyeshadowpalette.jpg",
    categoria: "maquillaje",
    subcategoria: "ojos",
    tipo: "sombras",
    favorito: false,
        info: {
      descripcion: "Experimenta la belleza de rostro completo al alcance de tus dedos. Esta paleta meticulosamente seleccionada presenta una mezcla armoniosa de tonos mate y brillantes, ideal para iluminar, transformar, esculpir y dar color para revelar a la diosa interior. Incluye sombras de ojos, mejillas, bronceador y contorno. ¡Espléndida sofisticación!",
      uso: "Sombras de ojos (Eyeshadow): Talco, Mica, Estearato de Magnesio, Polietileno, Aceite Mineral, Palmitato de Etilhexilo, Sílice, Dimeticona, Tridecyl Trimellitate, Poliisobuteno Hidrogenado, Octildodecanol, Malato de Diisosteárilo, Cera Microcristalina, Nitruro de Boro, Dimeticona Crosspolymer, Fluorflogopita Sintética, Borosilicato de Aluminio y Calcio, Triethoxycaprylylsilane, Hidróxido de Aluminio, Fenoxietanol, Etilhexilglicerina, Acetato de Tocoferilo, Pentaeritritil Tetra-di-t-butil Hidroxihidrocinnamato, Fragancia Puede contener: Mica (CI 77019), Óxido de Estaño (CI 77861), Óxido de Hierro Sintético (CI 77491), Óxido de Hierro Sintético (CI 77492), Óxido de Hierro Sintético (CI 77499), Dióxido de Titanio (CI 77891), Azul Ultramar (CI 77007), Violeta de Manganeso (CI 77742), FD&C Amarillo N°5 Lago de Aluminio (CI 19140), FD&C Rojo N°40 Lago de Aluminio (CI 16035), D&C Negro 2 (CI 77266) Contorno (Contour): Talco, Mica, Estearato de Magnesio, Polietileno, Aceite Mineral, Palmitato de Etilhexilo, Sílice, Dimeticona, Tridecyl Trimellitate, Poliisobuteno Hidrogenado, Octildodecanol, Malato de Diisosteárilo, Cera Microcristalina, Nitruro de Boro, Dimeticona Crosspolymer, Triethoxycaprylylsilane, Hidróxido de Aluminio, Fenoxietanol, Etilhexilglicerina, Acetato de Tocoferilo, Pentaeritritil Tetra-di-t-butil Hidroxihidrocinnamato, Fragancia Puede contener: Óxido de Hierro Sintético (CI 77491), Óxido de Hierro Sintético (CI 77492), Óxido de Hierro Sintético (CI 77499), Dióxido de Titanio (CI 77891), Azul Ultramar (CI 77007), Violeta de Manganeso (CI 77742), FD&C Amarillo N°5 Lago de Aluminio (CI 19140), FD&C Rojo N°40 Lago de Aluminio (CI 16035) Rubor (Blush): Talco, Mica, Estearato de Magnesio, Polietileno, Aceite Mineral, Palmitato de Etilhexilo, Sílice, Dimeticona, Tridecyl Trimellitate, Poliisobuteno Hidrogenado, Octildodecanol, Malato de Diisosteárilo, Cera Microcristalina, Nitruro de Boro, Dimeticona Crosspolymer, Triethoxycaprylylsilane, Hidróxido de Aluminio, Fenoxietanol, Etilhexilglicerina, Acetato de Tocoferilo, Pentaeritritil Tetra-di-t-butil Hidroxihidrocinnamato, Fragancia Puede contener: Mica (CI 77019), Óxido de Hierro Sintético (CI 77491), Óxido de Hierro Sintético (CI 77492), Óxido de Hierro Sintético (CI 77499), Dióxido de Titanio (CI 77891), Azul Ultramar (CI 77007), Violeta de Manganeso (CI 77742), FD&C Amarillo N°5 Lago de Aluminio (CI 19140), FD&C Rojo N°40 Lago de Aluminio (CI 16035), D&C Rojo N°6 Lago de Bario (CI 15850), D&C Rojo N°7 Lago de Calcio (CI 15850), D&C Rojo N°27 Lago de Aluminio (CI 45410) Iluminador (Highlighter): Talco, Mica, Estearato de Magnesio, Polietileno, Aceite Mineral, Palmitato de Etilhexilo, Sílice, Dimeticona, Tridecyl Trimellitate, Poliisobuteno Hidrogenado, Octildodecanol, Malato de Diisosteárilo, Cera Microcristalina, Nitruro de Boro, Dimeticona Crosspolymer, Fluorflogopita Sintética, Borosilicato de Aluminio y Calcio, Triethoxycaprylylsilane, Hidróxido de Aluminio, Fenoxietanol, Etilhexilglicerina, Acetato de Tocoferilo, Pentaeritritil Tetra-di-t-butil Hidroxihidrocinnamato, Fragancia Puede contener: Mica (CI 77019), Óxido de Estaño (CI 77861), Óxido de Hierro Sintético (CI 77491), Óxido de Hierro Sintético (CI 77492), Óxido de Hierro Sintético (CI 77499), Dióxido de Titanio (CI 77891), Azul Ultramar (CI 77007), Violeta de Manganeso (CI 77742), FD&C Amarillo N°5 Lago de Aluminio (CI 19140), FD&C Rojo N°40 Lago de Aluminio (CI 16035)",
      detalles: "Paletas inspiradas en los paisajes del desierto, con 9 tonos mate en fórmulas ligeras, libres de talco y respetuosas con la piel.",
      resultados: "Aplicar sobre los párpados y difuminar según el look deseado. Combinar mates, brillos y glitter."
    }
      },
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

  // ❤️ FAVORITOS
  const favBtn = card.querySelector(".product-fav");
  favBtn.addEventListener("click", e => {
    e.stopPropagation();
    p.favorito = !p.favorito;
    favBtn.classList.toggle("active");
  });

  // 🛒 AGREGAR AL CARRITO
  card.querySelector("button").addEventListener("click", e => {
    e.stopPropagation();

    agregarAlCarrito({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.imagen,
      codigo: p.id,
      color: null
    });

    alert(`Agregaste ${p.nombre} al carrito`);
  });

  // 👉 ABRIR DETALLE DEL PRODUCTO
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

  const acordeonSecciones = [
    { titulo: "Descripción de Producto", contenido: info.descripcion },
    { titulo: "Como usarlo", contenido: info.uso },
    { titulo: "Detalles técnicos del producto", contenido: info.detalles },
    { titulo: "Precauciones", contenido: info.advertencias },
    { titulo: "Sostenibilidad", contenido: info.sostenibilidad || info.sostentibiidad },
    { titulo: "Resultados Comprobados", contenido: info.resultados }
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
  <span class="product-code">Código: ${varianteSeleccionada?.codigo || producto.id}</span>
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
          ${acordeonSecciones
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

  const btnAgregar = detalleContainer.querySelector(".btn");

btnAgregar.addEventListener("click", () => {
  const productoCarrito = {
    id: producto.id,
    nombre: producto.nombre,
    precio: precio,
    imagen: imagen,
    codigo: varianteSeleccionada?.codigo || producto.id,
    color: varianteSeleccionada?.color || null
  };

  agregarAlCarrito(productoCarrito);

  alert(`Agregaste ${producto.nombre} al carrito`);
});


// Evento para variantes
if (producto.variantes) {
  const botones = detalleContainer.querySelectorAll(".color-btn");

  botones.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      mostrarDetalleProducto(producto, producto.variantes[idx]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
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

// ===============================
// CARRITO (VERSIÓN DEFINITIVA)
// ===============================
function agregarAlCarrito(producto) {
  const existente = carrito.find(p =>
    p.id === producto.id &&
    p.codigo === producto.codigo
  );

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function renderCarrito() {
  const cont = document.getElementById("cart-container");
  const totalTxt = document.getElementById("cart-total");

  if (!cont || !totalTxt) return;

  cont.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    total += p.precio * p.cantidad;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${p.imagen}" width="60">
      <div>
        <strong>${p.nombre}</strong><br>
        ${p.color ? `<small>${p.color}</small><br>` : ""}
        $${p.precio.toFixed(2)} x ${p.cantidad}
      </div>
      <div>
        <button onclick="cambiarCantidad(${i}, -1)">−</button>
        <button onclick="cambiarCantidad(${i}, 1)">+</button>
        <button onclick="eliminarItem(${i})">❌</button>
      </div>
    `;

    cont.appendChild(div);
  });

  totalTxt.textContent = `Total: $${total.toFixed(2)}`;
}

function cambiarCantidad(index, delta) {
  carrito[index].cantidad += delta;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

  // ===============================
// CUENTA / SESIÓN (ÚNICA FUENTE)
// ===============================
function renderCuenta() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const nameEl = document.getElementById("user-name");
  const emailEl = document.getElementById("user-email");
  const btnLogin = document.getElementById("btn-login");
  const btnLogout = document.getElementById("btn-logout");

  if (!nameEl || !emailEl || !btnLogin || !btnLogout) return;

  if (usuario) {
    nameEl.textContent = usuario.nombre || "Usuario";
    emailEl.textContent = usuario.email;
    btnLogin.style.display = "none";
    btnLogout.style.display = "inline-block";
  } else {
    nameEl.textContent = "Invitado";
    emailEl.textContent = "—";
    btnLogin.style.display = "inline-block";
    btnLogout.style.display = "none";
  }
}

// Logout
safeClick("btn-logout", () => {
  localStorage.removeItem("usuario");
  renderCuenta();
  mostrarSeccion("inicio");
});

// Ejecutar al cargar
renderCuenta();

