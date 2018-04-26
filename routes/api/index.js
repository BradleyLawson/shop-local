const router = require("express").Router();
const businessRoutes = require("./businesses");
const blogRoutes = require("./blogPost");

// Book routes
router.use("/businesses", businessRoutes);
router.use("/blogPosts", blogRoutes);

module.exports = router;
