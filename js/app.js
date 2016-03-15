'use strict';

/* App Module */
////Injects modules into the app 
var TAS_SITE = angular.module('TAS_SITE', ['ngRoute',  'BaseballCardInfo', 'ClassPage',  'Media', 'ngSanitize', 'ngAnimate', 'Alumni','TabPages', 'FAQs', 'TASA', 'Homepage','Highlights','ngTouch','Footer', 'SearchBox', 'Navigation', 'RespNav','angulartics', 'angulartics.google.analytics', 'Favorites','Generic', 'RSS']);
TAS_SITE.config(['$routeProvider',
  function($routeProvider) {
   $routeProvider.
  ///////////creates routes/deeplinking capability
  	  when('/home/', {
        templateUrl: 'partials/home.html',
       controller: 'homePageController'
      }).
      when('/Home/', {
        templateUrl: 'partials/home.html',
       controller: 'homePageController'
      }).
 	 	when('/highlights/', {
        templateUrl: 'partials/highlights.html',
       controller: 'highlightsController'
      }).
      when('/contact/', {
        templateUrl: 'partials/contact.html',
       controller: 'highlightsController'
      }).
       when('/Contact/', {
        templateUrl: 'partials/contact.html',
       controller: 'highlightsController'
      }).
       when('/privacy/', {
        templateUrl: 'partials/privacy.html',
       controller: 'genericController'
      }).
      when('/pastseasons/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
       when('/past_seasons/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
       when('/Past_Seasons/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
         when('/facebook/',
	    {
	    	
	    	templateUrl:'partials/facebook.html',
	    	controller:'qsParser',
	    	
	    }).
	    when('/facebook/:qs',
	    {
	    	
	    	templateUrl:'partials/facebook.html',
	    	controller:'qsParser',
	    	
	    }). 
       when('/Past_seasons/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
       when('/past_Season/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
       when('/past_season/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
       when('/Past_Season/', {
        templateUrl: 'partials/pastseasons.html',
       controller: 'genericController'
      }).
      
       when('/NOAA_Corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
        when('/noaa_corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
        when('/NOAA_corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
        when('/noaa_Corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
        when('/corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
        when('/Corps/', {
        templateUrl: 'partials/noaacorps.html',
       controller: 'genericController'
      }).
      
        when('/feeds/', {
        templateUrl: 'partials/feeds.html',
       controller: 'genericController'
      }).
        when('/Feeds/', {
        templateUrl: 'partials/feeds.html',
       controller: 'genericController'
      }).
      
      when('/Highlights/', {
        templateUrl: 'partials/highlights.html',
       controller: 'genericController'
      }).
 	  when('/NETASA/', {
        templateUrl: 'partials/TASA.html',
       	controller: 'getTASAData'
      }).
      when('/netasa/', {
        templateUrl: 'partials/TASA.html',
       	controller: 'getTASAData'
      }).
        when('/MATASA/', {
        templateUrl: 'partials/TASA.html',
       	controller: 'getTASAData'
      }).
      when('/MATASA/', {
        templateUrl: 'partials/TASA.html',
       	controller: 'getTASAData'
      }).
  	  when('/faqs/', {
        templateUrl: 'partials/faqs.html',
       	controller: 'getFAQsData'
      }).
       when('/faq/', {
        templateUrl: 'partials/faqs.html',
       	controller: 'getFAQsData'
      }).
      when('/FAQs/', {
        templateUrl: 'partials/faqs.html',
       	controller: 'getFAQsData'
      }).
       when('/FAQ/', {
        templateUrl: 'partials/faqs.html',
       	controller: 'getFAQsData'
      }).
  	   when('/ships/', {
        templateUrl: 'partials/ships.html',
       	controller: 'Tabs'
      }).
        when('/ship/', {
        templateUrl: 'partials/ships.html',
       	controller: 'Tabs'
      }).
       when('/ships/:tabname', {
        templateUrl: 'partials/ships.html',
       	controller: 'Tabs'
      }).
       when('/ship/:tabname', {
        templateUrl: 'partials/ships.html',
       	controller: 'Tabs'
      }).
  	   when('/how_to_apply/', {
        templateUrl: 'partials/how_to_apply.html',
       	controller: 'Tabs'
      }).
       when('/how_to_apply/:tabname', {
        templateUrl: 'partials/how_to_apply.html',
       	controller: 'Tabs'
      }).
  	   when('/resources/', {
        templateUrl: 'partials/resources.html',
       	controller: 'Tabs'
      }).
       when('/resources/:tabname', {
        templateUrl: 'partials/resources.html',
       	controller: 'Tabs'
      }).
  	   when('/about/', {
        templateUrl: 'partials/about.html',
       	controller: 'Tabs'
      }).
       when('/about/:tabname', {
        templateUrl: 'partials/about.html',
       	controller: 'Tabs'
      }).
  	   when('/alumni/', {
        templateUrl: 'partials/alumni.html',
       	controller: 'Alumni'
      }).
       when('/alumni/:tabname', {
        templateUrl: 'partials/alumni.html',
       	controller: 'Alumni'
      }).
  	  when('/alumni/:tab', {
        templateUrl: 'partials/alumni.html',
       	controller: 'AlumniPage'
      }).
  	  when('/alumni_spotlight/:num', {
        templateUrl: 'partials/spotlight.html',
       	controller: 'spotPage'
      }).
	  when('/indiv_spotlight/:spot_title', {
        templateUrl: 'partials/indiv_spotlight.html',
       	controller: 'openIndivSpot'
      }).
      when('/alumni_spotlight/', {
        templateUrl: 'partials/spotlight.html',
       	controller: 'spotPage'
      }).
      when('/alumni_spotlights/', {
        templateUrl: 'partials/spotlight.html',
       	controller: 'spotPage'
      }).
  	  when('/pow/:num', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
      when('/photo_of_week/:num', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
      when('/photos_of_week/:num', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
  	  when('/pow/', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
      when('/photos_of_week/', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
      when('/photo_of_week/', {
        templateUrl: 'partials/pow.html',
       	controller: 'powPage'
      }).
  	  when('/media/', {
        templateUrl: 'partials/media.html',
       	controller: 'mediaPage'
      }).
      when('/news/:num', {
        templateUrl: 'partials/news.html',
       	controller: 'newsPage'
      }).
      when('/news/', {
        templateUrl: 'partials/news.html',
       	controller: 'newsPage'
      }).
      when('/:year/:teachername/', {
        templateUrl: 'partials/profile.html',
       redirectTo:'/:year/:teachername/blogs'
      }).
        when('/1990-2002/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/1990-2002/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
        when('/2003/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2003/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
       when('/2004/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2004/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
      when('/2005/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2005/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
      when('/2006/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2006/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }). when('/2007/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2007/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }). when('/2008/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2008/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
      when('/2009/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2009/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
     when('/2010/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
      when('/2010/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
      when('/2011/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
     when('/2011/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
     when('/2012/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
     when('/2012/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }). 
     when('/2013/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
     when('/2013/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
     when('/2014/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
    when('/2014/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }).
    when('/2015/', {
        templateUrl: 'partials/class.html',
        controller: 'classPage'
      }). 
       when('/2015/:teachername/:tab', {
        templateUrl: 'partials/profile.html',
        controller: 'changeTab'
      }).
     when('/FeatureImagePage',{
     	templateUrl:'partials/LargeImageTop.html',
     	controller:'genericController'
     	
     }) .
          when('/alumni_spot_rss',{
     	templateUrl:'partials/rss_spot.xml',
     	controller:'rssControllerSpot'
     	
     }) . 
      when('/pow_rss',{
     	templateUrl:'partials/rss_pow.xml',
     	controller:'rssControllerPOW'
     	
     }) .
    
    otherwise({
      	templateUrl: 'partials/home.html',
        redirectTo: '/home/'
        //controller:'partials/home.html'
    });

     // use the HTML5 History API
		

  }])
 
