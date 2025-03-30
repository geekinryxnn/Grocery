const products = [
  {
    id: 2,
    name: "Red Apples",
    description: "Crisp and juicy red apples.",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Milk (1 Liter)",
    description: "Fresh cow's milk.",
    price: 90.0,
    image:
      "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdHRsZSUyMG9mJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Brown Bread",
    description: "Whole grain brown bread.",
    price: 50.0,
    image:
      "https://images.unsplash.com/photo-1626423642733-9bb26dea2691?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Eggs (Tray of 30)",
    description: "Fresh farm eggs.",
    price: 300.0,
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJheSUyMG9mJTIwZWdnc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Tomatoes (1 Kg)",
    description: "Fresh and juicy tomatoes.",
    price: 80.0,
    image:
      "https://media.istockphoto.com/id/1927447986/photo/farmer-in-the-organic-garden-tomato-harvest-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=J-lKpEsWLCmx4yhiBnMpsQMvW0mSD16qI57ZgWr2W6E=",
  },
  {
    id: 7,
    name: "Potatoes (1 Kg)",
    description: "Freshly harvested potatoes.",
    price: 100.0,
    image:
      "https://media.istockphoto.com/id/2192677464/photo/close-up-of-farmer-holding-potato-at-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=8XxVnwxQv6xz_vtjxYG9VPqQoBv2mSg-s5FJqpRtT2w=",
  },
  {
    id: 8,
    name: "Carrots (1 Kg)",
    description: "Crunchy and fresh carrots.",
    price: 70.0,
    image:
      "https://media.istockphoto.com/id/2175696993/photo/carrot-basket.webp?a=1&b=1&s=612x612&w=0&k=20&c=V7fL5X2K6dLgKspRbAPC5Wv1ifDxgej4jPbcWQOJDUg=",
  },
  {
    id: 9,
    name: "Spinach (1 Bunch)",
    description: "Fresh and healthy spinach.",
    price: 40.0,
    image:
      "https://images.unsplash.com/photo-1598278242809-6c21ee17aef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwaW5hY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Cabbage (1 Head)",
    description: "Crisp and fresh cabbage.",
    price: 60.0,
    image:
      "https://plus.unsplash.com/premium_photo-1661963465934-55eeb52f64d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    name: "Broccoli (1 Kg)",
    description: "Fresh green broccoli.",
    price: 120.0,
    image:
      "https://plus.unsplash.com/premium_photo-1661503128622-3137e799f2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvY29sbGl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    name: "Cauliflower (1 Head)",
    description: "Fresh and healthy cauliflower.",
    price: 100.0,
    image:
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    name: "Pineapple (1 Piece)",
    description: "Sweet and juicy pineapple.",
    price: 150.0,
    image:
      "https://plus.unsplash.com/premium_photo-1724255994628-dceb76a829e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluYXBwbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    name: "Watermelon (1 Piece)",
    description: "Fresh and juicy watermelon.",
    price: 200.0,
    image:
      "https://media.istockphoto.com/id/1493894204/photo/young-asian-woman-is-grocery-shopping-for-fresh-organic-fruits-in-the-supermarket-she-is.webp?a=1&b=1&s=612x612&w=0&k=20&c=7VxjqGVxRq6wpF-A1xylE47xOHzSJTfbG6ECfkAzjPk=",
  },
  {
    id: 15,
    name: "Oranges (1 Kg)",
    description: "Sweet and tangy oranges.",
    price: 120.0,
    image:
      "https://media.istockphoto.com/id/1179828283/photo/oranges-on-wood-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=1WUwXNse5TwQooidFNSJjWeYxjrsdAim0AVdvX270xI=",
  },
  {
    id: 16,
    name: "Lettuce (1 Head)",
    description: "Crisp and fresh lettuce.",
    price: 50.0,
    image:
      "https://images.unsplash.com/photo-1515356956468-873dd257f911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    name: "onions(1 Kg)",
    description: "Fresh and sweet onions.",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9uaW9uc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 18,
    name: "Green Beans (1 Kg)",
    description: "Fresh and crunchy green beans.",
    price: 80.0,
    image:
      "https://plus.unsplash.com/premium_photo-1725384940646-ef6aa8c2a091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    name: "Peas (1 Kg)",
    description: "Fresh and sweet peas.",
    price: 100.0,
    image:
      "https://media.istockphoto.com/id/104822169/photo/peas-and-pea-pods.webp?a=1&b=1&s=612x612&w=0&k=20&c=FCwkrieQSHBoHmTKj_OVOZ_npi3NdZYXjoDbBC8qPkI=",
  },
  {
    id: 20,
    name: "Mangoes (1 Kg)",
    description: "Sweet and juicy mangoes.",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1606448423038-3de11e152e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ29lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 21,
    name: "Papai (1 Piece)",
    description: "Fresh and ripe papaya.",
    price: 120.0,
    image:
      "https://media.istockphoto.com/id/1493004470/photo/fresh-ripe-cut-and-whole-papaya-fruits-on-wooden-table-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfFWyOCk-upmJW4Ka8lw66D61A5gCEMKA_bDoQ3ECCk=",
  },
  {
    id: 22,
    name: "Strawberries (1 Kg)",
    description: "Fresh and sweet strawberries.",
    price: 300.0,
    image:
      "https://media.istockphoto.com/id/2004978876/photo/strawberries-in-a-plate-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=HMeJZwQP-JyRnEEjeK7b6UW30UYZEUvCagIWGXkWSjw=",
  },
  {
    id: 23,
    name: "Grapes (1 Kg)",
    description: "Fresh and grapes.",
    price: 400.0,
    image:
      "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGVzfGVufDB8fDB8fHww",
  },
  {
    id: 24,
    name: "Guava's (1 Kg)",
    description: "Fresh and ripe guava's.",
    price: 450.0,
    image:
      "https://images.unsplash.com/photo-1600659090872-74ca5ca1023a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VhdmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 25,
    name: "Avocado (1 Piece)",
    description: "Creamy and fresh avocado.",
    price: 50.0,
    image:
      "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 26,
    name: "Cherries (1 Kg)",
    description: "Fresh and sweet cherries.",
    price: 500.0,
    image:
      "https://media.istockphoto.com/id/1693717637/photo/cherry-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=382iG_m1TuQ9ukgz0QOPn53WJ0mllNtOrOAO23OQz_I=",
  },
  {
    id: 27,
    name: "Plums (1 Kg)",
    description: "Juicy and sweet plums.",
    price: 200.0,
    image:
      "https://plus.unsplash.com/premium_photo-1675234374063-2b0357abcc70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGx1bXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 28,
    name: "bananas (1 Kg)",
    description: "Fresh bananas",
    price: 50.0,
    image:
      "https://images.unsplash.com/photo-1566393028639-d108a42c46a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmFuYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 29,
    name: "Pears (1 Kg)",
    description: "Sweet and juicy pears.",
    price: 180.0,
    image:
      "https://media.istockphoto.com/id/1840092519/photo/green-pears-are-in-bowl-on-wooden-surface-with-other-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=zhtce5aVJXAcQUlA68DgXg7Ex7wZoFJu-APo-asI7A4=",
  },
  {
    id: 30,
    name: "Kiwi (1 Kg)",
    description: "Fresh and tangy kiwi.",
    price: 300.0,
    image:
      "https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l3aSUyMGZydWl0fGVufDB8fDB8fHww",
  },
  {
    id: 31,
    name: "Sukuma (1 bunch)",
    description: "Fresh and sweet blueberries.",
    price: 20.0,
    image:
      "https://images.unsplash.com/photo-1668717066198-53148ca2b11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 32,
    name: "Coconut (1 Piece)",
    description: "Fresh and healthy coconut.",
    price: 100.0,
    image:
      "https://media.istockphoto.com/id/1158975559/photo/coco-coconut-half-and-piece-isolated-cocos-white-full-depth-of-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=sPArfNtj2tZ7TnNuZZsQGEbAOBfvk9Rn6UMa55sDt-o=",
  },
  // Add more products here with their names, descriptions, prices, and image file paths
];

