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
$( ".navbarMenu" ).find( ".hover" ).css( "transition", "transform .5s ease-in-out 0s" )
//  
// news
// news
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
    //   breakpoints: {
    //                 // 1920: {
    //                 //     slidesPerView: 3,
    //                 //     
    //                 // },
    //                 768: {
    //                     slidesPerView: 2,
                        
    //                 },
    //                 480: {
    //                     slidesPerView: 1,
                       
    //                 }
    //             }
      

    });
// news mask
//  sns


// concept
// $('.conceptF').mousemove(function(){
//     var moveX=(e.clientX* -1/15);
//     var moveY=(e.clientY* -1/15);
//     $(this).css('background-position',moveX+'px '+moveY+'px ')

// })
// function conceptBg(e) {
//     var valueX = (e.pageX * -1 / 12);
//     var valueY = (e.pageY * -1 / 12);
//     this.style.backgroundPositionX = valueX + "px"
//     this.style.backgroundPositionY = valueY + "px"
//   }
//   window.onload = function() {
//     var im = document.getElementById("conceptImg");
//     if (im) {
//       im.addEventListener("mousemove",conceptBg,false);
//     }  
//   }
  // $(document).ready(function() {
  //   var movementStrength = 25;
  //   var height = movementStrength / $(window).height();
  //   var width = movementStrength / $(window).width();
  //   $(".conceptCont").mousemove(function(e){
  //             var pageX = e.pageX - ($(window).width() / 2);
  //             var pageY = e.pageY - ($(window).height() / 2);
  //             var newvalueX = width * pageX * -1 - 25;
  //             var newvalueY = height * pageY * -1 - 50;
  //             $('.conceptImg').css("background-position", newvalueX+"px "+newvalueY+"px");
  //   });
  //   });
      document.addEventListener("mousemove", parallax);
      function parallax(event) {
        this.querySelectorAll(".conceptCont>img").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
  
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
// Swiper Configuration
// material
$(function(){
    AOS.init();
 })
//  
    