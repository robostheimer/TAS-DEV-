/* Controllers */
angular.module('Alumni', [])
.controller('Timeline', ['$scope','Timeline', function($scope, Timeline)
{
	$scope.noSubnav=true;
	$scope.on_off='off';
	$scope.tmpArr=[];
	var arr=[];
	
	Timeline.getTimelineData().then(function(data){
		$scope.items = data;
		//$scope.subNav = $scope.items.years;
		//console.log($scope.subNav);
		$scope.windowWidth = window.innerWidth;
		$scope.windowWidth = $scope.windowWidth*.92;
		$scope.yearsWidth = $scope.items.years.length*75;
		$scope.navWidth = $('.navigation').width();
				
		if($scope.navWidth>($scope.windowWidth*.9))
		{
			$scope.noArrows = true;
			
		}
		else{
			$scope.noArrows=false;
		}
		
		
	});
	
	$scope.controlSubNav=function()
	{
		if($scope.noSubnav==false)
		{
			$scope.noSubnav=true;
		}
		else{
			$scope.noSubnav=false;
		}
	};
	

	
	
	$scope.changeNavClass=function(obj1, obj2 )
	{
		console.log('changing')
		var arrSelected=[];
		if(obj2 ==undefined)
		{
			if(obj1.state=='selected')
			{
				$scope.allchecked = 'notselected';
				
				obj1.state='notselected';
				for (var y=0; y<obj1.subNav.length;y++)
				{
				obj1.subNav[y].state = "notselected";
				
				}
				//////////Makes sure that if not all main nav items are selected, that no checkboxes light up
				/*for(var x=0; x<$scope.items.years.length; x++)
				{
					for(var y=0; y<$scope.items.years[x].subNav.length; y++)	
					{
						$scope.items.years[x].subNav[y].checked='notselected';
					}
				}*/
			}
			else
			{
				obj1.state='selected';
				$scope.allchecked='notselected';
				console.log($scope.allchecked);
				for (var y=0; y<obj1.subNav.length;y++)
				{
				obj1.subNav[y].state = "selected";
				}
				
			}
		}
		else{
			console.log('elsing')
			
			if(obj1.state=="selected")
			{
				if(obj2.state=='selected')
				{
					obj2.state='notselected';
					
					arr.push(obj2.state);
					if(arr.length==obj1.subNav.length){
						obj1.state='notselected';
					}
					obj2.checked=false;
					
					////////////runs the changeNavCheck function for when a subnav item is clicked off/////////////////
					//$scope.changeNavCheck(obj2.name, false, 'one');
					
				}
				else
				{
					obj2.state='selected';
				
				}
			}
			else{
				if(obj2.state=='notselected')
				{
					obj2.state='selected';
					obj1.state='selected';
				}	
			}
		}
		
	};
	
	$scope.changeNavCheck = function(type, allselected,on_off, howmany)
	{
		/////////////If gray top check box is activated, all boxes and check boxes are given a fill///////////////
		console.log(type);
				
		if(type == "all")
		{
			for(var x=0; x<$scope.items.years.length; x++)
			{
				if(allselected == 'notselected')
				{
					if(x==0)
					{
						$scope.allchecked='selected';
					}
					$scope.items.years[x].state = 'selected';
					for(var y=0; y<$scope.items.years[x].subNav.length; y++)
					{
						$scope.items.years[x].subNav[y].checked='selected';
						$scope.items.years[x].subNav[y].state ='selected';
						
					}
				}
				else {
						if(x==0)
						{
							$scope.allchecked='notselected';
						}
					
					$scope.items.years[x].state = 'notselected';
					for(var y=0; y<$scope.items.years[x].subNav.length; y++)
					{
						$scope.items.years[x].subNav[y].checked='notselected';
						$scope.items.years[x].subNav[y].state ='notselected';
					}
				}
				
			}
		}
		/////////////If a subnav is deactivated, this deactivates the checkbox from whence it is a child///////////////
		else if(howmany=='one')
		{
			console.log(howmany)
			for(var a = 0; a<$scope.items.years.length; a++)
			{
				for(var z=0; z<$scope.items.years[0].subNav.length; z++)
				{
					if($scope.items.years[a].subNav[z].name==type){
				
					$scope.items.years[a].subNav[z].checked='notselected';
					
					}
				}
			}
			
		}
		/////////////////If a single checkbox is pushed, this activates or deactivates that box based on the checked property of the 
		////////////////subNav propertie of the years array	
		else
		{
			var tmpArr2 =[];
			for(var a = 0; a<$scope.items.years.length; a++)
				{
					if($scope.allchecked==true)
					{
					$scope.items.years[a].state='selected';	
					}
					else{
						$scope.items.years[a].state='notselected';
					}	
				}	
				console.log($scope.on_off);
				
				if(on_off=='off')
				{
					$scope.allchecked=true;
					for(var a = 0; a<$scope.items.years.length; a++)
					{
						//$scope.items.years[a].state='notselected';
						for(var z=0; z<$scope.items.years[a].subNav.length; z++)
						{
							
							if($scope.items.years[a].state=='selected' && $scope.items.years[a].subNav[z].state=="selected" )
							{
							 $scope.tmpArr.push($scope.items.years[a]);	
							 }
							
							if($scope.items.years[a].subNav[z].name==type){	
								$scope.items.years[a].state="selected";
								if($scope.items.years[a].subNav[z].checked=='notselected')
								{
									$scope.allchecked='selected';	
									$scope.items.years[a].subNav[z].state='selected';
									$scope.items.years[a].subNav[z].checked='selected';
									$scope.items.years[a].subNav[z].on_off='on';
									
								}
								else
								{
									$scope.allchecked='notselected';	
									$scope.items.years[a].subNav[z].state='notselected';
									$scope.items.years[a].subNav[z].checked='notselected';
									$scope.items.years[a].subNav[z].on_off='on';
									
								}
							}
							
						}	
						
					}
					
				}
				else				
				{
				
				for(var c = 0; c<$scope.items.years.length; c++)
						{
								
								

								$scope.items.years[c].state='notselected';	
								for(var d=0; d<$scope.items.years[c].subNav.length; d++)
								{
									
									if($scope.items.years[c].subNav[d].state=='selected' && $scope.items.years[c].subNav[d].name==type)
									{
										$scope.items.years[c].subNav[d].on_off='off';
										$scope.items.years[c].subNav[d].checked ='notselected';
										$scope.items.years[c].subNav[d].state ='notselected';
										
										

									}
									/*if($scope.items.years[c].subNav[d].checked=="selected")
									{
										$scope.items.years[c].state='selected';	
									}*/

									
								}
								//console.log(tmpArr2);
								for(var b=0; b<$scope.tmpArr.length;b++)
								{
									
									if($scope.tmpArr[b].state=="selected")
									{
										
										tmpArr2.push(tmpArr[b]);
										
										$scope.items.years[c].state="selected";
										
									}
									
																	;
								}	
								
								
						if(tmpArr2.length<1)
						{
							$scope.allchecked=false;
						}
						
					}
					console.log(tmpArr2);
					console.log($scope.tmpArr);
					
				}
			
		}
	};
	
	

	$scope.showDkBlue=false;
	$scope.showLtBlue=false;
	$scope.showYellow=true;
	$scope.showGreen=false;
	$scope.showBlue=false;
	
	$scope.barClick=function(id){
		console.log(id)
		if(id=='LtBlue')
		{
			if($scope.showLtBlue==false)
			{
				$scope.showLtBlue=true
			}
			else{
				$scope.showLtBlue=false
			}
		}
		else if(id=='DkBlue')
		{
			if($scope.showDkBlue==false)
			{
				$scope.showDkBlue=true
			}
			else{
				$scope.showDkBlue=false
			}
		}
		else if(id=='Blue')
		{
			if($scope.showBlue==false)
			{
				$scope.showBlue=true
			}
			else{
				$scope.showBlue=false
			}
		}
		else if(id=='Green')
		{
			if($scope.showGreen==false)
			{
				$scope.showGreen=true
			}
			else{
				$scope.showGreen=false
			}
		}
		else if(id=='Yellow')
		{
			
			if($scope.showYellow==false)
			{
				
				$scope.showYellow=true;
				console.log($scope.showYellow)
			}
			else{
				$scope.showYellow=false
			}
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
