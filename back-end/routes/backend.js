var express = require("express");
var router = express.Router();

/* GET 測試用 page. */
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
router.get("/member", function (req, res, next) {
    res.render("backend/bkendMember.ejs", {});
});



module.exports = router;
