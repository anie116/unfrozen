$(document).ready(function(){
	var isAnimate = 0;
	function scrollLeft(){
		$('body').on("mousewheel",function(event, delta) { 
			if( $(window).width() > 767 ){ //pc
				var left = $("section#accelerator").scrollLeft(); 
				var screen = $(window).width()/2 ; 
				if( delta > 0 ){ //向上(向左)					
					if( isAnimate == 0 ){
						isAnimate =1;
						$('section#accelerator').animate({scrollLeft: left+screen }, 800,function(){
							milesBar();
							isAnimate =0;
						});
					}				
				}else{ //向下(向右)
					if( isAnimate == 0 ){
						isAnimate =1;
						$('section#accelerator').animate({scrollLeft: left-screen }, 800,function(){
							isAnimate =0;
						});
					}
				}
				event.preventDefault(); 
				return false;	
			}
			
		}); 
	}

	function moveDeviceScroll(){
		if( $(window).width() > 767 ){ //平板
			$("section#accelerator").scroll(function(){
				milesBar();
			});
		}else{ //手機
			$(window).scroll(function(){
				milesBar();
				console.log($(window).scrollTop());
			});
		}		
	}
	
	


	function position(){ //手機
		parentRelateTop = $(".d-relative").offset().top;
		s2Top = $(".s2").offset().top;
		s3Top = $(".s3").offset().top;
		s4Top = $(".s4").offset().top;
		s5Top = $(".s5").offset().top;
		s6Top = $(".s6").offset().top;
		s7Top = $(".s7").offset().top;
		s8Top = $(".s8").offset().top;
		lineheight = "calc( 100% - "+ parseInt(s2Top-parentRelateTop-70)+"px )";
		lineMilesheight = "calc( 100% - "+ parseInt(s2Top-parentRelateTop-78)+"px )";

		$(".scrollLine").css({
			"top" : s2Top-parentRelateTop-70,
			"height" : lineheight
		});
		$(".scrollLineMiles").css({
			"top" : s2Top-parentRelateTop-74,
			"height" : "8px"
		});
		$(".point > div").eq(0).find(".scrollPoint").css({
			"top": s2Top-parentRelateTop+3
		});
		$(".point > div").eq(1).find(".scrollPoint").css({
			"top": s3Top-parentRelateTop+3
		});
		$(".point > div").eq(2).find(".scrollPoint").css({
			"top": s4Top-parentRelateTop+3
		});
		$(".point > div").eq(3).find(".scrollPoint").css({
			"top": s5Top-parentRelateTop+3
		});
		$(".point > div").eq(4).find(".scrollPoint").css({
			"top": s6Top-parentRelateTop+3
		});
		$(".point > div").eq(5).find(".scrollPoint").css({
			"top": s7Top-parentRelateTop+3
		});
		$(".point > div").eq(6).find(".scrollPoint").css({
			"top": s8Top-parentRelateTop+3
		});
	}

	function windowWidth(){
		if( $(window).width() > 767 ){ //pc
			// init原點
			$("section#accelerator").scrollLeft(0);
			//initail 做一次
			if( intCount == 0){
				scrollLeft();
				intCount ++;
			}
			//移除rwd時js 建立的屬性
			$(".scrollLine").removeAttr("style");
			$(".scrollPoint").removeAttr("style");

			//movebar int
			winWidth = Math.round($(window).width()/3)*2 ;//全域變數
			s2Left = $(".s2").offset().left ; //全域變數

			point1 = $(".point > div").eq(0).find(".scrollPoint").offset().left - s2Left - 10 ;
			point2 = $(".point > div").eq(1).find(".scrollPoint").offset().left - s2Left - 10 ;
			point3 = $(".point > div").eq(2).find(".scrollPoint").offset().left - s2Left - 10 ;
			point4 = $(".point > div").eq(3).find(".scrollPoint").offset().left - s2Left - 10 ;
			point5 = $(".point > div").eq(4).find(".scrollPoint").offset().left - s2Left - 10 ;
			point6 = $(".point > div").eq(5).find(".scrollPoint").offset().left - s2Left - 10 ;
			point7 = $(".point > div").eq(6).find(".scrollPoint").offset().left - s2Left - 10 ;


			$(".scrollLineMiles").css("width", $("section#accelerator").scrollLeft() + winWidth - s2Left );

			$(".scrollLine").css({"left":s2Left});
			$(".scrollLineMiles").css({"left":s2Left-4});

		}else{ //rwd
			// init原點
			// $("html, body").animate({
			//    scrollTop: 0
			//  },function(){	
	        // });
			position();
		}
	}

	function milesBar(){
		if( $(window).width() > 767 ){ //pc
			var moveBor = $("section#accelerator").scrollLeft() + winWidth - s2Left ;

			var oldBar = $(".scrollLineMiles").width();
			
			if( $("section#accelerator").scrollLeft() >= ( $("section#accelerator .view").width() - $(window).width() ) ){
				if( finalCount == 0){
					$(".scrollLineMiles").animate({"width":"100%"},1000);
					scrollActive(7);
					finalCount = 1 ;
				}
			}else if( moveBor > oldBar ){
				$(".scrollLineMiles").animate({"width":moveBor},0);
				finalCount = 0 ;
			}

			if( moveBor > point1 && moveBor >= oldBar ){
				scrollActive(1);
			}
			if( moveBor > point2 && moveBor >= oldBar ){
				
				scrollActive(2);
			}
			if( moveBor > point3 && moveBor >= oldBar ){
				scrollActive(3);
			}
			if( moveBor > point4 && moveBor >= oldBar ){
				scrollActive(4);
			}
			if( moveBor > point5 && moveBor >= oldBar ){
				scrollActive(5);
			}
			if( moveBor > point6 && moveBor >= oldBar ){
				scrollActive(6);
			}	
		}else{ //rwd 手機
			//movebar int
			winHeight = Math.round(($(window).height()/3)*2) ;//全域變數

			var oldBar = $(".scrollLineMiles").height();
			var moveBor =	$(window).scrollTop() + winHeight - s2Top;

			if( moveBor>oldBar ){
				$(".scrollLineMiles").css({
					"height" : moveBor
				});
			}

			if( $(window).scrollTop() >=  (s2Top - winHeight +70 )){
				scrollActive(1);
			}
			if( $(window).scrollTop() >=  (s3Top - winHeight +70 )){
				scrollActive(2);
			}
			if( $(window).scrollTop() >=  (s4Top - winHeight +70 )){
				scrollActive(3);
			}
			if( $(window).scrollTop() >=  (s5Top - winHeight +70 )){
				scrollActive(4);
			}
			if( $(window).scrollTop() >=  (s6Top - winHeight +70 )){
				scrollActive(5);
			}
			if( $(window).scrollTop() >=  (s7Top - winHeight +70 )){
				scrollActive(6);
			}
			console.log("s2:",s2Top-winHeight);

			if( $(window).scrollTop() >= ( s7Top - winHeight +200 ) ){
				$(".scrollLineMiles").css({
					"height" : lineMilesheight,
					"transition":".5s"
				});
				scrollActive(7);
			}

			
			
		}

		function scrollActive(i){
			$(".point > div").eq(i-1).find(".scrollPoint").css({
				"backgroundColor" : "rgba(22,154,168,1)",
				"borderColor" : "rgba(22,154,168,1)",
				"-webkit-box-shadow" : "1px 1px 1px 3px rgba(22,154,168,1), -1px -1px 1px 3px rgba(22,154,168,1), 1px -1px 1px 3px rgba(22,154,168,1), -1px 1px 1px 3px rgba(22,154,168,1)",
				"box-shadow" :"1px 1px 1px 3px rgba(22,154,168,1), -1px -1px 1px 3px rgba(22,154,168,1), 1px -1px 1px 3px rgba(22,154,168,1), -1px 1px 1px 3px rgba(22,154,168,1)",
				"transition" : ".5s"
			},500);
			$(".point > div").eq(i-1).find(".scrollPointlineActive").css({
				"height":"100%",
				"transition" : ".5s"
			});
			$("section#accelerator .section > div").eq(i).find(".sectionContent").css({
				'opacity':'1',
				'-webkit-transform':'translateY(0px)',
				'transform':"translateY(0px)",
				'moz-transform':"translateY(0px)",
				'transition':'.5s .5s'
			});
			if( $(window).width() < 768 ){ //手機版
				$("section#accelerator .section > div").eq(i).find(".miles").animate({
					'opacity':'1',
					"left":'0'
				},500);
			}
		}
		
	}


	function device(){
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		    // alert("使用行動裝置!");
		    moveDeviceScroll();
		}
		else {
		    // alert("使用桌上型裝置!");
		    $(window).resize(function(){
				windowWidth();
			});
		}
	}

	// init
	var intCount = 0;
	var finalCount = 0;	
	device();
	windowWidth();
	milesBar();
});