const chai = require('chai');
const expect = chai.expect;

const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

const CommentsModel = require('./comments');

const { db } = require('../db')

describe('CommentsModel', function () {

    this.afterAll(function (done) {
        db.seed.run().then(() => done() )
    });

    describe('getAllComments', function () {

        it ('retrieves all comments', function (done) {
            CommentsModel.getAllComments().then((comments) => {
                expect(comments).to.be.lengthOf(8);

                done();
            });
        });

    });

    describe('getCommentsByUser', function () {

        it ('retrieves comments by user', function (done) {
            CommentsModel.getCommentsByUser('boris').then((comments) => {
                expect(comments).to.be.an('Array');
                expect(comments).to.be.lengthOf(3)

                done();
            });
        });

        it ('retrieves empty comments list for inexisting', function (done) {
            CommentsModel.getCommentsByUser('foo').then((comments) => {
                expect(comments).to.be.an('Array');
                expect(comments).to.be.lengthOf(0)

                done();
            });
        });

    });

    describe('saveComment', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('saves comment if info is full', function (done) {
            CommentsModel.saveComment({
                "movie_id": 1,
                "user": "Foo",
                "title": "Foo",
                "contents": "lorem2137"
            }).then((result) => {

                done();
            });

        });

        it ('dont insert comment if comment is incomplete', function (done) {
            expect(CommentsModel.saveComment({
                "use1r": ""
            })).to.eventually.be.rejected.then((error) => {
                done();
            });
        });

    });

    describe('updateComment', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('updates movie when diff is ok', function (done) {
            CommentsModel.updateComment(1, {
                user: 'Foo'
            }).then((result) => {
                expect(result).to.be.equal(1);

                CommentsModel.getCommentsByUser('Foo').then((comments) => {
                    expect(comments[0].id).equal(1)

                    done()
                });
            });
        });

        it ('doesnt update when for wrong schema', function (done) {
            expect(CommentsModel.updateComment(1, {
                foo: 'Foo'
            })).to.eventually.be.rejected.then((error) => {
                done();
            });

        });

    });

    describe('removeComment', function () {

        this.afterEach(function (done) {
            db.seed.run().then(() => done() )
        });

        it ('removes comment if exists', function (done) {
            CommentsModel.removeComment(1).then((result) => {
                expect(result).to.be.equal(1);

                CommentsModel.getAllComments().then((movies) => {
                    expect(movies).to.be.lengthOf(7);
                    done();
                });
            });
        });

        it ('doesnt remove inexisting record', function (done) {
            CommentsModel.removeComment(10).then((result) => {
                expect(result).to.be.equal(0);

                CommentsModel.getAllComments().then((movies) => {
                    expect(movies).to.be.lengthOf(8);
                    done();
                });
            });
        });

    });

});