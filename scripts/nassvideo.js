//設定倒數秒數
var t = 2018;
//顯示倒數秒數
function showYear(){
    t -= 1;
    document.getElementById('showYear').innerHTML= t;
    var video = document.getElementById("nasa");
    video.play();
    video.playbackRate = 1;
    if(t>=1945){
      setTimeout("showYear()",100);

    }else{
        t=1945;
        document.getElementById('showYear').innerHTML= t;
        setTimeout("location.href='#teaser';",2000);
    }
    
}
