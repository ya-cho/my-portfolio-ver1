$(function(){
    $('.btn-join').click(function(){
        $('.join-table').toggleClass('display-hide');
    });
    $('.card-tab button , .payment-method li').click(function(){
        $(this).addClass("active").siblings().removeClass('active');
        var id_check = $(this).attr("data-name");
        $('#'+id_check).removeClass('display-hide').siblings('.payment-table').addClass('display-hide');

        if($(".kakaopay").hasClass("active")){
            $('#paymentReceipts p').removeClass('display-hide');
        }else{
            $('#paymentReceipts p').addClass('display-hide');
        }
    });

    $('span.corporation').css('display','none');
    $('.card-tab button').click(function(){
        if($("button.personal").hasClass("active")){
            $('span.personal').css('display','inline-block').siblings('span').css('display','none');
        }else{
            $('span.personal').css('display','none').siblings('span').css('display','inline-block');
        }

        if($(".not-receipts").hasClass("active")){
            $('.receipts-table').addClass('display-hide');
        }else{
            $('.receipts-table').removeClass('display-hide');
        }
    });

});