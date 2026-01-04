// Lista de productos
const products = [
    {
        id: 1,
        name: "Proteína Whey",
        price: 25.99,
        img: "img/proteina-whey.jpg"
    },
    {
        id: 2,
        name: "Multivitamínico",
        price: 15.50,
        img: "img/multivitaminico.jpg"
    },
    {
        id: 3,
        name: "Aminoácidos BCAA",
        price: 19.99,
        img: "img/bcaa.jpg"
    }
];

// Seleccionamos el contenedor
const container = document.getElementById("products-container");

// Creamos tarjetas para cada producto
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;

    container.appendChild(div);
});

// Función simple para agregar al carrito
function addToCart(id) {
    const product = products.find(p => p.id === id);
    alert(`${product.name} agregado al carrito`);
}
