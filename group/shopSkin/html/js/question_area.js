$(function(){
    $(".title-area").click(function(){
        $(this).toggleClass('active').siblings().removeClass('active');;
    });
});