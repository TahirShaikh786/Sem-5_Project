const express = require("express");
const router = express.Router();
const Blog = require("../controllers/blog-controller");

router.route("/blogs").post(Blog.blogForm);
router.route("/blogsData").get(Blog.blogFormData);

module.exports = router;