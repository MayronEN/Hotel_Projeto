import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController{

    async index (req, res){
        const { responsavel } = req.body;
        let reservas = await Reserva.find({ responsavel });
        return res.json(reservas);
    }

    async store(req, res) {
        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;
        const schema = yup.object().shape(
            {   dataInicial: yup .string() .required(),
                dataFinal: yup.string() .required(),
                qtdeHospedes: yup.number() .required(),
            }
        );
        if(! (await schema.isValid(req.body))){
            return res.status(402).json({mensagem: 'Inválido os dados!'})
        }
        Usuario.FindById(usuario_id).catch((err) => {
            return res.status(401).json({mensagem: "Usuário não autorizado!"});
        });

        hotel.FindById(hotel_id).catch((err) => {
            return res.status(400).json({mensagem: "Hotel inválido!"});
        });
        
        let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, dataFinal, qtdeHospedes });
    
            await reserva.populate('responsavel').populate('hotel').execPopulate();

            return res.json(reserva);
        }
}

export default new ReservaController;