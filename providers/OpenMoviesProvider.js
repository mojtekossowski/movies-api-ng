const fetch = require('node-fetch');
const _ = require('lodash');

const apiKey = process.env.EXT_OMDB_APIKEY;

const fieldsToOmmit = [
    'Response', 'Poster', 'Ratings'
]

/**
 * Normalizes fetched movie. Removes Response, poster and Ratings fields.
 * All keys are lower-cased.
 * 
 * @param {Object} fetchedMovie 
 */
function normalize (fetchedMovie) {
    const keys = Object.keys(fetchedMovie);
    return _.difference(keys, fieldsToOmmit)
        .reduce((ret, key) => ({ 
            ...ret, 
            [ key.toLowerCase() ]: fetchedMovie[key],
        }), { });
}

exports.normalize = normalize;

exports.fetchMovie = async function (title) {
    return fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
        .then(res => res.json())
        .then(movie => {
            if (movie.Error) {
                throw new Error(`External Api error: ${ movie.Error }`)
            }

            return normalize(movie);
        })
}

exports.searchMovie = async function (title) {
    return fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        .then(res => res.json())
        .then(({ Search }) => Search.map(({ Title: title, imdbID: imdbid }) => ({ title, imdbid})))
}