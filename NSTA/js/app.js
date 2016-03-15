'use strict';

/* App Module */
//var teachernamehash = window.location.hash.split('/')[2];
var NSTA = angular.module('NSTA', ['ngRoute', 'ngSanitize', 'ngAnimate','ngTouch','angulartics', 'angulartics.google.analytics','Alumni' ]);
NSTA.config(['$routeProvider',
  function($routeProvider) {
   $routeProvider.
  	    when('/alumni',{
     	templateUrl:'partials/LargeImageTop.html',
     	//controller:'spotPage'
     	
     }).
     
  	    when('/pow',{
     	templateUrl:'partials/LargeImageTop2.html',
     	//controller:'spotPage'
     	
     }).
	 otherwise({
      	templateUrl: 'partials/LargeImageTop.html',
        redirectTo: '/home/'
        //controller:'partials/home.html'
     });






     // use the HTML5 History API
		

  }]);
  
NSTA.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
         $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]); 
  
  /*app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
}) */
