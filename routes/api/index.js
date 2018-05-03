const router = require("express").Router();
const businessRoutes = require("./businesses");
const blogRoutes = require("./blogPost");
const reviewRoutes = require("./review");

// Book routes
router.use("/businesses", businessRoutes);
router.use("/blogPosts", blogRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
