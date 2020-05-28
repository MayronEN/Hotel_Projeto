import Usuario from '../models/Usuario';

class SessionController {
 
    index(req,res){
        return res.json({retorno:false});  
    }

    async store(req,res){
        const {  email, nome } = req.body;

        let usuario = await Usuario.findOne({ email });
        if(! usuario ){
            usuario = await Usuario.create({ email });
        }

        return res.json({usuario});
    } // Insert no SQL
}

export default new SessionController;