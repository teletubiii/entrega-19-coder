//aca se definen el esquema de los documentos de la base de datos

const { Schema, model } = require ('mongoose'); //Schema es para mongoose y model es el que utilizamos para interactuar con monogodb

//el esquema es una clase donde se definen los campos que tendran los documentos que luegos seran instanciados a aprtir de este esquema
const productSchema = new Schema({
  name: String,
  description: {type: String, required: true},
  price: {type: Number, required: true, default: 0},
});

//creamos un model y le asignamos un nombre. El modelo está basado en el schema
/* model('Product', productSchema); // --> como lo voy a utilizar en otros archivos debo exportarlo ↓ */
module.exports = model('Product', productSchema); 
