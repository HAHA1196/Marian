$(function () {
    var orderList = [];

    $.get('http://localhost:8001/api/orders', function (data) {
        orderList = JSON.parse(data);
        console.log(orderList);
    })
})