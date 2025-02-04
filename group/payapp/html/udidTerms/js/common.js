$(function(){
    // go top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    $('.go-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // tab
    $('.tab-menu').each(function(){
        $(this).children().click(function(){
            var tabCont = $(this).attr('data-tab'),
                activeTab = $(this).attr('rel');

            $('#' + tabCont + ' .tab-content').hide();
            $('#'+activeTab).fadeIn();

            $('.tab-menu').children().removeClass('active');
            $(this).addClass('active');
        })
    });
});

// scroll tab
function bookmark(n){
    $('html, body').stop().animate({
        scrollTop : $('#terms3 h4').eq(n).offset().top
    });
}


