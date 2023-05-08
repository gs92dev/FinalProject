import { ProductController } from "./product-controller.js";
// Initialize a new TaskManager with currentId set to 0

const products = new ProductController(0);


//Add a new product in the product page
 function addItemCard(item) {
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

function loadCardsListFromItemsController(){
  for(var i = 0, size = products.items.length; i < size ; i++){
      const item = products.items[i];
      addItemCard(item);
  }
}


products.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
console.log(products);

