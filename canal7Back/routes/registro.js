const express = require('express');
const router = express.Router();
const model = require('../models/usuarios');
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const {validateCreate} = require ('../middlewares/usuarios');
const { send } = require('../services/mail');

const single = (req, res) => {
    model.single(req.params.id).then((respose) => res.json(respose)).catch((err) => res.status(500).json(err));
}

const create = async (req, res) => {
    try{
        const {pass, mail} = req.body;
        const nuevo ={
            pass : sha1(pass),
            mail,
            confirmacionCorreo : uuid()
        };
        const newUser = await model.create(nuevo);
        const mailinfo ={
            to: mail,
            subjet: 'Gracias por registrarte',
            html : `
                <h1> Gracias por registrarte en Canal 7 de Mendoza </h1>
                <h5>Ahora tenés que cofirmar tu registración haciendo clic <a href = "${process.env.URL}/users/verify/${nuevo.confirmacionCorreo}"> en este enlace</a></h5>
                `
        }
        const mensaje = await send(mailinfo);
        res.json(mensaje);
    }
    catch (err) {
        console.log (err);
        res.status (500);
    }
    
}

router.post('/new', validateCreate, create);
router.get('/:id', single)
module.exports = router;