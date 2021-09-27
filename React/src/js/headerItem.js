import $ from 'jquery';

// loading 

// navbar select
// function displaySubMenu(li) {
//     var subMenu = li.getElementsByTagName("ul")[0];
//     subMenu.style.display = "block";
// }
// function hideSubMenu(li) {
//     var subMenu = li.getElementsByTagName("ul")[0];
//     subMenu.style.display = "none";
// }

// loading 

// navbar select

$(document).ready(function(){
    $('.navProject').hover(function() {
        $(".navProject>.navbarMenu").css('display', 'block');

    }, 
    function() {
        $(".navProject>.navbarMenu").css('display', 'none');
    });
}) 

$(document).ready(function(){
    $('.navAbout').hover(function() {
        $(".navAbout>.navbarMenu").css('display', 'block');

    }, 
    function() {
        $(".navAbout>.navbarMenu").css('display', 'none');
    });
})

// navnar scroll
$(document).ready(function () {
  
    var doc = document.documentElement;
    var w   = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    /*
    how it works:
    -------------
    1.create a scroll event listener
    2.create function to check scroll position on each scroll event,
    // 比較現在的scroll與先前的scroll值去找 滾動方向(往上滾或往下滾)
    3.compare curScroll and prevScroll values to find the scroll direction
    4.scroll up - 1, scroll down - 2, initial - 0
    
    then set the direction value to curDirection
    compare curDirection and prevDirection
    
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var header = document.getElementById('header');
    var toggled;
    var threshold = 0;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }

        if(curScroll<600){
        $("#header").css('position', 'absolute');
            
           header.classList.remove('scrollUp');

        }
        
    };
    
    
    

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');

        }
        else if (curDirection === 1) {
            $("#header").css('position', 'fixed');
            header.classList.remove('hide');
            header.classList.add('scrollUp');

        }
        else {
            toggled = false;
        }
        return toggled;
    };
  

    window.addEventListener('scroll', checkScroll);

  

});
// cursor
// const cursor=document.querySelector('.cursor');
// document.addEventListener("mousemove", (e)=>{
//     let x = e.clientX; //replace pageX for clientX
//     let y = e.clientY; // replace  pageY for clientY
//     cursor.style.top= y +'px';
//     cursor.style.left= x +'px';
// })
   