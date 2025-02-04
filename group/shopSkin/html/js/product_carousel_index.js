$(function(){

    // slide
    $("#product-carousel").slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 540,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed : 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    infinite: true,
                    touchMove: true,
                    fade: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

});