$("#imgEditBtn").on("click", function () {
    alert("edit this yo");
});
// --------------------creat new data from database-----------------



// ---------------------get data from database-----------------------

$(function () {
//     // 我要撈兩筆不同的資料，
//     // 因為SQL語法以我的能力實在沒有辦法把他們寫在同一個
//     // （使用情境上好像也不適合寫在同一個，所以就分兩個網址撈）
//     // 你可以點下面 get 的兩個連結來看看我撈了甚麼
//     // （SQL語法在 Marian > web_server > routes > marian.js 裡 92 行跟 101 行）

//     // 定義空陣列將來要存放資料庫撈出來的資料
    var productList = [];
    // var productClass = [];
    var toggleList = [
        "產品型號 | ",
        "產品名稱 | ",
        "產品種類 | ",
        "產品價格 | ",
        "產品尺寸 | ",
        "進貨數量 | ",
        "產品描述 | "
    ];
    var trList = [
        "產品圖片 ",
        "產品種類 ",
        "產品型號 ",
        "產品名稱 ",
        "產品價格 ",
        "產品尺寸 ",
        "產品描述 "
    ];

    $.get("http://localhost:8001/api/products", function (data) {
        productList = JSON.parse(data);
        // 查看所以產品資料
        // console.log(productList);
        catchProductList();
    });

    $('#uploadBtn').click(function()
    {
        toggleRow(this.parentNode);
    });

    $('#searchBtn').click(function()
    {
        var inputProductId = $('#product').val();

        $('#contentData').empty();
        var $tr = $('<tr></tr>');
        $.each(trList,function(idx,val)
        {
            $tr.append($("<th></th>").text(val));
        })
        $("#contentData").append($tr);


        // 從下列網址撈出資料並以陣列形式儲存
        $get(`http://localhost:8001/api/products/${inputProductId}`,function (data)
        {
            productList = JSON.parse(data);
            // 查看資料型態
            catchProductList();
        });


    });

    
    function catchProductList()
    {
        
        // console.log(productList);
        $.each(productList, function (key, obj) {
            var $tr = $('<tr><td onClick="toggleRow(this.parentNode)"><button class="editBtn"><i class="fa fa-pencil" aria-hidden="true"></i></button></td></tr>');
            $.each(obj, function (kk, vv) {
                $tr.append(
                    $("<td></td>")
                        .text(vv)
                        .append("<div class='divider'></div>")
                );
            });
            $("#contentData").append($tr);
        });
        for (i = 5; i <= 9; i++) {
            // console.log(trChild);
            $(`tr:nth-child(${i})`).append(
                '<td class="showContent hideRow"><div class="dividingLine"></div><div class="info infoTxt"><ul></ul></div><div class="dividingLine"></div><button id="confirmBtn"><i class="fa fa-check-circle-o" aria-hidden="true"></i>確認修改</button></td>'
            );
            toggleList.forEach((element) => {
                $(`tr:nth-child(${i}) ul:nth-child(1)`).append(
                    $("<li></li>").append($("<span></span>").text(element))
                );
            });
        };
    }

    
});
// ---------------------get data from database-----------------------
