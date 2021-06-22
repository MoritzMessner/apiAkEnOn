const getDb = require("../db").getDb;

module.exports = {
    createPost: function () {
    },
    fetchPost: async function (id) {
        return await getDb().collection('posts').findOne({id: parseInt(id)});
    },
    fetchPosts: async function () {
        return await getDb().collection('posts').find().toArray();
    },
    fetchComments: async function (_postId) {
        let entitys =  await getDb().collection('comments').find({postId: _postId}).toArray();
        entitys.map((obj) => {
            let date = new Date(parseInt(obj.timestamp));
            obj.timestamp =  date.getHours() +
                ":" + date.getMinutes() + " " + date.getDate() + '.' + (date.getMonth() ) + '.' + date.getFullYear()
        })
        return entitys;
    },
    addComment: function (postId, comment, date) {
        getDb().collection('comments').insertOne({
            "postId": postId,
            "comment": comment.trim(),
            "timestamp": date
        });
    },
    editPost: function (id) {
    },
    deletePost: function (id) {
    }
}