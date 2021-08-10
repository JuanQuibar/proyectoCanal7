const bd = require('../utils/bd');
const bdService = require('../utils/bdService');


const getAll = () => bd('users').select('mail', 'pass');
const single = (id) => bd('users').where('id', id).select('mail', 'pass');
const create = async (obj) => {
    try {
    const id = await bdService.create("users", obj);
    return id;
    }
    catch (e) {
        console.log(e);
    }
}
const modify = ({obj, confirmacionCorreo}) => bd("users").where(confirmacionCorreo).update(obj);
// UPDATE personas SET habilitado = true WHERE confirmacionCorreo = confirmacionCorreo (uuid) OR id = id

module.exports = {getAll, single, modify, create};