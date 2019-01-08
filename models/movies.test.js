const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

const MoviesModel = require('./movies');

const { db } = require('../db')

describe('MoviesModel', function() {

    this.afterAll(function (done) {
        db.seed.run().then(() => done() )
    });

    describe('getAllMovies', function () {

        it ('selects all movies', function (done) {
            MoviesModel.getAllMovies().then((movies) => {
                expect(movies).to.be.an("Array").that.is.not.empty;
                expect(movies).to.be.an("Array").that.has.lengthOf(3);
    
                done();
            });
        });

    });

    describe('getMoviesByTitle', function () {

        it ('selects single movie', function (done) {
            MoviesModel.getMoviesByTitle('star').then((movies) => {
                expect(movies).to.be.an("Array");
                expect(movies).to.have.lengthOf(1);
                expect(movies[0].title).to.be.equal('Star Wars: Episode IV - A New Hope');
                expect(movies[0].year).to.be.equal('1977');
                
                done();
            });
        });

        it ('returns empty when movie not found', function (done) {
            MoviesModel.getMoviesByTitle('foobarbaz').then((movies) => {
                expect(movies).to.be.an("Array");
                expect(movies).to.have.lengthOf(0);

                done();
            });
        });
    
    });

    describe('getMovieComments', function () {

        it ('selects all comments for given movie', function (done) {
            MoviesModel.getMovieComments(3).then(function (comments) {
                expect(comments).to.be.an('Array');
                expect(comments).to.be.lengthOf(2);
                
                expect(comments[0].user).to.be.equal('Boris');
                expect(comments[0].title).to.be.equal('Baz');
                
                expect(comments[1].user).to.be.equal('Macciavelli');                
                expect(comments[1].title).to.be.equal('Dolor');
                
                done();
            });
        });

        it ('returns empty list for non existing movie', function(done) {
            MoviesModel.getMovieComments(4).then(function (comments) {
                expect(comments).to.be.an('Array');
                expect(comments).to.be.lengthOf(0);

                done();
            });
        });

    });

    describe('saveMovie', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('should insert movie with full specification', function (done) {
            MoviesModel.saveMovie({
                "title": "Foo",
                "year": "Foo",
                "rated": "Foo",
                "released": "Foo",
                "runtime": "Foo",
                "genre": "Foo",
                "director": "Foo",
                "writer": "Foo",
                "actors": "Foo",
                "plot": "Foo",
                "language": "Foo",
                "country": "Foo",
                "awards": "Foo",
                "metascore": "Foo",
                "imdbrating": "Foo",
                "imdbvotes": "Foo",
                "imdbid": "Foo",
                "type": "Foo",
                "dvd": "Foo",
                "boxoffice": "Foo",
                "production": "Foo",
                "website": "Foo"
            }).then((result) => {
                expect(result.rowCount).to.be.equal(1)

                MoviesModel.getAllMovies().then(function (movies) {
                    expect(movies).to.be.lengthOf(4)

                    done();
                });
            });
        
        })

        it ('shouldnt insert movie if some fields not specified', function (done) {
            expect(MoviesModel.saveMovie({
                "title": "Bar"
            })).to.eventually.be.rejected.then((error) => {
                done();
            });
        })

    });

    describe('updateMovie', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('updates movie when diff is ok', function (done) {
            MoviesModel.updateMovie(1, { 
                title: 'Foo'
            }).then((result) => {
                expect(result).to.be.equal(1);

                MoviesModel.getMoviesByTitle('Foo').then((movies) => {
                    expect(movies[0].id).equal(1)

                    done()
                });
            });
        });

        it ('doesnt update when for wrong schema', function (done) {
            expect(MoviesModel.updateMovie(1, { 
                foo: 'Foo'
            })).to.eventually.be.rejected.then((error) => {
                done();
            });

        });

    });

    describe('removeMovie', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('removes movie if exists', function (done) {
            MoviesModel.removeMovie(1).then((result) => {
                expect(result).to.be.equal(1);

                MoviesModel.getAllMovies().then((movies) => {
                    expect(movies).to.be.lengthOf(2);
                    done();
                });
            });
        });

        it ('doesnt remove inexisting record', function (done) {
            MoviesModel.removeMovie(10).then((result) => {
                expect(result).to.be.equal(0);

                MoviesModel.getAllMovies().then((movies) => {
                    expect(movies).to.be.lengthOf(3);
                    done();
                });
            });
        });

    });

});