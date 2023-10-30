const cartCounterElement = document.getElementById("cart-counter");
const FavoriteCartCounter = document.getElementById("favorite-counter");

const cart = [];
const favorite = [];

const products = [
    {
        id: 1,
        name: "CoffeeBean - Coffee 1 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-1.png",
        price: "4.99$",
    },
    {
        id: 2,
        name: "CoffeeBean - Coffee 2 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-2.png",
        price: "2.50$",
    },
    {
        id: 3,
        name: "CoffeeBean - Coffee 3 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-3.png",
        price: "2.00$",
    },
    {
        id: 4,
        name: "CoffeeBean - Coffee 4 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-4.png",
        price: "5.99$",
    },
    {
        id: 5,
        name: "CoffeeBean - Coffee 5 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-5.png",
        price: "5.50$",
    },
    {
        id: 6,
        name: "CoffeeBean - Coffee 6 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-6.png",
        price: "4.99$",
    },
    {
        id: 7,
        name: "CoffeeBean - Coffee Pack 1 2x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nequequis. Quod, autem saepe voluptates quas consectetur facere similique officiainventore at repellat eveniet! Alias quam, rem libero voluptatum earumaperiam ipsum quas in, dicta laudantium labore, dolorem eveniet illo.",
        image: "./assets/images/Coffee-pack-1.png",
        price: "39.99$",
    },
    {
        id: 8,
        name: "CoffeeBean - Coffee Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nequequis. Quod, autem saepe voluptates quas consectetur facere similique officiainventore at repellat eveniet! Alias quam, rem libero voluptatum earumaperiam ipsum quas in, dicta laudantium labore, dolorem eveniet illo.",
        image: "./assets/images/Coffee-pack-2.png",
        price: "39.99$",
    },
    {
        id: 9,
        name: "CoffeeBean - Coffee Pack 3 3x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-pack-3.png",
        price: "55.00$",
    },
];

const productsListElement = document.getElementById("products-list");

products.forEach((product) => {
    const productCardElement = document.createElement("div");
    productCardElement.classList.add("product-card");

    productCardElement.appendChild(
        createProductImage(product.image, product.name)
    );
    productCardElement.appendChild(createProductName(product.name));
    productCardElement.appendChild(
        createProductDescription(product.description)
    );
    productCardElement.appendChild(createProductPrice(product.price));

    productCardElement.appendChild(createProductAddToCartButton(product.id));

    productCardElement.appendChild(createProductAddToFavorite(product.id));

    productsListElement.appendChild(productCardElement);
});

function createProductImage(src, alt) {
    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.setAttribute("src", src);
    productImage.setAttribute("alt", alt);

    return productImage;
}

function createProductName(name) {
    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerText = name;

    return productName;
}

function createProductDescription(description) {
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.innerText = description;

    return productDescription;
}

function createProductPrice(price) {
    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerText = price;

    return productPrice;
}

function createProductAddToCartButton(productId) {
    const productAddToCartButton = document.createElement("a");
    productAddToCartButton.classList.add("product-add-to-cart-button");
    productAddToCartButton.innerHTML =
        '<i class="fa-solid fa-shopping-basket"></i> Add to cart';

    productAddToCartButton.addEventListener("click", () => {
        addProductToCart(productId);
    });

    return productAddToCartButton;
}

function addProductToCart(productId) {
    const productDetails = getProductDetails(productId);

    if (cart.some((product) => product.id === productId)) {
        cart.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        cart.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }
    updateCartCounter();
}

function getProductDetails(productId) {
    for (let product of products) {
        if (product.id === productId) {
            return product;
        }
    }
}

function updateCartCounter() {
    cartCounterElement.innerText = cart.length;
}

function createProductAddToFavorite(productId) {
    const productAddToFavorite = document.createElement("a");
    productAddToFavorite.classList.add("product-add-to-favorite");
    productAddToFavorite.innerHTML = '<i class="fa-solid fa-heart"></i>';

    productAddToFavorite.addEventListener("click", () => {
        addProductToFavorite(productId);
    });

    return productAddToFavorite;
}

function addProductToFavorite(productId) {
    const productDetails = getProductDetails(productId);

    if (favorite.some((product) => product.id === productId)) {
        favorite.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        favorite.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }
    updateFavoriteCartCounter();
}

function updateFavoriteCartCounter() {
    FavoriteCartCounter.innerText = favorite.length;
}

function createCartList() {
    const cartList = document.createElement("div");
    cartList.classList.add("cart-list-container");

    cart.forEach((product) => {
        cartList.appendChild(createProductImage(product.image, product.name));
        cartList.appendChild(createProductName(product.name));
        cartList.appendChild(createProductPrice(product.price));
    });
    console.log(cartList);
    return cartList;
}

function showCartList() {
    cartCounterElement.addEventListener("click", () => {
        createCartList();
    });
}

showCartList();

// const addCartToHTML = () => {
//     listCart.innerHTML = "";
//     let totalQuantity = 0;
//     if (cart.length > 0) {
//         cart.forEach((cart) => {
//             totalQuantity = totalQuantity + cart.quantity;
//             let newCart = document.createElement("div");
//             newCart.classList.add("item");
//             newCart.dataset.id = cart.productId;

//             let positionProduct = products.findIndex(
//                 (value) => value.id == cart.productId
//             );
//             let info = products[positionProduct];
//             newCart.innerHTML = `
//             <img
//                 class="image"
//                 src="${info.image}"
//                 alt="frappe"
//             />
//             <h3 class="name">${info.name}</h3>
//             <p class="totalPrice">$${info.price * cart.quantity}</p>
//             <div class="quantity">
//                 <span class="minus"><</span>
//                 <span>${cart.quantity}</span>
//                 <span class="plus">></span>
//             </div>`;
//             listCart.appendChild(newCart);
//         });
//     }
//     iconCartSpan.innerText = totalQuantity;
// };

// let listCart = document.querySelector(".list-cart");
// let iconCartSpan = document.querySelector(".link cart span");

// linkCart.addEventListener("click", () => {
//     body.classList.toggle("showCart");
// });

// closeCart.addEventListener("click", () => {
//     body.classList.toggle("showCart");
// });

// linkCart.forEach((element) => {
//     element.addEventListener("click", () => {
//         body.classList.toggle("showCart");
//     });
// });

// closeCart.forEach((element) => {
//     element.addEventListener("click", () => {
//         body.classList.toggle("showCart");
//     });
// });
