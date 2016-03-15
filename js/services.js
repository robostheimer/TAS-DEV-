//'use strict';


/* Services */
//////////The Services below bring in all the data that is used within the TAS Website.  
//////////These Services are called by specific controllers when the user interaction or site decides data is necessary
//////////The majority of these services rely on AngularJS promises - more about those here: http://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/
/////////NOTE: Script uses $http.jsonp instead of $http.get because of the known CORS bug with IE9.  Using $http.jsonp is a known fix for this behavior

/////////////////////////////////HomePage/////////////////////////////////////////////
TAS_SITE.factory('HomePageCurrent', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	
	var Data = {};
	//////////populates the the Current Teachers Carousel on the homepage using the Fusion Table Api for the TAS(Multiple Years) Fusion Table
	/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	Data.getCarouselData = function() {
		var teacher = [];
		
		return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+TeacherLastName%2CTeacherFirstName%2CShipType%2C+Ship%2C+ShipUrl%2C+CruiseURL%2C+Mission%2C+CruiseDates%2C+SubjectsTaught%2C+School%2C+City%2C+State%2C+Image%2C+Grades%2C+SchoolURL%2C+WordPressURL+%2C+Year+FROM+1Xh5kWI_ZHd-PZRuPcgrV_oS13HHN6JGtRK4s75Mn+WHERE+Year=%272015%27+ORDER%20BY+TeacherLastName%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
			if (result.data.rows != undefined) {
				for (var o = 0; o < result.data.rows.length; o++) {
					var d = new Date();
					var td = d.valueOf();
					var pd = new Date(result.data.rows[o][7].split('-')[1]).valueOf();
					var prd = new Date(result.data.rows[o][7].split('-')[0]).valueOf();
					var tpd = pd.valueOf();
					
					if (td > pd) {
						teacher.push({
							lastname : result.data.rows[o][0],
							firstname : result.data.rows[o][1].replace(' ', ''),
							lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
							shiptype : result.data.rows[o][2],
							ship : result.data.rows[o][3],
							shipurl : result.data.rows[o][4],
							cruiseurl : result.data.rows[o][5],
							mission : result.data.rows[o][6],
							dates : result.data.rows[o][7],
							subjects : result.data.rows[o][8],
							school : result.data.rows[o][9],
							city : result.data.rows[o][10],
							state : result.data.rows[o][11],
							image : result.data.rows[o][12].split('?')[0],
							grades : result.data.rows[o][13],
							schoolurl : result.data.rows[o][14],
							wordpressurl : result.data.rows[o][15],
							subjects1 : result.data.rows[o][8].split('&&')[0],
							subjects2 : result.data.rows[o][8].split('&&')[1],
							school1 : result.data.rows[o][9].split('&&')[0],
							school2 : result.data.rows[o][9].split('&&')[1],
							schoolurl1 : result.data.rows[o][14].split('&&')[0],
							schoolurl2 : result.data.rows[o][14].split('&&')[1],
							//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
							hashy : $location.path().split('/')[3],
							//year:td,
							year : result.data.rows[o][16],
							hider : true,
							verb : 'was'
							//teachername :firstname+' '+lastname
						});
					} else if (td < pd && td > prd) {
						teacher.push({
							lastname : result.data.rows[o][0],
							firstname : result.data.rows[o][1].replace(' ', ''),
							lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
							shiptype : result.data.rows[o][2],
							ship : result.data.rows[o][3],
							shipurl : result.data.rows[o][4],
							cruiseurl : result.data.rows[o][5],
							mission : result.data.rows[o][6],
							dates : result.data.rows[o][7],
							subjects : result.data.rows[o][8],
							school : result.data.rows[o][9],
							city : result.data.rows[o][10],
							state : result.data.rows[o][11],
							image : result.data.rows[o][12].split('?')[0],
							grades : result.data.rows[o][13],
							schoolurl : result.data.rows[o][14],
							wordpressurl : result.data.rows[o][15],
							subjects1 : result.data.rows[o][8].split('&&')[0],
							subjects2 : result.data.rows[o][8].split('&&')[1],
							school1 : result.data.rows[o][9].split('&&')[0],
							school2 : result.data.rows[o][9].split('&&')[1],
							schoolurl1 : result.data.rows[o][14].split('&&')[0],
							schoolurl2 : result.data.rows[o][14].split('&&')[1],
							//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
							hashy : $location.path().split('/')[3],
							//year:td,
							year : result.data.rows[o][16],
							hider : true,
							verb : 'is'
							//teachername :firstname+' '+lastname
						});
					} else {
						teacher.push({
							lastname : result.data.rows[o][0],
							firstname : result.data.rows[o][1].replace(' ', ''),
							lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
							shiptype : result.data.rows[o][2],
							ship : result.data.rows[o][3],
							shipurl : result.data.rows[o][4],
							cruiseurl : result.data.rows[o][5],
							mission : result.data.rows[o][6],
							dates : result.data.rows[o][7],
							subjects : result.data.rows[o][8],
							school : result.data.rows[o][9],
							city : result.data.rows[o][10],
							state : result.data.rows[o][11],
							image : result.data.rows[o][12].split('?')[0],
							grades : result.data.rows[o][13],
							schoolurl : result.data.rows[o][14],
							wordpressurl : result.data.rows[o][15],
							subjects1 : result.data.rows[o][8].split('&&')[0],
							subjects2 : result.data.rows[o][8].split('&&')[1],
							school1 : result.data.rows[o][9].split('&&')[0],
							school2 : result.data.rows[o][9].split('&&')[1],
							schoolurl1 : result.data.rows[o][14].split('&&')[0],
							schoolurl2 : result.data.rows[o][14].split('&&')[1],
							//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
							hashy : $location.path().split('/')[3],
							//year:td,
							year : result.data.rows[o][16],
							hider : true,
							verb : 'will sail'
							//teachername :firstname+' '+lastname
						});
					}
					if (result.data.rows[o][3] == '#') {
						teacher[o].shipHider = true;
					} else {
						teacher[o].shipHider = false;
					}

				}
				teacher.lengthy = result.data.rows.length;
				return teacher;
			}
			else{
				Data.getCarouselDataError()
			}

			

		}, function(error) {
			Data.getCarouselDataError();
		});
	};
	Data.getCarouselDataError = function() {
		///grabs local backup due to error in the web-based api
		var teacher = [];

		return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
			var d = new Date();
			var year = d.getFullYear();

			if (result.data.rows != undefined) {
				for (var o = 0; o < result.data.rows.length; o++) {

					var td = d.valueOf();
					var pd = new Date(result.data.rows[o][7].split('-')[1]).valueOf();
					var prd = new Date(result.data.rows[o][7].split('-')[0]).valueOf();
					var tpd = pd.valueOf();
					if (year == result.data.rows[o][16]) {
						if (td > pd) {
							teacher.push({
								lastname : result.data.rows[o][0],
								firstname : result.data.rows[o][1].replace(' ', ''),
								lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
								shiptype : result.data.rows[o][2],
								ship : result.data.rows[o][3],
								shipurl : result.data.rows[o][4],
								cruiseurl : result.data.rows[o][5],
								mission : result.data.rows[o][6],
								dates : result.data.rows[o][7],
								subjects : result.data.rows[o][8],
								school : result.data.rows[o][9],
								city : result.data.rows[o][10],
								state : result.data.rows[o][11],
								image : result.data.rows[o][12].split('?')[0],
								grades : result.data.rows[o][13],
								schoolurl : result.data.rows[o][14],
								wordpressurl : result.data.rows[o][15],
								subjects1 : result.data.rows[o][8].split('&&')[0],
								subjects2 : result.data.rows[o][8].split('&&')[1],
								school1 : result.data.rows[o][9].split('&&')[0],
								school2 : result.data.rows[o][9].split('&&')[1],
								schoolurl1 : result.data.rows[o][14].split('&&')[0],
								schoolurl2 : result.data.rows[o][14].split('&&')[1],
								//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
								hashy : $location.path().split('/')[3],
								//year:td,
								year : result.data.rows[o][16],
								hider : true,
								verb : 'was'
								//teachername :firstname+' '+lastname
							});

						} else if (td < pd && td > prd) {
							teacher.push({
								lastname : result.data.rows[o][0],
								firstname : result.data.rows[o][1].replace(' ', ''),
								lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
								shiptype : result.data.rows[o][2],
								ship : result.data.rows[o][3],
								shipurl : result.data.rows[o][4],
								cruiseurl : result.data.rows[o][5],
								mission : result.data.rows[o][6],
								dates : result.data.rows[o][7],
								subjects : result.data.rows[o][8],
								school : result.data.rows[o][9],
								city : result.data.rows[o][10],
								state : result.data.rows[o][11],
								image : result.data.rows[o][12].split('?')[0],
								grades : result.data.rows[o][13],
								schoolurl : result.data.rows[o][14],
								wordpressurl : result.data.rows[o][15],
								subjects1 : result.data.rows[o][8].split('&&')[0],
								subjects2 : result.data.rows[o][8].split('&&')[1],
								school1 : result.data.rows[o][9].split('&&')[0],
								school2 : result.data.rows[o][9].split('&&')[1],
								schoolurl1 : result.data.rows[o][14].split('&&')[0],
								schoolurl2 : result.data.rows[o][14].split('&&')[1],
								//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
								hashy : $location.path().split('/')[3],
								//year:td,
								year : result.data.rows[o][16],
								hider : true,
								verb : 'is'

								//teachername :firstname+' '+lastname
							});

						} else {
							if (result.data.rows[o][3] == '#') {

								teacher.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1].replace(' ', ''),
									lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
									shiptype : result.data.rows[o][2],
									ship : result.data.rows[o][3],
									shipurl : result.data.rows[o][4],
									cruiseurl : result.data.rows[o][5],
									mission : result.data.rows[o][6],
									dates : result.data.rows[o][7],
									subjects : result.data.rows[o][8],
									school : result.data.rows[o][9],
									city : result.data.rows[o][10],
									state : result.data.rows[o][11],
									image : result.data.rows[o][12].split('?')[0],
									grades : result.data.rows[o][13],
									schoolurl : result.data.rows[o][14],
									wordpressurl : result.data.rows[o][15],
									subjects1 : result.data.rows[o][8].split('&&')[0],
									subjects2 : result.data.rows[o][8].split('&&')[1],
									school1 : result.data.rows[o][9].split('&&')[0],
									school2 : result.data.rows[o][9].split('&&')[1],
									schoolurl1 : result.data.rows[o][14].split('&&')[0],
									schoolurl2 : result.data.rows[o][14].split('&&')[1],
									//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
									hashy : $location.path().split('/')[3],
									//year:td,
									year : result.data.rows[o][16],
									hider : true,
									verb : 'will sail',
									shipHider : true
									//teachername :firstname+' '+lastname
								})
							} else {
								teacher.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1].replace(' ', ''),
									lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
									shiptype : result.data.rows[o][2],
									ship : result.data.rows[o][3],
									shipurl : result.data.rows[o][4],
									cruiseurl : result.data.rows[o][5],
									mission : result.data.rows[o][6],
									dates : result.data.rows[o][7],
									subjects : result.data.rows[o][8],
									school : result.data.rows[o][9],
									city : result.data.rows[o][10],
									state : result.data.rows[o][11],
									image : result.data.rows[o][12].split('?')[0],
									grades : result.data.rows[o][13],
									schoolurl : result.data.rows[o][14],
									wordpressurl : result.data.rows[o][15],
									subjects1 : result.data.rows[o][8].split('&&')[0],
									subjects2 : result.data.rows[o][8].split('&&')[1],
									school1 : result.data.rows[o][9].split('&&')[0],
									school2 : result.data.rows[o][9].split('&&')[1],
									schoolurl1 : result.data.rows[o][14].split('&&')[0],
									schoolurl2 : result.data.rows[o][14].split('&&')[1],
									//caption : firstname + ' ' + lastname.split('-')[o] + ' aboard ',
									hashy : $location.path().split('/')[3],
									//year:td,
									year : result.data.rows[o][16],
									hider : true,
									verb : 'will sail',
									shipHider : false
									//teachername :firstname+' '+lastname
								})
							}

						}

					}

				}
				teacher.lengthy = result.data.rows.length;
				return teacher;
			}

		});

	};

	return Data;

}]);

TAS_SITE.factory('HomePageAlumni', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	//////////populates the the Alumni Spotlight Carousel on the homepage using the Fusion Table Api for the TAS(Multiple Years) Fusion Table
	/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	var Data = {};

	Data.getCarouselData = function() {
		var spot = [];
		return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+FirstName,LastName,ShortBody,LongBody,image,caption,PublishDate,Region+FROM+1z6kUehyfSNqaAGinvARZLYyjb7Dhk2F9rt49xHIV+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
			if (result.data.rows != null ) {
				var d = new Date();
				td = d.valueOf();
				result.data.rows.reverse();
				for (var i = 0; i < 30; i++) {
					var pd = new Date(result.data.rows[i][6]);
					var tpd = pd.valueOf();

					if (result.data.rows[i][6] != '#' && td >= tpd && spot.length <= 9) {
						spot.push({
							id : i,
							firstname : result.data.rows[i][0],
							lastname : result.data.rows[i][1],
							shortbody : result.data.rows[i][2],
							longbody : result.data.rows[i][3],
							image : result.data.rows[i][4].split('?')[0],
							caption : result.data.rows[i][5],
							date : result.data.rows[i][6],
							region : result.data.rows[i][7],
							more_url : result.data.rows[i][5].replace(/ /g, '_'),
							hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
							dataloaded : true,
							hider : true
						});

					}

				}
				return spot;
			}
			else{
				Data.getCarouselDataError();
			}
			
			
		}, function(error) {
			Data.getCarouselDataError();
		});

	};
	Data.getCarouselDataError = function() {
		var spot = [];
		///grabs local backup due to error in the web-based api
		return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
			
			if (result.data.rows != undefined) {
				var d = new Date();
				td = d.valueOf();
				result.data.rows.reverse();
				for (var i = 0; i < 30; i++) {
					var pd = new Date(result.data.rows[i][6]);
					var tpd = pd.valueOf();

					if (result.data.rows[i][6] != '#' && td >= tpd && spot.length <= 9) {
						
						spot.push({
							id : i,
							firstname : result.data.rows[i][0],
							lastname : result.data.rows[i][1],
							shortbody : result.data.rows[i][2],
							longbody : result.data.rows[i][3],
							image : result.data.rows[i][4].split('?')[0],
							caption : result.data.rows[i][5],
							date : result.data.rows[i][6],
							region : result.data.rows[i][7],
							more_url : result.data.rows[i][5].replace(/ /g, '_'),
							hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
							dataloaded : true,
							hider : true
						});
					}

				}

			}
			
			
			return spot;
		});

	};
	return Data;
}]);

