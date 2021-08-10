const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : "localhost" || process.env.BD_HOST,
        user : "root" || process.env.BD_USERNAME,
        password : ""|| process.env.BD_PASSWORD,
        database : "canal7" || process.env.BD_BD,
        pool : {min : 1, max : 10}
    }
});
module.exports = knex;