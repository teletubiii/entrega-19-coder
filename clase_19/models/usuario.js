import mongoose from "mongoose";

const usuarioCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
  nombre: {type: String, required: true, max: 100},
  apellido: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100},
  usuario: {type: String, required: true, max: 100},
  password: {type: Number, required: true}
})

export const usuarios = mongoose.model(usuarioCollection, UsuarioSchema);
  