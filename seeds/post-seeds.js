const { Post } = require('../models');

const postdata = [
  {
    title: 'Free hotogs at the park today',
    post_content: 'b;ah blah blah go to the arch',
    user_id: 10,
    tag: 'Free'
  },
  {
    title: 'City museum open and stuff',
    post_content: 'be super cool at the city museum',
    user_id: 8,
    tag: 'Mseum'
  },
  {
    title: 'Cardinals mascot visiting our company.',
    post_content: 'Fredbird is always doing things',
    user_id: 1,
    tag: 'Sprt'
  },
  {
    title: 'LION KING AT THE MUNY',
    post_content: 'tickets are expensive :(',
    user_id: 4,
    tag: 'Msc'
  },
  {
    title: 'Salt and smoke',
    post_content: 'there is food here',
    user_id: 7,
    tag: 'Food'
  },
  {
    title: 'St louis Blues',
    post_content: 'Standley Cup winning professoinal hockey team',
    user_id: 4,
    tag: 'Sprt'
  },
  {
    title: 'broadway oyster bar',
    post_content: 'there might be oysters here',
    user_id: 1,
    tag: 'Food'
  },
  {
    title: 'St Louis Cardinals',
    post_content: 'Multi world series winning professional baseball team',
    user_id: 1,
    tag: 'Sprt'
  },
  {
    title: 'Joe\'s cafe',
    post_content: 'Jazz and blues music to swoon to',
    user_id: 9,
    tag: 'Msc'
  },
  {
    title: 'St louis fine arts museum',
    post_content: 'this place has halls and halls adorn with art from some of the greats',
    user_id: 5,
    tag: 'Mseum'
  },
  {
    title: 'The Grove, St Louis',
    post_content: 'this is an epic music venue that is a must see',
    user_id: 3,
    tag: 'Msc'
  },
  {
    title: '360 st louis',
    post_content: 'lounge, tapas and cocktails',
    user_id: 10,
    tag: 'Food'
  },
  {
    title: 'St Louis Zoo',
    post_content: 'this is a world renown zoo that is considered a st louis treasure',
    user_id: 8,
    tag: 'Free'
  },
  {
    title: 'thaxton Speakeasy',
    post_content: 'a venue to see and be seen',
    user_id: 3,
    tag: 'Msc'
  },
  {
    title: 'St Louis Cit FC',
    post_content: 'Brand new professoinal soccer team',
    user_id: 3,
    tag: 'Sprt'
  },
  {
    title:
      'Stacked STL',
    post_content: 'burgers, beer and cocktails yo',
    user_id: 7,
    tag: 'Food'
  },
  {
    title: 'Shaw Park',
    post_content: 'better known as the St Louis Botanical garden',
    user_id: 6,
    tag: 'Free'
  },
  {
    title: 'National Blues Museum',
    post_content: 'this is a must see for any blues music lover',
    user_id: 4,
    tag: 'Mseum'
  },
  {
    title: 'Lafayette Park',
    post_content: 'A lovely park to take family and walk your pets',
    user_id: 6,
    tag: 'Free'
  },
  {
    title: 'The national museum of transportation',
    post_content: 'this place is super cool, especially the locamotives',
    user_id: 7,
    tag: 'Free'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;