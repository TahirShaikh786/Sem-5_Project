const {Schema, model} = require("mongoose");

const blogSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    addDesc:{
        type: String,
        required: true
    }
})

const Blog = new model("Blog", blogSchema);
module.exports = Blog;