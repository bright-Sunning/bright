$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $(document).height() - $(window).height() - 1) {
            for (var i = 0; i < 4; i++) {
                var $box = $('.showpic .box:eq(0)').clone(true);
                console.log('$box')
                $('#showpic').append($box);
            }
        }
    });
})