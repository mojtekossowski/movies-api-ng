
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_comments').insert([]);
    });
};
