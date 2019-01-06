
exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('movies', (table) => {
            table.increments('id').primary();
            table.string('title').notNullable();
        }),

        knex.schema.createTable('comments', (table) => {
            table.increments('id').primary();
            table.string('user').notNullable();
            table.string('title').notNullable();
            table.string('contents').notNullable();
        }),

        knex.schema.createTable('movies_comments', (table) => {
            table.increments('id').primary();
            table.integer('movie_id').references('movies_id');
            table.integer('comment_id').references('comments.id');
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('movies'),
        knex.schema.dropTable('movies_comments'),
        knex.schema.dropTable('comments'),
    ]);
};
