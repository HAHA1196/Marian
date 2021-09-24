import $ from 'jquery'

$(document).ready(function(){
    $('.fa-cart-plus').on('click',function(){
        $('.productsBuy').css("display","flex");
        $('.productsBuyItem').css("display","block");
    })
    $('.productsItemCart').on('click',function(){
        $('.productsBuy').css("display","flex");
        $('.productsBuyItem').css("display","block");
    })
    $('.productsBuyClose').on('click',function(){
        $('.productsBuy').css("display","none");
    })
    $('.addToCart').on('click',function(){
        console.log('shit')
        $('.productsBuyItem').css("display","none");
        $('.productsCart').css("display","block");
        $('.cartItem').css("display","flex");
    })
    $('.cartItemProductsDelete').on('click',function(){
        $('.cartItem').css("display","none");
    })
    $('.cartExit').on('click',function(){
        $('.productsCart').css("display","none");
        $('.productsBuy').css("display","none");
    })
    $('.cartCheckout').on('click',function(){
        setTimeout(function(){
            window.location.replace('/marian/member'); 
        }, 1000);
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