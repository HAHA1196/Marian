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

/* member page */
// http://localhost:8000/backend/member
router.get("/member", function (req, res, next) {
    res.render("backend/member.ejs", {});
});

/* order page */
// http://localhost:8000/backend/order
router.get("/order", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, o.orderDate, o.customerId, SUM(od.productPrice * od.quantity) AS totalPrice FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) GROUP BY o.orderId; SELECT od.orderId, CONCAT(p.productName, ', ', p.productSize, ', ', od.quantity, ', ', (p.productPrice * od.quantity)) AS detail FROM orderdetails od JOIN products p ON (od.productId = p.productId) ORDER BY od.orderId;",
        [],
        function (err, result) {
            console.log(result);
            res.render('backend/order.ejs', {list: result[0], odList: result[1]});
        }
    );
});

/* news page */
// http://localhost:8000/backend/news
router.get("/news", function (req, res, next) {
    res.render("backend/news.ejs", {});
});

module.exports = router;
