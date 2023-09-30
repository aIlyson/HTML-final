$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass('sticker');
        } else {
            $("header").removeClass('sticker');
        }
    });
});

$(".bar_menu").click(
    function () {
        $(".menu").show();
    }
)

$(".open_menu").click(
    function () {
        $(".menu").hide();
    }
)