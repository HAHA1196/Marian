$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var member = JSON.parse($("#member").text());
    // console.log(member);
    $("#searchBtn").on("click", function () {
        // console.log("哼");
        let sortMember = $("#sortMember").val();
        let searchMember = $("#searchMember").val();

        $("tr:not(:first-child").slideUp();

        switch (sortMember) {
            case "customerId":
                $(`tr:nth-child(${Number(searchMember) + 1})`).slideDown();
                break;

            case "customerName":
                for (var i = 0; i < member.length; i++) {
                    if (member[i].customerName.indexOf(`${searchMember}`) >= 0) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }
                break;

            case "customerPhone":
                for (var i = 0; i < member.length; i++) {
                    if (member[i].customerPhone == searchMember) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }
                break;

            case "customerEmail":
                for (var i = 0; i < member.length; i++) {
                    if (member[i].customerEmail.indexOf(`${searchMember}`) >= 0) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }
                break;

            case "customerAddress":
                for (var i = 0; i < member.length; i++) {
                    if (member[i].customerAddress.indexOf(`${searchMember}`) >= 0) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }
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
