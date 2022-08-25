//importo la conexion y el modelo de schema
require('./connection');
/* require('./models/Product'); // --> como me devuelve un espiece de class, lo guardo en una constante ↓  */
const Product = require('./models/Product');

async function main() {

  //crear un producto y guardarlo en una constante
  const newProduct = new Product({
    name: 'Producto 1',
    description: 'Descripcion del producto 1',
    price: 100
  });

  //guardar el producto en la base de datos
  const productSaved = await newProduct.save(); //el await si tiene exito devuelve el producto, si no devuelve un error   
  return productSaved; //la funcion devuelve el producto guardado

}

main() //para ejecutar la funcion - al ser una funcion asincrona puedo usar el .then y .catch
  .then(product => console.log(product))
  .catch(err => console.log(err));