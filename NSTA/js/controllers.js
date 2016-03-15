/* Controllers */
angular.module('Alumni', [])
angular.module('Alumni', [])
.controller('spotPage', ['$scope','$location','$routeParams','Alumni','$sce', 
function($scope, $location, $routeParams, Alumni, $sce, $rootScopee)
{
		//alert($routeParams.spot_num.replace('page',''));
		
		$scope.checkContents=false;
		
		Alumni.getSpotData().then(function(data)
		{
		$scope.data = data;
		console.log($scope.data);
		$scope.checkContents =true;			
		},function(error){$scope.errorMessage = true;});

		
$scope.checkLength = function(query)
	{
		
		if(query.length==0)
		{
			$scope.noFilter=true;
		}
		else
		{
			$scope.noFilter=false;
		}
	};

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
			           //console.log(digPatt);
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
