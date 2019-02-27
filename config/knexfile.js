const path = require('path')
const buildAbsoulte = (relativePath) => path.resolve(__dirname, relativePath)

require('dotenv').config(buildAbsoulte('../.env'));

module.exports = {

    production: {
        client: 'postgresql',

        connection: process.env.DATABASE_URL,

        migrations: {
            tableName: 'knex_migrations',
            directory: buildAbsoulte('../migrations')
        },

        ssl: true
    },

    dev: {
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
            tableName: 'knex_migrations',
            directory: buildAbsoulte('../migrations')
        },

        seeds: {
            directory: buildAbsoulte('../seeds')
        }
    },

    test: {
        client: 'postgresql',

        connection: {
            user: 'test',
            password: 'test',
            database: 'test',
        },

        pool: {
            min: 2,
            max: 10
        },

        migrations: {
            tableName: 'knex_migrations',
            directory: buildAbsoulte('../migrations')
        },

        seeds: {
            directory: buildAbsoulte('../seeds')
        }
    }

};