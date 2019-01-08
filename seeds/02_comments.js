exports.seed = function(knex, Promise) {
  return knex('comments').insert([{
    "movie_id": 1,
    "user": "Macciavelli",
    "title": "Foo",
    "contents": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, itaque!"
  }, {
    "movie_id": 2,
    "user": "Macciavelli",
    "title": "Bar",
    "contents": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi maxime, quis numquam dolores repellendus recusandae reiciendis earum? Eos, ratione."
  }, {
    "movie_id": 3,
    "user": "Boris",
    "title": "Baz",
    "contents": "Lorem ipsum dolor sit amet consectetur."
  }, {
    "movie_id": 1,
    "user": "Madalene",
    "title": "Lorem",
    "contents": "Natus consectetur odit perspiciatis amet nobis placeat voluptatem fugit reprehenderit modi cumque sed beatae eveniet perferendis aliquid dolores quasi dignissimos impedit, repudiandae atque ullam cupiditate reiciendis deserunt."
  }, {
    "movie_id": 2,
    "user": "Macciavelli",
    "title": "Ipsum",
    "contents": "Tempora, odio ut. Similique porro quaerat ipsam enim blanditiis accusantium sequi commodi ea laboriosam totam unde, laudantium nemo eveniet."
  }, {
    "movie_id": 3,
    "user": "Macciavelli",
    "title": "Dolor",
    "contents": "Officiis animi iusto beatae debitis ratione mollitia quidem!"
  }, {
    "movie_id": 1,
    "user": "Boris",
    "title": "Sit",
    "contents": "At a laborum quae deleniti, debitis, ut distinctio quam unde soluta, aperiam quaerat itaque exercitationem!"
  }, {
    "movie_id": 2,
    "user": "Boris",
    "title": "Boom",
    "contents": "Laboriosam ipsa corporis recusandae adipisci dolor cupiditate labore, doloremque odio repellat repudiandae. Odio similique exercitationem corrupti cupiditate, voluptatum neque et alias quam cumque."
  }]);
};
