exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          "id": 1,
          "title": "To Wong Foo Thanks for Everything, Julie Newmar",
          "normalized_title": "to-wong-foo-thanks-for-everything,-julie-newmar",
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
          "website": "N/A",
          "response": "True"
      }
      ]);
    });
};
