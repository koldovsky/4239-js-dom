const products = [
  {
    id: 1,
    name: "Baby Yoda",
    price: 19.99,
    image: "img/baby-yoda.svg",
    description: "A cute Baby Yoda plush sticker.",
  },
  {
    id: 2,
    name: "Banana",
    price: 29.99,
    image: "img/banana.svg",
    description: "A realistic banana plush sticker.",
  },
  {
    id: 3,
    name: "Girl",
    price: 39.99,
    image: "img/girl.svg",
    description: "A stylish girl plush sticker.",
  },
  {
    id: 4,
    name: "Viking",
    price: 49.99,
    image: "img/viking.svg",
    description: "Viking plush sticker with a horned helmet.",
  },
];

function renderProductList(products) {
    const productListHtml = [];
    for (const product of products) {
        productListHtml.push(`<article class="products__item">
            <img class="products__image" src="${product.image}" alt="${product.name}">
            <h3 class="products__name">${product.name}</h3>
            <p class="products__description">${product.description}
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy - ${product.price.toFixed(2)}
                </button>
            </div>
        </article>`);
    }
    const productListContainer = document.querySelector(".products__list");
    productListContainer.innerHTML = productListHtml.join("");
}
renderProductList(products);
