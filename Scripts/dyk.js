localStorage.removeItem('Firebug');	
localStorage.removeItem('FirebugLite');	

var dyk={};
dyk.count=0;
dyk.countArr =[];
dyk.divArr=[]
dyk.dateArrDYK=[];

dyk.pounder="";
dyk.nodesCol_0=[];
dyk.nodesCol_1=[];
dyk.nodesCol_2=[];
dyk.nodesCol_3=[];
dyk.nodesCol0=[];
dyk.nodesCol1=[];
dyk.nodesCol2=[];
dyk.nodesCol3=[];
dyk.ht=""
dyk.storageArr=[];
dyk.searchIndex=[]
dyk.collectionIndex=[];

function historyLoad(hash) {
	                                     	
			
		dyk.count=0;
		
	if(hash) {
		 if(hash =="" || hash=="home")
			{
			
			$('.square').addClass('on').removeClass('off');
			$('.square_text').addClass('off').removeClass('on');

			$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'})
			$('.header').show();
			$('#search_holder').hide();
			$('.searcher').hide();
			$('.search').show();
			$('.searchBox').hide()
			$('#dyk_squares').show();
			$('#favorites_holder').hide();
			}
		
		if($(window).width<400)
		{
		$('#thumbnail_close_btn').hide();
		$('#thumbnail_open_btn').hide();
					
		}
			
					
			var image4h='';
			var imageHeight=0;
		//////////////////////////////////////////////IE CODE//////////////////////////////////////////////////////	
			/////PROBLEM WITH IE IS UP HERE.....
			
			
			if((navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 8')) || (navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 7'))||(navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 6')))
			{
				
			
			$('.favorite').hide();
			$('.favorite_nav').hide();
			
			//$('#dyk_squares').css({'width':maxHeight333+'px'});
			$('.column').removeAttr('style');
			$('.header').show();
			 $('#dyk_squares').css({'margin-top':$('.hidden').height()+20})
			
			$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'});
			$('.square').removeClass('off').addClass('on').css({'opacity':'1'});
			$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':'0'});	
		
			   
			var count=0;
			//alert(count2);
			count=count+1;
			//$('.header').css({'position','relative'})
				
			
			$('.header div.icon').removeAttr('aria-hidden');
			$('.header div.icon').removeAttr('data-icon');
			$('.fontface .header div.icon').html('<img src="/images/dyk_logo.png" style="border:none;margin:5px" alt="Did You Know Logo"/>')
			$('.settings').css({'display':'none'});
			$('.header div.whaler').css({'display':'none'});
			$('.header .textcontainer').css({'display':'none'});
			$('.header div.text').css({'color':'#0057a5','font-size':'2.0em'});
			$('.header div.subtext').css({'color':'#189E81','font-size':'1.0em'});
			$('.header .links').css({'float':'left', 'color':'#189E81','margin-top':'5em'});
			$('.header .links ul li a').css({'display':'inline', 'list-style-type':'none','margin':'1.5em','font-size':'.9em'});
			$('.header .drop').css({'display':'block','font-size': '1.6em',    'margin': '0.8em', 'padding': '20px' });
			
			$('#dyk_squares').css({'margin':'auto','margin-top':$('.header').height()+20+'px', 'width': '800px'});
			$('.header .header_contain').css({'width':'800px', 'margin':'auto'})
			$('.header div.text').css({'color':'#0057a5','font-size':'2.0em'})
			$('.header div.subtext').css({'color':'#189E81','font-size':'1.0em'})
			$('.header .links').css({'float':'left', 'color':'#189E81','margin-top':'5em'})
			$('.header .links ul li a').css({'display':'inline', 'list-style-type':'none','margin':'1.5em','font-size':'.9em'})
			$('.header .drop').css({'display':'none' })
			$('#dyk_squares').css({'margin':'auto','margin-top':$('.header').height()+20+'px', 'width': '800px'});
			
			$('.square').css({'position':'static','margin':'7px', 'height':'130px'});
			$('.header .header_contain').css({'width':'800px', 'margin':'auto'})
			
			
			
						
				$(' div.fb' ).css( {'background-image':'url(/images/dyk/sprites_green_125.png)','float':'left', 'background-position':' 0 0','height':'24px','margin-right':' 2px','width':'22px', 'background-repeat':'no-repeat', 'margin-left':'2px', 'margin-bottom':'10px'})
				$(' div.tw' ).css({'float':'left','width':'22px','height':'24px','background-position':'-24px 0','margin-right':'1px','background-repeat':'no-repeat', 'margin-left':'2px', 'margin-bottom':'10px','background-image':'url(/images/dyk/sprites_green_125.png)'})
				$(' div.g').css({'float':'left','width':'22px','height':'24px','background-position':'-51px 0','margin-right':'1px','background-repeat':'no-repeat', 'margin-left':'2px', 'margin-bottom':'10px','background-image':'url(/images/dyk/sprites_green_125.png)'})
				$(' div pi' ).css( {'float':'left','width':'22px','height':'24px', 'background-position':'-79px 0','margin-right':'1px','background-repeat':'no-repeat', 'margin-left':'2px', 'margin-bottom':'10px','background-image':'url(/images/dyk/sprites_green_125.png)'})
				$(' div.tu').css({'float':'left','width':'22px', 'height':'24px', 'background-position':'-104px 0','background-repeat':'no-repeat', 'margin-left':'2px', 'margin-bottom':'10px','background-image':'url(/images/dyk/sprites_green_125.png)'})
					$('div.fb:hover ' ).css({'background-position':' 0 -37px'})
				$('div.tw:hover' ).css({'background-position':'-24px -37px'})
				$('div.g:hover').css({'background-position':'-51px -37px'})
				$('div pi:hover' ).css({'background-position':'-79px -37px'})
				$('div.tu:hover').css({'background-position':'-104px -37px'})
				
				$('div.info-text  div.close_tn').hide();
				$('#search_holder').css({'margin-top':'80px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				
				$('#thumbnails').css({'padding-top':'10px','padding-bottom':'10px','width':'127px', 'height':$(window).height() - $('.header').height()*2, 'top': $('.header').height()+20,'overflow':'hidden',  'bottom':'0px' ,'z-index': 200000, 'position':'fixed','cursor':'pointer','display':'none'})
				$('#thumbnails_open').css({ 'overflow-y':'scroll', 'height':'100%','overflow-x':'hidden'}).hide();
				$('#thumbnail_holder').css({'display':'block', 'margin-left':'10px'})
				$('#thumbnails_open_btn').show();
				$('#thumbnails_close_btn').hide();
				$('#thumbnails_close_btn').css({'left': '127px'})
				$('#presearch').css({'padding-top':'10px','padding-bottom':'10px','width':'127px', 'height':$(window).height() - $('.header').height()*2, 'top': $('.header').height()+20,'overflow':'hidden',  'bottom':'0px' ,'z-index': 200000, 'position':'fixed','cursor':'pointer','display':'none'})
				$('#presearch_open').css({ 'overflow-y':'scroll', 'height':'100%','overflow-x':'hidden'}).hide();
				$('#presearch_holder').css({'display':'block', 'margin-left':'10px'})
				$('#presearch_open_btn').show();
				$('#presearch_close_btn').hide();
				$('#presearch_close_btn').css({'right': '127px'})
			//$('.info').css({'postion:abs})
			//alert('IE');

				if(hash.match('box') && !hash.match('search'))
				{
				$('#message').hide();		
				//$('#thumbnail_holder').hide();
				//$('#dyk_squares').css({'width':'800px', 'margin':'auto'})
				$('.column').css({'margin':' 30px 25px 20px 0','width':' 172px'})
				//$('square').css({'width':'172px', 'margin':'7px', 'border-radius':'1.5px', 'border-width':'3px'})
				$('.square_text').css({'width':'0px',  'border-radius':'3px','border-width':'5px','min-height': '509px'})		
				$('.square_text p').css({'width':'300px','font-size':'1.1em', 'margin-top':'10px','margin-left':'15px' })
				$('.square_text ').css({'width':'300px','font-size':' 1.1em', 'margin-top':'15px', 'margin-left':'15px' })
				$('.square_text h3').css({'font-size':'1.6em','margin-top':'15px','margin-left':'15px'})
				$('.square_text a').css({'font-size':'1.1em','margin-top':'15px'})
				$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':0})
				$('.hidden').removeClass('on').addClass('off').css({'opacity':0})
				$('#dyk_squares').css({'margin-top': $('.header').height()+20})
				
				$('.square_text div').css({'overflow':'hidden'})
				
				
				$('.green_icon').css({'background-image': 'url(/images/dyk/sprites_green_125.png)'})
				$('.blue_icon').css({'background-image': 'url(/images/dyk/sprites_blue_125.png)'})
				
			
					var number = hash.replace('box','');
					number = number.replace('_text','');
					//$('#box'+number).flip({direction:'bt'},500);
					$('.square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
					$('.square_text p').css({'opacity':'0', 'width':'0px'});
					$('.square_text h3').css({'opacity':'0', 'width':'0px'});
	
					$('#'+hash).css({'max-height':'0px'});
					var minHeight = $('#'+hash).css('min-height');
					//$('.square_text').css({'min-height':'0px'});
					//alert(minHeight);
					//alert($('#'+hash).css('min-height');
					
					
					for(var i=0; i<$('.square').length; i++)
					{
						if(i+1<$('.square').length)
						{
						$('#box'+i).delay((i/$('.square').length)*100).animate({'width':'172px', 'margin':'7px', 'border-radius':'1.5px', 'border-width':'3px','height': '129px','top':i*$('.square').height()+'px', 'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)).animate({'top':'0px','right':'0px', 'opacity':1},250)
						
						
						}
						else
						{
						$('#box'+i).delay((i/$('.square')).length*100).animate({'width':'172px', 'margin':'7px', 'border-radius':'1.5px', 'border-width':'3px','height': '129px','top':$('.square').length*$('.square').height()+'px', 'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0').animate({'top':'0px','right':'0px','opacity':1},250)
						}
					}
					
					$('.hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					window.scrollTo(0,0);
				
					//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
							var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
							
							if(randomnumber%4==0)
							{
							$('#'+hash).css({'margin-right':'0px'})
							$('#'+hash).css({'float':'left'})
							$('.square').css({'float':'left'})
							
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-right':'15px'}).animate({'width':'360px','max-height':$(window).height(),'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
							$('.square_text p').animate({'opacity':'1', 'width':'330px', 'margin-left':'15px'},{queue:true,duration:1000});
							
							$('.square_text h3').animate({'opacity':'1', 'width':'330px', 'margin-left':'15px', 'margin-top':'15px'},{queue:true,duration:1000});
							}
							else if(randomnumber%4!=0)
							{
							//$('#'+hash).css({'margin-left':'0px'});
							$('#'+hash).css({'float':'right'});
							$('.square').css({'float':'right'});
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-left':'15px'}).animate({'width':'360px','max-height':$(window).height(),'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
							$('.square_text p').animate({'opacity':'1', 'width':'330px', 'margin-left':'15px'},{queue:true,duration:1000});
							
							$('.square_text h3').animate({'opacity':'1', 'width':'330px', 'margin-left':'15px', 'margin-top':'15px'},{queue:true,duration:1000});
							
							}
							$('#feature').insertBefore('hidden'+randomnumber);
							$('.square').removeClass('off').addClass('on').animate({'opacity':'1'});
						
							}
						
						////Add Javascript changes for two column layout for widths less than 700
			if(hash.match('search'))
				{
				
				//$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#dyk_squares').hide();
				$('#search_holder').show();
				$('#search_holder').css({'width':$('#dyk_squares').width()})
				$('#search_holder').css({'margin-top':'150px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'})
				$('#clear').show();
				if($(window).width()>699)
					{
						
						$('#message').hide();
						if(hash.match('box'))
						{
						$('#dyk_squares').css({'margin-top':$('.header').height()+20})
						$('#search_holder .social').show();
						$('search_holder').css({'margin-top': '80px'})
						$('.header').show();
						$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
						$('#search_holder .hidden').removeClass('on').addClass('off');
						$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':1});
						$('.dyk_text').css({'margin-left':'10px'})
						var number = hash.replace('box','');
						number = number.replace('_text_search','');
						
						$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
						$('#'+hash).css({'max-height':'0px'});
						var minHeight = $('#'+hash).css('min-height');
						$('#search_holder .square_text').css({'min-height':'0px'});
						
						for(var i=0; i<$('.square').length; i++)
						{
							if(i+1<$('#search_holder .square').length)
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)+'_search').animate({'top':'0px','right':'0px', 'opacity':1},250)
							
							
							}
							else
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0_search').animate({'top':'0px','right':'0px','opacity':1},250)
							}
						}
						$('#search_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
						window.scrollTo(0,0);
					;
						//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
								var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
								
								if(randomnumber%4==0)
								{
								$('#'+hash).css({'margin-right':'0px'})
								$('#'+hash).css({'float':'left'})
								$('#search_holder .square').css({'float':'left'})
								
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								else if(randomnumber%4!=0)
								{
								//$('#'+hash).css({'margin-left':'0px'});
								$('#'+hash).css({'float':'right'});
								$('#search_holder .square').css({'float':'right'});
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								$('#feature').insertBefore('hidden'+randomnumber);
								$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':'1'});
							}////Add Javascript changes for two column layout for widths less than 700
		
					}
					
				
				}
		
		
			if(hash=='sharks'){
				searchDYK('sharks', dyk.collectionIndex);
				//$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#dyk_squares').hide();
				$('#search_holder').show();
				$('#search_holder').css({'width':$('#dyk_squares').width()})
				$('#search_holder').css({'margin-top':'150px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'})
				$('#clear').show();
				if($(window).width()>699)
					{
						
						$('#message').hide();
						if(hash.match('box'))
						{
						$('#dyk_squares').css({'margin-top':$('.header').height()+20})
						$('#search_holder .social').show();
						$('search_holder').css({'margin-top': '80px'})
						$('.header').show();
						$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
						$('#search_holder .hidden').removeClass('on').addClass('off');
						$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':1});
						$('.dyk_text').css({'margin-left':'10px'})
						var number = hash.replace('box','');
						number = number.replace('_text_search','');
						
						$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
						$('#'+hash).css({'max-height':'0px'});
						var minHeight = $('#'+hash).css('min-height');
						$('#search_holder .square_text').css({'min-height':'0px'});
						
						for(var i=0; i<$('.square').length; i++)
						{
							if(i+1<$('#search_holder .square').length)
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)+'_search').animate({'top':'0px','right':'0px', 'opacity':1},250)
							
							
							}
							else
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0_search').animate({'top':'0px','right':'0px','opacity':1},250)
							}
						}
						$('#search_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
						window.scrollTo(0,0);
					;
						//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
								var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
								
								if(randomnumber%4==0)
								{
								$('#'+hash).css({'margin-right':'0px'})
								$('#'+hash).css({'float':'left'})
								$('#search_holder .square').css({'float':'left'})
								
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								else if(randomnumber%4!=0)
								{
								//$('#'+hash).css({'margin-left':'0px'});
								$('#'+hash).css({'float':'right'});
								$('#search_holder .square').css({'float':'right'});
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								$('#feature').insertBefore('hidden'+randomnumber);
								$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':'1'});
							}////Add Javascript changes for two column layout for widths less than 700
		
					}
					
				
				}
		
			
			if(hash.match('hidden') && !hash.match('moreinfo'))
			{
			$('#message').hide();
			$('#loader'+number).html('');
			$('.social').hide()
			$('.hiddenDiv').hide();
			$('#'+hash).show();
			$('div.hidden img').removeClass('bigimg')
			$('#'+hash+' img').addClass('bigimg');
			var boxy = hash.replace('hidden','#box');
			var number = hash.replace('_text','');
			var number = number.replace('hidden','');
			$('#dyk_squares').css({'margin-top': ($(window).height() -dyk.ht.replace('?h=',''))/2+$('.header').height()/2})
			$('.header').hide();
			boxy = boxy+'_text'
			boxTextClick(hash.replace('hidden',''),hash);
			$('#'+hash+' a div.info').show();
			$('#'+hash+' a div.info-on').hide();
			$('.scroller').fadeOut();
			//$('.blue_icon').hide();
			//console.log('#'+hash+' div.hidden div.infobox div.info-text')
			$('.share').show();
			$('.share').css({'cursor':'pointer'});
			$('.share').click(showSocial);
			$('.share').show();
			$('.pdf').show();
			$('.info-text').hide();
			$('.info').css({'top':'10px', 'left':'10px', 'position':'absolute'})
			$('div .hiddenDiv div.social div.close_tn').click(closeSocial);			
			}
			
			
			if(hash.match('moreinfo'))
			{
			$('#message').hide();
				
				$('div.hidden on img').removeClass('bigimg')
				$('#'+hashmac+'div.hidden on img').addClass('bigimg');
				var hashmac = hash.split('moreinfo')[0];
				var hashmac2 = hashmac.replace('den','');
				var moreinfo = 'moreinfo'+hash.split('moreinfo')[1];
				//console.log(moreinfo);
				var number = hashmac.replace('hidden','');
				$('#loader'+number).html('<img src="/images/loading.gif" alt="loading" style="border:none;z-index:0;"/>')
				image4h = $('#'+hashmac2+' img').attr('src');
				imageHeight = parseInt(image4h.split('?h=')[1]);
				var imageWidth = parseInt(image4h.split('?h=')[1])*1.5;
				$('#'+hashmac+' a div.info').hide();
				$('.square').removeClass('on').addClass('off');
				$('.hidden').animate({'opacity':1});
				$('.share').hide();
				$('.pdf').hide();
				$('.social').hide()
				$('.hiddenDiv .hidden .close_tn').show();
				
				$('#'+hashmac+' div.hidden div.infobox div.info-text').show().animate({'opacity':.9,'height':(imageHeight-2)},500)
				$('#loader'+number).show();
				if($('#otherpost'+number).is(':empty'))
				{
					$('#otherpost'+number).load('/php/livesearch_blog_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10] );
					$('#otherimage'+number).load('/php/livesearch_media_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10],function()
					
					{ 			   
					$('#loader'+number).hide();
					//$('.blue_icon').show();
					
					$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
					$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
					$('#'+hashmac+' div.hidden div.infobox div.info-text div.scroller').css({'width': ($('.hiddenDiv').width()/2.5)-80}).fadeIn();
					})
				}
				else
				{
				
				$('#loader'+number).hide();
				$('.blue_icon').show();
				$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
				$('#'+hashmac+' div.hidden div.infobox div.info-text div.scroller').css({'width': ($('.hiddenDiv').width()/2.5)-80}).fadeIn();
				$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
				
				}						
			}
						
		}
			
			//////////////////////////////////////////////////////////////END IE CODE///////////////////////////////////////////////////////
			
			
			
			
			else 
			{
				addLS();
				if($(window).width()>699)
				{
					$('#message').hide();
					if(hash=='sharks'){
				searchDYK('sharks', dyk.collectionIndex);
				//$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#dyk_squares').hide();
				$('#search_holder').show();
				$('#search_holder').css({'width':$('#dyk_squares').width()})
				$('#search_holder').css({'margin-top':'150px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'})
				$('#clear').show();
				if($(window).width()>699)
					{
						
						$('#message').hide();
						if(hash.match('box'))
						{
						$('#dyk_squares').css({'margin-top':$('.header').height()+20})
						$('#search_holder .social').show();
						$('search_holder').css({'margin-top': '80px'})
						$('.header').show();
						$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
						$('#search_holder .hidden').removeClass('on').addClass('off');
						$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':1});
						$('.dyk_text').css({'margin-left':'10px'})
						var number = hash.replace('box','');
						number = number.replace('_text_search','');
						
						$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
						$('#'+hash).css({'max-height':'0px'});
						var minHeight = $('#'+hash).css('min-height');
						$('#search_holder .square_text').css({'min-height':'0px'});
						
						for(var i=0; i<$('.square').length; i++)
						{
							if(i+1<$('#search_holder .square').length)
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)+'_search').animate({'top':'0px','right':'0px', 'opacity':1},250)
							
							
							}
							else
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0_search').animate({'top':'0px','right':'0px','opacity':1},250)
							}
						}
						$('#search_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
						window.scrollTo(0,0);
					;
						//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
								var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
								
								if(randomnumber%4==0)
								{
								$('#'+hash).css({'margin-right':'0px'})
								$('#'+hash).css({'float':'left'})
								$('#search_holder .square').css({'float':'left'})
								
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								else if(randomnumber%4!=0)
								{
								//$('#'+hash).css({'margin-left':'0px'});
								$('#'+hash).css({'float':'right'});
								$('#search_holder .square').css({'float':'right'});
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':'360px','opacity':'1', 'margin-top':'0px'},{queue:true,duration:1000})
								
								}
								$('#feature').insertBefore('hidden'+randomnumber);
								$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':'1'});
							}////Add Javascript changes for two column layout for widths less than 700
		
					}
					
				
				}
		
					if(hash.match('box') && !hash.match('fav'))
					{
					$('#search_holder').hide();
					$('.searcher').hide();
					$('.search').show();
					$('.searchBox').hide()				
					$('#dyk_squares').show();
					$('#favorites_holder').hide();
					$('.dyk_text .social').show();
					$('.header').show();
					$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'});
					$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
					$('.hidden').removeClass('on').addClass('off');
					$('.square').removeClass('off').addClass('on').animate({'opacity':1});
					var number = hash.replace('box','');
					number = number.replace('_text','');
					
					$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('.square_text').removeAttr('style');
					$('#'+hash).css({'max-height':'0px'});
					var minHeight = $('#'+hash).css('min-height');
					$('.square_text').css({'min-height':'0px'});
					
					for(var i=0; i<$('.square').length; i++)
					{
						//var randomnumber2 = Math.floor(Math.random()*($('.square').length))
						//console.log(randomnumber2);
						if(i+1<$('.square').length)
						{
						$('#box'+i).delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)).animate({'top':'0px','right':'0px', 'opacity':1},250)
						
						
						}
						else
						{
						$('#box'+i).delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0').animate({'top':'0px','right':'0px','opacity':1},250)
						}
					}
					$('.hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					window.scrollTo(0,0);
				;
					//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
							var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
							
							if(randomnumber%4==0)
							{
							$('#'+hash).css({'margin-right':'0px'})
							$('#'+hash).css({'float':'left'})
							$('.square').css({'float':'left'})
							
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
							
							}
							else if(randomnumber%4!=0)
							{
							//$('#'+hash).css({'margin-left':'0px'});
							$('#'+hash).css({'float':'right'});
							$('.square').css({'float':'right'});
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
							
							}
							$('#feature').insertBefore('hidden'+randomnumber);
							$('.square').removeClass('off').addClass('on').animate({'opacity':'1'});
						}////Add Javascript changes for two column layout for widths less than 700
	
				}
				else if($(window).width()>=400 &&$(window).width()<699 )
				{
					window.scrollTo(10,0);
					$('#message').hide();
					if(hash.match('box') && !hash.match('fav'))
					{
					$('#search_holder').hide();
					$('.searcher').hide();
					$('.search').show();
					$('.searchBox').hide()				
															
					$('#dyk_squares').show();
					$('#favorites_holder').hide();
					$('.dyk_text .social').show();
					$('.header').show();
					$('.hidden').removeClass('on').addClass('off');
					$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'});
					
					var number = hash.replace('box','');
					number = number.replace('_text','');
					
					$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('.square').removeClass('off').addClass('on').css({'opacity':'1', 'margin': '5px'});
					$('.hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					
							if(number%2==0)
							{
							//$('.square').css({'margin':(maxHeight333)*.005+'px'});
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top': '10PX'},500);
							
							$('#feature').insertBefore('#box0');		
								$('#box0').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box1').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box2').animate({'margin-top':$('#'+hash).height()+10+'px'});
							
							}
							else if(number%2==1)
							{
							$('#'+hash).appendTo('#feature').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top':  '10PX'},500);
							$('#feature').insertBefore('#box0');		
								$('#box0').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box1').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box2').animate({'margin-top':$('#'+hash).height()+10+'px'});
							
							}						
						}
					}
				
						
		
				else 
				{
				$('#message').show();
				$('#message').css({'width': $(window).width()-15})
				if(hash.match('box') && !hash.match('fav'))
					{
					$('#search_holder').hide();
					$('.searcher').hide();
					$('.search').show();
					$('.searchBox').hide();					
					$('#dyk_squares').show();
					$('#favorites_holder').hide();
					
					$('.header').show();
					$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'});
					$('.hidden').removeClass('on').addClass('off');
					var number = hash.replace('box','');
					number = number.replace('_text','');
					
					$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('.square').removeClass('off').addClass('on').css({'opacity':'1'});
					//$('.square_text').removeClass('off').addClass('on').css({'opacity':'1'});
					$('.hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					$('#'+hash).insertBefore('#box0');
					//$('#'+hash.replace('_text','')).removeClass('on').addClass('off');
					$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						if(number%2==0)
							{
							$('#'+hash).removeClass('off').addClass('on').css({'width':'180px'}).animate({'opacity':'1','left':($(window).width() - $('#'+hash).width())/2+'px','margin-top': '10px'},500);
							
							$('#box0').animate({'margin-top':$('#'+hash).height()+10+'px'});
							$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						
							}
							else if(number%2!=0)
							{
							$('#'+hash).removeClass('off').addClass('on').css({'width':'180px'}).animate({'opacity':'1','left':($(window).width() - $('#'+hash).width())/2+'px','margin-top': '10px'},500);
							$('#box0').animate({'margin-top':$('#'+hash).height()+10+'px'});
							$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						
							}
						}
					window.scrollTo(10,0)
								
					}
				
			
	
		////////////////////////////////Hashes for Favorites/////////////////////////////////
			
			if(hash=="favorites")
				{
				$('#search_holder').hide();
				$('.searcher').hide();
				$('.search').show();
					$('.searchBox').hide()
				//$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':'0'});
				//$('.square').removeClass('on').addClass('off').css({'opacity':'0'});
				//$('.square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#search_holder').hide();
				$('.searcher').hide();
				$('.search').show();
				$('#favorites_holder').show();
				$('#favorites_holder').css({'width':$('#dyk_squares').width()})
				$('#favorites_holder').css({'margin-top': $('.header').height()+20+'px', 'margin-left': ($(window).width()-$('#favorites_holder').width())/2 })
				$('.square').removeClass('off').addClass('on').animate({'opacity': 1})
				$('.hiddenDiv').removeClass('on').addClass('off')
				$('.hidden').removeClass('on').addClass('off').animate({'opacity': 0})
				$('.goto').hide();
				$('.header').show();
				$('#clear').show();
				$('#dyk_squares').hide();
				}
			
			if(hash.match('fav'))
				{
				
				//$('#favorites_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#dyk_squares').hide();
				$('#favorites_holder').show();
				$('#favorites_holder').css({'width':$('#dyk_squares').width()})
				$('#favorites_holder').css({'margin-top': $('.header').height()+20+'px', 'margin-left': ($(window).width()-$('#favorites_holder').width())/2 })
				$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'})
				$('#clear').show();
				if($(window).width()>699)
					{
						
						$('#message').hide();
						if(hash.match('box'))
						{
						
						$('#favorites_holder .social').show();
						
						$('.header').show();
						$('#favorites_holder').css({'margin-top':$('.header').height()+20+'px'});
						$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
						$('#favorites_holder .hidden').removeClass('on').addClass('off');
						$('#favorites_holder .square').removeClass('off').addClass('on').animate({'opacity':1});
						var number = hash.replace('box','');
						number = number.replace('_text_fav','');
						
						$('#favorites_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
						$('#'+hash).css({'max-height':'0px'});
						var minHeight = $('#'+hash).css('min-height');
						$('#favorites_holder .square_text').css({'min-height':'0px'});
						
						for(var i=0; i<$('.square').length; i++)
						{
							if(i+1<$('#favorites_holder .square').length)
							{
							$('#favorites_holder #box'+i+'_fav').delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)+'_fav').animate({'top':'0px','right':'0px', 'opacity':1},250)
							
							
							}
							else
							{
							$('#favorites_holder #box'+i+'_fav').delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0_fav').animate({'top':'0px','right':'0px','opacity':1},250)
							}
						}
						$('#favorites_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
						window.scrollTo(0,0);
					;
						//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
								var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
								
								if(randomnumber%4==0)
								{
								$('#'+hash).css({'margin-right':'0px'})
								$('#'+hash).css({'float':'left'})
								$('#favorites_holder .square').css({'float':'left'})
								
								$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
								
								}
								else if(randomnumber%4!=0)
								{
								//$('#'+hash).css({'margin-left':'0px'});
								$('#'+hash).css({'float':'right'});
								$('#favorites_holder .square').css({'float':'left'});
								$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
								
								}
								$('#feature').insertBefore('hidden'+randomnumber);
								$('#favorites_holder .square').removeClass('off').addClass('on').animate({'opacity':'1'});
							}////Add Javascript changes for two column layout for widths less than 700
		
					}
					
				else if($(window).width()>400 &&$(window).width()<699 )
				{
					window.scrollTo(10,0);
					
					$('#message').hide();
					if(hash.match('box'))
					{
					
					$('#favorites_holder .social').show();
					$('.header').show();
					$('#favorites_holder .hidden').removeClass('on').addClass('off');
					$('#favorites_holder').css({'margin-top':$('.header').height()+20+'px'});
					$('.square_text').removeClass('on').addClass('off').css({'opacity':0})
					$('.square').css({'margin-top':'0px'})
					var number = hash.replace('box','');
					number = number.replace('_text_fav','');
					$('#favorites_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('#favorites_holder .square').removeClass('off').addClass('on').css({'opacity':'1'});
					$('#favorites_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					//$('#favorites_holder .square').animate({'margin-top': $('#'+hash).height()-10})
							$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top': '10PX'},500);
							
								$('#box'+localStorage.key(0).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box'+localStorage.key(1).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box'+localStorage.key(2).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+10+'px'});
								
							}
							else if(number%2==1)
							{
							$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top':  '10PX'},500);
								$('#box'+localStorage.key(0).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+40+'px'});
								$('#box'+localStorage.key(1).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+10+'px'});
								$('#box'+localStorage.key(2).replace('key','')+'_fav').animate({'margin-top':$('#'+hash).height()+10+'px'});
							}
								
					}
				else 
				{
				
				$('#clear').show();
				$('#message').show();
				$('#message').css({'width': $(window).width()-15})
				if(hash.match('box'))
					{
					$('#dyk_squares').hide();
					$('#favorites_holder').show();
					
					$('.header').show();
					$('#favorites_holder').css({'margin-top':$('.header').height()+20+'px'});
					$('.hidden').removeClass('on').addClass('off');
					var number = hash.replace('box','');
					number = hash.replace('_fav','');
					number = number.replace('_text','');
					$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('.square').removeClass('off').addClass('on').css({'opacity':'1'});
					$('.hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					$('#'+hash).insertBefore('#box0_fav');
					//$('#'+hash.replace('_text','')).removeClass('on').addClass('off');
					$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						
						if(number%2==0)
							{
							
							$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'width':'180px'}).animate({'opacity':'1','left':($(window).width() - $('#'+hash).width())/2+'px','margin-top': '10px'},500);
							
							$('#box'+localStorage.key(0).replace('key','')+'_fav').animate({'margin-top':  $('#'+hash).height()+10})
							$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						
							}
							else if(number%2!=0)
							{
							$('#'+hash).appendTo('#feature_fav').removeClass('off').addClass('on').css({'width':'180px'}).animate({'opacity':'1','left':($(window).width() - $('#'+hash).width())/2+'px','margin-top': '10px'},500);
							$('#box'+localStorage.key(0).replace('key','')+'_fav').animate({'margin-top': $('#'+hash).height()+10})
							$('.square').animate({'margin-left': ($(window).width() - $('.square').width())/4+'px'})	
						
							}
						}
					window.scrollTo(10,0)
								
					}	
					
				}	
			
		
		
		if(hash.match('search'))
				{
				
				//$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0', 'width':'0px'});
				$('#dyk_squares').hide();
				$('#search_holder').show();
				$('#search_holder').css({'width':$('#dyk_squares').width()})
				$('#search_holder').css({'margin-top': $('.header').height()+20+'px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				$('.square_text').removeClass('on').addClass('off').css({'opacity':'0'})
				$('#clear').show();
				if($(window).width()>699)
					{
						
						$('#message').hide();
						if(hash.match('box'))
						{
						
						$('#search_holder .social').show();
						
						$('.header').show();
						$('#search_holder').css({'margin-top':$('.header').height()+20+'px'});
						$('#hiddenHolder').css({'width':$('#dyk_squares').width()})
						$('#search_holder .hidden').removeClass('on').addClass('off');
						$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':1});
						var number = hash.replace('box','');
						number = number.replace('_text_search','');
						
						$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
						$('#'+hash).css({'max-height':'0px'});
						var minHeight = $('#'+hash).css('min-height');
						$('#search_holder .square_text').css({'min-height':'0px'});
						
						for(var i=0; i<$('.square').length; i++)
						{
							if(i+1<$('#search_holder .square').length)
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square').length)*100).animate({'right':i*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box'+(i+1)+'_search').animate({'top':'0px','right':'0px', 'opacity':1},250)
							
							
							}
							else
							{
							$('#search_holder #box'+i+'_search').delay((i/$('.square')).length*100).animate({'right':$('.square').length*$('.square').width()+'px', 'opacity':0}, 250).delay(250).insertAfter('#box0_search').animate({'top':'0px','right':'0px','opacity':1},250)
							}
						}
						$('#search_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
						window.scrollTo(0,0);
					;
						//$('#'+hash).css({'min-height':$('.square').height()*3.13+'px'})
								var randomnumber = Math.floor(Math.random()*($('.square').length-4)/2)*2;
								
								if(randomnumber%4==0)
								{
								$('#'+hash).css({'margin-right':'0px'})
								$('#'+hash).css({'float':'left'})
								$('#search_holder .square').css({'float':'left'})
								
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-right': $('.square').width()/16+'px'}).animate({'max-height':$(window).height()*2,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
								
								}
								else if(randomnumber%4!=0)
								{
								//$('#'+hash).css({'margin-left':'0px'});
								$('#'+hash).css({'float':'right'});
								$('#search_holder .square').css({'float':'right'});
								$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-left': $('.square').width()/16}).animate({'max-height':$(window).height()*w,'width':$('#'+hash).width()*2,'opacity':'1','margin-top':'0px'},{queue:true,duration:1000})
								
								}
								$('#feature').insertBefore('hidden'+randomnumber);
								$('#search_holder .square').removeClass('off').addClass('on').animate({'opacity':'1'});
							}////Add Javascript changes for two column layout for widths less than 700
		
					}
					
				else if($(window).width()>400 &&$(window).width()<699 )
				{
					window.scrollTo(10,0);
					
					$('#message').hide();
					if(hash.match('box'))
					{
					
					$('#search_holder .social').show();
					$('.header').show();
					$('#search_holder .hidden').removeClass('on').addClass('off');
					$('#search_holder').css({'margin-top':$('.header').height()+20+'px'});
					$('.square_text').removeClass('on').addClass('off').css({'opacity':0})
					$('.square').css({'margin-top':'0px'})
					var number = hash.replace('box','');
					number = number.replace('_text_search','');
					$('#search_holder .square_text').removeClass('on').addClass('off').css({'opacity':'0'});
					$('#search_holder .square').removeClass('off').addClass('on').css({'opacity':'1'});
					$('#search_holder .hiddenDiv').removeClass('on').addClass('off').animate({'opacity':'1'},500);
					//$('#search_holder .square').animate({'margin-top': $('#'+hash).height()-10})
							$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top': '10PX'},500);
							
								
							}
							else if(number%2==1)
							{
							$('#'+hash).appendTo('#feature_search').removeClass('off').addClass('on').css({'margin-top': '50px'}).animate({'opacity':'1','margin-top':  '10PX'},500);
								}
								
					}
	
				}
		
			if(hash.match('hidden'))
			{
				$('.goto').hide();
				$('#dyk_squares').css({'margin-top': ($(window).height() -parseInt(dyk.ht.replace('?h=','')))/2})			
				
			
				$('#clear').hide();
				if(hash.match('_fav') && !hash.match('moreinfo')&& !hash.match('_search'))
					{
					
					if($(window).width()>400)
						{
						$('#dyk_squares').hide();
						$('#favorites_holder').show();
						$('#search_holder').hide();
						$('.header').hide();
						
						$('#favorites_holder div.hidden on img').removeClass('bigimg')
						$('#favorites_holder #'+hash+'div.hidden on img').addClass('bigimg');
						$('#favorites_holder #loader'+number).html('');
						$('#favorites_holder .infobox .social').hide()
						//$('#favorites_holder .hiddenDiv').show()
						$('#favorites_holder #'+hash).show();
						$('#favorites_holder div.hidden img').removeClass('bigimg')
						$('#favorites_holder #'+hash+' img').addClass('bigimg');
						var boxy = hash.replace('hidden','#box');
						var number = hash.replace('_text','');
						var number = number.replace('hidden','');
						$('#favorites_holder').css({'margin-top': $('#dyk_squares').css('margin-top')})
						boxy = boxy+'_text'
						boxTextClick(hash.replace('hidden',''), hash);
						$('#favorites_holder #'+hash+' a div.info').show();
						$('#favorites_holder #'+hash+' a div.info-on').hide();
						$('#favorites_holder .scroller').fadeOut();
						$('#favorites_holder div.hiddenDiv div.hidden div.infobox div.info-text').animate({opacity:0},200).css({'height':imageHeight,'overflow-y':'hidden'}).hide();
						$('.share').show();
						$('.share').click(showSocial);
						$('div .hiddenDiv div.social div.close_tn').click(closeSocial);
						$('.pdf').show();
						$('.favorite').hide();
						
						}
					
					}	
				if(hash.match('_search') && !hash.match('moreinfo')&& !hash.match('_fav'))
					{
					
					
					if($(window).width()>400)
						{
						$('#dyk_squares').hide();
						$('#favorites_holder').hide();
						$('#search_holder').show();
						
						$('.header').hide();
						
						$('#search_holder div.hidden on img').removeClass('bigimg')
						$('#search_holder #'+hash+'div.hidden on img').addClass('bigimg');
						$('#search_holder #loader'+number).html('');
						$('#search_holder .infobox .social').hide()
						//$('#favorites_holder .hiddenDiv').show()
						$('#search_holder #'+hash).show();
						$('#search_holder div.hidden img').removeClass('bigimg')
						$('#search_holder #'+hash+' img').addClass('bigimg');
						var boxy = hash.replace('hidden','#box');
						var number = hash.replace('_text','');
						var number = number.replace('hidden','');
						$('#search_holder').css({'margin-top': $('#dyk_squares').css('margin-top')})
						boxy = boxy+'_text'
						boxTextClick(hash.replace('hidden',''), hash);
						$('#search_holder #'+hash+' a div.info').show();
						$('#search_holder #'+hash+' a div.info-on').hide();
						$('#search_holder .scroller').fadeOut();
						$('#search_holder div.hiddenDiv div.hidden div.infobox div.info-text').animate({opacity:0},200).css({'height':imageHeight,'overflow-y':'hidden'}).hide();
						$('.share').show();
						$('.share').click(showSocial);
						$('div .hiddenDiv div.social div.close_tn').click(closeSocial);
						$('.pdf').show();
						$('.favorite').show();
						
						}
					
						$('.favorite').click(function(){
	
						
						var id= ($(this).attr('id'));
						var number = id.replace('favorite','');
						 number = number.replace('_search','');
						var box = 'box'+number
						var boxtext = 'box'+number+'_text';
						var hidden = 'hidden'+number;
						dyk.storageArr.push(box+':'+boxtext+':'+hidden);
						var fav_box = 'box'+number
						var fav_box_html = $('#'+fav_box).html()
						var fav_url = fav_box_html.split('src="')[1].split('title="')[0].replace(/ /g,'');
						fav_url = fav_url.split('?')[0]; 
						var fav_box_style = $('#'+fav_box).attr('style');
						var fav_text = $('#'+boxtext).html();
						var fav_hidden = $('#'+hidden).html();
		
		runClickCheckDYK(box, 'on', fav_url);
		addLS();
											
		
				
		$('.goto').fadeIn().delay(3000).fadeOut();
		
		})	
					}	
				
				if(!hash.match('_fav') && !hash.match('moreinfo')&&!hash.match('_search'))
					{
						
						if($(window).width()>400)
						{
						$('#dyk_squares').show();
						$('#favorites_holder').hide();
						$('#search_holder').hide();
						$('.header').hide();
						$('div.hidden on img').removeClass('bigimg')
						$('#'+hash+'div.hidden on img').addClass('bigimg');
						$('#loader'+number).html('');
						$('.infobox .social').hide()
						$('.hiddenDiv').hide();
						$('#'+hash).show();
						$('div.hidden img').removeClass('bigimg')
						$('#'+hash+' img').addClass('bigimg');
						var boxy = hash.replace('hidden','#box');
						var number = hash.replace('_text','');
						var number = number.replace('hidden','');
						$('#dyk_squares').css({'margin-top': ($(window).height()-parseInt(dyk.ht.replace('?h=','')))/2})
						boxy = boxy+'_text'
						boxTextClick(hash.replace('hidden',''),hash);
						$('#'+hash+' a div.info').show();
						$('#'+hash+' a div.info-on').hide();
						$('.scroller').fadeOut();
						//$('.blue_icon').hide();
						$('div.hiddenDiv div.hidden div.infobox div.info-text').animate({opacity:0},200).css({'height':imageHeight }).hide();
						//console.log('#'+hash+' div.hidden div.infobox div.info-text')
						$('.share').show();
						$('.share').click(showSocial);
						$('div .hiddenDiv div.social div.close_tn').click(closeSocial);
						$('.pdf').show();
						$('.favorite').show();
						}
					}
					
					
				
				 if(hash.match('_fav') && hash.match('moreinfo')&&!hash.match('_search'))
				 {
					$('#clear').hide();
					
					if($(window).width()>400)
					{
						var hashmac = hash.split('moreinfo')[0];
						var hashmac2 = hashmac.replace('den','');
						var moreinfo = 'moreinfo'+hash.split('moreinfo')[1];
						
						var number = hashmac.replace('hidden','');
						number = number.replace('_fav','');
						//$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':0})
						$('#'+hashmac).removeClass('off').addClass('on').css({opacity:1})
						$('#'+hashmac2).removeClass('off').addClass('on').css({opacity:1})
						$('#'+hashmac).show();
						$('#'+hashmac2).show();	
						
						$('#it'+number+'_fav .close_tn').hide();
							
						$('#dyk_squares').hide();
						$('#favorites_holder').show();
						
						$('#favorites_holder div.hidden on img').removeClass('bigimg');
						$('#favorites_holder #hid'+number+' img').addClass('bigimg');
						
						$('#favorites_holder #loader'+number).html('<img src="/images/loading.gif" alt="loading" style="border:none;z-index:0;"/>')
						image4h = $('#'+hashmac2+' img').attr('src');
						imageHeight = parseInt(image4h.split('?h=')[1]);
						
						var imageWidth = parseInt(image4h.split('?h=')[1])*1.5;
						$('div.info').hide();
						
						$('.header').hide();
						$('.square').removeClass('on').addClass('off');
						$('.hidden').animate({'opacity':1});
						$('.share').hide();
						$('.pdf').hide();
						$('.favorite').hide();
						$('.social').hide()
						$('#it'+number+'_fav').show().css({'opacity':1})
						$('#'+hashmac+'_fav div.hidden div.infobox div.info-text').show().css({'overflow-y':'scroll'}).animate({'width': imageWidth/2.5, 'opacity':.9,'height':(imageHeight-2)},500)
						
						$('#loader'+number).show();
							if($('#otherpost'+number).is(':empty'))
							{
							
								$('#otherpost'+number+'_fav').load('/php/livesearch_blog_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10] );
								$('#otherimage'+number+'_fav').load('/php/livesearch_media_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10],function()
								
								{ 			
								 
								$('.loader').hide();
								//$('.blue_icon').show();
								$('#it'+number+'_fav .close_tn').show();
								$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
								$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
								$('#'+hashmac+' div.hidden div.infobox div#it'+number+'_fav div.scroller').css({'width': (imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
								})
							}
							else
							{
							
							$('#favorites_holder #loader'+number).hide();
							$('.blue_icon').show();
							$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
							$('#'+hashmac+' div.hidden div.infobox div.info-text div.scroller').css({'width':(imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
							$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
							$('#it'+number+'_fav .close_tn').show();
							}	
						}
				 }
				 if(!hash.match('_search') && hash.match('moreinfo')&&!hash.match('_fav'))
				 {
					$('#clear').hide();
					
					if($(window).width()>400)
					{
						var hashmac = hash.split('moreinfo')[0];
						var hashmac2 = hashmac.replace('den','');
						var moreinfo = 'moreinfo'+hash.split('moreinfo')[1];
						
						var number = hashmac.replace('hidden','');
						number = number.replace('_search','');
						//$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':0})
						$('#'+hashmac).removeClass('off').addClass('on').css({opacity:1})
						$('#'+hashmac2).removeClass('off').addClass('on').css({opacity:1})
						$('#'+hashmac).show();
						$('#'+hashmac2).show();	
						
						$('#it'+number+'_search .close_tn').hide();
						$('.header').hide();	
						$('#favorites_holder').hide();
						$('#search_holder').hide();
						
						$('#dyk_squares').show();
						
						$('#dyk_squares div.hidden on img').removeClass('bigimg');
						$('#dyk_squares #hid'+number+' img').addClass('bigimg');
						
						$('#dyk_squares #loader'+number).html('<img src="/images/loading.gif" alt="loading" style="border:none;z-index:0;"/>')
						image4h = $('#'+hashmac2+' img').attr('src');
						imageHeight = parseInt(image4h.split('?h=')[1]);
						//console.log(imageHeight);
						var imageWidth = parseInt(image4h.split('?h=')[1])*1.5;
						$('div.info').hide();
						
						$('.square').removeClass('on').addClass('off');
						$('.hidden').animate({'opacity':1});
						$('.share').hide();
						$('.pdf').hide();
						$('.favorite').hide();
						$('.social').hide()
						$('#it'+number).show().css({'opacity':1})
						$('#'+hashmac+' div.hidden div.infobox div.info-text').show().css({'overflow-y':'scroll', 'overflow-x':'none'}).animate({'width': imageWidth/2.5, 'opacity':.9,'height':(imageHeight-2)},500)
						//alert($('#'+hashmac+' div.hidden div.infobox div.info-text').attr('style'));
						$('#loader'+number).show();
							if($('#otherpost'+number).is(':empty'))
							{
							
								$('#otherpost'+number).load('/php/livesearch_blog_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10] );
								$('#otherimage'+number).load('/php/livesearch_media_dyk.php?q='+dyk.dateArrDYK[number].split('@@')[10],function()
								
								{ 			
								 
								$('.loader').hide();
								//$('.blue_icon').show();
								$('#it'+number+' .close_tn').show();
								$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
								$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
								$('#'+hashmac+' div.hidden div.infobox div#it'+number+' div.scroller').css({'width': (imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
								})
							}
							else
							{
							
							$('#dyk_squares #loader'+number).hide();
							$('.blue_icon').show();
							$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
							$('#'+hashmac+' div.hidden div.infobox div.info-text div.scroller').css({'width':(imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
							$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
							$('#it'+number+' .close_tn').show();
							}	
						}
				 }
					 if(hash.match('_search') && hash.match('moreinfo')&&!hash.match('_fav'))
				 	{
						
						$('#clear').hide();
					
						if($(window).width()>400)
						{
							var hashmac = hash.split('moreinfo')[0];
							var hashmac2 = hashmac.replace('den','');
							var moreinfo = 'moreinfo'+hash.split('moreinfo')[1];
							
							var number = hashmac.replace('hidden','');
							number = number.replace('_search','');
							//$('.hiddenDiv').removeClass('on').addClass('off').css({'opacity':0})
							$('#'+hashmac).removeClass('off').addClass('on').css({opacity:1})
							$('#'+hashmac2).removeClass('off').addClass('on').css({opacity:1})
							$('#'+hashmac).show();
							$('#'+hashmac2).show();	
							
							$('#it'+number+'_search .close_tn').hide();
								
							$('#dyk_squares').hide();
							$('#search_holder').show();
							$('.header').hide();	
							$('#search_holder div.hidden on img').removeClass('bigimg');
							$('#search_holder #hid'+number+' img').addClass('bigimg');
							
							$('#search_holder #loader'+number).html('<img src="/images/loading.gif" alt="loading" style="border:none;z-index:0;"/>')
							image4h = $('#'+hashmac2+' img').attr('src');
							imageHeight = parseInt(image4h.split('?h=')[1]);
							
							var imageWidth = parseInt(image4h.split('?h=')[1])*1.5;
							$('div.info').hide();
							
							$('.square').removeClass('on').addClass('off');
							$('.hidden').animate({'opacity':1});
							$('.share').hide();
							$('.pdf').hide();
							$('.favorite').hide();
							$('.social').hide()
							$('#it'+number+'_search').show().css({'opacity':1})
							$('#'+hashmac+' div.hidden div.infobox div.info-text').show().css({'overflow-y':'scroll'}).animate({'width': imageWidth/2.5, 'opacity':.9,'height':(imageHeight-2)},500)
							//console.log('#'+hashmac+' div.hidden div.infobox div.info-text')
							$('#loader'+number).show();
								if($('#otherpost'+number).is(':empty'))
								{
								
									$('#otherpost'+number+'_search').load('/php/livesearch_blog_dyk.php?q='+dyk.searchIndex[number].split('@@')[5].replace('%%','') );
									$('#otherimage'+number+'_search').load('/php/livesearch_media_dyk.php?q='+dyk.searchIndex[number].split('@@')[5].replace('%%',''),function()
									
									{ 			
									 
									$('.loader').hide();
									//$('.blue_icon').show();
									$('#it'+number+'_search .close_tn').show();
									$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
									$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
									$('#'+hashmac+' div.hidden div.infobox div#it'+number+'_search div.scroller').css({'width': (imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
									})
								}
								else
								{
								
								$('#search_holder #loader'+number).hide();
								$('.blue_icon').show();
								$('#'+hashmac).removeClass('off').addClass('on').animate({'opacity':1})
								$('#'+hashmac+' div.hidden div.infobox div.info-text div.scroller').css({'width':(imageWidth/2.5)-(imageWidth*.12) }).fadeIn();
								$('#'+hashmac+' a div.info-on').css({'margin-left':($('.hiddenDiv').width()/2.5) - 50+'px'}).show();
								$('#it'+number+'_search .close_tn').show();
								}	
							}
				
				
					
					}
					
				 }
				
				
			
				if(hash=="searcher")
				{
				$('#search_holder').show();
				$('.searchBox').show();
				$('.searcher').show();
				$('#dyk_squares').hide();
				$('#favorites_holder').hide();
				$('#search_holder').css({'width':$('#dyk_squares').width()})
				$('#search_holder').css({'margin-top': $('.header').height()+20+'px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 })
				$('.search').hide();
				$('.header').show();
				$('#search_holder .square').addClass('on').removeClass('off').css({'opacity':'1'});
				}
				if(hash=="search")
				{
				$('.search').hide();
				$('.searcher').show();
				$('.searchBox').show();
				$('#favorites_holder').hide();
				$('#search_holder').html('<h6>Please enter your search terms</h6>');
				$('#search_holder').css({'width':$('#dyk_squares').width()});
				$('#search_holder').css({'margin-top': $('.header').height()+20+'px', 'margin-left': ($(window).width()-$('#search_holder').width())/2 });
				}
				
				else if(hash =="#" || hash=="home")
				{
				$('.square').addClass('on').removeClass('off');
				$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'})
				$('.header').show();
				$('#search_holder').hide();
				$('.searcher').hide();
				$('.search').show();
				$('.searchBox').hide()
				$('#dyk_squares').show();
				$('#favorites_holder').hide();
				}			
		
				
				
						
		

	}	
		
	$('.square').css({'margin-top':0});
	$('.header_contain').css({'width': $('#dyk_squares').width()});	
			
		
	}
	
	

}
 
var pphoto=""
var pcaption = ""
var pcaption = ""
var hcaption = ""
var pblogtitle = ""
var pblogurl = ""
var pphotocredit = ""
var pdate =""
var pdescription = ""
var pshortdescription = ""	
var ppdf = ""
var wwidth = $(window).width()	;

var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 700;		
						
function setUpData(){
	
	
	var txt1="";
	var txt2="";
	var pound="#";
	arr=[]
	
	 //////////////uses the Google Ajax Feed API to bring in RSS feeds b/c hosting environment doesn't allow for other proxy types.///////////////  
	
	url= "https://spreadsheets.google.com/feeds/list/0Ak_vKEBczgcYdDdoTkZFb0lMMVUzdzFBOUZaWllxeUE/1/public/values";
	
	 $.getJSON(url+'?alt=json', function (response){	
	
	
			
			
			var rssentries=response.feed.entry;
			
			if(rssentries.length>0)
			{
				
			//////////////////////////////Checks to make sure that the feed has loaded correctly///////////////////////////////////
			
			
			///////////////////////////////due to the way that these feeds are written with items that involve 'NameSpaces' variables are declared based on browser types as IE deals differently with 'NameSpaces' differently than the other browsers.//////////////////////////////	
				
				///////////////////////////////loops through the feed and creates variables that are added to the txt1 and txt2 variables///////////////////////////
					for (var t=0; t<rssentries.length; t++)
					{
					/////////////////checks if the following cells of the spreadsheet are empty/null.  If they are it adds a '#' symbol.  If not, it creates variables./////////////////
						if(response.feed.entry[t].gsx$photourl.$t==null)
						{
							 dyk.photo="#";
						}
						else
						{
						dyk.photo = response.feed.entry[t].gsx$photourl.$t.replace(/\//g,'\/');
						
						}
						if(response.feed.entry[t].gsx$photocaption.$t==null)
						{
						dyk.caption="#";
						
						}
						else
						{
						dyk.caption = response.feed.entry[t].gsx$photocaption.$t.replace(/<p>/g,"");
						dyk.caption = dyk.caption.replace(/<\/p>/g,"");
						dyk.caption = dyk.caption.replace(/\'/g,"\'");
						}
					
						if(response.feed.entry[t].gsx$photodescription.$t==null)
						{
						 dyk.description="#"
						}
						else
						{
						 dyk.description=response.feed.entry[t].gsx$photodescription.$t;
						 dyk.description = dyk.description.replace(/\'/g,"\'");
						 }
						
						if(response.feed.entry[t].gsx$shortdescription.$t==null)
						{
						dyk.shortdescription="#";
						}
						else
						{
						 dyk.shortdescription=response.feed.entry[t].gsx$shortdescription.$t;
						dyk.shortdescription = dyk.shortdescription.replace(/\'/g,"\'");
						}
						if(response.feed.entry[t].gsx$blogurl.$t==null)
						{
						dyk.blogurl="#"
						}
						else
						{
						dyk.blogurl = response.feed.entry[t].gsx$blogurl.$t;	
						}
						if(response.feed.entry[t].gsx$photocredit==null)
						{
						dyk.photocredit="#";
						}
						else
						{
						
						dyk.photocredit =response.feed.entry[t].gsx$photocredit.$t;
						}
						if(response.feed.entry[t].gsx$blogtitle.$t==null)
						{
						dyk.blogtitle="#";
						}
						else
						{
						dyk.blogtitle =response.feed.entry[t].gsx$blogtitle.$t;
						dyk.blogtitle = dyk.blogtitle.replace(/\'/g,"\'");
						}
						if(response.feed.entry[t].gsx$publishdate.$t==null)
						{
						dyk.date="#";
						}
						else
						{
						dyk.date =response.feed.entry[t].gsx$publishdate.$t;
						}
						if(response.feed.entry[t].gsx$pdf.$t==null)
						{
						dyk.pdf="#";
						}
						else
						{
						dyk.pdf =response.feed.entry[t].gsx$pdf.$t;
						}
						if(response.feed.entry[t].gsx$originalphotourl.$t==null)
						{
						dyk.originalphotourl="#";
						}
						else
						{
						dyk.originalphotourl =response.feed.entry[t].gsx$originalphotourl.$t;
						}
						if(response.feed.entry[t].gsx$relatedterm.$t==null)
						{
						dyk.relatedterm="#";
						}
						else
						{
						dyk.relatedterm =response.feed.entry[t].gsx$relatedterm.$t;
						}
						
						if(response.feed.entry[t].gsx$collection.$t==null)
						{
						dyk.collection="#";
						}
						else
						{
						dyk.collection =response.feed.entry[t].gsx$collection.$t;
						dyk.collection = dyk.collection.replace(/,/g,'!!!');
						
						}
						
						
						
						var dateN = new Date(dyk.date);
						ed = dateN.valueOf();
						var d2 = new Date()
						td2=d2.valueOf();
					
						if(td2>=ed)
						{
						
						dyk.dateArrDYK.push(dyk.photo+'@@'+dyk.caption+'@@'+dyk.originalphotourl+'@@'+dyk.blogtitle+'@@'+dyk.blogurl+'@@'+dyk.photocredit+'@@'+dyk.date+'@@'+dyk.description+'@@'+dyk.shortdescription+'@@'+dyk.pdf+'@@'+dyk.relatedterm+'@@'+dyk.collection );
						dyk.searchIndex.push(t+'^^'+dyk.caption+'@@'+dyk.blogtitle+'@@'+dyk.photocredit+'@@'+dyk.description+'@@'+dyk.shortdescription+'@@'+dyk.relatedterm+'@@'+dyk.collection+'%%');
						dyk.collectionIndex.push(dyk.collection+'%%');
						}
					
					}
					
					}
				
					changeSize();
				
				
				})	;
					
			}	
	
function changeSize()
		{
		
		
		$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'});
		
		dyk.windowwidth = $(window).width()
	//console.log('changing');
		$('#feature').html('');

		$('#dyk_squares').html('');
		$('#thumbnail_holder').html('');
		
		$('#dyk_squares').append('<div id="feature"></div>')
			
		var widthy =$(window).width()*.6667
		//$('#dyk_squares').html('');

		$('.square_blue').html('');;
		$('.square_green').html('');
		
				//alert(w);
		for (var y=0; y<dyk.dateArrDYK.length;y++)
			{
			//dyk.Image_preload= new Image(175,50)
			//dyk.Image_preload.src = dyk.dateArrDYK[y].split('@@');
			pphoto=dyk.dateArrDYK[y].split('@@')[0];
			pcaption = dyk.dateArrDYK[y].split('@@')[1];
			pcaption = pcaption.replace(/"/g,'');
			hcaption = pcaption.replace(/\'/g,"&rsquo");
			pblogtitle = dyk.dateArrDYK[y].split('@@')[3];
			pblogurl = dyk.dateArrDYK[y].split('@@')[4];
			pphotocredit = dyk.dateArrDYK[y].split('@@')[5];
			pdate =dyk.dateArrDYK[y].split('@@')[6];
			pdescription = dyk.dateArrDYK[y].split('@@')[7];
			pshortdescription = dyk.dateArrDYK[y].split('@@')[8];	
			ppdf = dyk.dateArrDYK[y].split('@@')[9];
			//count = count+1;
			
			
					
			var number = y;
			$('#thumbnail_holder').append('<div  class="thumbnails" style="margin-bottom:7px;"><a href="#hidden'+y+'"><img  class="thumby" id="thumbnail'+y+'" src="/images/loading.gif" alt="loading" ></a></div>')
			
				if(number%2==0)
				{
					
					$('#dyk_squares').append('<div id="box'+number+'" class="square blue_square on" style="opacity:1"></div><div id="box'+number+'_text" class="square_text blue_text off"><div class="dyk_image"><a href="#hidden'+y+'"><img id="sm_image_text'+y+'" src="/images/loading.gif" title="box'+number+'" alt="'+pshortdescription+'" style="border:none;"></a></div><div class="dyk_text"><h3>DID YOU KNOW?</h3><p>'+dyk.dateArrDYK[y].split('@@')[8]+'</p><p><a href="#hidden'+y+'" id="link'+y+'" class="link"> Learn More <span style="color:#ECBD00">»</span></a></p><p class="share">Share with Your Friends:</p><div class="social"><div id="fb'+y+'"  class="fb blue_icon"></div><div id="tw'+y+'" class="tw blue_icon"></div><div id="g '+y+'" class="g blue_icon"></div><div id="pi'+y+'" class="pi blue_icon"></div><div id="tu'+y+'" class="tu blue_icon"></div></div></div></div><div id="hidden'+number+'" class="hiddenDiv off"><div class="hidden on"  id="hid'+y+'"></div></div>')//<div class="hiddenText" id="hiddenText'+y+'" ><h3 >DID YOU KNOW <p>'+pshortdescription+'</p> Learn more about '+pcaption.toLowerCase()+' <a style="color:#FFF8DF" href="'+pblogurl+'" target="blank">	here</a><br/>Download a <a style="color:#FFF8DF"class="dyk" href="'+ppdf+'" target="_blank">high resolution poster</a><br/><a style="cursor:pointer; color:#FFF8DF" onclick="showResultsImages(\''+pcaption+'\')">See More Photos</a><br/><a style="cursor:pointer; color:#FFF8DF" onclick="showResult(\''+pcaption+'\')">See TAS Blog Posts about '+pcaption+'</a></div></div>')
					}
				else if(number%2==1)
				{
					
					$('#dyk_squares').append('<div id="box'+number+'" class="square green_square on" style="opacity:1"></div><div id="box'+number+'_text" class="square_text green_text off"><div class="dyk_image"><a href="#hidden'+y+'"><img id="sm_image_text'+y+'" src="/images/loading.gif" title="box'+number+'" alt="'+pshortdescription+'" style="border:none;"></a></div><div class="dyk_text"><h3>DID YOU KNOW?</h3><p>'+dyk.dateArrDYK[y].split('@@')[8]+'</p><p><a href="#hidden'+y+'" id="link'+y+'" class="link""> Learn More <span style="color:#ECBD00">»</span></a></p><p class="share">Share with Your Friends:</p><div class="social"><div id="fb'+y+'"  class="fb green_icon"></div><div id="tw'+y+'" class="tw green_icon"></div><div id="g '+y+'" class="g green_icon"></div><div id="pi'+y+'" class="pi green_icon"></div><div id="tu'+y+'" class="tu green_icon"></div></div></div></div><div id="hidden'+number+'" class="hiddenDiv off"><div class="hidden on"  id="hid'+y+'"></div></div>')//<div class="hiddenText" id="hiddenText'+y+'" ><h3 >DID YOU KNOW <p>'+pshortdescription+'</p> Learn more about '+pcaption.toLowerCase()+' <a style="color:#FFF8DF" href="'+pblogurl+'" target="blank">	here</a><br/>Download a <a style="color:#FFF8DF"class="dyk" href="'+ppdf+'" target="_blank">high resolution poster</a><br/><a style="cursor:pointer; color:#FFF8DF" onclick="showResultsImages(\''+pcaption+'\')">See More Photos</a><br/><a style="cursor:pointer; color:#FFF8DF" onclick="showResult(\''+pcaption+'\')">See TAS Blog Posts about '+pcaption+'</a></div></div>')
				}	
				var number=y
				number = number+1;
				if(y==0)
				{
				var minusone=dyk.dateArrDYK.length-1;
				
				}
				else
				{
				var minusone=(y-1);
				}
				if(y==dyk.dateArrDYK.length-1)
				{
				var plusone = 0
				}
				else
				{
				var plusone = (y+1);
				}
				
				//console.log(minusone+' : '+plusone);
				//$('#hid'+y).css('background-image','url(ç);
				$('#hid'+y).append('<img id="image'+y+'" src="/images/loading.gif" alt="loading" style="border:none;"><div id="moreinfo'+y+'" class="infobox"><a class="infolink" href="#hidden'+y+'moreinfo'+y+'"><div class="info"></div></a><div id="favorite'+y+'" class="favorite" ><div class="goto" style="display:none; padding:5px;width:100px; background:white; border: 1px solid #CCC"><a class="gotolink" >Go To Favorites</a></div></div><a href="'+ppdf+'" target="_blank"><div class="pdf" ></div></a><div class="share" ></div><div class="social" style="opacity:0; display:none;"><div id="fb'+y+'"  class="fb blue_icon"></div><div id="tw'+y+'" class="tw blue_icon"></div><div id="g '+y+'" class="g blue_icon"></div><div id="pi'+y+'" class="pi blue_icon"></div><div id="tu'+y+'" class="tu blue_icon"></div><div class="close_tn" ></div><div class="b_tn"></div></div><div id="it'+y+'" class="info-text overthrow"><a href="#hidden'+y+'"><div class="close_tn"></div></a><div class ="loader" id="loader'+y+'"></div><div class="scroller" id="info-text'+y+'"><p style="color:#0057a5; font-weight:bold">'+pshortdescription+'</p>'+pdescription+'<br/>From: <a href="'+pblogurl+'" target="_blank">'+pblogtitle+'</a><br/><span class="caption">Photo By: '+pphotocredit+'</span><br/><br/><h6>Other Blog Posts of Interest:</h6><div id="otherpost'+y+'" class="otherpost"></div><br/><h6>Other Images of Interest:</h6> <div id="otherimage'+y+'" class="otherimage"></div><div style="clear:both"></div></div></div></div><a class="no-hover" href="#box'+y+'_text"><div class="close" ></div></a><a class="prev" href="#hidden'+minusone+'"><div id="leftarrow'+y+'" class="leftarrow"></div></a><a class="next"  href="#hidden'+plusone+'"><div id="rightarrow'+y+'" class="rightarrow"></div></a>');
				
				setUpImages( dyk.dateArrDYK[y].split('@@')[0], dyk.dateArrDYK[y].split('@@')[1],dyk.dateArrDYK[y].split('@@')[2],number, pshortdescription)
			}
				
			
			///Add Javascript changes for two column layout for widths less than 700
		if((navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 8')) || (navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 7'))||(navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 6')))
		{
		$('#thumbnails').css({'height':$(window).height() - $('.header').height()*2,'top': $('.header').height()+28 })
		$('#thumbnails_open').css({ 'overflow-y':'scroll', 'height':'100%','overflow-x':'hidden'});
		$('#thumbnail_holder').css({'display':'block'})
		$('#thumbnails_close_btn').css({'left': $('#thumbnails').width()})	
		
		$('#presearch').css({'height':$(window).height() - $('.header').height()*2,'top': $('.header').height()+28 })
		$('#presearch_open').css({ 'overflow-y':'scroll', 'height':'100%','overflow-x':'hidden'});
		$('#presearch_holder').css({'display':'block'})
		$('#presearch_close_btn').css({'right': $('#presearch').width()})	
		}
		else
		{
		$('#thumbnails').css({'height':$(window).height() - $('.header').height()*2,'top': $('.header').height()+28})
		$('#thumbnails_open').css({'overflow-y':'scroll','height':'100%', 'overflow-x':'hidden' }).hide();
		$('#thumbnail_holder').css({'display':'block'})
		$('#thumbnails_close_btn').css({'left': $('#thumbnails').width()})
		
		$('#presearch').css({'height':$(window).height() - $('.header').height()*2,'top': $('.header').height()+28})
		$('#presearch_open').css({'overflow-y':'scroll','height':'100%', 'overflow-x':'hidden' }).hide();
		$('#presearch_holder').css({'display':'block'})
		$('#presearch_close_btn').css({'right': $('#presearch').width()})
		}	
				
			
/////////////////////////////////////////Clicks Defined///////////////////////////////////////////	
		

		
	$('.fb').click(function()
		{
		var id= $(this).attr('id');
		var numberfb = id.replace('fb','');	
		//$('#hidden'+numberfb).removeClass('on').addClass('off').css({'opacity':'0'});
			window.open('http://www.facebook.com/sharer/sharer.php?+s=100+&p%5Burl%5D=http%3A%2F%2Fwww.tas.noaa.gov%2Fresources%2Fdid_you_know5.html%23box'+numberfb+'_text&p%5Bimages%5D%5B0%5D='+dyk.dateArrDYK[numberfb].split('@@')[0]+'&p%5Btitle%5D=Did You Know&p%5Bsummary%5D='+dyk.dateArrDYK[numberfb].split('@@')[8] , '_blank')
		})
	$('.tw').click(function()
		{
		var id= $(this).attr('id');
		var numbertw = id.replace('tw','');
		window.open('https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.tas.noaa.gov%2Fresources%2Fdid_you_know5.html%23box'+numbertw+'_text&text=Did You Know? '+dyk.dateArrDYK[numbertw].split('@@')[8]+' &url=http%3A%2F%2Fwww.tas.noaa.gov%2Freshources%2Fdid_you_know5.html%23box'+numbertw+'_text', '_blank');
		})
		
	$('.tu').click(function()
		{
		var id= $(this).attr('id');
		var numbertu = id.replace('tu','');	
		window.open('http://www.tumblr.com/share?v=3&u=http%3A%2F%2Fwww.tas.noaa.gov%2Fresources%2Fdid_you_know5.html%23box'+numbertu+'_text&t=Did You Know?&s='+dyk.dateArrDYK[numbertu].split('@@')[8]+'&i='+dyk.dateArrDYK[numbertu].split('@@')[0], '_blank');
		})
		
	$('.pi').click(function()
		{
		var id= $(this).attr('id');	
		var numberpi = id.replace('pi','');
		window.open('http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.tas.noaa.gov%2Fresources%2Fdid_you_know5.html%23box'+numberpi+'_text&media='+dyk.dateArrDYK[numberpi].split('@@')[0]+'&description='+dyk.dateArrDYK[numberpi].split('@@')[8], '_blank');
		})
	$('.g').click(function()
		{
		var id= $(this).attr('id');
		var numberg = id.replace('g','');	
		window.open('https://plus.google.com/share?url=http%3A%2F%2Fwww.tas.noaa.gov%2Fresources%2Fdid_you_know5.html#hidden'+numberg, '_blank');
		})
	
	//console.log((($('.thumby').width()+10)*$('.thumby').length)-$('#thumbnais2').width())
	
	
	$('.search').click(function(){
	$('.searchBox').show();
	$('.search').hide();
	$('.searcher').show();
	
	})
	
	$('#settings_open_btn div.close_tn').click(function(){
	$('div.settings_open').slideUp();
	$('.settings').show();
																		  
	})
	
	
	$('.settings').click(function(){
	$('div.settings_open').slideDown()																	  
	$('.settings').show();																	  
	})
	
	$('.favorite').click(function(){
	
					
		var id= ($(this).attr('id'));
		var number = id.replace('favorite','');
		 number = number.replace('_search','');
		 var box = 'box'+number
		var boxtext = 'box'+number+'_text';
		var hidden = 'hidden'+number;
		dyk.storageArr.push(box+':'+boxtext+':'+hidden);
		
		//localStorage.setItem('key_dyk'+number, number);
		var fav_box = 'box'+number
		var fav_box_html = $('#'+fav_box).html();
		
		var fav_url = fav_box_html.split('src="')[1].split('title="')[0].replace(/ /g,'');
		fav_url = fav_url.split('?')[0]; 
		
		var fav_box_style = $('#'+fav_box).attr('style');
		var fav_text = $('#'+boxtext).html();
		var fav_hidden = $('#'+hidden).html();
		var LStoString=JSON.stringify(localStorage);
		
		var classy =$('#'+id).attr('class');
		var url = $('#'+box+' .sm_image').attr('src').split('?')[0];
		
		

											
		//runClickCheck(id, url, classy ,'dyk', 'sm_image' ,'src', 'on');
		runClickCheckDYK(box, 'on', fav_url )
		addLS();		
		$('.goto').fadeIn().delay(3000).fadeOut();
		
		})	
	
	
	
	$('.gotolink').click(function(){
		$('.goto').hide();
		window.location.hash = "favorites"
	})
		
	$('.square').css({'margin':$('.square').width()*.035+'px'})	
	if(dyk.count==0)
	{
	 $.history.init(historyLoad);				
	}
	
	   
					
		
	}	
		
function setUpImages(src,alt,src2, y, fact)
{
		//'+dyk.dateArrDYK[y].split('@@')[0]+'?h='+$(window).height()*.9+'" alt="'+dyk.dateArrDYK[y].split('@@')[1]+'"/>');	
		//alert(src2);
		y=y-1;
		src = src;
		
		
		var widthy =$(window).width()*.6667
		$('#box'+y).append('<a class="no-hover" href="#box'+y+'_text"><img id="sm_image'+y+'" class="sm_image" src="/images/loading.gif" title="box'+y+'" alt="'+pshortdescription+'" style="border:none;"></a>');
		//$('#box'+y).css({'width':'0px'})
		//$('.on').animate({'opacity':'1'},'slow');
		var heavyImage = new Image(); 
		var heavyImage2 = new Image(); 
		
		//heavyImage.src = src;
		//heavyImage2.src =src;	


		
		if(navigator.appName == 'Microsoft Internet Explorer')
		{
		w=document.documentElement.clientWidth;
		h=document.documentElement.clientHeight;
		
		}
		else
		{
			w=$(window).width();
			h=$(window).height();	
		}
		$img = $('#image'+y);
	
		maxWidth = w*.95;
		maxHeight = h*.95;
		widthRatio = maxWidth / 50;
		heightRatio = maxHeight / 50;
		var al=$(window).width();
		//alert(w+':'+h);
		if((w/h) >=1.25) 
		{	
		var he = (h-$('.header').height())*.9
		var hm = he*1.5
		dyk.ht = '?h='+(parseInt(he)).toString();
		$('.hiddenDiv').css({'left' : (al-hm)/2+'px'});
		//console.log((al-he)/2)
		}
		else
		{
		var he = $('#dyk_squares').width()
		 dyk.ht='?h='+(al*.8)*.6667;
		var hm = he
		$('.hiddenDiv').css({'left' : (al-(al*.8))/2+'px'})
		
		//console.log(w/h)
		}
		
		var hasher = window.location.hash;
		$(hasher).addClass('on');
		
		//alert($('#'+hasher).attr('class'));	
			//console.log(hasher+':'+ht);
			if($(hasher).hasClass('hiddenDiv'))
			{
			//$('#dyk_squares').css({'margin-top':'0px'});
			$('#dyk_squares').css({'margin-top': ($(window).height() -dyk.ht.replace('?h=',''))/2+$('.header').height()/2})
			}		
			else
			{
			$('#dyk_squares').css({'margin-top':$('.header').height()+20+'px'});
			}
		if((navigator.appVersion.match('MSIE 8')) || (navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 7'))||(navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 6')))
		{
			
			$('.sm_image').attr('src',src2+'?w=172');
			$('#sm_image_text'+y).attr('src',src2+'?w=360');
			$('#image'+y).attr('src',src2+dyk.ht);	
			$('#thumbnail'+y).attr('src', src2+'?w=86');
		}
		else
		{

			
			if(w>=1600)
			{
			var thumb_image_width = '125'
			var sm_image_width = '300';
			$('#sm_image'+y).attr('src',src2+'?w=300');
			resp_des_smImg.width=300;

			$('#sm_image_text'+y).attr('src',src2+'?w=630');
			$('#image'+y).attr('src',src2+dyk.ht);
			$('#thumbnail'+y).attr('src', src2+'?w=125');
			$('.thumbnails').css({'width': '125px'})
			$('.presearch_icon').css({'width': '125px'})
			$('.link').show();
			
				
			
			}
			if(w>1200 && w<1599)
			{
			var thumb_image_width = '105'	
			var sm_image_width = '210';
			$('#sm_image'+y).attr('src',src2+'?w=210');
			resp_des_smImg.width=210;

			$('#sm_image_text'+y).attr('src',src2+'?w=430');
			$('#image'+y).attr('src',src2+dyk.ht);
			$('#thumbnail'+y).attr('src', src2+'?w=105');
			$('.thumbnails').css({'width': '105px'})
			$('.presearch_icon').css({'width': '105px'})
			$('.link').show();
			
			}
			else if(w<=1200 && w>=900)
			{
			var thumb_image_width = '86'
			var sm_image_width = '172';
			resp_des_smImg.width=172;

			$('#sm_image'+y).attr('src',src2+'?w=172');
			$('#sm_image_text'+y).attr('src',src2+'?w=360');
			$('#image'+y).attr('src',src2+dyk.ht);
			$('#thumbnail'+y).attr('src', src2+'?w=86');
			$('.thumbnails').css({'width': '86px'})
			$('.presearch_icon').css({'width': '86px'})
			$('.link').show();
				
				
			}
			else if(w<=899 && w>=700)
			{
			var thumb_image_width = '62'	
			var sm_image_width = '125';
			resp_des_smImg.width=125;

			$('#sm_image'+y).attr('src',src2+'?w=125');
			$('#sm_image_text'+y).attr('src',src2+'?w=246');
			$('#image'+y).attr('src',src2+dyk.ht);	
			$('#thumbnail'+y).attr('src', src2+'?w=62');
			$('.thumbnails').css({'width': '62px'})
			$('.presearch_icon').css({'width': '62px'})
			$('.link').show();
			
			}
			
			else if(w<=699 && w>=400)
			{
			var thumb_image_width = '52'
			var sm_image_width = '105';
			resp_des_smImg.width=105;

			$('#sm_image'+y).attr('src',src2+'?w=105');
			$('#sm_image_text'+y).attr('src',src2+'?w=200');
			$('#image'+y).attr('src',src2+dyk.ht);	
			$('#thumbnail'+y).attr('src', src2+'?w=52');
			$('.thumbnails').css({'width': '52px'})
			$('.presearch_icon').css({'width': '52px'})
			$('.link').show();
			
			}
			/*else if(w<=549 && w>=400)
			{
			$('#sm_image'+y).attr('src',src2+'?w=105');
			$('#sm_image_text'+y).attr('src',src2+'?w=200');
			//$('#image'+y).css({'margin-left':$('#dyk_squares').width()-hm)/2})
			$('#image'+y).attr('src',src+dyk.ht);
			$('#thumbnail'+y).attr('src', src2+'?w=52');
			$('.thumbnails').css({'width': '52px'})
			
			}*/
			else if(w<400 )
			{
			var thumb_image_width = '52'	
			var sm_image_width = '300';
			$('#sm_image'+y).attr('src',src2+'?w=105');
			$('#sm_image_text'+y).attr('src',src2+'?w=180');
			$('#image'+y).css({'margin-left':($('#dyk_squares').width()-hm)/2})
			$('#image'+y).attr('src',src2+dyk.ht) ;
			;
			$('#thumbnail'+y).attr('src', src2+'?w=52');	
			$('.thumbnails').css({'width': '52px'})
			$('#thumbnails_close_btn').hide();
			$('#thumbnails_open_btn').hide();
			$('.thumbnails').css({'width': '52px'})
			
			
			$('.presearch').css({'width': '52px'})
			$('#presearch_close_btn').hide();
			$('#presearch_open_btn').hide();
			$('.link').hide();
				
			}
		presearch_icon = $('.presearch_icon img');
	//console.log($('.presearch_icon').width());
	for(var x=0; x<presearch_icon.length; x++)
				{
				var src = presearch_icon[x].src.split('?')[0]+'?w='+$('.presearch_icon').width();
				presearch_icon[x].src=src;
				}	
	
		}
		
	}

	
	function boxTextClick(y, hash)
	{
		//dyk.divArr.push('#hidden'+y);	
		
		if(hash.match('_fav'))
		{
		y= y.replace('_fav','');
		
		var hidden = 'hidden'+y+'_fav'
		
		var hid = 'hid'+y+'_fav';
		var image = 'image'+y+'_fav'
		var boxtext = 'box'+y+'_text_fav';
		var box = 'box'+y+'_fav';
		for(var g=0; g<localStorage.length; g++)
			{
			
			if(localStorage.key(g).replace('key','')==y)
			{
			$('.square').removeClass('on');
			$('.square').addClass('off').animate({'opacity':'0'},500);		
			$('.square_text').removeClass('on');
			$('#'+hid).removeClass('on').addClass('off');
			$('.square_text').addClass('off').animate({'opacity':'0'},500);		
			$('#'+hidden).insertBefore('#box'+localStorage.key(0).replace('key','')+'_fav');		
			$('#' +hidden).removeClass('off')
			$('#' +hidden).addClass('on').animate({'opacity':'1'},500);
			$('#' +hid).removeClass('off')
			$('#' +hid).addClass('on').animate({'opacity':'1'},500);
			$('#' +boxtext).removeClass('on')
			$('#' +boxtext).addClass('off').animate({'opacity':'0'},500);
			}
			}
		}
		if(hash.match('_search'))
		{
			;
		y= y.replace('_search','');
		
		var hidden = 'hidden'+y+'_search'
		
		var hid = 'hid'+y+'_search';
		var image = 'image'+y+'_search'
		var boxtext = 'box'+y+'_search';
		var box = 'box'+y+'_search';			  
		$('.square').removeClass('on');
		$('.square').addClass('off').animate({'opacity':'0'},500);		
		$('.square_text').removeClass('on');
		$('.square_text').addClass('off').animate({'opacity':'0'},500);		
		$('#'+hidden).insertBefore('#box0_search');		
		$('#' +hidden).removeClass('off')
		$('#' +hidden).addClass('on').animate({'opacity':'1'},500);
		$('#' +hid).removeClass('off')
		$('#' +hid).addClass('on').animate({'opacity':'1'},500);
		$('#' +boxtext).removeClass('on')
		$('#' +boxtext).addClass('off').animate({'opacity':'0'},500);
		}
		else
		{
		var hidden = 'hidden'+y
		var hid = 'hid'+y;
		var image = 'image'+y
		var boxtext = 'box'+y+'_text';
		var box = 'box'+y;
		$('.square').removeClass('on');
		$('.square').addClass('off').animate({'opacity':'0'},500);		
		$('.square_text').removeClass('on');
		$('.square_text').addClass('off').animate({'opacity':'0'},500);		
		$('#'+hidden).insertBefore('#box0');		
		$('#' +hidden).removeClass('off')
		$('#' +hidden).addClass('on').animate({'opacity':'1'},500);
		$('#' +hid).removeClass('off')
		$('#' +hid).addClass('on').animate({'opacity':'1'},500);
		$('#' +boxtext).removeClass('on')
		$('#' +boxtext).addClass('off').animate({'opacity':'0'},500);
		}
	}
		
	
	if((navigator.appVersion.match('MSIE 8')) || (navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 7'))||(navigator.appName=="Microsoft Internet Explorer" &&navigator.appVersion.match('MSIE 6')))	{
		}
		else
		{
			$(window).resize(function () 
			{
				if(dyk.windowwidth<$(window).width() || dyk.windowwidth>$(window).width())
				{
				$(window).delay(500, resizeend2())
				}
			})
			/*rtime = new Date();
			
				if (timeout === false) 
				{
				timeout = true;
				t= setTimeout(function() {resizeend2()}, 500);
				}
		*/
			
		}
	
 
    
		
	function resizeend2()
	{
	//timeout=false;
	//clearTimeout(t);
	dyk.count = dyk.count+1
	dyk.countArr.push(dyk.count);
	$('#thumbnails').hide();
	$('#thumbnails_close_btn').hide();
	$('#thumbnails_open_btn').show();

	$('#presearch').hide();
	$('#presearch_close_btn').hide();
	$('#presearch_open_btn').show();
	
	//console.log(dyk.countArr);
	$('#dyk_squares').html('');
	if($(window).width()>399)
	{
	changeSize();
	
	historyLoad(window.location.hash.replace('#',''));
	}
	else
	{
	changeSize();
	window.location.hash='home';
	historyLoad('#home');
	}	
		
	}
	
	
		
function preloader(img,caption,ids,title,length) 
 {
	
/////////////////////////////////////////called when a thumbnail photo is clicked.  This function "opens" the "bigImg2" div and then once the larger image has loaded, it calls the openBigImage function passing several parameters.////////////////////////////////
var heavyImage = new Image(); 
 heavyImage.src = img/////////////////from the parameters//////////////;
 var caption = caption/////////////////from the parameters//////////////;
 var ids = ids/////////////////from the parameters//////////////;
 var length = length/////////////////from the parameters//////////////;
 var title_urlArr = title.split('$$');
 var title= title_urlArr[0];
 var url = title_urlArr[1];
 var hnum =parseInt(dyk.ht.replace('?h=',''));
if(img.match('teacheratsea.files')||img.match('http://jasonatsea.files'))
{
 var  imgInd = heavyImage.src.indexOf('?w');
 var imgSlice = heavyImage.src.slice(imgInd,imgInd+6);
 var imgR=heavyImage.src.replace(imgSlice, '?h='+hnum*.7);
}
else
{
	var imgR=heavyImage.src;
}
	///////////////////Makes the transparency of the "bigImg2" div 10%///////////////////////////////
    document.getElementById('bigImg').style.opacity='.01'
	
    $('#bigImg2').html('<div style="position:relative;float:right; margin-right:-50px;width:30px;margin-top:-50px; z-index:100;" id="alert_box_close" onclick="$(\'#bigImg2\').fadeOut(\'slow\');document.getElementById(\'bigImg\').style.opacity=\'1.0\'"><a name="close_too"><img style="cursor:pointer" alt="collapse button_bigger_white" class="icon" src="/images/collapse_btn_bigger_white.png" height="30" width="30"/></a></div><div style="margin:auto;"><img style="text-align:center"id="bigImage"  src="/images_archive/loading.gif" alt="'+caption+'"><div style="margin-top:10px;font-size:15px; color:#666;" class="caption" id="bigCaption">'+caption+'<br/><a target="_blank" href="'+url+'">'+title+'</a><br/>	<a class="caption" target="_blank" href="'+img.split('?')[0]+'">View High Resolution Image</a></div></div><div style="position:absolute;  top:50%;width:100%;margin-left:-28px;"><div style="float:left;" onclick="prevImg(\''+ids+'\',ln)"><img style="border:none;cursor:pointer" src="/images/left_arrow_btn.png" alt="previous photo"/></div><div style="float:right" onclick="nextImg(\''+ids+'\',ln)"><img style="border:none;cursor:pointer" src="/images/right_arrow_btn.png" alt="next photo"/></div></div>');
	//document.getElementById('bigImage').src='/images/loading.gif'
	$('#bigCaption').hide();
	/////////////////////////calls the openBigImage function, passing the relevant parameters/////////////////////////////
	openBigImage(imgR, caption, ids, length, (hnum*.8)*1.5);
 
	
	 
	 	
 }
 
 function openBigImage(img,caption,ids,length, width)
{
  ///////////////////////////////This function loads a larger version of that thumbnail div and the caption associated with the photo into a div called "bigImg"/////////////////////////////////	 	

	var caption = caption //////////from caption parameter////////////;
///////////////////////////////scrolls window to the top of the page, where the bigImg div is located////////////////////////
    window.scrollTo(50,0)
    ln=length;
    //$('#bigImg').hide();
		////////////////////loads bigImage into the "bigImage" div////////////////////
	document.getElementById('bigImage').src=img

	var src=img;
	var bigImageHeight = src.split('?')[1].replace('h=','');
	bigImageWidth = bigImageHeight*1.25;
	
	//////////////////////Jquery that causes the image and caption to fade in///////////////////////////////
	$('#bigImg2').css({'margin-left': ($(window).width() - width)/2.5})
	$('.caption').css({'max-width': bigImageWidth+'px'});
	$('#bigImg2').fadeIn('slow');
	$('#bigCaption').fadeIn('slow');
   
	}


function nextImg(id,length)
{
   ///////////////////////////////Each image has a previous photo button and a next photo button...this function is called when the next button is pressed////////////////
	var numTxt=id.replace('photocontain','');
    var num = parseInt(numTxt);
    var numOne=num+1;
	var nextPhoto='photo'+numOne.toString();
	if(numOne==length)
 	{
	  
	  numOne="0"
	  preloader(document.getElementById('photocontain'+numOne).getAttribute('src'), document.getElementById('photocontain'+numOne).getAttribute('title'),'photocontain'+numOne, document.getElementById('photocontain'+numOne).getAttribute('alt'),length);
	  
	 
   
 }	

 else
	{
		
	  preloader(document.getElementById('photocontain'+numOne).getAttribute('src'), document.getElementById('photocontain'+numOne).getAttribute('alt'), 'photocontain'+numOne, document.getElementById('photocontain'+numOne).getAttribute('title'),length);
 	
	}
 
}


function prevImg(id,length)
{
	///////////////////////////////Each image has a previous photo button and a next photo button...this function is called when the previous button is pressed///////////////
    var numTxt2=id.replace('photocontain','');
    var num2 = parseInt(numTxt2);
    var numOne2=num2-1;
    var l2=length-1;
    var prevPhoto='photo'+numOne2.toString();
    //////////////////if numOne variable is  greater than  than one//////////////////
    if(numOne2>=0)
    {
      ////////////loads previous photo
		preloader(document.getElementById('photocontain'+numOne2).getAttribute('src'), document.getElementById('photocontain'+numOne2).getAttribute('alt'), 'photocontain'+numOne2, document.getElementById('photocontain'+l2).getAttribute('title'),length);
    }
    //////////////else if numOne  is less than one
    else
   
    {
		
		///////////////loads first photo///////////////////
        preloader(document.getElementById('photocontain'+l2).getAttribute('src'), document.getElementById('photocontain'+l2).getAttribute('alt'), 'photocontain'+l2,document.getElementById('photocontain'+l2).getAttribute('title'), length);
    }
}


function addLS()
{
 
  
 $('#favorites_holder').html('');
 $('#favorites_holder').append('<div id="feature_fav"></div>');

		
				
  for(var p=0; p<localStorage.length; p++)
  {
	  if(!localStorage.key(p).match('Firebug') &&!localStorage.key(p).match('BlogArr')&&!localStorage.key(p).match('ImgArr')&&!localStorage.key(p).match('Lesson'))
	  {
	  var key=localStorage.key(p);
	$('#favorites_holder').append(localStorage.getItem(key));
	var key_number=key.replace('key_dyk','');
	  
	$('#box'+key_number+'_fav').attr('class', $('#box'+key_number).attr('class'));
	$('#box'+key_number+'_fav').attr('style', $('#box'+key_number).attr('style'));
	
	//$('#box'+key_number+'_fav #sm_image'+key_number).attr('id', 'sm_image_dyk'+key_number);
	
	//$('#box'+key_number+'_text_fav  a').attr('style', $('#box'+key_number+'_text  a').attr('style'))
	
	
	
	
	$('#box'+key_number+'_fav').attr('id',  'box'+p+'_fav');
	
	for(var xx=0; xx<$('.sm_image').length; xx++)
	{
		var src = $('.sm_image')[xx].src;
		$('.sm_image')[xx].src = src.split('?')[0]+'?w='+resp_des_smImg.width;
	}
			
			
		
	
	
	  }
    	 	 
	  
   }
   $('#favorites_holder').append('<div style="clear:both; padding-top:20px;" id="clear"><input  type="button" value="Clear Favorites" onclick="runLSClear(); window.location.hash=\'#home\'"/></div>');

  if(localStorage.length==0)
  {
    $('#favorites_holder').html('');
	$('#favorites_holder').html('You have not favorited any items.  Click here to <a href="#home">go back</a>');
  }

}


function runLSClear()
{
LStoString = JSON.stringify(localStorage);
LStoStringSplit = LStoString.split('key_');
for (var ls=1; ls<LStoStringSplit.length; ls++)
{
if(LStoStringSplit[ls].match('dyk'))
	
	localStorage.removeItem('key_'+LStoStringSplit[ls].split('"')[0]);
							 
}
}

function showSocial()
{
$('.share').hide();

$('div.hiddenDiv div.social').show().css({'top':$('.info').height()+10+'px','background':'white', 'position':'relative','padding':'5px', 'height':$('.fb').height() }).delay(200).animate({'opacity':'.85','width': ($('.fb').width()*5)*1.6, 'left':'0px', 'z-index':'1000000000'},500);
	
}
function closeSocial(){
		$('div.hiddenDiv div.social').hide().css({'opacity':0});
		$('.share').show();
	}