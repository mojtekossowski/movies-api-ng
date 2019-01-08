const { db, TABLES } = require('../db');

exports.getAllMovies = () => {
    return db.select('*').from(TABLES.MOVIES);
}

exports.getMoviesByTitle = (title) => {
    return db.select('*').from(TABLES.MOVIES)
        .where('title', 'ilike', `%${title}%`);
}

exports.getMovieComments = (id) => {
    return db.select('*').from(TABLES.COMMENTS)
        .where('movie_id', id);
}

exports.saveMovie = (movie) => {
    return db.insert(movie).into(TABLES.MOVIES);
}

exports.updateMovie = (id, changes) => {
    return db(TABLES.MOVIES)
        .where('id', id)
        .update(changes);
}

exports.removeMovie = (id) => {
    return db(TABLES.MOVIES)
        .where('id', id)
        .delete();
}