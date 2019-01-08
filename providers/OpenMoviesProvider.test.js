const { expect } = require ('chai')

const OpenMoviesProvider = require('./OpenMoviesProvider')

describe('OpenMoviesProvider', function () {

    it ('generates proper normalization object', function () {
        const fetchedObject = {
            FOO: 1,
            bAr: 2,
            Baz: 3,
            Response: "Foo",
            Poster: "Bar"
        };

        expect(OpenMoviesProvider.normalize(fetchedObject)).to.be.deep.equal({
            foo: 1,
            bar: 2,
            baz: 3
        });

    });

});