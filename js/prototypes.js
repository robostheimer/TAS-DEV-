/****************************String****************************/
////////reverses a string/////////////
String.prototype.reverse = function(){
	var str =this;

	str=str.split('').reverse().join('');
	return str;
}

String.prototype.sanitize = function(){
	var str = this;
	var strArr = str.split('>');
	var new_str ='';
	var output;
	var length = str.length;
	if(length!==str.indexOf('>')+1 && str.indexOf('>')!==-1){
		strArr.forEach(function(item){
			item=item+'>';
			var index1 = item.indexOf('<');
			var index2 = item.indexOf('>');
			var replace_word=item.slice(index1, index2+1);
			new_str += item.replace(replace_word, '');
		});
	} 
	else {
		new_str = this;
	}
	
	new_str = new_str.replace(/[^"^\'^a-zA-Z, ^1-9 ]/g, "")
	new_str = new_str.trim();
  
  return new_str;
}

String.prototype.removeHTML = function(){
	 		
	 		var str =  jQuery('<div />', { html: this }).text();
	        str = 		jQuery('<p />', { html: this }).text();
	        str = jQuery('<i />', { html: this }).text();
			return str;
};
String.prototype.removeSpecialChar=function() {
		var str=this; 
		str = str.replace('&', 'and');
		str = str.replace(/[^a-zA-Z, ^1-9 ]/g, "");
		return str;
	};
String.prototype.diggPatt = function(char){
	 var checkDigit = (this.lastIndexOf(char)+1);
	 var digPatt = this.slice(checkDigit, this.length);
      
       if(digPatt.match(/\d/g))
       {
       	name = this.split('-')[0];
       }
       else
       {
       	name=this;
       }
       return name;
};
String.prototype.replacePatterns=function() {
	var str=this;
	str = str.replace('#/map/', '')
	str = str.replace('#/playlist/', '');
	str = str.replace(/_/g, ' ');
	//str = str.replace(/St. /i, 'Saint ');
	//str = str.replace(/St /i, 'Saint ');
	str = str.replace('New York, ', 'New York City, ');

	return str;
};

String.prototype.locationReplace=function() {
	var str=this;
	str = str.replace(', ', '*');
	str = str.replace(',', '*');
	str = str.replace(/ /g, '_');
	return str;
};

String.prototype.createTitleFromURL=function()
	{
		var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var str=this;
		
		str =str.replace('https://teacheratsea.wordpress.com','');
		str = str.replace('http://teacheratsea.wordpress.com','');
		
		str = str.split('/')[4];
		
		str = str.replace(/-/g, ' ');
		
		str=str.toTitleCase();
		
		var strSplitter = this.split(' ');
		var substr = strSplitter[1];
		var str = str.replace(substr, substr+',');
		
		str = str.replace(' 20', ', 20');
		console.log(str)
		
		monthArr.forEach(function(item){
			if(str.replace(/\W/g,'').match(item))
			{
				str = str.replace(item, ', '+item).replace(' , ', ', ');
				
			}
			
		});	
		return str;
		
	};
	
String.prototype.toTitleCase = function()
{
	
	    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	
};


String.prototype.strSplitter = function(splitter)
	{
		var str = this;
		
	
		var strObj ={arr:[], orig: ''};
		var start_index = str.indexOf(splitter) 
		var end_index=str.lastIndexOf(splitter)+1;
		var slicer = str.slice(start_index,end_index);
		strObj.orig=this.toString();
		if(slicer.length<str.length)
		{
			strObj.regStr=true;
			if(start_index==0)
			{
				var noslice = str.slice(end_index, str.length);
			}
			else if(start_index>0 && end_index==str.length-1){
				var noslice = str.slice(0, startindex);
			}
			else{
				var noslice = str.slice(0, start_index)+str.slice(end_index, str.length);
			}
			var noSplitter = noslice.split(' ');
			noSplitter.forEach(function(item){
 				var x= noSplitter.indexOf(item);
 				if(item=="" || item==" "){
 					noSplitter.splice(x, 1);
 				}
	 		});
		}
		else{
			strObj.regStr=false;
		}
		
		
		if(slicer.split('"').length>2)
	 		{
	 			strQuoteSplit =slicer.split(splitter) || slicer.split(splitter);
	 			
	 			strQuoteSplit.forEach(function(item){
	 				var i= strQuoteSplit.indexOf(item);
	 				if(item=="" || item==" "){
	 					strQuoteSplit.splice(i, 1);
	 				}
	 					
	 				
	 			});
	 			strQuoteSplit.forEach(function(item){
	 			
	 				strObj.arr.push(item);
	 			});

	 		}
	 		if(strObj.regStr!=false)
	 		{
	 		strObj.arr =strObj.arr.concat(noSplitter)
	 		}
	 		
	 		return strObj;
	 		
	};
String.prototype.Slicer = function(number)
	 {
	 	var str=this;
		var slicer = str.slice(0, number);
		var slicer2 = str.slice(number, str.length);
		var slicer2Index = slicer2.indexOf(' ');
		slicer2 = str.slice(0, (number+slicer2Index));
		//alert(slicer2);
		return slicer2;
	 };
	 
String.prototype.findThe=function()
{
	var str =this;
	var strSlice = str.slice(3, str.length);
	strSlice = strSlice.replace('The', 'the');
	str = str.slice(0, 3)+strSlice;
	return str;
};	 
/****************************Array****************************/
Array.prototype.removeItem=function(str_ind, item)
{
	var array=this;
	if(str_ind=="ind")
	{
		array.splice(item, 1);	
	}
	if(str_ind=="str")
	{
		array.splice(array.indexOf(item), 1)
	}
	return array;
};
Array.prototype.SortObjAsc=function(property, num_or_str, checkDupProperty)
 	{
  	var obj=this;	
 	if(num_or_str=='str')
 	{
 		
 		obj.sort(function(a,b) {return (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0);}) ;
 	
 		return obj.reverse();
 	}
 	else{
 		obj.sort(function(a, b){
 			
 				 var aprop=parseInt(a[property]);
				 var bprop =parseInt(b[property]);
				 return bprop-aprop;
				});
 	}
 		obj= obj.removeDuplicatesArrObj('headline', false).reverse();
 		retr
 };
 
Array.prototype.SortObjDsc=function(property, num_or_str, checkDupProperty)
	 {
	 	
	 	
	 	var obj = this
	 	if(num_or_str=='str')
	 	{
	 	
	 	var sortable =[];
	 
	 	obj.sort(function(a,b) {return (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0);}) 
	 	
	 	return obj;
	 	}
	 	else{
	 		obj.sort(function(a, b){
	 			
	 				 var aprop=parseInt(a[property]);
					 var bprop =parseInt(b[property]);
					 return bprop-aprop;
					});
	 	}	
	 		return obj.removeDuplicatesArrObj('headline', false);
	 		
	 };

Array.prototype.removeDuplicatesArrObj = function(property, checkmatch){
	var unique={title:[], finalArr:[], notunique:[]};
	var array=this;
	function isUnique ()
	{
		
		if(checkmatch==true)
		{
			array.forEach(function(item){
				
				if (!unique.title.toString().replace(/\W/g, '').match(item[property]))
		        {
		        	 unique.title.push(item[property]);
		        	 unique.finalArr.push(item);
		        }
		        else{
		        	unique.notunique.push(item);
		        }
			});
			}
			else{
				array.forEach(function(item){
				
				if (unique.title.indexOf(item[property]) < 0)
		        {
		        	unique.title.push(item[property]);
		        	unique.finalArr.push(item);
		        }
		        else{
		        	unique.notunique.push(item);
		        }
		       
			});
		}
		return unique.finalArr;
	}
	
	return isUnique(array);
};	


Array.prototype.removeDuplicatesArr = function(){
		var unique = [];
		var array=this;
  		array.forEach(function(item) {
	        var current = item
	        if (unique.indexOf(current) < 0)
	        {
	        	 unique.push(current);
	        }
		   });
	    return unique;
	};
 
Array.prototype.savArrayDups =function(){
	var dups={title:[], finalArr:[]};
			var array =this;
			array.forEach(function(item){
				
				if (dups.title.indexOf(item) < 0)
		        {
		        	 dups.title.push(item);
		        	
		        }
		        else{
		        	
		        	dups.finalArr.push(item);
		        	
		        }
	        
	        
		});
		dups.finalArr = dups.finalArr.removeDuplicatesArr();
		return dups.finalArr;
};

Array.prototype.savArrayDupsObj=function( property){
		var dups={title:[], finalArr:[], };
			var array =this;
			array.forEach(function(item){
				
				if(dups.title.indexOf(item[property]) < 0)
		        {
		        	 dups.title.push(item[property]);
		        	
		        }
		        else{
		        	
		        	dups.finalArr.push(item);
		        	
		        }
	        
	        
		});
		dups.finalArr = dups.finalArr.removeDuplicatesArrObj(property, false);
		return dups.finalArr;
	};

///////////////When combining an array, it makes sure no values of a particular property are duplicated/////////////////
Array.prototype.preventDuplicates=function(comparer, type)
 {
 	var array=this;
 	console.log(array)
 	var tmpArr=[];
 	tmpArr =[];
 	
 	///////////Adds to  the Beginning
	if(type = 'splice'){
		
	 	array.forEach(function(item){
		 	comparer.forEach(function(compare)
			{
				
				
				tmpArr.splice(0, 0, item)	
				
				
			});
		});
	}
	//////////Adds to end///////////
	else{
		array.forEach(function(item){
			comparer.forEach(function(compare)
			{
				console.log(compare+':'+item);
				
				tmpArr.push(compare)	
				
			});
		});	
		
	}	
 	array = tmpArr.removeDuplicatesArr();
 	return array;
 };
	 
Array.prototype.preventDuplicatesValues=function(comparer, property, type)
 {
 	var array=this;
 	
 	var tmpArr=[];
 	tmpArr =[]
 	
 	///////////Adds to  the Beginning
	if(type = 'splice'){
	 	array.forEach(function(item){
		 	comparer.forEach(function(compare)
			{
				
				tmpArr.splice(0, 0, compare);
					
			});
		});
	}
	//////////Adds to end///////////
	else{
		array.forEach(function(item){
			comparer.forEach(function(compare)
			{
				
				tmpArr.push(compare)	
				
			});
		});	
	}	
 	array = tmpArr.removeDuplicatesArrObj('type', true);
 	return array;
 };
 ///////////////finds one item in an array; 
 ////////////works quickly by continuously cutting the array that it has to loop through in half-decreasing the number of iterations necessary
Array.prototype.binarySearch =function(term, property) {
		var array =this;	
		var min = 0;
		var max = array.length - 1;
	    var index;
	    var results =[];
	    if(property==undefined)
	    {
	    while(min <= max) {
	    index = Math.floor((max + min) / 2);
	
	        if (array[index] === term) {
	            return {'index':index, 'term': term}
	        }
	        else if (array[index] < term) {
	            min = index + 1;
	        }
	        else {
	            max = index - 1;
	        }
	
	    }
		return {'index':'error - no '+term+' in this array', 'term':term}
		}else{
			  while(min <= max) {
	   		 index = Math.floor((max + min) / 2);
	        if (array[index][property] === term) {
	            return {'index':index, 'term': term, 'property': property}
	        }
	        else if (array[index][property] < term) {
	            min = index + 1;
	        }
	        else {
	            max = index - 1;
	        }
	
	    }
	    
		return {'index':'error - no '+term+' in this array', 'term':term, 'property':property};
		}
	}; 
	

Array.prototype.searchDataMatch = function(str, properties, checkDupProperty)
	 { 
	 	/////Prepping string///////////
	 	var str=str;
	 	var array1=this;
	 	if(str.match(/[<>]/g))
	 	{
	 		return 'Bad Response'
	 	}
	 	else{
		 	if(str.indexOf('"')>=0|| str.indexOf("'")>=0)
		 	{
		 		strObj = str.strSplitter('"');
		 	}
		 	else{
		 	str = str.replace(/ /g, '_');
		 	str=str.replace(/[&\/\\#,+()$~%.:*?<>{}]/g,'_');
		 	str = str.replace(/ or /g,'');
			str = str.replace(/ and /g,'');
			str =str.replace(/ the/g,'');
			str = str.replace(/ and/g,'');
			str = str.replace(/ or/g,'');
			str=str.replace(/and /g,'');
			str=str.replace(/the /g, '');
			str = str.replace(/or /g,'');
			str = str.replace(/,/g,'');
			str = str.replace(/,/g,'');
			str = str.replace(/ a /g, ' ');
			str = str.replace(/ an /g, ' ');
			str = str.replace(/ a /g, '');
			str = str.replace(/ an /g, '');
			str=str.replace(/'/g, '"');
		 	strSplitter = str.split('_');
		 	strObj = {arr: strSplitter, noArr: true}
		 	}

		 	var newArr=[];
		 	
		 	if(array1.length==0)
		 	{
		 		newArr=[];
		 	}
		 	else if(strObj.arr.length==1)
			 	{	
			 		var strtoo=strObj.arr.toString().replace(/"/g, '');
			 		if(strtoo[strtoo.length-1]=='s')
				 	{
				 		strtoo = strtoo.slice(0,str.length-1);
				 	}
				 	
				 	array1.forEach(function(item){
				 		
				 		if(item!=undefined){
				 			//console.log(item, strtoo)
				 			if(JSON.stringify(item).toLowerCase().match(strtoo.toLowerCase()))
				 			{
				 				newArr.push(item);
				 			}
				 		}
				 		
				 	});
				
			 	}
			 else {
			 		strObj.arr.forEach(function(str) {
			 			if(str[str.length-1]=='s')
					 	{
					 		str = str.slice(0,str.length-1);
					 	}
			 			array1.forEach(function(item){
				 		if(item!=undefined){
				 					
				 					if(JSON.stringify(item).toLowerCase().match(str.toLowerCase()))
					 				{
					 					newArr.push(item);
						 			}
				 			}
					 	});
				 	});
			 	}
		 	
		 	
		 	obj = {arr:newArr.slice(0,50), fullArr: newArr}
		 	
		 	return obj;
	 	}
	 };
	 
Array.prototype.searchObjProperties=function(str, properties, checkDupProperty, type, checking_prop)
	 {
	 	var arr=this;
	 	var filtered=[];
	 	var finalfilter=[];
	 	var str = str.replace(/"/g,'');
	 	arr = arr.SortObjAsc(properties[0], 'str', 'headline');
	 		
	 	
	 	arr.forEach(function(item){
	 		properties.forEach(function(property){
	 			if(item[property]==str)
	 			{
	 				
	 				filtered.push(item);	
	 			}
	 		});
	 	});
	 	
	 	if(type=='button')
	 	{
			 	finalfilter=filtered.filter(function(item){
		 		if(item[properties[0]]===checking_prop){
		 			return true;
		 		}
		 	});
	 	
	 	}
	 	else{
	 	finalfilter = filtered.removeDuplicatesArrObj(checkDupProperty, false);
	 	}
	 	return finalfilter;
	 };
Array.prototype.removeArrObj=function(properties, strs, type, checkDupProperty){
		var arr=this;
		if(properties.length==1)
		{
			var tmpArr=arr.filter(function(item){
			if(strs.toString()!=item[properties.toString()])
				{
					return true;
				}		
			});
		}	
		else if (type!="" || type!=undefined && properties.length>1){
			var tmpArr=[];
			arr.forEach(function(item){
				properties.forEach(function(property){
					var i = properties.indexOf(property);
					
					if(strs[i]!=item[property])
					{
						tmpArr.push(item)
					}
					
				});				
			});	
		}	
		tmpArr = tmpArr.removeDuplicatesArrObj(checkDupProperty, false)
		return tmpArr;
	};
Array.prototype.removeKeyVals =function(properties)	
{
	var data = this;
	
		data.forEach(function(item){
			
			properties.forEach(function(property){
				delete(item[property]);
				
			});
		});
		return data;
};
Array.prototype.Toggle = function(indiv, property, value1, value2){
	 		
	 		///add a map?
	 		var arr=this;
	 		
	 		arr.forEach(function(item){
	 			if(indiv.toLowerCase() ==item[property].toLowerCase() &&  item.state!=value1)
	 			{	
	 				item.state=value1
	 			}
	 			else{
	 				item.state=value2;
	 			}
	 			
	 		});
	 		return arr;
	 };
	 
Array.prototype.compareArraysObj =function(array2, property)
	 {
	 	var array1=this;
	 	array1.forEach(function(item){
	 		var x=array1.indexOf(item);
	 		array2.forEach(function(item2){
	
	 			if(item[property]==item2[property])
	 			{
	 				array1.splice(x, 1);
	 			}
	 		});
	 	});
		return array1;
	 };
	 


	 
Array.prototype.collectSameValues =function(property,value)
	 {
	 	var array1=this;
		
	 	put_together=[];
	 	array1.forEach(function(item){
			
	 		if(item[property]==value)
	 		{
	 			put_together.push(item);
	 		}
	 		
	 	});
		return put_together;
	 };	 
	 

/**********************Distance*********************/
var distance=function(lat1, lon1, lat2, lon2, unit) {

    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
    

};


var distance_to_degrees_lat=function(miles){
	
	var earth_radius = 3960.0;
	var degrees_to_radians = Math.PI/180.0;
	var radians_to_degrees = 180.0/Math.PI;
	return (miles/earth_radius)*radians_to_degrees
	
};

 var distance_to_degrees_lon=function(lat, miles){
	var earth_radius = 3960.0
	var degrees_to_radians = Math.PI/180.0
	var radians_to_degrees = 180.0/Math.PI
	
	var  r = earth_radius*Math.cos(lat*degrees_to_radians)
    return (miles/r)*radians_to_degrees
};

/************************JQuery*********************/
goToByScrollTop=function(id) {
		// Remove "link" from the ID
	
		id = id.replace("link", "");
		// Scroll
		$('body').animate({
			scrollTop : 0
		}, 'slow');
	
	};
	

/*******************Create DOM Elements*******************/

function elt( name, attributes, str) { 
		var node = document.createElement( name);
		 if (attributes) 
		 {
		 	attributes.forEach(function(item){
		 	for (var attr in item){
		 		
		 		 if (item.hasOwnProperty( attr)){
		 		 	
		 		  node.setAttribute(attr, item[attr]); 
		 		 
		 		 }
		 		} 
		 		 	});	
		}
		 		for (var i = 2; i < arguments.length; i++) 
		 		{ 
		 			var child = arguments[ i]; 
		 			console.log(child)
		 			if (typeof child == "string"){
		 				
		 			 child = document.createTextNode( child); 
		 			 node.appendChild(child); 
		 			 }
		 		}	  
		
		return node;
	}
		//console.log(elt('section', [{'id':'test'}, {'class':'test'}], 'test'));
		//document.body.appendChild(elt('section', [{'id':'test'}], 'test'));
	