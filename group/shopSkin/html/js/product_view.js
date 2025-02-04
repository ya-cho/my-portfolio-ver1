$(function(){

    /* product-view slide */
    $("#thumb-slider").on('init', function(event, slick) {
        $(this).next(".slider-counter").append('<span class="current"></span> / <span class="total"></span>');
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
    }).slick({
        autoplay: false,
        autoplaySpeed: 4000,
        speed : 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        pauseOnHover: true,
        fade: true,
        arrows: false
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
    });

    /* input check */
    $('.option .opt-sel input').keyup(function () {
        var inputLength = $(this).val().length;
        var input = $('.option .opt-sel input');
        console.log(inputLength);

        if (inputLength > 0) {
            input.removeClass("off");
            input.addClass("on");
        } else {
            input.addClass("off");
            input.removeClass("on");
        }
    });

    /* tab */
    $(document).ready(function() {
        //Default Action
        $(".product-detail .tab-content").hide(); //Hide all content
        $(".product-detail ul.subpage-tab li:first").addClass("active").show();
        $(".product-detail .tab-content:first").show();

        //On Click Event
        $(".product-detail ul.subpage-tab li").click(function() {
            $(".product-detail ul.subpage-tab li").removeClass("active");
            $(this).addClass("active");
            $(".product-detail .tab-content").hide();
            var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn();
            return false;
        });
    });


    /* qna-list lock-pw */
    $('.qna-list .btn-wrap a').click(function(){
        $('.qna-list .show-pw').addClass('active');
    });
    /* review-info lock-pw */
    $('.review-info .btn-wrap a').click(function(){
        $('.review-info .show-pw').addClass('active');
    });

    /* write */
    $("#qa .btn-write").click(function(){
        $('.qa-write').toggle();
    });
    $("#review .btn-write").click(function(){
        $('.review-write').toggle();
    });

});