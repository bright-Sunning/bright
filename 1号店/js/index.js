//  设置分类菜单左侧小图标
var list = document.getElementsByClassName("list");
var y = 5;
for (var i = 0; i < 4; i++) {
    list[i].setAttribute("style", "background-position: 5px " + y + "px");
    y -= 43;
}
for (var i = 4; i < list.length; i++) {
    list[i].setAttribute("style", "background-position: 5px " + y + "px");
    y -= 38;
}

var p = 0;
var point = document.getElementsByClassName("point");
var backImg = document.getElementsByClassName("categories-middle")[0];
for (var i = 0; i < point.length; i++) {
    point[i].onmouseover = function(i) {
        for (var j = 0; j < point.length; j++)
            point[j].setAttribute("style", "background-color:#ccc");
        this.setAttribute("style", "background-color:#fe3c3c");
        for (var j = 0; j < point.length; j++) {
            if (this == point[j]) {
                backImg.setAttribute("style", "background-image: url('images/banner" + j + ".jpg');")
                p = j;
            }
        }
    }
}

setInterval(function() {
    for (var i = 0; i < point.length; i++)
        point[i].setAttribute("style", "background-color:#ccc");
    p++;
    if (p >= point.length)
        p = 0;
    point[p].setAttribute("style", "background-color:#fe3c3c");
    backImg.setAttribute("style", "background-image: url('images/banner" + p + ".jpg');")
}, 1000)