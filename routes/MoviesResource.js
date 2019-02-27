const express = require('express');
const movies = express.Router();

const { catchAsync, checkValid } = require('../middlewares/errors')

const MoviesController = require('../controllers/MoviesController');

/**
 * @api {get} /movies      Get All Movies
 * @apiName GetAllMovies
 * @apiGroup Movies
 *
 * @apiDescription Lists all Movies. You are able to filter Movies by movies's title.
 *
 * @apiParam {String} [title]    Optional Movie Title
 *
 * @apiSuccess (Movies) {Object[]} -                Movies
 * @apiSuccess (Movies) {Number}   -.id             Movie's Id
 * @apiSuccess (Movies) {String}   -.title          Movie's Title
 * @apiSuccess (Movies) {String}   -.year           Movie's Prodution year
 * @apiSuccess (Movies) {String}   -.rated          Movie's Rated
 * @apiSuccess (Movies) {String}   -.released       Movie's Release date
 * @apiSuccess (Movies) {String}   -.runtime        Movie's Runtime
 * @apiSuccess (Movies) {String}   -.genre          Movie's Genre
 * @apiSuccess (Movies) {String}   -.director       Movie's Director
 * @apiSuccess (Movies) {String}   -.writer         Movie's Writer
 * @apiSuccess (Movies) {String}   -.actors         Movie's Actors
 * @apiSuccess (Movies) {String}   -.plot           Movie's Plot
 * @apiSuccess (Movies) {String}   -.language       Movie's Language
 * @apiSuccess (Movies) {String}   -.country        Movie's Country
 * @apiSuccess (Movies) {String}   -.awards         Movie's Awards
 * @apiSuccess (Movies) {String}   -.metascore      Movie's Metascore
 * @apiSuccess (Movies) {String}   -.imdbrating     Movie's Imdbrating
 * @apiSuccess (Movies) {String}   -.imdbvotes      Movie's Imdbvotes
 * @apiSuccess (Movies) {String}   -.imdbid         Movie's Imdbid
 * @apiSuccess (Movies) {String}   -.type           Movie's Type
 * @apiSuccess (Movies) {String}   -.dvd            Movie's Dvd release date
 * @apiSuccess (Movies) {String}   -.boxoffice      Movie's Box office
 * @apiSuccess (Movies) {String}   -.production     Movie's Production
 * @apiSuccess (Movies) {String}   -.website        Movie's Website
 *
 * @apiSuccessExample Success-Response: GetAllMoviesSuccess
 *  HTTP/1.1 200 OK
 *  {
 *      [
 *          {
 *              "id": 1,
 *              "title": "To Wong Foo Thanks for Everything, Julie Newmar",
 *              "year": "1995",
 *              "rated": "PG-13",
 *              "released": "08 Sep 1995",
 *              "runtime": "109 min",
 *              "genre": "Comedy, Drama",
 *              "director": "Beeban Kidron",
 *              "writer": "Douglas Carter Beane",
 *              "actors": "Wesley Snipes, Patrick Swayze, John Leguizamo, Stockard Channing",
 *              "plot": "Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.",
 *              "language": "English, French, Italian",
 *              "country": "USA",
 *              "awards": "Nominated for 2 Golden Globes. Another 1 nomination.",
 *              "metascore": "N/A",
 *              "imdbrating": "6.5",
 *              "imdbvotes": "24,960",
 *              "imdbid": "tt0114682",
 *              "type": "movie",
 *              "dvd": "07 Jan 2003",
 *              "boxoffice": "N/A",
 *              "production": "Universal Pictures",
 *              "website": "N/A"
 *          }
 *      ]
 *  }
 *
 */
movies.get('/', catchAsync(MoviesController.getAll));

