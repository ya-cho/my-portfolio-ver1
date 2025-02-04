$(function(){
    $('.btn-order-detail').click(function(){
        $(this).toggleClass('close');

        if($(this).hasClass("close")){
            $('.first-product ~ *:not(.btn-area)').css('display','none');
        }else{
            $('.first-product ~ *:not(.btn-area)').css('display','block');
        }
    });

    $(".table-toggle").click(function(){
        $(this).toggleClass('close');
    });

    $('.btn-table-toggle').parent().click(function(){
        if($(this).hasClass("close")){
            $(this).children('.btn-table-toggle').addClass('active');
        }else{
            $(this).children('.btn-table-toggle').removeClass('active');
        }
    });
});