TAS_SITE.factory('HomePagePOW', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	//////////populates the the Photo of the Week Carousel on the homepage using the Fusion Table Api for the TAS(Multiple Years) Fusion Table
	/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
	var Data = {}
	Data.getCarouselData = function() {
		var pow = [];
		return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+PhotoURL,PhotoCaption,BlogQuote,Title,BlogURL,PhotoCredit,BlogTitle,PublishDate, Keywords, Tweet+FROM+1bJsFIm19ENw-U9vkm5B_hA6H_2VxTga2BYWm-CmN+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
			if (result.data.rows != undefined) {
				var d = new Date();
				var td = d.valueOf();
				result.data.rows.reverse();
				for (var i = 0; i < 30; i++) {
					var pd = new Date(result.data.rows[i][7]);
					var tpd = pd.valueOf();

					//var nshd=tpd+604800000;
					if (result.data.rows[i][7] != '#' && (td >= tpd) && pow.length < 9) {
						pow.push({
							id : i,
							image : result.data.rows[i][0],
							caption : result.data.rows[i][1],
							description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
							shortdescription : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
							parent : result.data.rows[i][4],
							credit : result.data.rows[i][5],
							post_title : Slicer(result.data.rows[i][6], 40) + '...',
							date : result.data.rows[i][7],
							keywords : result.data.rows[i][8],
							titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
							tweet: result.data.rows[i][9],
							dataloaded : true
						});
					}

				}
				return pow;
			}
			else{
				Data.getCarouselDataError();
			}
			
		}, function(error) {
			Data.getCarouselDataError();
		});
	};
	Data.getCarouselDataError = function() {
		var pow = [];
		///grabs local backup due to error in the web-based api
		return $http.get('JSONBackups/POWFusionTable.json').then(function(result) {
			if (result.data.rows != undefined) {
				var d = new Date();
				var td = d.valueOf();
				result.data.rows.reverse();
				for (var i = 0; i < 30; i++) {
					var pd = new Date(result.data.rows[i][7]);
					var tpd = pd.valueOf();
					if (result.data.rows[i][7] != '#' && (td >= tpd) && pow.length < 9) {
						pow.push({
							id : i,
							image : result.data.rows[i][0],
							caption : result.data.rows[i][1],
							description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
							shortdescription : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
							parent : result.data.rows[i][4],
							credit : result.data.rows[i][6],
							post_title : Slicer(result.data.rows[i][7], 40) + '...',
							date : result.data.rows[i][7],
							keywords : result.data.rows[i][8],
							titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
							dataloaded : true
						});
					}

				}

			}
			return pow;
		});
	};
	return Data;
}]);
TAS_SITE.factory('HomepageData', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {

		getDYKData : function() {
			/////////////Grabs the DYK data from the Google Spreadshee API and randomly chooses three items to display in the DYK box on the homepage
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdDdoTkZFb0lMMVUzdzFBOUZaWllxeUE/od6/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!=undefined)
				{
				var randomNum = Math.floor(Math.random() * (result.data.feed.entry.length - 3))
				var dyks = [];
				var dyk = {};
					
					for (var i = 0; i < 3; i++) {
						dyk = result.data.feed.entry[(randomNum + i)];
						dyk.num = dyk.gsx$pdf.$t.replace('/dyk/DYK-', '').replace('.pdf', '');
						dyks.push(dyk);
	
					}
					return dyks;
				}else{
					////result is empty but does not throw an error////
					return $http.get('JSONBackups/DYK.json').then(function(result) {
					var randomNum = Math.floor(Math.random() * (result.data.feed.entry.length - 3))
					var dyks = [];
					var dyk = {};
					for (var i = 0; i < 3; i++) {
						dyk = result.data.feed.entry[(randomNum + i)];
						dyk.num = dyk.gsx$pdf.$t.replace('/dyk/DYK-', '').replace('.pdf', '');
						dyks.push(dyk);

					}
					return dyks;
				});
					
				}

			}, function(error) {

				return $http.get('JSONBackups/DYK.json').then(function(result) {
					var randomNum = Math.floor(Math.random() * (result.data.feed.entry.length - 3))
					var dyks = [];
					var dyk = {};
					for (var i = 0; i < 3; i++) {
						dyk = result.data.feed.entry[(randomNum + i)];
						dyk.num = dyk.gsx$pdf.$t.replace('/dyk/DYK-', '').replace('.pdf', '');
						dyks.push(dyk);

					}
					return dyks;
				});
			});
		},

		getNewsData : function() {
			/////////////Grabs the top three articles from the API for the News DB Fusion Table/////
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			var news = [];
			var newsObj = {};
			newsObj.checkContents = false;
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+ArticleYear%2C+Teacher%2C+MediaOutlet%2C+ArticleTitle%2C+MediaOutletURL%2C+ArticleURL+FROM+1-1IHQax0eNNwsWjd8rRtpdxTlukzIMHbZmttKXfF&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					for (var o = 0; o < 5; o++) {
						news.push({
							articleyear : result.data.rows[o][0],
							teacher : result.data.rows[o][1],
							mediaoutlet : result.data.rows[o][2],
							article : result.data.rows[o][3],
							medioutleturl : result.data.rows[o][4],
							articleurl : result.data.rows[o][5],
							checkContents : true
						});

					}
				return news;
				} else {
					
					/////////////if fusion table is empty but doesn't throw an error/////////
					return $http.get('JSONBackups/NewsFusionTable.json').then(function(result) {
											for (var o = 0; o < 5; o++) {
							news.push({
								articleyear : result.data.rows[o][0],
								teacher : result.data.rows[o][1],
								mediaoutlet : result.data.rows[o][2],
								article : result.data.rows[o][3],
								medioutleturl : result.data.rows[o][4],
								articleurl : result.data.rows[o][5],
								checkContents : true
							});

						}
					
					
					
				});
				return news;	
				}
				

			}, function(error) {
				var news = [];
				var newsObj = {};
				newsObj.checkContents = false;
				return $http.get('JSONBackups/NewsFusionTable.json').then(function(result) {
											for (var o = 0; o < 5; o++) {
							news.push({
								articleyear : result.data.rows[o][0],
								teacher : result.data.rows[o][1],
								mediaoutlet : result.data.rows[o][2],
								article : result.data.rows[o][3],
								medioutleturl : result.data.rows[o][4],
								articleurl : result.data.rows[o][5],
								checkContents : true
							});

						}
					
						
					
					return news;
				});
			});
		},

		getWPData : function(year, name) {
			//////////Calls a php file that serves as an API for the TAS WordPress Blog, populates the Blog Posts box with the most recent WordPress posts and two of the tabs in the Social Media Box (Photos and Videos)
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			var WPdata = {};
			
			return $http.get('/php/xml_json_home.php?q=2015').then(function(result) {
				console.log(result)
				if(!result.data.toString().match('<?php') || result.data.toString().match('<html')){
				///sorts the blogposts by descending date///
				result.data.items.sort(function(a, b){
					 var adate=new Date(a.date[0]).getTime();
					 var bdate =new Date(b.date[0]).getTime();
					 return bdate-adate
				});
				WPdata = result.data;	
				WPdata.dataLoaded = false;
				WPdata.Images = [];
				WPdata.Videos = [];
				WPdata.checkVideos = false;
				WPdata.checkBlogs = false;
				WPdata.checkPhotos = false;
				WPdata.YT = [];
				WPdata.WPVid = [];
				WPdata.VMVid = [];
				//WPdata.bigImage=false;
				var ImagesCap = {};
				ImagesCap.src = '';
				ImagesCap.caption = '';
				var ImagesArr = [];
				var VideosArr = [];
				var images_url = '';
				if (WPdata.items.length == 0) {
					WPdata.checkForItems = false;
				} else {
					WPdata.checkForItems = true;
				}
				for (var x = 0; x < (WPdata.items.length); x++) {
					WPdata.items[x].ind_date = '';
					var html = removeHTML(WPdata.items[x].MainContent);
					WPdata.items[x].contentSnipp = Slicer(html, 380);
					var tmpstr = '';
					var imagesObj = {};
					WPdata.items[x].imagesArr = [];
					WPdata.items[x].CategoriesArr = [];
					imagesObj.src = '';
					imagesObj.caption = '';
					var dateInd = WPdata.items[x].date[0].indexOf(':');
					WPdata.items[x].ind_date = WPdata.items[x].date[0].slice(0, (dateInd - 3));

					if (WPdata.items[x].YouTubeVideos.split(',') != "") {
						WPdata.YT.push($sce.trustAsResourceUrl('http://www.youtube.com/embed/' + WPdata.items[x].YouTubeVideos.split(',')[0] + '??&rel=0&showinfo=0&autohide=1'));
					}
					if (WPdata.items[x].WPVideos.split(',') != "") {
						var wpvideo = WPdata.items[x].WPVideos.split(',')[0].split(' w')[0].replace(' ', '');
						//WPdata.WPVid.push(wpvideo);
						WPdata.WPVid.push(jQuery.parseJSON('{"title":"' + WPdata.items[x].BlogTitle + '","lnk":"' + WPdata.items[x].BlogUrl[0] + '", "src":"' + wpvideo + '"}'));
					}
					if (WPdata.items[x].VimeoVideos.split(',') != "") {
						WPdata.VMVid.push($sce.trustAsResourceUrl('http://player.vimeo.com/video/' + WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0].replace(' ', '')));
						//$sce.trustAsResourceUrl('http://player.vimeo.com/video/'+WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0]));
					}

					for (var f = 0; f < WPdata.items[x].Tags.split(',').length; f++) {

						if (!tmpstr.replace(/\W/g, '').match(WPdata.items[x].Tags.split(',')[f].replace(/\W/g, ''))) {
							WPdata.items[x].CategoriesArr.push(WPdata.items[x].Tags.split(',')[f]);
							tmpstr = tmpstr + WPdata.items[x].Tags.split(',')[f];
						}

					}
				}
				
				for (var k = 1; k < WPdata.gallery_images.length - 1; k++) {
					WPdata.gallery_images[k].matcher=WPdata.gallery_images[k].src[0].split('/')[5]
					if(!WPdata.gallery_images[k].post_url[0].match(/\?attachment/g))
					{
						var hyph_index = WPdata.gallery_images[k].post_url[0].lastIndexOf('-');
						if ((WPdata.gallery_images[k].post_url[0].length - hyph_index) < 4) {
							var posturl = WPdata.gallery_images[k].post_url[0].slice(0, hyph_index);
						} else {
							var posturl = WPdata.gallery_images[k].post_url[0];
						}
						if (WPdata.gallery_images.length > 0 && WPdata.gallery_images[k].src[0] != undefined) {
	
							if ((WPdata.gallery_images[k].src[0].match('.mov') || WPdata.gallery_images[k].src[0].match('.m4v') || WPdata.gallery_images[k].src[0].match('.ogg') || WPdata.gallery_images[k].src[0].match('.wmv') || WPdata.gallery_images[k].src[0].match('.m4a') || WPdata.gallery_images[k].src[0].match('.mp4') || WPdata.gallery_images[k].src[0].match('.avi') || WPdata.gallery_images[k].src[0].match('.doc') || WPdata.gallery_images[k].src[0].match('.docx') || WPdata.gallery_images[k].src[0].match('.pdf') || WPdata.gallery_images[k].src[0].match('.xlsx') || WPdata.gallery_images[k].src[0].match('.xls') || WPdata.gallery_images[k].src[0].match('.ppt') || WPdata.gallery_images[k].src[0].match('.pptx'))) {
								var img_video = $sce.trustAsResourceUrl(WPdata.gallery_images[k].src[0].replace('.mp4', '_hd.original.jpg'));
	
							} else if (!WPdata.gallery_images[k].src[0].match('.mov') || !WPdata.gallery_images[k].src[0].match('.mp4') || (WPdata.gallery_images[k].caption == "" && WPdata.gallery_images[k].excerpt == "")) { 
									var gallery_src = WPdata.gallery_images[k].src[0];
	
									if (WPdata.gallery_images[k].caption != "" && !WPdata.gallery_images[k].caption.match('a:1')) {
										var gallery_caption = WPdata.gallery_images[k].caption;
									} else if (WPdata.gallery_images[k].excerpt != "") {
										var gallery_caption = WPdata.gallery_images[k].excerpt;
	
									} else {
										gallery_caption = 'Teacher at Sea Photo';
									}
									gallery_caption = gallery_caption.replace(/"/g, '&quos;');
									gallery_caption = gallery_caption.replace(/'/g, '&#39;;');
									gallery_caption = gallery_caption.replace(/\n/g, '');
									if (gallery_caption.length > 60) {
										gallery_caption = Slicer(gallery_caption.replace(/&#39;;/g, '\'').replace(/&quos;/g, '\''), 60) + '...';
									} else {
										gallery_caption = gallery_caption.replace(/&#39;;/g, '\'').replace(/&quos;/g, '\'');
									}
									var post_url = WPdata.gallery_images[k].post_url[0];
									
									var post_title = createTitleFromURL(post_url);
									ImagesArr.push(jQuery.parseJSON('{"src":"' + gallery_src + '","id":"' + ImagesArr.length + '","caption":"' + gallery_caption + '", "parent":"' + WPdata.gallery_images[k].parent[0] + '","post_url":"' + post_url + '","matcher":"' + WPdata.gallery_images[k].matcher + '", "post_title":"' + post_title + '"}'));
									images_url += posturl.replace(/\W/g, '') + ',';
								}
	
							
	
						}
					}
				}

				WPdata.Videos = VideosArr;

				WPdata.Images = ImagesArr.removeDuplicatesArrObj('matcher', true);
			}
			else{
				return $http.get('JSONBackups/xml_home_2015.json').then(function(result) {
				
				///sorts the blogposts by descending date///
				result.data.items.sort(function(a, b){
					 var adate=new Date(a.date[0]).getTime();
					 var bdate =new Date(b.date[0]).getTime();
					 return bdate-adate
				});
				WPdata = result.data;	
				WPdata.dataLoaded = false;
				WPdata.Images = [];
				WPdata.Videos = [];
				WPdata.checkVideos = false;
				WPdata.checkBlogs = false;
				WPdata.checkPhotos = false;
				WPdata.YT = [];
				WPdata.WPVid = [];
				WPdata.VMVid = [];
				//WPdata.bigImage=false;
				var ImagesCap = {};
				ImagesCap.src = '';
				ImagesCap.caption = '';
				var ImagesArr = [];
				var VideosArr = [];
				var images_url = '';
				if (WPdata.items.length == 0) {
					WPdata.checkForItems = false;
				} else {
					WPdata.checkForItems = true;
				}
				for (var x = 0; x < (WPdata.items.length); x++) {
					WPdata.items[x].ind_date = '';
					var html = removeHTML(WPdata.items[x].MainContent);
					WPdata.items[x].contentSnipp = Slicer(html, 380);
					var tmpstr = '';
					var imagesObj = {};
					WPdata.items[x].imagesArr = [];
					WPdata.items[x].CategoriesArr = [];
					imagesObj.src = '';
					imagesObj.caption = '';
					var dateInd = WPdata.items[x].date[0].indexOf(':');
					WPdata.items[x].ind_date = WPdata.items[x].date[0].slice(0, (dateInd - 3));

					if (WPdata.items[x].YouTubeVideos.split(',') != "") {
						WPdata.YT.push($sce.trustAsResourceUrl('http://www.youtube.com/embed/' + WPdata.items[x].YouTubeVideos.split(',')[0] + '??&rel=0&showinfo=0&autohide=1'));
					}
					if (WPdata.items[x].WPVideos.split(',') != "") {
						var wpvideo = WPdata.items[x].WPVideos.split(',')[0].split(' w')[0].replace(' ', '');
						//WPdata.WPVid.push(wpvideo);
						WPdata.WPVid.push(jQuery.parseJSON('{"title":"' + WPdata.items[x].BlogTitle + '","lnk":"' + WPdata.items[x].BlogUrl[0] + '", "src":"' + wpvideo + '"}'));
					}
					if (WPdata.items[x].VimeoVideos.split(',') != "") {
						WPdata.VMVid.push($sce.trustAsResourceUrl('http://player.vimeo.com/video/' + WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0].replace(' ', '')));
						//$sce.trustAsResourceUrl('http://player.vimeo.com/video/'+WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0]));
					}

					for (var f = 0; f < WPdata.items[x].Tags.split(',').length; f++) {

						if (!tmpstr.replace(/\W/g, '').match(WPdata.items[x].Tags.split(',')[f].replace(/\W/g, ''))) {
							WPdata.items[x].CategoriesArr.push(WPdata.items[x].Tags.split(',')[f]);
							tmpstr = tmpstr + WPdata.items[x].Tags.split(',')[f];
						}

					}
				}
				
				for (var k = 1; k < WPdata.gallery_images.length - 1; k++) {
					WPdata.gallery_images[k].matcher=WPdata.gallery_images[k].src[0].split('/')[5]
					if(!WPdata.gallery_images[k].post_url[0].match(/\?attachment/g))
					{
						var hyph_index = WPdata.gallery_images[k].post_url[0].lastIndexOf('-');
						if ((WPdata.gallery_images[k].post_url[0].length - hyph_index) < 4) {
							var posturl = WPdata.gallery_images[k].post_url[0].slice(0, hyph_index);
						} else {
							var posturl = WPdata.gallery_images[k].post_url[0];
						}
						if (WPdata.gallery_images.length > 0 && WPdata.gallery_images[k].src[0] != undefined) {
	
							if ((WPdata.gallery_images[k].src[0].match('.mov') || WPdata.gallery_images[k].src[0].match('.m4v') || WPdata.gallery_images[k].src[0].match('.ogg') || WPdata.gallery_images[k].src[0].match('.wmv') || WPdata.gallery_images[k].src[0].match('.m4a') || WPdata.gallery_images[k].src[0].match('.mp4') || WPdata.gallery_images[k].src[0].match('.avi') || WPdata.gallery_images[k].src[0].match('.doc') || WPdata.gallery_images[k].src[0].match('.docx') || WPdata.gallery_images[k].src[0].match('.pdf') || WPdata.gallery_images[k].src[0].match('.xlsx') || WPdata.gallery_images[k].src[0].match('.xls') || WPdata.gallery_images[k].src[0].match('.ppt') || WPdata.gallery_images[k].src[0].match('.pptx'))) {
								var img_video = $sce.trustAsResourceUrl(WPdata.gallery_images[k].src[0].replace('.mp4', '_hd.original.jpg'));
	
							} else if (!WPdata.gallery_images[k].src[0].match('.mov') || !WPdata.gallery_images[k].src[0].match('.mp4') || (WPdata.gallery_images[k].caption == "" && WPdata.gallery_images[k].excerpt == "")) { 
									var gallery_src = WPdata.gallery_images[k].src[0];
	
									if (WPdata.gallery_images[k].caption != "" && !WPdata.gallery_images[k].caption.match('a:1')) {
										var gallery_caption = WPdata.gallery_images[k].caption;
									} else if (WPdata.gallery_images[k].excerpt != "") {
										var gallery_caption = WPdata.gallery_images[k].excerpt;
	
									} else {
										gallery_caption = 'Teacher at Sea Photo';
									}
									gallery_caption = gallery_caption.replace(/"/g, '&quos;');
									gallery_caption = gallery_caption.replace(/'/g, '&#39;;');
									gallery_caption = gallery_caption.replace(/\n/g, '');
									if (gallery_caption.length > 60) {
										gallery_caption = Slicer(gallery_caption.replace(/&#39;;/g, '\'').replace(/&quos;/g, '\''), 60) + '...';
									} else {
										gallery_caption = gallery_caption.replace(/&#39;;/g, '\'').replace(/&quos;/g, '\'');
									}
									var post_url = WPdata.gallery_images[k].post_url[0];
									
									var post_title = createTitleFromURL(post_url);
									ImagesArr.push(jQuery.parseJSON('{"src":"' + gallery_src + '","id":"' + ImagesArr.length + '","caption":"' + gallery_caption + '", "parent":"' + WPdata.gallery_images[k].parent[0] + '","post_url":"' + post_url + '","matcher":"' + WPdata.gallery_images[k].matcher + '", "post_title":"' + post_title + '"}'));
									images_url += posturl.replace(/\W/g, '') + ',';
								}
	
							
	
						}
					}
				}

					WPdata.Videos = VideosArr;

					WPdata.Images = ImagesArr.removeDuplicatesArrObj('matcher', true);
					return WPdata;
					});
			
				}
				
				return WPdata;
			});
		
		}
	};

}]);

TAS_SITE.factory('Teacher', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	//////////////Used on the teacher profile pages////////////

	return {
		createObjects : function() {
			///////////Creates the tabs for the different types of data in the box on the profile page//////////
			var buttons = {};
			buttons.blogs = {};
			buttons.photos = {};
			buttons.videos = {};
			buttons.lessons = {};
			buttons.news = {};
			buttons.ship = {};

			buttons.blogs.name = 'blogs';
			buttons.blogs.classy = "shower";
			buttons.blogs.state = 'on';
			buttons.blogs.href = '#/' + $routeParams.year + '/' + $routeParams.teachername + '/blogs';
			buttons.blogs.hidden = 'false';

			buttons.photos.name = 'photos';
			buttons.photos.classy = "hider";
			buttons.photos.state = 'off';
			buttons.photos.href = $routeParams.year + '/' + $routeParams.teachername + '/photos';
			buttons.photos.hidden = "true";

			buttons.videos.name = 'videos';
			buttons.videos.classy = "hider";
			buttons.videos.state = 'off';
			buttons.videos.href = $routeParams.year + '/' + $routeParams.teachername + '/videos';
			buttons.videos.hidden = "true";

			buttons.lessons.name = 'lessons';
			buttons.lessons.classy = "hider";
			buttons.lessons.state = 'off';
			buttons.lessons.href = $routeParams.year + '/' + $routeParams.teachername + '/lessons';
			buttons.lessons.hidden = "true";

			buttons.news.name = 'news';
			buttons.news.classy = "hider";
			buttons.news.state = 'off';
			buttons.news.href = $routeParams.year + '/' + $routeParams.teachername + '/news';
			buttons.news.hidden = "true";

			buttons.ship.name = 'ship';
			buttons.ship.classy = "hider";
			buttons.ship.state = 'off';
			buttons.ship.href = $routeParams.year + '/' + $routeParams.teachername + '/ship';
			buttons.ship.hidden = "true";
			return buttons;
		},

		getProfileData : function() {
			//////////Grabs Teacher info from the API for the TAS (Multiple Years) Fusion Table
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			var teacher = {};
			teacher.dataLoaded = false;
			$rootScope.clickLocation = '';
			var year = $location.path().split('/')[1].split('/')[0].split('-')[0];
			var teachername=$routeParams.teachername.split('-')[0];
			var teacherfirstname = toTitleCase($routeParams.teachername.split('*')[0]);
			var teacherlastname = toTitleCase($routeParams.teachername.split('*')[1]);
			
			teacherfirstname = teacherfirstname.replace(/'/g, "\'");
			teacherlastname = teacherlastname.replace(/'/g, "\\'");

			return $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+TeacherLastName%2CTeacherFirstName%2CShipType%2C+Ship%2C+ShipUrl%2C+CruiseURL%2C+Mission%2C+CruiseDates%2C+SubjectsTaught%2C+School%2C+City%2C+State%2C+Image%2C+Grades%2C+SchoolURL%2C+WordPressURL+%2C+Year+FROM+1Xh5kWI_ZHd-PZRuPcgrV_oS13HHN6JGtRK4s75Mn+WHERE+TeacherFirstName%20%20CONTAINS%20IGNORING%20CASE%27'+teacherfirstname+'%27+AND+TeacherLastName%20CONTAINS%20IGNORING%20CASE%27'+teacherlastname+'%27+AND+Year%20CONTAINS%20IGNORING%20CASE%20%22'+year+'%22+ORDER%20BY+TeacherLastName%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0').then(function(result) {

				if (result.data.rows != undefined) {
					
					teacher.lastname = result.data.rows[0][0];
					teacher.firstname = result.data.rows[0][1];
					teacher.lastname_forDOM = DigPatt(teacher.lastname, '-');
					teacher.shiptype = result.data.rows[0][2];
					teacher.ship = result.data.rows[0][3];
					teacher.shipurl = result.data.rows[0][4];
					teacher.cruiseurl = result.data.rows[0][5];
					teacher.mission = result.data.rows[0][6];
					teacher.dates = result.data.rows[0][7];
					teacher.subjects = result.data.rows[0][8];
					teacher.school = result.data.rows[0][9];
					teacher.city = result.data.rows[0][10];
					teacher.state = result.data.rows[0][11];
					teacher.image = result.data.rows[0][12];
					teacher.grades = result.data.rows[0][13];
					teacher.schoolurl = result.data.rows[0][14];
					teacher.wordpressurl = result.data.rows[0][15];
					teacher.subjects1 = result.data.rows[0][8].split('&&')[0];
					teacher.subjects2 = result.data.rows[0][8].split('&&')[1];
					teacher.school1 = result.data.rows[0][9].split('&&')[0];
					teacher.school2 = result.data.rows[0][9].split('&&')[1];
					teacher.schoolurl1 = result.data.rows[0][14].split('&&')[0];
					teacher.schoolurl2 = result.data.rows[0][14].split('&&')[1];
					teacher.caption = teacher.firstname + ' ' + teacher.lastname.split('-')[0];
					teacher.hashy = $location.path().split('/')[3];
					teacher.year = result.data.rows[0][16];
					$rootScope.teachername = teacher.firstname + ' ' + teacher.lastname;

					if (teacher.hashy == undefined) {
						teacher.hashy = 'blogs'
					};
					teacher.year = teacher.dates.split('/')[4];

				}
				else if(result.data!=undefined){
					return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					for (var x = 0; x < result.data.rows.length; x++) {

						if (result.data.rows[x][1].toLowerCase() + result.data.rows[x][0].toLowerCase() == teachername) {

							teacher.lastname = result.data.rows[x][0];
							teacher.firstname = result.data.rows[x][1];
							teacher.lastname_forDOM = DigPatt(teacher.lastname, '-');
							teacher.shiptype = result.data.rows[x][2];
							teacher.ship = result.data.rows[x][3];
							teacher.shipurl = result.data.rows[x][4];
							teacher.cruiseurl = result.data.rows[x][5];
							teacher.mission = result.data.rows[x][6];
							teacher.dates = result.data.rows[x][7];
							teacher.subjects = result.data.rows[x][8];
							teacher.school = result.data.rows[x][9];
							teacher.city = result.data.rows[x][10];
							teacher.state = result.data.rows[x][11];
							teacher.image = result.data.rows[x][12];
							teacher.grades = result.data.rows[x][13];
							teacher.schoolurl = result.data.rows[x][14];
							teacher.wordpressurl = result.data.rows[x][15];
							teacher.subjects1 = result.data.rows[x][8].split('&&')[0];
							teacher.subjects2 = result.data.rows[x][8].split('&&')[1];
							teacher.school1 = result.data.rows[x][9].split('&&')[0];
							teacher.school2 = result.data.rows[x][9].split('&&')[1];
							teacher.schoolurl1 = result.data.rows[x][14].split('&&')[0];
							teacher.schoolurl2 = result.data.rows[x][14].split('&&')[1];
							if (!teacher.image.match('logo3')) {
								teacher.caption = teacher.firstname + ' ' + teacher.lastname.split('-')[0];
							} else {
								teacher.caption = "";
							}
							teacher.hashy = $location.path().split('/')[3];
							teacher.year = result.data.rows[x][16];
							$rootScope.teachername = teacher.firstname + ' ' + teacher.lastname;
							if (teacher.hashy == undefined) {
								teacher.hashy = 'blogs'
							};
							teacher.year = teacher.dates.split('/')[4];

							return teacher;
						}
						/*if (teacher.year == $routeParams.year) {
						 teacher.dataLoaded = true;
						 $location.path(teacher.year + '/' + teacher.firstname + '*' + teacher.lastname + '/' + teacher.hashy);

						 }*/

					}

				});

					if (teacher.hashy == undefined) {
						teacher.hashy = 'blogs'
					};
					teacher.year = teacher.dates.split('/')[4];
				}
				if (teacher.year == $routeParams.year) {
					teacher.dataLoaded = true;
					$location.path(teacher.year + '/' + teacher.firstname + '*' + teacher.lastname + '/' + teacher.hashy);

				}
				return teacher;

			}, function(error) {
				var teacher = {};
				var teachername = $location.path().split('/')[2].split('/')[0].replace('*', '').toLowerCase()
				return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					for (var x = 0; x < result.data.rows.length; x++) {

						if (result.data.rows[x][1].toLowerCase() + result.data.rows[x][0].toLowerCase() == teachername) {

							teacher.lastname = result.data.rows[x][0];
							teacher.firstname = result.data.rows[x][1];
							teacher.lastname_forDOM = DigPatt(teacher.lastname, '-');
							teacher.shiptype = result.data.rows[x][2];
							teacher.ship = result.data.rows[x][3];
							teacher.shipurl = result.data.rows[x][4];
							teacher.cruiseurl = result.data.rows[x][5];
							teacher.mission = result.data.rows[x][6];
							teacher.dates = result.data.rows[x][7];
							teacher.subjects = result.data.rows[x][8];
							teacher.school = result.data.rows[x][9];
							teacher.city = result.data.rows[x][10];
							teacher.state = result.data.rows[x][11];
							teacher.image = result.data.rows[x][12];
							teacher.grades = result.data.rows[x][13];
							teacher.schoolurl = result.data.rows[x][14];
							teacher.wordpressurl = result.data.rows[x][15];
							teacher.subjects1 = result.data.rows[x][8].split('&&')[0];
							teacher.subjects2 = result.data.rows[x][8].split('&&')[1];
							teacher.school1 = result.data.rows[x][9].split('&&')[0];
							teacher.school2 = result.data.rows[x][9].split('&&')[1];
							teacher.schoolurl1 = result.data.rows[x][14].split('&&')[0];
							teacher.schoolurl2 = result.data.rows[x][14].split('&&')[1];
							if (!teacher.image.match('logo3')) {
								teacher.caption = teacher.firstname + ' ' + teacher.lastname.split('-')[0];
							} else {
								teacher.caption = "";
							}
							teacher.hashy = $location.path().split('/')[3];
							teacher.year = result.data.rows[x][16];
							$rootScope.teachername = teacher.firstname + ' ' + teacher.lastname;
							if (teacher.hashy == undefined) {
								teacher.hashy = 'blogs'
							};
							teacher.year = teacher.dates.split('/')[4];

							return teacher;
						}
						/*if (teacher.year == $routeParams.year) {
						 teacher.dataLoaded = true;
						 $location.path(teacher.year + '/' + teacher.firstname + '*' + teacher.lastname + '/' + teacher.hashy);

						 }*/

					}

				});

			});

		},
		getLessonData : function(teachername) {
			var lessons = [];
			var teacherfirstname = $routeParams.teachername.split('*')[0];
			var teacherlastname = $routeParams.teachername.split('*')[1];
			teacherfirstname = teacherfirstname.replace(/'/g, "\'");
			teacherlastname = teacherlastname.replace(/'/g, "\\'");

			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+LastName%2CFirstName%2CState%2C+YearSailed%2C+GradeLevel%2C+Size%2C+Title%2C+Keywords%2C+Objective%2C+Description%2C+URL%2c+Topics+FROM+17OXuyYjiIvxjr1Yd3DZ-SI-dzp-soOuTDNOHoSOA+WHERE+FirstName%20CONTAINS%20IGNORING%20CASE%27' + toTitleCase(teacherfirstname) + '%27+AND+LastName%20CONTAINS%20IGNORING%20CASE%27' + toTitleCase(teacherlastname) + '%27+ORDER%20BY+LastName"&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					
					for (var o = 0; o < result.data.rows.length; o++) {
						lessons.push({
							lastname : result.data.rows[o][0],
							firstname : result.data.rows[o][1],
							state : result.data.rows[o][2],
							year : result.data.rows[o][3],
							grades : result.data.rows[o][4],
							gradesArr : result.data.rows[o][4].split(','),
							size : result.data.rows[o][5],
							title : result.data.rows[o][6],
							keywords : result.data.rows[o][7],
							keywordArr : result.data.rows[o][7].split(','),
							objective : result.data.rows[o][8],
							description : result.data.rows[o][9],
							url : result.data.rows[o][10],
							topics : result.data.rows[o][11],
							checkContents : true,
							id : o,
							favorite : 'off'

						});
					}
					return lessons;
				}
				else if(result.data!=undefined){
					
					return $http.get('JSONBackups/LessonsTable.json').then(function(result) {
					var name = $routeParams.teachername.replace('*', ' ')

					for (var o = 0; o < result.data.rows.length; o++) {

						var name_comp = result.data.rows[o][1] + ' ' + result.data.rows[o][0]

						if (name.toLowerCase() == name_comp.toLowerCase()) {
							lessons.push({
								lastname : result.data.rows[o][0],
								firstname : result.data.rows[o][1],
								state : result.data.rows[o][2],
								year : result.data.rows[o][3],
								grades : result.data.rows[o][4],
								gradesArr : result.data.rows[o][4].split(','),
								size : result.data.rows[o][5],
								title : result.data.rows[o][6],
								keywords : result.data.rows[o][7],
								keywordArr : result.data.rows[o][7].split(','),
								objective : result.data.rows[o][8],
								description : result.data.rows[o][9],
								url : result.data.rows[o][10],
								topics : result.data.rows[o][11],
								checkContents : true,
								id : o,
								favorite : 'off'

							});
						}
					}

					return lessons;
					});
					}

				

			}, function(error) {

				var lessons = [];
				return $http.get('JSONBackups/LessonsTable.json').then(function(result) {
					var name = $routeParams.teachername.replace('*', ' ')

					for (var o = 0; o < result.data.rows.length; o++) {

						var name_comp = result.data.rows[o][1] + ' ' + result.data.rows[o][0]

						if (name.toLowerCase() == name_comp.toLowerCase()) {
							lesson.push({
								lastname : result.data.rows[o][0],
								firstname : result.data.rows[o][1],
								state : result.data.rows[o][2],
								year : result.data.rows[o][3],
								grades : result.data.rows[o][4],
								gradesArr : result.data.rows[o][4].split(','),
								size : result.data.rows[o][5],
								title : result.data.rows[o][6],
								keywords : result.data.rows[o][7],
								keywordArr : result.data.rows[o][7].split(','),
								objective : result.data.rows[o][8],
								description : result.data.rows[o][9],
								url : result.data.rows[o][10],
								topics : result.data.rows[o][11],
								checkContents : true,
								id : o,
								favorite : 'off'

							});
						}
					}

					return lessons;
				});
			});
		},

		getNewsData : function(teachername) {
			///////////Checks the API for the News DB Fusion Table for articles about a specific teacher
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			var news = [];
			var newsObj = {};
			newsObj.checkContents = false;
			var teacherfirstname = $routeParams.teachername.split('*')[0];
			var teacherlastname = $routeParams.teachername.split('*')[1];
			teacherfirstname = teacherfirstname.replace(/'/g, "\'");
			teacherlastname = teacherlastname.replace(/'/g, "\\'").split('-')[0];
			var teachername = teacherfirstname + ' ' + teacherlastname;
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+ArticleYear%2C+Teacher%2C+MediaOutlet%2C+ArticleTitle%2C+MediaOutletURL%2C+ArticleURL+FROM+1-1IHQax0eNNwsWjd8rRtpdxTlukzIMHbZmttKXfF+WHERE+Teacher%20CONTAINS%20IGNORING%20CASE%27' + toTitleCase(teachername) + '%27+ORDER%20BY+Teacher"&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				
				if (result.data.rows != undefined) {
					
					for (var o = 0; o < result.data.rows.length; o++) {
						news.push({
							articleyear : result.data.rows[o][0],
							teacher : result.data.rows[o][1],
							mediaoutlet : result.data.rows[o][2],
							article : result.data.rows[o][3],
							medioutleturl : result.data.rows[o][4],
							articleurl : result.data.rows[o][5],
							checkContents : true
						});

					}
					return news;
				}
				else if(result.data!=undefined){
					return $http.get('JSONBackups/NewsFusionTable.json').then(function(result) {
					for (var o = 0; o < result.data.rows.length; o++) {
						var name_comp = result.data.rows[o][1];

						if (teachername == name_comp) {
							news.push({
								articleyear : result.data.rows[o][0],
								teacher : result.data.rows[o][1],
								mediaoutlet : result.data.rows[o][2],
								article : result.data.rows[o][3],
								medioutleturl : result.data.rows[o][4],
								articleurl : result.data.rows[o][5],
								checkContents : true
							});

						}
					}
					return news;
				});
				}
				

			}, function(error) {
				return $http.get('JSONBackups/NewsFusionTable.json').then(function(result) {
					for (var o = 0; o < result.data.rows.length; o++) {
						var name_comp = result.data.rows[o][1];

						if (teachername == name_comp) {
							news.push({
								articleyear : result.data.rows[o][0],
								teacher : result.data.rows[o][1],
								mediaoutlet : result.data.rows[o][2],
								article : result.data.rows[o][3],
								medioutleturl : result.data.rows[o][4],
								articleurl : result.data.rows[o][5],
								checkContents : true
							});

						}
					}
					return news;
				});

			});

		},

		getShipData : function(ship, shiptype) {

		////////Checks the teacher's ship against the ShipInfo Fusion Table and returns information about a specific ship//////
		/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			
			if(ship.match("'"))
				{
					ship = ship.split(/'/)[1];			
				}
			var ships = [];
			var teacherfirstname = $routeParams.teachername.split('*')[0];
			var teacherlastname = $routeParams.teachername.split('*')[1];
			teacherfirstname = teacherfirstname.replace(/'/g, "\'");
			teacherlastname = teacherlastname.replace(/'/g, "\\'");
			var teachername = teacherfirstname + ' ' + teacherlastname;
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+ShipName%2C+Image+%2CDescription+FROM+1pfPZ8CHS1sXia_hgESAHxdXOYzalx-IWU2MdsPkC+WHERE+ShipName%20CONTAINS%20IGNORING%20CASE%27' + toTitleCase(ship) + '%27+ORDER%20BY+ShipName"&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					for (var o = 0; o < result.data.rows.length; o++) {
						ships.push({
							shipname : result.data.rows[o][0],
							shipimage : result.data.rows[o][1],
							description : result.data.rows[o][2],
							checkShip : true
						});

					}
					return ships;
				}
				else{
					return $http.get('JSONBackups/ShipsTable.json').then(function(result) {

					for (var o = 0; o < result.data.rows.length; o++) {

						if (result.data.rows[o][0].match(ship)) {

							ships.push({
								shipname : result.data.rows[o][0],
								shipimage : result.data.rows[o][1],
								description : result.data.rows[o][2],
								checkShip : true
							});

						}
					}
					return ships;
				});
					
				}
				
			}, function(error) {
				return $http.get('JSONBackups/ShipsTable.json').then(function(result) {

					for (var o = 0; o < result.data.rows.length; o++) {

						if (result.data.rows[o][0].match(ship)) {

							ships.push({
								shipname : result.data.rows[o][0],
								shipimage : result.data.rows[o][1],
								description : result.data.rows[o][2],
								checkShip : true
							});

						}
					}
					return ships;
				});
			});
		},

		getWPData : function(year, name) {
			////////Calls php file that serves as the WordPress blog API, pulls out Wordpress info (blogs, photos, videos) about a specific teacher
			var WPdata = {};
			var name=name.replace(/\'/g,'')
			return $http.get('/php/xml_json.php?q=' + year + '&n='+name).then(function(result) {

				///sorts the blogposts by descending date///
				result.data.items.sort(function(a, b){
					 var adate=new Date(a.date[0]).getTime();
					 var bdate =new Date(b.date[0]).getTime();
					 return bdate-adate
				});
				///sorts images by descending dates////
				if(year>2009)
				{
				result.data.gallery_images.sort(function(a,b){
					 var adate=new Date(a.date[0]).getTime();
					 var bdate =new Date(b.date[0]).getTime();
					 return bdate-adate
				});
				}
				WPdata = result.data;
				WPdata.dataLoaded = false;
				WPdata.Images = [];
				WPdata.Videos = [];
				WPdata.checkVideos = false;
				WPdata.checkBlogs = false;
				WPdata.checkPhotos = false;
				WPdata.YT = [];
				WPdata.WPVid = [];
				WPdata.VMVid = [];
				//WPdata.bigImage=false;
				var ImagesCap = {};
				ImagesCap.src = '';
				ImagesCap.caption = '';
				var ImagesArr = [];
				var VideosArr = [];
				var images_url = '';
				if (WPdata.items.length == 0) {
					WPdata.checkForItems = false;
				} else {
					WPdata.checkForItems = true;
				}

				//console.log(k+': ',WPdata.gallery_images[k])
					
				for (var k = 0; k < WPdata.gallery_images.length; k++) {
					if(WPdata.gallery_images[k].src[0]!==undefined){
						WPdata.gallery_images[k].matcher=WPdata.gallery_images[k].src[0].split('/')[5];
						if(!WPdata.gallery_images[k].post_url[0].match(/\?attachment/g))
						{
							var hyph_index = WPdata.gallery_images[k].post_url[0].lastIndexOf('-');
							if ((WPdata.gallery_images[k].post_url[0].length - hyph_index) < 4) {
								var posturl = WPdata.gallery_images[k].post_url[0].slice(0, hyph_index);
							} else {
								var posturl = WPdata.gallery_images[k].post_url[0];
							}
							
							if (WPdata.gallery_images.length > 0 && WPdata.gallery_images[k].src[0] != undefined && WPdata.gallery_images[k].src[0] != "") {
								WPdata.gallery_images[k].src[0] = WPdata.gallery_images[k].src[0].split('width')[0];
								
								if ((WPdata.gallery_images[k].src[0].match('.mov') || WPdata.gallery_images[k].src[0].match('.m4v') || WPdata.gallery_images[k].src[0].match('.ogg') || WPdata.gallery_images[k].src[0].match('.wmv') || WPdata.gallery_images[k].src[0].match('.m4a') || WPdata.gallery_images[k].src[0].match('.mp4') || WPdata.gallery_images[k].src[0].match('.avi') || WPdata.gallery_images[k].src[0].match('.doc') || WPdata.gallery_images[k].src[0].match('.docx') || WPdata.gallery_images[k].src[0].match('.pdf') || WPdata.gallery_images[k].src[0].match('.xlsx') || WPdata.gallery_images[k].src[0].match('.xls') || WPdata.gallery_images[k].src[0].match('.ppt') || WPdata.gallery_images[k].src[0].match('.pptx'))) {
									var img_video = $sce.trustAsResourceUrl(WPdata.gallery_images[k].src[0].replace('.mp4', '_hd.original.jpg'));
								} else if (!WPdata.gallery_images[k].src[0].match('.mov') || !WPdata.gallery_images[k].src[0].match('.mp4') || (WPdata.gallery_images[k].caption == "" && WPdata.gallery_images[k].excerpt == "")) {
									if(!images_url.match(posturl.replace(/\W/g,'')))
									{
										var gallery_src = WPdata.gallery_images[k].src[0];
		
										if (WPdata.gallery_images[k].caption != "" && !WPdata.gallery_images[k].caption.match('a:1')) {
											var gallery_caption = WPdata.gallery_images[k].caption;
										} else if (WPdata.gallery_images[k].excerpt != "") {
											var gallery_caption = WPdata.gallery_images[k].excerpt;
		
										} else {
											gallery_caption = 'Photo by ' + name;
										}
										gallery_caption = gallery_caption.replace(/"/g, '&quos;');
										gallery_caption = gallery_caption.replace(/'/g, '&#39;;');
										gallery_caption = gallery_caption.replace(/\n/g, '');
										gallery_caption = gallery_caption.replace(/\t/g, '');
										
										var post_url = WPdata.gallery_images[k].post_url[0];
										var post_title='View Post';
										
											
										ImagesArr.push(jQuery.parseJSON('{"src":"' + gallery_src + '","id":"' + ImagesArr.length + '","tabIndex":"' + ImagesArr.length + 250 + '","caption":"' + gallery_caption.replace(/&#39;;/g, '\'').replace(/&quos;/g, '\'') + '", "favorite":"off","parent":"' + WPdata.gallery_images[k].parent[0] + '","post_url":"' + post_url + '","matcher":"'+WPdata.gallery_images[k].matcher+'", "post_title":"' + post_title + '"}'));
										images_url += posturl.replace(/\W/g, '') + ',';
									}
		
								}
		
							}
						}	
					}	
				}

				for (var x = 0; x < (WPdata.items.length); x++) {

					WPdata.items[x].id = x;
					WPdata.items[x].favorite = 'off'
					var html = removeHTML(WPdata.items[x].MainContent);
					var index1 = html.indexOf('[caption');
					var index2 = html.indexOf('[/caption]') + 10;
					html = html.slice(0, index1) + ' ' + html.slice(index2, html.length);
					WPdata.items[x].contentSnipp = Slicer(html, 380);

					//WPdata.items[x].src = ImagesArr[0];
					var tmpstr = '';
					var imagesObj = {};
					WPdata.items[x].imagesArr = [];
					WPdata.items[x].CategoriesArr = [];
					imagesObj.src = '';
					imagesObj.caption = '';

					if (WPdata.items[x].YouTubeVideos.split(',') != "") {
						WPdata.YT.push($sce.trustAsResourceUrl('http://www.youtube.com/embed/' + WPdata.items[x].YouTubeVideos.split(',')[0] + '??&rel=0&showinfo=0&autohide=1'));
					}
					if (WPdata.items[x].WPVideos.split(',') != "") {
						var wpvideo = WPdata.items[x].WPVideos.split(',')[0].split(' w')[0].replace(' ', '');
						WPdata.WPVid.push(jQuery.parseJSON('{"title":"' + WPdata.items[x].BlogTitle + '","lnk":"' + WPdata.items[x].BlogUrl[0] + '", "src":"' + wpvideo + '"}'));

					}
					if (WPdata.items[x].VimeoVideos.split(',') != "") {
						WPdata.VMVid.push($sce.trustAsResourceUrl('http://player.vimeo.com/video/' + WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0].replace(' ', '')));
						//$sce.trustAsResourceUrl('http://player.vimeo.com/video/'+WPdata.items[x].VimeoVideos.split(',')[0].split(' w')[0]));
					}

					for (var f = 0; f < WPdata.items[x].Tags.split(',').length; f++) {

						if (!tmpstr.replace(/\W/g, '').match(WPdata.items[x].Tags.split(',')[f].replace(/\W/g, ''))) {
							WPdata.items[x].CategoriesArr.push(WPdata.items[x].Tags.split(',')[f]);
							tmpstr = tmpstr + WPdata.items[x].Tags.split(',')[f];
						}

					}
				}

				WPdata.Videos = VideosArr;

				WPdata.Images = ImagesArr.removeDuplicatesArrObj('matcher', true)
				console.log(WPdata)
				return WPdata;
			});

		}
	};

}]);

TAS_SITE.factory('preloadImage', ['$q', '$rootScope',
function($q, $rootScope) {

	/*// I manage the preloading of image objects. Accepts an array of image URLs.
	 function Preloader(imageLocations) {
	 // I am the image SRC values to preload.
	 this.imageLocations = imageLocations;

	 // As the images load, we'll need to keep track of the load/error
	 // counts when announing the progress on the loading.
	 this.imageCount = this.imageLocations.length;
	 this.loadCount = 0;
	 this.errorCount = 0;

	 // I am the possible states that the preloader can be in.
	 this.states = {
	 PENDING : 1,
	 LOADING : 2,
	 RESOLVED : 3,
	 REJECTED : 4
	 };

	 // I keep track of the current state of the preloader.
	 this.state = this.states.PENDING;

	 // When loading the images, a promise will be returned to indicate
	 // when the loading has completed (and / or progressed).
	 this.deferred = $q.defer();
	 this.promise = this.deferred.promise;

	 }

	 // ---
	 // STATIC METHODS.
	 // ---

	 // I reload the given images [Array] and return a promise. The promise
	 // will be resolved with the array of image locations.
	 Preloader.preloadImages = function(imageLocations) {
	 window.scrollTo(50, 0)
	 var preloader = new Preloader(imageLocations);

	 return ( preloader.load() );

	 };

	 // ---
	 // INSTANCE METHODS.
	 // ---

	 Preloader.prototype = {

	 // Best practice for "instnceof" operator.
	 constructor : Preloader,

	 // ---
	 // PUBLIC METHODS.
	 // ---

	 // I determine if the preloader has started loading images yet.
	 isInitiated : function isInitiated() {

	 return (this.state !== this.states.PENDING );

	 },

	 // I determine if the preloader has failed to load all of the images.
	 isRejected : function isRejected() {

	 return (this.state === this.states.REJECTED );

	 },

	 // I determine if the preloader has successfully loaded all of the images.
	 isResolved : function isResolved() {
	 console.log('isResolved');
	 return (this.state === this.states.RESOLVED );

	 },

	 // I initiate the preload of the images. Returns a promise.
	 load : function load() {

	 // If the images are already loading, return the existing promise.
	 if (this.isInitiated()) {

	 return (this.promise );

	 }

	 this.state = this.states.LOADING;

	 for (var i = 0; i < this.imageCount; i++) {

	 this.loadImageLocation(this.imageLocations[i]);

	 }

	 // Return the deferred promise for the load event.
	 return (this.promise );

	 },

	 // ---
	 // PRIVATE METHODS.
	 // ---

	 // I handle the load-failure of the given image location.
	 handleImageError : function handleImageError(imageLocation) {

	 this.errorCount++;

	 // If the preload action has already failed, ignore further action.
	 if (this.isRejected()) {

	 return;

	 }

	 this.state = this.states.REJECTED;

	 this.deferred.reject(imageLocation);

	 },

	 // I handle the load-success of the given image location.
	 handleImageLoad : function handleImageLoad(imageLocation) {

	 this.loadCount++;

	 // If the preload action has already failed, ignore further action.
	 if (this.isRejected()) {

	 return;

	 }

	 // Notify the progress of the overall deferred. This is different
	 // than Resolving the deferred - you can call notify many times
	 // before the ultimate resolution (or rejection) of the deferred.
	 this.deferred.notify({
	 percent : Math.ceil(this.loadCount / this.imageCount * 100),
	 imageLocation : imageLocation
	 });

	 // If all of the images have loaded, we can resolve the deferred
	 // value that we returned to the calling context.
	 if (this.loadCount === this.imageCount) {

	 this.state = this.states.RESOLVED;

	 this.deferred.resolve(this.imageLocations);

	 }

	 },

	 // I load the given image location and then wire the load / error
	 // events back into the preloader instance.
	 // --
	 // NOTE: The load/error events trigger a $digest.
	 loadImageLocation : function loadImageLocation(imageLocation) {

	 var preloader = this;

	 // When it comes to creating the image object, it is critical that
	 // we bind the event handlers BEFORE we actually set the image
	 // source. Failure to do so will prevent the events from proper
	 // triggering in some browsers.
	 var image = $(new Image()).load(function(event) {

	 // Since the load event is asynchronous, we have to
	 // tell AngularJS that something changed.
	 $rootScope.$apply(function() {

	 preloader.handleImageLoad(event.target.src);

	 // Clean up object reference to help with the
	 // garbage collection in the closure.
	 preloader = image = event = null;

	 });

	 }).error(function(event) {

	 // Since the load event is asynchronous, we have to
	 // tell AngularJS that something changed.
	 $rootScope.$apply(function() {

	 preloader.handleImageError(event.target.src);

	 // Clean up object reference to help with the
	 // garbage collection in the closure.
	 preloader = image = event = null;

	 });

	 }).prop("src", imageLocation);

	 }
	 };

	 // Return the factory instance.
	 return (Preloader );*/

}]);

TAS_SITE.factory('Class', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	////////////Used for Class Pages (i.e. #/2015)
	return {
		/////////creates an array of State Info///////////////
		createStateObj : function() {
			var usStates = [{
				name : 'ALABAMA',
				abbreviation : 'AL',
				num : 0,
				isThere : false
			}, {
				name : 'ALASKA',
				abbreviation : 'AK',
				num : 0,
				isThere : false
			}, {
				name : 'ARKANSAS',
				abbreviation : 'AR',
				num : 0,
				isThere : false
			}, {
				name : 'AMERICAN SAMOA',
				abbreviation : 'AS',
				num : 0,
				isThere : false
			}, {
				name : 'ARIZONA',
				abbreviation : 'AZ',
				num : 0,
				isThere : false
			}, {
				name : 'CALIFORNIA',
				abbreviation : 'CA',
				num : 0,
				isThere : false
			}, {
				name : 'COLORADO',
				abbreviation : 'CO',
				num : 0,
				isThere : false
			}, {
				name : 'CONNECTICUT',
				abbreviation : 'CT',
				num : 0,
				isThere : false
			}, {
				name : 'DISTRICT OF COLUMBIA',
				abbreviation : 'DC',
				num : 0,
				isThere : false
			}, {
				name : 'DELAWARE',
				abbreviation : 'DE',
				num : 0,
				isThere : false
			}, {
				name : 'FLORIDA',
				abbreviation : 'FL',
				num : 0,
				isThere : false
			}, {
				name : 'GEORGIA',
				abbreviation : 'GA',
				num : 0,
				isThere : false
			}, {
				name : 'GUAM',
				abbreviation : 'GU',
				num : 0,
				isThere : false
			}, {
				name : 'HAWAII',
				abbreviation : 'HI',
				num : 0,
				isThere : false
			}, {
				name : 'IOWA',
				abbreviation : 'IA',
				num : 0,
				isThere : false
			}, {
				name : 'IDAHO',
				abbreviation : 'ID',
				num : 0,
				isThere : false
			}, {
				name : 'ILLINOIS',
				abbreviation : 'IL',
				num : 0,
				isThere : false
			}, {
				name : 'INDIANA',
				abbreviation : 'IN',
				num : 0,
				isThere : false
			}, {
				name : 'KANSAS',
				abbreviation : 'KS',
				num : 0,
				isThere : false
			}, {
				name : 'KENTUCKY',
				abbreviation : 'KY',
				num : 0,
				isThere : false
			}, {
				name : 'LOUISIANA',
				abbreviation : 'LA',
				num : 0,
				isThere : false
			}, {
				name : 'MASSACHUSETTS',
				abbreviation : 'MA',
				num : 0,
				isThere : false
			}, {
				name : 'MARYLAND',
				abbreviation : 'MD',
				num : 0,
				isThere : false
			}, {
				name : 'MAINE',
				abbreviation : 'ME',
				num : 0,
				isThere : false
			}, {
				name : 'MICHIGAN',
				abbreviation : 'MI',
				num : 0,
				isThere : false
			}, {
				name : 'MINNESOTA',
				abbreviation : 'MN',
				num : 0,
				isThere : false
			}, {
				name : 'MISSOURI',
				abbreviation : 'MO',
				num : 0,
				isThere : false
			}, {
				name : 'MISSISSIPPI',
				abbreviation : 'MS',
				num : 0,
				isThere : false
			}, {
				name : 'MONTANA',
				abbreviation : 'MT',
				num : 0,
				isThere : false
			}, {
				name : 'NORTH CAROLINA',
				abbreviation : 'NC',
				num : 0,
				isThere : false
			}, {
				name : 'NORTH DAKOTA',
				abbreviation : 'ND',
				num : 0,
				isThere : false
			}, {
				name : 'NEBRASKA',
				abbreviation : 'NE',
				num : 0,
				isThere : false
			}, {
				name : 'NEW HAMPSHIRE',
				abbreviation : 'NH',
				num : 0,
				isThere : false
			}, {
				name : 'NEW JERSEY',
				abbreviation : 'NJ',
				num : 0,
				isThere : false
			}, {
				name : 'NEW MEXICO',
				abbreviation : 'NM',
				num : 0,
				isThere : false
			}, {
				name : 'NEVADA',
				abbreviation : 'NV',
				num : 0,
				isThere : false
			}, {
				name : 'NEW YORK',
				abbreviation : 'NY',
				num : 0,
				isThere : false
			}, {
				name : 'OHIO',
				abbreviation : 'OH',
				num : 0,
				isThere : false
			}, {
				name : 'OKLAHOMA',
				abbreviation : 'OK',
				num : 0,
				isThere : false
			}, {
				name : 'OREGON',
				abbreviation : 'OR',
				num : 0,
				isThere : false
			}, {
				name : 'PENNSYLVANIA',
				abbreviation : 'PA',
				num : 0,
				isThere : false
			}, {
				name : 'PUERTO RICO',
				abbreviation : 'PR',
				num : 0,
				isThere : false
			}, {
				name : 'RHODE ISLAND',
				abbreviation : 'RI',
				num : 0,
				isThere : false
			}, {
				name : 'SOUTH CAROLINA',
				abbreviation : 'SC',
				num : 0,
				isThere : false
			}, {
				name : 'SOUTH DAKOTA',
				abbreviation : 'SD',
				num : 0,
				isThere : false
			}, {
				name : 'TENNESSEE',
				abbreviation : 'TN',
				num : 0,
				isThere : false
			}, {
				name : 'TEXAS',
				abbreviation : 'TX',
				num : 0,
				isThere : false
			}, {
				name : 'UTAH',
				abbreviation : 'UT',
				num : 0,
				isThere : false
			}, {
				name : 'VIRGINIA',
				abbreviation : 'VA',
				num : 0,
				isThere : false
			}, {
				name : 'VIRGIN ISLANDS',
				abbreviation : 'VI',
				num : 0,
				isThere : false
			}, {
				name : 'VERMONT',
				abbreviation : 'VT',
				num : 0,
				isThere : false
			}, {
				name : 'WASHINGTON',
				abbreviation : 'WA',
				num : 0,
				isThere : false
			}, {
				name : 'WISCONSIN',
				abbreviation : 'WI',
				num : 0,
				isThere : false
			}, {
				name : 'WEST VIRGINIA',
				abbreviation : 'WV',
				num : 0,
				isThere : false
			}, {
				name : 'WYOMING',
				abbreviation : 'WY',
				num : 0,
				isThere : false
			}, {
				name : 'BREMUDA',
				abbreviation : 'BM',
				num : 0,
				isThere : false
			}];

			return usStates;

		},
		createTeacherList : function() {
			//////////Makes a call the the API for the Teacher (Multiple Years) Fusion Table and pulls each teacher from a specific year
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			
			var teachers = [];
			var year = $location.path().split('/')[1].split('/')[0];
			
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+TeacherLastName%2CTeacherFirstName%2CShipType%2C+Ship%2C+ShipUrl%2C+CruiseURL%2C+Mission%2C+CruiseDates%2C+SubjectsTaught%2C+School%2C+City%2C+State%2C+Image%2C+Grades%2C+SchoolURL%2C+WordPressURL%2C+Year+FROM+1Xh5kWI_ZHd-PZRuPcgrV_oS13HHN6JGtRK4s75Mn+WHERE+Year%20%20CONTAINS%20IGNORING%20CASE%27' + year + '%27+ORDER%20BY+TeacherLastName+"&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {

					for (var o = 0; o < result.data.rows.length; o++) {
						teachers.push({
							lastname : result.data.rows[o][0],
							lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
							firstname : result.data.rows[o][1],
							shiptype : result.data.rows[o][2],
							ship : result.data.rows[o][3],
							shipurl : result.data.rows[o][4],
							cruiseurl : result.data.rows[o][5],
							mission : result.data.rows[o][6],
							dates : result.data.rows[o][7],
							subjects : result.data.rows[o][8],
							school : result.data.rows[o][9],
							city : result.data.rows[o][10],
							state : result.data.rows[o][11],
							image : result.data.rows[o][12].split('?')[0],
							grades : result.data.rows[o][13],
							schoolurl : result.data.rows[o][14],
							wordpressurl : result.data.rows[o][15],
							year : result.data.rows[o][16],
							subjects1 : result.data.rows[o][8].split('&&')[0],
							subjects2 : result.data.rows[o][8].split('&&')[1],
							school1 : result.data.rows[o][9].split('&&')[0],
							school2 : result.data.rows[o][9].split('&&')[1],
							schoolurl1 : result.data.rows[o][14].split('&&')[0],
							schoolurl2 : result.data.rows[o][14].split('&&')[1],
							tabIndex : 150 + o,
							checkContents : true

						});

					}
				return teachers;	
				}
				else{
					
					var year = $location.path().split('/')[1].split('/')[0]
					return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					for (var o = 0; o < result.data.rows.length; o++) {
						if (result.data.rows[o][16] == year) {
							teachers.push({
								lastname : result.data.rows[o][0],
								lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
								firstname : result.data.rows[o][1],
								shiptype : result.data.rows[o][2],
								ship : result.data.rows[o][3],
								shipurl : result.data.rows[o][4],
								cruiseurl : result.data.rows[o][5],
								mission : result.data.rows[o][6],
								dates : result.data.rows[o][7],
								subjects : result.data.rows[o][8],
								school : result.data.rows[o][9],
								city : result.data.rows[o][10],
								state : result.data.rows[o][11],
								image : result.data.rows[o][12].split('?')[0],
								grades : result.data.rows[o][13],
								schoolurl : result.data.rows[o][14],
								wordpressurl : result.data.rows[o][15],
								year : result.data.rows[o][16],
								subjects1 : result.data.rows[o][8].split('&&')[0],
								subjects2 : result.data.rows[o][8].split('&&')[1],
								school1 : result.data.rows[o][9].split('&&')[0],
								school2 : result.data.rows[o][9].split('&&')[1],
								schoolurl1 : result.data.rows[o][14].split('&&')[0],
								schoolurl2 : result.data.rows[o][14].split('&&')[1],
								tabIndex : 150 + o,
								checkContents : true

							});

						}
					}
					return teachers;
				});

				}
				
			}, function(error) {
				var teachers = [];
				var year = $location.path().split('/')[1].split('/')[0]
				return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					for (var o = 0; o < result.data.rows.length; o++) {
						if (result.data.rows[o][16] == year) {
							teachers.push({
								lastname : result.data.rows[o][0],
								lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
								firstname : result.data.rows[o][1],
								shiptype : result.data.rows[o][2],
								ship : result.data.rows[o][3],
								shipurl : result.data.rows[o][4],
								cruiseurl : result.data.rows[o][5],
								mission : result.data.rows[o][6],
								dates : result.data.rows[o][7],
								subjects : result.data.rows[o][8],
								school : result.data.rows[o][9],
								city : result.data.rows[o][10],
								state : result.data.rows[o][11],
								image : result.data.rows[o][12].split('?')[0],
								grades : result.data.rows[o][13],
								schoolurl : result.data.rows[o][14],
								wordpressurl : result.data.rows[o][15],
								year : result.data.rows[o][16],
								subjects1 : result.data.rows[o][8].split('&&')[0],
								subjects2 : result.data.rows[o][8].split('&&')[1],
								school1 : result.data.rows[o][9].split('&&')[0],
								school2 : result.data.rows[o][9].split('&&')[1],
								schoolurl1 : result.data.rows[o][14].split('&&')[0],
								schoolurl2 : result.data.rows[o][14].split('&&')[1],
								tabIndex : 150 + o,
								checkContents : true

							});

						}
					}
					return teachers;
				});
			});
		}
	};
}]);

