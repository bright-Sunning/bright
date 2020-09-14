$(function() {

    // 高级搜索
    $(".search").hover(function() {
        $('.search-all').animate({
            'opacity': '1',
            'height': '150px'
        }, 1000)
    }, function() {
        $('.search-all').animate({
            'opacity': '0',
            'height': '0'
        }, 1000)
    })

    var $btm = $('.btm');
    $('.search-all a').click(function() {
        $('.btm').hide()
        $('.search-all a').css({
            'z-index': '1',
        })
        $(this).css({
            'z-index': '10',
        })
        $(this).find('div.btm').show()
    })

    // 轮播图
    var left = 0;
    var index = 0;
    var timer = setInterval(turn, 500)

    $('.silde-page li').hover(function() {
        clearInterval(timer);
        $('.silde-page li').removeClass('on');
        $(this).addClass('on');
        index = $(this).index()
        left = -index * 666;
        $('.silde').css('left', `${left}px`)
    }, function() {
        timer = setInterval(turn, 500)
    })
    $('.sec-mainNav>li').hover(function() {
        $(this).toggleClass('hover');
    })
    $('.sec-mainNav>li').hover(function() {
        $('.sec-mainNav>li .menu-panel').hide();
        $(this).find('.menu-panel').show();
    }, function() {
        $('.sec-mainNav>li .menu-panel').hide();
    })



    function turn() {
        index++;
        left -= 666;
        if (index == 4)
            index = 0;
        if (left == -2664)
            left = 0;
        $('.silde-page li').removeClass('on');
        $(`.silde-page li:eq(${index})`).addClass('on');
        $('.silde').css('left', `${left}px`)
    }
})