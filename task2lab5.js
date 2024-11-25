
const product = {
    name: "Laptop",
    price: 999,
    quantity: 5,
    category: "Electronics"
  };
  
  const { name, price, quantity, category } = product;
  
  console.log(`Product Name: ${name}`);
  console.log(`Price: $${price}`);
  console.log(`Quantity in Stock: ${quantity}`);
  console.log(`Category: ${category}`);
  
  function printProductSummary(product) {
    const { name, price, quantity, category } = product;
  }
  console.log(`The product ${name} is in ${category} and costs $${price}. Only ${quantity} left in stock!`);
  
  function updateProductQuantity(product, newQuantity) {
    product.quantity = newQuantity; 
    const { name, price, quantity, category } = product;
    console.log(`Updated product details:`);
    console.log(`The product ${name} is in ${category} and costs $${price}. Only ${quantity} left in stock!`);
  }
  updateProductQuantity(product,3);
  

 
  
  