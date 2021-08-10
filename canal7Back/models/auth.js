const bd = require('../utils/bd');

const single = (id) => bd('users').where('id', id).select('mail', 'pass');

const searchLogged = (mail, pass) => bd('users').where({mail, pass}). select('id', 'mail', 'habilitado');

module.exports = {searchLogged, single};