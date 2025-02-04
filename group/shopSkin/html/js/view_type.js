$(function(){

    $(".view-type > li").on('click', function(){
        var className = $(this).attr('data-class');
        $(this).addClass('active').siblings().removeClass('active');
        $(".category-list .list-wrap").children().attr('class', className);
    });

});