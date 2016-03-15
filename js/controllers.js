/* Controllers */

angular.module('ClassPage', [])
.controller('classPage', ['$scope','$location','$routeParams','Class', 'Facts','BigImage', function($scope, $location, $routeParams,Class, Facts, BigImage )
{
	$scope.tabIndex = 108;
	$scope.bigImage=false;
	$scope.svg = 'images/US_Map.svg';
	$scope.currentStatus='yes';
	$scope.hideMapDiv=true;
	Facts.runFacts().then(function(result){
		$scope.fact = result;
	});
	//TeacherDataFetch.count=0;
		
	
	////Creates scope variables for class page (based on particular year taken from the url)
	////States data added to the map
	Class.createTeacherList().then(function(data)
	{
		$scope.states=Class.createStateObj();
		$scope.teachers=data;
		if($scope.teachers.length!=0)
		{
		$scope.dataLoaded=true;
		
			$scope.year = $location.path().split('/')[1].split('/')[0];
		
		
		$scope.teachers[0].checkContents=true;
		$scope.bigImage=false;
		
		
		for(var i=0; i<$scope.teachers.length; i++)
			{
			
			for(var y=0; y<$scope.states.length; y++)
			{
				
				if($scope.states[y].abbreviation==$scope.teachers[i].state)
				{
					$scope.states[y].num = parseInt($scope.states[y].num)+1;
					$scope.states[y].isThere=true;
				}
			
				
			}
			
				
			if($scope.teachers[i].subjects2!=undefined)
			{
				$scope.teachers[i].subjects_num=2;
			}
			else
			{
				$scope.teachers[i].subjects_num=1;
			}
			var date_beg=new Date($scope.teachers[i].dates.split('-')[0]).valueOf();
			var date_end = new Date($scope.teachers[i].dates.split('-')[0]).valueOf();
			var d= new Date();
			var date_today = d.valueOf();
				if(date_beg<date_today&&date_end<date_today)
				{
					$scope.teachers[i].datesComp=0;
				}
				if(date_beg<date_today && date_end>date_today)
				{
					$scope.teachers[i].datesComp=1;
				}
				if(date_beg>date_today)
				{
					$scope.teachers[i].datesComp=2;
				}
				if($scope.teachers[i].dates.split('-')[0].match('12/30/'))
				{
					$scope.teachers[i].datesComp=3;
				}
				
				if($scope.teachers[i].ship=='#')
				{
					$scope.teachers[i].shipHider=true;
				}	
				else
				{
					shipHider=$scope.teachers[i].shipHider=false;
				}
				
			}
			
			for(var y=0; y<$scope.states.length; y++)
			{
				
				$scope.states[y].alt_num=$scope.states[y].num
				if($scope.states[y].num==0)
				{
					
					$scope.states[y].num = $scope.states[y].abbreviation
					
				}
				
			}
		}
		else{
			$scope.dataLoaded=false;
		}
			
		},function(error){$scope.errorMessage = true;});
	$scope.rollClickState=function(id)
	{
			
			for(var x=0; x<$scope.states.length; x++)
			{
						
				if($scope.states[x].abbreviation==id && $scope.states[x].isThere==true)
				{
					runInfo(id);
					
				}
				
			}
			function runInfo(id)
			{
				
			$scope.teachers.forRollOver =[];
			for(var i=0; i<$scope.teachers.length; i++)
			{
			if(id==$scope.teachers[i].state )
					{
						$scope.hideMapDiv=false;
						
						$scope.teachers.forRollOver.push($scope.teachers[i]);
						
					}
					if($scope.teachers.forRollOver.length>1)
					{
						$scope.clearer = true;
					}
					else
					{
						$scope.clearer=false;
					}
		
			};
		}
	};
				
	$scope.closeRollover=function()
	{
		$scope.hideMapDiv=true;
		$scope.showMapDiv=false;
	};
}]);	


angular.module('BaseballCardInfo', [])	
			
.controller('changeTab',['$scope','$location','Teacher','TeacherDataFetch','WPDataFetch','LessonsDataFetch','NewsDataFetch','ShipDataFetch', '$q','$routeParams','$rootScope','$sce', 'preloadImage', 'Favorites', '$q' , 'Facts','BigImage', function($scope, $location,Teacher, TeacherDataFetch, WPDataFetch, LessonsDataFetch, NewsDataFetch, ShipDataFetch, $q, $routeParams, $rootScope, $sce, preloadImage, Favorites, $q,Facts, BigImage ){
	$scope.buttons=Teacher.createObjects();
	

	
	$scope.buttonsArr = [$scope.buttons.blogs, $scope.buttons.photos, $scope.buttons.videos, $scope.buttons.lessons, $scope.buttons.news,$scope.buttons.ship];
	$scope.location = $location.path().split('/')[0]+'/'+$location.path().split('/')[1]+'/'+$location.path().split('/')[2];
	$scope.bigImageHider=true;
	$scope.tab = $routeParams.tab;		
	for(var i=0; i<$scope.buttonsArr.length; i++)
			{
				
				$scope.buttonsArr[i].state='off';
				$scope.buttonsArr[i].classy='hider';
				$scope.buttonsArr[i].hidden='true';
				if($scope.tab==$scope.buttonsArr[i].name)
				{
					$scope.buttonsArr[i].state='on';
					$scope.buttonsArr[i].classy='shower';
					$scope.buttonsArr[i].hidden='false';
				}
				
			}
						
	
	$scope.teacherdatacount = TeacherDataFetch.count;
	//alert($scope.teacherdatacount)
	$scope.bigImage = false;
	
	////////////////Gets called below to initialize data-gathering services
	
	$scope.accessData=function()
	{
				/////Runs services to load Teacher profile page
			$rootScope.favorites = Favorites.addFavorites();
		
			//alert($rootScope.teacherdata.firstname);
			//////////////checks datacount to determine data needs to be re-downloaded; if $scope.teacherdatacount==0 it loads
			if ($scope.teacherdatacount == 0 || $rootScope.teacherdata.firstname==undefined)
			{
				Facts.runFacts().then(function(result){
					$scope.fact = result;
					$scope.factShower=true;
				});		
				$scope.number=0
				$scope.loadHider=false;
				$scope.wp={}
				$scope.wp.dataLoaded=true; 
				
				TeacherDataFetch.data().then(function(data) {
				$scope.teacher = data;
					if($scope.teacher.mission[0].match(/[a,e,i,o,u,A,E,I,O,U]/g))
					{
						$scope.articleHider=true;
					}
					else{
						$scope.articleHider=false;
					}
				
					if($scope.teacher.cruiseurl=="#")
					{
						$scope.teacher.no_url = true;
					}
					else{
						$scope.teacher.no_url=false;
					}
					
					if($scope.teacher.school_url=="#")
					{
						$scope.teacher.no_school =true;
					}
					else
					{
						$scope.teacher.no_school=false;
					}
				if($scope.teacher.count!=0 )
				{
				
				$scope.teacher.dataLoaded=true;	
				$rootScope.teacherdata = $scope.teacher;
				$scope.teacher.finalImage= $scope.teacher.image
				
				var date_beg=new Date($scope.teacher.dates.split('-')[0]).valueOf();
				var date_end = new Date($scope.teacher.dates.split('-')[0]).valueOf();
				var d= new Date();
				var date_today = d.valueOf();
					if(date_beg<date_today&&date_end<date_today)
					{
						$scope.teacher.datesComp=0;
						$scope.teachershipHider=false;
					}
					if(date_beg<date_today && date_end>date_today)
					{
						$scope.teacher.datesComp=1;
						$scope.teachershipHider=false;
					}
					if(date_beg>date_today)
					{
						$scope.teacher.datesComp=2;
						$scope.teachershipHider=true;
					}
					if($scope.teacher.dates.split('-')[0].match("12/30/"))
					{
						$scope.teacher.datesComp=3;
						$scope.teachershipHider=true;
					}
						
					if($scope.teacher.subjects2!=undefined)
					{
						$scope.teacher.subjects_num=2;
					}
					else
					{
						$scope.teacher.subjects_num=1;
					}
						var wpdatacount = WPDataFetch.count;
						
							 WPDataFetch.data($location.path().split('/')[1].split('/')[0],$scope.teacher.firstname+' '+$scope.teacher.lastname_forDOM).then(function(data) {
							 	
							    
							    $scope.wp = data;
							  
							    if($scope.wp.items.length>0)
							    	{
							    	$scope.wp.dataLoaded=true; 
							    	$scope.factShower=false;	
							    	}
							    else{
							    	
							    	$scope.dataLoaded =false;
							    	$scope.factShower=false;
							    	}
							    for(var x=0; x<$scope.wp.items.length; x++)
							    {
							    	Favorites.checkFavorites($scope.wp.items[x], 'blogs');
							    	
							    	
							    }

							    $scope.images =[];
							   
								 for(var x=0; x<$scope.wp.Images.length; x++)
								{
									
									
									
									if($scope.wp.Images[x].post_title!="undefined")
									{
										$scope.wp.Images[x].id=$scope.images.length;
										$scope.images.push($scope.wp.Images[x]);
										Favorites.checkFavorites($scope.wp.Images[x], 'images');
									}
									
								}
							    var images = $scope.images;
							    
							    
							    for(var y=0; y<$scope.images.length; y++)
							    {
							    	Favorites.checkFavorites($scope.images[y], 'images');
							    		
							    }
							    $rootScope.imagedata = $scope.images;
							   	
							   	$rootScope.wpdata =$scope.wp;
					       		
					       		$scope.wp.checkVideos=false;
					       		$scope.wp.checkBlogs=false;
					       		$scope.wp.checkPhotos=false;
					       		
					      		 if($scope.wp.VMVid.length>0||$scope.wp.WPVid.length>0||$scope.wp.YT.length>0)
					      		 {
					      		 	
					      		 	$scope.wp.checkVideos=true;
					      		 }
					      		 if($scope.wp.items.length>0)
					      		 {
					      		 	
					      		 	$scope.wp.checkBlogs=true;
					      		 		
					      		 }
					      		 if($scope.wp.gallery_images.length>0)
					      		 {
					      		 	
					      		 	$scope.wp.checkPhotos=true;
					      		 		
					      		 	
					      		 	
					      		 }
							},function(error){$scope.errorMessage = true;});
						
						LessonsDataFetch.data($scope.teacher.firstname+' '+$scope.teacher.lastname_forDOM).then(function(data)
					 	 	{
					 	 		$scope.lessons =data;
					 	 		for(var z=0; z<$scope.lessons.length; z++)
					 	 		{
					 	 			Favorites.checkFavorites($scope.lessons[z], 'lessons');	
					 	 		}
					 	 		$scope.lessons.checkContents=false;
					 	 		$rootScope.lessonsdata =$scope.lessons;
					 	 		if($scope.lessons.length>0)
					 	 		{
					 	 			$scope.lessons.checkContents=true;
					 	 			
					 	 		}
					 	 		
					 	 	},function(error){$scope.errorMessage = true;});
						NewsDataFetch.data($scope.teacher.firstname+' '+$scope.teacher.lastname_forDOM).then(function(data)
				 	 	{
				 	 		
				 	 		$scope.news =data;
				 	 		$scope.news.checkContents=false;
				 	 		$rootScope.newsdata = $scope.news;
				 	 		$rootScope.newsdata =data;
				 	 		if( $scope.news.length>0 )
				 	 		{
				 	 			$scope.news.checkContents=true;
				 	 		}
				 	 	},function(error){$scope.errorMessage = true;});
						
						if($scope.teacher.ship!='#')
						{
						Teacher.getShipData($scope.teacher.ship, $scope.teacher.shiptype).then(function(data)
			     	 	{
			     	 		
			     	 		$scope.ship = data;
			     	 		$rootScope.shipdata = data;
			     	 		if($scope.ship.length>0)
			     	 		{
			     	 		$scope.checkShip=true;
			     	 		}
			     	 					     	 			
								
			     	 	},function(error){$scope.errorMessage = true;});
			     	 	
					}
					else{
						$scope.checkShip=false;
					}
					
					
				}
				
			else{
				$scope.teacher.dataLoaded=true;	
			}
			},function(error){$scope.errorMessage = true;});
			
		/////////////////////If the url changes it changes the $scope.teacherdatacount number back to 0 and runs the data again	
		} else if($rootScope.teacherdata.firstname!=undefined && $routeParams.teachername.replace('*', ' ').toLowerCase()!=$rootScope.teacherdata.firstname.toLowerCase()+' '+$rootScope.teacherdata.lastname.toLowerCase()&&$scope.teacherdatacount!=0) 
				{
					
				$scope.teacherdatacount = 0;
				$scope.number=$scope.teacherdatacount;
				$scope.factShower=false;
				$scope.accessData();
								
				}
				///////////////////If the url hasn't changed, it does not re-run the services to bring the data in
		else if($scope.teacherdatacount!=0){
			
			
			$scope.teacher = {};
			$scope.ship={};
			$scope.teacher = $rootScope.teacherdata;
			$scope.ship=$rootScope.shipdata;
			$scope.news = $rootScope.newsdata;
			$scope.lessons = $rootScope.lessonsdata;
			$scope.number=TeacherDataFetch.count
			$scope.wp={};
			$scope.wp=$rootScope.wpdata;
			$scope.images = $scope.wp.Images
			$scope.number=$scope.teacherdatacount;	
			$scope.factShower=false;
				
		}
		else{
			$scope.number=0;
			}
		$scope.teacherdatacount = TeacherDataFetch.count += 1;
		
};

$scope.runtabs=function()
	{
		window.scrollTo(0,1000);
	};

$scope.accessData();


$scope.switchFavorite=function(id, type)
	{
		var blogTitle=[];
		var imgSrc=[];
		var lessonUrl = [];
		///////////////Blogs//////////////////
		if(type=='blog')
		{
			
			if(localStorage.getItem('BlogArr')!=null && localStorage.getItem('FavoriteArr')!='')
					{
						var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));
						
					}
				else
				{
					var blogFav=[];
				}
				
			if($scope.wp.items[id].favorite=='off')
			{
				$scope.wp.items[id].favorite='on';
				blogFav.push( $scope.wp.items[id]);
				localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
				
			//$rootScope.favorites = Favorites.addFavorites($rootScope.wpdata.items, 'blog');
			}
			else{
				
				for(var x=0; x<blogFav.length; x++)
				{
					blogTitle.push(blogFav[x].BlogTitle);
				}
				
				$scope.wp.items[id].favorite='off';
				var index=blogTitle.indexOf($scope.wp.items[id].BlogTitle);
				blogFav.splice(index, 1);
				localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
			
			//$rootScope.favorites = Favorites.removeFavorites($rootScope.wpdata.items, 'blog');	
			
			}
			
			
			//localStorage.setItem('BlogArr', JSON.stringify($rootScope.favorites.blog));
			
		}	
		////////////////PHotos//////////////////
		if(type=='photo')
		{
			
			if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
		
				
		if($scope.images[id].favorite=='off')
			{
				$scope.images[id].favorite='on';
				
				imgFav.push( $scope.images[id]);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
				
				
				//$rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');
			}
			else{
				for(var y=0; y<imgFav.length; y++)
				{
					imgSrc.push(imgFav[y].src);
				}
				
				$scope.images[id].favorite='off';
				var index=imgSrc.indexOf($scope.wp.Images[id].src);
				imgFav.splice(index, 1);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
				//$rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');
			}
			 
		}
		
		///////////////////Bigphoto////////////	
		if(type=='bigphoto')
		{
			if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
			if($scope.favorite=='off')
				{
					$scope.favorite='on';
					imgFav.push( $scopeimages[id]);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					// $rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');
				}
				else{
					
					for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}
					$scope.favorite='off';
					var index=imgSrc.indexOf($scope.wp.Images[id].src);
					imgFav.splice(index, 1);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					 //$rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');
					}
					
			}	
		
		///////////Lessons////////////
		
		if(type=='lesson')
		{
			if(localStorage.getItem('LessonArr')!=null && localStorage.getItem('LessonArr')!='')
			{
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
			}
			else
			{
				var lessonFav =[];
			}
			
			if($scope.lessons[id].favorite=='off')
			{
				$scope.lessons[id].favorite='on';
				lessonFav.push( $scope.lessons[id]);
				localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
				//$rootScope.favorites = Favorites.addFavorites($rootScope.lessonsdata, 'lessons');
			}
			else{
				
				$scope.lessons[id].favorite='off';
				for(var y=0; y<lessonFav.length; y++)
					{
						lessonUrl.push(lessonFav[y].url);
					}
					
					var index=lessonUrl.indexOf($scope.lessons[id].url);
					lessonFav.splice(index, 1);
					localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
				//$rootScope.favorites = Favorites.removeFavorites($rootScope.lessonsdata, 'lessons');		
			}
			
		}
		
		$rootScope.favorites = Favorites.addFavorites();
		for(var i=0; i<$rootScope.wpdata.items.length;i++)
		{
			Favorites.checkFavorites($rootScope.wpdata.items[i], 'blogs');
			
		}
		for(var j=0; j<$rootScope.imagedata.length;j++)
		{
			Favorites.checkFavorites($rootScope.imagedata[j], 'images');
			
		}
		for(var k=0; k<$rootScope.lessonsdata.length;k++)
		{
			Favorites.checkFavorites($rootScope.lessonsdata[k], 'lessons');
		}
		
		
	};			


	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
			{

				BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
					$scope.image =result;
					$scope.bigImage=true;
					
					$('.xyzPhoto').bind('load', function(){
					$scope.image.isLoading=false;
					$scope.$apply();
					});
				
				},function(error){$scope.errorMessage = true;});
			};	
				
	$scope.nextImg = function(id,images)
			{
				BigImage.nextImg(id,images).then(function(result){
					
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,images).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};		
					

		
		
		
		$scope.closeBigBigImage2 = function()
		{
			$scope.bigImage=false;
			$scope.bigImageHider=true;
		};
		
		
		$scope.SkipValidation = function(value) {
						  return $sce.trustAsHtml(value);
						};
						
		
		

	}]);			


