$(function(){

    // slide
    $("#today-view").slick({
        autoplay: false,
        speed : 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        infinite: true,
        pauseOnHover: true,
        dots: false,
        arrows: true,
        nextArrow: '.quick-menu .slick-btn .next-arrow',
        prevArrow: '.quick-menu .slick-btn .prev-arrow'
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.quick-menu').fadeIn();
        } else {
            $('.quick-menu').fadeOut();
        }
    });

    $(".quick-menu .recent").click(function(){
        $(".recent-layer").addClass("active");
        $("#today-view").slick("refresh");
    });
    $(".quick-menu .recent-layer .close-btn").click(function(){
        $(".recent-layer").removeClass("active");
    });

});