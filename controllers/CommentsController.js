const { check, validationResult } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const CommentsController = require('../models/comments');

exports.getAll = async (req, res, next) => {
    res.json(await CommentsController.getAllComments);
}

