$(window).on("load", function () { });
$(document).ready(function () {
    if ($(window).width() <= 991) {
        ////////////////////
        $('.serch-ico').click(function () {
            $(".search-cont").slideToggle(300);
        });
    }
});