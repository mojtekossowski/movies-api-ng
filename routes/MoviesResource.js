const express = require('express');
const resource = express.Router();

const { catchAsync } = require('../middlewares/errors')

const MoviesController = require('../controllers/MoviesController');

resource.get('/', catchAsync(MoviesController.getAll));
resource.get('/:title', catchAsync(MoviesController.getOne));
resource.post('/', catchAsync(MoviesController.store))
resource.delete('/:id', catchAsync(MoviesController.deleteOne))

module.exports = resource