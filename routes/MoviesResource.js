const express = require('express');
const movies = express.Router();

const { catchAsync } = require('../middlewares/errors')

const MoviesController = require('../controllers/MoviesController');

movies.get('/', catchAsync(MoviesController.getAll));
movies.get('/:title', catchAsync(MoviesController.getOne));
movies.post('/', catchAsync(MoviesController.store));
movies.delete('/:id', catchAsync(MoviesController.deleteOne));

module.exports = movies