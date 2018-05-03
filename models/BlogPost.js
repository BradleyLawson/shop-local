const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});


var BlogPost = mongoose.model("BlogPost", BlogPostSchema);    
module.exports = BlogPost;