/**
 * @api {get} /movies/:id      Get Movie Information
 * @apiName GetMovieId
 * @apiGroup Movies
 *
 * @apiDescription Returns Movie by given Movie Id
 *
 * @apiParam {Number} id    Movie Id
 *
 * @apiSuccess {Number}   id             Movie's Id
 * @apiSuccess {String}   title          Movie's Title
 * @apiSuccess {String}   year           Movie's Prodution year
 * @apiSuccess {String}   rated          Movie's Rated
 * @apiSuccess {String}   released       Movie's Release date
 * @apiSuccess {String}   runtime        Movie's Runtime
 * @apiSuccess {String}   genre          Movie's Genre
 * @apiSuccess {String}   director       Movie's Director
 * @apiSuccess {String}   writer         Movie's Writer
 * @apiSuccess {String}   actors         Movie's Actors
 * @apiSuccess {String}   plot           Movie's Plot
 * @apiSuccess {String}   language       Movie's Language
 * @apiSuccess {String}   country        Movie's Country
 * @apiSuccess {String}   awards         Movie's Awards
 * @apiSuccess {String}   metascore      Movie's Metascore
 * @apiSuccess {String}   imdbrating     Movie's Imdbrating
 * @apiSuccess {String}   imdbvotes      Movie's Imdbvotes
 * @apiSuccess {String}   imdbid         Movie's Imdbid
 * @apiSuccess {String}   type           Movie's Type
 * @apiSuccess {String}   dvd            Movie's Dvd release date
 * @apiSuccess {String}   boxoffice      Movie's Box office
 * @apiSuccess {String}   production     Movie's Production
 * @apiSuccess {String}   website        Movie's Website
 *
 * @apiSuccessExample Success-Response: GetMovieIdSuccess
 *  HTTP/1.1 200 OK
 *  {
 *      "id": 1,
 *      "title": "To Wong Foo Thanks for Everything, Julie Newmar",
 *      "year": "1995",
 *      "rated": "PG-13",
 *      "released": "08 Sep 1995",
 *      "runtime": "109 min",
 *      "genre": "Comedy, Drama",
 *      "director": "Beeban Kidron",
 *      "writer": "Douglas Carter Beane",
 *      "actors": "Wesley Snipes, Patrick Swayze, John Leguizamo, Stockard Channing",
 *      "plot": "Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.",
 *      "language": "English, French, Italian",
 *      "country": "USA",
 *      "awards": "Nominated for 2 Golden Globes. Another 1 nomination.",
 *      "metascore": "N/A",
 *      "imdbrating": "6.5",
 *      "imdbvotes": "24,960",
 *      "imdbid": "tt0114682",
 *      "type": "movie",
 *      "dvd": "07 Jan 2003",
 *      "boxoffice": "N/A",
 *      "production": "Universal Pictures",
 *      "website": "N/A"
 *  }
 *
 * @apiErrorExample Error-Response: MovieIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Movie not found"
 *  }
 *
 * @apiErrorExample Error-Response: MovieIdParametersInvalid
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "id": {
 *          "location": "params",
 *          "param": "id",
 *          "value": "foo",
 *          "msg": "Movie id must be an integer."
 *      }
 *  }
 *
 */
movies.get('/:id', [
    MoviesController.validateId,
    checkValid,
    catchAsync(MoviesController.getOne)
]);

/**
 * @api {get} /movies/:id/comments      Get All comments for given Movie by Movie Id
 * @apiName GetMovieComments
 * @apiGroup Movies
 *
 * @apiDescription Returns All Comments of Movie by given Movie Id
 *
 * @apiParam {Number} id    Movie Id
 *
 * @apiSuccess (Comments) {Object[]} -           Comments
 * @apiSuccess (Comments) {Number}   -.id        Comment's Id
 * @apiSuccess (Comments) {Number}   -.movie_id  Comment's Movie Id
 * @apiSuccess (Comments) {String}   -.user      Comment's User
 * @apiSuccess (Comments) {String}   -.title     Comment's Title
 * @apiSuccess (Comments) {String}   -.contents  Comment's Contents
 *
 * @apiSuccessExample Success-Response: GetAllMovieCommentsSuccess
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
 * @apiErrorExample Error-Response: MovieIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Movie not found"
 *  }
 *
 * @apiErrorExample Error-Response: MovieIdParametersInvalid
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "id": {
 *          "location": "params",
 *          "param": "id",
 *          "value": "foo",
 *          "msg": "Movie id must be an integer."
 *      }
 *  }
 *
 */
movies.get('/:id/comments', [
    MoviesController.validateId,
    checkValid,
    catchAsync(MoviesController.getMovieComments)
]);

