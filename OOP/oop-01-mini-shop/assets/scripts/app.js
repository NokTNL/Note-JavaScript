"use strict";
/* The logic is to group things into object (in the form of class); when you want to use variables/methods in the object, instantiate it.
Inside the class, all properties & methods are defined with 'this' */

// Create new product
class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

// Rendering individual product into HTML , adding to cart functionality
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  // Use App's static method to access method in higher-layer classes 'globally'
  addToCart() {
    App.addProductToCart(this.product);
  }

  // render method for rendering an item into a <li>
  render() {
    // here 'this' = the created productItem object
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div class="product-item__content">
        <img src="${this.product.imageUrl}" alt="${this.product.description}"/>
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this)); // !! event listener binds
    // 'this' to the event node (the button)! Use bind() to fix it
    // !! Or simply turn addToCart into an arrow function

    return prodEl; // returns the whoel <li> node
  }
}

// Generating the whole product list, and rendering it
class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  // Rendering product items into a <ul>, then append into <div id="app">
  render() {
    // 'this' = the productList created
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    // Appending item elements into the node
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render(); // holds the rendered <li>
      prodList.appendChild(prodEl);
    }
    return prodList;
  }
}

// Generate the Shopping cart and rendering it
class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((total, item) => total + item.price, 0);
    return sum;
  }

  // Add product to the cart array + change total price text
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.className = "cart";
    cartEl.innerHTML = `
      <h2>Total: $${0}</h2>
      <button>Order Now</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class Shop {
  render() {
    // Do the final rendering
    // Anchor the node being changed
    const renderHook = document.getElementById("app");
    renderHook.innerHTML = ""; // clear all items rendered before

    // Appending and rendering
    this.cart = new ShoppingCart(); // !! Proxy: make cart a PROPERTY of the Shop object instead: Shop.cart <-- ShoppingCart
    const cartEl =
      this.cart.render(); /* Already with all the cart items rendered (hopefully) */
    const productList = new ProductList();
    const prodEl = productList.render();
    renderHook.appendChild(cartEl);
    renderHook.appendChild(prodEl);
  }
}

// Main work-flow
class App {
  // using 'new' to instantiate a new App will not make a copy of this:
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart; // Proxy: App.cart <-- Shop.cart <-- ShoppingCart
  }

  // Proxy for the using ShoppingCart's method everywhere
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// Executing main-flow
App.init();
