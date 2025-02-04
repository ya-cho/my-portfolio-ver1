$(function(){

    // slide
    $("#today-view").slick({
        autoplay: false,
        speed : 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        pauseOnHover: true,
        dots: false
    });

    // quick menu
    function asideFixed(){
        var sticky = $(".quick-menu"),
            st = $(window).scrollTop(),
            category = $(".category").outerHeight(),
            header = $(".header").outerHeight(),
            quickFixed = category + header;

        if ( st >= quickFixed ) {
            sticky.addClass("fixed")
        } else {
            sticky.removeClass("fixed");
        }
    }

    $(window).scroll(function(){
        asideFixed()
    });
    $(window).scroll(function(){
        asideFixed()
    });

});