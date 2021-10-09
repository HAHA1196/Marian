$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var news = JSON.parse($("#news").text());
    var newsContent = JSON.parse($("#newsContent").text());
    // switch tabs -------------------------------------------------------
    $(".tab>button, .tab>div").on({
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
            $(`.tabContent:nth-of-type(${index + 1})`).css("display", "block");
            $(`.tabContent:not(:nth-of-type(${index + 1}))`).css(
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
        }
    });


    // new article -------------------------------------------------------
    $("#uploadBtn").click(function(){
        $(".newArticle").slideToggle();
        // console.log(this);
    })
    
    // new image
    $(".imgEditBtn").on("click", function(e){
        $(this).siblings(".fileInput").click();
        // $(this).siblings(".fileInput").on("change", function(e){
        //     console.log(this);
        //     console.log(e);
        //     console.log(e.target.files[0].name);
        // });
        $(this).siblings(".fileInput").on("change", function(evt){
            // console.log(this.files);
            let [file] = this.files;
            if(file) {
                $(this).next("img").attr('src', URL.createObjectURL(evt.target.files[0]));
            }
        })
        
    })

    // edit article-------------------------------------------------------
    // $("table .confirmBtn").on("click", function(e){
    //     e.preventDefault();
    //     var getnewsId = Number($(this).parents("tr").find("td:first-child")[0].innerText);
    //     console.log(getnewsId);
    //     $.ajax({
    //         url:"/news/edit/" + getnewsId,
    //         type: "POST",


    //     });
    // });

    // search input -------------------------------------------------------
    $("#searchBtn").on("click", function () {
        let sortNews = $("#sortNews").val();
        let inputNews = $("#inputNews").val();
        $('tr:not(:nth-child(1))').slideUp();
        switch (sortNews) {
            case "newsId":
                for (var i = 0; i < news.length; i++) {
                    if (inputNews == news[i].newsId) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }        
                break;
    
            case "newsTitle":
                for (var i = 0; i < news.length; i++) {
                    if (news[i].newsTitle.indexOf(`${inputNews}`) >= 0) {
                        $(`tr:nth-child(${i + 2})`).slideDown();
                    }
                }
                break;
    
            default:
                break;
        }
    });


    // clear search input
    $('#clearBtn').click(function () {
        $('tr').slideDown();
        $('#inputNews').val('');
    });
    
});