import axios from "axios";

export default {
  // Gets all businesses
  getBusinesses: function() {
    console.log("Working");
    return axios.get("/api/businesses");
  },
  postBusinessesSearch: function(searchparams) {
    console.log("Working123");
    return axios.post("/api/businesses/search", searchparams);
  },
  getBusinessesSearch: function(searchParams) {
    console.log("Working get Bus Search")
    return axios.get("/api/businesses/search", searchParams);
  },
  // Gets business through login
  postBusinessLogin: function(loginCredentials) {
    console.log(loginCredentials + "post bus Search");
    return axios.post("/api/businesses/login", loginCredentials);
  },
  // Gets the business with the given id
  getBusiness: function(id) {
    return axios.get("/api/businesses/" + id);
  },
  // Deletes the business with the given id
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a business to the database
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses", businessData);
  },
  updateBusiness: function(id, updatedBusiness) {
    return axios.put("/api/businesses/"+id, updatedBusiness);
  },
  // Gets all Blog Posts
  getBlogPosts: function() {
    return axios.get("/api/blogPosts");
  },
  // Gets the blog Post with the given id
  getBlogPost: function(id) {
    return axios.get("/api/blogPosts/" + id);
  },
  // Deletes the blog Post with the given id
  deleteBlogPost: function(id) {
    return axios.delete("/api/blogPosts/" + id);
  },
  // Saves a blog Post to the database
  saveBlogPost: function(blogData) {
    console.log(blogData)
    return axios.post("/api/blogPosts", blogData);
  },
  updateBlogPost: function(id, updatedBlogData) {
    return axios.put("/api/blogPosts/"+id, updatedBlogData);
  },
  //profileImage functions
  // Gets all Blog Posts
  getProfileImages: function() {
    return axios.get("/api/profileImage");
  },
  // Gets the blog Post with the given id
  getProfileImage: function(id) {
    return axios.get("/api/profileImage/" + id);
  },
  // Deletes the blog Post with the given id
  deleteProfileImage: function(id) {
    return axios.delete("/api/profileImage/" + id);
  },
  // Saves a blog Post to the database
  saveProfileImage: function(profileImage) {
    return axios.post("/api/profileImage", profileImage);
  },
  updateProfileImage: function(id, updatedProfileImage) {
    return axios.put("/api/profileImage/"+id, updatedProfileImage);
  }
};
