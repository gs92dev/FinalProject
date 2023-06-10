import { ProductController } from "./product-controller.js";
// Initialize a new TaskManager with currentId set to 0
const products = new ProductController(0);

//Add a new product in the product page
function addItemCard(item) {
  const itemHTML =
    `<div class="cards" >
  <img
    class="cards-img"
    src=' ${item.imageUrl}'
    alt="Product image"
  />` +
    `<div class="cards-body">
    <h5 class="cards-title">${item.name}</h5>` +
    `<p class="cards-text">${item.description}</p>
      
    </p>` +     
    `<div class="btn-container">
    <a href="#" class="btn-img">Add to cart</a>
    <p class="price">$${item.price}.00</p>
    </div> 
  </div>
</div>`;
  console.log(itemHTML);
  const itemsContainer = document.getElementById("ulCards");
  itemsContainer.innerHTML += itemHTML;
}

function loadCardsListFromItemsController() {
  for (var i = 0, size = products.items.length; i < size; i++) {
    const item = products.items[i];
    addItemCard(item);
  }
}

products.loadItemsFromLocalStorage();
loadCardsListFromItemsController();

