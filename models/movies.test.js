const path = require('path')
require(dotenv).config({ path: path.resolve(__dirname, '.env')});

const { assert, expect } = require('chai')
const movies = require('./movies');

describe('MoviesModel test', function() {
    
    it('selects all movies', async function (done) {
        var storedMovies = await movies.getAllMovies();
    });

});