$(document).ready(function(){
	

	function resizeAction(){
		if( $(window).width() < 768 ){
			var mapDescribeObj = $(".map-describe");
			$(".map-describe").remove();
			$("section#map_area .content").find(".col-sm-5").html(mapDescribeObj);
		}else{
			var mapDescribeObj = $(".map-describe");
			$(".map-describe").remove();
			$(mapDescribeObj).insertAfter(".map-area");
		}

		active();
	}



	function active(){

		//點擊下一步按鈕
		mapCount = 0 ;
		$("#map-button").unbind( "click" ).click(function(e){
			e.preventDefault();
			$(".map-area img").removeClass("map-rotate");
			$(".map-point").eq(1).css({"opacity":"0","transition":"0s"});
			$(".map-point").eq(2).css({"opacity":"0","transition":"0s"});
			$(".map-point").eq(3).css({"opacity":"0","transition":"0s"});

			$(".map-point").eq(0).css({"transform":"scale(0)","opacity":"0","transition":"0s"});
			switch (mapCount) {
				case 0:
					title = "當年的臺灣總督府，現今為總統府";
					p = "臺灣總督府及其周邊官方廳舍，投擲 70 顆 1000 磅的 GP 通用炸彈，2 顆擊中了總督府 廳舍的北角、8 顆成串地擊穿政府辦公房舍、53 顆擊中公共建築物並且冒出火花來， 另有 7 顆落在商業區，濃煙往上竄至 800 英尺的高度。<br>總督府正前左方出現兩個大坑，前方大馬路挨了 3 個大炸彈，正門入口處傾斜搗毀，後門由台灣銀行到高等法院之間,出現一個個大坑洞，總督府完全失去對外聯絡機能。";
					if( $(window).width() > 767){
						// transformStr ="translate(320px, -350px) scale(1)";
						transformStr = "translate(190px, -260px) scale(.75)";
					}else{
						transformStr ="translate(370px, -450px) scale(.75)";
					}		
				 break;
				case 1:
					title = "民政長官官邸";
					p = "被炸毀。<br>位於今總統府左前方的新公園西邊，與臺北賓館隔著公園相對。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(160px, -320px) scale(1)";
						transformStr = "translate(80px, -250px) scale(.75";
					}else{
						transformStr = "translate(265px, -350px) scale(.75)";
					}				
				 break;
				case 2:
					title = "臺灣電力株式會社、臺灣總督府圖書館";
					p = "被炸毀。<br>現址為廉政署(原國防部博愛大廈)，位於台北市中正區博愛路 166 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(375px, -310px) scale(1)";
						transformStr = "translate(235px, -235px) scale(.75)";
					}else{
						transformStr = "translate(420px, -335px) scale(.75)";
					}	
				 break;
				case 3:
					title = "臺灣總督府度量衡所";
					p = "被炸得殘破不堪。<br>介於凱達格蘭大道與北一女中之間，現為介壽公園。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(200px, -385px) scale(1)";
						transformStr = "translate(100px, -285px) scale(.75)";
					}else{
						transformStr = "translate(280px, -385px) scale(.75)";
					}
				 break;
				case 4:
					title = "台灣總督官邸";
					p = "被炸。<br>現今的臺北賓館，位於台北市中正區凱達格蘭大道 1 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(100px, -335px) scale(1)";
						transformStr = "translate(25px, -255px) scale(.75)";
					}else{
						transformStr = "translate(210px, -355px) scale(.75)";
					}	
				 break;
				case 5:
					title = "臺灣軍司令部";
					p = "被炸。<br>建物傾毀，現場約10個彈坑落點。<br>現今的國防部後備司令部(亦曾為警備總部)，位於台北市中正區博愛路 172 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(390px, -500px) scale(1)";
						transformStr = "translate(250px, -380px) scale(.75)";
					}else{
						transformStr = "translate(425px, -500px) scale(.75)";
					}
				 break;
				case 6:
					title = "臺灣總督府高等法院";
					p = "被炸。<br>現今為司法大廈，位於台北市中正區重慶南路一段 124 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(320px, -455px) scale(1)";
						transformStr = "translate(190px, -345px) scale(.75)";
					}else{
						transformStr = "translate(375px, -440px) scale(.75)";
					}
				 break;
				case 7:
					title = "當年的臺北帝國大學醫學部附屬醫院，現今的台大醫院";
					p = "臺北帝大被投下了 8 顆五百公斤的燒夷彈。<br>現址為台北市中正區常德街 1 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(70px, -255px) scale(1)";
						transformStr = "translate(10px, -180px) scale(.75)";
					}else{
						transformStr = "translate(185px, -290px) scale(.75)";
					}
				 break;
				case 8:
					title = "當年的臺灣步兵第一聯隊、山炮兵第 48 聯隊基地，現今的自由廣場";
					p = "現址為台北市中正區中山南路 21 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(15px, -545px) scale(1)";
						transformStr = "translate(-40px, -395px) scale(.75)";
					}else{
						transformStr = "translate(145px, -490px) scale(.75)";
					}
				 break;
				case 9:
					title = "台灣鐵道飯店，現在是新光三越大樓";
					p = "佔地 3,069 坪的臺灣鐵道飯店全被炸毀，是日治時期台灣高級旅館。<br>位於台北市中正區忠孝西路一段 66 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(145px, -45px) scale(1)";
						transformStr = "translate(65px, -30px) scale(.75)";
					}else{
						transformStr = "translate(245px, -140px) scale(.75)";
					}
				 break;
				case 10:
					title = "當時的臺北第一女高，現今為北一女";
					p = "被炸彈正襲，全校滿目瘡痍，校舍嚴重受損，特別是東南角游泳池(今立法院康園餐廳所在)，留下巨大的彈坑。校長伊藤仙藏在巡查校務時不幸殉職，也有老師因此喪命。<br>現址為臺北市中正區重慶南路一段 165 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(225px, -475px) scale(1)";
						transformStr = "translate(120px, -345px) scale(.75)";
					}else{
						transformStr = "translate(295px, -455px) scale(.75)";
					}
				 break;
				case 11:
					title = "當時的臺灣總督府臺北師範學校(師範學校)，現今為台北市立師範學院師範學院";
					p = "被炸彈正襲，校舍幾乎全毀。<br>現址為台北市中正區愛國西路 1 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(200px, -555px) scale(1)";
						transformStr = "translate(100px, -395px) scale(.75)";
					}else{
						transformStr = "translate(295px, -505px) scale(.75)";
					}
				 break;
				case 12:
					title = "當時的臺北州立臺北第一中學校(臺北一中)，現今為建中";
					p = "臺北一中當時一枚炸彈與兩枚燒夷彈直接命中學校，造成了該紅樓校舍建築大部分毀損，該毀損不但造成紅樓校舍無法使用，也讓戰後復學的建國中學學生借用他校校舍。<br>現址為台北市南海路 56 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(300px, -820px) scale(1)";
						transformStr = "translate(180px, -620px) scale(.75)";
					}else{
						transformStr = "translate(360px, -750px) scale(.75)";
					}
				 break;
				case 13:
					title = "私立成淵中學，現今為臺北市立成淵高級";
					p = "成淵中學二層木造校舍因美機大舉轟炸中彈焚燬。<br>現址為台北市大同區承德路二段 235 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(-20px, 620px) scale(1)";
						transformStr = "translate(-50px, 470px) scale(.75)";
					}else{
						transformStr = "translate(120px, 350px) scale(.75)";
					}
				 break;
				case 14:
					title = "現今的民生西路天主堂，當年的蓬萊町大聖堂";
					p = "蓬萊町大聖堂，日治時代台北市內規模最為宏偉的建築之一，轟炸時教堂被炸開，三十公尺高的鐘樓被炸得粉碎，守在裡面的日本防護隊班長圓山太郎，被炸到屍骨無存，在此避難的民眾嚴重傷亡。<br>現址為台北市大同區民生西路 245 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(140px, 585px) scale(1)";
						transformStr = "translate(60px, 435px) scale(.75)";
					}else{
						transformStr = "translate(240px, 290px) scale(.75)";
					}
				 break;
				case 15:
					title = "臺北驛(第三代台北車站)，現今的台北車站";
					p = "美軍轟炸機原本要轟炸台北車站，不過炸彈落點偏南，結果擊中台灣鐵道飯店。<br>現址為台北市中正區北平西路 3 號、忠孝西路一段 49 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(130px, 150px) scale(1)";
						transformStr = "translate(60px, 115px) scale(.75)";
					}else{
						transformStr = "translate(240px, -10px) scale(.75)";
					}
				 break;
				case 16:
					title = "龍山寺";
					p = "龍山寺被炸全毀，戰後才修復，包括正殿、左廊均被炸毀，置於寺中的黃土水雕 塑作品「釋迦出山」原作也焚燬於這次大空襲。唯一尚幸者為作品之石膏原模仍 存，現藏臺北市立美術館。<br>現址為台北市萬華區廣州街 211 號。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(875px, -490px) scale(1)";
						transformStr = "translate(610px, -370px) scale(.75)";
					}else{
						transformStr = "translate(795px, -495px) scale(.75)";	
					}
				 break;
				case 17:
					title = "台北盆地淡水河左岸";
					p = "現今為三重蘆洲一帶，包含當時的一座日軍高射砲陣地，現為空軍三重一村。<br>現址為新北市三重區正義南路 86 巷。";
					if( $(window).width() > 767 ){
						// transformStr = "translate(825px, 630px) scale(1)";
						transformStr = "translate(600px, 420px) scale(.75)";
					}else{
						transformStr = "translate(755px, 360px) scale(.75)";
					}
				 break;          
				default :
					title = "當年的臺灣總督府，現今為總統府";
					p = "臺灣總督府及其周邊官方廳舍，投擲 70 顆 1000 磅的 GP 通用炸彈，2 顆擊中了總督府 廳舍的北角、8 顆成串地擊穿政府辦公房舍、53 顆擊中公共建築物並且冒出火花來， 另有 7 顆落在商業區，濃煙往上竄至 800 英尺的高度。<br>總督府正前左方出現兩個大坑，前方大馬路挨了 3 個大炸彈，正門入口處傾斜搗毀，後門由台灣銀行到高等法院之間,出現一個個大坑洞，總督府完全失去對外聯絡機能。";
					if( $(window).width() > 767){
						// transformStr ="translate(320px, -350px) scale(1)";
						transformStr = "translate(190px, -260px) scale(.75)";
					}else{
						transformStr ="translate(370px, -450px) scale(.75)";
					}
					mapCount = 0;
				 break;
			}
			if($(window).width()>767){
				$(".map-describe").css({"width":"400px"});
			}
			$(".map-describe h5.heading").animate({"opacity":"0"},0,function(){
				$(".map-describe h5.heading").text(title);
				$(".map-describe p").html(p);
				$(".map-describe h5.heading").animate({"opacity":"1"},500);
			});	

			$(".map-point").eq(0).css({"transform":"scale(1)","opacity":"1","transition":".5s .5s"});
			$(".map-area img").css({"transition":".8s","transform": transformStr });

			mapCount ++ ;
		}); //end click $("#map-button")

		
		//點擊開始按鈕(default)
		$("#map-reset-button").unbind( "click" ).click(function(e){
			e.preventDefault();
			$(".map-area img").removeClass("map-rotate");
			$(".map-point").eq(1).css({"opacity":"0"});
			$(".map-point").eq(2).css({"opacity":"0"});
			$(".map-point").eq(3).css({"opacity":"0"});
			mapCount = 0;
			title = "台北大空襲空拍圖";
			p = "1945 年 5 月 31 日，早上十點， 116 架美軍 B-24 轟炸機、57 架 B25 轟炸機、13 架P38 戰鬥機、6 架 P51 戰鬥機，空襲臺北，進行為時約三小時的密集式轟炸，史稱「台北大空襲」。<br>其中 103 架 B-24 在臺北上空，數梯次交錯轟炸所投下約 1400 枚炸彈，其威力持續在大火中燃燒了一個晚上。<br><br>「轟炸機先由台北盆地東側的總督府，台大醫院開始轟炸，當炸彈落下後立刻燒起很高的火焰，緊接著捲起黑色黃褐色濃煙，景象猶如『羅馬城末日』，一直燒到深夜。」—臺大口腔科教授張寬敏回憶，空襲時二十歲，是臺北帝大醫學部(今台大醫學院)二年級學生<br><br>「我們可以看到炸彈像下雨一般的掉下來。然後就是一陣陣的閃光和聲響，大地搖撼起來了。」「臺北那邊有很多地方在冒煙。總督府的火焰不但沒有熄滅，反而越燒越熾烈......。到了黃昏，總督府還在燃燒，整個天空都變成鮮紅了，那火焰一直燒到入夜以後。」—作家鄭清文回憶，當時就讀私立臺北國民中學校(今大同高中)";
			$(".map-area img").css({"transition":".5s","transform":"translate(0px , -80px) scale(.55)"});
			if($(window).width()>767){
				$(".map-describe").css({"width":"500px"});
			}
			$(".map-describe h5.heading").animate({"opacity":"0"},0,function(){
				$(".map-describe h5.heading").text(title);
				$(".map-describe p").html(p);
				$(".map-describe h5.heading").animate({"opacity":"1"},500);
			});	
			$(".map-point").eq(0).css({"transform":"scale(0)","opacity":"0","transition":"0s"});
			$(".map-point").eq(1).css({"opacity":"1","transition":".5s .5s"});
			$(".map-point").eq(2).css({"opacity":"1","transition":".5s 1s"});
			$(".map-point").eq(3).css({"opacity":"1","transition":".5s 1.5s"});
			mapPointTrigger = 1;
		});
	}

	function windowScroll(){
		//地圖動畫觸發
		$(".map-area img.map-rotate").css("animation-play-state","paused");
		var actionTop =  $("section#map_area").offset().top - 35;		
		$(window).scroll(function(){
			if( $(window).scrollTop() > actionTop ){
				$(".map-area img.map-rotate").css("animation-play-state","running");
				if( mapPointTrigger == 0){
					$(".map-point").eq(1).css({"opacity":"1","transition":".7s 5s"});
					$(".map-point").eq(2).css({"opacity":"1","transition":".7s 5.7s"});
					$(".map-point").eq(3).css({"opacity":"1","transition":".7s 6.4s"});
					mapPointTrigger = 1;
				}
				
			}
		});
	}
	
	mapPointTrigger = 0;
	resizeAction();
	active();
	windowScroll();
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		// alert("使用行動裝置!");
	}
	else {
	    // alert("使用桌上型裝置!");
	    $(window).resize(function(){
			resizeAction();
			windowScroll();
		});
	}
	
});