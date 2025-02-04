$(function(){

    /*
        For mobile
    */

    // aside animation
    $(".menu-toggle").click(function(){

        $(".aside-cont").addClass("slide-left");
        $("#aside").append('<div class="aside-overlay"></div>');
        $("html, body").css({"overflow": "auto", "height": "100%"});

    });
    $(".side-close").click(function(){

        $(".aside-cont").removeClass("slide-left");
        $(".aside-overlay").remove();
        $("html, body").removeAttr("style");

    });

    // accordion
    $(".accordion-item").each(function(){
        var depth = $(this).children(".accordion-panel").length;

        if(depth > 0) {
            $(this).children(".accordion-thumb").addClass("is-active")
        } else {
            $(this).children(".accordion-thumb").removeClass("is-active")
        }

    });

    $(".accordion-thumb").on("click", function () {

        if ($(this).hasClass("is-open")) {

            $(this).removeClass("is-open");
            $(this).parent().children(".accordion-panel").slideUp(200);
        } else {
            $(".accordion-thumb").removeClass("is-open");
            $(this).addClass("is-open");
            $(this).parent().children(".accordion-panel").slideDown(200);
            $(this).parent().siblings().children(".accordion-panel").slideUp(200);
        }

    });

    // slide
    $("#today-wrap").slick({
        speed : 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        infinite: false,
        mobileFirst: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                }
            }
        ]
    });

});