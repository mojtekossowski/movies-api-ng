const IController = require('./IController');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

class MoviesController extends IController {

    async getAll(req, res, next) {
        res.json(await MoviesModel.getAllMovies())
    }

    async getOne(req, res, next) {
        const title = req.params.title;
        if (!title) throw new Error("Movie title must be specified")
        res.json(await MoviesModel.getMovieByTitle(title))
    }

}

module.exports = new MoviesController;
