const express = require('express');
const resource = express.Router();

const { catchAsync } = require('../middlewares/errors');

const CommentsController = require('../controllers/CommentsController');

resource.get('/', catchAsync(CommentsController.getAll));
resource.get('/:id', catchAsync(CommentsController.getOne));
resource.post('/', catchAsync(CommentsController.store))
resource.delete('/:id', catchAsync(CommentsController.deleteOne))

module.exports = resource;