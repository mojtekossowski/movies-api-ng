const { validationResult } = require('express-validator/check')
const HttpStatus = require('http-status-codes');

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
 */
const catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
}

/**
 * Sends error message with BadRequest if express-validator found any incorrectness
 */
const checkValid = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errors.mapped()
        })
    }

    next();
}


module.exports = {
    catchAsync,
    catchErrors,
    checkValid
}