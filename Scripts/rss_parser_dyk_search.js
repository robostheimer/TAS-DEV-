// JavaScript Document
var searchDYKArr=[];

var txtDYK='';
var containDYKArr=[]
var listDYKArr=[];
var listDYKArr2=[];
var resultsDYKArr=[];
var resultsDYKArrSplit=[];
var resultDYKCount=0;
var results2DYKArr=[]
var results3DYKArr=[]
var finalDYKArr=[]
var final2DYKArr=[]
var holderArr=[]
var containmeDYKArr=[]	
	
containDYKArr.length=0;
listDYKArr.length=0;
resultsDYKArr.length=0;


function searchDYK(searchterm, index)
{
	////////////////////////////This function is run when someone hits the search button in the search blog box on the homepage//////////////////////////////
	

	$('#search_holder').show();
	$('#search_holder').html('');
	$('#search_holder').append('<div id="feature_search"></div>');
	
				
	var value = searchterm;
	value = value.sanitize();
	console.log(value)
	///////evaluates the string in the search field and removes troublesome words and phrases///////////////////////////////////
	
	var value2 = value.replace(/ or /g,'');
	value2 = value2.replace(/ and /g,'');
	value2=value2.replace(/ the /g,'');
	value2 =value2.replace(/ the/g,'');
	value2 = value2.replace(/ and/g,'');
	value2 = value2.replace(/ or/g,'');
	value2=value2.replace(/and /g,'');
	value2=value2.replace(/the /g, '');
	value2 = value2.replace(/or /g,'');
	value2 = value2.replace(/,/g,'');
	value2 = value2.replace(/,/g,'');
	//value2 = value2.replace.lastI(' ','');
	value2 = value2.toLowerCase();
	value2 = value2.replace(/ a /g, ' ');
	value2 = value2.replace(/ an /g, ' ');
	
	////////Runs a for loop of value2 variable to eliminate areas where there might be more than one space////////////////////////
	for(var t=0; t<value2.length; t++)
	{
		if(value2.charAt(value2.length-1)==" ")
		{
		value2 = value2.slice(0,value2.length-1);
		}
	}

		////////////////If the search field is left blank, it sends an alert box with the following message: 'Please enter search terms'///////////////////////////////
		if(value2=="" ||value2==" "|| value2=="  ")
		{
		alert('Please enter search terms');
		}
		////////////////////////if search field  is not blank/////////////////////////////
		else if(value2!="")
		{	
			//////////////////////////runs searchSplitSite function					  
			
			searchSplitSite(value2, value, index);	
			}
		
}

