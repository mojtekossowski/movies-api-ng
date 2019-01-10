const express = require('express');
const comments = express.Router();

const { catchAsync, checkValid } = require('../middlewares/errors');

const CommentsController = require('../controllers/CommentsController');

/**
 * @api {get} /comments      Get All Comments
 * @apiName GetAllComments
 * @apiGroup Comments
 * 
 * @apiDescription Lists all Comments. You are able to filter Comments by user's name.
 * 
 * @apiParam {String} [user]    Optional User name
 * 
 * @apiSuccess (Comments) {Object[]} -           Comments
 * @apiSuccess (Comments) {Number}   -.id        Comment's Id
 * @apiSuccess (Comments) {Number}   -.movie_id  Comment's Movie Id
 * @apiSuccess (Comments) {String}   -.user      Comment's User
 * @apiSuccess (Comments) {String}   -.title     Comment's Title
 * @apiSuccess (Comments) {String}   -.contents  Comment's Contents
 * 
 * @apiSuccessExample Success-Response: GetAllCommentsSuccess
 *  HTTP/1.1 200 OK
 *  {
 *      [
 *          {
 *              "id": 1,
 *              "movie_id": 1,
 *              "user": "Username1",
 *              "title": "Title1",
 *              "contents": "Coments"
 *          }
 *      ]
 *  }
 * 
 */
comments.get('/', catchAsync(CommentsController.getAll));

/**
 * @api {get} /comments/:id   Get Comment Information
 * @apiName GetCommentById
 * @apiGroup Comments
 * 
 * @apiDescription Returns Comment by given Comment Id
 * 
 * @apiParam {Number} id        Comment Id
 * 
 * @apiSuccess {Number} id          Comment's Id
 * @apiSuccess {Number} movie_id    Comment's Movie Id
 * @apiSuccess {String} user        Comment's User
 * @apiSuccess {String} title       Comment's Title
 * @apiSuccess {String} contents    Comment's Contents
 *  
 * @apiSuccessExample Success-Response: GetCommentByIdSuccess
 *  HTTP/1.1 200 OK
 *  {
 *      "id": 1,
 *      "movie_id": 1,
 *      "user": "Username1",
 *      "title": "Title1",
 *      "contents": "Coments"
 *  }
 * 
 * @apiErrorExample Error-Response: CommentIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Comment not found"
 *  }
 * 
 * @apiErrorExample Error-Response: CommentIdParametersInvalid
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "id": {
 *          "location": "params",
 *          "param": "id",
 *          "value": "foo",
 *          "msg": "Comment id must be an integer."
 *      }
 *  }
 * 
 */
comments.get('/:id', [
    CommentsController.validateId,
    checkValid,
    catchAsync(CommentsController.getOne)
]);

/**
 * @api {post} /comments      Comment Insertion
 * @apiName PostComment
 * @apiGroup Comments
 * 
 * @apiDescription Inserts new Comment
 * 
 * @apiParam {Number} movie_id    Comment's Movie Id
 * @apiParam {String} user        Comment's User
 * @apiParam {String} title       Comment's Title
 * @apiParam {String} contents    Comment's Contents
 * 
 * @apiSuccessExample Success-Response: PostCommentSuccess
 *  HTTP/1.1 201 CREATED
 * 
 * @apiError CommentsMovieNotFound Id of provided Movie does not exist
 * @apiErrorExample Error-Response: CommentsMovieNotFound
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Movie with given movie_id doesn't exist"
 *  }
 * 
 * @apiError CommentsParametersInvalid Invalid parameters sent
 * @apiErrorExample Error-Response: CommentsParametersInvalid
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "movie_id": {
 *              "location": "body",
 *              "param": "movie_id",
 *              "msg": "Movie id must be an integer."
 *          },
 *          "user": {
 *              "location": "body",
 *              "param": "user",
 *              "msg": "User not specified"
 *          },
 *          "title": {
 *              "location": "body",
 *              "param": "title",
 *              "msg": "Title not specified"
 *          },
 *          "contents": {
 *              "location": "body",
 *              "param": "contents",
 *              "msg": "Contents not specified"
 *          }
 *      }
 *  }
 * 
 * @apiError CommentInvalidSchema Post request sent with not supported schema
 * @apiErrorExample Error-Response: CommentInvalidSchema
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Unable to store - invalid schema"
 *  }
 * 
 */
comments.post('/', [
    CommentsController.validateStore,
    checkValid,
    catchAsync(CommentsController.checkIfMovieExists),
    catchAsync(CommentsController.store)
]);

/**
 * @api {patch} /comments/:id      Comment Update
 * @apiName PatchComment
 * @apiGroup Comments
 * 
 * @apiDescription Updates Comment by given Comment Id
 * 
 * @apiParam {Number} id        Comment Id
 * 
 * @apiSuccess {Number} [movie_id]    Optional Comment's Movie Id
 * @apiSuccess {String} [user]        Optional Comment's User
 * @apiSuccess {String} [title]       Optional Comment's Title
 * @apiSuccess {String} [contents]    Optional Comment's Contents
 * 
 * @apiSuccessExample Success-Response: PatchCommentSuccess
 *  HTTP/1.1 204 NO_CONTENT
 * 
 * @apiErrorExample Error-Response: CommentIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Comment not found"
 *  }
 * 
 * @apiError CommentsMovieNotFound Id of provided Movie does not exist
 * @apiErrorExample Error-Response: CommentsMovieNotFound
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Movie with given movie_id doesn't exist"
 *  }
 * 
 * @apiError CommentsParametersInvalid Invalid parameters sent
 * @apiErrorExample Error-Response: CommentsParametersInvalid
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "movie_id": {
 *              "location": "body",
 *              "param": "movie_id",
 *              "msg": "Movie id must be an integer."
 *          },
 *          "user": {
 *              "location": "body",
 *              "param": "user",
 *              "msg": "User not specified"
 *          },
 *          "title": {
 *              "location": "body",
 *              "param": "title",
 *              "msg": "Title not specified"
 *          },
 *          "contents": {
 *              "location": "body",
 *              "param": "contents",
 *              "msg": "Contents not specified"
 *          }
 *      }
 *  }
 * 
 * @apiError CommentInvalidSchema Patch request sent with not supported schema
 * @apiErrorExample Error-Response: CommentInvalidSchema
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Unable to update - invalid schema"
 *  }
 *  
 */
comments.patch('/:id', [
    CommentsController.validateId,
    checkValid,
    catchAsync(CommentsController.checkIfMovieExists),
    catchAsync(CommentsController.update)
]);

/**
 * @api {delete} /comments/:id   Comment Remove
 * @apiName DeleteCommentById
 * @apiGroup Comments
 * 
 * @apiDescription Deletes Comment by given Comment Id
 * 
 * @apiParam {Number} id        Comment Id
 *  
 * @apiSuccessExample Success-Response: DeleteCommentByIdSuccess
 *  HTTP/1.1 200 OK
 * 
 * @apiErrorExample Error-Response: CommentIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Comment not found"
 *  }
 * 
 */
comments.delete('/:id', catchAsync(CommentsController.deleteOne));

module.exports = comments;