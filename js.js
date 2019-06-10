$(document).scroll(function () {
    if ($(this).scrollTop() > 658) {
        $('.svg-icon').css("opacity", "1");
    } else {
        $('.svg-icon').css("opacity", "0");
    }
})

$('.one').hover(function() {
    $(".tip_1").toggleClass('show');
})

$('.two').hover(function() {
    $(".tip_2").toggleClass('show');
})