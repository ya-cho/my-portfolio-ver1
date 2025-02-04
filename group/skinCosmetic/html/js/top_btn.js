$(function(){

    $(".quick-menu .top-btn").click(function() {
        $('html').animate({scrollTop : 0}, 600);
    });

    $(".quick-menu .bottom-btn").click(function() {
        $('html').animate({scrollTop : ($(".footer").offset().top)}, 600);
    });

});