$(function(){

    /*
        For pc
    */

    // search wrap
    $(".btn-search").on("click", function(){
        $(".search-wrap").stop().fadeIn(200)
    });
    $(".search-wrap .btn-close").click(function(){
        $(".search-wrap").stop().fadeOut(100)
    });



    /*
        For mobile
    */
    // header fixed
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0) {
            $(".header").addClass("fixed")

        } else {
            $(".header").removeClass("fixed")
        }
    });

});