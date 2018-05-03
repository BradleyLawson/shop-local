const router = require("express").Router();
const businessController = require("../../controllers/businessController");

// Matches with "/api/businesses"
router.route("/")
  .get(businessController.findOne)
  .get(businessController.findAll)
  .post(businessController.create);
  
// login routes
router
  .route("/login")
  .post(businessController.login); 

router
  .route("/search")
  .post(businessController.searchForBusinesses)
  .get(businessController.searchForBusinesses); 
    

// Matches with "/api/business/:id"
router
  .route("/:id")
  .post(businessController.findOne)
  .get(businessController.findById)
  .delete(businessController.remove)
  .put(businessController.update);



module.exports = router;
