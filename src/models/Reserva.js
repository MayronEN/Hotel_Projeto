import { Schema, model } from 'mongoose';
import Hotel from './Hotel';

const ReservaSchema = new Schema ({
    responsavel: {type: Schema.Types.ObjectId, ref: 'Usuario' },
    Hotel: {type: Schema.Types.ObjectId, ref: 'Hotel'},
    datainicial: String,
    dataFinal: String,
    qtdeHospedes: Number,
});

export default model('Reserva', ReservaSchema);