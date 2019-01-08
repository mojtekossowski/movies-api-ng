const path = require('path')
require('dotenv').config(path.resolve(__dirname, '../.env'));

module.exports = {

    prod: {
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
            directory: '../migrations'
        },
    
        seeds: {
            directory: '../seeds'
        }
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
            directory: '../migrations'
        },
    
        seeds: {
            directory: '../seeds'
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
            directory: '../migrations'
        },
    
        seeds: {
            directory: '../seeds'
        }    
    }

};