angular.module('Media', [])
.controller('mediaPage', ['$scope','$rootScope','$location','$routeParams','Media','Teacher','preloadImage','Slideshow','Favorites','Facts','BigImage', function($scope, $rootScope, $location, $routeParams,Media,Teacher , preloadImage, Slideshow, Favorites, Facts, BigImage)
{
	Facts.runFacts().then(function(result){
			$scope.fact = result
		});
	$scope.bigImage = false;
	$scope.bigImage2 = false;
	$scope.popup=false;
	$scope.popup2=false;
	Media.loadMediaList().then(function(data)
	{
		$scope.dataLoaded=true;
		$scope.teachers=data;
		$scope.teachers.buttons[0].state='on';
	},function(error){$scope.errorMessage = true;});
		//////////////Loads Media Slideshow
		Slideshow.loadSlideData('11INSvguka4SOHln9R4C8C96EQ1kkpoaw-EC8l7_h').then(function(data)
			{
				$scope.slides = data;
				$scope.slides[0].visible=true;
				$scope.slides[0].classy='active';
				$scope.slideshow_width = $scope.slides.length*620;
				$scope.playhider=true;
			},function(error){$scope.errorMessage = true;});
	/////////Tab Button click
	$scope.tabClick = function(number)
	{
		for(var x=0; x<$scope.teachers.buttons.length; x++)
			{
				if(x!=number)
				{
				$scope.teachers.buttons[x].state='off';
				}
				else
				{
					$scope.teachers.buttons[x].state='on';
				}
			}
	};
	/////////Clicking on a name opens a modal with all of that teacher's photos
	$scope.nameClick = function(year, name)
	{
		Teacher.getWPData(year, name.replace(/'/g, "")).then(function(result)
		{
			$scope.name=name;
			//$scope.name = $scope.name.replace(/'/g, "\'");
			
			$scope.wp = result;
			$scope.images = []
			var imgStr=''
			 for(var x=0; x<$scope.wp.Images.length; x++)
			{
				
				
				
				if($scope.wp.Images[x].post_title!="undefined")
				{
					$scope.wp.Images[x].id=$scope.images.length;
					$scope.images.push($scope.wp.Images[x]);
					Favorites.checkFavorites($scope.wp.Images[x], 'images');
				}
				
			}
			
			$scope.bigImage=true;
			$scope.bigImage2=false;
			$scope.popup=true;
		},function(error){$scope.errorMessage = true;});
	};
	
	$scope.closeBigImage = function()
		{	
			$scope.bigImage=false;
			$scope.popup=true;
			$scope.popup2=false;
		};
	$scope.closeBigBigImage2 = function()
		{
			
			$scope.bigImage2=false;
			$scope.popup2=false;
			$scope.popup=true;
			$scope.bigImage=true;
		};	
		
	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
			{

				BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
					$scope.image =result;
					
					$scope.bigImage2=true;
					$scope.popup2=true;
					
					$('.xyzPhoto').bind('load', function(){
					$scope.image.isLoading=false;
					$scope.$apply();
					});
				
				},function(error){$scope.errorMessage = true;});
			};	
				
	$scope.nextImg = function(id,images)
			{
				BigImage.nextImg(id,images).then(function(result){
					
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,images).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};
		
		$scope.switchFavorite=function(id, type)
		{
		var imgSrc=[];	
		if(type=='photo')
		{
			if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
			if($scope.images[id].favorite=='off')
				{
					$scope.images[id].favorite='on';
					imgFav.push( $scope.images[id]);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					// $rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');
					
				}
				else{
					for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}

					$scope.images[id].favorite='off';
					var index=imgSrc.indexOf($scope.images[id].src);
					imgFav.splice(index, 1);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					// $rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');
					
				}
				
		}	
		if(type=='bigphoto')
		{
		if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}	
			
		if($scope.favorite=='off')
			{
				$scope.favorite='on';
				imgFav.push( $scope.images[id]);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
				//$rootScope.favorites = Favorites.addFavorites($scope.wp.Images, 'images');
				
			}
			else{
				
				$scope.favorite='off';
				for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}
					$scope.images.favorite='off';
					var index=imgSrc.indexOf($scope.wp.Images[id].src);
					imgFav.splice(index, 1);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					//$rootScope.favorites = Favorites.removeFavorites($scope.wp.Images, 'images');

				}
				
		}
			
			$rootScope.favorites = Favorites.addFavorites();
			/*for(var i=0; i<$rootScope.wpdata.items.length;i++)
			{
				Favorites.checkFavorites($rootScope.wpdata.items[i], 'blogs');
				
			}
			for(var j=0; j<$rootScope.imagedata.length;j++)
			{
				Favorites.checkFavorites($rootScope.imagedata[j], 'images');
				
			}
			for(var k=0; k<$rootScope.lessonsdata.length;k++)
			{
				Favorites.checkFavorites($rootScope.lessonsdata[k], 'lessons');
				
			}*/

	};
}])



