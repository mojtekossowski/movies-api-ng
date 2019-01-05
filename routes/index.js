const express = require('express');
const router = express.Router();

const MoviesResource = require('./MoviesResource');
const CommentsResource = require('./CommentsResource');

router.use('/movies', MoviesResource);
router.use('/comments', CommentsResource);

module.exports = router;