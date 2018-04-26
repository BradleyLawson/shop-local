const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// Matches with "/api/businesses"
router.route("/")
  .get(businessController.findAll)
  .post(businessController.create);
  

// Matches with "/api/business/:id"
router
  .route("/:id")
  .get(businessController.findById)
  .delete(businessController.remove)
  .put(businessController.update);

module.exports = router;