.controller('newsPage', ['$scope','$location','$routeParams','News','preloadImage','$sce','Facts','BigImage','SearchBox', function($scope, $location, $routeParams,News, preloadImage, $sce, Facts,BigImage,SearchBox)
{

	$scope.bigImage = false;
	$scope.bigImage2 = false;
	$scope.location = $location.path();
	$scope.data={arr:[], fullArr:[]};
	News.getNewsData().then(function(results){
		
		$scope.data.fullArr=results.finalNews;
		$scope.data.fullArr.reverse();
		$scope.years= results.finalYearsArr.reverse();
		$scope.filtered_data=[];
		$scope.itemsPerPage = 7;
		$scope.news.dataLoaded=true;
  		if($routeParams.num!==undefined)
		{
  		$scope.currentPage = parseInt($routeParams.num.replace('page',''));
  		}
  		else
  		{
  		$scope.currentPage=0;
  		}
		for(var i=0; i<($scope.data.fullArr.length); i++)
		{
			$scope.data.fullArr[i].main.newsItemsFinal=[];
			var splitter = $scope.data.fullArr[i].extra.split('$$')
			
				
			
			for(var x=0; x<splitter.length-1;x++)
			{
				
			var number=$scope.data.fullArr[i].main.newsItemsFinal.length+1;
			$scope.data.fullArr[i].main.newsItemsFinal.push(jQuery.parseJSON('{"articletitle":"'+splitter[x].split('##')[0]+'","mediaoutlet":"'+splitter[x].split('##')[1]+'","articleurl":"'+splitter[x].split('##')[2]+'","mediaoutleturl":"'+splitter[x].split('##')[3]+'"}'));
			
			}
		}
		$scope.start_index=$routeParams.num!=undefined ?(parseInt($routeParams.num.replace('page', ''), 10)*10)+1: 0;
		$scope.data.arr=$scope.data.fullArr.slice($scope.start_index, $scope.start_index+10);
				
			
		
	},function(error){$scope.errorMessage = true;});	
	
	$scope.checkLength = function(query)
	{
		var query = query.sanitize();
		if(query.length==0  )
		{
			$scope.filter=false
			
		}
		else{
			
			
			SearchBox.SearchData($scope.data.fullArr, query, ['article', 'article_year', 'mediaoutlet', 'articleurl', 'mediaurl'], 'aticleurl').then(function(data){
			$scope.filter=true;	
			if(data==="Bad Response" || data==={})
					{
					$scope.filtered_data=[]; 
					$scope.badResponse = true;
					$scope.errMsg= "There were no results found; please try again."
					console.log($scope.errMsg)
				} else {
					$scope.filtered_data = data.arr;
					$scope.badResponse = false;
				}	
		});
		}
	}	;
	
}])


.controller('powPage', ['$scope','$location','$routeParams','POW','preloadImage','$sce','Facts','BigImage','SearchBox', function($scope, $location, $routeParams,POW, preloadImage, $sce, Facts,BigImage,SearchBox)
{
	
	$scope.bigImage =false;
	$scope.noFilter=true;
	$scope.location = $location.path();
	Facts.runFacts().then(function(result){
		$scope.fact = result;
	});
	///Sets up paginated Photo of Week Data///////
	POW.getPOWData().then(function(result){
		$scope.pow = result;
		$scope.pow[0].finalImage=$scope.pow[0].src
				
		$scope.data = {arr:[], fullArr:[]};
		
		$scope.filtered_data=[];
		$scope.pow.checkContents =true;
		$scope.itemsPerPage = 10;
  		$scope.currentPage = 0;
  		$scope.filter=false;
  		
  		if($routeParams.num!==undefined)
  		{
		$scope.currentPage = parseInt($routeParams.num.replace('page',''),10);
		}
		else
		{
		$scope.currentPage=0;
		}
		for(var x=1; x<$scope.pow.length; x++)
		{
			$scope.data.fullArr.push($scope.pow[x]);
			
		}
		$scope.start_index=$routeParams.num!=undefined ?(parseInt($routeParams.num.replace('page', ''), 10)*10): 1;
		$scope.data.arr=$scope.data.fullArr.slice($scope.start_index-1, $scope.start_index+9);
				
		$scope.pow.checkContents = true;	
		
	},function(error){$scope.errorMessage = true;});	
	
	$scope.checkLength = function(query)
	{
		var query = query.sanitize();
		if(query.length==0  )
		{
			$scope.filter=false
			
		}
		else{
			SearchBox.SearchData($scope.data.fullArr, query, ['caption', 'description', 'date', 'keywords', 'credit'], 'caption').then(function(data){
				$scope.filter=true;	
				if(data==="Bad Response" || data==={})
					{
					$scope.filtered_data=[]; 
					$scope.badResponse = true;
					$scope.errMsg= "There were no results found; please try again."
					console.log($scope.errMsg)
				} else {
					$scope.filtered_data = data.arr;
					$scope.badResponse = false;
				}	
		});
		}
	}	;
	$scope.closeBigImage2 = function()
	{
		$scope.bigImage=false;
		$scope.bigImageHider=true;
	};
	

	
	$scope.closeBigImage2 = function()
	{
		$scope.bigImage=false;
		$scope.bigImageHider=true;
	};
	
	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
		{

			BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
				$scope.image =result;
				$scope.bigImage=true;
				
				$('.xyzPhoto').bind('load', function(){
				$scope.image.isLoading=false;
				$scope.$apply();
				});
			
			},function(error){$scope.errorMessage = true;});
		};	
				
	$scope.nextImg = function(id,images)
			{
				BigImage.nextImg(id,$scope.pow).then(function(result){
					
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					});
				
				});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,$scope.pow).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					});
				
				});	
			};
		
		
		
		$scope.SkipValidation = function(value) {
						  return $sce.trustAsHtml(value);
						};


}]);

angular.module('Alumni', [])
.controller('spotPage', ['$scope','$location','$routeParams','preloadImage','Alumni','$sce','$rootScope','Facts', 'BigImage','SearchBox', function($scope, $location, $routeParams, preloadImage, Alumni, $sce, $rootScope, Facts, BigImage, SearchBox)
{
		//alert($routeParams.spot_num.replace('page',''));
		$scope.bigImage=false;
		$scope.noFilter=true;
		$scope.indivSpot=false;
		$scope.location = $location.path();
		//$scope.checkContents=false;
		$scope.count=0;
		$scope.data={arr:[], fullArr:[]};
		/////Loads the Alumni Spotlight Data
		Alumni.getSpotData().then(function(data)
		{
		
		$scope.data.fullArr = data;
		
		
		$scope.filtered_data=[];
		$scope.checkContents =true;
		$scope.itemsPerPage = 5;
		if($routeParams.num!==undefined)
		{
  		$scope.currentPage = parseInt($routeParams.num.replace('page',''));
  		}
  		else
  		{
  		$scope.currentPage=0;
  		}
  	
  		$scope.start_index=$routeParams.num!=undefined ?(parseInt($routeParams.num.replace('page', ''), 10)*10): 0;
  		$scope.data.arr=$scope.data.fullArr.slice($scope.start_index, $scope.start_index+9);
				
			
		
	},function(error){$scope.errorMessage = true;});	
	
	$scope.checkLength = function(query)
	{
		var query = query.sanitize();	
		if(query.length==0  )
		{
			$scope.filter=false
			
		}
		else{
			SearchBox.SearchData($scope.data.fullArr, query, ['firstname', 'lastname', 'longbody', 'region'], 'longbody').then(function(data){
				$scope.filter=true;	
				if(data==="Bad Response" || data==={})
					{
					$scope.filtered_data=[]; 
					$scope.badResponse = true;
					$scope.errMsg= "There were no results found; please try again."
					console.log($scope.errMsg)
				} else {
					$scope.filtered_data = data.arr;
					$scope.badResponse = false;
				}	
			});
		}
	}	;
		
		$scope.closeBigImage2 = function()
		{
			$scope.bigImage=false;
			$scope.bigImageHider=true;
		};
		
	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
		{

			BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
				$scope.image =result;
				$scope.image.alt=caption;
				$scope.bigImage=true;
				$('.xyzPhoto').bind('load', function(){
				$scope.image.isLoading=false;
				$scope.$apply();
				});
			
			},function(error){$scope.errorMessage = true;});
		};	
				
	$scope.nextImg = function(id,images)
			{
				
				BigImage.nextImg(id,$scope.data.fullArr).then(function(result){
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						$scope.image.isLoading=false;
						$scope.$apply();
					});
				});	
			});
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,$scope.data.fullArr).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});
				
				});	
			});
		};	
		
		
		$scope.SkipValidation = function(value) {
						  return $sce.trustAsHtml(value);
						};

		
}])

.controller('openIndivSpot', ['$scope','$location','$routeParams','preloadImage','Alumni','$sce', '$rootScope', function($scope, $location, $routeParams, preloadImage, Alumni, $sce, $rootScope)
{
	
	/////////////ON clicking Read More on the Alumni Spotlights page, this opens an "individual spotlight"
	$scope.bigImage=false;
	$scope.checkContents=false;
		////////////////routeParams//////////////////
	if($rootScope.alumni_spot==null)
	{
		$scope.checkContents =true;
		Alumni.getSpotData().then(function(data)
		{
		
		$rootScope.alumni_spot = data;
		$rootScope.alumni_spot.checkContents= false;
		for(var i=0; i<$rootScope.alumni_spot.length; i++)
			{
				if($rootScope.alumni_spot[i].longbody=='#')
				{
					$rootScope.alumni_spot[i].longbody= $rootScope.alumni_spot[i].shortbody;
				}
				
				if($routeParams.spot_title==$rootScope.alumni_spot[i].hash.split('/indiv_spotlight/')[1])
				{
				$scope.indiv_image= $rootScope.alumni_spot[i].src.split('?')[0];
				$scope.isLoading = true;
           		$scope.isSuccessful = false;
			 	
				$scope.indiv_title = $rootScope.alumni_spot[i].firstname+' '+$rootScope.alumni_spot[i].lastname;
				$scope.indiv_caption = $rootScope.alumni_spot[i].caption;
				$scope.indiv_longbody = $rootScope.alumni_spot[i].longbody;
				$scope.indivSpot=true;
				

			
				}
			}
			
		},function(error){$scope.errorMessage = true;});
		
	}
	else
	{
		window.scrollTo(0,50);
		
			$scope.checkContents =true;
			for(var i=0; i<$rootScope.alumni_spot.length; i++)
			{
				if($routeParams.spot_title==$rootScope.alumni_spot[i].hash.split('/indiv_spotlight/')[1])
				{
				$scope.indiv_image= $rootScope.alumni_spot[i].src.split('?')[0];
				$scope.isLoading = true;
           		$scope.isSuccessful = false;
			 	
				$scope.indiv_title = $rootScope.alumni_spot[i].firstname+' '+$rootScope.alumni_spot[i].lastname;
				$scope.indiv_caption = $rootScope.alumni_spot[i].caption;
				$scope.indiv_longbody = $rootScope.alumni_spot[i].longbody;
				$scope.indivSpot=true;
				
				
				
			}	
			

	}
}		
$scope.SkipValidation = function(value) {
						  return $sce.trustAsHtml(value);
						};
	
}]);
		
