# Description
Following project provides RESTful API for Movies stored in OMDB database.
User is able to insert movie through this API with apropiate settings.
Then following movie title is fetched from external OMDB API.

Each movie can be commented internally.

This API provides GET, POST, PUT, DELETE operations on `movies` and `comments` resources.

Api documentation is generated with apiDoc.
ApiDoc is available at root endpoint.

Current Api is available at Heroku: [http://movies-api-ng.herokuapp.com/](http://movies-api-ng.herokuapp.com/)

# Requirements
* Installed PostgreSQL (9.5)
* Node.js (v10.15.0)

# Prequisities
* Created database in Postgresql
* Generated ApiKey of OMDB: [http://www.omdbapi.com/](http://www.omdbapi.com/)

# Configuration
* Copy `.env.template`:
    ```sh
        $ cp .env.template .env
    ```
* Fill it with your properties
    ```conf
    # Environment name:
    NODE_ENV=dev

    # Application port:
    PORT=8080

    # Database settings:
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_user_password
    DB_HOST=your_database_address
    DB_NAME=yor_database_name

    # External services keys:
    EXT_OMDB_APIKEY=your_OMDB_api_key
    ```

# Local run
When you're done with filing properties you can install dependencies and create database:
```sh
    $ export $(egrep -v '^#' .env | xargs) # reads data from .env file
    $ npm install # installs dependencies
    $ npm run-script migrate -- --env dev
```

Then, you're able to run your local database:
```sh
    $ export $(egrep -v '^#' .env | xargs) # if env variables not exported
    $ npm start # runs server
```

# Tests
To execute tests you have to create database with following settings:
* Create `test` database in Postgresql
* Create `test` user for `test` database with password set to `test`

Then, you'd be able to execute tests by:
```sh
    $ npm test
```

# Api Description
Api description can be generated by apiDoc by running:
```sh
    $ npm run-script generate-docs
```
