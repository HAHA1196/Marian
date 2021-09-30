var express = require("express");
const app = require("../app");
var router = express.Router();
var path = require("path");

const myusername = 'user1'
const mypassword = 'mypassword'
var session;

/* GET 測試用 page. */
router.get("/", function (req, res, next) {
    res.render("backend/product.ejs", {});
});

/* product page */
// http://localhost:8000/backend/product
router.get("/product", function (req, res, next) {
    req.mysql.query(
        "SELECT `productId`,`productImg`,`productClass`, `productStyleNumber`,`productName`,`productPrice`,`productSize`,`productInStock`,`productDescription`FROM products",
        [],
        function (err, result) {
            res.render("backend/product.ejs", { product: result });
        }
    );
});

// 0930 修改
router.post('/productAdd', function(req, res, next) {
    req.mysql.query(
        'insert into products (productStyleNumber,productName,productClass,productPrice,productSize,productInStock, productDescription) values (?, ?, ?, ?, ?, ?, ?)', 
    [
        req.body.productStyleNumber,
        req.body.productName,
        req.body.productClass,
        req.body.productPrice,
        req.body.productSize,
        req.body.productInStock,
        req.body.productDescription
    ], 
        function (err, result) {
            res.send('inserted.');
            // res.send('')
        }
    )

    // console.log(sql);
    // var qur = db.query('INSERT INTO account SET ?', sql, function(err, rows) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.setHeader('Content-Type', 'application/json');
    //     res.redirect('/');
    // });

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
});
/* order page */
// http://localhost:8000/backend/order
router.get("/order", function (req, res, next) {
    req.mysql.query(
        "SELECT o.orderId, DATE_FORMAT(o.orderDate,'%Y/%m/%d %k:%i') AS orderDate, CONCAT(o.customerId, ' - ', c.customerName) as customer, SUM(od.productPrice * od.quantity) AS totalPrice FROM orders o JOIN orderdetails od ON (o.orderId = od.orderId) JOIN customers c ON (o.customerId = c.customerId) GROUP BY o.orderId; SELECT od.orderId, CONCAT(p.productName, ', ', p.productSize, ', ', od.quantity, ', ', (p.productPrice * od.quantity)) AS detail FROM orderdetails od JOIN products p ON (od.productId = p.productId) ORDER BY od.orderId;",
        [],
        function (err, result) {
            // console.log(result);
            res.render("backend/order.ejs", {
                orders: result[0],
                orderdetails: result[1],
            });
        }
    );
});

/* news page */
// http://localhost:8000/backend/news
router.get("/news", function (req, res, next) {
    req.mysql.query(
        "select newsId, DATE_FORMAT(newsDate,'%Y/%m/%d %H:%i') AS newsDate, newsTitle, newsCoverImg from news; SELECT * FROM newsContent",
        [],
        function (err, result) {
            res.render("backend/news.ejs", {
                news: result[0],
                newsContent: result[1],
            });
        }
    );
});

// upload file
router.post("/upload", function (req, res, next) {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.fileUploaded;
    var uploadPath = path.join(__dirname, "../public/img/upload/" + file.name);

    file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ status: "success", path: uploadPath });
    });
});

router.get('/login',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.render('backend/login.ejs',{})
});

router.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
});

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('login');
});

module.exports = router;
