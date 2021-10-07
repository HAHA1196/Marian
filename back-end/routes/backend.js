var express = require("express");
const app = require("../app");
var router = express.Router();
var path = require("path");
const { resourceLimits } = require("worker_threads");
const os = require('os');
const homedir = os.homedir();

/* GET 測試用 page. */
router.get("/", function (req, res, next) {
    res.render("backend/product.ejs", {});
});

/* product page */
// http://localhost:8000/backend/product
router.get("/product", function (req, res, next) {
    if (req.session.loggedin) {
        req.mysql.query(
            "SELECT `productId`,`productImg1`,`productClass`, `productStyleNumber`,`productName`,`productPrice`,`productSize`,`productInStock`,`productDescription`FROM products",
            [],
            function (err, result) {
                res.render("backend/product.ejs", { product: result });
            }
        );    
    } else {
        res.render('backend/oops.ejs', {p: "you're not loged in!", href: "login", a: 'Please login here!'});
    }

});

// 新增product 資料 
router.post('/product', function (req, res, next) {
    const productFiles = [];
    if(!req.file)
    {
        res.render('backend/oops.ejs',{p: "no files were uploaded!", href: "news", a: 'Please try again!'});
    }
    req.mysql.query(
        'insert into products (productStyleNumber,productName,productClass,productPrice,productSize,productInStock, productDescription) values (?, ?, ?, ?, ?, ?, ?); UPDATE `products` t1 JOIN (SELECT FLOOR(SUM(productId) / COUNT(productName) * 10) AS a, productName FROM `products` GROUP BY productName) AS t2 USING (productName) SET t1.productStyleNumber = CONCAT(t1.productClass, "_", t2.a)',
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
            res.redirect('product');
        }
    )
});

/* member page */
// http://localhost:8000/backend/member
router.get("/member", function (req, res, next) {
    if (req.session.loggedin) {
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
    } else {
        res.render('backend/oops.ejs', {p: "you're not loged in!", href: "login", a: 'Please login here!'});
    }

});
/* order page */
// http://localhost:8000/backend/order
router.get("/order", function (req, res, next) {
    if (req.session.loggedin) {
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
    } else {
        res.render('backend/oops.ejs', {p: "you're not loged in!", href: "login", a: 'Please login here!'});
	}
	// res.end();
});

