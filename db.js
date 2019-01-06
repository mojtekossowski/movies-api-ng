const knex = require('knex');
const config = require('./config/knexfile');

module.exports = {
    db: knex(config),
    TABLES: {
        MOVIES: 'movies',
        COMMENTS: 'comments',
        MOVIES_COMMENTS: 'movies_comments'
    }
}