angular.module('TabPages', [])
.controller('TabsPages-NoTop', ['$scope','$location','$routeParams','preloadImage','Tabs', 'TabsDataFetch','TabsDataFetchTop', '$sce', '$rootScope', function($scope, $location, $routeParams, preloadImage, Tabs,TabsDataFetch,TabsDataFetchTop, $sce, $rootScope)
{	
	/////gets data from a specific spreadsheet (based on the url)
	
	$scope.bigImage=false;
	$scope.spreadsheets =[{type:'alumni', spreadsheet_id:'0Ak_vKEBczgcYdGdFNGlHZEhOUGRYQW8yOFlrQktxZGc'}, {type:'about', spreadsheet_id:'0Ak_vKEBczgcYdHpJQnNPOTZWRDlIVVZ3MV9NOGxRVEE'}, {type:'how_to_apply', spreadsheet_id:'0Ak_vKEBczgcYdDNvV29Ka1BJN1Ezd2dMcnJOOW8zY0E'}, {type:'ships', spreadsheet_id:'0Ak_vKEBczgcYdG1wa0tIWmRrU28yNVFQR29RT2tvR1E'}, {type:'resources', spreadsheet_id:'0Ak_vKEBczgcYdE13QzE0Y0xMMm1oaTh3WjFKRktsRHc'}];
	
	for(var x=0; x<$scope.spreadsheets.length;x++)
	{
		
		if($scope.spreadsheets[x].type==$location.path().split('/')[1].split('/')[0])
		{
			$scope.spreadsheet = $scope.spreadsheets[x].spreadsheet_id;
			$scope.location='/'+$scope.spreadsheets[x].type+'/';
			$scope.type = $scope.spreadsheets[x].type;
		}
	}
	var tabsdatacount = TabsDataFetch.count;
	$scope.accessData = function()
	{
	
		if(tabsdatacount==0)
		{
			$scope.number=tabsdatacount;
			
			TabsDataFetch.data($scope.spreadsheet, $scope.type).then(function(result){
				$scope.tabs = result;
				if($scope.tabs.count!=0 ||$rootScope.tabsdata.type==undefined)
				{
				$rootScope.tabsdata=result;
				
				for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off'
					
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g, ' ').toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					
				}
				$scope.dataLoaded=true;
				}
				else
				{
					$scope.dataLoaded=false;
				}
				
				},function(error){$scope.errorMessage = true;});
			
			
				
			}
			else if($rootScope.tabsdata.type!=undefined && $rootScope.tabsdata.type.toLowerCase()!=$location.path().split('/')[1].split('/')[0].toLowerCase())
			{
				tabsdatacount=0;
				$scope.number=tabsdatacount;
				$scope.accessData();
			}
			else
			{
			$scope.tabs = $rootScope.tabsdata;
			for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off';
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g,' ' ).toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					
				}
				$scope.dataLoaded=true;
				$scope.number=tabsdatacount;
			}
			tabsdatacount = TabsDataFetch.count += 1;
	};
	$scope.runtabs_no_top=function()
	{
		
		window.scrollTo(0,1000);
	};
	
	
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};	
	
	$scope.accessData();
	
}])


.controller('Tabs', ['$scope','$location','$routeParams','preloadImage','Tabs', 'TabsDataFetch','TabsDataFetchTop', '$sce', '$rootScope', function($scope, $location, $routeParams, preloadImage, Tabs,TabsDataFetch,TabsDataFetchTop, $sce, $rootScope)
{	
	
	/////gets data from a specific spreadsheet (based on the url)
	$scope.bigImage=false;
	$scope.spreadsheets =[{type:'alumni', spreadsheet_id:'0Ak_vKEBczgcYdGdFNGlHZEhOUGRYQW8yOFlrQktxZGc'}, {type:'about', spreadsheet_id:'0Ak_vKEBczgcYdHpJQnNPOTZWRDlIVVZ3MV9NOGxRVEE'}, {type:'how_to_apply', spreadsheet_id:'0Ak_vKEBczgcYdDNvV29Ka1BJN1Ezd2dMcnJOOW8zY0E'}, {type:'ships', spreadsheet_id:'0Ak_vKEBczgcYdG1wa0tIWmRrU28yNVFQR29RT2tvR1E'}, {type:'resources', spreadsheet_id:'0Ak_vKEBczgcYdE13QzE0Y0xMMm1oaTh3WjFKRktsRHc'}];
	
	for(var x=0; x<$scope.spreadsheets.length;x++)
	{
		
		if($scope.spreadsheets[x].type==$location.path().split('/')[1].split('/')[0])
		{
			$scope.spreadsheet = $scope.spreadsheets[x].spreadsheet_id;
			$scope.location='/'+$scope.spreadsheets[x].type+'/';
			$scope.type = $scope.spreadsheets[x].type;
		}
	}
	var tabsdatacount = TabsDataFetch.count;
	var topdatacount=TabsDataFetchTop.count;
	
	$scope.accessData = function()
	{
	
		if(tabsdatacount==0 ||topdatacount==0 || $rootScope.topdata.type==undefined)
		{
			$scope.number=tabsdatacount;
			$scope.loadHider=false;
			
			$rootScope.topdata ={};
			$rootScope.tabsdata={};
			
			TabsDataFetchTop.data($scope.spreadsheet, $scope.type).then(function(result)
			{
				
				$scope.top=result;
				$scope.top.finalImage=$scope.top.image.split('?')[0];
				
				
				$rootScope.topdata=result;
				
			}).then(function(){
				TabsDataFetch.data($scope.spreadsheet, $scope.type).then(function(result){
				
				$scope.tabs = result;
				if($scope.tabs.count!=0)
				{
				$rootScope.tabsdata=result;
				
				for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off'
					
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g, ' ').toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					$scope.dataLoaded=true;
					
				}
				
				}
				else
				{
					$scope.dataLoaded=false;
				}
				},function(error){$scope.errorMessage = true;});
			},function(error){$scope.errorMessage = true;});
			
			
				
				
			}
			else if($rootScope.topdata.type!=undefined && $rootScope.tabsdata.type.toLowerCase()!=$location.path().split('/')[1].split('/')[0].toLowerCase())
			{
				
				tabsdatacount=0;
				topdatacount=0;
				$scope.number=tabsdatacount;
				$scope.accessData();
			}
			else
			{
			$scope.tabs = $rootScope.tabsdata;
			$scope.top=$rootScope.topdata;
			$scope.number=TabsDataFetch.count
			for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off';
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g,' ' ).toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					
				}
				$scope.dataLoaded=true;
			//	$scope.image = $scope.top[0].gsx$image.$t;
			}
			tabsdatacount = TabsDataFetch.count += 1;
			topdatacount = TabsDataFetchTop.count+=1;
	};
	$scope.runtabs=function()
	{
		window.scrollTo(0,1000);
	};
	
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};	
	
	$scope.accessData();
	
	
	
	
}])
.controller('Alumni', ['$scope','$location','$routeParams','preloadImage','Tabs', 'TabsDataFetch','TabsDataFetchTop', '$sce', '$rootScope','QuotesData', function($scope, $location, $routeParams, preloadImage, Tabs,TabsDataFetch,TabsDataFetchTop, $sce, $rootScope, QuotesData)
{	
	
	/////gets data from a specific spreadsheet (based on the url)
	$scope.bigImage=false;
	$scope.spreadsheets =[{type:'alumni', spreadsheet_id:'1vYtapZS28y7wvhWroOwjL7hVkV2loaFJTVOlagpIULs'}];
	for(var x=0; x<$scope.spreadsheets.length;x++)
	{
		
		if($scope.spreadsheets[x].type==$location.path().split('/')[1].split('/')[0])
		{
			$scope.spreadsheet = $scope.spreadsheets[x].spreadsheet_id;
			$scope.location='/'+$scope.spreadsheets[x].type+'/';
			$scope.type = $scope.spreadsheets[x].type;
		}
	}
	var tabsdatacount = TabsDataFetch.count;
	var topdatacount=TabsDataFetchTop.count;
	var quotesdatacount=QuotesData.count;
	
	$scope.accessData = function()
	{
	
		if(tabsdatacount==0 ||topdatacount==0||quotesdatacount==0 || $rootScope.topdata.type==undefined)
		{
			$scope.number=tabsdatacount;
			$scope.loadHider=false;
			
			$rootScope.topdata ={};
			$rootScope.tabsdata={};
			$rootScope.quotesdata={};
			QuotesData.data($scope.spreadsheet, $scope.type).then(function(result){
					$scope.quotes=result;
					$rootScope.quotedata=result;
					
				
			TabsDataFetchTop.data($scope.spreadsheet, $scope.type).then(function(result)
			{
				$scope.top=result;
				$scope.top.finalImage=$scope.top.image.split('?')[0];
				
				
				$rootScope.topdata=result;
				
			}).then(function(){
				TabsDataFetch.data($scope.spreadsheet, $scope.type).then(function(result){
				
				$scope.tabs = result;
				if($scope.tabs.count!=0)
				{
				$rootScope.tabsdata=result;
				
				for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off'
					
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g, ' ').toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					$scope.dataLoaded=true;
					
				}
				
				}
				else
				{
					$scope.dataLoaded=false;
				}
				},function(error){$scope.errorMessage = true;});
			});
			
			});
				
				
			}
			else if($rootScope.topdata.type!=undefined && $rootScope.tabsdata.type.toLowerCase()!=$location.path().split('/')[1].split('/')[0].toLowerCase())
			{
				
				tabsdatacount=0;
				topdatacount=0;
				quotesdatacount=0;
				$scope.number=tabsdatacount;
				$scope.accessData();
			}
			else
			{
			$scope.tabs = $rootScope.tabsdata;
			$scope.quotes=$rootScope.quotesdata;
			$scope.top=$rootScope.topdata;
			$scope.number=TabsDataFetch.count
			for(var i=0; i<$scope.tabs.length; i++)
				{
					$scope.tabs[i].gsx$tabname.$t=toTitleCase($scope.tabs[i].gsx$tabname.$t);
					$scope.tabs[i].gsx$tabname.classy='hider2';
					$scope.tabs[i].gsx$tabname.state='off';
					if($routeParams.tabname!=undefined && $routeParams.tabname.replace(/_/g,' ' ).toLowerCase()==$scope.tabs[i].gsx$tabname.$t.toLowerCase())
					{
						$scope.tabs[i].gsx$tabname.classy='shower2';
						$scope.tabs[i].gsx$tabname.state='on'
					}
					else if($routeParams.tabname==undefined && i==($scope.tabs.length-1))
					{
						
						$location.path($scope.location+$scope.tabs[0].gsx$tabname.rp);
					}
					
				}
				$scope.dataLoaded=true;
			//	$scope.image = $scope.top[0].gsx$image.$t;
			}
			tabsdatacount = TabsDataFetch.count += 1;
			topdatacount = TabsDataFetchTop.count+=1;
	};
	$scope.runtabs=function()
	{
		window.scrollTo(0,1000);
	};
	
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};	
	
	$scope.accessData();
	
	
	
	
}]);	

angular.module('FAQs', [])
.controller('getFAQsData', ['$scope','$location','$routeParams','preloadImage','FAQs','$sce', '$rootScope','BigImage' , function($scope, $location, $routeParams, preloadImage, FAQs, $sce, $rootScope, BigImage)
{	
	/////loads FAQ data
	$scope.bigImage=false;	
	$scope.buttons = [{name:'Facts', state:'on', classy:'shower2'},{name:'Quotes', state:'off', classy:'hider2'}]
	$scope.buttonChange = function(name)
	{
		for(var i=0; i<$scope.buttons.length; i++)
		{
			
			if(name == $scope.buttons[i].name)
			{
				$scope.buttons[i].state='on';
				$scope.buttons[i].classy='shower2'
			}
			else{
				$scope.buttons[i].state='off';
				$scope.buttons[i].classy='hider2'
			}
		}
	};
	
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};
		
	$scope.showAnswer = function(id) {
		if($scope.faqs[id].gsx$answer.hideAnswer==true)	
		{
	     $scope.faqs[id].gsx$answer.hideAnswer=false;
	    }
	    else
	    {
	    	 $scope.faqs[id].gsx$answer.hideAnswer=true;
	    }
    
   };	
   
   
	FAQs.getFAQData().then(function(result){
		$scope.faqs=result;
		
		$scope.checkContents =true
	},function(error){$scope.errorMessage = true;});
	
	FAQs.getQuotesData().then(function(result){
		$scope.quotes = result
		
	},function(error){$scope.errorMessage = true;});
	
	
}]);	

