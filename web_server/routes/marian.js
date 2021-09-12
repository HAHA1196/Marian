var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:8000/api 
router.get('/', function(req, res, next) {
  res.send('123');
});

// 前台 news 僅供查
// http://localhost:8000/api/news
router.get('/news', function(req, res, next) {
  res.send('news data list');
});
// http://localhost:8000/api/news/4
router.get('/news/:newsId', function(req, res, next) {
  res.send('select * from news where newsId = 4');
});

// 前台 products 僅供查
// http://localhost:8000/api/products
router.get('/products', function(req, res, next) {
  res.send('products data list');
});
// 分類搜尋
// http://localhost:8000/api/products/ACC
router.get('/products/:productClass', function(req, res, next) {
  res.send('select * from products where productClass = ACC');
});
// 單一商品詳細介紹頁面
// http://localhost:8000/api/products/2
router.get('/products/:productId', function(req, res, next) {
  res.send('select * from products where productId = 2');
});

// 前台 members 可供增查修
// 這裡有點執行上的難度，要從登入狀態判定用戶 customerId 為多少
// 決定要給他看到那哪筆會員資料
// http://localhost:8000/api/members/6
router.get('/members/:customerId', function(req, res, next) {
  res.send('select * from customers where customerId = 6');
});
// 新增會員資料
router.post('/members', function(req, res, next) {
  res.send('insert into customers (AAA, BBB, CCC) values (?, ?, ?)');
});
router.put('/members', function(req, res, next) {
  res.send('update customers set AAA = ?, BBB = ?, CCC = ? where customerId = ?');
});

// 前台 orders 可供增查刪
// 編號八號的會員
// http://localhost:8000/api/orders/8
router.get('/orders/:customerId', function(req, res, next) {
  res.send('select * from customers where customerId = 8');
});
// 編號八號的會員察看編號二號的訂單
// http://localhost:8000/api/orders/8/2
router.get('/orders/:customerId/:orderId', function(req, res, next) {
  res.send('select * from customers where orderId = 2');
});
// 新增訂單
router.post('/orders', function(req, res, next) {
  res.send('insert into orders (customerId, orderDate) values (?, ?);'
  + 'insert into orderdetails (AAA, BBB, CCC) values (?, ?, ?);'
  + 'insert into orderdetails (AAA, BBB, CCC) values (?, ?, ?);');
});
router.delete('/orders', function(req, res, next) {
  res.send('delete from orders where orderId = ?');
});


module.exports = router;