function displayProducts() {
  const productListDiv = document.querySelector(".product-list");
  productListDiv.innerHTML = ""; // Clear any existing content

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: KSh ${product.price.toFixed(2)}`;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.onclick = () => addToCart(product); // We'll implement addToCart later

    productDiv.appendChild(image);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(addButton);

    productListDiv.appendChild(productDiv);
  });
}

// Call displayProducts when the script loads
displayProducts();

function searchProducts() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach((item) => {
    const productName = item.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// Basic cart functionality (we'll expand on this)
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
  console.log("Product added to cart:", product);
}

function updateCartDisplay() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartItemCountSpan = document.getElementById("cart-item-count");
  const cartTotalSpan = document.getElementById("cart-total");

  cartItemsDiv.innerHTML = ""; // Clear previous cart items
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.textContent = `${item.name} - KSh ${item.price.toFixed(2)}`;
      cartItemsDiv.appendChild(cartItem);
      total += item.price;
    });
  }

  cartItemCountSpan.textContent = cart.length;
  cartTotalSpan.textContent = `KSh ${total.toFixed(2)}`;
}

function submitOrder() {
  if (cart.length > 0) {
    alert("Order submitted! We will contact you shortly to arrange delivery.");
    console.log("Order submitted:", cart);
    cart = []; // Clear the cart after submission (for this basic example)
    updateCartDisplay();
  } else {
    alert("Your cart is empty. Please add items to your order.");
  }
}
