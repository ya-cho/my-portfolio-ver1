$(function(){
    //Default Action
    $(".member-box .tab-content").hide(); //Hide all content
    $(".member-box ul.login-tab li:first a").addClass("active").show();
    $(".member-box .tab-content:first").show();

    //On Click Event
    $(".member-box ul.login-tab li a").click(function() {
        $(".member-box ul.login-tab li a").removeClass("active");
        $(this).addClass("active");
        $(".member-box .tab-content").hide();
        var activeTab = $(this).attr("href");
        $(activeTab).fadeIn();
        return false;
    });
});