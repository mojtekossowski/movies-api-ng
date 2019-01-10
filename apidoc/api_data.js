define({ "api": [
  {
    "type": "delete",
    "url": "/comments/:id",
    "title": "Comment Remove",
    "name": "DeleteCommentById",
    "group": "Comments",
    "description": "<p>Deletes Comment by given Comment Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: DeleteCommentByIdSuccess",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: CommentIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Comment not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/CommentsResource.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments",
    "title": "Get All Comments",
    "name": "GetAllComments",
    "group": "Comments",
    "description": "<p>Lists all Comments. You are able to filter Comments by user's name.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>Optional User name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Comments": [
          {
            "group": "Comments",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>Comments</p>"
          },
          {
            "group": "Comments",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>Comment's Id</p>"
          },
          {
            "group": "Comments",
            "type": "Number",
            "optional": false,
            "field": "-.movie_id",
            "description": "<p>Comment's Movie Id</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.user",
            "description": "<p>Comment's User</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>Comment's Title</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.contents",
            "description": "<p>Comment's Contents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: GetAllCommentsSuccess",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 1,\n            \"movie_id\": 1,\n            \"user\": \"Username1\",\n            \"title\": \"Title1\",\n            \"contents\": \"Coments\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/CommentsResource.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/comments/:id",
    "title": "Get Comment Information",
    "name": "GetCommentById",
    "group": "Comments",
    "description": "<p>Returns Comment by given Comment Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "movie_id",
            "description": "<p>Comment's Movie Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Comment's User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Comment's Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>Comment's Contents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: GetCommentByIdSuccess",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"movie_id\": 1,\n    \"user\": \"Username1\",\n    \"title\": \"Title1\",\n    \"contents\": \"Coments\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: CommentIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Comment not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentIdParametersInvalid",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"id\": {\n        \"location\": \"params\",\n        \"param\": \"id\",\n        \"value\": \"foo\",\n        \"msg\": \"Comment id must be an integer.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/CommentsResource.js",
    "groupTitle": "Comments"
  },
  {
    "type": "patch",
    "url": "/comments/:id",
    "title": "Comment Update",
    "name": "PatchComment",
    "group": "Comments",
    "description": "<p>Updates Comment by given Comment Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "movie_id",
            "description": "<p>Optional Comment's Movie Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>Optional Comment's User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional Comment's Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "contents",
            "description": "<p>Optional Comment's Contents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: PatchCommentSuccess",
          "content": "HTTP/1.1 204 NO_CONTENT",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: CommentIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Comment not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentsMovieNotFound",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Movie with given movie_id doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentsParametersInvalid",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"movie_id\": {\n            \"location\": \"body\",\n            \"param\": \"movie_id\",\n            \"msg\": \"Movie id must be an integer.\"\n        },\n        \"user\": {\n            \"location\": \"body\",\n            \"param\": \"user\",\n            \"msg\": \"User not specified\"\n        },\n        \"title\": {\n            \"location\": \"body\",\n            \"param\": \"title\",\n            \"msg\": \"Title not specified\"\n        },\n        \"contents\": {\n            \"location\": \"body\",\n            \"param\": \"contents\",\n            \"msg\": \"Contents not specified\"\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentInvalidSchema",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Unable to update - invalid schema\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsMovieNotFound",
            "description": "<p>Id of provided Movie does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsParametersInvalid",
            "description": "<p>Invalid parameters sent</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentInvalidSchema",
            "description": "<p>Patch request sent with not supported schema</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/CommentsResource.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "Comment Insertion",
    "name": "PostComment",
    "group": "Comments",
    "description": "<p>Inserts new Comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "movie_id",
            "description": "<p>Comment's Movie Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Comment's User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Comment's Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>Comment's Contents</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: PostCommentSuccess",
          "content": "HTTP/1.1 201 CREATED",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsMovieNotFound",
            "description": "<p>Id of provided Movie does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsParametersInvalid",
            "description": "<p>Invalid parameters sent</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentInvalidSchema",
            "description": "<p>Post request sent with not supported schema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: CommentsMovieNotFound",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Movie with given movie_id doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentsParametersInvalid",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"movie_id\": {\n            \"location\": \"body\",\n            \"param\": \"movie_id\",\n            \"msg\": \"Movie id must be an integer.\"\n        },\n        \"user\": {\n            \"location\": \"body\",\n            \"param\": \"user\",\n            \"msg\": \"User not specified\"\n        },\n        \"title\": {\n            \"location\": \"body\",\n            \"param\": \"title\",\n            \"msg\": \"Title not specified\"\n        },\n        \"contents\": {\n            \"location\": \"body\",\n            \"param\": \"contents\",\n            \"msg\": \"Contents not specified\"\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: CommentInvalidSchema",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Unable to store - invalid schema\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/CommentsResource.js",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/movies/:id",
    "title": "Movie Remove",
    "name": "DeleteMovieById",
    "group": "Movies",
    "description": "<p>Deletes Movie by given Movie Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: DeleteMovieByIdSuccess",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: MovieIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Movie not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies",
    "title": "Get All Movies",
    "name": "GetAllMovies",
    "group": "Movies",
    "description": "<p>Lists all Movies. You are able to filter Movies by movies's title.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional Movie Title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Movies": [
          {
            "group": "Movies",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>Movies</p>"
          },
          {
            "group": "Movies",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>Movie's Id</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>Movie's Title</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.year",
            "description": "<p>Movie's Prodution year</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.rated",
            "description": "<p>Movie's Rated</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.released",
            "description": "<p>Movie's Release date</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.runtime",
            "description": "<p>Movie's Runtime</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.genre",
            "description": "<p>Movie's Genre</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.director",
            "description": "<p>Movie's Director</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.writer",
            "description": "<p>Movie's Writer</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.actors",
            "description": "<p>Movie's Actors</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.plot",
            "description": "<p>Movie's Plot</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.language",
            "description": "<p>Movie's Language</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.country",
            "description": "<p>Movie's Country</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.awards",
            "description": "<p>Movie's Awards</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.metascore",
            "description": "<p>Movie's Metascore</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.imdbrating",
            "description": "<p>Movie's Imdbrating</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.imdbvotes",
            "description": "<p>Movie's Imdbvotes</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.imdbid",
            "description": "<p>Movie's Imdbid</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.type",
            "description": "<p>Movie's Type</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.dvd",
            "description": "<p>Movie's Dvd release date</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.boxoffice",
            "description": "<p>Movie's Box office</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.production",
            "description": "<p>Movie's Production</p>"
          },
          {
            "group": "Movies",
            "type": "String",
            "optional": false,
            "field": "-.website",
            "description": "<p>Movie's Website</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: GetAllMoviesSuccess",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 1,\n            \"title\": \"To Wong Foo Thanks for Everything, Julie Newmar\",\n            \"year\": \"1995\",\n            \"rated\": \"PG-13\",\n            \"released\": \"08 Sep 1995\",\n            \"runtime\": \"109 min\",\n            \"genre\": \"Comedy, Drama\",\n            \"director\": \"Beeban Kidron\",\n            \"writer\": \"Douglas Carter Beane\",\n            \"actors\": \"Wesley Snipes, Patrick Swayze, John Leguizamo, Stockard Channing\",\n            \"plot\": \"Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.\",\n            \"language\": \"English, French, Italian\",\n            \"country\": \"USA\",\n            \"awards\": \"Nominated for 2 Golden Globes. Another 1 nomination.\",\n            \"metascore\": \"N/A\",\n            \"imdbrating\": \"6.5\",\n            \"imdbvotes\": \"24,960\",\n            \"imdbid\": \"tt0114682\",\n            \"type\": \"movie\",\n            \"dvd\": \"07 Jan 2003\",\n            \"boxoffice\": \"N/A\",\n            \"production\": \"Universal Pictures\",\n            \"website\": \"N/A\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies/:id/comments",
    "title": "Get All comments for given Movie by Movie Id",
    "name": "GetMovieComments",
    "group": "Movies",
    "description": "<p>Returns All Comments of Movie by given Movie Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Comments": [
          {
            "group": "Comments",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>Comments</p>"
          },
          {
            "group": "Comments",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>Comment's Id</p>"
          },
          {
            "group": "Comments",
            "type": "Number",
            "optional": false,
            "field": "-.movie_id",
            "description": "<p>Comment's Movie Id</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.user",
            "description": "<p>Comment's User</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>Comment's Title</p>"
          },
          {
            "group": "Comments",
            "type": "String",
            "optional": false,
            "field": "-.contents",
            "description": "<p>Comment's Contents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: GetAllMovieCommentsSuccess",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 1,\n            \"movie_id\": 1,\n            \"user\": \"Username1\",\n            \"title\": \"Title1\",\n            \"contents\": \"Coments\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: MovieIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Movie not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieIdParametersInvalid",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"id\": {\n        \"location\": \"params\",\n        \"param\": \"id\",\n        \"value\": \"foo\",\n        \"msg\": \"Movie id must be an integer.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies/:id",
    "title": "Get Movie Information",
    "name": "GetMovieId",
    "group": "Movies",
    "description": "<p>Returns Movie by given Movie Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Movie's Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Movie's Prodution year</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rated",
            "description": "<p>Movie's Rated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "released",
            "description": "<p>Movie's Release date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime",
            "description": "<p>Movie's Runtime</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Movie's Genre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Movie's Director</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "writer",
            "description": "<p>Movie's Writer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "actors",
            "description": "<p>Movie's Actors</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plot",
            "description": "<p>Movie's Plot</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Movie's Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Movie's Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "awards",
            "description": "<p>Movie's Awards</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metascore",
            "description": "<p>Movie's Metascore</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imdbrating",
            "description": "<p>Movie's Imdbrating</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imdbvotes",
            "description": "<p>Movie's Imdbvotes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imdbid",
            "description": "<p>Movie's Imdbid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Movie's Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dvd",
            "description": "<p>Movie's Dvd release date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "boxoffice",
            "description": "<p>Movie's Box office</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "production",
            "description": "<p>Movie's Production</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Movie's Website</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: GetMovieIdSuccess",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"title\": \"To Wong Foo Thanks for Everything, Julie Newmar\",\n    \"year\": \"1995\",\n    \"rated\": \"PG-13\",\n    \"released\": \"08 Sep 1995\",\n    \"runtime\": \"109 min\",\n    \"genre\": \"Comedy, Drama\",\n    \"director\": \"Beeban Kidron\",\n    \"writer\": \"Douglas Carter Beane\",\n    \"actors\": \"Wesley Snipes, Patrick Swayze, John Leguizamo, Stockard Channing\",\n    \"plot\": \"Three drag queens travel cross-country until their car breaks down, leaving them stranded in a small town.\",\n    \"language\": \"English, French, Italian\",\n    \"country\": \"USA\",\n    \"awards\": \"Nominated for 2 Golden Globes. Another 1 nomination.\",\n    \"metascore\": \"N/A\",\n    \"imdbrating\": \"6.5\",\n    \"imdbvotes\": \"24,960\",\n    \"imdbid\": \"tt0114682\",\n    \"type\": \"movie\",\n    \"dvd\": \"07 Jan 2003\",\n    \"boxoffice\": \"N/A\",\n    \"production\": \"Universal Pictures\",\n    \"website\": \"N/A\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: MovieIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Movie not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieIdParametersInvalid",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"id\": {\n        \"location\": \"params\",\n        \"param\": \"id\",\n        \"value\": \"foo\",\n        \"msg\": \"Movie id must be an integer.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  },
  {
    "type": "patch",
    "url": "/movies/:id",
    "title": "Movie Update",
    "name": "PatchMovie",
    "group": "Movies",
    "description": "<p>Updates Movie specified by Movie Id with given parameters</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie's Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional Movie's Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "year",
            "description": "<p>Optional Movie's Prodution year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rated",
            "description": "<p>Optional Movie's Rated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "released",
            "description": "<p>Optional Movie's Release date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "runtime",
            "description": "<p>Optional Movie's Runtime</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "genre",
            "description": "<p>Optional Movie's Genre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director",
            "description": "<p>Optional Movie's Director</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "writer",
            "description": "<p>Optional Movie's Writer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "actors",
            "description": "<p>Optional Movie's Actors</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plot",
            "description": "<p>Optional Movie's Plot</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Optional Movie's Language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Optional Movie's Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "awards",
            "description": "<p>Optional Movie's Awards</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "metascore",
            "description": "<p>Optional Movie's Metascore</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbrating",
            "description": "<p>Optional Movie's Imdbrating</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbvotes",
            "description": "<p>Optional Movie's Imdbvotes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbid",
            "description": "<p>Optional Movie's Imdbid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Optional Movie's Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dvd",
            "description": "<p>Optional Movie's Dvd release date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "boxoffice",
            "description": "<p>Optional Movie's Box office</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "production",
            "description": "<p>Optional Movie's Production</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Optional Movie's Website</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: PostMovieSuccess",
          "content": "HTTP/1.1 204 NO_CONTENT",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieIdNotFound",
            "description": "<p>Patch request invalid Movie Id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieInvalidSchema",
            "description": "<p>Patch request sent with not supported schema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: MovieIdNotFound",
          "content": "HTTP/1.1 404 NOT_FOUND\n{\n    \"message\": \"Movie not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieInvalidSchema",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Unable to update - invalid schema\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  },
  {
    "type": "post",
    "url": "/movies",
    "title": "Movie Insertion",
    "name": "PostMovie",
    "group": "Movies",
    "description": "<p>Insert new Movie. If any of following fields are missing, movie would be fetched from OMDB Api</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Movie's Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "year",
            "description": "<p>Optional Movie's Prodution year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rated",
            "description": "<p>Optional Movie's Rated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "released",
            "description": "<p>Optional Movie's Release date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "runtime",
            "description": "<p>Optional Movie's Runtime</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "genre",
            "description": "<p>Optional Movie's Genre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director",
            "description": "<p>Optional Movie's Director</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "writer",
            "description": "<p>Optional Movie's Writer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "actors",
            "description": "<p>Optional Movie's Actors</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plot",
            "description": "<p>Optional Movie's Plot</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Optional Movie's Language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Optional Movie's Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "awards",
            "description": "<p>Optional Movie's Awards</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "metascore",
            "description": "<p>Optional Movie's Metascore</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbrating",
            "description": "<p>Optional Movie's Imdbrating</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbvotes",
            "description": "<p>Optional Movie's Imdbvotes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imdbid",
            "description": "<p>Optional Movie's Imdbid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Optional Movie's Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dvd",
            "description": "<p>Optional Movie's Dvd release date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "boxoffice",
            "description": "<p>Optional Movie's Box office</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "production",
            "description": "<p>Optional Movie's Production</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Optional Movie's Website</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: PostMovieSuccess",
          "content": "HTTP/1.1 201 CREATED",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieMissingTitle",
            "description": "<p>Post request sent without title</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieConflict",
            "description": "<p>Post request sent but movie exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieExternalApiError",
            "description": "<p>Post request sent but OMDB Api throws error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MovieInvalidSchema",
            "description": "<p>Post request sent with not supported schema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: MovieMissingTitle",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": {\n        \"id\": {\n        \"location\": \"params\",\n        \"param\": \"id\",\n        \"value\": \"foo\",\n        \"msg\": \"No title specified.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieConflict",
          "content": "HTTP/1.1 409 CONFLICT\n{\n    \"message\": \"Movie already exists in database\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieExternalApiError",
          "content": "HTTP/1.1 500 INTERNAL_SERVER_ERROR\n{\n    \"message\": \"External Api error: ExternalApiError\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: MovieInvalidSchema",
          "content": "HTTP/1.1 400 BAD_REQUEST\n{\n    \"message\": \"Unable to store - invalid schema\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/MoviesResource.js",
    "groupTitle": "Movies"
  }
] });
