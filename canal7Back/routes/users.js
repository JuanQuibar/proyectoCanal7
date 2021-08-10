const express = require('express');
const router = express.Router();
const bd = require('../utils/bd');

const verify = (req, res) => {
  
    const confirmacionCorreo= req.body.uuid;
    const obj = {habilitado : true}

    console.log("Para Manu", confirmacionCorreo)
  
    const modify = ()=> {
      bd("users").where('confirmacionCorreo',confirmacionCorreo).update(obj).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
    };

  modify();

};

router.post('/verify', verify);


module.exports = router;