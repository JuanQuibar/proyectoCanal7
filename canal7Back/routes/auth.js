const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sha1 = require('sha1');
const privateKey = fs.readFileSync('./keys/private.pem');
const signOptions = {algorithm: 'RS256', expiresIn: "10h"};
const model = require('./../models/auth');
const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);

const auth = async (req, res) =>{
    try{
        let {mail, pass} = req.body;
        pass = sha1(pass);
        const [user] = await model.searchLogged(mail, pass);
        console.log(user);
        if(!user) res.sendStatus(401);
        if(!user.habilitado) res.send('Verifique su correo');
        if(user.habilitado) {
            const token =createToken({id: user.id});
            console.log ("Acá va el toquen: ", token);
            res.status(200), res.json({jwt: token, info: user})
        }
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

const single = (req, res) => {
    model.single(req.params.id).then((respose) => res.json(respose)).catch((err) => res.status(500).json(err));
}

router.post('/login', auth);
router.get('/:id', single)
module.exports=router;