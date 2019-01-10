const { param, body } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

exports.getAll = async (req, res, next) => {
    if (!req.query.title) {
        return res.status(HttpStatus.OK).json(await MoviesModel.getAllMovies());
    }
    
    const title = req.query.title.trim();
    const movies = await MoviesModel.getMoviesByTitle(title);
    
    res.status(HttpStatus.OK).json(movies);
}

exports.validateId = [
    param('id').trim().isInt().withMessage('Movie Id should be an integer')
]

exports.getOne = async (req, res, next) => {
    const id = req.params.id;
    const movies = await MoviesModel.getMoviesById(id);
    if (!movies.length) {
        return res.status(HttpStatus.NOT_FOUND).json({
            message: "Movie not found"
        });
    }
    
    res.status(HttpStatus.OK).json(movies[0]);
}

exports.getMovieComments = async (req, res, next) => {
    const id = req.params.id;
    res.status(HttpStatus.OK).json(await MoviesModel.getMovieComments(id));
}

exports.validateStore = [
    body('title').trim().isLength({ min:1 }).withMessage('No title specified')
]

exports.checkIfExists = async (req, res, next) => {
    const title = req.body.title;
    
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

exports.validateUpdate = [
    param('id').isInt().withMessage('Movie id must be an integer.')
]

exports.update = async (req, res, next) => {
    const id = req.params.id;
    try {
        await MoviesModel.updateMovie(id, req.body);
    } catch (ex) {
        const unableToUpdateError = new Error('Unable to update - invalid schema')
        unableToUpdateError.status = HttpStatus.BAD_REQUEST;

        throw unableToUpdateError;
    }

    res.status(HttpStatus.NO_CONTENT).send();
}

exports.deleteOne = async (req, res, next) => {
    const result = await MoviesModel.removeMovie(req.params.id.trim())
    if (result) {
        res.status(HttpStatus.OK).send();
    } else {
        res.status(HttpStatus.NOT_FOUND).json({
            message: "Movie not found"
        });
    }
}

