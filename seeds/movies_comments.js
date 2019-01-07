
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_comments').insert([{
        "id": 1,
        "movie_id": 1,
        "comment_id": 1
      }, {
        "id": 2,
        "movie_id": 2,
        "comment_id": 2
      }, {
        "id": 3,
        "movie_id": 3,
        "comment_id": 3
      }, {
        "id": 4,
        "movie_id": 1,
        "comment_id": 4
      }, {
        "id": 5,
        "movie_id": 2,
        "comment_id": 5
      }, {
        "id": 6,
        "movie_id": 3,
        "comment_id": 6
      }, {
        "id": 7,
        "movie_id": 1,
        "comment_id": 7
      }, {
        "id": 8,
        "movie_id": 2,
        "comment_id": 8
      }]);
    });
};
