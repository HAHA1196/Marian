
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





