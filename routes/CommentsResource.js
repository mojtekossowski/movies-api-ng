const express = require('express');
const comments = express.Router();

const { catchAsync } = require('../middlewares/errors');

const CommentsController = require('../controllers/CommentsController');

comments.get('/', catchAsync(CommentsController.getAll));
comments.get('/:id', catchAsync(CommentsController.getOne));
comments.post('/', catchAsync(CommentsController.store))
comments.delete('/:id', catchAsync(CommentsController.deleteOne))

module.exports = comments;