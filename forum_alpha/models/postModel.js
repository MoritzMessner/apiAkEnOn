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
        return await getDb().collection('comments').find({postId: _postId}).toArray();
    },
    addComment: function (postId, comment) {
        getDb().collection('comments').insertOne({
            "postId": postId,
            "comment": comment.trim()
        });
    },
    editPost: function (id) {
    },
    updatePost: function (id) {
    },
    deletePost: function (id) {
    }
}