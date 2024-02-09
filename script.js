const slider = document.getElementById("slider");
const sliderImagesContainer = document.getElementById("sliderImages");
const sliderImages = [
  "imgs/cat-g9rdx9uk2425fip2.jpg",
  "imgs/cat-games-fetch-301741957-2000-55f0272d106b40d3852635754f06a2e9.jpg",
  "imgs/63ce4a6b950366a2f7f368fd_How to switch a cat from dry to wet food-p-1080.jpeg",
];

const categories = [
  {
    name: "Wet Cat Food",
    products: [
      {
        name: "delicious Chicken Feast",
        image: "imgs/81UlUosG54L._AC_SX679_.jpg",
        description: "premium cat food with chicken in gravy",
      },
      {
        name: "cat wet food with chicken",
        image: "imgs/61TsX4CV2GL.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "a delicious cat food for all cats and kittens",
      },
    ],
  },
  {
    name: "Dry Cat Food",
    products: [
      {
        name: "Friskies",
        image: "imgs/81cKz4HWX8L._AC_SX679_.jpg",
        description: "A Tasty Mixture Of Beef And Chicken",
      },
      {
        name: "9 Lives",
        image:
          "imgs/9Lives-Daily-Essentials-Dry-Cat-Food-With-Chicken-Beef-Salmon-Flavors-15-5-lb-Bag_2f561c17-4d13-4172-9f0c-cb78709b4d39.b447c46c4937fd22c45b945e65ae88b5.webp",
        description: "the best banalced meal for your cat ",
      },
    ],
  },
  {
    name: "kitten Food",
    products: [
      {
        name: "Josera",
        image: "imgs/image-42.png",
        description: "tasty kitten food",
      },
      {
        name: "Leoanrdo",
        image: "imgs/WhatsAppImage2020-10-20at8.18.52PM_1_800x.webp",
        description: "premium quality",
      },
    ],
  },

  {
    name: "adult Cat Food",
    products: [
      {
        name: "Procat",
        image: "imgs/61Rp2FITuxL._AC_SY879_.jpg",
        description: "for Adult cat (1-7 years) with chicken liver",
      },
      { name: "Monello", image: "imgs/1.jpg", description: "premium quality" },
    ],
  },

  {
    name: "Cat Toys",
    products: [
      {
        name: "Feather Wand",
        image:
          "imgs/6572c531ea366e4e744b6d34-cat-toys-feathers-wand-interactive-cat.jpg",
        description: "interactive cat toy ",
      },
      {
        name: "Stretchable Spring",
        image: "imgs/61miq6For+L._AC_SX679_.jpg",
        description: "interactive cat toy with a bell",
      },
    ],
  },

  {
    name: "Cat Backpacks",
    products: [
      {
        name: "bubble pet carrier",
        image: "imgs/71R-39tefgL.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "airline approved,transparent and waterproof backpack",
      },
      {
        name: "pet sporty bag",
        image: "imgs/124780_MAIN._AC_SL600_V1495546557_.jpg",
        description: "it looks like a sports bag easily held and carried",
      },
    ],
  },

  {
    name: "Cat Beds",
    products: [
      {
        name: "cushion bed",
        image: "imgs/612rI9O576L._AC_UF1000,1000_QL80_.jpg",
        description: "A comfy bed for your cat to relax on ",
      },
      {
        name: "a homey bed",
        image: "imgs/619wvwJoOkL._AC_UF1000,1000_QL80_.jpg",
        description:
          "looks like a home very beneficial in cold winter and it also has a ball with a string so that your cat can play with it ",
      },
    ],
  },
  {
    name: "Other Products",
    products: [
      {
        name: "Leash",
        image: "imgs/61lO0Typ9QL._AC_SX679_.jpg",
        description: "To keep your cat safe on walks",
      },
      {
        name: "Shovel: cat litter scoop",
        image: "imgs/5168m1jQp4L._AC_SX679_.jpg",
        description: "to clean the litter box more easily ",
      },
      {
        name: "Litter Box",
        image: "imgs/41o-Zxtv5CL._AC_.jpg",
        description: "it has deodorant and it is dust free",
      },
      {
        name: "Litter",
        image: "imgs/61ZIrBhbBKL.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "premuim quality,orange scented and super clumping",
      },
    ],
  },
];
const productInfo = document.getElementById("productinfo");
// const productInfo = document.getElementById("productInfo");

const categoryFilter = document.getElementById("categoryFilter");

function generateProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className = "product";

  const imageElement = document.createElement("img");
  imageElement.src = product.image;
  imageElement.alt = product.name;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Add to Cart";
  buttonElement.addEventListener("click", function () {
    addToCart(product.name);
  });

  productElement.appendChild(imageElement);
  productElement.appendChild(descriptionElement);
  productElement.appendChild(buttonElement);

  return productElement;
}

function generateCategoryElement(category) {
  const categoryElement = document.createElement("div");
  categoryElement.className = "category";
  categoryElement.dataset.category = category.name;

  const categoryNameElement = document.createElement("h2");
  categoryNameElement.textContent = category.name;

  category.products.forEach((product) => {
    const productElement = generateProductElement(product);
    categoryElement.appendChild(productElement);
  });

  return categoryElement;
}

function filterProducts(filterValue) {
  const productElements = productInfo.getElementsByClassName("product");
  Array.from(productElements).forEach((productElement) => {
    const category = productElement.parentElement.dataset.category;
    if (!filterValue || category === filterValue) {
      productElement.style.display = "block";
    } else {
      productElement.style.display = "none";
    }
  });
}

categoryFilter.addEventListener("change", function () {
  filterProducts(this.value);
});

function displayProducts() {
  categories.forEach((category) => {
    const categoryElement = generateCategoryElement(category);
    productInfo.appendChild(categoryElement);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
});
let currentImageIndex = 0;

function showCurrentImage() {
  const currentImage = sliderImages[currentImageIndex];
  sliderImagesContainer.innerHTML = `<img src="${currentImage}" alt="Slide ${
    currentImageIndex + 1
  }">`;
}

showCurrentImage();

document.getElementById("nextButton").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  showCurrentImage();
});

document.getElementById("prevButton").addEventListener("click", function () {
  currentImageIndex =
    (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  showCurrentImage();
});

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

function generateCategoryButton(category) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = category.name;
  buttonElement.addEventListener("click", () => filterProducts(category.name));
  return buttonElement;
}

function displayFilterBar() {
  const filterBar = document.querySelector(".category-filters");
  categories.forEach((category) => {
    filterBar.appendChild(generateCategoryButton(category));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
  displayFilterBar();
});

function addToCart(productName) {
  alert(`${productName} added to the cart!`);
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  showCurrentImage();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  showCurrentImage();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
