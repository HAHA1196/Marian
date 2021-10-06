
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
    $(this).parents('tr').children('.showContent').show();
    
});


// X － button
$('.onOff button:last-child').click(function () {
    // console.log($(this).parent().parent());
    $(this).parents('td').hide();
}); 

// 10.5 搜尋功能

$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var product = JSON.parse($("#product").text());
    // console.log(product);
    $("#searchBtn").on("click", function () {
        // console.log("測試");
        let sortProduct = $("#sortProduct").val();
        let searchProduct = $("#searchProduct").val();

        $("tr:not(:first-child").slideUp();

        switch (sortProduct) {
            case "productStyleNumber":
                for(var i = 0;product.length;i++){
                    if(product[i].productStyleNumber.indexOf(`${searchProduct}`)>= 0){
                        $(`tr:nth-child(${i+2})`).slideDown();
                    }
                }
                break;

            case "":
                
                break;

            case "":
                
                break;

            case "":
                
                break;

            case "":
                
                break;

            default:
                break;
        }
        // for (i = 0; i < member.length; i++) {
        // }
    });

    $('#clearBtn').click(function () {
        $('tr').slideDown();
        $('#sortMember').val('');
        $('#searchMember').val('');
    })

});

