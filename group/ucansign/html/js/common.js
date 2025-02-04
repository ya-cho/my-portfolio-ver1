$(function(){
    // header
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if( st > 100) {
            $(".main-wrap header").addClass("fixed");
            $(".main-wrap header .logo").removeClass("white");
        }else {
            $(".main-wrap header").removeClass("fixed");
            $(".main-wrap header .logo").addClass("white");
        }
    });

    // select
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.select-area').length) {
            $('.select-area').removeClass('active');
        }
    });
    $('.select-area').each(function(e){
        $(this).children('.select-click').click(function(e) {
            $(this).closest('.select-area').toggleClass('active');
            $('.select-list .option').click(function(){
                var selectChk = $(this).text();
                $(this).closest('.select-area').find('.select-chk .select-txt').text(selectChk);
                $(this).closest('.select-area').removeClass('active')
            });
        });
    });

    // tab
    $(".tab-menu").each(function(){
        $(this).children().click(function(){
            var tabCont = $(this).attr("data-tab"),
                activeTab = $(this).attr("rel");

            $("#" + tabCont + " .tab-content").hide();
            $("#"+activeTab).fadeIn();

            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        })
    });

    // modal popup
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

    // header menu
    $("header .menu").on('click',function() {
        if ($(this).hasClass("close")) {
            $("header .menu").removeClass("close");
            $("aside").fadeOut(50)
        }else{
            $(this).addClass("close");
            $("aside").fadeIn(150)
        }
    });

    // aside menu
    $(".slide-menu > li > a").on('click', function () {
        $(".slide-menu > li > a").removeClass("active");
        $(this).addClass("active");
    })

});

