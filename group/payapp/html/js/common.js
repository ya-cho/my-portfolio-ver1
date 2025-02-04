$(function(){

    $(function(){
        AOS.init();
    });

    // mobile aside
    $(".menu-btn").on('click', function(){
        $(".mobile-lnb").addClass("active");
        $(".gnb").append('<div class="transparency"></div>');
        $("body").css({overflow:'hidden'}).bind('touchmove', function(e){
            e.preventDefault()
        });
    });

    $(document).on('click', '.transparency', function(){
        $(".mobile-lnb").removeClass("active");
        $(".transparency").remove();
        $("body").css({ overflow:'' }).unbind('touchmove');
    });

    $(".mobile-lnb > ul > li.depth").on('click', function () {
        if ($(this).hasClass("active")) {
            $(this).find('ul.sub').slideUp(200);
            $(this).removeClass("active");
        }else{
            $(".mobile-lnb > ul > li.depth").removeClass("active");
            $(".mobile-lnb > ul > li.depth").find("ul.sub").slideUp(200);
            $(this).find("ul.sub").slideDown(200);
            $(this).addClass("active");
        }
    });

    // global-header
    $(window).scroll(function(){
        var st = $(window).scrollTop();

        if( st > 1) {
            $("#global-header").addClass("sticky");
        } else {
            $("#global-header").removeClass("sticky");
        }
    });

    /* family site */
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.familysite').length) {
            $('.site-list').hide();
        }
    });
    $('.select-chk').click(function(e) {
        $(this).closest('.familysite').find('.site-list').toggle();
        $('.site-list a').click(function(){
            var selectChk = $(this).text();
            $(this).closest('.familysite').children('.select-chk').text(selectChk);
            $('.site-list').hide();
        });
    });
    $('.select-chk').on('click', function() {
        $('.select-btn').toggleClass('active');
    });

    // going top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.go-top').show();
        } else {
            $('.go-top').hide();
        }
    });
    $('.go-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // floating menu
    $(window).scroll(function() {
        var sec2 = $('#intro .visual-motion').outerHeight();

        if ($(this).scrollTop() > sec2) {
            $('.go-menu').show();
        } else {
            $('.go-menu').hide();
            $('.floating-cont').removeClass('open')
        }
    });
    $('.go-menu').click (function(){
        $('.floating-cont').toggleClass('open')
    });

    // slick slider
    $('.top-banner').slick({
        speed : 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.main-popup').slick({
        speed : 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        fade: true
    });
    $('.payment-slider').slick({
        speed : 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        swipe: false,
        arrows: false,
        fade: true,
        asNavFor: '.payment-nav',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true
                }
            }
        ]
    });
    $('.payment-nav').slick({
        swipe: false,
        arrows: false,
        vertical: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        asNavFor: '.payment-slider',
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 5,
                    swipe: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    variableWidth: true,
                    vertical: false,
                    swipe: true,
                    dots: true
                }
            }
        ]
    });
    $('.guide-area').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1025,
                settings: {
                    speed : 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows: true,
                    fade: true
                }
            }
        ]
    });
    $('.event01-slider').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 769,
                settings: {
                    speed : 300,
                    variableWidth: true,
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.step-guide').slick({
        speed : 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        fade: true,
        dots: true
    });
    $('.card-list').slick({
        centerMode: true,
        variableWidth: true,
        speed: 300,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.link-pay').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 769,
                settings: {
                    speed : 300,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows: false,
                    fade: true,
                    dots: true
                }
            }
        ]
    });

    // btn motion
    var btnMotion = $('.btn-motion');
    btnMotion.hover( //pc
        function () {
            $( this ).removeClass('off').addClass('on');
        }, function () {
            $( this ).removeClass('on').addClass('off');
        }
    );

    // tab menu
    $("ul.tab-menu li").on('click',function() {
        $('.tab-content').hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $("ul.tab-menu li").removeClass("active");
        $(this).addClass("active");
    });

    $(".tab-content").hide();
    $(".tab-content:first-of-type").show();

    // event02 slider tab
    $(".tab-btns button").click(function(){
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $outer = $(".section2 .outer");
        var $current = $outer.find("> .tabs .tab.active");
        var $post = $outer.find("> .tabs .tab").eq(index);

        $current.removeClass('active');
        $post.addClass('active');

        $('.step-guide').slick('setPosition');
    });

    // faq
    $('.faq-area li .list-tit').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).parent().children('.reply').slideUp(200);
        } else {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            $(this).parent().children('.reply').slideDown(200);
            $(this).parent().siblings().children('.reply').slideUp(200);
        }
    });

    // ask
    $(".write-form .view-btn").on('click', function () {
        $('.write-form .reply').toggleClass('active');
        $(".write-form .view-btn").toggleClass('active');
    });

    // file-upload
    $(document).on('click', '.upload-field', function(){
        var file = $(this).parent().parent().parent().find('.input-file');
        file.trigger('click');
    });
    $(document).on('change', '.input-file', function(){
        $(this).parent().find('.form-upload').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });

    // about
    $(".bg-period").each(function() {
        new Waypoint.Inview({
            element: this,
            enter: function(direction) {
                $(this.element).addClass("active");
            }
        });
    });

    /* modal popup */
    function modalLocate(){
        var modal = $('.modal'),
            left = ( $(window).scrollLeft() + ( $(window).width() - modal.outerWidth(true)) / 2 ),
            top = ( $(window).innerHeight() - modal.height()) / 2;
        modal.css({'left':left,'top':top, 'position':'fixed'})
    }
    modalLocate();
    $(window).resize(function(){ modalLocate() });

    modules = {
        $window: $(window),
        $html: $('html'),
        $body: $('body'),
        $container: $('#wrap'),

        init: function () {
            $(function () {
                modules.modals.init();
            });
        },
        show: function (id) {
            modules.modals.showId(id);
        },
        showModal: function (id) {
            modules.modals.openModal(null,id);
        },
        hideModal: function () {
            modules.modals.closeModal();
        },

        modals: {
            trigger: $('.modal-trigger'),
            triggerClick: $('.modal-trigger-click'),
            modal: $('.modal'),
            scrollTopPosition: null,

            init: function () {
                var self = this;

                if ((self.trigger.length > 0 || self.triggerClick.length > 0) && self.modal.length > 0) {
                    self.appendDiv();
                    self.triggers();
                }
            },
            appendDiv: function () {
                if (modules.$container.children('.modal-overlay').length == 0) {
                    modules.$container.append('<div class="modal-overlay"></div>');
                    this.closeEvent();
                }
            },
            closeEvent: function () {
                var self = this;
                $('.modal-overlay').on('click', function (e) {
                    e.preventDefault();
                    self.closeModal();
                });
                modules.$body.on('keydown', function(e){
                    if (e.keyCode === 27) {
                        self.closeModal();
                    }
                });
                this.modal.on('click', '.modal-close', function(e) {
                    e.preventDefault();
                    self.closeModal();
                });
            },
            triggers: function () {
                var self = this;

                self.trigger.on('click', function (e) {
                    e.preventDefault();

                    var $trigger = $(this);

                    self.openModal($trigger, $trigger.data('modalId'));
                });
            },
            showId: function ($trigger) {
                var self = this;
                self.openModal($trigger, $trigger.data('modalId'));
            },
            openModal: function (_trigger, _modalId) {
                var self = this,
                    scrollTopPosition = modules.$window.scrollTop(),
                    $targetModal = $('#' + _modalId);

                self.scrollTopPosition = scrollTopPosition;

                modules.$html
                    .addClass('modal-show')
                    .attr('data-modal-effect', $targetModal.data('modal-effect'));

                $targetModal.addClass('modal-show');

                modules.$container.scrollTop(scrollTopPosition);
            },
            closeModal: function () {
                var self = this;

                $('.modal-show').removeClass('modal-show');
                modules.$html
                    .removeClass('modal-show')
                    .removeAttr('data-modal-effect');

                modules.$window.scrollTop(self.scrollTopPosition);
            }
        }
    };
    modules.init();

});


