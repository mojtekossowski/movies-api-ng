
exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('movies', (table) => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('year').notNullable();
            table.string('rated').notNullable();
            table.string('released').notNullable();
            table.string('runtime').notNullable();
            table.string('genre').notNullable();
            table.string('director').notNullable();
            table.string('writer').notNullable();
            table.string('actors').notNullable();
            table.string('plot').notNullable();
            table.string('language').notNullable();
            table.string('country').notNullable();
            table.string('awards').notNullable();
            table.string('metascore').notNullable();
            table.string('imdbrating').notNullable();
            table.string('imdbvotes').notNullable();
            table.string('imdbid').notNullable();
            table.string('type').notNullable();
            table.string('dvd').notNullable();
            table.string('boxoffice').notNullable();
            table.string('production').notNullable();
            table.string('website').notNullable();
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
        knex.schema.dropTable('movies_comments'),
        knex.schema.dropTable('movies'),
        knex.schema.dropTable('comments'),
    ]);
};
