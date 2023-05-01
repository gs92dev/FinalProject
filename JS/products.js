import { ProductController } from "./product-controller.js";
// Initialize a new TaskManager with currentId set to 0
export const products = new ProductController();
products.addItem(
  "Facial Moisturizer",
  9.99,
  "Orange and Apple juice fresh and delicious",
  "img/products/pexels-shiny-diamond-3762870.jpg"
);
products.addItem(
  "Vitamin C",
  15.99,
  "Orange and Apple juice fresh and delicious",
  "img/products/pexels-koolshooters-8945936.jpg"
);

/*
// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');

    
     //   Validation code here
    

    // Get the values of the inputs
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const createdAt = new Date();

    // Add the task to the task manager
    itemsController.addItem(name, description, createdAt);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
}); */

export function addItemCard(item) {
  const itemHTML =
    `<div class="card" style="width: 18rem">
  <img
    class="card-img-top"
    src=' ${item.imageUrl}'
    alt="Card image cap"
  />` +
    `<div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p>${item.price}</p>` +
    `<p class="card-text">${item.description}</p>
      
    </p>` +
    `<a href="#" class="btn btn-dark">Add to cart</a>
  </div>
</div>`;
  console.log(itemHTML);
  const itemsContainer = document.getElementById("ulCards");
  itemsContainer.innerHTML += itemHTML;
}
console.log(products.items[1]);
addItemCard(products.items[1]);
addItemCard(products.items[0]);
