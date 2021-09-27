import $ from 'jquery'

// caroual
$(function(){
    var inwrap=$('.w-carousel'),
    $slide=$('.slide');

    // 設定如何滑動到一下個           
    function slideNext() {

        inwrap.animate(
            {left: '0'}, 200,function() {

                inwrap.css('left', '-100%');

                $('.slide').last().after($('.slide').first());

            });
        $('.prev').click(function() {

        inwrap.animate({left: '0%'}, 1000,"ease",function() {

        inwrap.css('left', '-100%');

        $('.slide').first().before($('.slide').last());

        });
        });


        $('.next').click( function() {

        clearInterval(sliderInterval);

        slideNext();

        });
    }
    //Enabling auto scroll
    function sliderInterval(){
        setInterval(slideNext, 5000);
    } 

});
$( ".navbarMenu" ).find( ".hover" ).css( "transition", "transform .5s ease-in-out 0s" )
 



    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 3,
    //   spaceBetween: 50,
    //   slidesPerGroup: 3,
    //   loop: true,
    //   loopFillGroupWithBlank: true,
    // });

    