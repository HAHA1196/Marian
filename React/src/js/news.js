import $ from 'jquery'

$(document).ready(function(){
    for(let i = 4; i < $('section').length; i++){
                $('section')[i].style.cssText = `display: none ;`;
    }

    $('#loadMore').click(function(){
        $('#loadMore').fadeOut();
        setTimeout(displaySection, 1000);
        function displaySection(){
            for(let i = 4; i < $('section').length; i++){
                $('section')[i].style.cssText = `display: block ;`;
            }
        }
    })
})