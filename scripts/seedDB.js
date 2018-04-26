const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Business collection and inserts the Business below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/searchlocal",
  {
  
  }
);

const businessSeed = [
  {
    firstName: "Joe",
    lastName: "Schmoe",
    businessName: "Joe Schmoe's Restauant",
    businessCategory: "Restaurant",
    businessAddress: "1234 Fake Address Way",
    businessZip: "32905",
    phoneNumber: "321-555-2121",
    email: "fake@fake.com",
    password: "1234FAKEFAKEFAKE",
    tagline: "We Make Food",
    backgroundImage: "https://en.wikipedia.org/wiki/Desktop_computer",
    profileImage: "https://www.pexels.com/search/computer/",
    blogPosts: null,
    reviews: null,
    facebookLink: null,
    twitterLink: null,
    linkedInLink: null,
    instagramLink: null,
    date: new Date(Date.now())
  },
  {
    firstName: "Old",
    lastName: "McDonald",
    businessName: "Old McDonald's Farm",
    businessCategory: "Farm",
    businessAddress: "1234 Fake Address Way",
    businessZip: "32905",
    phoneNumber: "321-555-1515",
    email: "anotherfakee@fake.com",
    password: "1234anotherfackepassword",
    tagline: "We Farm",
    backgroundImage: "https://en.wikipedia.org/wiki/Desktop_computer",
    profileImage: "https://www.pexels.com/search/computer/",
    blogPosts: null,
    reviews: null,
    facebookLink: null,
    twitterLink: null,
    linkedInLink: null,
    instagramLink: null,
    date: new Date(Date.now())
  },
  {
    firstName: "Joe",
    lastName: "Cool",
    businessName: "Cool Runnings A/C",
    businessCategory: "Service",
    businessAddress: "1234 Fake Address Way",
    businessZip: "32905",
    phoneNumber: "321-555-1212",
    email: "yetanotherfake@fake.com",
    password: "1234yetanotherFAKEFAKEFAKE",
    tagline: "Don't Sweat It",
    backgroundImage: "https://en.wikipedia.org/wiki/Desktop_computer",
    profileImage: "https://www.pexels.com/search/computer/",
    blogPosts: null,
    reviews: null,
    facebookLink: null,
    twitterLink: null,
    linkedInLink: null,
    instagramLink: null,
    date: new Date(Date.now())
  },
];
db.Businesses
  .remove({})
  .then(() => db.Businesses.collection.insertMany(businessSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
