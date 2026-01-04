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

const container = document.getElementById("products-container");

// Cargar reseñas desde localStorage
let reviews = JSON.parse(localStorage.getItem("reviews")) || {};

// Crear cada producto
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>

        <div class="rating" id="rating-${product.id}">
            Calificación:
            ${[1,2,3,4,5].map(i => `<span class="star" data-star="${i}">&#9734;</span>`).join('')}
        </div>

        <div class="reviews" id="reviews-${product.id}">
            <h4>Reseñas:</h4>
            <div class="reviews-list"></div>
            <textarea placeholder="Escribe tu reseña..." id="review-text-${product.id}"></textarea>
            <input type="file" id="review-img-${product.id}" accept="image/*">
            <button onclick="addReview(${product.id})">Agregar reseña</button>
        </div>
    `;

    container.appendChild(div);

    // Pintar estrellas guardadas
    if(reviews[product.id]){
        setStars(product.id, reviews[product.id].rating);
        renderReviews(product.id);
    }
});

// Función para agregar al carrito
function addToCart(id){
    const product = products.find(p => p.id === id);
    alert(`${product.name} agregado al carrito`);
}

// Funciones de estrellas
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function(){
        const productId = this.parentElement.id.split("-")[1];
        const rating = parseInt(this.dataset.star);

        if(!reviews[productId]) reviews[productId] = {rating: 0, reviews: []};
        reviews[productId].rating = rating;

        localStorage.setItem("reviews", JSON.stringify(reviews));
        setStars(productId, rating);
    });
});

function setStars(productId, rating){
    const stars = document.querySelectorAll(`#rating-${productId} .star`);
    stars.forEach(s => {
        s.innerHTML = parseInt(s.dataset.star) <= rating ? "★" : "☆";
    });
}

// Funciones de reseñas
function addReview(productId){
    const text = document.getElementById(`review-text-${productId}`).value;
    const imgInput = document.getElementById(`review-img-${productId}`);
    const imgFile = imgInput.files[0];

    if(!text && !imgFile) return alert("Debes escribir algo o subir una imagen");

    if(!reviews[productId]) reviews[productId] = {rating: 0, reviews: []};

    const reviewObj = {text, img: null};

    if(imgFile){
        const reader = new FileReader();
        reader.onload = function(e){
            reviewObj.img = e.target.result;
            reviews[productId].reviews.push(reviewObj);
            localStorage.setItem("reviews", JSON.stringify(reviews));
            renderReviews(productId);
        }
        reader.readAsDataURL(imgFile);
    } else {
        reviews[productId].reviews.push(reviewObj);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        renderReviews(productId);
    }

    document.getElementById(`review-text-${productId}`).value = "";
    imgInput.value = "";
}

function renderReviews(productId){
    const list = document.querySelector(`#reviews-${productId} .reviews-list`);
    list.innerHTML = "";
    reviews[productId].reviews.forEach(r => {
        const div = document.createElement("div");
        div.classList.add("review");
        div.innerHTML = `
            <p>${r.text}</p>
            ${r.img ? `<img src="${r.img}" class="review-img">` : ""}
            <hr>
        `;
        list.appendChild(div);
    });
}