////////////////////Media Page///////////////////////////

TAS_SITE.factory('Media', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {
		loadMediaList : function() {
			var teachers = [];
			/////////Calls the API for the TAS(Multiple Years) Fusion Table
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
				
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+TeacherLastName%2CTeacherFirstName%2CShipType%2C+Ship%2C+ShipUrl%2C+CruiseURL%2C+Mission%2C+CruiseDates%2C+SubjectsTaught%2C+School%2C+City%2C+State%2C+Image%2C+Grades%2C+SchoolURL%2C+WordPressURL%2C+Year+FROM+1Xh5kWI_ZHd-PZRuPcgrV_oS13HHN6JGtRK4s75Mn+ORDER%20BY+TeacherLastName+"&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK&ORDER%20BY+CruiseDates').then(function(result) {
				if (result.data.rows != undefined) {
					teachers.yearsArr = [];
					teachers.finalYearsArr = [];
					teachers.group0 = [];
					teachers.group1 = [];
					teachers.group2 = [];
					teachers.group3 = [];
					teachers.buttons = [];
					//////////Checks to see if the if today's date is after the cruise dates.  If so, it adds that teacher's name to an array
					var d = new Date();
					var td = d.valueOf();

					for (var o = 0; o < result.data.rows.length; o++) {
						var pd = new Date(result.data.rows[o][7].split('-')[0]);
						var tpd = pd.valueOf();

						if (td >= tpd) {

							teachers.push({
								lastname : result.data.rows[o][0],
								lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
								firstname : result.data.rows[o][1].replace(' ', ''),
								shiptype : result.data.rows[o][2],
								ship : result.data.rows[o][3],
								shipurl : result.data.rows[0][4],
								cruiseurl : result.data.rows[o][5],
								mission : result.data.rows[o][6],
								dates : result.data.rows[o][7],
								subjects : result.data.rows[o][8],
								school : result.data.rows[o][9],
								city : result.data.rows[o][10],
								state : result.data.rows[o][11],
								image : result.data.rows[o][12].split('?')[0] + '?w=100',
								grades : result.data.rows[o][13],
								schoolurl : result.data.rows[o][14],
								wordpressurl : result.data.rows[o][15],
								year : result.data.rows[o][16],
								subjects1 : result.data.rows[o][8].split('&&')[0],
								subjects2 : result.data.rows[o][8].split('&&')[1],
								school1 : result.data.rows[o][9].split('&&')[0],
								school2 : result.data.rows[o][9].split('&&')[1],
								schoolurl1 : result.data.rows[o][14].split('&&')[0],
								schoolurl2 : result.data.rows[o][14].split('&&')[1],
								checkContents : true,
								favorite : 'off',
								tabIndex : (150 + o)

							});
							////pushes all the years into an array
							teachers.yearsArr.push(result.data.rows[o][16]);
						}

					}
					teachers.yearsArr.sort().reverse();
					for (var x = 0; x < teachers.yearsArr.length - 1; x++) {
						if (teachers.yearsArr[x] != teachers.yearsArr[x + 1]) {
							teachers.finalYearsArr.push(teachers.yearsArr[x]);

							if (teachers.finalYearsArr.length < 5) {
								teachers.buttons.push({
									name : teachers.yearsArr[x].toString(),
									state : 'off'
								});
							}
						}
					}
					/////////////pushes data into 4 groups (creates the tabs in the box)
					for (var y = 0; y < teachers.length; y++) {

						if (teachers.finalYearsArr[0] == teachers[y].year) {
							teachers.group0.push(teachers[y]);
							if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
								teachers[y].imagesExist = true;

							} else {
								teachers[y].imagesExist = false;
							}
						}
						if (teachers.finalYearsArr[1] == teachers[y].year) {
							teachers.group1.push(teachers[y]);
							if (teachers[y].wordpressurl != "#" || teachers[y] != null) {
								teachers[y].imagesExist = true;
							} else {
								teachers[y].imagesExist = false;
							}
						}
						if (teachers.finalYearsArr[2] == teachers[y].year) {
							teachers.group2.push(teachers[y]);
							if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
								teachers[y].imagesExist = true;
							} else {
								teachers[y].imagesExist = false;
							}
						}
						if (teachers.finalYearsArr[3] == teachers[y].year) {
							teachers.group3.push(teachers[y]);
							if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
								teachers[y].imagesExist = true;
							} else {
								teachers[y].imagesExist = false;
							}
						}

					}
					return teachers;
				}
				else{
					return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						teachers.yearsArr = [];
						teachers.finalYearsArr = [];
						teachers.group0 = [];
						teachers.group1 = [];
						teachers.group2 = [];
						teachers.group3 = [];
						teachers.buttons = [];

						var d = new Date();
						var td = d.valueOf();

						for (var o = 0; o < result.data.rows.length; o++) {
							var pd = new Date(result.data.rows[o][7].split('-')[0]);
							var tpd = pd.valueOf();

							if (td >= tpd) {

								teachers.push({
									lastname : result.data.rows[o][0],
									lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
									firstname : result.data.rows[o][1].replace(' ', ''),
									shiptype : result.data.rows[o][2],
									ship : result.data.rows[o][3],
									shipurl : result.data.rows[0][4],
									cruiseurl : result.data.rows[o][5],
									mission : result.data.rows[o][6],
									dates : result.data.rows[o][7],
									subjects : result.data.rows[o][8],
									school : result.data.rows[o][9],
									city : result.data.rows[o][10],
									state : result.data.rows[o][11],
									image : result.data.rows[o][12].split('?')[0] + '?w=100',
									grades : result.data.rows[o][13],
									schoolurl : result.data.rows[o][14],
									wordpressurl : result.data.rows[o][15],
									year : result.data.rows[o][16],
									subjects1 : result.data.rows[o][8].split('&&')[0],
									subjects2 : result.data.rows[o][8].split('&&')[1],
									school1 : result.data.rows[o][9].split('&&')[0],
									school2 : result.data.rows[o][9].split('&&')[1],
									schoolurl1 : result.data.rows[o][14].split('&&')[0],
									schoolurl2 : result.data.rows[o][14].split('&&')[1],
									checkContents : true,
									favorite : 'off',
									tabIndex : (150 + o)

								});
								teachers.yearsArr.push(result.data.rows[o][16]);
							}

						}

						teachers.yearsArr.sort().reverse();
						for (var x = 0; x < teachers.yearsArr.length - 1; x++) {
							if (teachers.yearsArr[x] != teachers.yearsArr[x + 1]) {
								teachers.finalYearsArr.push(teachers.yearsArr[x]);

								if (teachers.finalYearsArr.length < 5) {
									teachers.buttons.push({
										name : teachers.yearsArr[x].toString(),
										state : 'off'
									});
								}
							}
						}

						for (var y = 0; y < teachers.length; y++) {

							if (teachers.finalYearsArr[0] == teachers[y].year) {
								teachers.group0.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;

								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[1] == teachers[y].year) {
								teachers.group1.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y] != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[2] == teachers[y].year) {
								teachers.group2.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[3] == teachers[y].year) {
								teachers.group3.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}

						}
					}
					return teachers;
				});
					
				}
				
			}, function(error) {
				var teachers = [];

				return $http.get('JSONBackups/TeacherFusionTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						teachers.yearsArr = [];
						teachers.finalYearsArr = [];
						teachers.group0 = [];
						teachers.group1 = [];
						teachers.group2 = [];
						teachers.group3 = [];
						teachers.buttons = [];

						var d = new Date();
						var td = d.valueOf();

						for (var o = 0; o < result.data.rows.length; o++) {
							var pd = new Date(result.data.rows[o][7].split('-')[0]);
							var tpd = pd.valueOf();

							if (td >= tpd) {

								teachers.push({
									lastname : result.data.rows[o][0],
									lastname_forDOM : DigPatt(result.data.rows[o][0].replace(' ', '')),
									firstname : result.data.rows[o][1].replace(' ', ''),
									shiptype : result.data.rows[o][2],
									ship : result.data.rows[o][3],
									shipurl : result.data.rows[0][4],
									cruiseurl : result.data.rows[o][5],
									mission : result.data.rows[o][6],
									dates : result.data.rows[o][7],
									subjects : result.data.rows[o][8],
									school : result.data.rows[o][9],
									city : result.data.rows[o][10],
									state : result.data.rows[o][11],
									image : result.data.rows[o][12].split('?')[0] + '?w=100',
									grades : result.data.rows[o][13],
									schoolurl : result.data.rows[o][14],
									wordpressurl : result.data.rows[o][15],
									year : result.data.rows[o][16],
									subjects1 : result.data.rows[o][8].split('&&')[0],
									subjects2 : result.data.rows[o][8].split('&&')[1],
									school1 : result.data.rows[o][9].split('&&')[0],
									school2 : result.data.rows[o][9].split('&&')[1],
									schoolurl1 : result.data.rows[o][14].split('&&')[0],
									schoolurl2 : result.data.rows[o][14].split('&&')[1],
									checkContents : true,
									favorite : 'off',
									tabIndex : (150 + o)

								});
								teachers.yearsArr.push(result.data.rows[o][16]);
							}

						}

						teachers.yearsArr.sort().reverse();
						for (var x = 0; x < teachers.yearsArr.length - 1; x++) {
							if (teachers.yearsArr[x] != teachers.yearsArr[x + 1]) {
								teachers.finalYearsArr.push(teachers.yearsArr[x]);

								if (teachers.finalYearsArr.length < 5) {
									teachers.buttons.push({
										name : teachers.yearsArr[x].toString(),
										state : 'off'
									});
								}
							}
						}

						for (var y = 0; y < teachers.length; y++) {

							if (teachers.finalYearsArr[0] == teachers[y].year) {
								teachers.group0.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;

								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[1] == teachers[y].year) {
								teachers.group1.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y] != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[2] == teachers[y].year) {
								teachers.group2.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}
							if (teachers.finalYearsArr[3] == teachers[y].year) {
								teachers.group3.push(teachers[y]);
								if (teachers[y].wordpressurl != "#" || teachers[y].wordpressurl != null) {
									teachers[y].imagesExist = true;
								} else {
									teachers[y].imagesExist = false;
								}
							}

						}
					}
					return teachers;
				});
			});
		}
	};
}]);

