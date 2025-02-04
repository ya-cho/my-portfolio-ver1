$(function(){
    'use strict';

    // scroll
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 10 ) {
            $("#wrap").addClass("scroll-active")
        } else {
            $("#wrap").removeClass("scroll-active")
        }
    });

    // menu toggle
    $(".menu-toggle").click(function() {
        $("body").toggleClass("load-menu");
        $("header").toggleClass("active");
        $(this).toggleClass("active");
    });

    // going top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').show();
        } else {
            $('.top-btn').hide();
        }
    });
    $('.top-btn').click(function(e) {
        $('html, body').animate({scrollTop: 0}, 200);
    });

    $(".gnb li:last-child a").click(function() {
        alert("준비중 입니다");
    });


});