angular.module('TASA', [])
.controller('getTASAData', ['$scope','$location','$routeParams','preloadImage','TASA','$sce', '$rootScope', 'BigImage', function($scope, $location, $routeParams, preloadImage, TASA, $sce, $rootScope, BigImage)
{	
	$scope.bigImage=false;	
	/////change this so that it looks at the $locationpath and looks for 'tasa' and dynamically creates the regions object
	var regions =[{type:'netasa', ab:'NE', spreadsheet: 'https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdEJDOE9weDRPdnV2WmN6aEVJUlByZnc/'},{type:'matasa', ab:'MA', spreadsheet:'https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdDhuc2tyUkxiT2taQlRRY2xUanhIdXc/'}];
	$scope.teacher_for_rollover={};
	$scope.showInfo=false;
	for(var x=0; x<regions.length;x++)
	{
		if(regions[x].type==$location.path().split('/')[1].split('/')[0].toLowerCase())
		{
			
			var region = regions[x].ab;
			var spreadsheet = 'https://spreadsheets.google.com/feeds/list/157XZXkcxPXCX1M3Yp0J3LRypGzsQp_YkChv_SYHb-iA/';
			//$scope.location='/'+$scope.regions[x].type+'/';
		}
	}
	$scope.closeBigImage2 = function()
		{
			$scope.bigImage=false;
			$scope.bigImageHider=true;
		};
	
	$scope.openBigImage = function(img, post_title, post_url, caption, parent, id, favorite)
			{
				BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
					$scope.image =result;
					$scope.image.alt=caption;
					$scope.bigImage=true;
					
					$('.xyzPhoto').bind('load', function(){
					$scope.image.isLoading=false;
					$scope.$apply();
					});
				
				},function(error){$scope.errorMessage = true;});
			};	
				
	$scope.nextImg = function(id,images)
			{
				
				BigImage.nextImg(id,images).then(function(result){
					
				var nextImg =result;
					
					BigImage.openBigImage(nextImg.bigImageSrc,nextImg.post_title, nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
					
						$scope.image =result;
						
						$scope.image.alt=nextImg.alt;
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,images).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc,prevImg.post_title, prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite ).then(function(result){
						
						$scope.image =result;
						$scope.image.alt=prevImg.alt
						$('.xyzPhoto').bind('load', function(){
						
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};		

		
	
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};
	
	$scope.rollClickState=function(id)
	{
			
			for(var i=0; i<$scope.teachers.length; i++)
			{
			
			if(id.toLowerCase()==$scope.teachers[i].gsx$teachername.$t.toLowerCase())
					{
						
						$scope.showInfo=true;
						
						$scope.teacher_for_rollover = $scope.teachers[i];
						
					}
					
		}
	};
		
		
			
	$scope.closeRollover=function()
	{
		
		$scope.showInfo=false;
	};
	
	TASA.getSpotlightData(region).then(function(data)
	{
		$scope.spot = data;
		
	});
	
	TASA.getIntroData(spreadsheet, 3).then(function(data)
	{
		$scope.intro = data;	
		$scope.abbrev = $scope.intro.headline.split('(')[1];	
		$scope.abbrev=Slicer($scope.abbrev, $scope.abbrev.length);
		$scope.svg = 'images/map_svgs/TASAMapSVG.svg'
		
		
		
	});
	TASA.getGalleryData(spreadsheet, 2).then(function(data)
	{
		$scope.gallery = data;
	});
	TASA.getTeacherData(spreadsheet, 1).then(function(data)
	{
		$scope.teachers=data;
		$scope.circles =[];
		$scope.states =[];
		$scope.teachers.forEach(function(item){
				if(item.gsx$region.$t.toLowerCase()===$location.path().split('/')[1].split('/')[0].toLowerCase())
				{
				
				$scope.states.push(item.gsx$stateab.$t);
				$scope.circles.push(item);
				}
			});
		$scope.states=$scope.states.removeDuplicatesArr();
		$scope.checkContents=true;
		TASA.createMap($scope.states).then(function(data){
		$scope.map=data;
		});
	});
	
	
	
	
}]);

angular.module('Homepage', [])
.controller('homePageController', ['$scope','$location','$routeParams','preloadImage','$sce', '$rootScope','HomepageData','Slideshow', function($scope, $location, $routeParams, preloadImage,  $sce, $rootScope, HomepageData, Slideshow)
{	
	
	
		
	$scope.currentIndex =0;
	$scope.slides={};
	$scope.bigImage=false;
	$scope.currentHider =true;
	$scope.alumniHider =true;
	$scope.powHider =true;
	$scope.dykHider =true;
	$scope.showMessage =true;
	
	
	$scope.tweets={name:'tweets', state:"on",classy:'shower2' };
	$scope.photos={name:'photos', state:'off', classy:'hider2'};
	$scope.videos={name:'videos', state:'off', classy:'hider2'};
	$scope.buttons =[$scope.tweets, $scope.photos, $scope.videos];
	
	//////////////closes homepage popup message about applying for TAS
	$scope.closeMessage = function(){
		$scope.showMessage =false;
	};
	
	$scope.buttonChange = function(name)
	{
		
		for(var i=0; i<$scope.buttons.length; i++)
		{
			
			if(name == $scope.buttons[i].name)
			{
				$scope.buttons[i].state='on';
				$scope.buttons[i].classy='shower2'
			}
			else{
				$scope.buttons[i].state='off';
				$scope.buttons[i].classy='hider2'
			}
		}
	};
	///for rollover of images in the photos tab in the lower-right corener of the page
	$scope.showTitle=function(id)
	{
		$scope.images[id].showTitle=true;
	};
	$scope.hideTitle=function(id)
	{
		$scope.images[id].showTitle=false;
	};
	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};
	$scope.closeBigImage = function()
	{
		$scope.bigImage=false;
		$scope.bigImageHider=true;
	};
	
	$scope.bigImageHider=true;
	$scope.popupHider=true;
	$scope.searchBox=false;
	$scope.currentLoader =true;
	

	
	HomepageData.getDYKData().then(function(data)
	{
		$scope.dyks = data;
		$scope.dykHider=false;

			
	},function(error){$scope.errorMessage = true;});
	
	HomepageData.getNewsData().then(function(data)
	{
		$scope.news = data;
		$scope.newsHider=false;
	});
	/////Gets scope variables for Blogposts box and the Videos Photos tabs
	HomepageData.getWPData().then(function(data)
	{
		$scope.data = data;
		$scope.wpMinus=[];
		$scope.images=[];
		$scope.videosArr=[];
		$scope.tabImageHider =true;
		$scope.tabVideoHider=true;
		
		if($scope.data.items.length>4)
		{
			$scope.lengthy = 4
		}
		else{
			 $scope.lengthy = $scope.data.items.length;
		}
		for(var x=0; x<$scope.lengthy; x++)
		{
			$scope.wpMinus.push({item:$scope.data.items[x], id:x});
		}
		if($scope.data.Images.length>15)
		{
			$scope.i_lengthy = 15;
		}
		else{
			$scope.i_lengthy=$scope.data.Images.length;
		}
		for(var i=0; i<$scope.i_lengthy; i++)
		{
			$scope.images.push($scope.data.Images[i]);
			$scope.images[i].id=i;
			$scope.images[i].showTitle=false;
		}
		if($scope.data.WPVid.length>8)
		{
			$scope.v_lengthy = 8;
		}
		else{
			 $scope.v_lengthy = $scope.data.WPVid.length;
		}
		for(var n=0; n<$scope.v_lengthy; n++)
		{
			
			$scope.videosArr.push($scope.data.WPVid[n]);
		}
		$scope.wpHider=false;
		$scope.checkContents = true;
			
	},function(error){$scope.errorMessage = true;});
	
	

	
}]);




angular.module('Highlights', [])
.controller('highlightsController', ['$scope','$location','$routeParams','preloadImage','$sce', '$rootScope','HomepageData', function($scope, $location, $routeParams, preloadImage,  $sce, $rootScope, HomepageData)
{
	$scope.bigImage=false;
}]);

angular.module('Generic', [])
.controller('genericController', ['$scope', function($scope)
{
	$scope.bigImage=false;
}]);


angular.module('Footer', [])
.controller('Footer', ['$scope', function($scope)
{
		$scope.showSiteMap=true;
		
	$scope.clickFooter=function()
	{
		if($scope.showSiteMap==true)
		{
			$scope.showSiteMap=false;
		}
		else
		{
			$scope.showSiteMap=true;
		}
	};	
		
}]);

angular.module('Favorites', [])
.controller('FavoriteController', ['$scope','$location','$routeParams','preloadImage','$sce', '$rootScope','Favorites', 'preloadImage','BigImage', 'Facts', function($scope, $location, $routeParams, preloadImage,  $sce, $rootScope, Favorites, preloadImage,BigImage, Facts)
{
	////shows info about Local Storage
	$scope.toggleInfo = function()
	{
		if($scope.LSinfo==false)
		{
			$scope.LSinfo=true;
			$scope.showOption=false
		}
		else{
			$scope.LSinfo=false;
			$scope.showOption=true;
		}
	};
	///shows email form
	$scope.toggleEmail = function()
	{
		if($scope.showEmailForm==false)
		{
			$scope.showEmailForm=true;
			$scope.showOption=false
		}
		else
		{
			$scope.showEmailForm=false;
			$scope.showOption=true;
		}
	};
	
	;
	//////////Opens the Favorites modal
	$scope.openFavorites=function()
	{
		
		$scope.bigImageFav=true;
		$scope.popupHider6=false;
		$rootScope.favorites =Favorites.addFavorites();
		$scope.setUpSocial();
		
		
	};	
	$scope.closeFavorites = function()
	{
		$scope.popupHider6=true;
		$scope.bigImageFav=false;
	};
	
	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
			{
				
				Facts.runFacts().then(function(result){
					$scope.fact = result
				});
				
				BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
					$scope.image =result;
					$scope.bigImageFav2=true;
					$scope.popupHider7=false;
					
					
					$('.xyzPhoto').bind('load', function(){
					$scope.image.isLoading=false;
					$scope.$apply();
					});
				
				},function(error){$scope.errorMessage = true;});
			};	
				
	$scope.nextImg = function(id,images)
			{
				
				BigImage.nextImg(id,images).then(function(result){
					
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.caption, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					});
				
				},function(error){$scope.errorMessage = true;});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,images).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.caption, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						
						$('.xyzPhoto').bind('load', function(){
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					});
				
				},function(error){$scope.errorMessage = true;});	
			};		
		
		
	$scope.closeBigImage2 = function()
	{
		$scope.popupHider7=true;
		$scope.bigImageFav2=false;
		$scope.popupHider6=false;
		$scope.bigImageFav=true;
	};
	
	$scope.changeClass = function(obj)
	{
		for(var x=0; x<$scope.favButtons.length; x++)
		{
			
			if(obj.name==$scope.favButtons[x].name)
			{
				$scope.favButtons[x].state='on';
				$scope.favButtons[x].classy='shower';
			}
			else
			{
				$scope.favButtons[x].state='off';
				$scope.favButtons[x].classy='hider';
			}
		}
	};
	
	$scope.switchFavorite=function(id, type)
	{
		var blogTitle=[];
		var imgSrc=[];
		var lessonUrl = [];
		///////////////Blogs//////////////////
		if(type=='blog')
		{
			
			if(localStorage.getItem('BlogArr')!=null && localStorage.getItem('FavoriteArr')!='')
					{
						var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));
						
					}
				else
				{
					var blogFav=[];
				}
			if($rootScope.favorites.blogs[id]!=null)
			{	
				if($rootScope.favorites.blogs[id].favorite=='off')
				{
					$rootScope.favorites.blogs[id].favorite='on';
					blogFav.push( $rootScope.favorites.blogs[id]);
					
					localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
					//$rootScope.favorites = Favorites.addFavorites($rootScope.wpdata.items, 'blog');
				}
				else{
					
					for(var x=0; x<blogFav.length; x++)
					{
						blogTitle.push(blogFav[x].BlogTitle);

					}
					
					$rootScope.favorites.blogs[id].favorite='off';
					
					var index=blogTitle.indexOf($rootScope.favorites.blogs[id].BlogTitle);
					blogFav.splice(index, 1);
										localStorage.setItem('BlogArr', JSON.stringify(blogFav));
					//$rootScope.favorites = Favorites.removeFavorites($rootScope.wpdata.items, 'blog');
				}
				
			}
			else
				{
					blogFav=[];
					localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
				}
			
		}	
		////////////////PHotos//////////////////
		if(type=='photo')
		{
			if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
		if($rootScope.favorites.images[id]!=null)
			{	
			if($rootScope.favorites.images[id].favorite=='off')
				{
					$rootScope.favorites.images[id].favorite='on';
					imgFav.push( $scope.favorite.images[id]);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					//$rootScope.favorites = Favorites.addFavorites();
					// $rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');	
				}
				else{
					for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}
					$rootScope.favorites.images[id].favorite='off';
					var index=imgSrc.indexOf($rootScope.favorites.images[id].src);
					imgFav.splice(index, 1);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					//$rootScope.favorites = Favorites.addFavorites();
					 //$rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');	
					
				
			
			
			}
		}
		else
		{
			imgFav=[];
			localStorage.setItem('ImgArr',imgFav );
		}	
	}	
		////////////BigPhoto
		if(type=='bigphoto')
		{
			if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
		if($rootScope.favorites.images[id]!=null)
			{	
			if($rootScope.favorites.images[id].favorite=='off')
				{
					$rootScope.favorites.images[id].favorite='on';
					imgFav.push( $scope.favorite.images[id]);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					 //$rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');
				}
				else{
					for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}
					$rootScope.favorites.images[id].favorite='off';
					var index=imgSrc.indexOf($rootScope.favorites.images[id].src);
					imgFav.splice(index, 1);
					localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
					 //$rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');
				}
				
			}
			else
			{
				imgFav=[];
				localStorage.setItem('ImgArr',imgFav );
			}
		}
		
		///////////Lessons////////////
		
		if(type=='lesson')
		{
			if(localStorage.getItem('LessonArr')!=null && localStorage.getItem('LessonArr')!='')
			{
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
			}
			else
			{
				var lessonFav =[];
			}
			if($rootScope.favorites.lessons[id]!=null)
			{
				if($rootScope.favorites.lessons[id].favorite=='off')
				{
					$scope.favorite.lessons[id].favorite='on';
					lessonFav.push( $scope.favorite.lessons[id]);
					localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
					//$rootScope.favorites = Favorites.addFavorites($rootScope.lessonsdata, 'lessons');
				}
				else{
					
					$rootScope.favorites.lessons[id].favorite='off';
					for(var y=0; y<lessonFav.length; y++)
						{
							lessonUrl.push(lessonFav[y].url);
						}
						var index=lessonUrl.indexOf($rootScope.favorites.lessons[id].url);
						lessonFav.splice(index, 1);
						localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
						//$rootScope.favorites = Favorites.removeFavorites($rootScope.lessonsdata, 'lessons');
				}
			}
			else
			{
				lessonFav=[];
				localStorage.setItem('LessonArr',lessonFav );
			}	
		}
			$rootScope.favorites = Favorites.addFavorites();
			/*for(var i=0; i<$rootScope.wpdata.items.length;i++)
			{
				Favorites.checkFavorites($rootScope.wpdata.items[i], 'blogs');	
			}
			
			for(var j=0; j<$rootScope.imagedata.length;j++)
			{
				Favorites.checkFavorites($rootScope.imagedata[j], 'images');
				
			}
			for(var k=0; k<$rootScope.lessonsdata.length;k++)
			{
				Favorites.checkFavorites($rootScope.lessonsdata[k], 'lessons');
				
			}*/
	};			
	
	///////////sets up html email by calling a php file which sends a message
	$scope.setUpEmail = function()

	{
		$scope.success=true;

		$scope.email =Favorites.setUpEmail();
		$scope.address = $('#email').val();
		$scope.url = encodeURIComponent('http://teacheratsea.noaa.gov/php/send_html.php?email='+$scope.address+$scope.email);
		$scope.url = $scope.url.replace(/ /g, '%20');
		if($scope.address==''||$scope.address==undefined||!$scope.address.match('@')||!$scope.address.match('.'))
		{
		alert('Please enter a valid email address');
		}
		else
		{
			Favorites.getBitLy($scope.url).then(function(result){
				$scope.short_url=result;
			},function(error){$scope.errorMessage = true;});
		}
		
	};
	
	////////////////plain text email
	$scope.setUpPlainEmail = function()

	{
		$scope.success=true;
		$scope.email =Favorites.setUpEmail();
		$scope.address = $('#email').val();
		$scope.url = encodeURIComponent('http://teacheratsea.noaa.gov/php/send_plain.php?email='+$scope.address+$scope.email);
		$scope.url = $scope.url.replace(/ /g, '%20');
		if($scope.address==''||$scope.address==undefined||!$scope.address.match('@')||!$scope.address.match('.'))
		{
		alert('Please enter a valid email address');
		}
		else
		{
			Favorites.getBitLy($scope.url).then(function(result){
				$scope.short_url=result;
			},function(error){$scope.errorMessage = true;});
		}
				
	};	
	/*$scope.setUpSocial = function()
	{
		$scope.email =Favorites.setUpEmail();
		$scope.address = '';
		$scope.image='http://teacheratsea.files.wordpress.com/2012/05/logo3.jpg?w=100'
		$scope.url = encodeURIComponent('http://teacheratsea.noaa.gov/php/send_html.php?email='+$scope.address+$scope.email);
		$scope.url = $scope.url.replace(/ /g, '%20');
		Favorites.getBitLy($scope.url).then(function(result){
				$scope.social=result;
				
			},function(error){$scope.errorMessage = true;});
		
	};	*/
	/////sets up page (based on php script) to be shared on social media (Twitter, LinkedIn, Google+, Evernote)
	$scope.setUpSocial = function()
	{
		$scope.email =Favorites.setUpEmail()
			$scope.email = $scope.email.replace(/\?/g,'@@').replace(/\//g, '^^^').replace(/:/g, '%3A').replace(/\*/g, '%2A').replace(/ /g, '%20').replace(/%2F24%2F/, '$$$$$').replace(/&/g , '%26').replace(/:/g, '3A')
			$scope.fb_url = 'http%3A%2F%2Fteacheratsea.noaa.gov%2F%23%2Ffacebook/'+$scope.email;
			$scope.url = encodeURIComponent('http://teacheratsea.noaa.gov/php/send_plain.php?email='+$scope.email);
			Favorites.getBitLy($scope.url).then(function(result){
				$scope.social=result;
				
			},function(error){$scope.errorMessage = true;});
		
		
		
	};	
	
	//////Clears favorites
	$scope.removeFavorites=function()
	{
		if(localStorage.ImgArr!=null)
		{
		localStorage.removeItem('ImgArr');
		$rootScope.favorites.images=[];
		};
		if(localStorage.BlogArr!=null)
		{
			localStorage.removeItem('BlogArr');
			$rootScope.favorites.blogs=[];
		};
		if(localStorage.LessonArr!=null)
		{
			localStorage.removeItem('LessonArr');
			$rootScope.favorites.lessons=[];
		};
		$rootScope.favorites=Favorites.addFavorites();
	};	
		
	
	
	
	$scope.bigImageFav=false;
	$scope.popupHider6=true;
	$scope.popupHider7=true;
	$scope.bigImageFav2=false;
	$scope.LSinfo=false;
	$scope.showEmailForm=false;
	$scope.showOptions =true;
	
	$scope.favButtons = [{name:'blogs', state:'on', classy: 'shower'}, {name:'images', state:'off', classy:'hider'}, {name:'lessons', state:'off', classy:'hider'}, {name:'dyks', state:'off', classy:'hider'}];
	
	/*if(localStorage.ImgArr!=null)
	{
	$scope.images = jQuery.parseJSON(localStorage.ImgArr);
	for(var x=0; x<$scope.images.length; x++)
	{
		$scope.images[x].id=x;
	}
	}
	else
	{
		$scope.images=[];
	}*/
	
	

}])
.controller('qsParser', ['Favorites','$location','$scope','$rootScope',
function(Favorites, $location, $scope, $rootScope){
	/////////////////parses querystring (for Facebook sharing)
	var qs=($location.path()).replace(/\*\*/g, '&&');
	
	$scope.blogs =[];
	 $scope.images=[];
	$scope.lessons=[];
	var blogs_qs = qs.split('&images=')[0].replace(/\^\^\^/g, '/').split('message=')[1];
	var images_qs = qs.split('&images=')[1].split('lessons')[0].replace(/\^\^\^/g, '/');
	var lessons_qs = qs.split('&lessons=')[1].replace(/\^\^\^/g, '/');
	var blogsSplit = blogs_qs.split('@@');
	var imagesSplit=images_qs.split('$$');
	var lessonsSplit = lessons_qs.split('!!!');
	
	for(var x=0; x<blogsSplit.length-1; x++){	
		$scope.blogs.push(
			{image:blogsSplit[x].split('&&')[0],
			url:blogsSplit[x].split('&&')[1],	
			headline:blogsSplit[x].split('&&')[2]
		});
	}	
	for(var i=0; i<imagesSplit.length-1; i++){
		
		$scope.images.push(
			{
			image:imagesSplit[i].split('::')[0].split('@@')[0],
			caption:imagesSplit[i].split('::')[1]
			
		});
	}
	for(var y=0; y<lessonsSplit.length-1; y++){
		
		$scope.lessons.push(
			{
			url:lessonsSplit[y].split('&&')[0],
			title:lessonsSplit[y].split('&&')[1].split('&&')[0],
			teacherUrl: lessonsSplit[y].split('&&')[2].split('&&')[0],
			name:lessonsSplit[y].split('&&')[3].split('&&')[0],
			grades:lessonsSplit[y].split('&&')[4]
			
			
		});
	}
	
	$rootScope.showHeader=false;
}]);


