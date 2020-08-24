  // 获取视频对象并给播放控件设置宽度
  var video = document.getElementById("video");
  video.oncanplay = function() {
      start();
  }
  start();

  function start() {
      document.getElementsByClassName("play")[0].style.width = video.videoWidth + "px";
      // 播放按钮
      document.querySelector(".btn").onclick = function() {
          if (video.paused) {
              document.querySelector(".btn").style.backgroundImage = 'url("img/pause.png")';
              video.play();
          } else {
              document.querySelector(".btn").style.backgroundImage = 'url("img/play.png")';
              video.pause();
          }
      }

      // 播放时间设置
      upTime();
      setInterval(upTime, 1000)

      function upTime() {
          var c = video.currentTime;
          var d = video.duration;
          document.querySelector(".current").innerHTML = parseInt(c / 60) + ":" + parseInt(c % 60);
          document.querySelector(".total").innerHTML = parseInt(d / 60) + ":" + parseInt(d % 60);
      }

      //进度条宽度设置
      document.querySelector(".bar").style.width = video.videoWidth * 0.4 + "px";

      // 进度条随播放变化
      setInterval(progress, 100)

      function progress() {
          var d = video.duration;
          var c = video.currentTime;
          document.querySelector(".progress").style.width = c / d * 100 - 10 + "%";
      }

      // 点击进度条快进
      var prog = document.querySelector(".progress");
      var bar = document.querySelector(".bar");
      var circle = document.querySelector(".bar .circle");
      bar.onclick = function(e) {
          var distance = e.clientX - circle.offsetLeft;
          video.currentTime += distance / video.videoWidth * video.duration;
          prog.style.width = parseInt(prog.style.width) + parseInt(distance) - 8 + "px";
      }

      // 调节音量
      var v = document.querySelector(".voice");
      var vprog = document.querySelector(".voice .progress");
      v.style.width = video.videoWidth * 0.1 + "px";
      v.onclick = function(e) {
          var distance = e.clientX - v.offsetLeft;
          video.volume = distance / parseInt(v.style.width);
          vprog.style.width = parseInt(distance) - 9 + "px";
      }

      // 全屏
      document.querySelector(".fullScreen").onclick = function() {
          video.requestFullscreen();
      }
  }