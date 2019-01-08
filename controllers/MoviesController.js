const IController = require('./IController');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

class MoviesController extends IController {

    async getAll(req, res, next) {
        res.json(await MoviesModel.getAllMovies())
    }

    async getOne(req, res, next) {
        const title = req.params.title.trim();
        if (!title) {
            throw new Error("Movie title must be not empty")
        }

        const movies = await MoviesModel.getMoviesByTitle(title);
        if (!movies.length) {
            throw new Error(`No such movie ${title}`)
        }

        res.json(movie[0])
    }

}

module.exports = new MoviesController;
