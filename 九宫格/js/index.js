$(function() {

    // 获取9个小div
    var $div = $(".game div");

    // 点击开始游戏
    var timer;
    $("button:first").click(function() {
        $("button:first").attr("disabled", true);
        var date1 = new Date();
        timer = setInterval(function() {
            var date2 = new Date();
            var t = parseInt((date2 - date1) / 1000);
            $("p span").html(t + "s");
        }, 1000)
        start();
    })

    // 点击重来
    $("button:eq(1)").click(function() {
        $("button:first").attr("disabled", false);
        clearInterval(timer);
        $("p span").html("");
        for (var i = 0; i < $div.length; i++) {
            $div[i].index = 0;
        }
        draw();

    })

    // 实现鼠标悬浮、移动文字变色效果,点击div后实现移动效果
    $(".game div").mouseenter(function() {
        $(this).css("color", "yellow")
    }).mouseleave(function() {
        $(this).css("color", "white")
    }).click(function() {
        var top, down, left, right;
        top = this.index - 3;
        down = this.index + 3;
        left = this.index - 1;
        right = this.index + 1;
        if (empty(top)) {
            var temp = this.index;
            this.index = empty(top).index;
            empty(top).index = temp;
        } else if (empty(down)) {
            var temp = this.index;
            this.index = empty(down).index;
            empty(down).index = temp;
        } else if (empty(left)) {
            var temp = this.index;
            this.index = empty(left).index;
            empty(left).index = temp;
        } else if (empty(right)) {
            var temp = this.index;
            this.index = empty(right).index;
            empty(right).index = temp;
        }

        // 重新绘制九宫格
        draw();

        // 判断是否获胜
        win();
    })

    // 开始游戏函数，div乱序摆放并开始计时
    function start() {
        var p = [];
        var temp;
        var flag = true;
        for (var i = 0; i < 9; i++) {
            flag = true;
            temp = parseInt(Math.random() * 9);
            for (var j = 0; j < p.length; j++) {
                if (p[j] == temp) {
                    flag = false;
                    i--;
                    break;
                }
            }
            if (flag) {
                p.push(temp);
            }
        }
        for (var i = 0; i < p.length; i++) {
            $div[i].index = p[i];
        }
        draw();
    }

    // 判断获胜的函数
    function win() {
        var flag = true;
        for (var i = 1; i < $div.length; i++) {
            if ($div[i].innerText - 1 != $div[i].index) {
                flag = false;
                break;
            }
        }
        for (var i = 0; i < $div.length; i++) {
            console.log($div[i].innerText + " " + $div[i].index)
        }
        if (flag) {
            alert("Victory！");
            clearInterval(timer);
        }
    }

    // 判断当前索引的div是否为空
    function empty(x) {
        for (var i = 0; i < $div.length; i++) {
            if ($div[i].index == x) {
                if ($div[i].innerText == 0)
                    return $div[i];
            }
            return false;
        }
    }

    // 根据各个div的index属性绘制九宫格div
    function draw() {
        for (var i = 0; i < $div.length; i++) {
            $div[i].style.top = 151 * parseInt($div[i].index / 3) + 1 + "px";
            $div[i].style.left = 151 * ($div[i].index % 3) + 1 + "px";
        }
    }

})