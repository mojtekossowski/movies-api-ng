const { db, TABLES } = require('../db');

exports.getAllMovies = () => {
    return db.select('*').from(TABLES.MOVIES);
}

exports.getMovieByTitle = (title) => {
    return db.select('*').from(TABLES.MOVIES)
        .where('title', 'like', title);
}

exports.saveMovie = (fetchedMovie) => {
    return db.insert(fetchedMovie).into(TABLES.MOVIES);
}

exports.getMoviesComments = (title) => {
    return db.select('*').from
}