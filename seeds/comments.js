
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([{
        "id": 1,
        "user": "Mariola",
        "title": "Foo",
        "contents": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, itaque!"
      }, {
        "id": 2,
        "user": "Stephane",
        "title": "Bar",
        "contents": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi maxime, quis numquam dolores repellendus recusandae reiciendis earum? Eos, ratione."
      }, {
        "id": 3,
        "user": "Boris",
        "title": "Baz",
        "contents": "Lorem ipsum dolor sit amet consectetur."
      }, {
        "id": 4,
        "user": "Madalene",
        "title": "Lorem",
        "contents": "Natus consectetur odit perspiciatis amet nobis placeat voluptatem fugit reprehenderit modi cumque sed beatae eveniet perferendis aliquid dolores quasi dignissimos impedit, repudiandae atque ullam cupiditate reiciendis deserunt."
      }, {
        "id": 5,
        "user": "Giovanni",
        "title": "Ipsum",
        "contents": "Tempora, odio ut. Similique porro quaerat ipsam enim blanditiis accusantium sequi commodi ea laboriosam totam unde, laudantium nemo eveniet."
      }, {
        "id": 6,
        "user": "Macciavelli",
        "title": "Dolor",
        "contents": "Officiis animi iusto beatae debitis ratione mollitia quidem!"
      }, {
        "id": 7,
        "user": "Makłowicz",
        "title": "Sit",
        "contents": "At a laborum quae deleniti, debitis, ut distinctio quam unde soluta, aperiam quaerat itaque exercitationem!"
      }, {
        "id": 8,
        "user": "Amet",
        "title": "Boom",
        "contents": "Laboriosam ipsa corporis recusandae adipisci dolor cupiditate labore, doloremque odio repellat repudiandae. Odio similique exercitationem corrupti cupiditate, voluptatum neque et alias quam cumque."
      }]);
    });
};
