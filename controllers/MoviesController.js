const { check, validationResult } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

exports.getAll = async (req, res, next) => {
    res.status(HttpStatus.OK).json(await MoviesModel.getAllMovies());
}

exports.getOne = async (req, res, next) => {
    const title = req.params.title.trim();
    if (!title) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: "Invalid title"
        });
    }

    const movies = await MoviesModel.getMoviesByTitle(title);
    if (!movies.length) {
        return res.status(HttpStatus.NOT_FOUND).json({
            message: "Movie not found"
        });
    }
    
    res.status(HttpStatus.OK).json(movies[0]);
}

exports.getMovieComments = async (req, res, next) => {
    const id = +req.params.id.trim();
    if (!id) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: "Invalid movie id"
        });
    }

    res.status(HttpStatus.OK).json(await MoviesModel.getMovieComments(id));
}

exports.validate = [
    check('title').trim().isLength({ min:1 }).withMessage('No title specified')
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

exports.checkIfExists = async (req, res, next) => {
    const title = req.body.title = req.body.title.trim();
    
    const existingMovie = await MoviesModel.getMoviesByTitle(title)
    if (existingMovie.length) {
        return res.status(HttpStatus.CONFLICT).json({
            message: "Movie already exists in database"
        })
    }

    next();
}

exports.fetchFromExternalApi = async(req, res, next) => {
    const externalRecord = await OpenMoviesProvider.fetchMovie(req.body.title);

    delete req.body.title;
    delete req.body.id;

    req.body = {
        ...externalRecord,
        ...req.body
    }

    next();
}

exports.store = async (req, res, next) => {
    try {
        await MoviesModel.saveMovie(req.body)
    } catch (ex) {
        const unableToStoreError = new Error('Unable to store - invalid schema')
        unableToStoreError.status = HttpStatus.BAD_REQUEST;

        throw unableToStoreError;
    }

    res.status(HttpStatus.CREATED).send();
}

exports.deleteOne = async (req, res, next) => {
    const result = await MoviesModel.removeMovie(req.params.id.trim())
    if (result) {
        res.status(HttpStatus.OK).send();
    } else {
        res.status(HttpStatus.NOT_FOUND).json({
            message: `Comment with given id doesn't exist`
        });
    }
}

