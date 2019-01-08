const express = require('express');
const movies = express.Router();

const { catchAsync } = require('../middlewares/errors')

const MoviesController = require('../controllers/MoviesController');

movies.get('/', catchAsync(MoviesController.getAll));
movies.get('/:title', catchAsync(MoviesController.getOne));
movies.get('/:id/comments', catchAsync(MoviesController.getMovieComments))

movies.post('/', [
    MoviesController.validate,
    MoviesController.checkValid,
    MoviesController.checkIfExists,
    MoviesController.fetchFromExternalApi,
    MoviesController.store,
    catchAsync(MoviesController.store)
]);

movies.delete('/:id', catchAsync(MoviesController.deleteOne));

module.exports = movies