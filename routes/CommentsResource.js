const express = require('express');
const comments = express.Router();

const { catchAsync, checkValid } = require('../middlewares/errors');

const CommentsController = require('../controllers/CommentsController');

comments.get('/', catchAsync(CommentsController.getAll));

comments.get('/:user', catchAsync(CommentsController.getOne));

comments.post('/', [
    CommentsController.validateStore,
    checkValid,
    catchAsync(CommentsController.checkIfMovieExists),
    catchAsync(CommentsController.store)
])

comments.patch('/:id', [
    CommentsController.validateUpdate,
    checkValid,
    catchAsync(CommentsController.checkIfMovieExists),
    catchAsync(CommentsController.update)
])

comments.delete('/:id', catchAsync(CommentsController.deleteOne))

module.exports = comments;