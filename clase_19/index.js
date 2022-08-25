//npm init -y
//npm i mongoose

import mongoose from 'mongoose';
import * as model from './models/usuario.js';

CRUD()

async function CRUD() {
  try {
    //conexion hacia la base de datos
    const URL = 'mongo://localhost:27017/ecommerce';
    let rta = await mongoose.connect(URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    console.log('Base de datos conectada');

    //CREATE
    console.log('CREATE');
    const usuario = {nombre: 'Juan', apellido: 'Perez', email: 'jp@g.com', usuario: 'jp', password: 123456};
    const usuarioSaveModel = new model.usuarios(usuario);
    let usuarioSave = await usuarioSaveModel.save();
    console.log(usuarioSave);

    //READ
    console.log('READ');
    let usuarios = await model.usuarios.find({});
    console.log(usuarios);

    //UPDATE
    console.log('UPDATE');
    let usuarioUpdate = await model.usuarios.updateOne( {nombre: 'Juan'}, {
      $set: {password: 654321}
    });
    console.log(usuarioUpdate);

    //READ
    console.log('READ');
    usuarios = await model.usuarios.find({});
    console.log(usuarios);

    //DELETE
    console.log('DELETE');
    let usuarioDelete = await model.usuarios.deleteOne({nombre: 'Juan'});
    console.log(usuarioDelete);

    //READ
    console.log('READ');
    usuarios = await model.usuarios.find({});
    console.log(usuarios);


    //CREATE
    console.log('CREATE (4 usuarios)');
    await new model.usuarios({nombre: 'Juan', apellido: 'Perez', email: 'jp@g.com', usuario: 'jp', password: 123456}).save();
    await new model.usuarios({nombre: 'Pedro', apellido: 'Suarez', email: 'ps@g.com', usuario: 'ps', password: 987654}).save();
    await new model.usuarios({nombre: 'Ana', apellido: 'Mei', email: 'am@g.com', usuario: 'am', password: 567891}).save();
    await new model.usuarios({nombre: 'Mirta', apellido: 'Blanco', email: 'mb@g.com', usuario: 'mb', password: 468032}).save();

    //READ
    console.log('READ PROJECTION + FILTER');
    console.log(await model.usuarios.find({apellido: 'Perez'}, {nombre: 1, apellido: 1, email: 1, _id: 0}));
    console.log(await model.usuarios.find({nombre: 'Pedro'}, {nombre: 1, apellido: 1, email: 1, _id: 0}));

    console.log('READ PROJECTION + SORT');
    console.log(await model.usuarios.find({}, {nombre: 1, _id: 0}).sort({nombre: -1}));

    console.log('READ PROJECTION + SORT + SKIP');
    console.log(await model.usuarios.find({}, {nombre: 1, _id: 0}).sort({nombre: -1}).skip(1));

    console.log('READ PROJECTION + SORT + SKIP + LIMIT');
    console.log(await model.usuarios.find({}, {nombre: 1, _id: 0}).sort({nombre: -1}).skip(1).limit(2));

  } catch (error) {
    console.log(error);
  }
}

