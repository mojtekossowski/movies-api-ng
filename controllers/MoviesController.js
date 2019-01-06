const IController = require('./IController');

const MoviesModel = require('../models/movies');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');

function normalizeTitle (title) {
    return title.replace(/\s+/g, '-').toLowerCase();
}

class MoviesController extends IController {

    async getAll(req, res, next) {
        res.json(await MoviesModel.getAllMovies())
    }

}

module.exports = new MoviesController;
