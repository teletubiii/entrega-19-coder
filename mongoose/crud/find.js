require('../connection');
const Product = require('../models/Product');

async function main() {
  
  const products = await Product.find({}); //find para listar todos los documentos
  console.log(products);

 
}

main()