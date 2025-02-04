$(function(){

    // aside
    var menuBtn = $(".menu-toggle"),
        closeBtn = $("#aside .ico-close"),
        nav = $("#aside .aside-cont")

    menuBtn.on("click",function(){
        nav.addClass("slide-left");
    });
    closeBtn.on("click",function(){
        nav.removeClass("slide-left");
    });

    $(document).ready(function() {
        $(".side-menu .tab-content").hide();
        $("ul.tabs li:first").addClass("active").show();
        $(".tab-content:first").show();

        //On Click Event
        $("ul.tabs li").click(function() {

            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();

            var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn();
            return false;
        });
    });


});