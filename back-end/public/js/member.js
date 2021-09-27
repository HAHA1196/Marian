$(function () {
    var member = [];
    var memberOrder = [];
    var orderList = [];
    var orderdetailList = [];
    var toggleList = ["歷史訂單 | "];
    // 撈 <td> NO.1 ~ NO.6
    $.get("http://localhost:8001/api/members", function (data) {
        member = JSON.parse(data);
        // 查看資料型態
        console.log(member);
        // 撈到第一筆會員資料的 id
        console.log(member[0].customerId);
        functionOne();
        // 準備 <td> NO.7 內容物
        // for (var i = 0; i < member.length; i++) {
        //     $.get(
        //         `http://localhost:8001/api/member-order-history/${member[i].customerId}`,
        //         function (data) {
        //             memberOrder = JSON.parse(data);
        //             // 查看資料型態
        //             console.log(memberOrder);
        //             functionThree();
        //         }
        //     );
        // }
    });
    $.get("http://localhost:8001/api/orders", function (data) {
        orderList = JSON.parse(data);
        // 查看資料型態
        // console.log(orderList);

        functionOne();
    });
    $.get("http://localhost:8001/api/orderdetails", function (data) {
        orderdetailList = JSON.parse(data);
        console.log(orderdetailList);

        functionTwo();
    });

    $("#searchBtn").click(function () {
        var inputCustomerId = $("#customerId").val();
        // console.log(inputCustomerId);

        $("#contentData").empty();
        var $tr = $("<tr></tr>");
        $.each(trList, function (idx, val) {
            $tr.append($("<th></th>").text(val));
        });
        $("#contentData").append($tr);

        // 從下列網址撈出資料並以陣列形式儲存
        $.get(
            `http://localhost:8001/api/orders/${inputCustomerId}`,
            function (data) {
                member = JSON.parse(data);
                // 查看資料型態
                // console.log(member);

                functionOne();
            }
        );

        // 這邊也是撈資料並以陣列形式儲存
        $.get(
            `http://localhost:8001/api/orderdetails/${inputCustomerId}`,
            function (data) {
                memberOrder = JSON.parse(data);
                // console.log(orderdetailList);

                functionTwo();
            }
        );

        $.get(
            `http://localhost:8001/api/orders/${inputCustomerId}`,
            function (data) {
                orderList = JSON.parse(data);
                // 查看資料型態
                // console.log(orderList);

                functionThree();
            }
        );
    });

    // functionOne 為撈出member資料 再逐筆產生前六個<td>
    function functionOne() {
        $.each(member, function (key, obj) {
            var $tr = $('<tr onClick="toggleRow(this)"></tr>');
            $.each(obj, function (kk, vv) {
                console.log(vv);
                $tr.append(
                    $("<td></td>")
                        .text(vv)
                        .append("<div class='divider'></div>")
                );
            });
            $("#contentData").append($tr);
        });
    }
    // functionTwo 如果order的customerId=會員編號、就把member-order-history放到第七個td裡
    // functionTwo 如果order的customerId=會員編號、就把擁有相同customerId 的 orderId 放到第七個td裡
    function functionTwo() {
        var trChild = 2;
        $.each(orderList, function (key, obj) {
            if (
                obj.orderId ==
                $(`tr:nth-child(${trChild}) td:nth-child(1)`).text()
            ) {
                if (
                    $(`tr:nth-child(${trChild}) td:nth-child(5)`).text() == ""
                ) {
                    $(`tr:nth-child(${trChild})`).append(
                        $("<td></td>").text(obj.detail)
                    );
                } else {
                    $(`tr:nth-child(${trChild}) td:nth-child(5)`).append(
                        ` | ${obj.detail}`
                    );
                }
            } else {
                trChild++;
                $(`tr:nth-child(${trChild})`).append(
                    $("<td></td>").text(obj.detail)
                );
            }
        });

        // 完成第六個 <td>
        // trChild = 4
        for (i = 1; i <= trChild; i++) {
            // console.log(trChild);
            $(`tr:nth-child(${i})`).append(
                '<td class="showContent hideRow"><div class="dividingLine"></div><div class="info infoTxt"><ul></ul></div><div class="dividingLine"></div></td>'
            );
            toggleList.forEach((element) => {
                $(`tr:nth-child(${i}) ul:nth-child(1)`).append(
                    $("<li></li>").append($("<span></span>").text(element))
                );
            });
            // 這個寫法跟上面一樣
            // for (j = 0; j <= 4; j++) {
            //     $(`tr:nth-child(${i + 3}) ul:nth-child(1)`).append($('<li></li>').append($('<span></span>').text(toggleList[j])));
            // }

            // console.log($(`tr:nth-child(${i + 3}) td:nth-child(5)`).text());
            $(`tr:nth-child(${i}) li:nth-child(1)`).append(
                $("<div></div>").text(
                    $(`tr:nth-child(${i}) td:nth-child(5)`).text()
                )
            );
        }
    }

    function functionThree() {
        $.each(memberOrder, function (idx, obj) {
            var ii = 2;
            $.each(obj, function (kk, vv) {
                console.log(vv);
                $(`tr:nth-child(${idx + 2}) li:nth-child(${ii})`).append(vv);
                ii++;
            });
        });
    }
});
