const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});
//reverse
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
//reverse
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
//reverse
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };