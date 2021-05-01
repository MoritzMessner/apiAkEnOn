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
    editPost: function (id) {
    },
    updatePost: function (id) {
    },
    deletePost: function (id) {
    }
}