import $ from 'jquery'

$(document).ready(function(){
    // member register display
    $('.memberConditionInfo').on('click',function(){
        $('.membersCondition').css("background-color","rgb(149, 169, 201)");
        $('.memberConditionInfo').css("color","rgb(105, 122, 149)").css("background-color","rgb(255, 230, 183)");
        $('.memberConditionOrders').css("color","white").css("background-color","rgb(149, 169, 201)");
        $('.memberInfo').css("display","block");
        $('.memberOrders').css("display","none");
    })

    // member login display
    $('.memberConditionOrders').on('click',function(){
        $('.membersCondition').css("background-color","rgb(255, 230, 183)");
        $('.memberConditionInfo').css("color","white").css("background-color","rgb(149, 169, 201)");
        $('.memberConditionOrders').css("color","rgb(105, 122, 149)").css("background-color","rgb(255, 230, 183)");
        $('.memberInfo').css("display","none");
        $('.memberOrders').css("display","block");
        console.log('fuck')
    })

    // member order details
    $('.memberOrdersDetails').slideToggle();
    document.querySelectorAll('.memberOrdersItem').forEach((element)=>{
        element.addEventListener('click',shit)
    });
    let flag = 0;
    function shit(){
        console.log(this.before)
        // let width = window.getComputedStyle(
        // document.querySelector('.memberOrdersItem'), ':before'
        // ).getPropertyValue('background-color');
        // let color = window.getComputedStyle(
        // document.querySelector('.memberOrdersItem'), ':before');
        if(flag === 0){
            this.nextElementSibling.style.display = 'flex';
            // width = 'white';
            // color.style.color = '#f00';
            flag = 1;
        }else{
            this.nextElementSibling.style.display = 'none';
            // width = 'rgb(149, 169, 201)';
            flag = 0;
        }
    }
})