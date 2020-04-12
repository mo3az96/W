$(window).on("load", function () { });
$(document).ready(function () {
    new WOW().init();
    if ($(window).width() <= 991) {
        ////////////////////
        $('.serch-ico').click(function () {
            $(".search-cont").slideToggle(300);
        });
    }
    if ($(window).width() >= 991) {
        $(window).scroll(function () {
            var scrollVal = $(this).scrollTop() - 173;
            if ($(this).scrollTop() >= 173) {
                $('main').css('background-position-y', + scrollVal + 'px');
            } else {
                $('main').css('background-position-y', '0');
            }
        });
    }
    /////////Main Slider/////////
    $('.latest-img').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    });
});