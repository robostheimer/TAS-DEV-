////////////////////////////////Global variable that holds the width value of the searchbox used in the divClose_search fucntion////////////////////////////

var searchw = "820px";

var resp_des_current = {};
var resp_des_alumni = {};
var resp_des_photo = {};
var resp_des_slideshow = {};
var resp_des_bigImg = {};
var resp_des_smImg = {};
var resp_des_blogImg = {};
var resp_des_classImg = {};
var resp_worksheet = {};
var resp_des_image_frame = {};
var resp_des_quote_image = {};
var resp_des_tab_box_image = {};
var resp_profile_photo = {};
var resp_blog_photo = {};
var resp_des_video = {};
var resp_spot_image = {};
var resp_spot_bigImage = {};
var resp_spot_ind_image = {};
var resp_pow_big_image = {};
var resp_pow_other_image = {};
var resp_xmlDoc = {};
var resp_media = {};

var LS = {}
LS.arr = [];
LS.LSStringy = JSON.stringify(localStorage);
LS.LStoStr2 = '';
var resp_count = {};

var spreadsheet_obj_top = {};
var spreadsheet_obj_bottom = {};
LS.clickCount = 0;
LS.comp_str = '';

if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
	//test for MSIE x.x;
	var ieversion = new Number(RegExp.$1)// capture x.x portion and store as a number

	if (ieversion <= 6) {

		document.write("<h4 style='color:red'>This site is optimized for use with <a href='http://www.getfirefox.com'>Firefox</a> version 3.6 or higher and <a href='http://www.microsoft.com/windows/internet-explorer/default.aspx'>Internet Explorer</a> version 7 or higher.</h4><p>For an optimal user experience, please utilize a newer version of either of these browsers.</p>")
	}

}

function runResizeScript() {
	generic = $('.wrapper_generic_media');
	/*if($('.wrapper_generic_media div').hasClass('scrollbar-container'))
	 {
	 $('.wrapper_generic_media .scrollbar-container').remove();
	 }
	 */
	if ($(window).width() < 800) {

		for (var p = 0; p < generic.length; p++) {

			if (!$('#' + generic[p].id + ' div').hasClass('scrollbar-container')) {
				$('#' + generic[p].id).append('<script type="text/javascript">var myScroll' + p + '=new iScroll(' + generic[p].id + ', {hScroll:false, hScrollbar:false, lockDirection:false})</script>');
			}

		}
	}
}

function runResizeScriptProfile() {

	var generic = $('.profile-wrapper');
	if ($('.profile-wrapper div').hasClass('scrollbar-container')) {

		$('.profile-wrapper .scrollbar-container').remove();
	}

	if ($(window).width() < 800) {

		//console.log(generic.length);

		for (var v = 0; v < generic.length; v++) {
			if (!$('#' + generic[v].id + 'div').hasClass('scrollbar-container')) {
				$('#' + generic[v].id).append('<script type="text/javascript">var myScroll' + v + '=new iScroll(' + generic[v].id + ', {hScroll:false, hScrollbar:false, lockDirection:false})</script>');
				if (v == (generic.length - 1)) {
					//console.log($('#social_media_body div').attr('class'))

					//console.log($('#social_media_body div').attr('class'))
				}
			}

		}

	}
}

function runResizeScriptTabs() {
	var generic = $('.wrapper_generic');

	/*if($('.wrapper_generic div').hasClass('scrollbar-container'))
	 {
	 $('.wrapper_generic .scrollbar-container').remove()
	 }
	 */
	if ($(window).width() < 800) {

		//console.log(generic.length);

		for (var v = 0; v < generic.length; v++) {
			if (!$('#' + generic[v].id + 'div').hasClass('scrollbar-container')) {
				//console.log(generic[v].id);
				$('#' + generic[v].id).append('<script type="text/javascript">var myScroll' + v + '=new iScroll(' + generic[v].id + ', {hScroll:false, hScrollbar:false, lockDirection:false})</script>');
			}
		}
	}
}

function runResizeSearch() {
	searchid = $('.wrapper_search').attr('id')

	if ($('.wrapper_search div.scrollbar-container').length > 0) {

		$('.wrapper_search .scrollbar-container').remove();
	}

	if ($(window).width() < 800) {

		if (!$('#' + searchid + 'div').hasClass('scrollbar-container')) {

			$('#' + searchid).append('<script type="text/javascript"> myScroll_search=new iScroll(' + searchid + ', {hScroll:false, hScrollbar:false, lockDirection:false,})</script>');

		}
	}

}

