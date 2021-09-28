$(function () {

    // !!!!!讓JS可以使用EJS的變數!!!!!
    var list = JSON.parse($('#list').text());
    // console.log(list);
    var odList = JSON.parse($('#odList').text());
    // console.log(odList);


    $('#searchBtn').click(function () {
        // console.log('OK');
        var inputOrderId = $('#orderId').val();
        $('tr:not(:nth-child(1))').hide();
        for (var i = 0; i < list.length; i++) {
            // console.log(list[i].orderId);
            if (inputOrderId == list[i].orderId) {
                $(`tr:nth-child(${i + 2})`).show();
            }
        }
    })

    $('#clearBtn').click(function () {
        $('tr').show();
        $('#orderId').val('');
    })
})
