const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const sinon = require('sinon');

const OpenMoviesProvider = require('../providers/OpenMoviesProvider');
const fakeMovieRecord = require('./assets/winnie-the-pooh');

const server = require('../app');
const { db } = require('../db');

describe('Movies', function () {

    before((done) => {
        db.seed.run().then(() => done() );
    })

    after((done) => {
        db.seed.run().then(() => done() );
    })

    describe('/GET movies', function () {

        it ('GET all movies', function(done) {
            chai.request(server)
                .get('/api/v1/movies')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const movies = Array.from(res.body);
                    expect(movies).to.be.lengthOf(3);

                    // Check if object has proper keys
                    const movieKeys = ["id", ...Object.keys(fakeMovieRecord)];
                    movies.forEach((movie) => {
                        expect(movie).to.be.an('Object');

                        // Check if stored movie has proper keys
                        movieKeys.forEach((key) => {
                            expect(movie).to.haveOwnProperty(key)
                        });
                    });

                    done();
                });
        });

        it ('GET movie by title', function(done) {
            chai.request(server)
                .get('/api/v1/movies/?title=foo')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const movies = res.body;
                    expect(movies).to.be.an('Array').that.is.lengthOf(1);

                    expect(movies[0].id).to.be.equal(1);

                    done();
                });
        });

    });

    describe('/GET movies :id', function () {

        it ('GET returns movie when exists', function (done) {
            chai.request(server)
                .get('/api/v1/movies/1')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const movie = res.body;
                    expect(movie.title).to.be.equal('To Wong Foo Thanks for Everything, Julie Newmar');
                    expect(movie.year).to.be.equal('1995');

                    done();
                });
        });

        it ('GET returns NOT_FOUND movie when not exists', function (done) {
            chai.request(server)
                .get('/api/v1/movies/2137')
                .then((res) => {
                    expect(res).to.have.status(404);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('GET returns BAD_REQUEST when id is not integer', function (done) {
            chai.request(server)
                .get('/api/v1/movies/foo')
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

    });

    describe('/POST movies', function () {

        this.beforeAll(() => {
            sinon
                .stub(OpenMoviesProvider, 'fetchMovie')
                .resolves(fakeMovieRecord);
        });

        this.afterAll(() => {
            OpenMoviesProvider.fetchMovie.restore();
        })

        this.beforeEach((done) => {
            db.seed.run().then(() => done() );
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() );
        });

        it ('POST inserts new movie gathering all data form remote service', function (done) {
            chai.request(server)
                .post('/api/v1/movies')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "newmovie"
                })
                .then((res) => {
                    expect(res).to.have.status(201);

                    chai.request(server)
                        .get('/api/v1/movies')
                        .then((res) => {
                            const movies = res.body
                            expect(movies).to.have.lengthOf(4);

                            const insertedMovie = movies[3];
                            expect(insertedMovie.title).to.be.equal('The Many Adventures of Winnie the Pooh');
                            expect(insertedMovie.year).to.be.equal('1977');

                            done();
                        });
                });
        });

        it ('POST overwrites data fetched from external API', function (done) {
            chai.request(server)
                .post('/api/v1/movies')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "newmovie",
                    "imdbid": "my-fake-imdb-id"
                })
                .then((res) => {
                    expect(res).to.have.status(201);

                    chai.request(server)
                        .get('/api/v1/movies')
                        .then((res) => {
                            const movies = res.body
                            expect(movies).to.have.lengthOf(4);

                            const insertedMovie = movies[3];
                            expect(insertedMovie.imdbid).to.be.equal("my-fake-imdb-id");

                            done();
                        });
                });
        });

        it ('POST doesnt allow to post existing movie', function (done) {
            chai.request(server)
                .post('/api/v1/movies')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "Foo"
                })
                .then((res) => {
                    expect(res).to.have.status(409);

                    done();
                });
        });

        it ('POST doesnt allow to post data out of schema', function (done) {
            chai.request(server)
                .post('/api/v1/movies')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "newmovie",
                    "somefakedata": "somefakevalue"
                })
                .then((res) => {
                    expect(res).to.have.status(400);

                    chai.request(server)
                        .get('/api/v1/movies')
                        .then((res) => {
                            const movies = res.body
                            expect(movies).to.have.lengthOf(3);

                            done();
                        });
                });
        });

    });

    describe('/PATCH movies :id', function () {

        this.beforeEach((done) => {
            db.seed.run().then(() => done() );
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() );
        });

        it('PATCH updates existing movie with proper fields', function (done) {
            chai.request(server)
                .patch('/api/v1/movies/1')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "some_new_title"
                }).then((res) => {
                    expect(res).to.have.status(204);

                    done();
                })
        });

        it('PATCH does not update non-integer movie with passed movie id', function (done) {
            chai.request(server)
                .patch('/api/v1/movies/foo')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "title": "new_title"
                }).then((res) => {
                    expect(res).to.have.status(400);

                    done();
                })
        });

        it('PATCH does not update movie with invalid property', function (done) {
            chai.request(server)
                .patch('/api/v1/movies/1')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "not-existing-property": "new_contents"
                }).then((res) => {
                    expect(res).to.have.status(400);

                    done();
                })
        });

        it('PATCH does not update not existing movie', function (done) {
            chai.request(server)
                .patch('/api/v1/movies/10')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "contents": "new_contents"
                }).then((res) => {
                    expect(res).to.have.status(400);

                    done();
                })
        });

    });

    describe('/DELETE movies :id', function () {

        this.beforeEach((done) => {
            db.seed.run().then(() => done() );
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() );
        });

        it ('DELETE removes existing movie', function (done) {
            Promise.all([
                // Count existing comments
                chai.request(server)
                    .get('/api/v1/movies')
                    .then((res) => Array.from(res.body).length),

                // Delete one comment
                chai.request(server)
                    .delete('/api/v1/movies/1')
            ]).then(([amount, res]) => {
                expect(res).to.have.status(200);

                chai.request(server)
                    .get('/api/v1/movies')
                    .then((res) => Array.from(res.body).length)
                    .then((newAmount) => {
                        expect(newAmount - amount).to.be.be.equal(-1);
                        done();
                    });

            });
        });

        it ('DELETE raises error on invalid comment id', function (done) {
            chai.request(server)
                .delete('/api/v1/movies/10')
                .then((res) => {
                    expect(res).to.have.status(404);

                    done();
                });
        });

    });

});