$(function(){
    $(document).ready(function(){
        $(".modal").on('show.bs.modal', function() {
            setTimeout(function() {
                var swiper = new Swiper('.swiper-container', {
                    navigation: {
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    },
                    loop: true,
                });
            }, 500);
        });
    });
});

