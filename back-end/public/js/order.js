$(function () {
    // 我要撈兩筆不同的資料，
    // 因為SQL語法以我的能力實在沒有辦法把他們寫在同一個
    // （使用情境上好像也不適合寫在同一個，所以就分兩個網址撈）
    // 你可以點下面 get 的兩個連結來看看我撈了甚麼
    // （SQL語法在 Marian > web_server > routes > marian.js 裡 92 行跟 101 行）

    // 定義空陣列將來要存放資料庫撈出來的資料
    var orderList = [];
    var orderdetailList = [];

    // 從下列網址撈出資料並以陣列形式儲存
    $.get('http://localhost:8001/api/orders', function (data) {
        orderList = JSON.parse(data);
        // 查看資料型態
        console.log(orderList);

        // 此段是從 orderList 中尋訪每一筆資料，
        // 並包裝成 <tr> 包 <td> 的樣子輸出
        // 目前可以穩定的將資料輸出成一個 <tr> 包四筆 <td> 
        // 總共要六筆 <td> ，剩下來的兩筆會從下面那個 get 輸出
        // !!!困難點!!!我現在寫出來的 click 事件裡面的 this 是單一個 <td> 裡面的資料，
        // 而非 <tr> ，可以 F12 看看你之前寫的 main.js 23 行 console 出的結果
        // 下面註解的那行程式碼是我努力的過程但是失敗了
        $.each(orderList, function (key, obj) {
            var $tr = $('<tr></tr>');
            // var _this = document.getElementsByTagName(`tr:nth-child(${key})`);
            $.each(obj, function (kk, vv) {
                // console.log(vv);
                $tr.append($('<td></td>').text(vv).click(() => {toggleRow(this)}));
            })
            $('#contentData').append($tr);
        })
    })

    // 這邊也是撈資料並以陣列形式儲存
    $.get('http://localhost:8001/api/orderdetails', function (data) {
        orderdetailList = JSON.parse(data);
        console.log(orderdetailList);

        // 寫了一個很醜的迴圈，目的是產出第五個 <td> （訂單明細）
        // 如果你時間充裕的話可以想想看怎麼樣把它改好
        // 這個程式將來在 orderId 跳號的時候就會出 bug ，但目前沒問題
        // 下面註解的部分是我原本嘗試的寫法，但我換條路走了，不用太在意他
        // 寫到這裡已經可以穩定的將資料輸出成一個 <tr> 包五筆 <td> 了
        // 最後要再多一個 <td> 裡面要有手風琴展開後的東西，
        // 如果不想動他的話我有空再寫，
        // 給老師看就說有接到資料，但造成跑板之後再修就好
        // 你可以先處理 toggleRow 還有你之前寫好的分隔島們消失的問題
        var trChild = 4;
        $.each(orderdetailList, function (key, obj) {
            if (obj.orderId == $(`tr:nth-child(${trChild}) td:nth-child(1)`).text()) {
                // console.log($(`tr:nth-child(${trChild}) td:nth-child(5)`).text());
                if ($(`tr:nth-child(${trChild}) td:nth-child(5)`).text() == '') {
                    $(`tr:nth-child(${trChild})`).append($('<td></td>').text(obj.detail));
                } else {
                    $(`tr:nth-child(${trChild}) td:nth-child(5)`).append(` | ${obj.detail}`);
                }
            } else {
                trChild++;
                $(`tr:nth-child(${trChild})`).append($('<td></td>').text(obj.detail));
            }
            // $.each(obj, function (kk, vv) {
            //     $(`tr:nth-child(${key + 2})`).append($('<td></td>').text(vv));
            // })
        })
    })

    
})