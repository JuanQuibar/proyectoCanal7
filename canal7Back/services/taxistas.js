const model = require('./../models/taxistas');
const {imgFile} = require('./../utils/fileHandler3');

const createTax = async (body, file) => {
    try{
        const [id_empleado] = await model.create(body);
        const nombreFoto = await imgFile(file);
        const obj ={
            id_empleado,
            nombreFoto
        }

      /*   const obj = {
            id_empleado,
            uid
        } */
        const id = await model.createImagen(obj);
        return id;
    } catch (e) {
        throw e;
    }
}
module.exports = {createTax}