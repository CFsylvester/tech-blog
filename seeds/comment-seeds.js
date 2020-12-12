const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Super insightfull.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Cool post.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Really wishing I mined it now',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Does it have JQuery news too?',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Is this just like JS weekly?',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'First time hearing about this, thanks!',
    user_id: 2,
    post_id: 6
  },
  {
    comment_text: 'Who calls devs hackers anymore lol?',
    user_id: 3,
    post_id: 7
  },
  {
    comment_text: 'Hacker News? What should I code in a dark room with my hoodie up too?',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'Squarespace sucks.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'I prefer the MEAN Stack',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Thanks for sharing!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Signed Up!',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:'Cnet is the best.',
    user_id: 1,
    post_id: 6
  },
];


const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
