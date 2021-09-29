$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var member = JSON.parse($("#member").text());
    console.log(member);
    $("#searchBtn").on("click", function () {
        console.log("哼");
        let sortMember = $("#sortMember").val();
        let searchMember = $("#searchMember").val();

        $("tr:not(:first-child").slideUp();

        switch (sortMember) {
            case "customerId":
                $(`tr:nth-child(${Number(searchMember) + 1})`).slideDown();
                break;

            case "customerName":
                break;

            case "customerPhone":
                break;

            case "customerEmail":
                break;

            case "customerAddress":
                break;

            default:
                break;
        }
        // for (i = 0; i < member.length; i++) {
        // }
    });
});
