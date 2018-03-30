//設定倒數秒數
var t = 2018;
//地圖移動
var m = 0;
//點擊次數
var c = 0;
//顯示倒數秒數
function showYear(){
    document.getElementById('showYear').innerHTML= t;
    if(t>=1945){
      setTimeout("showYear()",100);
      if(m==0){
           mapAnimate();
        }
    }else{
        t=1945;
        c =2;
        document.getElementById('showYear').innerHTML= t;
        setTimeout("location.href='#teaser';",2000);
    }
    t -= 1;
}
function mapAnimate(){
    $("#nasa-animation").css({"animation":"nasazoom 8s  both"});
    // $("#nasa-animation").css({"transform":"translate(  -2545px ,570px) scale(4)"});
    m++;
}
$("#nasaTrigger").unbind('click').click(function(){
    $(window).scroll(function(){
        var navHeight = $("nav").height();
        var nasaTop = $("section#nasa").offset().top - navHeight;
        if( $(window).scrollTop() > nasaTop && c == 0 ){
            showYear();
            c = 1;
        }
    });
    if( c == 2){
         setTimeout("location.href='#teaser';",2000);
    }
});
