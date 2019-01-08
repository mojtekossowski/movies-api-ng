exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('comments').del(),
        knex('movies').del()
    ])
}