TAS_SITE.factory('News', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {
		getNewsData : function() {
			var news = [];
			/////Calls the API for the News DB Fusion Table, Sorts items by Teacher and year and creates a object which compiles every new story about a teacher in one place
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+ArticleYear,Teacher,MediaOutlet,ArticleTitle,MediaOutletURL,ArticleURL,Image+FROM+1-1IHQax0eNNwsWjd8rRtpdxTlukzIMHbZmttKXfF+ORDER%20BY+ArticleYear+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					news.yearsArr = [];
					news.finalYearsArr = [];
					news.teachers = [];
					news.holderNews = [];
					news.finalNews = [];
					var holderNewsStr = '';

					for (var o = 0; o < result.data.rows.length; o++) {
						news.push({
							articleYear : result.data.rows[o][0],
							teacher : result.data.rows[o][1],
							mediaoutlet : result.data.rows[o][2],
							articletitle : result.data.rows[o][3],
							mediaoutleturl : result.data.rows[o][4],
							articleurl : result.data.rows[o][5],
							image : result.data.rows[o][6],
							checkContents : true,

						});

						news.yearsArr.push(result.data.rows[o][0]);

					}
				}
				else{
					news.yearsArr = [];
					news.finalYearsArr = [];
					news.teachers = [];
					news.holderNews = [];
					news.finalNews = [];
					var holderNewsStr = '';

					for (var o = 0; o < result.data.rows.length; o++) {
						news.push({
							articleYear : result.data.rows[o][0],
							teacher : result.data.rows[o][1],
							mediaoutlet : result.data.rows[o][2],
							articletitle : result.data.rows[o][3],
							mediaoutleturl : result.data.rows[o][4],
							articleurl : result.data.rows[o][5],
							image : result.data.rows[o][6],
							checkContents : true,

						});

						news.yearsArr.push(result.data.rows[o][0]);

					}
				}

				for (var i = 0; i < news.length - 1; i++) {
					if (news[i].teacher != news[i + 1].teacher) {
						news.teachers.push({
							teacher : news[i].teacher,
							year : news[i].articleYear
						});
					}
					if (news.yearsArr[i] != news.yearsArr[i + 1]) {
						news.finalYearsArr.push(news.yearsArr[i]);

					}

				}
				news.finalYearsArr.push(news.yearsArr[news.length - 1]);
				news.teachers.push({
					teacher : news[news.length - 1].teacher,
					year : news[news.length - 1].articleYear
				});

				for (var u = 0; u < news.teachers.length; u++) {
					for (var x = 0; x < news.length; x++) {

						if (news.teachers[u].teacher == news[x].teacher && !holderNewsStr.replace(/\W/g, '').match(news.teachers[u].teacher.replace(/\W/g, ''))) {
							news.holderNews.push({
								id : news.teachers[u].year + '_' + news[x].teacher,
								newsItems : news[x]
							});
						}

					}
					holderNewsStr += news.teachers[u].teacher;
				}
				var teacherStr = '';
				for (var b = 0; b < news.holderNews.length - 1; b++) {
					if (teacherStr.match(news.holderNews[b].id)) {
						tmpid = news.holderNews[b].id;

						for (var c = 0; c < news.finalNews.length; c++) {
							extra = news.holderNews[b].newsItems.articletitle + '##' + news.holderNews[b].newsItems.mediaoutlet + '##' + news.holderNews[b].newsItems.articleurl + '##' + news.holderNews[b].newsItems.mediaoutleturl + '$$';
							if (tmpid == news.finalNews[c].id) {
								news.finalNews[c].extra += extra;
							}
						}

					} else {
						news.finalNews.push({
							id : news.holderNews[b].id,
							main : news.holderNews[b],
							extra : '',
							tabIndex : 500 - b
						});
					}

					teacherStr += news.holderNews[b].id;

				}

				return news;
			}, function(error) {
				var news = [];
				return $http.get('JSONBackups/NewsFusionTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						news.yearsArr = [];
						news.finalYearsArr = [];
						news.teachers = [];
						news.holderNews = [];
						news.finalNews = [];
						var holderNewsStr = '';

						for (var o = 0; o < result.data.rows.length; o++) {
							news.push({
								articleYear : result.data.rows[o][0],
								teacher : result.data.rows[o][1],
								mediaoutlet : result.data.rows[o][2],
								articletitle : result.data.rows[o][3],
								mediaoutleturl : result.data.rows[o][4],
								articleurl : result.data.rows[o][5],
								image : result.data.rows[o][6],
								checkContents : true,

							});

							news.yearsArr.push(result.data.rows[o][0]);

						}
					}

					for (var i = 0; i < news.length - 1; i++) {
						if (news[i].teacher != news[i + 1].teacher) {
							news.teachers.push({
								teacher : news[i].teacher,
								year : news[i].articleYear
							});
						}
						if (news.yearsArr[i] != news.yearsArr[i + 1]) {
							news.finalYearsArr.push(news.yearsArr[i]);

						}

					}
					news.finalYearsArr.push(news.yearsArr[news.length - 1]);
					news.teachers.push({
						teacher : news[news.length - 1].teacher,
						year : news[news.length - 1].articleYear
					});

					for (var u = 0; u < news.teachers.length; u++) {
						for (var x = 0; x < news.length; x++) {

							if (news.teachers[u].teacher == news[x].teacher && !holderNewsStr.replace(/\W/g, '').match(news.teachers[u].teacher.replace(/\W/g, ''))) {
								news.holderNews.push({
									id : news.teachers[u].year + '_' + news[x].teacher,
									newsItems : news[x]
								});
							}

						}
						holderNewsStr += news.teachers[u].teacher;
					}
					var teacherStr = '';
					for (var b = 0; b < news.holderNews.length - 1; b++) {
						if (teacherStr.match(news.holderNews[b].id)) {
							tmpid = news.holderNews[b].id;

							for (var c = 0; c < news.finalNews.length; c++) {
								extra = news.holderNews[b].newsItems.articletitle + '##' + news.holderNews[b].newsItems.mediaoutlet + '##' + news.holderNews[b].newsItems.articleurl + '##' + news.holderNews[b].newsItems.mediaoutleturl + '$$';
								if (tmpid == news.finalNews[c].id) {
									news.finalNews[c].extra += extra;
								}
							}

						} else {
							news.finalNews.push({
								id : news.holderNews[b].id,
								main : news.holderNews[b],
								extra : '',
								tabIndex : 500 - b
							});
						}

						teacherStr += news.holderNews[b].id;

					}

					return news;

				});

			});
		}
	};

}]);

