const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewTitle: String,
    reviewBody: String,
    rating: Number,
    created: {
        type: Date,
        default: Date.now
    }
});


var Review = mongoose.model("Review", ReviewSchema);    
module.exports = Review;