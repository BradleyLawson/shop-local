const router = require("express").Router();
const blogPostController = require("../../controllers/blogPostController");

// Matches with "/api/blogPost"
router.route("/")
  .get(blogPostController.findAll)
  .post(blogPostController.create);
  

// Matches with "/api/blogPost/:id"
router
  .route("/:id")
  .get(blogPostController.findById)
  .delete(blogPostController.remove)
  .put(blogPostController.update);

module.exports = router;