TAS_SITE.factory('POW', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {
		getPOWData : function() {
			///////Calls the API for the Photo of the Week Fusion Table and returns all the POW Data
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
	
			var pow = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+PhotoURL,Title,PhotoCaption,BlogQuote,BlogURL,BlogCredit,PhotoCredit,BlogTitle,PublishDate, Keywords,Tweet+FROM+1bJsFIm19ENw-U9vkm5B_hA6H_2VxTga2BYWm-CmN+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					var d = new Date();
					//Today's Date
					var td = d.valueOf();
					result.data.rows.reverse();
					var f=0;
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][8]);
						//The publish date field
						var tpd = pd.valueOf();
						
						if (td >= tpd) {
							if(tpd<=1452067200000)
							{
								pow.push({
									id : f,
									src : result.data.rows[i][0],
									title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									parent : result.data.rows[i][4],
									blogcredit : result.data.rows[i][6],
									photocredit : result.data.rows[i][6],
									post_title : result.data.rows[i][7],
									date : result.data.rows[i][8],
									keywords : result.data.rows[i][9],
									tweet: result.data.rows[i][10],
									dataloaded : true,
									tabIndex : (150 + (i + 7))
								});
								f++;
							}
						
						else if(isNaN(tpd)==false){
							
								pow.push({
									id : f,
									src : result.data.rows[i][0],
									title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
									parent : result.data.rows[i][4],
									blogcredit: result.data.rows[i][5],
									photocredit : result.data.rows[i][6],
									post_title : result.data.rows[i][7],
									date : result.data.rows[i][8],
									keywords : result.data.rows[i][9],
									tweet: result.data.rows[i][10],
									dataloaded : true,
									tabIndex : (150 + (i + 7))
								});
								f++;
							}
						}	
					}
				return pow;
				}
				else{
					return $http.get('/JSONBAckups/POWFusionTable.json').then(function(result)
					{
					var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][7]);
							var tpd = pd.valueOf()

							if (td >= tpd) {
								if(tpd<=1452067200000)
								{
									pow.push({
										id : f,
										src : result.data.rows[i][0],
										title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										parent : result.data.rows[i][4],
										blogcredit : result.data.rows[i][6],
										photocredit : result.data.rows[i][6],
										post_title : result.data.rows[i][7],
										date : result.data.rows[i][8],
										keywords : result.data.rows[i][9],
										tweet: result.data.rows[i][10],
										dataloaded : true,
										tabIndex : (150 + (i + 7))
									});
									f++;
								}
							
							else if(isNaN(tpd)==false){
								
									pow.push({
										id : f,
										src : result.data.rows[i][0],
										title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										parent : result.data.rows[i][4],
										blogcredit: result.data.rows[i][5],
										photocredit : result.data.rows[i][6],
										post_title : result.data.rows[i][7],
										date : result.data.rows[i][8],
										keywords : result.data.rows[i][9],
										tweet: result.data.rows[i][10],
										dataloaded : true,
										tabIndex : (150 + (i + 7))
									});
									f++;
								}
							}	

						}
						return pow;
					});
				}

				
			}, function(error) {
				return $http.get('JSONBackups/POWFusionTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][7]);
							var tpd = pd.valueOf()

							if (td >= tpd) {
								if(tpd<=1452067200000)
								{
									pow.push({
										id : f,
										src : result.data.rows[i][0],
										title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										parent : result.data.rows[i][4],
										blogcredit : result.data.rows[i][6],
										photocredit : result.data.rows[i][6],
										post_title : result.data.rows[i][7],
										date : result.data.rows[i][8],
										keywords : result.data.rows[i][9],
										tweet: result.data.rows[i][10],
										dataloaded : true,
										tabIndex : (150 + (i + 7))
									});
									f++;
								}
							
							else if(isNaN(tpd)==false){
								
									pow.push({
										id : f,
										src : result.data.rows[i][0],
										title : result.data.rows[i][1].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										caption : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										blogquote : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
										parent : result.data.rows[i][4],
										blogcredit: result.data.rows[i][5],
										photocredit : result.data.rows[i][6],
										post_title : result.data.rows[i][7],
										date : result.data.rows[i][8],
										keywords : result.data.rows[i][9],
										tweet: result.data.rows[i][10],
										dataloaded : true,
										tabIndex : (150 + (i + 7))
									});
									f++;
								}
							}	

						}

					}

					return pow
				});
			});
		}
	};
}]);

