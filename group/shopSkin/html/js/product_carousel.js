$(function(){

    /* prod-list-w */
    $('#prod-list-w').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: '.prod-wrap .next-arrow',
        prevArrow: '.prod-wrap .prev-arrow'
    });

    /* prod-list-m */
    $('#prod-list-m').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
    });

});