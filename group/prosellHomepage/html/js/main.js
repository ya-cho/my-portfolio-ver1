// 사용자가 창 크기 조절 했을 때
$(window).resize(function(){
    var currentHeight = window.innerHeight;                             // 현재 페이지 높이값
    var topBannerHeight = $(".top-banner").height();                    // 탑배너 영역 높이값
    $(".main-visual .visual").css("height", currentHeight-topBannerHeight);   // visual-motion 섹션에 현재 높이값 반영 /* sj */
});

$(function(){

    var currentHeight = window.innerHeight;                             // 현재 페이지 높이값
    var topBannerHeight = $(".top-banner").height();                    // 탑배너 영역 높이값
    $(".main-visual .visual").css("height", currentHeight-topBannerHeight);   // visual-motion 섹션에 현재 높이값 반영 /* sj */

    var scrollBody = $('.fix-motion');

    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt;
    var percent;
    var isMobile;

    function scrollFunc(){

        setProperty();

        if(isMobile){
            contentInMobile();
        }else{
            contentIn();
        }

    };

    function setProperty(){

        isMobile = $(window).width() <= 1024 ? true : false;
        scrollHeight = scrollBody.height();
        sectionOffsetTop = scrollBody.offset().top;

        scrollRealHeight = (scrollHeight - $(window).height());
        winScrollTop = $(window).scrollTop();
        sectionScrolTop = winScrollTop - sectionOffsetTop;

        scrollPerecnt =  sectionScrolTop / scrollRealHeight;
        percent = scrollPerecnt * 100 ;

    };

    function contentIn(){

        var deviceImg = $('.obj-fix .slide-wrap figure');
        var imgWidth = deviceImg.width();

        if(percent >= 12 && percent < 43){
            imageChange(imgWidth * 0);
            $('.fix-motion .txt-area .txt01').addClass('active');
        }
        if(percent >= 43 && percent < 75) {
            imageChange(imgWidth * 1);
            $('.fix-motion .txt-area .txt02').addClass('active');
        }
        if(percent >= 75 && percent < 100) {
            imageChange(imgWidth * 2);
            $('.fix-motion .txt-area .txt03').addClass('active');
        }
        if(percent >= 100) {
            imageChange(imgWidth * 3);
            $('.fix-motion .txt-area .txt04').addClass('active');
        }
        if(percent < 12 ){
            $('.fix-motion .txt-area .txt01').removeClass('active');
            $('.fix-motion .txt-area .txt02').removeClass('active');
            $('.fix-motion .txt-area .txt03').removeClass('active');
            $('.fix-motion .txt-area .txt04').removeClass('active');
        }

    };

    function contentInMobile(){

        var deviceImg = $('.obj-fix .slide-wrap figure');
        var imgWidth = deviceImg.width();

        if(percent >= 5 && percent < 25){
            imageChange(imgWidth * 0);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
            $('.fix-motion .txt-area .txt01').addClass('active');
        }
        if(percent >= 25 && percent < 45) {
            imageChange(imgWidth * 1);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
            $('.fix-motion .txt-area .txt02').addClass('active');
        }
        if(percent >= 45 && percent < 65) {
            imageChange(imgWidth * 2);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
            $('.fix-motion .txt-area .txt03').addClass('active');
        }
        if(percent >= 65 && percent <= 85) {
            imageChange(imgWidth * 3);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
            $('.fix-motion .txt-area .txt04').addClass('active');
        }
        if(percent > 85) {
            imageChange(imgWidth * 3);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
        }
        if(percent < 0) {
            imageChange(imgWidth * 0);
            $('.fix-motion .txt-area .txt-ani').removeClass('active');
        }

    };

    function imageChange(moveX){

        var img = $('.fix-motion .slide-wrap .slide-img');
        img.css({
            'transform':'translateX('+ -moveX +'px)'
        });

    };

    function init(){
        scrollFunc();
    };

    $(window).scroll(function(){
        scrollFunc();
    });

    $(window).resize(function(){
        scrollFunc();
    });

    init();
});


$(function(){

    var scrollBody = $('.sticky-motion');
    var maskLeft = scrollBody.find('.left-mask');
    var maskRight = scrollBody.find('.right-mask');
    var bgImage = scrollBody.find('.bg-img');

    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt
    var percent;


    function changeOverlap(){

        setProperty();
        motionRender();

    };

    function setProperty(){

        scrollHeight = scrollBody.height();
        sectionOffsetTop = scrollBody.offset().top;

        scrollRealHeight = (scrollHeight - $(window).height());
        winScrollTop = $(window).scrollTop();
        sectionScrolTop = winScrollTop - sectionOffsetTop;

        scrollPerecnt =  sectionScrolTop / scrollRealHeight;
        percent = scrollPerecnt * 100 ;

    };

    function motionRender(){

        var maskStartValue = 20; //마스크
        var maskEndValue = 0; // 최종 마스크 크기
        var zoomValue = 2; // 줌 크기
        var zoomOutValue = 1; //줌 아웃 크기
        var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue));
        var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue));

        maskLeft
            .css({
                width: maskVal + '%'
            });
        maskRight
            .css({
                width: maskVal + '%'
            });
        bgImage
            .css({
                'transform': 'scale('+ scaleVal +')'
            });
    };

    function init(){
        changeOverlap();
    };

    $(window).scroll(function(e){
        changeOverlap();
    });

    $(window).resize(function(){
        changeOverlap();
    });

    init();

});