
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.alterTable('movies', (table) => {
            table.string('normalized_title').notNullable().unique();
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
            table.string('response').notNullable();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.table('movies', (table) => {
            table.dropColumn('normalized_title');
            table.dropColumn('year');
            table.dropColumn('rated');
            table.dropColumn('released');
            table.dropColumn('runtime');
            table.dropColumn('genre');
            table.dropColumn('director');
            table.dropColumn('writer');
            table.dropColumn('actors');
            table.dropColumn('plot');
            table.dropColumn('language');
            table.dropColumn('country');
            table.dropColumn('awards');
            table.dropColumn('metascore');
            table.dropColumn('imdbrating');
            table.dropColumn('imdbvotes');
            table.dropColumn('imdbid');
            table.dropColumn('type');
            table.dropColumn('dvd');
            table.dropColumn('boxoffice');
            table.dropColumn('production');
            table.dropColumn('website');
            table.dropColumn('response');
        })
    ]);
};
