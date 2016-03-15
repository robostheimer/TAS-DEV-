//'use strict';

/* Services */
/////////////////////////////////HomePage/////////////////////////////////////////////


NSTA.factory('Alumni', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return {
		getData : function() {
			var spot = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+FirstName,LastName,ShortBody,LongBody,image,caption,PublishDate,Region+FROM+1z6kUehyfSNqaAGinvARZLYyjb7Dhk2F9rt49xHIV+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != null) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][6]);
						var tpd = pd.valueOf();
/*dkblue rgba(0, 87, 165, 1)
             green rgba(25, 142, 129, 1)
             blue: rgba(4, 146, 206, 1)
             yellow: rgba(235, 189, 30, 1)
             */
						if (result.data.rows[i][6] != '#' && td >= tpd) {
							if(i%4==0)
							{
								spot.push({
									id : i,
									caption : result.data.rows[i][0]+' '+ result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									//caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i,
									spot_color:'blue',
									tas_color:'green',
									background_color:'rgba(0, 87, 165, .7)',
									spot_pos:['top', 'righty'],
									txt_pos:['bottom', 'lefty']
									
	
								});
							}
							if(i%4==3)
							{
								spot.push({
									id : i,
									caption : result.data.rows[i][0]+' '+ result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									//caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i,
									spot_color:'green',
									tas_color:'blue',
									background_color:'rgba(25, 142, 129, .7)',
									spot_pos:['top', 'lefty'],
									txt_pos:['bottom', 'righty']
									
									
									
	
								});
							}
							if(i%4==2)
							{
								spot.push({
									id : i,
									caption : result.data.rows[i][0]+' '+ result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									//caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i,
									spot_color:'green',
									tas_color:'ltblue',
									background_color:'rgba(0, 87, 165, .7)',
									spot_pos:['top', 'lefty'],
									txt_pos:['bottom', 'righty']
	
								});
							}
							if(i%4==1)
							{
								spot.push({
									id : i,
									caption : result.data.rows[i][0]+' '+ result.data.rows[i][1],shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									//caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i,
									spot_color:'yellow',
									tas_color:'ltblue',
									background_color:'rgba(25, 142, 129, .7)',
									spot_pos:['top', 'lefty'],
									txt_pos:['bottom', 'righty']
									
           
								});
							}
						}

					}

				}

				return spot;
			}, function(error) {
				return $http.get('JSONBackups/AlumniSpotlightTable.json').then(function(result) {
					if (result.data.rows != null) {
						var d = new Date();
						var td = d.valueOf();
						result.data.rows.reverse();
						for (var i = 0; i < result.data.rows.length; i++) {
							var pd = new Date(result.data.rows[i][6]);
							var tpd = pd.valueOf();

							if (result.data.rows[i][6] != '#' && td >= tpd) {
								spot.push({
									id : i,
									caption : result.data.rows[i][0]+''+ result.data.rows[i][1],
									shortbody : result.data.rows[i][2],
									longbody : result.data.rows[i][3],
									src : result.data.rows[i][4].split('?')[0],
									//caption : result.data.rows[i][5],
									date : result.data.rows[i][6],
									region : result.data.rows[i][7],
									more_url : result.data.rows[i][5].replace(/ /g, '_'),
									hash : '/indiv_spotlight/' + result.data.rows[i][0].replace(/ /g, '_') + '_' + result.data.rows[i][1].replace(/ /g, '_'),
									dataloaded : true,
									tabIndex : 150 + i,
									spot_color:'ltblue',
									tas_color:'yellow',
									background_color:'rgba(4, 146, 206, .7)'
									

								});
							}

						}

					}

					return spot;
				});
			});
		}
	};
}]);


