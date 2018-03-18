    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('airplaneMap'), {
          zoom: 14,
          center: new google.maps.LatLng(25.04658,  121.52264),
          disableDefaultUI: true,
          mapTypeId: 'roadmap'
        });
        var iconBase = '';
        var icons = {
          g: {
            icon: '../images/marker.png'
          }
        };
        var features = [
          {
            address:"臺灣總督府",
            position: new google.maps.LatLng(25.04008, 121.51195),
            type: 'circle',
            inf:"臺灣總督府及其周邊官方廳舍，投擲 70 顆 1000 磅的 GP 通用炸彈，2 顆擊中了總督府廳舍的北角、8 顆成串地擊穿政府辦公房舍、53 顆擊中公共建築物並且冒出火花來，另有 7 顆落在商業區,濃煙往上竄至 800 英呎的高度。<br>總督府正前左方出現兩個大坑，前方大馬路挨了 3 個大炸彈，正門入口處傾斜搗毀，後門由台灣銀行到高等法院之間,出現一個個大坑洞，總督府完全失去對外聯絡機能。"
          },  {
            address:"民政長官官邸",
            position: new google.maps.LatLng(25.04035, 121.51568),
            type: 'circle',
            inf:"被炸燬(位於今總統府左前方的新公園西邊，與臺北賓館隔著公園相對)"
          }, 
           {
            address:"臺灣電力株式會社、臺灣總督府圖書館",
            position: new google.maps.LatLng(25.04008, 121.51195),
            type: 'circle',
            inf:"被炸燬，現址為廉政署(原國防部博愛大廈，臺北市中正區博愛路 166 號 )"
          },
          {
            address:"臺灣總督府度量衡所",
            position: new google.maps.LatLng(25.03905,121.51475),
            type: 'circle',
            inf:"被炸得殘破不堪(三軍球場位於總統府前，介於凱達格蘭大道與北一女中之間，現在已拆除改建為介壽公園。"
          },
          {
            address:"台灣總督官邸",
            position: new google.maps.LatLng(25.04015,121.51675),
            type: 'circle',
            inf:"現今的臺北賓館(臺北市中正區黎明裡凱達格蘭大道 1號)。"
          }, 
          {
            address:"臺灣軍司令部",
            position: new google.maps.LatLng(25.03736,121.51082),
            type: 'circle',
            inf:"建物傾毀，現場約 10 個彈坑落點，現今的國防部後備司令部(亦曾為警備總部。臺北市中正區博愛路 172 號)"
          }, 
          {
            address:"臺灣總督府高等法院",
            position: new google.maps.LatLng(25.03798,121.51188),
            type: 'circle',
            inf:"現今為今司法大廈(臺北市中正區重慶南路一段 124號)"
          }, 
          {
            address:"臺北帝國大學醫學部附屬醫院",
            position: new google.maps.LatLng(25.04162,121.51728),
            type: 'circle',
            inf:"現今的台大醫院，當年的臺北帝國大學醫學部附屬醫院(臺北市中正區常德街 1號)台大醫院被投下了 8 個五百公斤的燒夷彈。"
          }, {
            address:"臺灣步兵第一聯隊、山炮兵第 48 聯隊基地",
            position: new google.maps.LatLng(25.03563,121.51975),
            type: 'circle',
            inf:"現今的自由廣場，當年臺灣步兵第一聯隊、山炮兵第 48 聯隊基地(臺北市中正區中山南路 21 號)"
          }, {
            address:"台灣鐵道飯店",
            position: new google.maps.LatLng(25.04624,121.51529),
            type: 'circle',
            inf:"現在是新光三越，佔地 3,069 坪的臺灣鐵道飯店全被炸燬,現址為新光三越大樓(臺北市中正區忠孝西路一段 66 號)，是日治時期台灣高級旅館。"
          }, {
            address:"臺北第一女高",
            position: new google.maps.LatLng(25.03812,121.51394),
            type: 'circle',
            inf:"現今為北一女(臺北市中正區重慶南路一段 165 號)被炸彈正襲，全校滿目瘡痍,校舍嚴重受損,特別是東南角游泳池(今立法院康園餐廳所在),留下巨大的彈坑校長伊藤仙藏在巡查校務時不幸殉職,也有老師因此喪命。"
          }, {
            address:"臺灣總督府臺北師範學校(師範學校)",
            position: new google.maps.LatLng(25.0356,121.51429),
            type: 'circle',
            inf:"現今為市北師(台北市立師範學院)(臺北市中正區愛國西路 1 號)師範學校被炸彈正襲，校舍幾乎全毀。"
          }, {
            address:"臺北州立臺北第一中學校(臺北一中)",
            position: new google.maps.LatLng(25.03111,121.51218),
            type: 'circle',
            inf:"現今為建中(臺北市南海路 56號)。臺北一中當時一枚炸彈與兩枚燒夷彈直接命中學校，造成了該紅樓校舍建築大部分毀損，該毀損不但造成紅樓校舍無法使用，也讓戰後復學的建國中學學生借用他校校舍。"
          }, {
            address:"私立成淵中學",
            position: new google.maps.LatLng(25.05936,121.51836),
            type: 'circle',
            inf:"現今為臺北市立成淵高級中學(臺北市大同區承德路二段 235號)成淵中學二層木造校舍因美機大舉轟炸中彈焚燬。"
          }, {
            address:"蓬萊町大聖堂",
            position: new google.maps.LatLng(25.05724,121.51488),
            type: 'circle',
            inf:"現今的民生西路天主堂(臺北市大同區民生西路 245 號)蓬萊町大聖堂，日治時代台北市內規模最為宏偉的建築之一，轟炸時教堂被炸開，三十公尺高的鐘樓被炸得粉碎，守在裡面的日本防護隊班長圓山太郎，被炸到屍骨無存，在此避難的民眾嚴重傷亡。"
          
          }, {
            address:"臺北驛(第三代台北車站)",
            position: new google.maps.LatLng(25.04873,121.51423),
            type: 'circle',
            inf:"現今的台北車站(北平西路 3 號、忠孝西路一段 49 號臺北捷運) 美軍轟炸機原本要轟炸台北車站，不過炸彈落點偏南，結果擊中台灣鐵道飯店。"
          
          }
          , {
            address:"龍山寺",
            position: new google.maps.LatLng(25.03716,121.51488),
            type: 'circle',
            inf:"龍山寺(臺北市萬華區廣州街 211 號)龍山寺被炸全毀,戰後才修復,包括正殿、左廊均被炸燬，置於寺中的黃土水雕塑作品「釋迦出山」原作也焚燬於這次大空襲。唯一尚幸者為作品之石膏原模仍存,現藏臺北市立美術館。"
          
          }, {
            address:"台北盆地淡水河左岸",
            position: new google.maps.LatLng(25.05786,121.49943),
            type: 'circle',
            inf:"現今為三重蘆洲一帶，包含當時的一座日軍高射砲陣地，現為空軍三重一村(新北市三重區正義南路 86 巷)"
          
          }
          
          
     
        ];
        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }
