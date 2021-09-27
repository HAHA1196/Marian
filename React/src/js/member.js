import $ from 'jquery'

$(document).ready(function(){
    // member register display
    $('.memberConditionRegister').on('click',function(){
        $('.membersCondition').css("background-color","rgb(149, 169, 201)");
        $('.memberConditionRegister').css("color","rgb(105, 122, 149)").css("background-color","rgb(255, 230, 183)");
        $('.memberConditionLogin').css("color","white").css("background-color","rgb(149, 169, 201)");
        $('.membersRegister').css("display","block");
        $('.membersLogin').css("display","none");
    })

    // member login display
    $('.memberConditionLogin').on('click',function(){
        $('.membersCondition').css("background-color","rgb(255, 230, 183)");
        $('.memberConditionRegister').css("color","white").css("background-color","rgb(149, 169, 201)");
        $('.memberConditionLogin').css("color","rgb(105, 122, 149)").css("background-color","rgb(255, 230, 183)");
        $('.membersRegister').css("display","none");
        $('.membersLogin').css("display","block");
        console.log('fuck')
    })

    // I agree checkbox + join button
    //$('input')[5].checked = false;
    $('.agreeCheckbox').on('change', function(){
        console.log($('button')[1])
        console.log($('input')[5].checked)
        if($('input')[5].checked === true){
            $('button')[1].disabled = false;
        }else{
            $('button')[1].disabled = true;
        }
    })

    // input focus none
    $('input').on('focus',function(){
        $('input').css("outline","none");
    })

    //check register password
    let pwd = $('.registerPassword')[0];
    let length_check = /^.*(?=.{8,}).*$/;
    let upper_check = /^.*(?=.{1,})(?=.*[A-Z]).*$/;
    let lower_check = /^.*(?=.{1,})(?=.*[a-z]).*$/;
    let number_check = /^.*(?=.{1,})(?=.*\d).*$/;
    $('.registerPassword').on('input',function(){
        if(length_check.test(pwd.value) && upper_check.test(pwd.value) && lower_check.test(pwd.value) && number_check.test(pwd.value)){
            $('.passwordAlertCharacters').css('color','#99a9c6');
            $('.passwordAlertUpper').css('color','#99a9c6');
            $('.passwordAlertLower').css('color','#99a9c6');
            $('.passwordAlertNum').css('color','#99a9c6');
            if(pwd.value.length > 15){
                $('.passwordAlertCharacters').html('Strong password').css('color','#99a9c6');
            }else if(pwd.value.length >= 8){
                $('.passwordAlertCharacters').html('Weak password').css('color','#f77b1c');
            }
            pwdFlag = 1;
        }
        else{
            pwdFlag = 0;
            $('.passwordAlertCharacters').html('Enter at least 8 characters').css('color','#546279');
            $('.passwordAlertLower').css('color','#546279');
            $('.passwordAlertUpper').css('color','#546279');
            $('.passwordAlertNum').css('color','#546279');
            if(length_check.test(pwd.value)){
                $('.passwordAlertCharacters').css('color','#99a9c6');
            }else{
                if(upper_check.test(pwd.value)){
                    $('.passwordAlertUpper').css('color','#99a9c6');
                    if(lower_check.test(pwd.value)){
                        $('.passwordAlertLower').css('color','#99a9c6');
                        if(number_check.test(pwd.value)){
                            $('.passwordAlertNum').css('color','#99a9c6');
                        }
                    }else{
                        if(number_check.test(pwd.value)){
                            $('.passwordAlertNum').css('color','#99a9c6');
                        }
                    }
                }else{
                    if(lower_check.test(pwd.value)){
                        $('.passwordAlertLower').css('color','#99a9c6');
                        if(number_check.test(pwd.value)){
                            $('.passwordAlertNum').css('color','#99a9c6');
                        }
                    }else{
                        if(number_check.test(pwd.value)){
                            $('.passwordAlertNum').css('color','#99a9c6');
                        }
                    }
                }
            }
        }
    })

    //email register check
    let email_check = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    $('.registerEmail').on('input',function(){
        if(email_check.test($('.registerEmail')[0].value)){
            $('.emailAlert').css('display','none');
            emailFlag = 1;
        }else{
            $('.emailAlert').html('Email address is invalid!').css('color','#546279').css('display','block');
            emailFlag = 0;
        }
    })

    //user name check
    $('.registerName').on('input',function(){
        if($('.registerName')[0].value.length < 1){
            $('.usernameAlert').html('Please enter user name!').css('color','#546279').css('display','block');
            nameFlag = 0;
        }else{
            $('.usernameAlert').css('display','none');
            nameFlag = 1;
        }
        console.log('ass')
    })
})

//check username, email, password before user can press join
let pwdFlag = 0;
let emailFlag = 0;
let nameFlag = 0;
function joinNow(){
    if(pwdFlag === 0){
        if(emailFlag === 0){
            if(nameFlag === 0){
                $('.usernameAlert').html('Please enter user name!').css('color','#546279').css('display','block');
            }
            $('.emailAlert').html('Email address is invalid!').css('color','#546279').css('display','block');
        }else{
            if(nameFlag === 0){
                $('.usernameAlert').html('Please enter user name!').css('color','#546279').css('display','block');
            }
        }
        $('.passwordAlertCharacters').html('Enter at least 8 characters').css('color','#546279');
        $('.passwordAlertLower').css('color','#546279');
        $('.passwordAlertUpper').css('color','#546279');
        $('.passwordAlertNum').css('color','#546279');
    }else{
        if(emailFlag === 0){
            if(nameFlag === 0){
                $('.usernameAlert').html('Please enter user name!').css('color','#546279').css('display','block');
            }
            $('.emailAlert').html('Email address is invalid!').css('color','#546279').css('display','block');
        }else{
            if(nameFlag === 0){
                $('.usernameAlert').html('Please enter user name!').css('color','#546279').css('display','block');
            }else{
                //can join now
                console.log('asshole');
            }
        }
    }
}