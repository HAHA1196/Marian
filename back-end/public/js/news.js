$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var news = JSON.parse($("#news").text());
    var newsContent = JSON.parse($("#newsContent").text());
    // console.log(news);
    // console.log(newsContent);
    // <%= newsContent[m].newsSubtitle %>
    // $("tr").on("click", function () {
    //     console.log(this);
    //     $(this).find(".newsInput:first")
    // });
    // switch tabs yoyo~~
    $(".tab>button").on({
        // 可惡hover效果失敗了嗚嗚嗚
        // mouseover: function (e) {
        //     $(this).css({
        //         "background-color": "var(--white)",
        //         color: "var(--fontBlue)",
        //     });
        // },
        // mouseleave: function (e) {
        //     $(this).css({
        //         "background-color": "var(--darkBlue)",
        //         color: "var(--white)",
        //     });
        // },
        click: function (e) {
            // console.log(e);
            // console.log(this);
            let index = Number(e.currentTarget.className.slice(3));
            // console.log(index);
            //先確認『第幾』按鈕被點到>>>把數字帶帶入『第幾』tabContent
            $(`.tabContent:nth-child(${index + 1})`).css("display", "block");
            $(`.tabContent:not(:nth-child(${index + 1}))`).css(
                "display",
                "none"
            );
            //標籤顏色改變
            $(this).css({
                "background-color": "var(--lightYellow)",
                color: "var(--fontBlue)",
            });
            $(`.tab>button:not(:nth-child(${index}))`).css({
                "background-color": "var(--darkBlue)",
                color: "var(--white)",
            });
        },
    });
});
