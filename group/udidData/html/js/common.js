$(function(){

    $(function(){
        AOS.init();
    });

    // header
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if( st > 100) {
            $(".main-wrap header").addClass("fixed");
            $(".main-wrap header .logo").removeClass("white");
        }else {
            $(".main-wrap header").removeClass("fixed");
            $(".main-wrap header .logo").addClass("white");
        }
    });

    // href navigation event
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if( st >= 320) {
            $(".sub-nav").addClass("fixed");
            $(".version").addClass("fixed");
        } else {
            $(".sub-nav").removeClass("fixed");
            $(".version").removeClass("fixed")
        }
    });

    // direct browser to top right away
    if (window.location.hash)
        scroll(0,0);
    // takes care of some browsers issue
    setTimeout(function(){scroll(0,0);},1);
    $(function(){
        $('.locate').on('click',function(e){
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top - 80 + 'px'
            },500,'swing');
        });
    // anchor other page
        if(window.location.hash){
            $('html,body').animate({
                scrollTop:$(window.location.hash).offset().top - 80 + 'px'
            },500,'swing');
        }
    });

    // gnb
    $(".gnb > li").hover(
        function() {
            $(this).find(".sub").stop().fadeIn(200);
            $(this).find(".sub").addClass("active");
        }, function() {
            $(this).find(".sub").stop().fadeOut(100);
            $(this).find(".sub").removeClass("active");
        }
    );

    // select
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.select-area').length) {
            $('.select-area').removeClass('active');
        }
    });
    $('.select-area').each(function(e){
        $(this).children('span').click(function(e) {
            $(this).closest('.select-area').toggleClass('active');
            $('.select-list .option').click(function(){
                var selectChk = $(this).text();
                $(this).closest('.select-area').children('.select-chk').text(selectChk);
                $(this).closest('.select-area').removeClass('active')
            });
        });
    });

    // accordion event
    $(".accordion-wrap li").on('click', function () {
        if ($(this).hasClass("active")) {
            $(this).find('ul').slideUp(200);
            $(this).removeClass("active");
        }else{
            $(".accordion-wrap li.depth").removeClass("active");
            $(".accordion-wrap li.depth").find("ul").slideUp(200);
            $(this).find("ul").slideDown(200);
            $(this).addClass("active");
        }
    });

    // going top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').show();
        } else {
            $('.go-top').hide();
        }
    });
    $('.go-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // slick
    $('.center-slider').slick({
        centerMode: true,
        variableWidth: true,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.auto-slider').slick({
        variableWidth: true,
        prevArrow: '.auto-arrow .slick-prev',
        nextArrow: '.auto-arrow .slick-next',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });

});

