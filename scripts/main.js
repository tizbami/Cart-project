// // console.log("hello world");
// const productArr = [
//   {
//     id: 1,
//     name: "Hp PROBOOK 450G6 ",
//     price: 750000,
//     quantity: 10,
//     description:
//       "8TH GEN INTEL CORE I5 8GB RAM 256GB SSD,KEYBOARD LITE, WINDOWS 11PRO",
//     imageUrl:
//       "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/91/3890261/1.jpg?6992",
//   },
//   {
//     id: 2,
//     name: "Tws Wireless Bluetooth Headsets Earphones ",
//     price: 5600,
//     quantity: 10,
//     description: "Tws Wireless Bluetooth Headsets Earphones 16",
//     imageUrl:
//       "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/48/5137313/1.jpg?6715",
//   },
//   {
//     id: 3,
//     name: "Bottle Pink Umbrella ",
//     price: 6600,
//     quantity: 10,
//     description: "Bottle Shaped Umbrella -Pink",
//     imageUrl:
//       "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/90/4587871/1.jpg?7842",
//   },
// ];

// let cartListElem = document.getElementById("cartList");
// let shopCartRight = document.getElementById("shopCartRight");

// productArr.forEach((product) => {
//   let productElem = document.createElement("div");
//   productElem.innerHTML = `
//       <img src="${product.imageUrl}" alt="Product Image">
//       <h3>${product.name}</h3>
//       <p> ${product.price}</p>
//       <p>${product.quantity}</p>
//       <p> ${product.description}</p>

//       <button onclick="addToCart(${product.id})">Add</button>

//     `;
//   productElem.setAttribute("class", "product");
//   cartListElem.appendChild(productElem);
// });

// //let do the checkout function here
//  let checkoutBtn = document.getElementById("checkoutBtn");
//  checkoutBtn.addEventListener("click", checkout);

// function checkout() {
//   shopCartRight.innerHTML = `
//   <h2>Checkout</h2>
//   <div id="checkout">
//   `;
//   shopCartRight.setAttribute("class", "shopCart");

//   cartListElem.innerHTML = "";

//   let total = 0;
//   for (let product of productArr) {
//     total += product.price * product.quantity;
//   }
//   shopCartRight.innerHTML += `
//   <p>Total: ${total}</p>
//   `;

// }

// // function renderProducts() {
// //   for (let product of productArr) {
// //     let productElem = document.createElement("div");
// //     productElem.innerHTML = `
// //       <img src="${product.imageUrl}" alt="Product Image">
// //       <h3>${product.name}</h3>
// //       <p> ${product.price}</p>
// //       <p>${product.quantity}</p>
// //       <p> ${product.description}</p>

// //       <button onclick="removeFromCart(${product.id})">Remove</button>

// //     `;

// //     productElem.setAttribute("class", "product");
// //     cartListElem.appendChild(productElem);
// //   }
// // }

// // renderProducts();

const productArr = [
  {
    id: 1,
    name: "Hp PROBOOK 450G6",
    price: 750000,
    quantity: 2,
    Stock: 10,
    description: "8th Gen Intel Core i5 8GB RAM 256GB SSD",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/91/3890261/1.jpg?6992",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headsets ",
    price: 5600,
    Stock: 8,
    quantity: 1,
    description: "Wireless Headsets 16",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/48/5137313/1.jpg?6715",
  },
  {
    id: 3,
    name: "Bottle Pink Umbrella",
    price: 6600,
    Stock: 6,
    quantity: 1,
    description: "Bottle Shaped Umbrella-Pink",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/90/4587871/1.jpg?7842",
  },
];

let cartListElem = document.getElementById("cartList");
let shopCartRightElem = document.getElementById("shopCartRight");

// Function to render products


  productArr.forEach((product) => {
    let productElem = document.createElement("div");
    productElem.innerHTML = `
      <img src="${product.imageUrl}" alt="Product Image">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="stock">${product.Stock}</p>
      <p>Price: N${product.price}</p>
      <button class="increase" data-id="${product.id}">+</button> <p class="quantity">${product.quantity}</p> <button class="decrease" data-id="${product.id}">-</button></p>
     <button class="delete-item" data-id="${product.id}">Delete</button>
    `;
    //link the increase and decrease to a function to add and deduct from the quantity
   let increaseBtn = productElem.querySelector(".increase");
   let decreaseBtn = productElem.querySelector(".decrease");
    let quantity = productElem.querySelector(".quantity");
    let stock = productElem.querySelector(".stock");

   
  increaseBtn.addEventListener("click", function () {
    let currentStock = parseInt (stock.innerHTML);
    if (currentStock > 0) {
      let currentQuantity = parseInt (quantity.innerHTML);
      quantity.innerHTML = currentQuantity + 1;
      stock.innerHTML = currentStock - 1;
    }
   
  });

  decreaseBtn.addEventListener("click", function () {
    let currentQuantity = parseInt (quantity.innerHTML);
    if (currentQuantity > 1) {
      let currentStock = parseInt (stock.innerHTML);
      quantity.innerHTML = currentQuantity - 1;
      stock.innerHTML = currentStock + 1;
    }
   
  });
  
let deleteBtn = productElem.querySelector(".delete-item");
deleteBtn.addEventListener("click", function () {
  productElem.remove(); 
});


    productElem.setAttribute("class", "product");
    cartListElem.appendChild(productElem);
  });

  // updateTotalPrice();





// // Checkout button functionality
// let checkoutBtn = document.getElementById("checkoutBtn");
// checkoutBtn.addEventListener("click", checkout);

// function checkout() {
//   alert("Proceeding to checkout!");
// }

// // Initial rendering of products
// renderProducts();
