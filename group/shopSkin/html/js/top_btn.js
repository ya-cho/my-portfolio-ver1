$(function(){

    // top-btn
    $(".go-top").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});