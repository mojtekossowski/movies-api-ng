const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');
const { db } = require('../db');

const commentsFields = ["movie_id", "user", "title", "contents"];

describe('Comments', function () {

    before((done) => {
        db.seed.run().then(() => done() );
    })

    after((done) => {
        db.seed.run().then(() => done() );
    })

    describe('/GET comments', function () {

        it ('GET all comments', function(done) {
            chai.request(server)
                .get('/api/v1/comments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const comments = Array.from(res.body);
                    expect(comments).to.be.lengthOf(8);

                    comments.forEach((comment) => {
                        commentsFields.forEach((key) => {
                            expect(comment).to.haveOwnProperty(key);
                        });
                    });

                    done();
                });
        });

        it ('GET all comments of given user', function(done) {
            chai.request(server)
                .get('/api/v1/comments?user=boris')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const comments = Array.from(res.body);
                    expect(comments).to.be.lengthOf(3);

                    comments.forEach((comment) => {
                        commentsFields.forEach((key) => {
                            expect(comment).to.haveOwnProperty(key);
                        });
                    });

                    done();
                });
        });

    });

    describe('/GET comments :id', function () {

        it ('GET existing comment', function (done) {
            chai.request(server)
                .get('/api/v1/comments/1')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const comment = res.body;

                    expect(comment).to.be.an('Object');
                    commentsFields.forEach((key) => {
                        expect(comment).to.haveOwnProperty(key);
                    });

                    done();
                });
        });

        it ('GET throws NOT_FOUND if there are no existing commentId', function (done) {
            chai.request(server)
                .get('/api/v1/comments/19')
                .then((res) => {
                    expect(res).to.have.status(404);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('GET throws BAD_REQUEST if id was not set to integer', function (done) {
            chai.request(server)
                .get('/api/v1/comments/foo')
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

    });

    describe('/POST comments', function () {

        this.beforeEach((done) => {
            db.seed.run().then(() => done() )
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() )
        });

        it ('POST comment for existing movie', function (done) {
            Promise.all([
                // Fetch existing messages
                chai.request(server)
                    .get('/api/v1/comments')
                    .then((res) => Array.from(res.body).length),

                // Post new message
                chai.request(server)
                    .post('/api/v1/comments')
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({
                        "movie_id": 1,
                        "user": "Foo",
                        "title": "Foo",
                        "contents": "lorem2137"
                    }),

            ]).then(([amount, res]) => {
                expect(res).to.have.status(201);

                // Fetch new amount
                chai.request(server)
                    .get('/api/v1/comments')
                    .then((res) => Array.from(res.body).length)
                    .then((newAmount) => {
                        // Check if new was added
                        expect(newAmount - amount).to.be.equal(1);
                        done();
                    });

            });
        });

        it ('POST comment fails with missing movie_id', function (done) {
            chai.request(server)
                .post('/api/v1/comments')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "user": "Foo",
                    "title": "Foo",
                    "contents": "lorem2137"
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('POST comment fails with missing user', function (done) {
            chai.request(server)
                .post('/api/v1/comments')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "movie_id": 1,
                    "title": "Foo",
                    "contents": "lorem2137"
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('POST comment fails with missing title', function (done) {
            chai.request(server)
                .post('/api/v1/comments')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "movie_id": 1,
                    "user": "Foo",
                    "contents": "lorem2137"
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('POST comment fails with missing contents', function (done) {
            chai.request(server)
                .post('/api/v1/comments')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "movie_id": 1,
                    "user": "Foo",
                    "title": "Foo"
                })
                .then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

        it ('POST comment fails on invalid movie', function (done) {
            chai.request(server)
                .post('/api/v1/comments')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "movie_id": 200,
                    "user": "Foo",
                    "title": "Foo",
                    "contents": "lorem2137"
                }).then((res) => {
                    expect(res).to.have.status(400);
                    expect(res).to.be.json;

                    done();
                });
        });

    });

    describe('/PATCH comments :id', function () {

        this.beforeEach((done) => {
            db.seed.run().then(() => done() )
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() )
        });

        it('PATCH updates existing fields', function (done) {
            chai.request(server)
                .patch('/api/v1/comments/1')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "user": "Foo"
                }).then((res) => {
                    expect(res).to.have.status(204);
                    
                    done();
                })
        });

        it ('PATCH doesnt updates non-integer comment', function (done) {
            chai.request(server)
                .patch('/api/v1/comments/foo')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "user": "Foo"
                }).then(async (res) => {
                    expect(res).to.have.status(400);
                    
                    done();
                })
        });

        it ('PATCH doesnt updates when some of basic fields are not present', function (done){
            chai.request(server)
                .patch('/api/v1/comments/foo')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "inexisting": "Foo"
                }).then(async (res) => {
                    expect(res).to.have.status(400);
                    
                    done();
                })
        });

        it ('PATCH doesnt inexisting movie id', function (done){
            chai.request(server)
                .patch('/api/v1/comments/1')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "movie_id": 351
                }).then(async (res) => {
                    expect(res).to.have.status(400);

                    done();
                })
        });

    })

    describe('/DELETE comments :id', function () {

        this.beforeEach((done) => {
            db.seed.run().then(() => done() );
        });

        this.afterEach((done) => {
            db.seed.run().then(() => done() );
        });
        
        it ('DELETE removes existing comment', function (done) {
            Promise.all([
                // Count existing comments
                chai.request(server)
                    .get('/api/v1/comments')
                    .then((res) => Array.from(res.body).length),

                // Delete one comment
                chai.request(server)
                    .delete('/api/v1/comments/1')
            ]).then(([amount, res]) => {
                expect(res).to.have.status(200);

                chai.request(server)
                    .get('/api/v1/comments')
                    .then((res) => Array.from(res.body).length)
                    .then((newAmount) => {
                        expect(newAmount - amount).to.be.be.equal(-1);
                        done();
                    });

            });
        });

        it ('DELETE raises error on invalid comment id', function (done) {
            chai.request(server)
                .delete('/api/v1/comments/10')
                .then((res) => {
                    expect(res).to.have.status(404);

                    done();
                });
        });

    });

});