function runResizeHorizontal() {
	//console.log('resizing');
	if ($('#wrapper div.scrollbar-container').length > 0) {

		$('#wrapper .scrollbar-container').remove();
	}

	if ($(window).width() < 800) {

		if (!$('#wrapper div').hasClass('scrollbar-container')) {

			$('#wrapper').append('<script type="text/javascript"> myScroll=new iScroll(\'wrapper\')</script>');

		}
	}
}

//to get rid of rollover focuses

imgSrc = []
function changeClass(id) {
	document.getElementById(id).style.display = 'block';

}

function changeAgain(id) {
	document.getElementById(id).style.display = 'none';
}

function changeClass2(id) {

	var idS = id.replace('btn', '');
	$('#social_media ul li').attr('class', 'off');
	$('#social_media_body div.shower').attr('class', 'hider');
	$('div#' + idS + 'x').attr('class', 'shower');
	$('div#caption' + idS).attr('class', 'shower');
	$('div#caption' + idS).attr('class', 'caption');

	$('#' + idS).attr('class', 'on');
	$('#' + id).attr('class', 'on');
	$('#' + idS + 'box').attr('class', 'shower');
	$('#' + idS + '_d').attr('class', 'shower');
	$('div#social_media_body div').removeClass('hider').addClass('hider2');
	//imgW(idS);
}

//////////////////////////////Used on the generic tab pages (Alumni, About, How to Apply, etc).  Changes the class of the "tab" from on to off and changes the class of the box that corresponds to the tab from hider2 to shower2.  Called in the "Scripts_section" server side include file (/includes/ directory)  /////////////////////////////////
function changeClass10(id) {
	var idS = id.replace('box', '')
	idS = idS.replace('btn', '');
	$('#social_media ul li').attr('class', 'off');
	$('#social_media_body div.hider').attr('class', 'hider2')
	$('#social_media_body div.shower').attr('class', 'hider2');
	$('#social_media_body div.shower2').attr('class', 'hider2');
	$('div#' + idS + 'box').attr('class', 'shower2');
	$('div#caption' + idS).attr('class', 'shower2');
	$('div#caption' + idS).attr('class', 'caption');
	$('#' + idS).attr('class', 'on');
	$('#' + id).attr('class', 'on');
	$('#' + idS + 'box').attr('class', 'shower2');
	$('#' + idS + '_d').attr('class', 'shower2');
	var p = $('#social_media_body').position().top;
	window.scrollTo(0, p);

	//$('html,body').animate({scrollTop: $('#'+idS+'box').offset()}, 1000);

	//imgW(idS);
}

//////////////////////////////Used on the homepage social media box.  Changes the class of the "tab" from on to off and changes the class of the box that corresponds to the tab from hider2 to shower2.  Called from the tabs /////////////////////////////////
function changeClass3(id) {

	var idS = id.replace('btn', '');
	$('#social_media ul li').attr('class', 'off');
	$('#social_media_body_home div.shower2').attr('class', 'hider2');
	$('div#' + idS + 'x').attr('class', 'shower2');
	$('div#caption' + idS).attr('class', 'shower2');
	$('div#caption' + idS).attr('class', 'caption');

	$('#' + idS).attr('class', 'on');
	$('#' + id).attr('class', 'on');
	$('#' + idS + 'box').attr('class', 'shower2');
	//$('#'+idS+'_d').attr('class','shower2')
	//imgW(idS);
}

//////////////////////////////Used on the generic tab pages (Alumni, About, How to Apply, etc).  Changes the class of the "tab" from on to off and changes the class of the box that corresponds to the tab from hider to shower2.  Called in the "Scripts_profile" server side include file (/includes/ directory)  /////////////////////////////////

function changeClass4(id) {

	var idS = id.replace('btn', '');
	idS = idS.replace('box', '');

	$('#social_media ul li').attr('class', 'off');

	$('#social_media_body div.shower2').attr('class', 'hider2');

	$('#' + idS).attr('class', 'on');

	$('#' + idS + 'box').attr('class', 'shower2');

	if (window.location.hash == "") {
		var p = 0;

	} else {
		var p = $('#social_media_body').position().top;
	}
	window.scrollTo(0, p)
	runResizeScriptProfile();
	$('#social_media_body div.hider').attr('class', 'hider2');

	//$('#'+idS+'_d').attr('class','shower');
	//imgW(id);

}

