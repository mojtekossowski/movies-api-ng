const fetch = require('node-fetch');

const apiKey = process.env.EXT_OMDB_APIKEY;

exports.fetchMovie = async function (title) {
    return fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
        .then(res => res.json());
}

exports.searchMovie = async function (title) {
    return fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        .then(res => res.json())
        .then(({ Search }) => Search.map(({ Title: title, imdbID: imdbid }) => ({ title, imdbid})))
}