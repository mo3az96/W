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
});