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

		// active();
	}

	function active(){
		mapCount = 0 ;
		$("#map-button").click(function(e){
			e.preventDefault();
			$(".map-point").css({"transform":"scale(0)","opacity":"0","transition":"0s"});
			switch (mapCount) {
				case 0:
					title = "當年的臺灣總督府，現今為總統府";
					p = "臺灣總督府及其周邊官方廳舍，投擲 70 顆 1000 磅的 GP 通用炸彈，2 顆擊中了總督府 廳舍的北角、8 顆成串地擊穿政府辦公房舍、53 顆擊中公共建築物並且冒出火花來， 另有 7 顆落在商業區，濃煙往上竄至 800 英尺的高度。<br>總督府正前左方出現兩個大坑，前方大馬路挨了 3 個大炸彈，正門入口處傾斜搗毀，後門由台灣銀行到高等法院之間,出現一個個大坑洞，總督府完全失去對外聯絡機能。";
					if( $(window).width() > 767){
						transformStr ="translate(570px, -510px) scale(1.5)";
					}else{
						transformStr ="translate(755px, -750px) scale(1.5)";
					}		
				 break;
				case 1:
					title = "民政長官官邸";
					p = "被炸毀。<br>位於今總統府左前方的新公園西邊，與臺北賓館隔著公園相對。";
					if( $(window).width() > 767 ){
						transformStr = "translate(331px, -482px) scale(1.5)";
					}else{
						transformStr = "translate(516px, -722px) scale(1.5)";
					}				
				 break;
				case 2:
					title = "臺灣電力株式會社、臺灣總督府圖書館";
					p = "被炸毀。<br>現址為廉政署(原國防部博愛大廈)，位於台北市中正區博愛路 166 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(655px, -465px) scale(1.5)";
					}else{
						transformStr = "translate(840px, -705px) scale(1.5)";
					}	
				 break;
				case 3:
					title = "臺灣總督府度量衡所";
					p = "被炸得殘破不堪。<br>介於凱達格蘭大道與北一女中之間，現為介壽公園。";
					if( $(window).width() > 767 ){
						transformStr = "translate(380px, -575px) scale(1.5)";
					}else{
						transformStr = "translate(565px, -815px) scale(1.5)";
					}
				 break;
				case 4:
					title = "台灣總督官邸";
					p = "被炸。<br>現今的臺北賓館，位於台北市中正區凱達格蘭大道 1 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(240px, -500px) scale(1.5)";
					}else{
						transformStr = "translate(425px, -740px) scale(1.5)";
					}	
				 break;
				case 5:
					title = "臺灣軍司令部";
					p = "被炸。<br>建物傾毀，現場約10個彈坑落點。<br>現今的國防部後備司令部(亦曾為警備總部)，位於台北市中正區博愛路 172 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(670px, -730px) scale(1.5)";
					}else{
						transformStr = "translate(855px, -970px) scale(1.5)";
					}
				 break;
				case 6:
					title = "臺灣總督府高等法院";
					p = "被炸。<br>現今為司法大廈，位於台北市中正區重慶南路一段 124 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(570px, -683px) scale(1.5)";
					}else{
						transformStr = "translate(755px, -923px) scale(1.5)";
					}
				 break;
				case 7:
					title = "當年的臺北帝國大學醫學部附屬醫院，現今的台大醫院";
					p = "臺北帝大被投下了 8 顆五百公斤的燒夷彈。<br>現址為台北市中正區常德街 1 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(200px, -383px) scale(1.5)";
					}else{
						transformStr = "translate(385px, -623px) scale(1.5)";
					}
				 break;
				case 8:
					title = "當年的臺灣步兵第一聯隊、山炮兵第 48 聯隊基地，現今的自由廣場";
					p = "現址為台北市中正區中山南路 21 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(100px, -800px) scale(1.5)";
					}else{
						transformStr = "translate(285px, -1040px) scale(1.5)";
					}
				 break;
				case 9:
					title = "台灣鐵道飯店，現在是新光三越大樓";
					p = "佔地 3,069 坪的臺灣鐵道飯店全被炸毀，是日治時期台灣高級旅館。<br>位於台北市中正區忠孝西路一段 66 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(315px, -45px) scale(1.5)";
					}else{
						transformStr = "translate(500px, -285px) scale(1.5)";
					}
				 break;
				case 10:
					title = "當時的臺北第一女高，現今為北一女";
					p = "被炸彈正襲，全校滿目瘡痍，校舍嚴重受損，特別是東南角游泳池(今立法院康園餐廳所在)，留下巨大的彈坑。校長伊藤仙藏在巡查校務時不幸殉職，也有老師因此喪命。<br>現址為臺北市中正區重慶南路一段 165 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(425px, -675px) scale(1.5)";
					}else{
						transformStr = "translate(610px, -915px) scale(1.5)";
					}
				 break;
				case 11:
					title = "當時的臺灣總督府臺北師範學校(師範學校)，現今為台北市立師範學院師範學院";
					p = "被炸彈正襲，校舍幾乎全毀。<br>現址為台北市中正區愛國西路 1 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(390px, -820px) scale(1.5)";
					}else{
						transformStr = "translate(575px, -1060px) scale(1.5)";
					}
				 break;
				case 12:
					title = "當時的臺北州立臺北第一中學校(臺北一中)，現今為建中";
					p = "臺北一中當時一枚炸彈與兩枚燒夷彈直接命中學校，造成了該紅樓校舍建築大部分毀損，該毀損不但造成紅樓校舍無法使用，也讓戰後復學的建國中學學生借用他校校舍。<br>現址為台北市南海路 56 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(540px, -1220px) scale(1.5)";
					}else{
						transformStr = "translate(725px, -1460px) scale(1.5)";
					}
				 break;
				case 13:
					title = "私立成淵中學，現今為臺北市立成淵高級";
					p = "成淵中學二層木造校舍因美機大舉轟炸中彈焚燬。<br>現址為台北市大同區承德路二段 235 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(50px, 924px) scale(1.5)";
					}else{
						transformStr = "translate(235px, 684px) scale(1.5)";
					}
				 break;
				case 14:
					title = "現今的民生西路天主堂，當年的蓬萊町大聖堂";
					p = "蓬萊町大聖堂，日治時代台北市內規模最為宏偉的建築之一，轟炸時教堂被炸開，三十公尺高的鐘樓被炸得粉碎，守在裡面的日本防護隊班長圓山太郎，被炸到屍骨無存，在此避難的民眾嚴重傷亡。<br>現址為台北市大同區民生西路 245 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(295px, 885px) scale(1.5)";
					}else{
						transformStr = "translate(480px, 645px) scale(1.5)";
					}
				 break;
				case 15:
					title = "臺北驛(第三代台北車站)，現今的台北車站";
					p = "美軍轟炸機原本要轟炸台北車站，不過炸彈落點偏南，結果擊中台灣鐵道飯店。<br>現址為台北市中正區北平西路 3 號、忠孝西路一段 49 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(287px, 230px) scale(1.5)";
					}else{
						transformStr = "translate(472px, -10px) scale(1.5)";
					}
				 break;
				case 16:
					title = "龍山寺";
					p = "龍山寺被炸全毀，戰後才修復，包括正殿、左廊均被炸毀，置於寺中的黃土水雕 塑作品「釋迦出山」原作也焚燬於這次大空襲。唯一尚幸者為作品之石膏原模仍 存，現藏臺北市立美術館。<br>現址為台北市萬華區廣州街 211 號。";
					if( $(window).width() > 767 ){
						transformStr = "translate(1410px, -728px) scale(1.5)";
					}else{
						transformStr = "translate(1595px, -968px) scale(1.5)";	
					}
				 break;
				case 17:
					title = "台北盆地淡水河左岸";
					p = "現今為三重蘆洲一帶，包含當時的一座日軍高射砲陣地，現為空軍三重一村。<br>現址為新北市三重區正義南路 86 巷。";
					if( $(window).width() > 767 ){
						transformStr = "translate(1370px, 925px) scale(1.5)";
					}else{
						transformStr = "translate(1555px, 685px) scale(1.5)";
					}
				 break;          
				default :
					title = "當年的臺灣總督府，現今為總統府";
					p = "臺灣總督府及其周邊官方廳舍，投擲 70 顆 1000 磅的 GP 通用炸彈，2 顆擊中了總督府 廳舍的北角、8 顆成串地擊穿政府辦公房舍、53 顆擊中公共建築物並且冒出火花來， 另有 7 顆落在商業區，濃煙往上竄至 800 英尺的高度。<br>總督府正前左方出現兩個大坑，前方大馬路挨了 3 個大炸彈，正門入口處傾斜搗毀，後門由台灣銀行到高等法院之間,出現一個個大坑洞，總督府完全失去對外聯絡機能。";
					if( $(window).width() > 767){
						transformStr ="translate(570px, -510px) scale(1.5)";
					}else{
						transformStr ="translate(755px, -750px) scale(1.5)";
					}
					mapCount = 0;
				 break;
			}
			$(".map-describe h5.heading").animate({"opacity":"0"},0,function(){
				$(".map-describe h5.heading").text(title);
				$(".map-describe p").html(p);
				$(".map-describe h5.heading").animate({"opacity":"1"},500);
			});	

			$(".map-point").css({"transform":"scale(1)","opacity":"1","transition":".5s .5s"});
			$(".map-area img").css({"transition":".5s","transform": transformStr });

			mapCount ++ ;
		});
	}

	resizeAction();
	active();
	$(window).resize(function(){
		resizeAction();
	});
});