NSTA.factory('POW', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {
		getData : function() {
			
			var pow = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+PhotoURL,PhotoCaption,PhotoDescription,ShortDescription,BlogURL,PhotoCredit,BlogTitle,PublishDate, Keywords+FROM+19WBCSYuVJh1O2KaThKQJpLLn0VF6w3rHhbKtZMVf+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
				if (result.data.rows != null) {
					var d = new Date();
					var td = d.valueOf();
					result.data.rows.reverse();
					for (var i = 0; i < result.data.rows.length; i++) {
						var pd = new Date(result.data.rows[i][7]);
						var tpd = pd.valueOf();
						
					
						//var nshd=tpd+604800000;
						if (result.data.rows[i][7] != '#' && (td>=tpd)) {
							if(i%4==0)
							{
							pow.push({
								id : i,
								src : result.data.rows[i][0],
								//caption : result.data.rows[i][1],
								description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								caption : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								parent : result.data.rows[i][4],
								credit : result.data.rows[i][5],
								post_title : Slicer(result.data.rows[i][6], 40) + '...',
								date : result.data.rows[i][7],
								keywords : result.data.rows[i][8],
								titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
								dataloaded : true,
								spot_color:'blue',
								tas_color:'green',
								background_color:'rgba(0, 87, 165, .7)',
								spot_pos:['top', 'righty'],
								txt_pos:['bottom', 'lefty']
							});
							}
							if(i%4==3)
							{
							pow.push({
								id : i,
								src : result.data.rows[i][0],
								//caption : result.data.rows[i][1],
								description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								caption : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								parent : result.data.rows[i][4],
								credit : result.data.rows[i][5],
								post_title : Slicer(result.data.rows[i][6], 40) + '...',
								date : result.data.rows[i][7],
								keywords : result.data.rows[i][8],
								titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
								dataloaded : true,
								spot_color:'green',
								tas_color:'blue',
								background_color:'rgba(25, 142, 129, .7)',
								spot_pos:['top', 'lefty'],
								txt_pos:['bottom', 'righty']
							});	
							}
							if(i%4==2)
							{
							pow.push({
								id : i,
								src : result.data.rows[i][0],
								//caption : result.data.rows[i][1],
								description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								caption : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								parent : result.data.rows[i][4],
								credit : result.data.rows[i][5],
								post_title : Slicer(result.data.rows[i][6], 40) + '...',
								date : result.data.rows[i][7],
								keywords : result.data.rows[i][8],
								titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
								dataloaded : true,
								spot_color:'green',
								tas_color:'ltblue',
								background_color:'rgba(0, 87, 165, .7)',
								spot_pos:['top', 'lefty'],
								txt_pos:['bottom', 'righty']
							});	
							}
							if(i%4==1)
							{
							pow.push({
								id : i,
								src : result.data.rows[i][0],
								//caption : result.data.rows[i][1],
								description : result.data.rows[i][2].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								caption : result.data.rows[i][3].replace(/<p>/g, '').replace(/<\/p>/g, ''),
								parent : result.data.rows[i][4],
								credit : result.data.rows[i][5],
								post_title : Slicer(result.data.rows[i][6], 40) + '...',
								date : result.data.rows[i][7],
								keywords : result.data.rows[i][8],
								titleSnippet : Slicer(result.data.rows[i][1], 70) + '...',
								dataloaded : true,
								spot_color:'yellow',
								tas_color:'ltblue',
								background_color:'rgba(25, 142, 129, .7)',
								spot_pos:['top', 'lefty'],
								txt_pos:['bottom', 'righty']
							});	
							}
						}

					}

				}
				return pow;
			});
		},
	};
}]);
NSTA.factory('Timeline', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {
	return{
		getTimelineData:function()
		{
		return $http.get('json/timeline.json').then(function(data){
				return(data.data.feed.entry);
		});	
		/*var data=	[{ 
	'years':'1990-2002' , 
	'color': '#0057a5', 
	'timeline':
		[{
		'date':'05/01/1990', 
		'headline':'Established by NOAA Office of Marine Aviation', 
		'description':'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', 
		'image':'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{
		'date':'05/05/1993', 
		'headline':'Headline 2', 
		'description':'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', 
		'image':'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		 {
		 'date':'12/01/1995', 
		 'headline':'Headline 3', 
		 'description':'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', 
		'image':'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'
		}]
		
},
{ 
	years:2002-2007, 
	color: '#EBBD1E', 
	timeline:[
		{date:12/01/2002, headline:'Headline 4', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:12/01/2003, headline:'Headline 5', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:12/01/2007, headline:'Headline 6', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'}
		]
},
{ 
	years:'2008-2010', 
	color: '#0492CE', 
	timeline:[
		{date:12/01/2008, headline:'Headline 7', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:12/01/2009, headline:'Headline 8', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:12/01/2010, headline:'Headline 9', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'}
		]
},
{ 
	years:'2011-2015', 
	color: '#198E81', 
	timeline:[
		{date:05/15/2011, headline:'WordPress Blog Launched', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:04/01/2012, headline:'New Website Design Launched', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'},
		{date:10/01/2013, headline:'Did You Know: Tweets from Sea Launched', description:'Kale chips freegan vegan fingerstache seitan, nostrud Intelligentsia Blue Bottle Banksy scenester. Schlitz bespoke sapiente flexitarian, umami cornhole pop-up. Incididunt hoodie drinking vinegar aliqua Schlitz. Pug shabby chic messenger bag heirloom, organic you probably haven\'t heard of them migas id Pinterest four dollar toast keytar Wes Anderson raw denim irony. Stumptown organic aute laborum mixtape. Whatever chambray scenester, officia cred anim pork belly tattooed shabby chic mollit disrupt occupy. Proident drinking vinegar seitan, sapiente put a bird on it typewriter Neutra.', image:'http://teacheratsea.files.wordpress.com/2013/07/dscf1959.jpg?w=400'}
		]
}];
	return data;	*/	
		}
	};
}]);	

NSTA.factory('Slideshow', ['$http', '$routeParams', '$location', '$rootScope', '$sce',
function($http, $routeParams, $location, $rootScope, $sce) {

	return {

		loadSlideData : function(tableId) {
			var slideshow = [];
			return $http.jsonp('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+SlideNumber,Title,ImageUrl,Link,Description,PublishDate,Type+FROM+' + tableId + '+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(result) {
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
							if (result.data.rows[i][6].toLowerCase() == "dyk") {
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
							} else if (result.data.rows[i][6].toLowerCase() == "pow") {
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
							} else if (result.data.rows[i][6].toLowerCase() == "alumni") {
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
										classy : 'inactive'
									});
								}
							} else {
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
				}
				;
				return slideshow;
			}, function(error) {
				var slideshow = [];

				return $http.get('JSONBackups/' + tableId + '.json').then(function(result) {
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
								if (result.data.rows[i][6].toLowerCase() == "dyk") {
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
								} else if (result.data.rows[i][6].toLowerCase() == "pow") {
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
								} else if (result.data.rows[i][6].toLowerCase() == "alumni") {
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
											classy : 'inactive'
										});
									}
								} else {
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
					}
					;
					return slideshow;
				});
			});
		}
	};
}]);
