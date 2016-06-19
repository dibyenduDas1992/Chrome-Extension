$(function() {
    setInterval(function() {
        $("#content").html(new Date());
    }, 1000);

    $("#content").parents('body').css({
        'overflow': 'hidden'
    });
});
