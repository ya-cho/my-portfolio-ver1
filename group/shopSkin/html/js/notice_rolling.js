$(function(){
    var height =  $(".notice").height();
    var num = $(".roling-list").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".rolling").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,1000);
    $(".rolling").append($(".roling-list").first().clone());
    $(".roling-list").hover(function(){
        clearInterval(noticeRollingOff);
    });
    $(".roling-list").mouseleave(function(){
        noticeRollingOff = setInterval(noticeRolling,1000);
    });
});