function changeClass8(id) {
	var idS = 'categories' + id
	$('#social_media ul li').attr('class', 'off');
	$('#' + idS).attr('class', 'on');
	//$('#'+id).attr('class','on');

}

function changeClass5(id) {

	var idS = id.replace('btn', '');
	$('#social_media ul li').attr('class', 'off');
	//$('#social_media_body div.shower').attr('class','hider');
	$('#' + idS).attr('class', 'on');
	//$('#'+id).attr('class','on');
	//$('#'+idS+'box').attr('class','shower');
	//$('#'+idS+'_d').attr('class','shower');
	//imgW(id);
	//loadNextTab(id);

}

function divClose(id) {

	document.getElementById('contain').style.opacity = 1.0;
	var idCh = id.replace('_close', '');
	var idCh2 = idCh + '_open';
	$('#'+idCh)
	document.getElementById(idCh).style.display = 'none'
	document.getElementById(idCh2).style.display = 'block'
}

function divOpen(id) {
	var idCh = id.replace('_open', '');
	var idCh2 = idCh + '_close';

	document.getElementById(idCh).style.display = 'block'
	document.getElementById(id).style.display = 'none';
	document.getElementById(idCh2).style.display = 'block';

}

function divOpen_search(id) {
	var idCh = id.replace('_btn', '');
	var idCh2 = id.replace('open', 'close');

	$('#thumbnail_holder').show();
	$('#' + id).hide();
	$('#' + idCh2).fadeIn()
	$('#' + idCh).fadeIn();
	$('#thumbnails').fadeIn();
}

function divClose_search(id) {
	var idCh = id.replace('_btn', '');
	var idCh3 = idCh.replace('close', 'open');
	var idCh2 = id.replace('close', 'open');
	$('#' + idCh2).fadeIn()
	$('#' + id).fadeOut()
	$('#' + idCh3).fadeOut()
	$('#thumbnail_holder').fadeOut();
	$('#thumbnails').fadeOut();
}

function divOpen_search2(id) {
	var idCh = id.replace('_btn', '');
	var idCh2 = id.replace('open', 'close');

	$('#presearch_holder').show();
	$('#' + id).hide();
	$('#' + idCh2).fadeIn()
	$('#' + idCh).fadeIn();
	$('#presearch').fadeIn();
}

function divClose_search2(id) {
	var idCh = id.replace('_btn', '');
	var idCh3 = idCh.replace('close', 'open');
	var idCh2 = id.replace('close', 'open');
	$('#' + idCh2).fadeIn()
	$('#' + id).fadeOut()
	$('#' + idCh3).fadeOut()
	$('#presearch_holder').fadeOut();
	$('#presearch').fadeOut();
}

/////////////////////////////////Favorites and Local Storage  /////////////////////////////








function addInfo() {

	$('#LSinfo').slideToggle('500');
	$('#mail').slideToggle('700');
	$('#trash').slideToggle('700');
	$('#facebook_ls').slideToggle('700');
	$('#twitter_ls').slideToggle('700');
	$('#li_ls').slideToggle('700');
	$('#google_plus').slideToggle('700');
	$('#evernote').slideToggle('700');
	$('#google_bk').slideToggle('700');

	

}


function favTab(id) {
	var idrep = id.replace('btn', '');
	$('ul.chooser li').attr('class', 'off');
	$('#' + id).attr('class', 'on');
	$('.wrapper_fav').hide();
	$('#' + idrep).show();
	if (id.match('dyk')) {
		addLS();
	}
}






