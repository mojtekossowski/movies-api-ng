const { check, validationResult } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const CommentsModel = require('../models/comments');
const MoviesModel = require('../models/movies');

exports.getAll = async (req, res, next) => {
    res.status(HttpStatus.OK).json(await CommentsModel.getAllComments());
}

exports.getOne = async (req, res, next) => {
    const user = req.params.user.trim();
    if (!user) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: "Invalid user name"
        });
    }

    const comments = await CommentsModel.getCommentsByUser(user);
    if (!comments.length) {
        return res.status(HttpStatus.NOT_FOUND).json({
            message: "User has no comments"
        });
    }
    
    res.status(HttpStatus.OK).json(comments);
}

exports.validate = [
    check('movie_id').isInt().withMessage('Movie id must be an integer.'),
    check('user').trim().isLength({ min:1 }).withMessage('User not specified'),
    check('title').trim().isLength({ min:1 }).withMessage('Title not specified'),
    check('contents').trim().isLength({ min:1 }).withMessage('Contents not specified'),
]

exports.checkValid = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errors.mapped()
        })
    }

    next();
}

exports.checkIfMovieExists = async (req, res, next) => {
    const storedMovies = await MoviesModel.getMoviesById(req.body.movie_id);

    if (!storedMovies.length) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: `Movie with given movie_id doesn't exist`
        })
    }

    next();
}

exports.store = async (req, res, next) => {
    const { movie_id, user, title, contents } = req.body;
    try {
        await CommentsModel.saveComment({
            movie_id, user, title, contents
        });
    } catch (ex) {
        const unableToStoreError = new Error('Unable to store - invalid schema')
        unableToStoreError.status = HttpStatus.BAD_REQUEST;

        throw unableToStoreError;
    }

    res.status(HttpStatus.CREATED).send();
}

exports.deleteOne = async (req, res, next) => {
    const result = await CommentsModel.removeComment(req.params.id.trim())
    if (result) {
        res.status(HttpStatus.OK).send();
    } else {
        res.status(HttpStatus.NOT_FOUND).json({
            message: `Comment with given id doesn't exist`
        });
    }
}
