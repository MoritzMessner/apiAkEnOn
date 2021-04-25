const getDb = require("../db").getDb;

module.exports = {
    createPost: function () {
        data = "Form data was inserted";
        return data;
    },
    fetchPost: async function (id) {
        return await getDb().collection('posts').findOne({id: parseInt(id)});
    },
    editPost: function (id) {
        data = "Data is edited by id: " + id;
        return data;
    },
    updatePost: function (id) {
        data = "Data was updated by id: " + id;
        return data;
    },
    deletePost: function (id) {
        data = "Data was deleted by id: " + id;
        return data;
    }
}