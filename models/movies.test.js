const path = require('path')

const { assert, expect } = require('chai')
const movies = require('./movies');

describe('MoviesModel test', function() {
    
    it('selects all movies', async function (done) {
        var storedMovies = await movies.getAllMovies();
        done()
    });

});