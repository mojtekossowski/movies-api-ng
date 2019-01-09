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

                    movies.forEach((movie) => {
                        expect(movie).to.haveOwnProperty('id')
                        expect(movie).to.haveOwnProperty('title')
                        expect(movie).to.haveOwnProperty('year')
                        expect(movie).to.haveOwnProperty('rated')
                        expect(movie).to.haveOwnProperty('released')
                        expect(movie).to.haveOwnProperty('runtime')
                        expect(movie).to.haveOwnProperty('genre')
                        expect(movie).to.haveOwnProperty('director')
                        expect(movie).to.haveOwnProperty('writer')
                        expect(movie).to.haveOwnProperty('actors')
                        expect(movie).to.haveOwnProperty('plot')
                        expect(movie).to.haveOwnProperty('language')
                        expect(movie).to.haveOwnProperty('country')
                        expect(movie).to.haveOwnProperty('awards')
                        expect(movie).to.haveOwnProperty('metascore')
                        expect(movie).to.haveOwnProperty('imdbrating')
                        expect(movie).to.haveOwnProperty('imdbvotes')
                        expect(movie).to.haveOwnProperty('imdbid')
                        expect(movie).to.haveOwnProperty('type')
                        expect(movie).to.haveOwnProperty('dvd')
                        expect(movie).to.haveOwnProperty('boxoffice')
                        expect(movie).to.haveOwnProperty('production')
                        expect(movie).to.haveOwnProperty('website')
                    });

                    done();
                });
        });

    });

    describe('/GET movies :title', function () {

        it ('GET returns movie when exists', function (done) {
            chai.request(server)
                .get('/api/v1/movies/foo')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const movie = res.body;
                    expect(movie.id).to.be.equal(1);
                    expect(movie.title).to.be.equal('To Wong Foo Thanks for Everything, Julie Newmar');
                    expect(movie.year).to.be.equal('1995');

                    done();
                });
        });

        it ('GET returns NOT_FOUND movie when not exists', function (done) {
            chai.request(server)
                .get('/api/v1/movies/somenotexistingmovie')
                .then((res) => {
                    expect(res).to.have.status(404);
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

        this.beforeEach(() => {
            db.seed.run().then(() => done() );
        });

        this.afterEach(() => {
            db.seed.run().then(() => done() );
        });

    });

    describe('/DELETE movies :id', function () {

        this.beforeEach(() => {
            db.seed.run().then(() => done() );
        });

        this.afterEach(() => {
            db.seed.run().then(() => done() );
        });

    });

});