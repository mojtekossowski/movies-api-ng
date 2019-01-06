const IController = require('./IController');

const MoviesModel = require('../models/movies');

class MoviesController extends IController {

    async getAll(req, res, next) {
        res.json(await MoviesModel.getAllMovies())
    }

}

module.exports = new MoviesController;
