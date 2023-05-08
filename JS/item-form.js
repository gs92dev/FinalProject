import { ProductController } from "./product-controller.js";
const products = new ProductController(0);
// Select the New Task Form
const newItemForm = document.querySelector("#itemForm");

// Add an 'onsubmit' event listener
newItemForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Select the inputs
  const newItemNameInput = document.querySelector("#newItemNameInput");
  const newItemDescription = document.querySelector("#newItemDescription");
  const newItemPrice = document.getElementById("newItemPrice");
  const newItemImg = document.getElementById("newItemImg");

  //   Validation code here

  // Get the values of the inputs
  const price = newItemPrice.value;
  const name = newItemNameInput.value;
  const description = newItemDescription.value;
  const createdAt = new Date();
  const img = newItemImg.value;
  //console.log(name, price, description, createdAt, img);

  // Add the task to the task manager
  products.addItem(name, price, description, img);
  console.log(products);

  // Clear the form
  newItemNameInput.value = "";
  newItemDescription.value = "";
  newItemPrice.value = "";
  newItemImg.value = "";
});
products.loadItemsFromLocalStorage();
console.log(products);