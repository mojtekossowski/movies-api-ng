const path = require('path')

const { assert, expect } = require('chai')
const movies = require('./movies');

describe('MoviesModel test', function(done) {
    
    it('selects all movies', function (done) {
        movies.getAllMovies().then(function (movies) {
            done();
        });
    });

});