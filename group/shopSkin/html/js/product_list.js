$(function(){

    /* prod-slider */
    $('#prod-slider-w').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        nextArrow: '.recom-area .next-arrow',
        prevArrow: '.recom-area .prev-arrow'
    });
    $('#prod-slider-m').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3.5,
        slidesToScroll: 1
    });

});