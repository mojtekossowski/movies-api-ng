const express = require('express');
const comments = express.Router();

const { catchAsync } = require('../middlewares/errors');

const CommentsController = require('../controllers/CommentsController');

comments.get('/', catchAsync(CommentsController.getAll));
comments.get('/:user', catchAsync(CommentsController.getOne));
comments.post('/', [
    CommentsController.validate,
    CommentsController.checkValid,
    catchAsync(CommentsController.checkIfMovieExists),
    catchAsync(CommentsController.store)
])

comments.delete('/:id', catchAsync(CommentsController.deleteOne))

module.exports = comments;