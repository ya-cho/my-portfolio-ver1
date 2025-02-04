$(function(){

    // category
    $(".category .depth1 li").hover(function(){
        $(this).children("ul").stop().fadeIn(200)
    }, function(){
        $(this).children("ul").stop().fadeOut(100)
    });

});