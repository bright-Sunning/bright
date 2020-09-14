var bg = ['#d06503', '#e9931a', '#1691be', '#166ba2', '#1b3647', '#152836', '#152836'];
var li = document.getElementsByTagName('li');
for (var i = 1; i < li.length; i++) {
    li[i].style.background = bg[i - 1];
}

var flag = true;
li[0].onclick = function() {
    if (flag) {
        flag = false;
        for (var i = 1; i < li.length; i++) {
            li[i].style.display = 'block';
        }
    } else {
        flag = true;
        for (var i = 1; i < li.length; i++) {
            li[i].style.display = 'none';
        }
    }

}