TAS_SITE.factory('Alumni', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {
		getSpotData : function() {
			var spot = [];
			/////////Calls the API for the Alumni Spotlight Fusion Table, returns all spotlights
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
				
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+FirstName,LastName,ShortBody,LongBody,image,caption,PublishDate,Region+FROM+1z6kUehyfSNqaAGinvARZLYyjb7Dhk2F9rt49xHIV+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows !== undefined) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][6]);
						var tpd = pd.valueOf();

						if (result.data.rows[i][6] != '#' && td >= tpd) {
							spot.push({
								id : i,
								firstname : result.data.rows[i][0],
								lastname : result.data.rows[i][1],
								shortbody : result.data.rows[i][2],
								longbody : result.data.rows[i][3],
								src : result.data.rows[i][4].split('?')[0],
								caption : result.data.rows[i][5],
								date : result.data.rows[i][6],
								region : result.data.rows[i][7],
								more_url : result.data.rows[i][5].replace(/ /g, '_'),
								hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
								dataloaded : true,
								tabIndex : 150 + i

							});
						}

					}
					
				return spot;
				}
				else{
					return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
					if (result.data.rows !== undefined) {
						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][6]);
							var tpd = pd.valueOf();

							if (result.data.rows[i][6] != '#' && td >= tpd) {
								spot.push({
									id : i,
									firstname : result.data.rows[i][0],
									lastname : result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i

								});
							}

						}

					}

					return spot
				});
				}

			}, function(error) {
				return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][6]);
							var tpd = pd.valueOf();

							if (result.data.rows[i][6] != '#' && td >= tpd) {
								spot.push({
									id : i,
									firstname : result.data.rows[i][0],
									lastname : result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i

								});
							}

						}

					}

					return spot
				});
			});
		}
	};
}]);

TAS_SITE.factory('Tabs', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	///////////////Used for all pages that have "Tabbed boxes" that are fed by Google Spreadsheets
	
	return {

		getTabsData : function(spreadsheet_id, type) {
			//////////////Calls the API for a specific google Spreadsheet based on the spreadsheet_id passed to the function, creates a 'tabs' object which includes the name of the table and the content (image and text) that is associated with that Tab
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup			
			var tabs = [];
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + spreadsheet_id + '/1/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) 			{
				tabs = result.data.feed.entry;
				if(tabs!==undefined)
				{
					
				for (var i = 0; i < tabs.length; i++) {
					if (i == 0) {
						tabs[i].gsx$tabname.state = 'on';
						tabs[i].gsx$tabname.classy = 'shower';
						tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
						tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
						tabs[i].tabIndex = i + 150;
						tabs[i].caption = tabs[i].gsx$caption.$t
					} else {
						tabs[i].gsx$tabname.classy = 'on';
						tabs[i].gsx$tabname.classy = "hider";
						tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
						tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
						tabs[i].tabIndex = i + 150;
						tabs[i].caption = tabs[i].gsx$caption.$t
					}
				}
				tabs.type = type;
				
				return tabs;
				}
				else{
					return $http.get('JSONBackups/' + spreadsheet_id + '_1.json').then(function(result) {
					tabs = result.data.feed.entry;

					for (var i = 0; i < tabs.length; i++) {
						if (i == 0) {
							tabs[i].gsx$tabname.state = 'on';
							tabs[i].gsx$tabname.classy = 'shower';
							tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
							tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
							tabs[i].tabIndex = i + 150;
							tabs[i].caption = tabs[i].gsx$caption.$t
						} else {
							tabs[i].gsx$tabname.classy = 'on';
							tabs[i].gsx$tabname.classy = "hider";
							tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
							tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
							tabs[i].tabIndex = i + 150;
							tabs[i].caption = tabs[i].gsx$caption.$t
						}
					}
					tabs.type = type;

					return tabs;
				});
				}
			}, function(error) {

				return $http.get('JSONBackups/' + spreadsheet_id + '_1.json').then(function(result) {
					tabs = result.data.feed.entry;

					for (var i = 0; i < tabs.length; i++) {
						if (i == 0) {
							tabs[i].gsx$tabname.state = 'on';
							tabs[i].gsx$tabname.classy = 'shower';
							tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
							tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
							tabs[i].tabIndex = i + 150;
							tabs[i].caption = tabs[i].gsx$caption.$t
						} else {
							tabs[i].gsx$tabname.classy = 'on';
							tabs[i].gsx$tabname.classy = "hider";
							tabs[i].gsx$tabname.rp = tabs[i].gsx$tabname.$t.replace(/ /g, '_');
							tabs[i].image = tabs[i].gsx$image.$t.split('?')[0];
							tabs[i].tabIndex = i + 150;
							tabs[i].caption = tabs[i].gsx$caption.$t
						}
					}
					tabs.type = type;

					return tabs;
				});
			});
		},
		getTopData : function(spreadsheet_id, type) {
			var top = [];
			//////////If the top content of the page is fed by a spreadsheet, this creates an object called top which includes the html and image for the top half of a "Tabbed" page
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + spreadsheet_id + '/2/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) 			{
				if(result!=undefined)
				{
				top = result.data.feed.entry;
				top.type = type;
				top.image = result.data.feed.entry[0].gsx$image.$t;
				top.imagealt = result.data.feed.entry[0].gsx$imagealt.$t;
				if(result.data.feed.entry[0].gsx$text!=null)
					{
						top.text=result.data.feed.entry[0].gsx$text.$t;
					}
				if(result.data.feed.entry[0].gsx$box!=null)
					{
						top.box=result.data.feed.entry[0].gsx$box.$t;
					}	
				return top;
				}
				else{
					return $http.get('JSONBackups/' + spreadsheet_id + '_2.json').then(function(result) {
					top = result.data.feed.entry;
					top.type = type;
					top.image = result.data.feed.entry[0].gsx$image.$t;
					top.imagealt = result.data.feed.entry[0].gsx$imagealt.$t;
					if(result.data.feed.entry[0].gsx$text!=null)
					{
						top.text=result.data.feed.entry[0].gsx$text.$t;
					}
					if(result.data.feed.entry[0].gsx$box!=null)
					{
						top.box=result.data.feed.entry[0].gsx$box.$t;
					}
					return top;
				});
				}
			}, function(error) {
				return $http.get('JSONBackups/' + spreadsheet_id + '_2.json').then(function(result) {
					top = result.data.feed.entry;
					top.type = type;
					top.image = result.data.feed.entry[0].gsx$image.$t;
					top.imagealt = result.data.feed.entry[0].gsx$imagealt.$t;
					if(result.data.feed.entry[0].gsx$text!=null)
					{
						top.text=result.data.feed.entry[0].gsx$text.$t;
					}
					if(result.data.feed.entry[0].gsx$box!=null)
					{
						top.box=result.data.feed.entry[0].gsx$box.$t;
					}
					return top;
				});

			});
		},
		getQuotesData : function(spreadsheet_id, type) {
			var quotes = {}
					return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + spreadsheet_id + '/3/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) 			{
						if(result!=undefined)
						{
							
						quotes=result.data.feed.entry;
						quotes.type = type;
					
						return quotes;
						}else{
					return $http.get('JSONBackUps/AlumniQuotes.json').then(function(result) 			
					{
						quotes=result.data.feed.entry;
						quotes.type = type;
						return quotes;
						
					});
					
				}
				
				return quotes;
			}, function(error){
				
					return $http.get('JSONBackUps/AlumniQuotes.json').then(function(result) 			
					{
						quotes=result.data.feed.entry;
						quotes.type = type;
						return quotes;
					});
					
			});
				
		}
	};
	
}]);

TAS_SITE.factory('FAQs', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {

		getFAQData : function() {
			////////Calls the API for the About>FAQs Google spreadsheet.  returns an faq object with a question and an answer
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			var faq = [];
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdGF0RG02ZzNHYzFRZnYwd3ZlNlRWcVE/1/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!==undefined)
				{
				var faq = result.data.feed.entry;
				
				for (var i = 0; i < faq.length; i++) {
					faq[i].id = i;
					faq[i].gsx$answer.hideAnswer = true;
					faq[i].tabIndex = i + 150;
				}
				return faq;
				}
				else{
					return $http.get('JSONBackups/FAQs.json').then(function(result) {
					var faq = result.data.feed.entry;
					for (var i = 0; i < faq.length; i++) {
						faq[i].id = i;
						faq[i].gsx$answer.hideAnswer = true;
						faq[i].tabIndex = i + 150;
					}
					return faq;
				});
				}
			}, function(error) {
				return $http.get('JSONBackups/FAQs.json').then(function(result) {
					var faq = result.data.feed.entry;
					for (var i = 0; i < faq.length; i++) {
						faq[i].id = i;
						faq[i].gsx$answer.hideAnswer = true;
						faq[i].tabIndex = i + 150;
					}
					return faq;
				});
			});
		},
		getQuotesData : function() {
			////////Calls the API for the Quotes Google spreadsheet.  returns an quotes object with a quote and a photo
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			var quotes = [];
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdHczblprYk9WalhQTzhnY0h5Sm10Z3c/1/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!=undefined)
				{
				quotes = result.data.feed.entry;
				for (var i = 0; i < quotes.length; i++) {
					quotes[i].id = i;
					quotes[i].gsx$tn.$t = quotes[i].gsx$tn.$t;
					quotes[i].tabIndex = i + 200;
				}

				return quotes;
				}
				else{
					return $http.get('JSONBackups/Quotes.json').then(function(result) {
					quotes = result.data.feed.entry;
					for (var i = 0; i < quotes.length; i++) {
						quotes[i].id = i;
						quotes[i].gsx$tn.$t = quotes[i].gsx$tn.$t;
						quotes[i].tabIndex = i + 200;
					}

					return quotes;

				});
				}
			}, function(error) {
				return $http.get('JSONBackups/Quotes.json').then(function(result) {
					quotes = result.data.feed.entry;
					for (var i = 0; i < quotes.length; i++) {
						quotes[i].id = i;
						quotes[i].gsx$tn.$t = quotes[i].gsx$tn.$t;
						quotes[i].tabIndex = i + 200;
					}

					return quotes;

				});
			});
		} 
	};
}]);

TAS_SITE.factory('TASA', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {
		////////Calls the API for the MATASA and NETASA Google spreadsheet.  returns an intro objects
		/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
		createMap: function(states){
			
			var map = [];
			return $http.jsonp('https://spreadsheets.google.com/feeds/list/1Fl9a4DZLdYUVATM3GDRo8hWcszX4IzibWIjs_WcKv2c/od6/public/values?alt=json&callback=JSON_CALLBACK').then(function(data) {
			
				data.data.feed.entry.forEach(function(item){
					if(item.gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
					{
						states.forEach(function(state){
							
						if(state.toLowerCase()==item.gsx$stateab.$t.toLowerCase()){
							map.push({
							state:item.gsx$stateab.$t,
							code:item.gsx$code.$t,
							});
						}
						});	
					}
				});
				return map;		
			});
		},
		
		getIntroData : function(spreadsheet, number) {
			var intro ={};
			return $http.jsonp(spreadsheet + number + '/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!==undefined)
				{
					for(var i=0; i<result.data.feed.entry.length; i++)
					{	
						if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
						intro.intro=result.data.feed.entry[i].gsx$body.$t;
						intro.headline =result.data.feed.entry[i].gsx$headline.$t
						intro.contact=result.data.feed.entry[i].gsx$contact.$t
						}
				
					}
					return intro;
				}else{
					return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					for(var i=0; i<result.data.feed.entry.length; i++)
					{	
						if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
						intro.intro=result.data.feed.entry[i].gsx$body.$t;
						intro.headline =result.data.feed.entry[i].gsx$headline.$t
						intro.contact=result.data.feed.entry[i].gsx$contact.$t
						}
				
					}

					return intro;
				});
				}
			}, function(error) {
				return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					for(var i=0; i<result.data.feed.entry.length; i++)
					{	
						if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
						intro.intro=result.data.feed.entry[i].gsx$body.$t;
						intro.headline =result.data.feed.entry[i].gsx$headline.$t
						intro.contact=result.data.feed.entry[i].gsx$contact.$t
						}
				
					}

					return intro;
				});
			});

		},
		getGalleryData : function(spreadsheet, number) {
			////////Calls the API for the MATASA and NETASA Google spreadsheet.  returns an gallery object
		/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			var gallery = [];
			return $http.jsonp(spreadsheet + number + '/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!==undefined)
				{
				var f=0;
				for (var i = 0; i < result.data.feed.entry.length; i++) {
					
					if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
					{
					result.data.feed.entry[i].id = f;
					result.data.feed.entry[i].tabIndex = i + 150;
					result.data.feed.entry[i].src = result.data.feed.entry[i].gsx$photourl.$t;
					result.data.feed.entry[i].caption = result.data.feed.entry[i].gsx$caption.$t;
					gallery.push(result.data.feed.entry[i])
					
					//faq[i].gsx$answer.hideAnswer=true;
					f++
					}
				}
				
				return gallery;
				}
				else{
					return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					var gallery = result.data.feed.entry;
					for (var i = 0; i < result.data.feed.entry.length; i++) {
						if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
						gallery.push(result.data.feed.entry[i])
						gallery[i].id = i;
						gallery[i].tabIndex = i + 150;
						gallery[i].src = gallery[i].gsx$photourl.$t;
						gallery[i].caption = gallery[i].gsx$caption.$t;
						//faq[i].gsx$answer.hideAnswer=true;
						}
					}
					return gallery;
				});
				}
			}, function(error) {
				return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					var gallery = result.data.feed.entry;
					for (var i = 0; i < result.data.feed.entry.length; i++) {
						if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
						gallery.push(result.data.feed.entry[i])
						gallery[i].id = i;
						gallery[i].tabIndex = i + 150;
						gallery[i].src = gallery[i].gsx$photourl.$t;
						gallery[i].caption = gallery[i].gsx$caption.$t;
						//faq[i].gsx$answer.hideAnswer=true;
						}
					}
					return gallery;
				});
			});
		},
		getTeacherData : function(spreadsheet, number) {
			////////Calls the API for the MATASA and NETASA Google spreadsheet.  returns an teacher object
		/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			var teachers = [];
			return $http.jsonp(spreadsheet + number + '/public/values?alt=json&callback=JSON_CALLBACK').then(function(result) {
				if(result!==undefined)
				{
						
					teachers = result.data.feed.entry;
					teachers.teacher_locations = [];
					teachers.teacher_locations_str = '';
					teachers.finalLocation = [];
					teachers.states = [];
					teachers.objArr = [];
					teachers.finalObjArr = [];
	
					for (var i = 0; i < teachers.length - 1; i++) {
					if(result.data.feed.entry[i].gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
					{	
						if (teachers[i].gsx$state.$t != teachers[i + 1].gsx$state.$t) {
							teachers.teacher_locations.push(JSON.stringify({
								state : teachers[i].gsx$state.$t,
								//stateAB : teachers[i].gsx$stateab.$t,
								city : teachers[i].gsx$city.$t,
								profileurl : teachers[i].gsx$profileurl.$t,
								profileimage : teachers[i].gsx$profileimage.$t,
								school : teachers[i].gsx$schools.$t,
								name : teachers[i].gsx$teachername.$t,
								year : teachers[i].gsx$year.$t,
								stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
								cx: teachers[i].gsx$cx.$t,
								cy: teachers[i].gsx$cy.$t,
								r: teachers[i].gsx$r.$t
							}));
							teachers.teacher_locations.push('$$$$');
							teachers.states.push(teachers[i].gsx$state.$t);
						} else {
							teachers.teacher_locations.push(JSON.stringify({
								state : teachers[i].gsx$state.$t,
								city : teachers[i].gsx$city.$t,
								profileurl : teachers[i].gsx$profileurl.$t,
								profileimage : teachers[i].gsx$profileimage.$t,
								school : teachers[i].gsx$schools.$t,
								name : teachers[i].gsx$teachername.$t,
								year : teachers[i].gsx$year.$t,
								stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
								cx: teachers[i].gsx$cx.$t,
								cy: teachers[i].gsx$cy.$t,
								r: teachers[i].gsx$r.$t
							}));
						}
					}
				}

				teachers.teacher_locations.push(JSON.stringify({
					state : teachers[teachers.length - 1].gsx$state.$t,
					stateAB : teachers[teachers.length - 1].gsx$stateab.$t,
					city : teachers[teachers.length - 1].gsx$city.$t,
					profileurl : teachers[teachers.length - 1].gsx$profileurl.$t,
					profileimage : teachers[teachers.length - 1].gsx$profileimage.$t,
					school : teachers[teachers.length - 1].gsx$schools.$t,
					name : teachers[teachers.length - 1].gsx$teachername.$t,
					year : teachers[teachers.length - 1].gsx$year.$t,
					stateId : teachers[teachers.length - 1].gsx$state.$t.replace(/ /, '').toLowerCase(),
					cx: teachers[i].gsx$cx.$t,
					cy: teachers[i].gsx$cy.$t,
					r: teachers[i].gsx$r.$t

				}));
				teachers.teacher_locations.push('$$$$');
				teachers.states.push(teachers[i].gsx$state.$t);

				teachers.teacher_location_str = teachers.teacher_locations.toString();
				teachers.finalLocation = teachers.teacher_location_str.split('$$$$');
				
				for (var x = 0; x < teachers.finalLocation.length; x++) {
					var splitter = teachers.finalLocation[x].split('},')
					var objArr = [];
					for (var t = 0; t < splitter.length - 1; t++) {
						var tmpstr = splitter[t] + '}';
						tmpstr = tmpstr.replace(',{', '{')

						objArr.push(jQuery.parseJSON(tmpstr));

					}
					teachers.finalObjArr.push({
						objects : objArr,
						tabIndex : (i + 130)
					});
				}

				return teachers;
				
				}
				else{
					return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					teachers = result.data.feed.entry;
					teachers.teacher_locations = [];
					teachers.teacher_locations_str = '';
					teachers.finalLocation = [];
					teachers.states = [];
					teachers.objArr = [];
					teachers.finalObjArr = [];

					for (var i = 0; i < teachers.length - 1; i++) {
						if(result.data.feed.entry.gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
							if (teachers[i].gsx$state.$t != teachers[i + 1].gsx$state.$t) {
								teachers.teacher_locations.push(JSON.stringify({
									state : teachers[i].gsx$state.$t,
									//stateAB : teachers[i].gsx$stateab.$t,
									city : teachers[i].gsx$city.$t,
									profileurl : teachers[i].gsx$profileurl.$t,
									profileimage : teachers[i].gsx$profileimage.$t,
									school : teachers[i].gsx$schools.$t,
									name : teachers[i].gsx$teachername.$t,
									year : teachers[i].gsx$year.$t,
									stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
									cx: teachers[i].gsx$cx.$t,
									cy: teachers[i].gsx$cy.$t,
									r: teachers[i].gsx$r.$t
								}));
								teachers.teacher_locations.push('$$$$');
								teachers.states.push(teachers[i].gsx$state.$t);
							} else {
								teachers.teacher_locations.push(JSON.stringify({
									state : teachers[i].gsx$state.$t,
									//stateAB : teachers[i].gsx$stateab.$t,
									city : teachers[i].gsx$city.$t,
									profileurl : teachers[i].gsx$profileurl.$t,
									profileimage : teachers[i].gsx$profileimage.$t,
									school : teachers[i].gsx$schools.$t,
									name : teachers[i].gsx$teachername.$t,
									year : teachers[i].gsx$year.$t,
									stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
									cx: teachers[i].gsx$cx.$t,
									cy: teachers[i].gsx$cy.$t,
									r: teachers[i].gsx$r.$t	
								}));
							}
						}
					}

					teachers.teacher_locations.push(JSON.stringify({
						state : teachers[teachers.length - 1].gsx$state.$t,
						stateAB : teachers[teachers.length - 1].gsx$stateab.$t,
						city : teachers[teachers.length - 1].gsx$city.$t,
						profileurl : teachers[teachers.length - 1].gsx$profileurl.$t,
						profileimage : teachers[teachers.length - 1].gsx$profileimage.$t,
						school : teachers[teachers.length - 1].gsx$schools.$t,
						name : teachers[teachers.length - 1].gsx$teachername.$t,
						year : teachers[teachers.length - 1].gsx$year.$t,
						stateId : teachers[teachers.length - 1].gsx$state.$t.replace(/ /, '').toLowerCase(),
						cx: teachers[i].gsx$cx.$t,
						cy: teachers[i].gsx$cy.$t,
						r: teachers[i].gsx$r.$t

					}));
					teachers.teacher_locations.push('$$$$');
					teachers.states.push(teachers[i].gsx$state.$t);

					teachers.teacher_location_str = teachers.teacher_locations.toString();
					teachers.finalLocation = teachers.teacher_location_str.split('$$$$');
					
					for (var x = 0; x < teachers.finalLocation.length; x++) {
						var splitter = teachers.finalLocation[x].split('},')
						var objArr = [];
						for (var t = 0; t < splitter.length - 1; t++) {
							var tmpstr = splitter[t] + '}';
							tmpstr = tmpstr.replace(',{', '{')

							objArr.push(jQuery.parseJSON(tmpstr));

						}
						teachers.finalObjArr.push({
							objects : objArr,
							tabIndex : (i + 130)
						});
					}

					return teachers;

				});
				}
			}, function(error) {
				return $http.get('JSONBackups/' + spreadsheet.split('list/')[1].split('/')[0] + '_' + number + '.json').then(function(result) {
					teachers = result.data.feed.entry;
					teachers.teacher_locations = [];
					teachers.teacher_locations_str = '';
					teachers.finalLocation = [];
					teachers.states = [];
					teachers.objArr = [];
					teachers.finalObjArr = [];

					for (var i = 0; i < teachers.length - 1; i++) {
						if(result.data.feed.entry.gsx$region.$t.toLowerCase()===($location.path().split('/')[1].split('/')[0].toLowerCase()))
						{
							if (teachers[i].gsx$state.$t != teachers[i + 1].gsx$state.$t) {
								teachers.teacher_locations.push(JSON.stringify({
									state : teachers[i].gsx$state.$t,
									//stateAB : teachers[i].gsx$stateab.$t,
									city : teachers[i].gsx$city.$t,
									profileurl : teachers[i].gsx$profileurl.$t,
									profileimage : teachers[i].gsx$profileimage.$t,
									school : teachers[i].gsx$schools.$t,
									name : teachers[i].gsx$teachername.$t,
									year : teachers[i].gsx$year.$t,
									stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
									cx: teachers[i].gsx$cx.$t,
									cy: teachers[i].gsx$cy.$t,
									r: teachers[i].gsx$r.$t
								}));
								teachers.teacher_locations.push('$$$$');
								teachers.states.push(teachers[i].gsx$state.$t);
							} else {
								teachers.teacher_locations.push(JSON.stringify({
									state : teachers[i].gsx$state.$t,
									//stateAB : teachers[i].gsx$stateab.$t,
									city : teachers[i].gsx$city.$t,
									profileurl : teachers[i].gsx$profileurl.$t,
									profileimage : teachers[i].gsx$profileimage.$t,
									school : teachers[i].gsx$schools.$t,
									name : teachers[i].gsx$teachername.$t,
									year : teachers[i].gsx$year.$t,
									stateId : teachers[i].gsx$state.$t.replace(/ /, '').toLowerCase(),
									cx: teachers[i].gsx$cx.$t,
									cy: teachers[i].gsx$cy.$t,
									r: teachers[i].gsx$r.$t
								}));
							}
						}
					}

					teachers.teacher_locations.push(JSON.stringify({
						state : teachers[teachers.length - 1].gsx$state.$t,
						stateAB : teachers[teachers.length - 1].gsx$stateab.$t,
						city : teachers[teachers.length - 1].gsx$city.$t,
						profileurl : teachers[teachers.length - 1].gsx$profileurl.$t,
						profileimage : teachers[teachers.length - 1].gsx$profileimage.$t,
						school : teachers[teachers.length - 1].gsx$schools.$t,
						name : teachers[teachers.length - 1].gsx$teachername.$t,
						year : teachers[teachers.length - 1].gsx$year.$t,
						stateId : teachers[teachers.length - 1].gsx$state.$t.replace(/ /, '').toLowerCase(),
						cx: teachers[i].gsx$cx.$t,
						cy: teachers[i].gsx$cy.$t,
						r: teachers[i].gsx$r.$t

					}));
					teachers.teacher_locations.push('$$$$');
					teachers.states.push(teachers[i].gsx$state.$t);

					teachers.teacher_location_str = teachers.teacher_locations.toString();
					teachers.finalLocation = teachers.teacher_location_str.split('$$$$');
					
					for (var x = 0; x < teachers.finalLocation.length; x++) {
						var splitter = teachers.finalLocation[x].split('},')
						var objArr = [];
						for (var t = 0; t < splitter.length - 1; t++) {
							var tmpstr = splitter[t] + '}';
							tmpstr = tmpstr.replace(',{', '{')

							objArr.push(jQuery.parseJSON(tmpstr));

						}
						teachers.finalObjArr.push({
							objects : objArr,
							tabIndex : (i + 130)
						});
					}

					return teachers;

				});
			});
		},
		getSpotlightData : function(region) {
			/////Calls api for the Alumni Spotlight Fusion Table, returns spot object with info about spotlights
			/////////Includes two error checks one if the api returns as undefined (i.e it doesn't exist) and one if the api returns an error - if an error is thrown, the script moves on to a local backup
			var spot = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+FirstName,LastName,ShortBody,LongBody,image,caption,PublishDate,Region+FROM+1z6kUehyfSNqaAGinvARZLYyjb7Dhk2F9rt49xHIV+WHERE+Region+CONTAINS%20IGNORING%20CASE%27' + region + '%27+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][6]);
						var tpd = pd.valueOf();

						if (result.data.rows[i][6] != '#' && td >= tpd) {
							spot.push({
								id : i,
								firstname : result.data.rows[i][0],
								lastname : result.data.rows[i][1],
								shortbody : result.data.rows[i][2],
								longbody : result.data.rows[i][3],
								url : result.data.rows[i][4].split('?')[0],
								caption : result.data.rows[i][5],
								date : result.data.rows[i][6],
								region : result.data.rows[i][7],
								more_url : result.data.rows[i][5].replace(/ /g, '_'),
								hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
								dataloaded : true
							});
							
						}
						

					}
					return spot;
				}
				else{
					return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						var region = $location.path().split('/')[1].slice(0, 2);

						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][6]);
							var tpd = pd.valueOf();
							if (result.data.rows[i][6] != '#' && td >= tpd && result.data.rows[i][7].match(region)) {
								spot.push({
									id : i,
									firstname : result.data.rows[i][0],
									lastname : result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									url : result.data.rows[i][4].split('?')[0],
									caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true
								});
							}

						}

					}
					return spot;
				});		
				}
				
			}, function(error) {

				return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						var region = $location.path().split('/')[1].slice(0, 2);

						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][6]);
							var tpd = pd.valueOf();
							if (result.data.rows[i][6] != '#' && td >= tpd && result.data.rows[i][7].match(region)) {
								spot.push({
									id : i,
									firstname : result.data.rows[i][0],
									lastname : result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									url : result.data.rows[i][4].split('?')[0],
									caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true
								});
							}

						}

					}
					return spot;
				});

			});

		},
	};
}]);

