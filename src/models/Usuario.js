import { Schema, model } from 'mongoose';
import { number } from 'yup';

const UsuarioSchema = new Schema ({
    email: String,
    nome: String,
});


export default model('Usuario', UsuarioSchema);