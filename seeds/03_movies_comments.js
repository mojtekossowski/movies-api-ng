exports.seed = function(knex, Promise) {
  return knex('movies_comments').insert([{
    "movie_id": 1,
    "comment_id": 1
  }, {
    "movie_id": 2,
    "comment_id": 2
  }, {
    "movie_id": 3,
    "comment_id": 3
  }, {
    "movie_id": 1,
    "comment_id": 4
  }, {
    "movie_id": 2,
    "comment_id": 5
  }, {
    "movie_id": 3,
    "comment_id": 6
  }, {
    "movie_id": 1,
    "comment_id": 7
  }, {
    "movie_id": 2,
    "comment_id": 8
  }]);
};
