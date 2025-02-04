$(function(){
    function getScrollBarWidth () {
        var inner = document.createElement('p');

        var outer = document.createElement('div');
        outer.appendChild (inner);

        document.body.appendChild (outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild (outer);

        return (w1 - w2);
    };

    var scrollWidth = getScrollBarWidth();

    $(".btn-modal-open").click(function(){
        var id_check = $(this).attr("name");
        $('#'+id_check).addClass('modal-active');
        $("body").css({ 'overflow': 'hidden', 'padding-right' : scrollWidth });
    });
    $('.modal-close').click(function(){
        $(".modal").removeClass('modal-active');
        $("body").css({ 'overflow': 'auto', 'padding-right' : '0'});
    });
});

