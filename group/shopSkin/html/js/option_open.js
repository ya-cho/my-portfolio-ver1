$(function(){

    /* mobile option-open */
    var moption = $('.display-m.option-select');

    $('.fix-btn button').click(function(){
        moption.addClass('option-open');
        $('body').addClass('option-open')
    });
    $('.cart-wrap .table-body .option-btn').click(function(){
        moption.addClass('option-open');
        $('body').addClass('option-open')
    });
    $(".btn-option-x").click(function(){
        moption.removeClass('option-open');
        $('body').removeClass('option-open')
    });

});