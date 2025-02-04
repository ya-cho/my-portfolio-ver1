$(function(){
    /*aos*/
    $(function(){
        AOS.init();
    });

    // mobile aside
    $(".menu-btn").on('click', function(){
        $(".mobile-lnb").addClass("active");
        $(".gnb").append('<div class="transparency"></div>');
        $("body").css({overflow:'hidden'}).bind('touchmove', function(e){
            e.preventDefault()
        });
    });

    $(document).on('click', '.transparency', function(){
        $(".mobile-lnb").removeClass("active");
        $(".transparency").remove();
        $("body").css({ overflow:'' }).unbind('touchmove');
    });

    $(".mobile-lnb > ul > li.depth").on('click', function () {
        if ($(this).hasClass("active")) {
            $(this).find('ul.sub').slideUp(200);
            $(this).removeClass("active");
        }else{
            $(".mobile-lnb > ul > li.depth").removeClass("active");
            $(".mobile-lnb > ul > li.depth").find("ul.sub").slideUp(200);
            $(this).find("ul.sub").slideDown(200);
            $(this).addClass("active");
        }
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

    /*modal*/
    $('.modal-open').on('click',function(){
        var modalName = $(this).attr('data-name');
        var thisModal = $("#"+modalName);
        $(thisModal).addClass('open');

        var modalHeight = $(thisModal).children('.modal-content').outerHeight() * -1 /2;
        $(thisModal).children('.modal-content').css('margin-top',modalHeight);
    });
    $('.modal-close').on('click',function(){
        $(this).parents('.modal').removeClass('open');
    });

    /* family site */
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.familysite').length) {
            $('.site-list').hide();
        }
    });
    $('.select-chk, .select-btn').click(function(e) {
        $('.select-btn').toggleClass('active');
        $(this).closest('.familysite').find('.site-list').toggle();
        $('.site-list a').click(function(){
            var selectChk = $(this).text();
            $(this).closest('.familysite').children('.select-chk').text(selectChk);
            $('.site-list').hide();
        });
    });

    /*select*/
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.familysite').length) {
            $('.site-list').hide();
            $(".select-btn").removeClass("active");
        }
    });

    $(".select-chk, .select-btn").on('click',function(){
        $(this).parent(".select").toggleClass('active');
    })
    $('.select-list li').on("click",function(){
        var optionValue = $(this).text();
        $(this).addClass('active').siblings().removeClass();
        $(this).parents('.select-list').siblings('.select-chk').text(optionValue).addClass('option-select');
        $(this).parents('.select').removeClass('active');
    });

    /*Q&A*/
    $('.list.open-list .question').on('click',function(){
        $(this).toggleClass('open');
    });

    $('.comment-write-box').on('click',function(){
        $(this).addClass('active');
    });
    $('.comment-delete button').on('click',function(){
        $(this).parents('.comment-delete').siblings('.comment-input').toggle();
    })

});

$(document).ready(function() {
    /* swiper1 */
    var swiper1 = new Swiper(".swiper1", {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination : {
            el : '.swiper-pagination',
            clickable: true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
    });
    /*
    // swiper player
    $('.start').on('click', function () {
        swiper1.autoplay.start();
        return false;
    })
    $('.stop').on('click', function () {
        swiper1.autoplay.stop();
        return false;
    })
    */

    /* gnb menu */
    $('.drop-cont').hide();

    $('.drop').hover(function() {
        $(this).find('div.drop-cont').show(0);
    }, function() {
        $(this).find('div.drop-cont').delay(100).hide(0);
    });

    $('.drop a').focus(function() {
        $(this).closest("li.drop").find('div.drop-cont').stop(true, true).delay(0).slideDown('fast');
    });
    $('.drop a').blur(function() {
        $(this).closest("li.drop").find('div.drop-cont').stop(true, true).delay(0).slideUp('fast');
    });
});

