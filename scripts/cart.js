let openShopping = document.querySelector(".link cart");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCart = document.querySelector(".list-cart");
let total = document.querySelector(".total");
let header = document.querySelector("header");
let quantity = document.querySelector(".cart-counter");

openShopping.addEventListener("click", () => {
    header.classList.add("active");
});
closeShopping.addEventListener("click", () => {
    header.classList.remove("active");
});

let products = [
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-pack-1.png",
        price: "39.99$",
    },
    {
        id: 8,
        name: "CoffeeBean - Coffee Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
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

let listCarts = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML;
        list.appendChild(new)
    });
}
initApp();