TAS_SITE.factory('Slideshow', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {
		////////Used on Homepage and Media page, calls api for the Slideshow or Slideshow Media Fusion Table returns slideshow object with headline, image, description, publish date, etc.
		///////For the Homepage slideshow, if the row in the Fusion Tableis labeled with DYK or POW, it will expire after one week.  Items labeled Teacher or having no label at all will not expire.
		loadSlideData : function(tableId) {
			var slideshow = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+SlideNumber,Title,ImageUrl,Link,Description,PublishDate,Type+FROM+' + tableId + '+%22+ORDER%20BY+SlideNumber%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				
				var d = new Date();
				result.data.rows.reverse();
				var slideshow_beginner = JSON.stringify(result.data.rows);

				if (result.data.rows.length > 0) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					var count = 1;

					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][5]);
						
						var tpd = pd.valueOf();

						if (result.data.rows[i][5] != '#' && td >= tpd) {
							
							if (result.data.rows[i][6].toLowerCase()!= "teacher" || result.data.rows[i][6].toLowerCase()=="") {
								if ((tpd + 604800000) > td) {
									slideshow.push({
										slidenumber : count++,
										title : result.data.rows[i][1],
										imageurl : result.data.rows[i][2].split('?')[0],
										link : result.data.rows[i][3],
										description : result.data.rows[i][4],
										publishdate : result.data.rows[i][5],
										type : result.data.rows[i][6],
										hider : true,
										visible : false,
										classy : 'inactive',
									});
								}
								else if (result.data.rows[i][6]=="MEDIA")
								{
								slideshow.push({
											slidenumber : count++,
											title : result.data.rows[i][1],
											imageurl : result.data.rows[i][2].split('?')[0],
											link : result.data.rows[i][3],
											description : result.data.rows[i][4],
											publishdate : result.data.rows[i][5],
											type : result.data.rows[i][6],
											hider : true,
											visible : false,
											classy : 'inactive',
										});
								}	
								
							}  else {
								
								slideshow.push({
									slidenumber : count++,
									title : result.data.rows[i][1],
									imageurl : result.data.rows[i][2].split('?')[0],
									link : result.data.rows[i][3],
									description : result.data.rows[i][4],
									publishdate : result.data.rows[i][5],
									type : result.data.rows[i][6],
									hider : true,
									visible : false,
									classy : 'inactive',
								});
							}
						}
							
					}
					return slideshow;
				}
				else{
					return $http.get('JSONBackups/' + tableId + '.json').then(function(result) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					var count = 1;

					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][5]);
						
						var tpd = pd.valueOf();

						if (result.data.rows[i][5] != '#' && td >= tpd) {
							
							if (result.data.rows[i][6].toLowerCase()!= "teacher") {
								if ((tpd + 604800000) > td) {
									slideshow.push({
										slidenumber : count++,
										title : result.data.rows[i][1],
										imageurl : result.data.rows[i][2].split('?')[0],
										link : result.data.rows[i][3],
										description : result.data.rows[i][4],
										publishdate : result.data.rows[i][5],
										type : result.data.rows[i][6],
										hider : true,
										visible : false,
										classy : 'inactive',
									});
								}
								else if (result.data.rows[i][6]=="MEDIA")
								{
								slideshow.push({
											slidenumber : count++,
											title : result.data.rows[i][1],
											imageurl : result.data.rows[i][2].split('?')[0],
											link : result.data.rows[i][3],
											description : result.data.rows[i][4],
											publishdate : result.data.rows[i][5],
											type : result.data.rows[i][6],
											hider : true,
											visible : false,
											classy : 'inactive',
										});
								}	
								
							}  else {
								
								slideshow.push({
									slidenumber : count++,
									title : result.data.rows[i][1],
									imageurl : result.data.rows[i][2].split('?')[0],
									link : result.data.rows[i][3],
									description : result.data.rows[i][4],
									publishdate : result.data.rows[i][5],
									type : result.data.rows[i][6],
									hider : true,
									visible : false,
									classy : 'inactive',
								});
							}
						}
							
					}
					return slideshow;
				});
				}
				;
				
			}, function(error) {
				var slideshow = [];

				return $http.get('JSONBackups/' + tableId + '.json').then(function(result) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					var count = 1;

					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][5]);
						
						var tpd = pd.valueOf();

						if (result.data.rows[i][5] != '#' && td >= tpd) {
							
							if (result.data.rows[i][6].toLowerCase()!= "teacher") {
								if ((tpd + 604800000) > td) {
									slideshow.push({
										slidenumber : count++,
										title : result.data.rows[i][1],
										imageurl : result.data.rows[i][2].split('?')[0],
										link : result.data.rows[i][3],
										description : result.data.rows[i][4],
										publishdate : result.data.rows[i][5],
										type : result.data.rows[i][6],
										hider : true,
										visible : false,
										classy : 'inactive',
									});
								}
								else if (result.data.rows[i][6]=="MEDIA")
								{
								slideshow.push({
											slidenumber : count++,
											title : result.data.rows[i][1],
											imageurl : result.data.rows[i][2].split('?')[0],
											link : result.data.rows[i][3],
											description : result.data.rows[i][4],
											publishdate : result.data.rows[i][5],
											type : result.data.rows[i][6],
											hider : true,
											visible : false,
											classy : 'inactive',
										});
								}	
								
							}  else {
								
								slideshow.push({
									slidenumber : count++,
									title : result.data.rows[i][1],
									imageurl : result.data.rows[i][2].split('?')[0],
									link : result.data.rows[i][3],
									description : result.data.rows[i][4],
									publishdate : result.data.rows[i][5],
									type : result.data.rows[i][6],
									hider : true,
									visible : false,
									classy : 'inactive',
								});
							}
						}
							
					}
					return slideshow;
				});
			});
		}
	};
}]);

TAS_SITE.factory('SearchBox', ['$http', '$routeParams', '$location', '$rootScope', '$sce','$q',
function($http, $routeParams, $location, $rootScope, $sce, $q) {
	return {
		///////////////Runs php search_blogs file against Wordpress Feed.  Returns blog posts that match the search term
		searchBlogs : function(search_term) {
			console.log(search_term);
			var blogs = {};
			return $http.get('/php/search_blogs.php?q=' + search_term).then(function(result) {
				blogs = result.data.items;
				for (var x = 0; x < blogs.length; x++) {
					blogs[x].id = x;
					blogs[x].tabIndex = (x + 40);
					blogs[x].CategoriesArr = blogs[x].Tags;

				}
		
				return blogs;
			});
		},
		searchImages : function(search_term) {
			///////////////Runs php search_images file against Wordpress Feed.  Returns images that match the search term
			var _images = {};
			var images = [{
				id : ''
			}];
			return $http.get('/php/search_images.php?q=' + search_term).then(function(result) {
				_images = result.data.images;

				for (var x = 0; x < _images.length; x++) {
					if (_images[x].src != 'undefined') {
						_images[x].src = _images[x].src['0'];
						if ((!_images[x].src.match('.mov') && !_images[x].src.match('.m4v') && !_images[x].src.match('.ogg') && !_images[x].src.match('.wmv') && !_images[x].src.match('.m4a') && !_images[x].src.match('.mp4') && !_images[x].src.match('.avi') && !_images[x].src.match('.doc') && !_images[x].src.match('.docx') && !_images[x].src.match('.pdf') && !_images[x].src.match('.xlsx') && !_images[x].src.match('.xls') && !_images[x].src.match('.ppt') && !_images[x].src.match('.pptx')) && !_images[x].src.match('http://teacheratsea.wordpress')) {

							_images[x].id = (_images.length - 1);
							_images[x].tabIndex = (x + 40);
							_images[x].post_title = createTitleFromURL(_images[x].post_url[0]);
							_images[x].parent = _images[x].parent['0'];

							_images[x].favorite = 'off';
							if (_images[x].caption == "" && _images[x].excerpt != "") {
								_images[x].finalCaption = _images[x].excerpt;
							} else if (_images[x].caption != "" && _images[x].excerpt == "") {
								_images[x].finalCaption = _images[x].caption;
							} else if (_images[x].caption != "" && _images[x].excerpt != "") {
								_images[x].finalCaption = _images[x].caption;
							} else {
								_images[x].finalCaption = 'NOAA Teacher at Sea Photo';
							}
							images.push(_images[x]);

						}
					}

				}
				for (var y = 0; y < images.length; y++) {
					images[y].id = y;
				}

				return images;
			});
		},

		searchLessons : function(search_term) {
			///////////////Runs Lessons DB Fusion Table apis.  Returns lessons that match the search term
			var lessons = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+LastName%2CFirstName%2CState%2C+YearSailed%2C+GradeLevel%2C+Size%2C+Title%2C+Keywords%2C+Objective%2C+Description%2C+URL%2c+Topics+FROM+17OXuyYjiIvxjr1Yd3DZ-SI-dzp-soOuTDNOHoSOA&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					for (var o = 0; o < result.data.rows.length; o++) {
						if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][11].toLowerCase().match(search_term.toLowerCase())) {

							lessons.push({
								lastname : result.data.rows[o][0],
								firstname : result.data.rows[o][1],
								state : result.data.rows[o][2],
								year : result.data.rows[o][3],
								grades : result.data.rows[o][4].split(', '),
								size : result.data.rows[o][5],
								title : result.data.rows[o][6],
								keywordArr : result.data.rows[o][7].split(', '),
								objective : result.data.rows[o][8],
								description : result.data.rows[o][9],
								url : result.data.rows[o][10],
								topics : result.data.rows[o][11],
								checkContents : true,
								hider : false,
								tabIndex : (o + 41),
								id : o,
								favorite : 'off'
							});
						}
					}
					return lessons;
				}
				else{
					return $http.get('JSONBackups/LessonsTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						for (var o = 0; o < result.data.rows.length; o++) {
							if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][11].toLowerCase().match(search_term.toLowerCase())) {

								lessons.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1],
									state : result.data.rows[o][2],
									year : result.data.rows[o][3],
									grades : result.data.rows[o][4].split(', '),
									size : result.data.rows[o][5],
									title : result.data.rows[o][6],
									keywordArr : result.data.rows[o][7].split(', '),
									objective : result.data.rows[o][8],
									description : result.data.rows[o][9],
									url : result.data.rows[o][10],
									topics : result.data.rows[o][11],
									checkContents : true,
									hider : false,
									tabIndex : (o + 41),
									id : o,
									favorite : 'off'
								});
							}
						}
					}
					return lessons;
				});
				}
				
			}, function(error) {
				return $http.get('JSONBackups/LessonsTable.json').then(function(result) {
					if (result.data.rows != undefined) {
						for (var o = 0; o < result.data.rows.length; o++) {
							if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][11].toLowerCase().match(search_term.toLowerCase())) {

								lessons.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1],
									state : result.data.rows[o][2],
									year : result.data.rows[o][3],
									grades : result.data.rows[o][4].split(', '),
									size : result.data.rows[o][5],
									title : result.data.rows[o][6],
									keywordArr : result.data.rows[o][7].split(', '),
									objective : result.data.rows[o][8],
									description : result.data.rows[o][9],
									url : result.data.rows[o][10],
									topics : result.data.rows[o][11],
									checkContents : true,
									hider : false,
									tabIndex : (o + 41),
									id : o,
									favorite : 'off'
								});
							}
						}
					}
					return lessons;
				});
			});
		},

		searchSite : function(search_term) {
			///////////////Runs SiteMap Fusion Table apis.  Returns pages in the site that match the search term
			
			var sitesearch = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+lastname,firstname,city,state,Title,Page,subject,ship,school,cruisetype,keywords+FROM+1jNDK0JUr8xJ5u1Kg-y03OSgQOE8XYEVTlYb43HuB&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != undefined) {
					for (var o = 0; o < result.data.rows.length; o++) {
						if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][10].toLowerCase().match(search_term.toLowerCase())) {
						
							if (result.data.rows[o][0] == "" && result.data.rows[o][1] == "") {
								sitesearch.push({

									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1],
									city : result.data.rows[o][2],
									state : result.data.rows[o][3],
									title : result.data.rows[o][4],
									page : result.data.rows[o][5],
									subject : result.data.rows[o][6],
									ship : result.data.rows[o][7],
									school : result.data.rows[o][8],
									cruisetype : result.data.rows[o][9],
									keywords : result.data.rows[o][10].split(', '),

									id : o,

								});
							} else if (result.data.rows[o][5].match('2008') || result.data.rows[o][5].match('2007') || result.data.rows[o][5].match('2006') || result.data.rows[o][5].match('2005') || result.data.rows[o][5].match('2004') || result.data.rows[o][5].match('2003') || result.data.rows[o][5].match('sponsored')) {
								sitesearch.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1],
									city : result.data.rows[o][2],
									state : result.data.rows[o][3],
									title : result.data.rows[o][4],
									page : result.data.rows[o][5].replace('#', '') + '.html',
									subject : result.data.rows[o][6],
									ship : result.data.rows[o][7],
									school : result.data.rows[o][8],
									cruisetype : result.data.rows[o][9],
									keywords : result.data.rows[o][10],
									id : o,

								});
							} else {
								sitesearch.push({
									lastname : result.data.rows[o][0],
									firstname : result.data.rows[o][1],
									city : result.data.rows[o][2],
									state : result.data.rows[o][3],
									title : result.data.rows[o][4],
									page : result.data.rows[o][5].split('/')[0] + result.data.rows[o][5].split('/')[1] + '/' + result.data.rows[o][1] + '*' + result.data.rows[o][0],
									subject : result.data.rows[o][6],
									ship : result.data.rows[o][7],
									school : result.data.rows[o][8],
									cruisetype : result.data.rows[o][9],
									keywords : result.data.rows[o][10].split(', '),
									id : o,

								});
							}
						}
					}
					for (var x = 0; x < sitesearch.length; x++) {
						sitesearch[x].tabIndex = x + 40;
					}
					return sitesearch;
				}
				else{
					
					return $http.get('JSONBackups/SiteSearch.json').then(function(result) {
					if (result.data.rows != undefined) {
						for (var o = 0; o < result.data.rows.length; o++) {
							if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][10].toLowerCase().match(search_term.toLowerCase())) {

								if (result.data.rows[o][0] == "" && result.data.rows[o][1] == "") {
									sitesearch.push({

										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5],
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10].split(', '),

										id : o,

									});
								}
								if (result.data.rows[o][5].match('2008') || result.data.rows[o][5].match('2007') || result.data.rows[o][5].match('2006') || result.data.rows[o][5].match('2005') || result.data.rows[o][5].match('2004') || result.data.rows[o][5].match('2003') || result.data.rows[o][5].match('sponsored')) {
										sitesearch.push({
										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5].replace('#', '') + '.html',
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10],
										id : o,

									});
								} else {
									sitesearch.push({
										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5],
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10].split(', '),
										id : o,

									});
								}
							}
						}
						for (var x = 0; x < sitesearch.length; x++) {
							sitesearch[x].tabIndex = x + 40;
						}
					}

					return sitesearch;
				});
				}

				
			}, function() {
				return $http.get('JSONBackups/SiteSearch.json').then(function(result) {
					if (result.data.rows != undefined) {
						for (var o = 0; o < result.data.rows.length; o++) {
							if (result.data.rows[o][0].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][1].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][2].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][3].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][4].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][6].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][7].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][8].toLowerCase().replace(/\W/g, '').match(search_term.toLowerCase()) || result.data.rows[o][9].toLowerCase().match(search_term.toLowerCase()) || result.data.rows[o][10].toLowerCase().match(search_term.toLowerCase())) {

								if (result.data.rows[o][0] == "" && result.data.rows[o][1] == "") {
									sitesearch.push({

										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5],
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10].split(', '),

										id : o,

									});
								}
								if (result.data.rows[o][5].match('2008') || result.data.rows[o][5].match('2007') || result.data.rows[o][5].match('2006') || result.data.rows[o][5].match('2005') || result.data.rows[o][5].match('2004') || result.data.rows[o][5].match('2003') || result.data.rows[o][5].match('sponsored')) {
									sitesearch.push({
										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5].replace('#', '') + '.html',
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10],
										id : o,

									});
								} else {
									sitesearch.push({
										lastname : result.data.rows[o][0],
										firstname : result.data.rows[o][1],
										city : result.data.rows[o][2],
										state : result.data.rows[o][3],
										title : result.data.rows[o][4],
										page : result.data.rows[o][5],
										subject : result.data.rows[o][6],
										ship : result.data.rows[o][7],
										school : result.data.rows[o][8],
										cruisetype : result.data.rows[o][9],
										keywords : result.data.rows[o][10].split(', '),
										id : o,

									});
								}
							}
						}
						for (var x = 0; x < sitesearch.length; x++) {
							sitesearch[x].tabIndex = x + 40;
						}
					}

					return sitesearch;
				});
			});
		},
		////creates checkboxes for lesson search
		createLessonsCheck : function() {
			checkBoxes = [{
				grade : 'Kindergarten',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '1st',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '2nd',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '3rd',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '4th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '5th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '6th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '7th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '8th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '9th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '10th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '11th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}, {
				grade : '12th',
				checked : false,
				classy : 'no-check',
				state : 'off'
			}];
			return checkBoxes;
		},
	
		
		SearchData :function(arr, query, properties, checkDupProperty)
		{
		var deferred = $q.defer();
		var searchArr={arr:[], fullArr:[]};
		var searchArr=arr.searchDataMatch(query, properties, checkDupProperty);
		deferred.resolve(searchArr);
		return deferred.promise;
		},
		
		FilterData: function(arr, query, properties, checkDupProperty,type, checking_prop)
		{
		var deferred = $q.defer();
		var filteredArr={arr:[], fullArr:[]};
		filteredArr=arr.searchObjProperties(query, properties, checkDupProperty, type, checking_prop);
		//filteredArr= filteredArr.removeDuplicatesArrObj('headline', false)
		deferred.resolve(filteredArr);
		return deferred.promise;	
		}
	};
}]);

