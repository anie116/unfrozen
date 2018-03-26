//設定倒數秒數
var t = 2018;
//地圖移動
var m = 0;
//顯示倒數秒數
function showYear(){
    t -= 1;
    document.getElementById('showYear').innerHTML= t;
    if(t>=1945){
      setTimeout("showYear()",100);
      if(m==0){
           mapAnimate();
        }
    }else{
        t=1945;
        document.getElementById('showYear').innerHTML= t;
        setTimeout("location.href='#teaser';",2000);
    }
}
function mapAnimate(){
    $("#nasa-animation").css({"animation":"nasazoom 8s  both"});
    // $("#nasa-animation").css({"transform":"translate(  -2545px ,570px) scale(4)"});
    m++;
}