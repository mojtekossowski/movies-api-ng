
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
            table.integer('movie_id').notNullable().references('movies_id');
            table.string('user').notNullable();
            table.string('title').notNullable();
            table.string('contents').notNullable();
        })

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('comments'),
        knex.schema.dropTable('movies'),
    ]);
};
