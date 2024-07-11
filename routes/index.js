var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home | Blogs" });
});

router.get("/register", (req, res, next) => {
  res.render("register", { title: "Register | Blogs" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Login | Blogs" });
});

router.get("/profile", (req, res, next) => {
  res.render("profile", { title: "Profile | Blogs" });
});
router.get("/createblog", (req, res, next) => {
  res.render("createblog", { title: "CreateBlog | Blogs" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About | Blogs" });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Express" });
});

module.exports = router;