/*For TABS*********/
TAS_SITE.factory('TeacherDataFetch', ['Teacher',
function(Teacher) {
	//return {
	var teacherdata = {};
	teacherdata.data = function(teachername) {
		teacherdata = Teacher.getProfileData();
		return teacherdata;
	};
	teacherdata.result = teacherdata;
	teacherdata.count = 0;
	return teacherdata;
	//};
}]);

TAS_SITE.factory('WPDataFetch', ['Teacher', '$location', '$routeParams',
function(Teacher, $location, $routeParams) {
	//var year = $location.path().split('/')[1].split('/')[0];
	var wpdata = {};
	var lastname = DigPatt($routeParams.teachername.split('*')[1].replace(/'/g, ''), '-');
	wpdata.data = function(year, teachername) {

		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		wpdata = Teacher.getWPData(year, toTitleCase(teachername));

		return wpdata;
	};

	wpdata.count = 0;

	return wpdata;
}]);

TAS_SITE.factory('LessonsDataFetch', ['Teacher',
function(Teacher) {
	//return {
	var lessondata = {};
	lessondata.data = function(teachername) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		lessondata = Teacher.getLessonData();
		return lessondata;
	};

	lessondata.count = 0;
	return lessondata;
	//};
}]);

TAS_SITE.factory('NewsDataFetch', ['Teacher',
function(Teacher) {
	//return {
	var newsdata = {};
	newsdata.data = function(teachername) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		newsdata = Teacher.getNewsData();
		return newsdata;
	};

	newsdata.count = 0;
	return newsdata;
	//};
}]);

TAS_SITE.factory('ShipDataFetch', ['Teacher',
function(Teacher) {

	var shipdata = {};
	shipdata.data = function(ship, shiptype) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		shipdata = Teacher.getShipData(ship, shiptype);
		return shipdata;
	};

	shipdata.count = 0;
	return shipdata;

}]);

TAS_SITE.factory('TabsDataFetch', ['Tabs',
function(Tabs) {

	var tabsdata = {};
	tabsdata.data = function(spreadsheet, type) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		tabsdata = Tabs.getTabsData(spreadsheet, type)
		return tabsdata;
	};

	tabsdata.count = 0;
	return tabsdata;

}]);

TAS_SITE.factory('TabsDataFetchTop', ['Tabs',
function(Tabs) {

	var topdata = {};
	topdata.data = function(spreadsheet, type) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		topdata = Tabs.getTopData(spreadsheet, type)
		return topdata;
	};

	topdata.count = 0;
	return topdata;

}]);

TAS_SITE.factory('QuotesData', ['Tabs',
function(Tabs) {

	var quotesdata = {};
	quotesdata.data = function(spreadsheet, type) {
		//Teacher.getWPData(teachersteacher.year, teachersteacher.firstname+' '+teachersteacher.lastname_forDOM).
		quotesdata = Tabs.getQuotesData(spreadsheet, type)
		return quotesdata;
	};

	quotesdata.count = 0;
	return quotesdata;

}]);

TAS_SITE.factory('Favorites', ['$http', '$routeParams', '$location', '$rootScope', '$sce', '$q',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {

		addFavorites : function(type) {
			///adds items to localStorage which then shows up in the Favorites
			var favorites = {};
			if (localStorage.getItem('BlogArr') != null && localStorage.getItem('FavoriteArr') != '') {
				var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));
			} else {
				blogFav = [];
			}

			if (localStorage.getItem('ImgArr') != null && localStorage.getItem('ImgArr') != '') {
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			} else {
				var imgFav = [];
				//favorites.imgHider=true;
			}

			if (localStorage.getItem('LessonArr') != null && localStorage.getItem('LessonArr') != '') {
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
			} else {
				var lessonFav = [];
			}

			favorites.blogs = blogFav;
			

			for (var x = 0; x < favorites.blogs.length; x++) {
				favorites.blogs[x].favorite = 'on';
				favorites.blogs[x].id = x;

				

			}

			//}
			favorites.images = imgFav;
			for (var y = 0; y < favorites.images.length; y++) {

				favorites.images[y].favorite = 'on';
				favorites.images[y].id = y;

			
			}

			//}
			favorites.lessons = lessonFav;
			
			for (var z = 0; z < favorites.lessons.length; z++) {
				favorites.lessons[z].favorite = 'on';
				favorites.lessons[z].id = z;
				
			}
			//}
			favorites.dyks = [];

			return favorites;
		},

		removeFavorites : function(arr, type) {
			alert('removing');
		},

		checkFavorites : function(obj, type) {

			///////compare localStorage to the blogposts, images, and lessons that exist on profile page, media page, and searchboxes////////////
			var favorites = {};
			if (localStorage.getItem('BlogArr') != null && localStorage.getItem('FavoriteArr') != '') {
				var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));

			} else {
				blogFav = [];
			}

			if (localStorage.getItem('ImgArr') != null && localStorage.getItem('ImgArr') != '') {
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));

			} else {
				var imgFav = [];

			}

			if (localStorage.getItem('LessonArr') != null && localStorage.getItem('LessonArr') != '') {
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
				favorites.lessonHider = false;

			} else {
				var lessonFav = [];

			}

			favorites.blogs = blogFav;
			favorites.lessons = lessonFav;
			favorites.images = imgFav;
			if (type == 'blogs') {
				if (favorites.blogs.length > 0) {

					obj.favorite = 'off'
					for (var x = 0; x < favorites.blogs.length; x++) {
						//favorites.blogs[x].favorite='on';
						favorites.blogs[x].id = x;

						if (favorites.blogs[x].BlogUrl['0'] == obj.BlogUrl['0']) {
							obj.favorite = 'on';

						}

					}
				} else {
					obj.favorite = 'off'
				}
			}

			if (type == "images") {
				obj.favorite = 'off'
				if (favorites.images.length > 0) {

					for (var y = 0; y < favorites.images.length; y++) {

						favorites.images[y].id = y;
						if (favorites.images[y].src == obj.src) {
							obj.favorite = 'on';

						}

					}
				} else {
					obj.favorite = 'off'
				}

			}
			if (type == "lessons") {
				if (favorites.lessons.length > 0) {

					for (var z = 0; z < favorites.lessons.length; z++) {

						//favorites.lessons[z].favorite='on';
						favorites.lessons[z].id = z;
						if (favorites.lessons[z].url == obj.url) {
							obj.favorite = 'on';
						}

					}

				} else {
					obj.favorite = 'off'
				}
			}
			favorites.dyks = [];

			return favorites

		},
		//////////////Sets up favorites to be emailed
		setUpEmail : function() {
			var favorites = [];
			var emailTxt = '';
			var imagesTxt = '';
			var lessonsTxt = '';
			var finalTxt = '';
			if (localStorage.getItem('BlogArr') != null && localStorage.getItem('FavoriteArr') != '') {
				var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));

			} else {
				blogFav = [];
			}

			if (localStorage.getItem('ImgArr') != null && localStorage.getItem('ImgArr') != '') {
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));

			} else {
				var imgFav = [];

			}

			if (localStorage.getItem('LessonArr') != null && localStorage.getItem('LessonArr') != '') {
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
				favorites.lessonHider = false;

			} else {
				var lessonFav = [];

			}

			favorites.blogs = blogFav;
			favorites.images = imgFav;
			favorites.lessons = lessonFav;

			for (var x = 0; x < favorites.blogs.length; x++) {
				var mailImg = favorites.blogs[x].BlogImage;
				var mailUrl = favorites.blogs[x].BlogUrl['0'];
				var mailTitle = favorites.blogs[x].BlogTitle;
				emailTxt += mailImg + '**' + mailUrl + '**' + mailTitle + '@@'
			}
			for (var y = 0; y < favorites.images.length; y++) {
				var mailImages = favorites.images[y].src + '?w=150';
				var mailCaption = favorites.images[y].caption;
				imagesTxt += mailImages + '::' + mailCaption + '$$';

			}
			for (var z = 0; z < favorites.lessons.length; z++) {
				var lessonId = favorites.lessons[z].id;
				var lessonhref = favorites.lessons[z].url;
				var lessontitle = favorites.lessons[z].title;
				var lessonauthorhref = '/' + favorites.lessons[z].year + '/' + favorites.lessons[z].firstname + '*' + favorites.lessons[z].lastname;
				var lessonauthor = favorites.lessons[z].firstname + ' ' + favorites.lessons[z].lastname;
				var lessongrades = favorites.lessons[z].grades;
				lessonsTxt += lessonhref + '**' + lessontitle + '**' + lessonauthorhref + '**' + lessonauthor + '**' + lessongrades + '!!!';
			}

			finalTxt = '&message=' + emailTxt + '&images=' + imagesTxt + '&lessons=' + lessonsTxt//&dyk=';

			return finalTxt;
		},
		///////Creates short links for favorites
		getBitLy : function(url) {
			var bitly = 'http://api.bitly.com/v3/shorten?format=json&apiKey=R_06ae3d8226a246f2a0bb68afe44c8379&login=robostheimer&longUrl=' + url
			return $http.get(bitly).then(function(result) {
				return result.data.data.url;
			});
		}
	};

}]);

TAS_SITE.factory('Facts', ['$rootScope', '$q',
function($rootScope, $q) {
	return {
		///////Adds facts to preloading pages
		runFacts : function() {
			var deferred = $q.defer();
			var facts = [{
				fact : 'A sandbar shark will have around 35,000 teeth over the course of its lifetime!'
			}, {
				fact : 'The back of sharks\' eyeballs have a reflective layer of tissue called a tapetum. This helps sharks see extremely well with little light.'
			}, {
				fact : 'A sea scallop\'s eyes are the black dots that line the edges of both its top and bottom shells.'
			}, {
				fact : 'This fish, the polka dot batfish, is a bottom-dwelling species that uses its stubby fins to slowly "walk" along the seafloor.'
			}, {
				fact : 'A "sea mouse" is not a mouse, but a marine polychaete worm.'
			}, {
				fact : 'The male spoon arm octopus has a modified arm that aids in reproduction.'
			}, {
				fact : 'A scorpion fish\'s mouth has gill rakers: rows of bumpy spikes that help filter food from the water.'
			}, {
				fact : 'Scallops can live up to 20 years, and a single female scallop can produce up to 270 million eggs in her lifetime.'
			}, {
				fact : 'Sea spiders have no lungs or other respiratory organs. Since they are so small, gasses diffuse in and out of their bodies.'
			}];

			var randomnumber = Math.floor(Math.random() * facts.length);

			fact = facts[randomnumber].fact;
			deferred.resolve(fact);
			return deferred.promise;
		}
	};
}]);

TAS_SITE.factory('BigImage', ['$rootScope', '$q', 'Facts',
function($rootScope, $q, Facts) {
	return {
		////Opens BigImage
		openBigImage : function(img, post_title, post_url, caption, parent, id, favorite) {

			var deferred = $q.defer();
			image = {};
			image.isLoading = true;
			Facts.runFacts().then(function(result) {
				image.fact = result;
			});

			if (post_title == 'undefined') {

				image.titleHider = true;
			} else {
				image.titleHider = false;
			}

			window.scrollTo(0, 0);
			image.bigImageSrc = '';
			image.bigImageHider = false;
			image.bigImageSrc = img.split('?w=')[0];
			image.bigImage = true;
			image.alt = caption;

			image.post_title = post_title;
			if (image.post_title == 'undefined') {

				image.titleHider = true;

			} else {
				image.titleHider = false;
			}
			image.post_url = post_url;
			image.parent = parent;
			image.id = id;
			image.favorite = favorite;
			deferred.resolve(image);
			return deferred.promise;

		},
		////runs the next Image in an array of images
		nextImg : function(id, images) {
			
			var deferred = $q.defer();
			nextImg = {};

			nextImg.isLoading = true;
			nextImg.images = images;
			var id=parseInt(id)
			var next = (id + 1);
			if (next < (images.length - 1)) {
				next = next;
			} else {

				next = 0;
			}
			nextImg.favorite = nextImg.images[next].favorite;
			nextImg.bigImageSrc = nextImg.images[next].src;
			nextImg.alt = nextImg.images[next].caption;

			nextImg.post_title = nextImg.images[next].post_title;
			if (nextImg.post_title == 'undefined') {

				nextImg.titleHider = true;

			} else {
				nextImg.titleHider = false;
			}
			nextImg.post_url = nextImg.images[next].post_url;
			nextImg.parent = nextImg.images[next].parent;
			nextImg.id = nextImg.images[next].id;
			deferred.resolve(nextImg);
			return deferred.promise;
			//BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.caption, nextImg.parent, nextImg.id, nextImg.favorite)

		},
		////runs the previous image in an array of images
		prevImg : function(id, images) {
			var deferred = $q.defer();
			prevImg = {};
			prevImg.isLoading = true;
			prevImg.images = images;

			length = images.length;

			var prev = (parseInt(id) - 1);
			if (prev != -1) {
				prev = prev;
			} else {
				prev = (images.length - 1);
			}

			prevImg.alt = prevImg.images[prev].caption;
			prevImg.post_title = prevImg.images[prev].post_title;
			if (prevImg.post_title == 'undefined') {

				prevImg.titleHider = true;
			} else {
				prevImg.titleHider = false;
			}
			prevImg.post_url = prevImg.images[prev].post_url;
			prevImg.parent = prevImg.images[prev].parent;
			prevImg.id = prevImg.images[prev].id;
			prevImg.favorite = prevImg.images[prev].favorite;
			prevImg.bigImageSrc = prevImg.images[prev].src
			deferred.resolve(prevImg);
			return deferred.promise;

		}
	};

}]);

TAS_SITE.factory('CreateRSS', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {

		rssCreate : function(url) {
			var spot = [];
			return $http.jsonp(url).then(function(result) {
				if (result.data.rows != undefined) {
					var d = new Date();
					td = d.valueOf();

					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][6]);
						var tpd = pd.valueOf();

						if (result.data.rows[i][6] != '#' && td >= tpd) {
							spot.push({
								id : i,
								firstname : result.data.rows[i][0],
								lastname : result.data.rows[i][1],
								shortbody : result.data.rows[i][2],
								longbody : result.data.rows[i][3],
								image : result.data.rows[i][4].split('?')[0],
								caption : result.data.rows[i][5],
								date : result.data.rows[i][6],
								region : result.data.rows[i][7],
								more_url : result.data.rows[i][5].replace(/ /g, '_'),
								hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
								dataloaded : true,
								hider : true
							});

						}

					}

				}
				return spot;
			});

		},
		rssCreatePOW : function(url) {
			
			var pow = [];
			return $http.jsonp(url).then(function(result) {
				if (result.data.rows != undefined) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][7]);
						var tpd = pd.valueOf();

						//var nshd=tpd+604800000;
						if (result.data.rows[i][7] != '#' && (td >= tpd)) {
							pow.push({
								image : result.data.rows[i][0],
								caption : result.data.rows[i][1],
								description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								shortdescription : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								parent : result.data.rows[i][4],
								credit : result.data.rows[i][5],
								post_title : Slicer(result.data.rows[i][6], 40) + '...',
								date : result.data.rows[i][7],
								keywords : result.data.rows[i][8],
								tweet: result.data.rows[i][9],
								titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
								dataloaded : true
								});
						}

					}

				}
				return pow;
			});
		},
	};
}]);

////////////////////////////////////Class Page/////////////////////////