/* news page */
// http://localhost:8000/backend/news
router.get("/news", function (req, res, next) {
    if (req.session.loggedin) {
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
    } else {
    res.render('backend/oops.ejs', {p: "you're not loged in!", href: "login", a: 'Please login here!'});
    }

});
// 新增news資料
router.post("/news", function (req, res, next) {
    const myFiles = []; 
    if (!req.files) {
        res.render('backend/oops.ejs', {p: "no files were uploaded!", href: "news", a: 'Please try again!'});
    } 

    const desktopDir = `${homedir}/Desktop`;
    // res.send(desktopDir);

    if (req.files.uploadImg0){
        var file0 = req.files.uploadImg0;
        // var uploadPath0 = path.join(`${desktopDir}/newsImg/` + file0.name);  //有成功在桌面建立資料夾 但...
        var uploadPath0 = path.join(__dirname, "../public/img/newsImg/" + file0.name);
        myFiles.push(uploadPath0.substring(uploadPath0.indexOf("newsImg") + 7));
        file0.mv(uploadPath0, (err) => {
            return;
        });
    } else {
        
    }

    if (req.files.uploadImg1){
        var file1 = req.files.uploadImg1;
        var uploadPath1 = path.join(__dirname, "../public/img/newsImg/" + file1.name);
        myFiles.push(uploadPath1.substring(uploadPath1.indexOf("newsImg") + 7));
        file1.mv(uploadPath1, (err) => {
            return;
        });
    } else {
        
    }

    if (req.files.uploadImg2){
        var file2 = req.files.uploadImg2;
        var uploadPath2 = path.join(__dirname, "../public/img/newsImg/" + file2.name);
        myFiles.push(uploadPath2.substring(uploadPath2.indexOf("newsImg") + 7));
        file2.mv(uploadPath2, (err) => {
            return;
        });
    } else {
        
    }

    if (req.files.uploadImg3){
        var file3 = req.files.uploadImg3;
        var uploadPath3 = path.join(__dirname, "../public/img/newsImg/" + file3.name);
        myFiles.push(uploadPath3.substring(uploadPath3.indexOf("newsImg") + 7));
        file3.mv(uploadPath3, (err) => {
            return;
        });
    } else {
        
    }

    if (req.files.uploadImg4){
        var file4 = req.files.uploadImg4;
        var uploadPath4 = path.join(__dirname, "../public/img/newsImg/" + file4.name);
        myFiles.push(uploadPath4.substring(uploadPath4.indexOf("newsImg") + 7));
        file4.mv(uploadPath4, (err) => {
            return;
        });
    } else {
        
    }

    if (req.files.uploadImg5){
        var file5 = req.files.uploadImg5;
        var uploadPath5 = path.join(__dirname, "../public/img/newsImg/" + file5.name);
        myFiles.push(uploadPath5.substring(uploadPath5.indexOf("newsImg") + 7));
        file5.mv(uploadPath5, (err) => {
            return;
        });
    } else {
        
    }
   
    req.mysql.query(
        "INSERT INTO news (newsTitle, newsDate, newsCoverImg) VALUES ( ?, CURRENT_TIMESTAMP, ?); INSERT INTO `newsContent` (`newsId`, `newsSubtitle`, `newsArticle`, `newsImg`, `newsFigcaption`) VALUES ?; UPDATE newsContent SET newsId = (SELECT MAX(newsId) FROM news) WHERE newsId IS null",
        [
            req.body.newsTitle,
            myFiles[0],
            [
                [null, req.body.newsSubtitle1, req.body.newsArticle1, myFiles[1], req.body.newsFigcaption1],
                [null, req.body.newsSubtitle2, req.body.newsArticle2, myFiles[2], req.body.newsFigcaption2],
                [null, req.body.newsSubtitle3, req.body.newsArticle3, myFiles[3], req.body.newsFigcaption3],
                [null, req.body.newsSubtitle4, req.body.newsArticle4, myFiles[4], req.body.newsFigcaption4],
                [null, req.body.newsSubtitle5, req.body.newsArticle5, myFiles[5], req.body.newsFigcaption5]
            ],
        ],
        function (err, result) {
            // res.send('yoyoyoyo123.');
            res.redirect("news");
        }
    );    
});
// 修改news資料
// router.put("/news", function (req, res, next) {
    
//     req.mysql.query(
//         "INSERT INTO news (newsTitle, newsDate, newsCoverImg) VALUES ( ?, CURRENT_TIMESTAMP, ?); INSERT INTO `newsContent` (`newsId`, `newsSubtitle`, `newsArticle`, `newsImg`, `newsFigcaption`) VALUES ?; UPDATE newsContent SET newsId = (SELECT MAX(newsId) FROM news) WHERE newsId IS null",
//         [],
//         function (err, result) {
//             res.send('yo edit dis !');
//             // res.redirect("news");
//             //////////////////////1005///////////////////////////
//         }
//     );    
// });


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

// http://localhost:8000/backend/login
router.get('/login', (req, res) => {
    // session = req.session;
    // if (session.userid) {
    //     res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    // } else
        res.render('backend/login.ejs', {})
});

// router.post('/user', (req, res) => {
//     const myusername = 'user1'
//     const mypassword = 'mypassword'
//     var session;

//     if (req.body.username == myusername && req.body.password == mypassword) {
//         session = req.session;
//         session.userid = req.body.username;
//         console.log(req.session)
//         res.send(`Hey there, welcome <a href=\'logout'>click to logout</a>`);
//     }
//     else {
//         res.send('Invalid username or password');
//     }
// });

router.post('/auth', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        req.mysql.query('select * from accounts where username = ? and password = ?', 
            [username, password], 
            function (err, result) {
                if (result.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('news');
                } else {
                    res.render('backend/oops.ejs', {p: "you're entering wrong username or password!", href: "login", a: 'Please try again here!'});
                }
                res.end();
            }
        );
    } 
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('login');
});

module.exports = router;
