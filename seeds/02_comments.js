exports.seed = function(knex, Promise) {
  return knex('comments').insert([{
    "id": 1,
    "movie_id": 1,
    "user": "Macciavelli",
    "title": "Foo",
    "contents": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, itaque!"
  }, {
    "id": 2,
    "movie_id": 2,
    "user": "Macciavelli",
    "title": "Bar",
    "contents": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi maxime, quis numquam dolores repellendus recusandae reiciendis earum? Eos, ratione."
  }, {
    "id": 3,
    "movie_id": 3,
    "user": "Boris",
    "title": "Baz",
    "contents": "Lorem ipsum dolor sit amet consectetur."
  }, {
    "id": 4,
    "movie_id": 1,
    "user": "Madalene",
    "title": "Lorem",
    "contents": "Natus consectetur odit perspiciatis amet nobis placeat voluptatem fugit reprehenderit modi cumque sed beatae eveniet perferendis aliquid dolores quasi dignissimos impedit, repudiandae atque ullam cupiditate reiciendis deserunt."
  }, {
    "id": 5,
    "movie_id": 2,
    "user": "Macciavelli",
    "title": "Ipsum",
    "contents": "Tempora, odio ut. Similique porro quaerat ipsam enim blanditiis accusantium sequi commodi ea laboriosam totam unde, laudantium nemo eveniet."
  }, {
    "id": 6,
    "movie_id": 3,
    "user": "Macciavelli",
    "title": "Dolor",
    "contents": "Officiis animi iusto beatae debitis ratione mollitia quidem!"
  }, {
    "id": 7,
    "movie_id": 1,
    "user": "Boris",
    "title": "Sit",
    "contents": "At a laborum quae deleniti, debitis, ut distinctio quam unde soluta, aperiam quaerat itaque exercitationem!"
  }, {
    "id": 8,
    "movie_id": 2,
    "user": "Boris",
    "title": "Boom",
    "contents": "Laboriosam ipsa corporis recusandae adipisci dolor cupiditate labore, doloremque odio repellat repudiandae. Odio similique exercitationem corrupti cupiditate, voluptatum neque et alias quam cumque."
  }]);
};
