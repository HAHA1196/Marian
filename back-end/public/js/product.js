
// 10.4 搜尋功能
$(function(){

    // !!!!!讓JS可以使用EJS的變數!!!!!
    var product = JSON.parse($("#product").text());

    $("#searchBtn").click(function(){
        var searchProduct = $("#searchProduct").val();
        
        $("tr:not(:nth-child(1))").slideUp();
        for (var i = 0;i<product.length;i++)
        {
            if(searchProduct == product[i].searchProduct)
            {
                $(`tr:nth-child(${i + 2})`).slideDown();
            }
        }
        
    })

    $('#clearBtn').click(function () {
        $('tr').slideDown();
        $('#searchProduct').val('');
    })
});


$("#imgEditBtn").on("click", function () {
    alert("edit this yo");
});

// 展開上傳新品欄位按鈕
$(function(){
    $("#uploadBtn").click(function(){
        $("#newProducts").slideToggle();
    })
});

$('.editBtn').click(function () {
    // console.log($(this).parents('tr').children('.showContent'));
    $(this).parents('tr').children('.showContent').show();
    
})

// X － button
$('.onOff button:last-child').click(function () {
    // console.log($(this).parent().parent());
    $(this).parents('td').hide();
})

// 10.01 編輯 editBtn 功能
function edit(productId){
    window.location.href="/productEdit?id="+productId;
}



