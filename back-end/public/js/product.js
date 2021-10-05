
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

// 10.5 確認新增按鈕
$('#newProductBtn').click(function(){
    
})

// X － button
$('.onOff button:last-child').click(function () {
    // console.log($(this).parent().parent());
    $(this).parents('td').hide();
}); 




// 10.5 搜尋功能


