const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  businessName: {
    type: String,
    trim: true,
    required: "Business Name is Required"
  },
  businessCategory: {
    type: String,
    required: "Please Choose a Category for Your Business!"
  },
  businessAddress: { type: String },
  businessZip: {
    type: String,
    trim: true,
    required: "A Zip Code is Required so Customers Can Find You!"
  },
  phoneNumber: String,
  email: {
    type: String,
    required: "Password is Required",    
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  tagline: String,
  backgroundImage: { data: Buffer, contentType: String },
  profileImage: { data: Buffer, contentType: String },
  aboutUs: String,
  blogPosts: [
    {
      image: Buffer,
      title: String,
      body: String
    }
  ],
  reviews: [],
  ratings: [],
  facebookLink: String,
  twitterLink: String,
  linkedInLink: String,
  instagramLink: String,
  date: { type: Date, default: Date.now }
});

const Businesses = mongoose.model("Businesses", businessSchema);

module.exports = Businesses;
