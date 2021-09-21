import $ from 'jquery'

// $(document).ready(function(){
//     function fotoramaResize(){
//         $(window).resize(function(){
//             if($(window).width() > 490){
//                 $('.fotorama').fotorama({
//                   width: 450,
//                   height: 450
//                 });
//             }else{
//                 $('.fotorama').fotorama({
//                   width: 380,
//                   height: 380
//                 });
//             }
//         })
//     };
//     if($(window).width() > 490){
//         $('.fotorama').fotorama({
//           width: 450,
//           height: 450
//         });
//         fotoramaResize();
//     }
//     else{
//         $('.fotorama').fotorama({
//           width: 380,
//           height: 380
//         });
//         fotoramaResize();
//     }
// })

$('.productsBuyNumSize').on('change',function(){
    if($('.productsBuyNumSize')[0].value === 'S'){
        $('.productsBuyNumQuantity').css("display","none");
        $('.productsBuyNumSold').css("display","block");
    }
    else{
        $('.productsBuyNumSold').css("display","none");
        $('.productsBuyNumQuantity').css("display","block");
    }
})

let flag = 0;
$(document).ready(function(){
    let plus = $('.shippingPlus');
    let minus = $('.shippingMinus');
    $('.shipping').click(function(){
        $('.shippingDetails').slideToggle();
        flag === 0 ? plus.css("display", "none") : plus.css("display", "block");
        flag === 0 ? minus.css("display", "block") : minus.css("display", "none");
        flag === 0 ? flag = 1 : flag = 0; 
    });
    $('.shippingPlus').click(function(){
        $('.shippingDetails').slideToggle();
        flag === 0 ? plus.css("display", "none") : plus.css("display", "block");
        flag === 0 ? minus.css("display", "block") : minus.css("display", "none");
        flag === 0 ? flag = 1 : flag = 0; 
    });
    $('.shippingMinus').click(function(){
        $('.shippingDetails').slideToggle();
        flag === 0 ? plus.css("display", "none") : plus.css("display", "block");
        flag === 0 ? minus.css("display", "block") : minus.css("display", "none");
        flag === 0 ? flag = 1 : flag = 0; 
    });
});

// let products = $(".productsBuyContainer")[0];
// $(document).ready(function(){
//     if(($(window).width()) >= 992){
//         $(window).scroll(function () {
//             if (products.scrollHeight+100 > $(window).height()) {
//                 if(($(window).height() + $(window).scrollTop()) >= 2200){
//                  products.style.position = "relative";
//                  products.style.top = "";
//                  products.style.bottom = "60px";
//                  products.style.width = "100%" ;
//                  products.style.padding = "0 80px 0 30px";
//                 }else if(($(window).height() + $(window).scrollTop()) >= (products.scrollHeight + 100)){
//                  products.style.position = "relative";
//                  products.style.top = "";
//                  products.style.bottom = "10px";
//                  products.style.width = "100%" ;
//                  products.style.padding = "0 80px 0 30px";
//                 }else{
//                  products.style.position = "relative";
//                  products.style.marginBottom = "auto";
//                  //products.style.bottom = "";
//                  products.style.width = "100%" ;
//                  products.style.padding = "0 80px 0 30px";
//                 }
//             } 
//             else {
//                 products.style.position = "relative";
//                 products.style.top = "10px";
//                 products.style.width = "100%" ;
//                 products.style.padding = "0 80px 0 30px";
//             }
//             console.log(products.scrollHeight);
//             console.log($(window).height());
//             console.log($(window).scrollTop());
//         });
//     }
// })

$(document).ready(function(){
  $('.addToCart').on('click',function(){
      console.log('shit')
      $('.productsBuyCart').css("display","block");
      $('.productsCart').css("display","block");
      $('.cartItem').css("display","flex");
  })
  $('.cartItemProductsDelete').on('click',function(){
      $('.cartItem').css("display","none");
  })
  $('.cartExit').on('click',function(){
      $('.productsBuyCart').css("display","none");
  })
  $(window).scroll(function(){
        let cartStickTop = 50 - $(window).scrollTop();
        if($(window).scrollTop() <= 50){
            $('.productsCart').css("top",cartStickTop);
        }else{
            $('.productsCart').css("top",0);
        }
    })
})