/*function runClickCheckMedia(id, src) {

	var favorite = id.replace('search_image', 'favorite_img');
	var LStoString = "";
	var LStoStrSlice = '';
	var LStoStr = ''//$('#'+id).html();

	var LStoStringSplit;
	var LSArr = [];
	var addLSStr = '';
	var image_blog_split = '';

	fav_images = $('.favorite');
	LS.LSStringy = JSON.stringify(localStorage);

	if (!$('#' + favorite).attr('src').match('on')) {

		$('#' + favorite).attr('src', '/images/star_on.png');
		$('#' + favorite + '_big').attr('src', '/images/star_on.png');

		var img = id.replace('search_image', 'search_img');
		var imghtml = $('#' + img).html();
		imghtml = imghtml.replace(/_profile/g, '');
		imghtml = imghtml.replace(/_media/g, '');
		imghtml = imghtml.replace(/_big/g, '');

		//var idhtml = ('#' + img)

		//var idsrc = $('#'+id).attr('src').split('?')[0]
		//var idalt = $('#' + id).attr('alt')

		LStoString += JSON.stringify(localStorage);

		LStoStringSplit = LStoString.split(':"');
		for (var g = 1; g < LStoStringSplit.length; g++) {
			var srcr = LStoStringSplit[g].lastIndexOf('teacheratsea');
			var alt = LStoStringSplit[g].lastIndexOf('onclick');

			LStoStrSlice = LStoStringSplit[g].replace(/\\/g, '')
			LStoStrSlice = LStoStrSlice.slice(srcr, alt);
			LStoStrSlice = 'http://teacheratsea.files.wo' + LStoStrSlice.split('alt')[0].replace('"', '');
			LStoStr += LStoStrSlice + ',';
			LS.LStoStr2 += LStoStrSlice.split('class="imgsearch"')[0].split('?')[0] + ',';

		}

		if (!LStoStr.replace(/\W/g, '').match(imghtml.replace(/\W/g, ''))) {
			lslength = localStorage.length;
			localStorage.setItem('key_image' + (localStorage.length), '<div class="searcher_image" id="searcher_image' + localStorage.length + '"><div class="search_image" id="search_img' + localStorage.length + '">' + imghtml.replace('_media', '') + '</div></div>');
			LS.LSStringy = JSON.stringify(localStorage);
			addLS();
			var img = $('#' + id.replace('image', 'img') + ' .imgsearch').attr('src');

			for (var r = 0; r < $('.imgsearch').length; r++) {
				var img_id = $('.imgsearch')[r].id;
				var img_src = $('#' + img_id).attr('src');

			
					img_id = $('#' + img_id).parent().attr('id');
					$('#' + img_id + ' .favorite').attr('src', '/images/star_on.png');

				}
			}
		
	} else {

		LS.LSStringy2 = $('#scrollerLS_blogs').html() + $('#scrollerLS_imgs').html() + $('#scrollerLS_lessons').html() + $('#scrollerLS_dyk').html();
		$('#' + favorite).attr('src', '/images/star.png');
		$('#' + favorite + '_big').attr('src', '/images/star.png');

	if (id.match('profile')) {
			var img = $('#' + id.replace('image', 'img') + ' .imgsearch').attr('src')
		} else if (id.match('media')) {
			var img = $('#' + id.replace('image', 'img') + ' .imgsearch').attr('src')
		} else {
			var img = $('#' + id.replace('image', 'img_media') + ' .imgsearch').attr('src');
		}

		LS.LSStringy2Split = LS.LSStringy2.split('<div class="searcher');

		for (var l = 1; l < LS.LSStringy2Split.length; l++) {
			LS.LStoStr3 = '';

			if (LS.LSStringy2Split[l].replace(/\W/g, '').match('search_img')) {
				var srcr = (LS.LSStringy2Split[l].lastIndexOf("Favorites") + 21);
				var alt = (LS.LSStringy2Split[l].lastIndexOf('?w='));
				var idnum = LS.LSStringy2Split[l].split('searcher_image')[1].split('">')[0];

				LS.LSStringy2Slice = LS.LSStringy2Split[l].replace(/\\/g, '');
				LS.LSStringy2Slice = LS.LSStringy2Slice.slice(srcr, alt);
				LS.LStoStr3 += LS.LSStringy2Slice.split('?')[0] + ', ';

				if (LS.LStoStr3.replace(/\W/g, '').match(src.replace(/\W/g, ''))) {

					localStorage.removeItem('key_image' + idnum);
					addLS();
				}
			}
		}
		for (var r = 0; r < $('.imgsearch').length; r++) {
			var img_id = $('.imgsearch')[r].id;
			var img_src = $('#' + img_id).attr('src');

			if (src.replace(/\W/g, '').match(img_src.split('?')[0].replace(/\W/g, ''))) {

				img_id = $('#' + img_id).parent().attr('id');
				$('#' + img_id + ' .favorite').attr('src', '/images/star.png');

			}
		}

		LStoString = JSON.stringify(localStorage);
		LS.LSStringy = JSON.stringify(localStorage);
		LS.LSStringy2 = JSON.stringify(localStorage);
		localStorage.clear();

		LStoStringSplit = LStoString.split(':"');

		for (var g = 1; g < LStoStringSplit.length; g++) {
			addLSStr = LStoStringSplit[g].split('","')[0];
			addLSStr = addLSStr.replace(/"}/g, '');
			addLSStr = addLSStr.replace(/\\/g, '');
			addLSStr = addLSStr.replace(/alt="Add to Favorites">n<\/b><br>/g, 'alt="Add to Favorites"></b><br>');

			if (LStoStringSplit[g].match('search_image_blog')) {
				addLSStr = addLSStr.split('search_image_blog')[1];
				addLSStr = addLSStr.slice(2, addLSStr.length);

				localStorage.setItem('key_blog' + (g - 1), '<div class="searcher" id="searcher' + (g - 1) + '"><div id="search_image' + (g - 1) + '" class="search_image_blog">' + addLSStr + '</div></div>')
			}
			//console.log(addLSStr);
			
else if (LStoStringSplit[g].match('search_img')) {

				addLSStr = addLSStr.split('search_img')[1];
				addLSStr = addLSStr.slice(3, addLSStr.length);
				addLSStr.replace(/>/g, '');
				//newLS.replace('br ','');
				//	console.log(newLS);

				//alert(LStoStringSplit[g]);
				localStorage.setItem('key_image' + (g - 1), '<div class="searcher_image" id="searcher_image' + (g - 1) + '"><div class="search_image" id="search_img' + (g - 1) + '">' + addLSStr)

			} else if (LStoStringSplit[g].match('lessonresult')) {
				addLSStr = addLSStr.split('<div id="lessonresult')[1];
				addLSStr = '<div id="lessonresult' + addLSStr
				localStorage.setItem('key_lesson' + (g - 1), '<div class="searcher_lesson" id="searcher_lesson' + (g - 1) + '">' + addLSStr + '</div>')
			} else if (LStoStringSplit[g].match('dyk')) {
				addLSStr = addLSStr.split('id="searcher_dyk')[1];
				addLSStr = addLSStr.slice(3, (addLSStr.length + 1))

				localStorage.setItem('key_dyk' + (g - 1), '<div class="searcher_dyk" id="searcher_dyk' + (g - 1) + '">' + addLSStr + '</div>')

			}
		}

		$('#numberofresults_fav').html('<h6>Number of Favorites: ' + ($('#scrollerLS_blogs .searcher').length + $('#scrollerLS_imgs .search_image').length) + '</h6>')
	}
	addLS();

}*/

