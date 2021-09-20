$(function () {
    var orderList = [];
    var orderdetailList = [];

    $.get('http://localhost:8001/api/orders', function (data) {
        orderList = JSON.parse(data);
        console.log(orderList);

        $.each(orderList, function (key, obj) {
            // console.log(obj);
            var $tr = $('<tr></tr>');
            var _this = document.getElementsByTagName(`tr:nth-child(${key})`);
            $.each(obj, function (kk, vv) {
                // console.log(vv);
                $tr.append($('<td></td>').text(vv).click(() => {toggleRow(_this)}));
            })
            $('#contentData').append($tr);
        })
    })
    $.get('http://localhost:8001/api/orderdetails', function (data) {
        orderdetailList = JSON.parse(data);
        console.log(orderdetailList);

        $.each(orderdetailList, function (key, obj) {
            var trChild = 4;
            if (obj.orderId == $(`tr:nth-child(${trChild}) td:nth-child(1)`).text()) {
                // console.log($(`tr:nth-child(${trChild}) td:nth-child(5)`).text());
                if ($(`tr:nth-child(${trChild}) td:nth-child(5)`).text() == '') {
                    $(`tr:nth-child(${trChild})`).append($('<td></td>').text(obj.detail));
                } else {
                    $(`tr:nth-child(${trChild}) td:nth-child(5)`).append(obj.detail);
                }
            } else {
                trChild++;
            }
            // $.each(obj, function (kk, vv) {
            //     $(`tr:nth-child(${key + 2})`).append($('<td></td>').text(vv));
            // })
        })
    })

    
})