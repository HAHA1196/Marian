var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("backend/index.ejs", {});
});
/* GET main page. 0913 11:21 jen */
router.get("/main", function (req, res, next) {
    res.render("backend/bkendMain.ejs", {});
});
router.get("/product", function (req, res, next) {
    res.render("backend/bkendProduct.ejs", {});
});



module.exports = router;
