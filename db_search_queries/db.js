const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);
db.raw('SELECT 1 ')
    .then(() => console.log('Database Connected successfully.'))
    .catch((err) => console.error('Database Connected error:', err));
module.exports = db;
