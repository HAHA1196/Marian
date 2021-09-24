var express = require("express");
var router = express.Router();

/* GET users listing. */
// http://localhost:8001/api
router.get("/", function (req, res, next) {
    res.send("123");
});

// 後台 news 僅供查
// http://localhost:8001/api/news
router.get("/news", function (req, res, next) {
    req.mysql.query("select * from news", [], function (err, result) {
        res.send(JSON.stringify(result));
    });
});
// http://localhost:8001/api/news/4
router.get("/news/:newsId", function (req, res, next) {
    req.mysql.query(
        "select * from news n join newsContent nc on (n.newsId = nc.newsId) where n.newsId = ?",
        [req.params.newsId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});

// 後台 products 僅供查
// http://localhost:8001/api/products
router.get("/products", function (req, res, next) {
    req.mysql.query("select * from products", [], function (err, result) {
        res.send(JSON.stringify(result));
    });
});
// 分類搜尋
// http://localhost:8001/api/products/ACC
router.get("/products/:productClass", function (req, res, next) {
    req.mysql.query(
        "select * from products where productClass = ?",
        [req.params.productClass],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});
// 單一商品詳細介紹頁面
// http://localhost:8001/api/products/2
router.get("/products/:productId", function (req, res, next) {
    req.mysql.query(
        "select * from products where productId = ?",
        [req.params.productId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});

// 後台 members 可供增查修
// 這裡有點執行上的難度，要從登入狀態判定用戶 customerId 為多少
// 決定要給他看到那哪筆會員資料

// 查詢 所有會員資料
// http://localhost:8001/api/members
router.get("/members", function (req, res, next) {
    req.mysql.query(
        "SELECT `customerId`, `customerName`, `customerGender`, `customerPhone`, `customerEmail`, `customerAddress` FROM `customers`",
        [],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});
// 查詢 單一會員資料
// http://localhost:8001/api/members/3
router.get("/members/:customerId", function (req, res, next) {
    req.mysql.query(
        "select * from customers where customerId = ?",
        [req.params.customerId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});

// 查詢 單一會員的 訂單資料
// http://localhost:8001/api/member-order-history/5
router.get("/member-order-history/:customerId", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, o.orderDate, SUM(od.productPrice * od.quantity) AS 總價 FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) WHERE o.customerId = ? GROUP BY o.orderId",
        [req.params.customerId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});

// 新增會員資料
router.post("/members", function (req, res, next) {
    req.mysql.query(
        'insert into customers (customerName, customerGender, customerPhone, customerEmail, customerAddress) values ("cName", ?, "cPhone", "cEmail", "cAddress")',
        [
            /* 凃 裡面好像要補會員密碼？？對嗎？？ */
            req.body.customerName,
            req.body.customerGender,
            req.body.customerPhone,
            req.body.customerEmail,
            req.body.customerAddress,
        ],
        function (err, result) {
            res.send("member inserted. ");
        }
    );
});
// 修改會員資料
router.put("/members", function (req, res, next) {
    req.mysql.query(
        "update customers set customerName = ?, customerGender = ?, customerPhone = ?, customerEmail = ?, customerAddress = ? where customerId = ?",
        [
            /* 凃 裡面好像要補會員密碼、然後customerId不能修改？？對嗎？？ */
            req.body.customerName,
            req.body.customerGender,
            req.body.customerPhone,
            req.body.customerEmail,
            req.body.customerAddress,
            req.body.customerId,
        ],
        function (err, result) {
            res.send("member updated. ");
        }
    );
});

// 後台 orders 僅供查
// http://localhost:8001/api/orders
router.get("/orders", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, o.orderDate, o.customerId, SUM(od.productPrice * od.quantity) AS totalPrice FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) GROUP BY o.orderId",
        [],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});
// http://localhost:8001/api/orderdetails
router.get("/orderdetails", function (req, res, next) {
    req.mysql.query(
        "SELECT od.orderId, CONCAT(p.productName, ', ', p.productSize, ', ', od.quantity, ', ', (p.productPrice * od.quantity)) AS detail FROM orderdetails od JOIN products p ON (od.productId = p.productId)",
        [],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});
// 察看編號 2 號的訂單
// http://localhost:8001/api/orders/2
router.get("/orders/:orderId", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, o.orderDate, o.customerId, SUM(od.productPrice * od.quantity) AS totalPrice FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) where o.orderId = ? GROUP BY o.orderId",
        [req.params.orderId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});
// http://localhost:8001/api/orderdetails/2
router.get("/orderdetails/:orderId", function (req, res, next) {
    req.mysql.query(
        "SELECT od.orderId, CONCAT(p.productName, ', ', p.productSize, ', 數量', od.quantity, '個, 總價', (p.productPrice * od.quantity),' 元' ) AS detail FROM orderdetails od JOIN products p ON (od.productId = p.productId) where od.orderId = ?",
        [req.params.orderId],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    );
});

module.exports = router;
