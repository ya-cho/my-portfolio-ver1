$(function(){

    //slide
    $("#banner-slider").on('init', function(event, slick) {
        $('.img-area .slider-counter').append('<span class="current"></span> / <span class="total"></span>');
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
    }).slick({
        autoplay: false,
        speed : 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        pauseOnHover: true,
        dots: true,
        arrows: true,
        nextArrow: '.banner .next-arrow',
        prevArrow: '.banner .prev-arrow'
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
    });


});