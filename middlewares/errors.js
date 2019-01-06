/**
 * Wraps up async function/Promise object and executes next middleware function
 * when exception was thrown.
 * 
 * @param {Function|Promise} asyncFunction Asynchronous function or promise
 * @returns {Function} 
 */
const catchAsync = (asyncFunction) => {
    return (req, res, next) => {
        asyncFunction(req, res, next).catch((err) => next(err));
    }
}

/**
 * Sends error message stored in Error object to the client
 * 
 * @param {Error} err Error Object
 * @param {Obect} req Request Object
 * @param {Object} res Response Object
 * @param {Function} next Next middleware
 */
const catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
}

module.exports = {
    catchAsync,
    catchErrors
}