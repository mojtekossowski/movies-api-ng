const { param, body } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const CommentsModel = require('../models/comments');
const MoviesModel = require('../models/movies');

exports.getAll = async (req, res, next) => {
    if (!req.query.user) {
        return res.status(HttpStatus.OK).json(await CommentsModel.getAllComments());
    }

    const user = req.query.user.trim();
    const comments = await CommentsModel.getCommentsByUser(user);
    
    res.status(HttpStatus.OK).json(comments);
}

exports.validateId = [
    param('id').trim().isInt().withMessage('Comment id must be an integer.')
]

exports.getOne = async (req, res, next) => {
    const id = req.params.id;
    const comments = await CommentsModel.getCommentsById(id);
    if (!comments.length) {
        return res.status(HttpStatus.NOT_FOUND).json({
            message: "Comment not found"
        });
    }
    
    res.status(HttpStatus.OK).json(comments[0]);
}

exports.validateStore = [
    body('movie_id').trim().isInt().withMessage('Movie id must be an integer.'),
    body('user').trim().isLength({ min:1 }).withMessage('User not specified'),
    body('title').trim().isLength({ min:1 }).withMessage('Title not specified'),
    body('contents').trim().isLength({ min:1 }).withMessage('Contents not specified'),
]

exports.checkIfMovieExists = async (req, res, next) => {
    if (req.body.movie_id) {
        const storedMovies = await MoviesModel.getMoviesById(req.body.movie_id);
    
        if (!storedMovies.length) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: `Movie with given movie_id doesn't exist`
            });
        }

    }

    next();
}

exports.store = async (req, res, next) => {
    try {
        const { movie_id, user, title, contents } = req.body;
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

exports.update = async (req, res, next) => {
    const id = req.params.id;
    try {
        await CommentsModel.updateComment(id, req.body);
    } catch (ex) {
        const unableToUpdateError = new Error('Unable to update - invalid schema')
        unableToUpdateError.status = HttpStatus.BAD_REQUEST;

        throw unableToUpdateError;
    }

    res.status(HttpStatus.NO_CONTENT).send();
}

exports.deleteOne = async (req, res, next) => {
    const result = await CommentsModel.removeComment(req.params.id)
    if (result) {
        res.status(HttpStatus.OK).send();
    } else {
        res.status(HttpStatus.NOT_FOUND).json({
            message: `Comment with given id doesn't exist`
        });
    }
}
