$(function () {

    // !!!!!讓JS可以使用EJS的變數!!!!!
    var orders = JSON.parse($('#orders').text());
    // console.log(orders);
    // var orderdetails = JSON.parse($('#orderdetails').text());
    // // console.log(orderdetails);


    $('#searchBtn').click(function () {
        // console.log('OK');
        var inputOrderId = $('#orderId').val();
        $('tr:not(:nth-child(1))').hide();
        for (var i = 0; i < orders.length; i++) {
            // console.log(orders[i].orderId);
            if (inputOrderId == orders[i].orderId) {
                $(`tr:nth-child(${i + 2})`).show();
            }
        }
    })

    $('#clearBtn').click(function () {
        $('tr').show();
        $('#orderId').val('');
    })
})
