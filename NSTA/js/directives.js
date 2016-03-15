'use strict';

/* Directives */

NSTA.directive('ytVideos', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/yt-video.html',

	};

}).directive('vmVideos', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/vm-video.html',

	};

}).directive('bigimageRepeat', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_repeat.html',

	};

}).directive('bigImage', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup.html',

	};

}).directive('bigImagepow', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_pow.html',

	};

}).directive('bigImagespot', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_spot.html',

	};

}).directive('bigImagetasa', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_tasa.html',

	};

}).directive('bigimageBlogs', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_blogs.html',

	};

}).directive('bigimageLessons', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_lessons.html',

	};

}).directive('bigimageSite', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_sitesearch.html',

	};

}).directive('bigimageFavorite', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_favorites.html',

	};

}).directive('bigimageFavoriteindiv', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_favorite_indiv.html',

	};

}).directive('bigimageImages', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup_images.html',

	};

}).directive('imageNopost', function() {
	return {

		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/popup-no-post.html',

	};

}).directive('carouSel', function($injector, $compile, $q, preloadImage) {
	var Current = '<div id="wrapper"><div id="scroller_current" class="scroller" ><ul><li tabindex="109" ng-repeat="teacher in data"><div class="image"><span class="loading"> <img src="/images/NOAA-Logo.gif" class="no-border"/></span><img tabindex="109" resize-current class="current_image no-border" ng-src="{{teacher.finalImage}}?w={{windowWidth}}" alt="{{teacher.firstname}} {{teacher.lastname_forDOM}}" imageonload/> </div><div tabindex="109" class="teacher_info"><a tabindex="109" href="#/{{teacher.year}}/{{teacher.firstname}}*{{teacher.lastname}}"><b>NOAA Teacher at Sea {{teacher.firstname}} {{teacher.lastname_forDOM}} of {{teacher.city}}, {{teacher.state}}<span ng-hide="teacher.shipHider==true"> {{teacher.verb}} aboard {{teacher.shiptype}} <em>{{teacher.ship}}</em>.</span><span ng-show="teacher.shipHider==true"> will be aboard a NOAA research cruise in 2015.</span></a></b></div></li></ul></div></div><div><a class="navPrev3" ng-click="prev(\'current\');">««</a><a ng-click="next(\'current\')" class="navNext3" >»»</a></div><script>myScroll  = new iScroll("wrapper", {hScrollbar:false});</script>';
	var Alumni = '<div id="wrapper_alumni"><div id="scroller_alumni" class="scroller" style="transition: transform 0ms; -webkit-transition: transform 0ms; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);"><ul><li tabindex="112" ng-repeat = "spot in data"><div class="image"><span class="loading"> <img src="/images/NOAA-Logo_200.gif" class="no-border"/></span><img imageonload tabindex="112" resize-home class="current_image no-border" ng-src="{{spot.finalImage}}?w={{imgWidth}}"" alt="{{spot.caption}}"></div><div class="teacher_info"><h6><a tabindex="112" href="#{{spot.hash}}">{{spot.firstname}} {{spot.lastname}}</a></h6></div></li></ul></div></div><div><a class="navPrev3" ng-click="prev(\'alumni\');">««</a><a ng-click="next(\'alumni\')" class="navNext3" >»»</a></div><script>myScroll_spotlights  = new iScroll("wrapper_alumni", {hScrollbar:false});</script>';
	var Pow = '<div id="wrapper_pow"><div id="scroller_pow" class="scroller" style="transition: transform 0ms; -webkit-transition: transform 0ms; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);"><ul ><li tabindex="115" ng-repeat = "pow in data"><div class="image"><span class="loading"> <img class="no-border" src="/images/NOAA-Logo_200.gif"/></span><img imageonload tabindex="115" resize-home class="current_image no-border" ng-src="{{pow.finalImage}}?w={{imgWidth}}"" alt="{{pow.caption}}"></div><div tabindex="115" class="teacher_info"><h6 tabindex="115"><a tabindex="115"href="#/photo_of_week/" ng-bind-html="pow.titleSnippet"></a></h6><span class="caption" tabindex="115" >Photo By: {{pow.credit}}<br><a ng-href="{{pow.parent}}" target="_blank"  tabindex="115" >{{pow.post_title}}</a></div></li></ul></div></div><div><a class="navPrev3" ng-click="prev(\'pow\');">««</a><a ng-click="next(\'pow\')" class="navNext3" >»»</a></div><script>myScroll_pow  = new iScroll("wrapper_pow", {hScrollbar:false});</script>';
	var Videos = '<div resize-social id="wrapper_videos2"><div id="scroller_videos" class="scroller"><ul><li class="wp" style="margin-left:7px " ng-repeat = "src in videosArr" ><wp-videos width="{{windowWidth2}}" height="165"></wp-videos><br><br><a href="{{src.lnk}}" target="-blank">Go to Blogpost <span class="chevron">»»</span></a></li></ul></div></div><div><a class="navPrev3" ng-click="prev(\'videos\');">««</a><a ng-click="next(\'videos\')" class="navNext3" >»»</a></div><script>myScroll_videos  = new iScroll("wrapper_videos2", {hScrollbar:false});</script>'
	var Quotes = '<div id="wrapper_quotes"  style="height:auto; overflow:scroll"><ul class="scroller" id="scroller_quotes"><li id="quote{{quote.id}}" style="display:inline;" ng-repeat="quote in quotes"><div class="faq_quote"><span class="loading"> <img src="/images/NOAA-Logo_200.gif" class="no-border"/></span><img imageonload resize-social ng-src="{{quote.gsx$tn.$t}}?w={{windowWidth}}" alt="{{quotes.gsx$teacher.$t}}"></div><div class="faq_quote_text"> {{quote.gsx$quote.$t}}<br><span class="caption">{{quote.gsx$teacher.$t}}</span></div></li></ul></div><div><a class="navPrev3" ng-click="prev(\'quotes\');">««</a><a ng-click="next(\'quotes\')" class="navNext3" >»»</a></div><script>myScroll_videos  = new iScroll("wrapper_quotes", {hScrollbar:false});</script>'
	var Photos = '<div id="wrapper_photos2"><div id="scroller_photos" class="scroller"><ul><li ng-repeat = "img in images" id="{{img.id}}" ng-mouseover="showTitle(img.id)" ng-mouseout="hideTitle(img.id)"><div class="containme"><div class="text_container  animate-height"  ng-hide="img.showTitle==false"><div class="fl_title_ind" >{{img.caption}}</div></div><img imageonload resize-social ng-src="{{img.src}}?w={{windowWidth}}" alt="{{img.caption}}"/></div><br><br><a  href="{{img.src}}" target="_blank">View High Resolution Image <span class="chevron">»»</span></a><br><a  href="http://teacheratsea.wordpress.com/?p={{img.parent}}">Go to Blogpost <span class="chevron">»»</span></a></li></ul></div><div><a class="navPrev3" ng-click="prev(\'photos\');">««</a><a ng-click="next(\'photos\')" class="navNext3" >»»</a></div><script>myScroll_photos  = new iScroll("wrapper_photos2", {hScrollbar:false});</script>';

	var getTemplate = function(contentType) {
		var template = '';

		switch(contentType) {
		case 'alumni':
			template = Alumni;
			break;
		case 'current':
			template = Current;
			break;
		case 'pow':
			template = Pow;
			break;
		case 'photos':
			template = Photos;
			break;
		case 'videos':
			template = Videos;
			break;
		case 'quotes':
			template = Quotes;
			break;

		}

		return template;

	};

	var linkFunction = function(scope, elm, attr) {
		/*if (window.innerWidth > 90) {
			scope.adder = 200;
		} else if (window.innerWidth < 1000 && window.innerWidth >= 800) {
			scope.adder = 200;
		} else if (window.innerWidth < 799 && window.innerWidth >= 640) {
			scope.adder = 270
		} else if (window.innerWidth < 640 && window.innerWidth >= 480) {
			scope.adder = 195
		} else {
			scope.adder = 270
		}*/

		scope.marginLeft = 0;
		if (attr.service == '') {
			elm.html(getTemplate(attr.type));
			var deferred = $q.defer();

			$compile(elm.contents())(scope);
			deferred.promise.then(function() {

			});
			deferred.resolve();

			var length = attr.length;

		} else {
			$injector.get(attr.service).getCarouselData().then(function(data) {
				scope.data = data;
				console.log(scope.data[0].year);
				scope.data[0].hider = false;
				scope.images = [];
				//////////////Preload the first 3 images//////////////

				////////////////No preloading for image number 4 and greater///////////
				for (var z = 0; z < scope.data.length; z++) {
					scope.data[z].finalImage = scope.data[z].image;
					var pagination = parseFloat(attr.pagination);
						
					if(attr.pagination!="")
					{
						if(z==0)
						{
							var page_number =(z)/pagination;
						}else{
						
						var page_number =(z-1)/pagination;
						}
						page_number = page_number.toString().slice(0,1)
						scope.data[z].linker = 'page'+page_number;
						
					}
				}

				elm.html(getTemplate(attr.type));

				$compile(elm.contents())(scope);

			},function(error){scope.errorMessage=true;});
		}
		

		scope.next = function(item) {
			
			if (attr.length == "") {
				scope.lengthy = scope.data.length;
				scope.adder =  parseInt(attr.width);
			} else {
				scope.lengthy = attr.length;
				scope.adder = parseInt(attr.width);
				

			}
			
			if (scope.marginLeft < (scope.lengthy - 1) * scope.adder) {
				scope.marginLeft += scope.adder;

			} else {
				scope.marginLeft = 0;
			}

			var item = '#scroller_' + item;
			$(item).css({
				'transition' : 'transform 0ms',
				'-webkit-transition' : 'transform 0ms',
				'transform-origin' : '0px 0px 0px',
				'transform' : 'translate(-' + scope.marginLeft + 'px, 0px) scale(1) translateZ(0px)'
			});

		};
		scope.prev = function(item) {
			if (attr.length == "") {
				scope.lengthy = scope.data.length;
				scope.adder = scope.adder;
			} else {
				scope.lengthy = attr.length;
				scope.adder = parseInt(attr.width);
			}

			if (scope.marginLeft > 0) {
				scope.marginLeft -= scope.adder;

			} else {
				scope.marginLeft = (scope.lengthy - 1) * scope.adder;
			}

			var item = '#scroller_' + item;
			$(item).css({
				'transition' : 'transform 0ms',
				'-webkit-transition' : 'transform 0ms',
				'transform-origin' : '0px 0px 0px',
				'transform' : 'translate(-' + scope.marginLeft + 'px, 0px) scale(1) translateZ(0px)'
			});
		};

	};

	return {
		restrict : 'AE',
		scope : true,
		link : linkFunction,
	};
}).directive('wpCarousel', function(HomepageData) {

	return {
		restrict : 'AE',
		scope : true,
		template : '<p>{{data}}</p>',
		//controller:controller,
		link : function(scope, element, attrs) {
			scope.wp = [];
			//console.log(scope.wp);
		},
	};
}).directive('slideShow', function(Alumni,POW, $timeout, $q, $injector) {

	return {
		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/slideshow.html',
		link : function(scope,element, attrs, tabsCtrl) {
			scope.checkContents=false;
			if(attrs.service =='POW')
			{
				scope.name="Photos of the Week";
				scope.tagline="Snapshots of learning"
			}
			else{
				scope.name="Alumni Association";
				scope.tagline="The Cruise is just the beginning..."
			}
			scope.windowWidth=window.innerWidth;
			$injector.get(attrs.service).getData().then(function(data)
			{
				
			scope.slides = data;
			
			scope.checkContents =true;
						
		

				scope.slideimages = [];
				//////////////Preload the first 3 images//////////////

				////////////////No preloading for image number 4 and greater///////////
				for (var z = 0; z < scope.slides.length; z++) {
					scope.slides[z].finalImage = scope.slides[z].src;
					  scope.slides[z].isLoading=true;
					   scope.image= new Image() 
					  scope.image.src= scope.slides[z].src;
					  scope.image.isLoading=true;
					  
     					scope.preload(scope.image, z);
				}
				scope.slides[0].visible = true;
				scope.slides[0].classy = 'active';
				scope.playhider = true;

			});
			scope.preload = function(img, number)
			{
				 $(img).bind('load', function(){
					img.isLoading=false;
					scope.slides[number].isLoading=false;				
					scope.$apply();
					});
			};
			scope.timer
			scope.remaining = scope.timer / 1000;

			var sliderFunc = function() {
				
				scope.timeout = $timeout(function() {
					scope.remaining--;
					scope.next();
					
					scope.timer = $timeout(sliderFunc, 5000);
				}, 5000);
			};

			sliderFunc();
			

			/*scope.$on('$destroy', function() {
			 $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
			 });*/

			scope.next = function() {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';
				}
				if (scope.currentIndex < scope.slides.length - 1) {
					scope.currentIndex = scope.currentIndex + 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				} else {
					scope.currentIndex = 0;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				}
				//console.log(scope.currentIndex);

			};
			scope.prev = function() {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';

				}
				if (scope.currentIndex > 0) {
					scope.currentIndex = scope.currentIndex - 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';

				} else {
					scope.currentIndex = scope.slides.length - 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				}
			};
			scope.numberClick = function(num) {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';
				}
				scope.currentIndex = (num - 1)
				scope.slides[scope.currentIndex].visible = true;
				scope.slides[scope.currentIndex].classy = 'active';
				scope.playhider = false;
				$timeout.cancel(scope.timer);

			};
			scope.playPause = function() {
				if (scope.playhider == false) {
					scope.playhider = true;
					$timeout.cancel(scope.timer);
					sliderFunc();

				} else {
					scope.playhider = false;
					$timeout.cancel(scope.timer);

				}

			};

		}
	};
}).directive('slideshowMedia', function(Slideshow, $timeout, preloadImage) {
	return {
		restrict : 'AE',
		scope : true,
		templateUrl : 'partials/slideshow-media.html',
		link : function(scope) {
			Slideshow.loadSlideData('11INSvguka4SOHln9R4C8C96EQ1kkpoaw-EC8l7_h').then(function(data) {
				scope.slides = data;

				scope.slideimages = [];
				//////////////Preload the first 3 images//////////////

				////////////////No preloading for image number 4 and greater///////////
				for (var z = 0; z < scope.slides.length; z++) {
					scope.slides[z].finalImage = scope.slides[z].imageurl;

				}

				scope.slides[0].visible = true;
				scope.slides[0].classy = 'active';
				scope.slideshow_width = scope.slides.length * 620;
				scope.playhider = true;

			});

			scope.timer
			scope.remaining = scope.timer / 1000;

			var sliderFunc = function() {
				scope.timeout = $timeout(function() {
					scope.remaining--;
					scope.next();
					scope.timer = $timeout(sliderFunc, 3000);
				}, 3000);
			};

			sliderFunc();

			scope.next = function() {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';
				}
				if (scope.currentIndex < scope.slides.length - 1) {
					scope.currentIndex = scope.currentIndex + 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				} else {
					scope.currentIndex = 0;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				}
				//console.log(scope.currentIndex);

			};
			scope.prev = function() {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';

				}
				if (scope.currentIndex > 0) {
					scope.currentIndex = scope.currentIndex - 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';

				} else {
					scope.currentIndex = scope.slides.length - 1;
					scope.slides[scope.currentIndex].visible = true;
					scope.slides[scope.currentIndex].classy = 'active';
				}
			};
			scope.numberClick = function(num) {
				for (var i = 0; i < scope.slides.length; i++) {
					scope.slides[i].visible = false;
					scope.slides[i].classy = 'inactive';
				}
				scope.currentIndex = (num - 1)
				scope.slides[scope.currentIndex].visible = true;
				scope.slides[scope.currentIndex].classy = 'active';
				scope.playhider = false;
				$timeout.cancel(scope.timer);

			};
			scope.playPause = function() {
				if (scope.playhider == false) {
					scope.playhider = true;
					$timeout.cancel(scope.timer);
					sliderFunc();

				} else {
					scope.playhider = false;
					$timeout.cancel(scope.timer);

				}
			};

		}
	};
}).directive('paginationPlease', function() {
	return {

		restrict : 'AE',
		scope : true,
		replace : true,
		templateUrl : 'partials/pagination.html',
		link : function(scope, element, attrs, routeParams) {
			for (var y = (scope.itemsPerPage * scope.currentPage); y < ((scope.itemsPerPage * scope.currentPage) + scope.itemsPerPage); y++) {
				//console.log(scope.data[y])
				scope.filtered_data.push(scope.data[y])
			}

			scope.prevPage = function() {
				if (scope.currentPage > 0) {
					scope.currentPage--;
					//scope.newfilteredNews.length=0;
					scope.filtered_data.length = 0;

					for (var y = scope.itemsPerPage * scope.currentPage + scope.itemsPerPage; y > ((scope.itemsPerPage * scope.currentPage)); y--) {
						if (y > 0) {
							scope.filtered_data.push(scope.data[y])
						}
					}

				}
			};

			scope.prevPageDisabled = function() {
				return scope.currentPage === 0 ? "disabled" : "";
			};

			scope.pageCount = function() {
				return Math.ceil(scope.data.length / scope.itemsPerPage) - 1;
			};

			scope.nextPage = function() {
				if (scope.currentPage < scope.pageCount()) {
					scope.currentPage++;
					// alert(scope.currentPage)
					scope.filtered_data.length = 0;
					window.scrollTo(0, 200);
					for (var y = (scope.itemsPerPage * scope.currentPage); y < ((scope.itemsPerPage * scope.currentPage) + scope.itemsPerPage); y++) {
						if (y < scope.data.length) {
							scope.filtered_data.push(scope.data[y]);
						}
					}
				}
			};

			scope.nextPageDisabled = function() {
				return scope.currentPage === scope.pageCount() ? "disabled" : "";
			};

		}
	};

}).directive('paginationRoutes', function() {

	return {

		restrict : 'AE',
		scope : true,
		replace : true,
		templateUrl : 'partials/pagination-routes.html',
		link : function(scope) {
			scope.data = [];
			scope.prevPageDisabled = function() {
				return scope.currentPage === 0 ? "disabled" : "";
			};

			scope.nextPageDisabled = function() {
				return scope.currentPage === (scope.pageCount() - 1) ? "disabled" : "";
			};
			scope.pageCount = function() {
				return Math.ceil(scope.data.length / scope.itemsPerPage) - 1;
			};

		}
	};

}).directive('ngEnter', function() {
	return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.ngEnter);
				});

				event.preventDefault();
			}
		});
	};
}).directive('wpVideos', function() {
	return {

		restrict : 'AE',
		scope : true,

		link : function(scope, element, attr) {
			attr.$observe('flashvars', function(value) {

				if (value != "") {
					element.html('<embed type="application/x-shockwave-flash" src="http://s0.videopress.com/player.swf?v=1.03" width="' + attr.width + '" height="' + attr.height + '" wmode="direct" seamlesstabbing="true" allowfullscreen="true" allowscriptaccess="always" overstretch="true" flashvars="guid=' + scope.src.src + '&amp;isDynamicSeeking=true">');
				} else {
					element.html("<div>NO Video</div>");
					// We have to put something into the DOM
				}
			});
		}
	};
}).directive('resizeTasa', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 1000) {
				scope.windowWidth = 215
			} else if (window.innerWidth < 1000 && window.innerWidth >= 800) {
				scope.windowWidth = 170
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.windowWidth = 138;
			} else {
				scope.windowWidth = 120
			}
			scope.styles = function() {
				return {
					'height' : (newValue.h - 100) + 'px',
					'width' : (newValue.w - 100) + 'px'
				};
			};

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeHome', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 960) {
				scope.imgWidth = 199;
				scope.containerWidth=199
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.imgWidth = 218;
				scope.containerWidth=238;
			} else if (window.innerWidth < 799 && window.innerWidth >= 640) {
				scope.imgWidth = 261
				scope.containerWidth = 281
			} else if (window.innerWidth < 639 && window.innerWidth >= 480) {
				scope.imgWidth = 185;
				scope.containerWidth=195;
			} else {
				scope.imgWidth = 261;
				scope.containerWidth=281;
			}
			scope.styles = function() {
				return {
					'height' : (newValue.h - 100) + 'px',
					'width' : (newValue.w - 100) + 'px'
				};
			};

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeCurrent', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 960) {
				scope.windowWidth = 175
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.windowWidth = 220
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.windowWidth = 175
			} else if (window.innerWidth < 640 && window.innerWidth >= 480) {
				scope.windowWidth = 190
			} else {
				scope.windowWidth = 125
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeSocial', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 960) {
				scope.windowWidth = 220;
				scope.containerWidth=225
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.windowWidth = 220;
				scope.containerWidth=240
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.windowWidth = 170
				scope.containerWidth=170
			} else if (window.innerWidth < 640 && window.innerWidth >= 480) {
				scope.windowWidth = 315
				scope.containerWidth=335
			} else {
				scope.windowWidth = 190
				scope.containerWidth =200
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeTabs', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {
				scope.topImageWidth = 250;
				scope.bottomImageWidth = 200;
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.topImageWidth = 250;
				scope.bottomImageWidth = 200;
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.topImageWidth = 250;
				scope.bottomImageWidth = 200;
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.topImageWidth = 250;
				scope.bottomImageWidth = 150;
			} else {
				scope.topImageWidth = 250;
				scope.bottomImageWidth = 150;
			}
			scope.styles = function() {
				return {
					'height' : (newValue.h - 100) + 'px',
					'width' : (newValue.w - 100) + 'px'
				};
			};

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeProfile', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {

				scope.topImageWidth = 400;
				scope.video = 250;
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.topImageWidth = 320;
				scope.video = 200
			} else if (window.innerWidth < 799 && window.innerWidth >= 640) {
				scope.topImageWidth = 220;
				scope.video = 190
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.topImageWidth = 220;
			} else {
				scope.topImageWidth = 280;
				scope.video = 150;
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeClass', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {

				scope.tnWidth = 100;
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.tnWidth = 100;
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.tnWidth = 100;
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.tnWidth = 75;
			} else {
				scope.tnWidth = 75;

			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeList', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {
				scope.bigPow = 500
				scope.tnWidth = 200;
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.bigPow = 400
				scope.tnWidth = 150;
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.bigPow = 300
				scope.tnWidth = 150;
			} else if (window.innerWidth < 640 && window.innerWidth >= 480) {
				scope.bigPow = 290
				scope.tnWidth = 298;
			} else {
				scope.bigPow = 290
				scope.tnWidth = 290;
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizesearchBlog', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {
				scope.search_blog = 100;

			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.search_blog = 100;
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.search_blog = 85;
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.search_blog = 75;
			} else {
				scope.search_blog = 75
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizesearchImage', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowH = newValue.h;
			if (window.innerWidth > 960) {
				scope.search_image = 150;

			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.search_image = 150;
			} else if (window.innerWidth < 800 && window.innerWidth >= 640) {
				scope.search_image = 125;
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.search_image = 110;
			} else {
				scope.search_image = 100
			}

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeBigimage', function($window) {
	return function(scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 960) {
				scope.bigImageWidth = 650
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.bigImageWidth = 600
			} else if (window.innerWidth < 799 && window.innerWidth >= 640) {
				scope.bigImageWidth = 500
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.bigImageWidth = 390;
			} else {
				scope.bigImageWidth = 240
			}
			scope.styles = function() {
				return {
					'height' : (newValue.h - 100) + 'px',
					'width' : (newValue.w - 100) + 'px'
				};
			};

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('resizeTimeline', function($window) {
	return function(scope, element, attrs) {
		var w = angular.element($window);
		scope.getWindowDimensions = function() {
			return {
				'h' : w.height(),
				'w' : w.width()
			};
		};
		scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
			scope.windowHeight = newValue.h;
			if (window.innerWidth > 1200) {
				scope.timelineMove = parseInt(attrs.x)+$(window).width();
				scope.timelineExtend= $(window.width*.8);
			}
			else if (window.innerWidth > 960&&window.innerWidth<1200) {
				scope.timelineWidth = parseInt(attrs.x)+$(window).width();
			} else if (window.innerWidth < 960 && window.innerWidth >= 800) {
				scope.timelineWidth = 600+$('svg_us').width();
			} else if (window.innerWidth < 799 && window.innerWidth >= 640) {
				scope.timelineWidth = 500+$('svg_us').width();
			} else if (window.innerWidth < 640 && window.innerWidth >= 470) {
				scope.timelindWidth = 390+$('svg_us').width();;
			} else {
				scope.timelineWidth = 240+$('svg_us').width();
			}
			scope.styles = function() {
				return {
					'height' : (newValue.h - 100) + 'px',
					'width' : (newValue.w - 100) + 'px'
				};
			};

		}, true);

		w.bind('resize', function() {
			scope.$apply();
		});
	};
}).directive('imageonload', function() {
	return {
		restrict : 'A',

		link : function(scope, element) {
			element.on('load', function() {

				// Set visibility: true + remove spinner overlay
				element.removeClass('spinner-hide');
				element.addClass('spinner-show');
				element.parent().find('span').remove();
			});
			scope.$watch('ngSrc', function() {
				// Set visibility: false + inject temporary spinner overlay

				element.addClass('spinner-hide');
				element.parent().append('<span class="spinner"></span>');

			});
		}
	};
}).directive('imageonloadprofile', function(TeacherDataFetch) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			
			element.bind('load', function() {
				if (attrs.number == 0) {
					$('.loading').addClass('ng-hide');
					$(element).removeClass('ng-hide');
					scope.loadHider = true;

				}

			});

		}
	};
}).directive('imageonloadtabs', function(TabsDataFetch) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {

			element.bind('load', function() {
				//console.log('dir'+TabsDataFetch.count)
				if (attrs.number == 0) {

					$('.loading').addClass('ng-hide');
					$(element).removeClass('ng-hide');
					scope.loadHider = true;
				}

			});

		}
	};
}).directive('imageonloadpopup', function(TeacherDataFetch) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {

			scope.isLoading = true;
			element.bind('load', function() {

				scope.isLoading = false;
				//$('.loading').addClass('ng-hide');
				$(element).removeClass('ng-hide');
				//scope.loadHider=true;

			});

		}
	};
}).directive('featureImage', function(){
    return function(scope, element, attrs){
        var url = attrs.featureImage;
      
        element.css({
            /*dkblue rgba(0, 87, 165, .6)
             green rgba(25, 142, 129, .6)
             blue: rgba(4, 146, 206, .6)
             yellow: rgba(235, 189, 30, .6)
             */
            //'background': 'linear-gradient(rgba(0, 87, 165, 0.75), rgba(0, 87, 165, 0.75)),url('+url+')',
            'background-blend-mode':'lighten',
            'background-image':'url('+url+')',
            'background-size':'cover',
            'background-color':attrs.color,
            'background-position':'50 0',
            'opacity':.85
        });
    };
}).directive("ngTouchmove", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        event.preventDefault();
        $element.bind('touchmove', onTouchMove);
        $element.bind('touchend', onTouchEnd);
      };
      
      function onTouchMove(event) {
          var method = '$scope.' + $element.context.getAttribute('ng-touchmove');
          $scope.$apply(function () {
              eval(method);
          });
      };
      
      function onTouchEnd(event) {
        event.preventDefault();
        $element.unbind('touchmove', onTouchMove);
        $element.unbind('touchend', onTouchEnd);
      };
    }
  };
})
.directive("ngTouchstart", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchstart');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
})
.directive("ngTouchend", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchend', onTouchEnd);
      
      function onTouchEnd(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchend');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
});