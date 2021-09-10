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
    sliderInterval = setInterval(slideNext, 5000);

});
$( ".navbar-menu" ).find( ".hover" ).css( "transition", "transform .5s ease-in-out 0s" )
//  
// news
$(document).ready(function() {
    // Swiper: Slider
        new Swiper('.journal_item', {
            loop: true,
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
    // 
    
        
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
          loop: true,
        //   loopFillGroupWithBlank: true,
        });
// news mask
//  sns
// 
    