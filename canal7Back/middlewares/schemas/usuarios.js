const Joi = require('@hapi/joi');

const schemas = {
    create: Joi.object().keys({
        pass: Joi.string().min(8).required().messages({
            "string.min" : "La contraseña debe tener al menos 8 caracteres"
        }),
        mail : Joi.string().email({ tlds: { allow: false } }).required(),
    }),
    modify: Joi.object().keys({
        id: Joi.number().integer().required(),
        pass: Joi.string().min(8).optional().messages({
            "string.min" : "la password debe tener al menos 8 caracteres"
        }),
        mail : Joi.string().email({ tlds: { allow: false } }).optional(),

    })
}

module.exports = schemas;