$(function() {
    $("#content").html(new Date());
    $("#content").parents('body').css({
        'overflow': 'hidden'
    });
});