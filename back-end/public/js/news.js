$(function () {
    // function switchTab(evt, nextTab){
    // }

    $(".tab>button").on("click", function (e) {
        console.log(e);
        console.log(this);
        let idx = Number(e.currentTarget.className.slice(3));
        console.log(idx);
        $(`.tabContent:nth-child(${idx + 1})`).css("display", "block");
        $(`.tabContent:not(:nth-child(${idx + 1}))`).css("display", "none");
    });
});