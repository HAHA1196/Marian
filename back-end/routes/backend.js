var express = require("express");
var router = express.Router();

/* GET 測試用 page. */
router.get("/", function (req, res, next) {
    res.render("backend/product.ejs", {});
});

/* product page */
// http://localhost:8000/backend/product
router.get("/product", function (req, res, next) {
        req.mysql.query("SELECT `productId`,`productImg`,`productClass`, `productStyleNumber`,`productName`,`productPrice`,`productSize`,`productInStock`,`productDescription`FROM products", 
        [], 
        function (err, result) {
            res.render("backend/product.ejs", {product: result});
        }
    );
});

/* member page */
// http://localhost:8000/backend/member
router.get("/member", function (req, res, next) {
    req.mysql.query(
        "SELECT customerId, customerName, customerGender, customerPhone, customerEmail, customerAddress FROM customers; SELECT o.customerId, o.orderId, DATE_FORMAT(o.orderDate,'%Y/%m/%d %H:%i') AS orderDate, SUM(od.productPrice * od.quantity)AS total FROM orderdetails od JOIN orders o USING(orderId) GROUP BY orderId",
        [],
        function (err, result) {
            console.log(result);
            res.render("backend/member.ejs", {
                member: result[0],
                memberOrderHistory: result[1],
            });
        }
    );
    // req.mysql.query(
    //     "SELECT customerId, customerName, customerGender, customerPhone, customerEmail, customerAddress FROM customers; SELECT o.customerId, o.orderId, CONCAT(p.productName,', ', od.quantity,'件, ', (od.quantity * od.productPrice), '元, ',o.orderDate)AS details FROM orderdetails od JOIN orders o USING(orderId) JOIN products p USING(productId) ORDER BY o.customerId",
    //     [],
    //     function (err, result) {
    //         console.log(result);
    //         res.render("backend/member.ejs", {
    //             member: result[0],
    //             memberOrderHistory: result[1],
    //         });
    //     }
    // );
});

/* order page */
// http://localhost:8000/backend/order
router.get("/order", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, DATE_FORMAT(o.orderDate,'%Y/%m/%d %k:%i') AS orderDate, CONCAT(o.customerId, ' - ', c.customerName) as customer, SUM(od.productPrice * od.quantity) AS totalPrice FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) JOIN customers c ON (o.customerId = c.customerId) GROUP BY o.orderId; SELECT od.orderId, CONCAT(p.productName, ', ', p.productSize, ', ', od.quantity, ', ', (p.productPrice * od.quantity)) AS detail FROM orderdetails od JOIN products p ON (od.productId = p.productId) ORDER BY od.orderId;",
        [],
        function (err, result) {
            // console.log(result);
            res.render('backend/order.ejs', {orders: result[0], orderdetails: result[1]});
        }
    );
});

/* news page */
// http://localhost:8000/backend/news
router.get("/news", function (req, res, next) {
    req.mysql.query("select newsId, DATE_FORMAT(newsDate,'%Y/%m/%d %H:%i') AS newsDate, newsTitle, newsCoverImg from news", 
        [], 
        function (err, result) {
            res.render('backend/news.ejs', {news: result});
        }
    );
});

module.exports = router;
