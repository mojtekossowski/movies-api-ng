const { db, TABLES } = require('../db');

exports.getAllMovies = () => {
    return db.select('*').from(TABLES.MOVIES);
}

exports.getMovieByNormalizedTitle = (normalizedTitle) => {
    return db.select('*').from(TABLES.MOVIES)
        .where('normalized_title', normalizedTitle)
}

exports.saveMovie = (fetchedMovie) => {
    return db.insert(fetchedMovie).into(TABLES.MOVIES)
}