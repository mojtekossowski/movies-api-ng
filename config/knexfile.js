module.exports = {
    client: 'postgresql',

    connection: {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    pool: {
        min: 2,
        max: 10
    },
    
    migrations: {
        tableName: 'knex_migrations'
    }
};