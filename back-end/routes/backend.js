var express = require("express");
var router = express.Router();

/* GET 測試用 page. */
router.get("/", function (req, res, next) {
    res.render("backend/index.ejs", {});
});

/* main page */
// http://localhost:8000/backend/main
router.get("/main", function (req, res, next) {
    res.render("backend/main.ejs", {});
});

/* product page */
// http://localhost:8000/backend/product
router.get("/product", function (req, res, next) {
    res.render("backend/product.ejs", {});
});

/* product page */
// http://localhost:8000/backend/member
router.get("/member", function (req, res, next) {
    res.render("backend/bkendMember.ejs", {});
});

/* product page */
// http://localhost:8000/backend/order
router.get("/order", function (req, res, next) {
    res.render("backend/order.ejs", {});
});

module.exports = router;
