const knex = require('knex');
const config = require('./config/knexfile');

const env = process.env.NODE_ENV || 'dev';

module.exports = {
    db: knex(config[env]),
    TABLES: {
        MOVIES: 'movies',
        COMMENTS: 'comments'
    }
}