function searchSplitSite(searchString, value, index)
{
	
	containDYKArr.length=0;
	txtBlog='';
	listDYKArr.length=0;
	resultsDYKArr.length=0;
	results2DYKArr.length=0;	
	results3DYKArr.length=0;
	finalDYKArr.length=0;
	final2DYKArr.length=0;
	holderArr.length=0;
	containmeDYKArr.length=0;
	var searchterm= searchString;
	/////////////////////splits up the search terms////////////////
	var searchTermArr=[];
	var searchtermSplit = searchterm.split(" ");
	
	//////////////////////////Loops through the searchterms to find erroneous 's'.  Basically makes it so it searches for the non-plural version of the word///////////////////////////////////////
		for (var p=0; p<searchtermSplit.length;p++)
		{
			var indexlength=searchtermSplit[p].length-1;
		
			if(searchtermSplit[p].charAt(searchtermSplit[p].length-1)=="s")
			{
				
			searchTermArr.push(searchtermSplit[p].slice(0,indexlength));
							
			}
			else if(searchtermSplit[p].charAt(searchtermSplit[p].length-1)!="s")
			{
			searchTermArr.push(searchtermSplit[p]);	
			}
		}
	//////////////////////////////////defines the searchindex/////////////////////////////////
	var searchindex=index;
	
	
	searchDYKArrStr =searchindex.toString();

	
	//document.getElementById('contain').style.opacity='.15';
 	/////////////////////////////On click it changes the style of the "bigImg" div to display:block//////////////////////////
	
	//$('#bigImg').html('<div style="position:relative;float:right; margin-right:-50px;width:30px;margin-top:-50px; z-index:100;" id="alert_box_close" onclick="$(\'#bigImg\').fadeOut(\'slow\');document.getElementById(\'contain\').style.opacity=\'1.0\'"><a name="close"><img style="cursor:pointer" alt="collapse button_bigger_white" class="icon" src="/images/collapse_btn_bigger_white.png" height="30" width="30"/></a></div><div id="sitesearch" style="max-width:740px;overflow:hidden"><div id="mcs4_container"></div>')	
	//$('#bigImg').show();	
	////////////////////Adds headline to bigImg displaying the search term and the text below////////////////////////
		//$('#mcs4_container').append('<h2 style="margin-bottom:15px;">Search Results for: <em>'+value+'</em></h2>') 
	
	/////////////////////////creates searchArray by splitting at the end of each element
	 var searchArr=searchDYKArrStr.split('%%');	
	
	
	///////////////////////Loops through the searchArr (created above) and compares the first searchterm to the searchArr and pushes matches into the containDYKArr////////////////////////////
	
		for (var n=0; n<searchArr.length-1; n++)
		{
		
		
		
		///////////////////if there is a match it pushes the variables into arrays/////////////////	
			for (var f=0; f<searchTermArr.length; f++)
			{
				
				if(f==0&&searchArr[n].toString().toLowerCase().match(searchTermArr[f]))
					{
					containDYKArr.push(dyk.searchIndex[n]);	
					
					}
					else if(f>0&&!searchArr[n].toString().toLowerCase().match(searchTermArr[0])&&searchArr[n].toString().toLowerCase().match(searchTermArr[f]))	
					{
						//alert(searchTermArr[f]);
						if(!containDYKArr.toString().replace(/\W/g,'').match(searchArr[n].replace(/\W/g,'')))
						{
						//alert('it doesnt');	
						containDYKArr.push(dyk.searchIndex[n]);
						
						}
					}
					
			}
		
		}
		
		/////////////////////////////if there is more than one search term///////////////////////////////
		if(searchtermSplit.length>1)
		{
			
			///////////////////////////////////runs a nested for loop through the containDYKArr (defined and populated in the loop above).  It pushes all matches of a single word from the search term into an array called listDYKArr.
			for(var q=0; q<searchTermArr.length; q++)
			{
				for(var t=0; t<containDYKArr.length; t++)
				{
					
			
				
					if(containDYKArr[t].toLowerCase().replace(/\W/g,'').match(searchTermArr[q]))
					{
					
					listDYKArr.push(containDYKArr[t])//+searchtermSplit[q]);
					
						
					}
				}
			}
		}
		else
		{
			for(var t=0; t<containDYKArr.length; t++)
				{
					
			
				
					if(containDYKArr[t].toLowerCase().replace(/\W/g,'').match(searchTermArr[q]))
					{
					
					listDYKArr.push(containDYKArr[t])//+searchtermSplit[q]);
					
						
					}
				}
		}
			
			////////////////////////////////////////Sorts the listDYKArray alphabetically; very important to make sure the listDYKArr is sorted for the next step/////////////////////////////////////////////////
			listDYKArr.sort();
			
			//sets the resultDYKCount variable equal to the number of search terms
			resultDYKCount=searchTermArr.length;
			///////////////////////////////////Loops through the listDYKArr and if it finds two consecutive elements that match each other, it decreases resultDYKCount by 1
			var tAdd=searchTermArr.length-1;
			var listy = '';
			for (var t=0; t<listDYKArr.length; t++)
			{
				//console.log(t);
				if(!listy.replace(/\W/g,'').match(listDYKArr[t].replace(/\W/g,'')))
				{
				listy+=listDYKArr[t]+',';
				
				resultsDYKArr.push(listDYKArr[t]);
				//console.log(listy+':'+listDYKArr[t]);
				}
			}
			

	        
	
		if(containmeDYKArr.length!=0)
			{
			txtDYK+="<h3>Top Results</h3>"
			for(var t=0; t<containmeDYKArr.length-1; t++)
				{
				var search_number=containmeDYKArr[t].split('^^')[0];
				search_number = search_number.replace(',','');
				//console.log(search_number);
				var fav_width = parseInt($('#sm_image_text0').attr('src').split('?')[1].replace('w=',''))
	  			var fav_height =  parseInt($('#image0').attr('src').split('?')[1].replace('h=',''))	
					
					var contain= containmeDYKArr[t]
					var containSplit=contain.split('');
					var titlecontainResults=containSplit[0].replace(',','');
					var linkcontainResults = containSplit[1].replace(',','');
					
					
						
						  
						  $('#box'+search_number).clone().appendTo('#search_holder');
						  $('#search_holder').append($('#box'+search_number+'_text').clone()).html();
						  $('#search_holder').append($('#hidden'+search_number).clone()).html();
						  $('#search_holder #box'+search_number).attr('id' ,'box'+search_number+'_search');
						  $('#search_holder #box'+search_number+'_text').attr('id' ,'box'+search_number+'_text_search');
						  $('#search_holder #hidden'+search_number).attr('id' ,'hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number).attr('id' ,'hid'+search_number+'_search');
						  $('#search_holder #sm_image_text'+search_number).attr('id' ,'sm_image_text'+search_number+'_search')
						  $('#search_holder #sm_image'+search_number).attr('id' ,'sm_image'+search_number+'_search')
						  $('#search_holder #image'+search_number).attr('id' ,'image'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number).attr('id' ,'moreinfo'+search_number+'_search')
						  $('#search_holder #leftarrow'+search_number).attr('id' ,'leftarrow'+search_number+'_search')
						  $('#search_holder #rightarrow'+search_number).attr('id' ,'rightarrow'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #info-text'+search_number).attr('id' ,'info-text'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #otherpost'+search_number).attr('id' ,'otherpost'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #otherimage'+search_number).attr('id' ,'otherimage'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #it'+search_number).attr('id' ,'it'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #favorite'+search_number).attr('id' ,'favorite'+search_number+'_search')
						  
						 $('#search_holder #box'+search_number+'_search a').attr('href' ,'#box'+search_number+'_text_search');
						  $('#search_holder #box'+search_number+'_text_search div.dyk_image a').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #box'+search_number+'_text_search div.dyk_text p a.link').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search div#moreinfo'+search_number+'_search a.infolink').attr('href' ,'#hidden'+search_number+'_search'+'moreinfo'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search div#moreinfo'+search_number+'_search div.info-text a').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search a.no-hover').attr('href' ,'#box'+search_number+'_text_search');
						  $('#search_holder #hid'+search_number+'_search  a.prev').attr('href' ,'#hidden'+(search_number-1)+'_search');
						  $('#search_holder #hid'+search_number+'_search  a.next').attr('href' ,'#hidden'+(search_number+1)+'_search');
						  $('#search_holder #moreinfo'+search_number+'_search #it'+search_number+'_search').css('height' ,fav_height)
						 
						 
						
					
				}
			}
		if(resultsDYKArr.length!=0 &&containmeDYKArr!=0)
			{
				txtDYK+='<div style="clear:both"></div><div style="margin:5px;margin-top:20px; margin-bottom:25px; border-bottom:1px dashed #ccc"></div><h3>Other Tweets of Interest</h3>';
			}
			for(var j=0; j<resultsDYKArr.length; j++)
			{
					///txtDYK += '<li>'++dyk.dateArrDYK[j].split('@@')[0]+resultsDYKArr[j]+'</li>';
				var search_number=resultsDYKArr[j].split('^^')[0];
				search_number = search_number.replace(',','');
								var fav_width = parseInt($('#sm_image_text0').attr('src').split('?')[1].replace('w=',''))
	  			var fav_height =  parseInt($('#image0').attr('src').split('?')[1].replace('h=',''))	
				
				
						  $('#box'+search_number).clone().appendTo('#search_holder');
						  $('#search_holder').append($('#box'+search_number+'_text').clone()).html();
						  $('#search_holder').append($('#hidden'+search_number).clone()).html();
						  $('#search_holder #box'+search_number).attr('id' ,'box'+search_number+'_search');
						  $('#search_holder #box'+search_number+'_text').attr('id' ,'box'+search_number+'_text_search');
						  $('#search_holder #hidden'+search_number).attr('id' ,'hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number).attr('id' ,'hid'+search_number+'_search');
						  $('#search_holder #sm_image_text'+search_number).attr('id' ,'sm_image_text'+search_number+'_search')
						  $('#search_holder #sm_image'+search_number).attr('id' ,'sm_image'+search_number+'_search')
						  $('#search_holder #image'+search_number).attr('id' ,'image'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number).attr('id' ,'moreinfo'+search_number+'_search')
						  $('#search_holder #leftarrow'+search_number).attr('id' ,'leftarrow'+search_number+'_search')
						  $('#search_holder #rightarrow'+search_number).attr('id' ,'rightarrow'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #info-text'+search_number).attr('id' ,'info-text'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #otherpost'+search_number).attr('id' ,'otherpost'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #otherimage'+search_number).attr('id' ,'otherimage'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #it'+search_number).attr('id' ,'it'+search_number+'_search')
						  $('#search_holder #moreinfo'+search_number+'_search #favorite'+search_number).attr('id' ,'favorite'+search_number+'_search')
						  
						 $('#search_holder #box'+search_number+'_search a').attr('href' ,'#box'+search_number+'_text_search');
						  $('#search_holder #box'+search_number+'_text_search div.dyk_image a').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #box'+search_number+'_text_search div.dyk_text p a.link').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search div#moreinfo'+search_number+'_search a.infolink').attr('href' ,'#hidden'+search_number+'_search'+'moreinfo'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search div#moreinfo'+search_number+'_search div.info-text a').attr('href' ,'#hidden'+search_number+'_search');
						  $('#search_holder #hid'+search_number+'_search a.no-hover').attr('href' ,'#box'+search_number+'_text_search');
						  $('#search_holder #hid'+search_number+'_search  a.prev').attr('href' ,'#hidden'+(search_number-1)+'_search');
						  $('#search_holder #hid'+search_number+'_search  a.next').attr('href' ,'#hidden'+(search_number+1)+'_search');
						  $('#search_holder #moreinfo'+search_number+'_search #it'+search_number+'_search').css('height' ,fav_height)
						 
					
				}
/////////if there is a match (if the results arrays lengths are greater than 0), it adds the txtBlog variable to the "mcs4_container"div/////////////////
	/////////The "mcs4_container" div is part of a jquery plugin which creates the internal scrollbars//////////////////
	if(resultsDYKArr.length>0||containmeDYKArr.length>0)
	{
	
	
	$('#search_holder').show();
	$('#search_holder .square').addClass('on').removeClass('off').css({'opacity': '1'})
	}
	////////////////////////if not matches are found (and the results arrays lengths equal 0), then it adds the "Your search returned no results to the "mcs4_container" div/////////////////
	else
	{
		txtDYK="<h6>Your search returned no results. Please try a less specific search.</h6>"
		$('#search_holder').html(txtDYK);
		$('#search_holder').show();;
		$('#search_holder .square').addClass('on').removeClass('off').css({'opacity': '1'})
	
		}
  
	//checkSearch(listDYKArr[listDYKArr.length-1],value);
	return false;
}
	