/*function runClickCheckLesson(id, url) {
	var LStoString = "";
	var LStoStrSlice = '';
	var LStoStr = ''//$('#'+id).html();
	var LStoStringSplit;
	var LSArr = [];
	var addLSStr = '';
	var image_blog_split = '';
	//var favorite = id.replace('search_image','favorite_img');

	if (!$('#' + id.replace('search_lesson', 'favorite_lesson')).attr('src').match('on')) {
		$('#bigImg4 #' + id.replace('search_lesson', 'favorite_lesson')).attr('src', '/images/star_on.png');

		var idhtml = $('#' + id).html();

		//alert(idhtml);
		
		LStoString = JSON.stringify(localStorage);

		LStoStringSplit = LStoString.split(':"');

		for (var g = 1; g < LStoStringSplit.length; g++) {
			//var src = LStoStringSplit[g].indexOf('src=');
			//var alt = LStoStringSplit[g].indexOf('alt=');
			LStoStrSlice = LStoStringSplit[g].replace(/\\/g, '');
			LStoStr += LStoStrSlice + ',';

			//
		}

		if (!LStoStr.replace(/\W/g, '').match(idhtml.replace(/\W/g, ''))) {
			localStorage.setItem('key_lesson' + (localStorage.length), '<div class="searcher_lesson" id="searcher_lesson' + localStorage.length + '">' + $('#' + id).html() + '</div>');

			addLS();

		}

	} else if ($('#' + id.replace('search_lesson', 'favorite_lesson')).attr('src').match('on')) {

		//$('#bigImg4 #'+id.replace('search_lesson','favorite_lesson')).attr('src','/images/star.png');
		//$('#bigImg5 #'+id.replace('search_lesson','favorite_lesson')).attr('src','/images/star.png');

		LS.LSStringy2 = $('#scrollerLS_blogs').html() + $('#scrollerLS_imgs').html() + $('#scrollerLS_lessons').html() + $('#scrollerLS_dyk').html();
		LS.LSStringy2Split = LS.LSStringy2.split('<div class="searcher');

		for (var l = 1; l < LS.LSStringy2Split.length; l++) {
			LS.LStoStr3 = '';

			if (LS.LSStringy2Split[l].replace(/\W/g, '').match('lessonresult')) {
				//console.log(LS.LSStringy2Split[l])
				var srcr = (LS.LSStringy2Split[l].lastIndexOf('main_link') + 17);
				var alt = (LS.LSStringy2Split[l].lastIndexOf('target="'));
				var idnum = LS.LSStringy2Split[l].split(id="searcher_lesson")[1].split('">')[0]
				LS.LSStringy2Slice = LS.LSStringy2Split[l].replace(/\\/g, '');

				LS.LSStringy2Slice = LS.LSStringy2Slice.slice(srcr, (alt - 2));

				LS.LStoStr3 += LS.LSStringy2Slice
				if (LS.LStoStr3.replace(/\W/g, '').match(url.replace(/\W/g, ''))) {

					localStorage.removeItem('key_lesson' + idnum);
					addLS();
				}
			}
		}

		LStoString += JSON.stringify(localStorage);
		localStorage.clear();
		LStoStringSplit = LStoString.split(':"');

		for (var g = 1; g < LStoStringSplit.length; g++) {
			addLSStr = LStoStringSplit[g].split('","')[0]
			addLSStr = addLSStr.replace(/"}/g, '');
			addLSStr = addLSStr.replace(/\\/g, '');
			addLSStr = addLSStr.replace(/alt="Add to Favorites">n<\/b><br>/g, 'alt="Add to Favorites"></b><br>');
			//addLSStr=addLSStr.replace(/alt="Add to Favorites">n/g,'alt="Add to Favorites"')
			if (LStoStringSplit[g].match('search_image_blog')) {
				addLSStr = addLSStr.split('search_image_blog')[1];
				addLSStr = addLSStr.slice(2, addLSStr.length);

				localStorage.setItem('key_blog' + (g - 1), '<div class="searcher" id="searcher' + (g - 1) + '"><div id="search_image' + (g - 1) + '" class="search_image_blog">' + addLSStr + '</div></div>')
			} else if (LStoStringSplit[g].match('search_img')) {

				addLSStr = addLSStr.split('search_img')[1];

				addLSStr = addLSStr.slice(addLSStr.indexOf('<img id="favorite_img'), addLSStr.length);
				addLSStr.replace(/>/g, '');

				//alert(LStoStringSplit[g]);
				localStorage.setItem('key_image' + (g - 1), '<div class="searcher_image" id="searcher_image' + (g - 1) + '"><div class="search_image" id="search_img' + (g - 1) + '">' + addLSStr)

			} else if (LStoStringSplit[g].match('lessonresult')) {
				addLSStr = addLSStr.split('<div id="lessonresult')[1];
				addLSStr = '<div id="lessonresult' + addLSStr
				localStorage.setItem('key_lesson' + (g - 1), '<div class="searcher_lesson" id="searcher_lesson' + (g - 1) + '">' + addLSStr + '</div>')
			} else if (LStoStringSplit[g].match('dyk')) {
				addLSStr = addLSStr.split('id="searcher_dyk')[1];
				addLSStr = addLSStr.slice(3, (addLSStr.length + 1))

				localStorage.setItem('key_dyk' + (g - 1), '<div class="searcher_dyk" id="searcher_dyk' + (g - 1) + '">' + addLSStr + '</div>')

			}
			addLS();
		}

	}

	$('#numberofresults_fav').html('<h6>Number of Favorites: ' + ($("#scrollerLS_blogs .searcher").length + $("#scrollerLS_imgs .search_image").length + $("#scrollerLS_lessons .main_link").length) + '</h6>')
	//alert(key);

}*/