$(function(){
    $('.coupon-list .modal-list-info a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});