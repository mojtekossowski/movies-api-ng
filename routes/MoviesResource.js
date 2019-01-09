const express = require('express');
const movies = express.Router();

const { catchAsync, checkValid } = require('../middlewares/errors')

const MoviesController = require('../controllers/MoviesController');

movies.get('/', catchAsync(MoviesController.getAll));
movies.get('/:title', catchAsync(MoviesController.getOne));
movies.get('/:id/comments', [
    MoviesController.validateId,
    checkValid,
    catchAsync(MoviesController.getMovieComments)
])

movies.post('/', [
    MoviesController.validateStore,
    checkValid,
    catchAsync(MoviesController.checkIfExists),
    catchAsync(MoviesController.fetchFromExternalApi),
    catchAsync(MoviesController.store)
]);

movies.patch('/:id',[
    MoviesController.validateUpdate,
    checkValid,
    catchAsync(MoviesController.update)
]);

movies.delete('/:id', catchAsync(MoviesController.deleteOne));

module.exports = movies