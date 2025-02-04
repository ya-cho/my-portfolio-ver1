$(function(){

    //selectbox
    $(".selectbox .select").on("click", function(){
        $(this).parent().toggleClass("focus");
    });

    // accordian menu
    $(".layout-main.side .depth1 .title").click(function(e){
        $(".layout-main.side .depth2").slideUp();
        $(this).closest(".layout-main.side .depth1").toggleClass("focus");
        if ($(this).next().is(":hidden")){
            $(this).next().slideDown();
            $(this).closest(".layout-main.side .depth1").siblings().removeClass("focus");
        }
    });

    // menu-side
    $(document).on("click", '[data-btn="menu-side"]', function() {
        $(".layout-main").toggleClass("side");
        $(".layout-main .depth2").removeAttr("style");
    });


    // design-w
    //sst-menu
    $("#sst-menu .btn").on("click", function(){
        $(this).closest("#sst-menu").toggleClass("sst-active");
    });

    // layout-main slide down
    $(document).ready(function(){
        $(".panel-heading").click(function() {
            $(this).nextAll(".panel-body").slideToggle("fast");
            $(this).find(".arrow").toggleClass("less");
        });
    });

    // modal tab-menu
    $(".modal .modal-body .tab-menu a").on("click", function() {
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').position().top + 10;

        $("body .modal .modal-body").animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    });
});