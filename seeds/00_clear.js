exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('movies_comments').del(),
        knex('comments').del(),
        knex('movies').del()
    ])
}