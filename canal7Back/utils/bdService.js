//Visual me sugirió pasar a ES6 este requerimiento con el formato (import bd from './bd';), pero se rompió
const bd = require('./bd');

const create = (tableName, obj) =>bd(tableName).insert(obj);
// const create = (obj) => bd('tableName').insert(obj);
// INSERT INTO 'talbleName' SET 'obj';

const modify = (tableName, id, obj) => bd(tableName).where({id}).update(obj);
//const modify = (id, obj) => bd('talbeName').where(id).update(obj);

module.exports = {create, modify};