/**
 * @api {post} /movies     Movie Insertion
 * @apiName PostMovie
 * @apiGroup Movies
 *
 * @apiDescription Insert new Movie. If any of following fields are missing,
 * movie would be fetched from OMDB Api
 *
 * @apiParam {String}   title            Movie's Title
 * @apiParam {String}   [year]           Optional Movie's Prodution year
 * @apiParam {String}   [rated]          Optional Movie's Rated
 * @apiParam {String}   [released]       Optional Movie's Release date
 * @apiParam {String}   [runtime]        Optional Movie's Runtime
 * @apiParam {String}   [genre]          Optional Movie's Genre
 * @apiParam {String}   [director]       Optional Movie's Director
 * @apiParam {String}   [writer]         Optional Movie's Writer
 * @apiParam {String}   [actors]         Optional Movie's Actors
 * @apiParam {String}   [plot]           Optional Movie's Plot
 * @apiParam {String}   [language]       Optional Movie's Language
 * @apiParam {String}   [country]        Optional Movie's Country
 * @apiParam {String}   [awards]         Optional Movie's Awards
 * @apiParam {String}   [metascore]      Optional Movie's Metascore
 * @apiParam {String}   [imdbrating]     Optional Movie's Imdbrating
 * @apiParam {String}   [imdbvotes]      Optional Movie's Imdbvotes
 * @apiParam {String}   [imdbid]         Optional Movie's Imdbid
 * @apiParam {String}   [type]           Optional Movie's Type
 * @apiParam {String}   [dvd]            Optional Movie's Dvd release date
 * @apiParam {String}   [boxoffice]      Optional Movie's Box office
 * @apiParam {String}   [production]     Optional Movie's Production
 * @apiParam {String}   [website]        Optional Movie's Website
 *
 * @apiSuccessExample Success-Response: PostMovieSuccess
 *  HTTP/1.1 201 CREATED
 *
 * @apiError MovieMissingTitle Post request sent without title
 * @apiErrorExample Error-Response: MovieMissingTitle
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": {
 *          "id": {
 *          "location": "params",
 *          "param": "id",
 *          "value": "foo",
 *          "msg": "No title specified."
 *      }
 *  }
 *
 * @apiError MovieConflict Post request sent but movie exists
 * @apiErrorExample Error-Response: MovieConflict
 *  HTTP/1.1 409 CONFLICT
 *  {
 *      "message": "Movie already exists in database"
 *  }
 *
 * @apiError MovieExternalApiError Post request sent but OMDB Api throws error
 * @apiErrorExample Error-Response: MovieExternalApiError
 *  HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *  {
 *      "message": "External Api error: ExternalApiError"
 *  }
 *
 * @apiError MovieInvalidSchema Post request sent with not supported schema
 * @apiErrorExample Error-Response: MovieInvalidSchema
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Unable to store - invalid schema"
 *  }
 *
 */
movies.post('/', [
    MoviesController.validateStore,
    checkValid,
    catchAsync(MoviesController.checkIfExists),
    catchAsync(MoviesController.fetchFromExternalApi),
    catchAsync(MoviesController.store)
]);

/**
 * @api {patch} /movies/:id   Movie Update
 * @apiName PatchMovie
 * @apiGroup Movies
 *
 * @apiDescription Updates Movie specified by Movie Id with given parameters
 *
 * @apiParam {Number}   id              Movie's Id
 * @apiParam {String}   [title]         Optional Movie's Title
 * @apiParam {String}   [year]          Optional Movie's Prodution year
 * @apiParam {String}   [rated]         Optional Movie's Rated
 * @apiParam {String}   [released]      Optional Movie's Release date
 * @apiParam {String}   [runtime]       Optional Movie's Runtime
 * @apiParam {String}   [genre]         Optional Movie's Genre
 * @apiParam {String}   [director]      Optional Movie's Director
 * @apiParam {String}   [writer]        Optional Movie's Writer
 * @apiParam {String}   [actors]        Optional Movie's Actors
 * @apiParam {String}   [plot]          Optional Movie's Plot
 * @apiParam {String}   [language]      Optional Movie's Language
 * @apiParam {String}   [country]       Optional Movie's Country
 * @apiParam {String}   [awards]        Optional Movie's Awards
 * @apiParam {String}   [metascore]     Optional Movie's Metascore
 * @apiParam {String}   [imdbrating]    Optional Movie's Imdbrating
 * @apiParam {String}   [imdbvotes]     Optional Movie's Imdbvotes
 * @apiParam {String}   [imdbid]        Optional Movie's Imdbid
 * @apiParam {String}   [type]          Optional Movie's Type
 * @apiParam {String}   [dvd]           Optional Movie's Dvd release date
 * @apiParam {String}   [boxoffice]     Optional Movie's Box office
 * @apiParam {String}   [production]    Optional Movie's Production
 * @apiParam {String}   [website]       Optional Movie's Website
 *
 * @apiSuccessExample Success-Response: PostMovieSuccess
 *  HTTP/1.1 204 NO_CONTENT
 *
 * @apiError MovieIdNotFound Patch request invalid Movie Id
 * @apiErrorExample Error-Response: MovieIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Movie not found"
 *  }
 *
 * @apiError MovieInvalidSchema Patch request sent with not supported schema
 * @apiErrorExample Error-Response: MovieInvalidSchema
 *  HTTP/1.1 400 BAD_REQUEST
 *  {
 *      "message": "Unable to update - invalid schema"
 *  }
 *
 */
movies.patch('/:id',[
    MoviesController.validateId,
    checkValid,
    catchAsync(MoviesController.checkIfExists),
    catchAsync(MoviesController.update)
]);

/**
 * @api {delete} /movies/:id   Movie Remove
 * @apiName DeleteMovieById
 * @apiGroup Movies
 *
 * @apiDescription Deletes Movie by given Movie Id
 *
 * @apiParam {Number} id        Movie id
 *
 * @apiSuccessExample Success-Response: DeleteMovieByIdSuccess
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response: MovieIdNotFound
 *  HTTP/1.1 404 NOT_FOUND
 *  {
 *      "message": "Movie not found"
 *  }
 *
 */
movies.delete('/:id', catchAsync(MoviesController.deleteOne));

module.exports = movies