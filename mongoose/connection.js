//npm init -y
//npm install mongoose

const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/ecommerce'; //protocolo://ip:puerto/nombre_base_datos --> si no existe la basa de datos la crea

//conectarse
mongoose.connect(URL, { //protocolo://ip:puerto/nombre_base_datos --> si no existe la basa de datos la crea
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//eventos de coneccion - ver documentacion de mongoose
mongoose.connection.on('open', _ => {
  console.log('Conectado a MongoDB', URL);
}).on('error', err => {
  console.log('Error de conexion', err);
})