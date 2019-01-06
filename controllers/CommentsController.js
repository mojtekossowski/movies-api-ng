const IController = require('./IController');

class CommentsController extends IController {

    async getAll(req, res, next) {
        throw new Error ('Not Implemented yet.');
    }

}

module.exports = new CommentsController;