angular.module('SearchBox', [])
.controller('SearchBox', ['$scope','SearchBox','preloadImage','$sce','Favorites', 'Facts','BigImage', function($scope, SearchBox, preloadImage, $sce, Favorites, Facts, BigImage)
{
	$scope.searchBox=false;
	
	///opens search box
	$scope.searchToggle=function()
	{
		if($scope.searchBox==true)
		{
			$scope.searchBox=false;
		}
		else
		{
			$scope.searchBox=true;
		}
	};
	////runs blog search	
	$scope.searchBlogs=function(search_blogs)
	{
		Facts.runFacts().then(function(result){
			$scope.fact = result
		});
		var search_blogs = search_blogs.sanitize();
		if($scope.search_blogs!=null)
		{
		$scope.search_blogs = search_blogs;
		$scope.search_blogs = $scope.search_blogs.replace(/ or /g,'');
		$scope.search_blogs = $scope.search_blogs.replace(/ and /g,'');
		$scope.search_blogs=$scope.search_blogs.replace(/ the /g,'');
		$scope.search_blogs =$scope.search_blogs.replace(/ the/g,'');
		$scope.search_blogs = $scope.search_blogs.replace(/ and/g,'');
		$scope.search_blogs = $scope.search_blogs.replace(/ or/g,'');
		$scope.search_blogs=$scope.search_blogs.replace(/and /g,'');
		$scope.search_blogs=$scope.search_blogs.replace(/the /g, '');
		$scope.search_blogs = $scope.search_blogs.replace(/or /g,'');
		$scope.search_blogs = $scope.search_blogs.replace(/,/g,'');
		$scope.search_blogs = $scope.search_blogs.replace(/,/g,'');
		//$scope.search_blogs = $scope.search_blogs.replace.lastI(' ','');
		$scope.search_blogs = $scope.search_blogs.toLowerCase();
		$scope.search_blogs = $scope.search_blogs.replace(/ a /g, ' ');
		$scope.search_blogs = $scope.search_blogs.replace(/ an /g, ' ');
	////////Runs a for loop of $scope.search_blogs variable to eliminate areas where there might be more than one space////////////////////////
			for(var t=0; t<$scope.search_blogs.length; t++)
			{
				if($scope.search_blogs.charAt($scope.search_blogs.length-1)==" ")
				{
				$scope.search_blogs = $scope.search_blogs.slice(0,$scope.search_blogs.length-1);
				}
			}
			$scope.bigImageHider=false;
			$scope.popupHider=false;
			$scope.showBlogSearch=false;
			SearchBox.searchBlogs($scope.search_blogs).then(function(result)
			{
				$scope.blogs = result;
				for(var x=0; x<$scope.blogs.length; x++)
				{
					$scope.blogs[x].id=x;
					//$scope.blogs[x].favorite='off';
					Favorites.checkFavorites($scope.blogs[x], 'blogs');	
				}
				$scope.showBlogSearch=true;
				
			},function(error){$scope.errorMessage = true;});

		}
		////////////////If the search field is left blank, it sends an alert box with the following message: 'Please enter search terms'///////////////////////////////
		else
		{
		alert('Please enter search terms');
		}
		
			};
	///////////runs image search
	$scope.searchImages=function(search_images)
	{
		Facts.runFacts().then(function(result){
			$scope.fact = result
		});
		var search_images = search_images.sanitize();
		if($scope.search_images!=null)
		{
		$scope.search_images = search_images;
		$scope.search_images = $scope.search_images.replace(/ or /g,'');
		$scope.search_images = $scope.search_images.replace(/ and /g,'');
		$scope.search_images=$scope.search_images.replace(/ the /g,'');
		$scope.search_images =$scope.search_images.replace(/ the/g,'');
		$scope.search_images = $scope.search_images.replace(/ and/g,'');
		$scope.search_images = $scope.search_images.replace(/ or/g,'');
		$scope.search_images=$scope.search_images.replace(/and /g,'');
		$scope.search_images=$scope.search_images.replace(/the /g, '');
		$scope.search_images = $scope.search_images.replace(/or /g,'');
		$scope.search_images = $scope.search_images.replace(/,/g,'');
		$scope.search_images = $scope.search_images.replace(/,/g,'');
		$scope.search_images = $scope.search_images.toLowerCase();
		$scope.search_images = $scope.search_images.replace(/ a /g, ' ');
		$scope.search_images = $scope.search_images.replace(/ an /g, ' ');
	////////Runs a for loop of $scope.search_images variable to eliminate areas where there might be more than one space////////////////////////
			
			
			
			for(var t=0; t<$scope.search_images.length; t++)
			
			{
				if($scope.search_images.charAt($scope.search_images.length-1)==" ")
				{
				$scope.search_images = $scope.search_images.slice(0,$scope.search_images.length-1);
				}
			}
			$scope.bigImageHider3=false;
			$scope.popupHider3=false;
			$scope.showImageSearch=false;
			$scope.images={};
			
			SearchBox.searchImages($scope.search_images).then(function(result)
			{
				$scope.showImageSearch=true;
				$scope.images =[];
				$scope.images.shift();
				
				for(var x=1; x<result.length; x++)
				{
					if(result[x].post_title!="undefined")
					{
						result[x].id=(x-1);
						$scope.images.push(result[x]);
						Favorites.checkFavorites(result[x], 'images');
					}
					
					
				}
				
				
			},function(error){$scope.errorMessage = true;});

		}
		////////////////If the search field is left blank, it sends an alert box with the following message: 'Please enter search terms'///////////////////////////////
		else
		{
		alert('Please enter search terms');
		}

		
	};
	////////////runs lesson search
	$scope.searchLessons=function(search_lessons)
	{
		Facts.runFacts().then(function(result){
			$scope.fact = result
		});
	 var search_lessons = search_lessons.sanitize();
	 if($scope.search_lessons!=null)
		{
		$scope.search_lessons = search_lessons;
		$scope.search_lessons = $scope.search_lessons.replace(/ or /g,'');
		$scope.search_lessons = $scope.search_lessons.replace(/ and /g,'');
		$scope.search_lessons=$scope.search_lessons.replace(/ the /g,'');
		$scope.search_lessons =$scope.search_lessons.replace(/ the/g,'');
		$scope.search_lessons = $scope.search_lessons.replace(/ and/g,'');
		$scope.search_lessons = $scope.search_lessons.replace(/ or/g,'');
		$scope.search_lessons=$scope.search_lessons.replace(/and /g,'');
		$scope.search_lessons=$scope.search_lessons.replace(/the /g, '');
		$scope.search_lessons = $scope.search_lessons.replace(/or /g,'');
		$scope.search_lessons = $scope.search_lessons.replace(/,/g,'');
		$scope.search_lessons = $scope.search_lessons.replace(/,/g,'');
		//$scope.search_lessons = $scope.search_lessons.replace.lastI(' ','');
		$scope.search_lessons = $scope.search_lessons.toLowerCase();
		$scope.search_lessons = $scope.search_lessons.replace(/ a /g, ' ');
		$scope.search_lessons = $scope.search_lessons.replace(/ an /g, ' ');
	////////Runs a for loop of $scope.search_lessons variable to eliminate areas where there might be more than one space////////////////////////
			for(var t=0; t<$scope.search_lessons.length; t++)
			{
				if($scope.search_lessons.charAt($scope.search_lessons.length-1)==" ")
				{
				$scope.search_lessons = $scope.search_lessons.slice(0,$scope.search_lessons.length-1);
				}
			}
			$scope.bigImageHider4=false;
		$scope.popupHider4=false;
		$scope.showLessonSearch=false;
		$scope.checkboxes=SearchBox.createLessonsCheck();
		SearchBox.searchLessons($scope.search_lessons).then(function(result)
		{
			
			$scope.lessons = result;
			$scope.showLessonSearch=true;
			for(var z=0; z<$scope.lessons.length; z++)
			{
				$scope.lessons[z].id=z;
				Favorites.checkFavorites($scope.lessons[z], 'lessons');
			}	
			
			
		},function(error){$scope.errorMessage = true;});

		}
		////////////////If the search field is left blank, it sends an alert box with the following message: 'Please enter search terms'///////////////////////////////
		else
		{
		alert('Please enter search terms');
		}
	};

		///runs site search
	$scope.searchSite=function(search_site)
	{
		Facts.runFacts().then(function(result){
			$scope.fact = result
		});
		search_site = search_site.sanitize();
		if ($scope.search_site!=null)
		{
		$scope.search_site = search_site;
		$scope.search_site = $scope.search_site.replace(/ or /g,'');
		$scope.search_site = $scope.search_site.replace(/ and /g,'');
		$scope.search_site=$scope.search_site.replace(/ the /g,'');
		$scope.search_site =$scope.search_site.replace(/ the/g,'');
		$scope.search_site = $scope.search_site.replace(/ and/g,'');
		$scope.search_site = $scope.search_site.replace(/ or/g,'');
		$scope.search_site=$scope.search_site.replace(/and /g,'');
		$scope.search_site=$scope.search_site.replace(/the /g, '');
		$scope.search_site = $scope.search_site.replace(/or /g,'');
		$scope.search_site = $scope.search_site.replace(/,/g,'');
		$scope.search_site = $scope.search_site.replace(/,/g,'');
		//$scope.search_site = $scope.search_site.replace.lastI(' ','');
		$scope.search_site = $scope.search_site.toLowerCase();
		$scope.search_site = $scope.search_site.replace(/ a /g, ' ');
		$scope.search_site = $scope.search_site.replace(/ an /g, ' ');
	////////Runs a for loop of $scope.search_site variable to eliminate areas where there might be more than one space////////////////////////
			for(var t=0; t<$scope.search_site.length; t++)
			{
				if($scope.search_site.charAt($scope.search_site.length-1)==" ")
				{
				$scope.search_site = $scope.search_site.slice(0,$scope.search_site.length-1);
				}
			}
		$scope.bigImageHider4=false;
		$scope.popupHider5=false;
		$scope.showSiteSearch=false;
		SearchBox.searchSite($scope.search_site).then(function(result)
		{
			
			$scope.sitesearch = result;
			for(var x=0; x<$scope.sitesearch.length; x++)
			{
				$scope.sitesearch[x].id=x;
			}
			
			$scope.showSiteSearch=true;
			
			
		},function(error){$scope.errorMessage = true;});

		}
		////////////////If the search field is left blank, it sends an alert box with the following message: 'Please enter search terms'///////////////////////////////
		else
		{
		alert('Please enter search terms');
		}
	};
	
	
	
	$scope.lessonChecker=function(grade)
	{
		
		$scope.grades =[];
		if($scope.checkboxes[grade].checked==false)
		{
		$scope.checkboxes[grade].checked=true;
		}
		else
		{
			$scope.checkboxes[grade].checked=false;
		}
		
		for(var i=0; i<$scope.checkboxes.length; i++)
		{
			
			if($scope.checkboxes[i].checked ==true )
			{
			$scope.grades.push($scope.checkboxes[i].grade)
			
			}
		}
		//////////////checks to see if checkboxes are checked.  If so, it reveals the filtered lessons via changing the ng-hide paramater in the DOM. 
		if($scope.grades.length==0)
		{
			$scope.checkbox=false;
		}
		else{
			$scope.checkbox=true;
			for(var x=0; x<$scope.lessons.length; x++)
			{	
				if(!$scope.lessons[x].grades.toString().match($scope.grades.toString())) {
					
					$scope.lessons[x].hider=true;
				}
				else{
					$scope.lessons[x].hider=false
				}
				
			}
		}
	
	};
	
	
	$scope.closeBigBigImage = function()
	{
		$scope.popupHider2=true;
	};
	
	$scope.closeBigImageLessons = function()
	{
		
		$scope.popupHider4=true;
	};
	
	$scope.closeBigImageSite = function()
	{
		
		$scope.popupHider5=true;
	};
	
	$scope.closeBigImage = function()
		{
			
		$scope.bigImageHider=false;
		$scope.popupHider=true;
		$scope.bigImageHider3=false;
		$scope.popupHider3=true;
			
		};	
		

		
		
	
		
		$scope.closeBigBigImage2 = function()
		{
			$scope.bigImage2=false;
			$scope.bigImageHider2=true;
		};
		
	$scope.openBigImage = function(img,post_title,post_url, caption, parent, id, favorite)
			{
				
				BigImage.openBigImage(img, post_title, post_url, caption, parent, id, favorite).then(function(result){
					$scope.image =result;
					$scope.bigImage2=true;
					$scope.popupHider2=false;
					
					
					$('.xyzPhoto').bind('load', function(){
					$scope.image.isLoading=false;
					$scope.$apply();
					});
				
				},function(error){$scope.errorMessage = true;});
			};	
				
	$scope.nextImg = function(id,images)
			{
				
				BigImage.nextImg(id,images).then(function(result){
					
				var nextImg =result;
					BigImage.openBigImage(nextImg.bigImageSrc, nextImg.post_title,nextImg.post_url, nextImg.alt, nextImg.parent, nextImg.id, nextImg.favorite).then(function(result){
						$scope.image =result;
						$('.xyzPhoto').bind('load', function(){
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};
			
	$scope.prevImg = function(id,images)
			{
				BigImage.prevImg(id,images).then(function(result){
					
				var prevImg =result;
					BigImage.openBigImage(prevImg.bigImageSrc, prevImg.post_title,prevImg.post_url, prevImg.alt, prevImg.parent, prevImg.id, prevImg.favorite).then(function(result){
						
						$scope.image =result;
						
						$('.xyzPhoto').bind('load', function(){
						$scope.image.isLoading=false;
						$scope.$apply();
					});	
					},function(error){$scope.errorMessage = true;});
				
				},function(error){$scope.errorMessage = true;});	
			};		

		

	$scope.SkipValidation = function(value) 
	{
	  return $sce.trustAsHtml(value);
	};
	
	
	$scope.switchFavorite=function(id, type)
	{
		var blogTitle=[];
		var imgSrc=[];
		var lessonUrl = [];
		if(type=='blog')
		{
			if(localStorage.getItem('BlogArr')!=null && localStorage.getItem('FavoriteArr')!='')
			{
				var blogFav = jQuery.parseJSON(localStorage.getItem('BlogArr'));
				
			}
			else
			{
				var blogFav=[];
			}

			if($scope.blogs[id].favorite=='off')
			{
				$scope.blogs[id].favorite='on';
				blogFav.push( $scope.blogs[id]);
				localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
			}
			else{
				for(var x=0; x<blogFav.length; x++)
				{
					blogTitle.push(blogFav[x].BlogTitle);
				}
				var index=blogTitle.indexOf($scope.blogs[id].BlogTitle);
				blogFav.splice(index, 1);
				localStorage.setItem('BlogArr',  JSON.stringify(blogFav));
				$scope.blogs[id].favorite='off';
			}
			
		}	
		if(type=='photo')
		{
		if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}
	
		if($scope.images[id].favorite=='off')
			{
				$scope.images[id].favorite='on';
				imgFav.push( $scope.images[id]);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
			}
			else{
				for(var y=0; y<imgFav.length; y++)
				{
					imgSrc.push(imgFav[y].src);
				}
				$scope.images[id].favorite='off';
				var index=imgSrc.indexOf($scope.images[id].src);
				imgFav.splice(index, 1);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
			}
			 
		}	
		if(type=='bigphoto')
		{
		if(localStorage.getItem('ImgArr')!=null && localStorage.getItem('ImgArr')!='')
			{
				var imgFav = jQuery.parseJSON(localStorage.getItem('ImgArr'));
			}
			else
			{
				var imgFav =[];
			}	
		if($scope.favorite=='off')
			{
				$scope.favorite='on';
				imgFav.push( $scope.images[id]);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
				//$rootScope.favorites = Favorites.addFavorites($rootScope.imagedata, 'images');
			}
			else{
				
				$scope.favorite='off';
				for(var y=0; y<imgFav.length; y++)
					{
						imgSrc.push(imgFav[y].src);
					}
				$scope.images.favorite='off';
				var index=imgSrc.indexOf($scope.images[id].src);
				imgFav.splice(index, 1);
				localStorage.setItem('ImgArr',  JSON.stringify(imgFav));
				//$rootScope.favorites = Favorites.removeFavorites($rootScope.imagedata, 'images');
				}
				 
		}	
		if(type=='lesson')
		{
			if(localStorage.getItem('LessonArr')!=null && localStorage.getItem('LessonArr')!='')
			{
				var lessonFav = jQuery.parseJSON(localStorage.getItem('LessonArr'));
			}
			else
			{
				var lessonFav =[];
			}
			if($scope.lessons[id].favorite=='off')
			{
				$scope.lessons[id].favorite='on';
				$scope.lessons[id].favorite='on';
				lessonFav.push( $scope.lessons[id]);
				localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
				//$rootScope.favorites = Favorites.addFavorites($rootScope.lessonsdata, 'lessons');
				}
			else{
				
				$scope.lessons[id].favorite='off';
				for(var y=0; y<lessonFav.length; y++)
					{
						lessonUrl.push(lessonFav[y].url);
					}
				$scope.images.favorite='off';
				var index=lessonUrl.indexOf($scope.lessons[id].url);
				lessonFav.splice(index, 1);
				localStorage.setItem('LessonArr',  JSON.stringify(lessonFav));
				//$rootScope.favorites = Favorites.removeFavorites($rootScope.lessonsdata, 'lessons');
				
				}
				
		}
			/*$rootScope.favorites = Favorites.addFavorites();
			for(var i=0; i<$rootScope.wpdata.items.length;i++)
			{
				Favorites.checkFavorites($rootScope.wpdata.items[i], 'blogs');
				
			}
			for(var j=0; j<$rootScope.imagedata.length;j++)
			{
				Favorites.checkFavorites($rootScope.imagedata[j], 'images');
				
			}
			for(var k=0; k<$rootScope.lessonsdata.length;k++)
			{
				Favorites.checkFavorites($rootScope.lessonsdata[k], 'lessons');
				
			}*/
	};			

	
	
	$scope.bigImageHider=true;
	$scope.popupHider=true;
	$scope.bigImageHider2=true;
	$scope.popupHider2=true;
	$scope.bigImage3=true;
	$scope.popupHider3=true;
	$scope.bigImage4=true;
	$scope.popupHider4=true;
	$scope.bigImage5=true;
	$scope.popupHider5=true;
	$scope.searchBox=false;
	$scope.checkbox=false;	
		
}]);

angular.module('Navigation', [])
.controller('Navigation', ['$scope', function($scope)
{
	/////controls rollover navigation
	$scope.searchBox=false;
	$scope.popupHider6=true;
	$scope.bigImageFav=false;
	$scope.showNav=true;
	$scope.navigationItems = [{name:'about', state:'hider'},{name:'current', state:'hider'}, {name:'past', state:'hider'}, {name:'alumni', state:'hider'}, {name:'resources', state:'hider'}, {name:'media', state:'hider'}];	
	$scope.navigationOff=function(id)
	{
		
		for(var x=0; x<$scope.navigationItems.length; x++)
		{
			
			if($scope.navigationItems[x].name==id)
			{
				
				$scope.navigationItems[x].state='hider';
				
				
			}
		}
		
		
	};
	
	$scope.navigationOn=function(id)
	{
		
		for(var x=0; x<$scope.navigationItems.length; x++)
		{
			
			if($scope.navigationItems[x].name==id)
			{
				
				$scope.navigationItems[x].state='shower';
				
				
			}
		}
		
		
	};
	
		
}]);

angular.module('RespNav', [])
.controller('RespNav', ['$scope', function($scope)
{
	/////controls responsive nav that shows up at below 960px wide
	$scope.resp_nav_shower=false;
		
	$scope.respNavToggle=function()
	{
			
		if($scope.resp_nav_shower==true)
		{
			$scope.resp_nav_shower=false;
		}
		else
		{
			$scope.resp_nav_shower=true;
		}
		
	};	
		
}]);

angular.module('RSS', [])
.controller('rssControllerSpot', ['$scope','CreateRSS', function($scope, CreateRSS)
{
	
	CreateRSS.rssCreate('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+FirstName,LastName,ShortBody,LongBody,image,caption,PublishDate,Region+FROM+1z6kUehyfSNqaAGinvARZLYyjb7Dhk2F9rt49xHIV+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(data){
		
		$scope.data=data;
		$scope.data.title='NOAA Teacher at Sea Alumni Spotlight'
		
	});
}])
.controller('rssControllerPOW', ['$scope','CreateRSS', function($scope, CreateRSS)
{	
	CreateRSS.rssCreatePOW('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+PhotoURL,PhotoCaption,Facebook,BlogURL,PhotoCredit,BlogTitle,PublishDate, Keywords, Tweet+FROM+19WBCSYuVJh1O2KaThKQJpLLn0VF6w3rHhbKtZMVf+ORDER%20BY+PublishDate+%22&key=AIzaSyBBcCEirvYGEa2QoGas7w2uaWQweDF2pi0&callback=JSON_CALLBACK').then(function(data){
		$scope.data=data;
		$scope.data.title="NOAA Teacher at Sea Photo of the Week"
	});
		
	
		
	
		
}]);






////////////Helper Functions///////////////////
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function Slicer(str, number)
{
	var slicer = str.slice(0, number);
	var slicer2 = str.slice(number, str.length);
	var slicer2Index = slicer2.indexOf(' ');
	slicer2 = str.slice(0, (number+slicer2Index));
	//alert(slicer2);
	return slicer2;
}

function removeHTML(str)
{
	
	
         var str =  jQuery('<div />', { html: str }).text();
        str = 		jQuery('<p />', { html: str }).text();
        str = jQuery('<i />', { html: str }).text();
		return str;
}

function DigPatt(str, char)
{
	  var checkDigit = (str.lastIndexOf(char)+1);
	  var digPatt = str.slice(checkDigit, str.length);

     if(digPatt.match(/\d/g))
     {
     	name = str.split('-')[0];
     }
     else
     {
     	name=str;
     }
     return name;
}

function goToByScrollTop(id) {
	// Remove "link" from the ID
	id = id.replace("link", "");
	// Scroll
	$('#' + id).animate({
		scrollTop : 50
	}, 'slow');

}

 function SortObj(property, obj)
 {
 	var sortable =[];
 	obj.sort(
 		function(a, b){
 			
				 var adate=new Date(a[property])
				 var bdate =new Date(b[property])
				 return bdate-adate
				});
 	
 	
 	return obj;
 }

function createTitleFromURL(str)
{
	var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	var str = str.replace('https://teacheratsea.wordpress.com','');
	str = str.replace('http://teacheratsea.wordpress.com','');
	str = str.split('/')[4];
	str = toTitleCase(str.replace(/-/g, ' '));
	
	
	var strSplitter = str.split(' ');
	var substr = strSplitter[1];
	var str = str.replace(substr, substr+',');
	
	str = str.replace(' 20', ', 20');
	
	for(var z=0; z<monthArr.length; z++)
	{
		if(str.replace(/\W/g,'').match(monthArr[z].replace(/\W/g,'')))
		{
			str = str.replace(monthArr[z], ', '+monthArr[z]).replace(' , ', ', ');
			
			return str;

		}
		else
		{
			return str;
		}
	}	
	
}
////////////Removesduplicate items from an array///////////////////
function removeDuplicatesArr(array){
	var unique = [];
    for ( i = 0; i < array.length; i++ ) {
        var current = array[i];
        if (unique.indexOf(current) < 0)
        {
        	 unique.push(current);
        }
    }

    return unique;
}
////////////////Checks for a specific property in an array of objects and makes sure that the value of that property is not duplicated	
function removeDuplicatesArrObj(array, property, checkmatch){
	var unique={title:[], finalArr:[]};
	var tmpArr=[];
	forEach(array, function(item){
		tmpArr.push(item[property]);
	});
	if(checkmatch==true)
	{
		
	forEach(array, function(item){
		
		if (!unique.title.toString().replace(/\W/g, '').match(item[property].replace(/\W/g,'')))
        {
        	 unique.title.push(item[property]);
        	 unique.finalArr.push(item);
        }
	});
	}
	else{
		forEach(array, function(item){
		
		if (unique.title.indexOf(item[property]) < 0)
        {
        	 unique.title.push(item[property]);
        	 unique.finalArr.push(item);
        }
	});
		
	}
	return unique.finalArr;
}


/////////For LoopArray of Strings and Numbers (not objects)///////////////
function forEach(array, action) 
{ 
	
	for (var i = 0; i < array.length; i++)
	{
	 action(array[i]); 
	}
}

///////For Loop for  Array of Objects/////////////
function forEachIn( object, action) { 
	for (var property in object) 
	{ 
		if (Object.prototype.hasOwnProperty.call( object, property))
			 action( property, object[ property]); 
	 }
 }
function escapeChar(str)
	{
		if(str.match("'"))
		{
			str = str.replace(/\'/g,"&#39;");
			return str;
		}
	}	

