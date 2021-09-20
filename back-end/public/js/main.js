// --------------------------right section---------------------
$(document).ready(function () {
    $("#goToProduct").on("click", function () {
        window.location.replace("http://localhost:8000/backend/product");
    });
    $("#goToOrder").on("click", function () {
        window.location.replace("http://localhost:8000/backend/order");
    });
    $("#goToMember").on("click", function () {
        window.location.replace("http://localhost:8000/backend/member");
    });
    $("#goToNews").on("click", function () {
        window.location.replace("http://localhost:8000/backend/News");
    });
});

// --------------------------left section---------------------
//手風琴收合
const toggleRow = (element) => {
    element
        .getElementsByClassName("showContent")[0]
        .classList.toggle("hideRow");
    // console.log(element);
};

//td之間的分隔島產生器
var thCount = $("tr").find("th").length;
console.log(thCount);
for (i = 0; i < thCount; i++) {
    $(`td:nth-child(${i})`).append("<div class='divider'></div>");
}
