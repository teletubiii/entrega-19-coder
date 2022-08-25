//importo la conexion y el modelo de schema
require('./connection');
/* require('./models/Product'); // --> como me devuelve un espiece de class, lo guardo en una constante ↓  */
const Product = require('./models/Product');

//crear un producto y guardarlo en una constante
const newProduct = new Product({
  name: 'Producto 1',
  description: 'Descripcion del producto 1',
  price: 100
});

//guardar el producto en la base de datos
newProduct.save((err, product) => { //.save es un proceso ansicrono, utiliza callback para saber si se guardo o no, si no hay erro devuelve el producto 
  if (err) console.log(err); 
  console.log(product); //se podría usar un else   
});
//forma deprecada --> ver async.await.js



