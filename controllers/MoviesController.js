const { check, validationResult } = require('express-validator/check');
const HttpStatus = require('http-status-codes');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

exports.getAll = async (req, res, next) => {
    res.json(await MoviesModel.getAllMovies());
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
            message: "No movies found"
        });
    }
    
    res.json(movie[0]);
}

exports.getMovieComments = async (req, res, next) => {
    const id = req.params.id.trim();
    if (!id) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: "Invalid movie id"
        });
    }

    res.json(await MoviesModel.getMovieComments(id));
}

exports.validate = [
    check('title').trim().isLength({ min:1 }).withMessage('No title specified')
]

exports.checkValid = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
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

    next(req, res, next);
}

exports.fetchFromExternalApi = async(req, res, next) => {
    const externalRecord = await OpenMoviesProvider.fetchMovie(title);

    delete req.body.title;
    delete req.body.id;

    req.body = {
        ...req.body,
        ...externalRecord
    }

    next(req, res, next);
}

exports.store = async (req, res, next) => {
    await MoviesModel.saveMovie(req.body)

    res.status(HttpStatus.CREATED).send();
}

exports.deleteOne = async (req, res, next) => {
    await MoviesModel.removeMovie(req.params.id.trim())

    res.status(HttpStatus.OK).send();
}

