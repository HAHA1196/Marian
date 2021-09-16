const toggleRow = (element) => {
    element
        .getElementsByClassName("showContent")[0]
        .classList.toggle("hideRow");
    console.log(event);
};
var thCount = $("tr").find("th").length;
console.log(thCount);
for (i = 0; i < thCount; i++) {
    $(`td:nth-child(${i})`).append("<div class='divider'></div>");
}
