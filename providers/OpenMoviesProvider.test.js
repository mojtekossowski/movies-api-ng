const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const mock = require('mock-require');
mock('node-fetch', () => new Promise((resolve)=> {
    resolve({
        json: () => ({ Error: "fake error" })
    });
}));

const OpenMoviesProvider = require('./OpenMoviesProvider')

describe('OpenMoviesProvider', function () {

    describe('nomalize', function () {
        
        it ('generates proper normalization object', function () {
            const fetchedObject = {
                FOO: 1, bAr: 2, Baz: 3
            };
    
            expect(OpenMoviesProvider.normalize(fetchedObject)).to.be.deep.equal({
                foo: 1, bar: 2, baz: 3
            });
        });

        it ('ommits response, poster and ratings fields', function() {
            const fetchedObject = {
                Response: 1, Poster: 2, Ratings: 3
            };

            const OpenMoviesProvider = require('./OpenMoviesProvider')
            expect(OpenMoviesProvider.normalize(fetchedObject)).to.be.deep.equal({ });
        });

    });

    describe('fetchMovie', function () {

        it ('should reject promise on external api error', function (done) {
            
            expect(
                OpenMoviesProvider.fetchMovie()
            ).to.eventually.be.rejected.then((error) => {
                done();
            });
        });

    });

});