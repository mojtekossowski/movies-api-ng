const { db, TABLES } = require('../db');

exports.getAllMovies = () => {
    return db.select(`*`).from(TABLES.MOVIES);
}

exports.getMovieByTitle = (title) => {
    
}

exports.getMovieComments = (title) => {
    
}