// Create a ItemsController class
export class ProductController {
  // Set up the items and currentId property in the contructor
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  // Create the addItem method
  addItem(name, price,description, imageUrl) {
    const item = {
      // Increment the currentId property
      id: this.currentId++,
      name: name,
      description: description,
      imageUrl: imageUrl,
      createdAt: new Date(),
      price: price,
    };

    // Push the item to the items property
    this.items.push(item);
  }
}
//const products = new ProductController();
// products.addItem("Facial Mask", "Description", "../img/products/pexels-shiny-diamond-3762875.jpg.");

//console.log(products.items);
