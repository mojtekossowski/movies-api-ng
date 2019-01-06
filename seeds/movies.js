exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([{
        "id": 1,
        "title": "To Wong Foo Thanks for Everything, Julie Newmar",
        "year": "1995",
        "rated": "PG-13",
        "released": "08 Sep 1995",
        "runtime": "109 min",
        "genre": "Comedy, Drama",
        "director": "Beeban Kidron",
        "writer": "Douglas Carter Beane",
        "actors": "Wesley Snipes, Patrick Swayze, John Leguizamo, Stockard Channing",
        "plot": "Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.",
        "language": "English, French, Italian",
        "country": "USA",
        "awards": "Nominated for 2 Golden Globes. Another 1 nomination.",
        "metascore": "N/A",
        "imdbrating": "6.5",
        "imdbvotes": "24,960",
        "imdbid": "tt0114682",
        "type": "movie",
        "dvd": "07 Jan 2003",
        "boxoffice": "N/A",
        "production": "Universal Pictures",
        "website": "N/A"
      }, {
        "id": 2,
        "title": "Wszystko",
        "year": "2008",
        "rated": "N/A",
        "released": "N/A",
        "runtime": "15 min",
        "genre": "Short, Comedy, Romance",
        "director": "Artur Wyrzykowski",
        "writer": "N/A",
        "actors": "Mateusz Banasiuk, Marta Zmuda Trzebiatowska, Antoni Pawlicki, Joanna Górniak",
        "plot": "A 17-year-old boy and his questions about what the real love is about.",
        "language": "Polish",
        "country": "Poland",
        "awards": "N/A",
        "metascore": "N/A",
        "imdbrating": "4.6",
        "imdbvotes": "18",
        "imdbid": "tt2066165",
        "type": "movie",
        "dvd": "N/A",
        "boxoffice": "N/A",
        "production": "N/A",
        "website": "N/A"
      }]);
    });
};
