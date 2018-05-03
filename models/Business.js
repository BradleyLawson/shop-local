const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt   = require('bcrypt');
const SALT_WORK_FACTOR = 10;


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
  businessCity: { type: String },
  businessState: { type: String },
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
  backgroundImage: String,
  profileImage: {
      type: String
    },
  aboutUs: String,
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "BlogPost"
    }
],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  ratings: [],
  facebookLink: String,
  twitterLink: String,
  linkedInLink: String,
  instagramLink: String,
  date: { type: Date, default: Date.now }
});

// methods ======================
businessSchema.pre('save', function(next) {
  let business = this;

  // only hash the password if it has been modified (or is new)
  if (!business.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(business.password, salt, function (err, hash) {
          if (err) return next(err);

          // set the hashed password back on our business document
          business.password = hash;
          next();
        });
      });
    });

businessSchema.methods.comparePassword = function(candidatePassword) {
 return bcrypt.compareSync(candidatePassword, this.password);
}  

module.exports = mongoose.model("Businesses", businessSchema);
