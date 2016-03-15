///Javascript

function runImgFav(title, type, classy, state, href_or_src) {

	for (var r = 0; r < $('.' + classy + '').length; r++) {
		var img_id = $('.'+classy+'')[r].id;

		if (href_or_src == 'src') {
			var href_src = $('.'+classy+'')[r].src.split('?')[0];
		} else {
			var href_src = $('.'+classy+'')[r].href;
		}
		if (href_src.match('.gov')) {
			href_src = href_src.split('.gov')[1]//.slice(href_src.lastIndexOf('/'), href_src.length)
		}
		img_id = divParent(img_id);
		favorite_id = $('#' + img_id + ' .search_favorite').attr('id');
		var star_compare = strCompare(title, href_src, favorite_id, state, fillStar);

	}
}

function addToStorage(id, favorite, title, type, classy2, href_or_src, state) {

	if (!id.match('profile')) {
		var idhtml = $('#' + id).html();
		var idhtml2 = idhtml;
		var idhtml2 = idhtml.replace('style="display:block', 'style="display:none');
	} else {

		var idhtml = $('#' + id).html();
		var idhtml2 = idhtml.replace('style="display:none;" id', 'style="display:block;" id');
	}
	idhtml2 = idhtml2.replace('font-weight:normal;display:none', 'font-weight:normal;display:block');
	idhtml2 = idhtml2.replace(' class="blogdesc" style="display:block"', ' class="blogdesc" style="display:none"');
	idhtml2 = idhtml2.replace(/_searched/g, '_searched_storage');
	idhtml2 = idhtml2.replace(/_profile/g, '_profile_storage');
	idhtml2 = idhtml2.replace(/searchblog/g, '_searchblog_storage');
	idhtml2 = idhtml2.replace(/_big/g, '');

	if (type == "image") {
		var idhtml2splitter1 = idhtml2.split('?w=')[0]
		var idhtml2splitter2 = idhtml2.split('?w=')[1];

		idhtml2 = idhtml2splitter1 + '?w=' + resp_des_smImg.width + idhtml2splitter2.slice(3, idhtml2splitter2.length);
		localStorage.setItem('key_' + type + (localStorage.length), '<div class="searcher_' + type + '" id="searcher_' + type + localStorage.length + '">' + idhtml2 + '</div>');
		addLS();
		runImgFav(title, type, classy2, 'on', href_or_src);
	}

	if (type == "blog") {

		localStorage.setItem('key_' + type + (localStorage.length), '<div class="searcher_' + type + '" id="searcher_' + type + localStorage.length + '">' + idhtml2 + '</div><div style="clear:both"></div>');
		addLS();

		runImgFav(title, type, classy2, 'on', href_or_src);

	} else if (type == "lesson") {
		localStorage.setItem('key_' + type + (localStorage.length), '<div class="searcher_' + type + '" id="searcher_' + type + localStorage.length + '">' + idhtml2 + '</div><div style="clear:both"></div>');
		addLS();
		runImgFav(title, type, classy2, 'on', href_or_src);
	}

}

function removeFromStorage(title, type, classy2, href_or_src) {
	var title = title.split('?')[0];

	LS.LSStringy2 = $('#scrollerLS_blogs').html() + $('#scrollerLS_imgs').html() + $('#scrollerLS_lessons').html() + $('#scrollerLS_dyk').html();

	LS.LSStringy2Split = LS.LSStringy2.split('<div class="searcher');

	//console.log(LS.LSStringy2Split);
	for (var l = 1; l < LS.LSStringy2Split.length; l++) {
		LS.LStoStr3 = '';
		var srcr = (LS.LSStringy2Split[l].lastIndexOf(classy2));
		var alt = (LS.LSStringy2Split[l].lastIndexOf('title='));
		var idnum = LS.LSStringy2Split[l].split(id="searcher")[1].split('">')[0].replace('_' + type, '');
		LS.LSStringy2Slice = LS.LSStringy2Split[l].replace(/\\/g, '');
		LS.LSStringy2Slice = LS.LSStringy2Slice.slice(srcr + 16, alt);
		LS.LSStringy2Slice = LS.LSStringy2Slice.replace(/"/g, '').replace(/ /g, '');
		LS.LStoStr3 += LS.LSStringy2Slice
		if (LS.LStoStr3.replace(/\W/g, '').match(title.replace(/\W/g, ''))) {
			localStorage.removeItem('key_' + type + idnum);
			addLS();
			reRunStorage();
			runImgFav(title, type, classy2, 'off', href_or_src);

		}
	}

}

function runClickCheck(favorite, title, classy, type, classy2, href_or_src, state) {
	var id = $('#' + favorite).parent().parent().attr('id')

	if (!$('#' + favorite).attr('src').match('on')) {

		$('#' + favorite).removeClass('off').addClass('on');
		$('#' + favorite).attr('src', '/images/star_on.png');
		addToStorage(id, favorite, title, type, classy2, href_or_src);

	} else {

		$('#' + favorite).removeClass('on').addClass('off');
		$('#' + favorite).attr('src', '/images/star.png');
		removeFromStorage(title, type, classy2, href_or_src)
	}

}

///////////////////Encapsulate this in a function that can be used by all the runClickChecks///////////////////
function reRunStorage() {

	var LStoString = "";

	LStoString += JSON.stringify(localStorage);
	LS.LSStringy = JSON.stringify(localStorage);
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

			//var slicer = addLSStr.split('href="')[1]
			//title = slicer.slice(0, (slicer.indexOf('title')-2));
			localStorage.setItem('key_blog' + (g - 1), '<div class="searcher_blog" id="searcher_blog' + (g - 1) + '"><div id="search_image_img_storage' + (g - 1) + '" class="search_image_blog">' + addLSStr + '</div></div>')
			//runImgFav(title, 'titlelink', 'on', 'href');
		}
		//console.log(addLSStr);
		
else if (LStoStringSplit[g].match('search_img')) {

			addLSStr = addLSStr.split('blogphotos')[1];
			var indexaddLS = addLSStr.indexOf('">')
			addLSStr = addLSStr.slice(indexaddLS + 2, addLSStr.length);
			addLSStr.replace(/>/g, '');

			localStorage.setItem('key_image' + (g - 1), '<div class="searcher_image" id="searcher_image' + (g - 1) + '"><div class="blogphotos" id="search_img_storage' + (g - 1) + '">' + addLSStr)

		} else if (LStoStringSplit[g].match('lessonsearch')) {
			
			addLSStr = addLSStr.split('lessonsearch">')[1];
			
			localStorage.setItem('key_lesson' + (g - 1), '<div class="searcher_lesson" id="searcher_lesson' + (g - 1) + '"><div id="search_storage_lesson' + (g - 1) + '" style="padding-bottom:20px;list-style:none;" class="lessonsearch">' + addLSStr + '</div>');
		} else if (LStoStringSplit[g].match('dyk')) {
			addLSStr = addLSStr.split('id="searcher_dyk')[1];
			addLSStr = addLSStr.slice(3, (addLSStr.length + 1))

			localStorage.setItem('key_dyk' + (g - 1), '<div class="searcher_dyk" id="searcher_dyk' + (g - 1) + '">' + addLSStr + '</div>');

		}
	}

	$('#numberofresults_fav').html('<h6>Number of Favorites: ' + ($("#scrollerLS_blogs .searcher_blog").length + $("#scrollerLS_imgs .searcher_image").length + $("#scrollerLS_lessons .searcher_lesson").length + $("#scrollerLS_dyk .searcher_dyk").length) + '</h6>')

	//alert(key);

	addLS();

}

function divParent(favorite) {
	var fav = $('#' + favorite).parent().parent().attr('id')
	return fav;
}

function fillStar(id, state) {
	if (state == "on") {
		$('#' + id).attr('src', '/images/star_on.png');
		$('#' + id).removeClass('off').addClass('on')
	} else {
		$('#' + id).attr('src', '/images/star.png');
		$('#' + id).removeClass('on').addClass('off');
	}
}

function runClickCheckDYK(id, status, url) {

	var LStoString = "";
	var LStoStrSlice = '';
	var LStoStr = ''//$('#'+id).html();
	var LStoStringSplit;
	var LSArr = [];
	var addLSStr = '';
	var image_blog_split = '';

	LStoString = JSON.stringify(localStorage);

	if (status == 'on' && !LStoString.replace(/\W/g, '').match($('#' + id + ' a img').attr('src').split('?')[0].replace(/\W/g, ''))) {

		$('#' + id.replace('search_dyk', 'favorite_dyk')).attr('src', '/images/star.png');
		//LS.comp_str+=$('#'+id).html();
		LS.comp_str += $('#' + id + ' a img').attr('src') + '**'
		if (localStorage.length % 2 == 0) {
			var idhtml = '<div class="square green_square" id="box' + localStorage.length + '_fav" style="' + $('#' + id).attr('style') + ' opacity:1; float:left;"><img id="favorite_dyk' + localStorage.length + '" class="search_favorite_image_on" style="border:none;cursor:pointer" onclick="runClickCheckDYK(\'box' + localStorage.length + '\', \'off\', \'' + url + '\')" src="/images/star_on.png" alt="Add to Favorites">' + $('#' + id).html() + '</div>';
		} else {
			var idhtml = '<div class="square blue_square" id="box' + localStorage.length + '_fav" style="' + $('#' + id).attr('style') + ' opacity:1; float:left;"><img id="favorite_dyk' + localStorage.length + '" class="search_favorite_image_on" style="border:none;cursor:pointer" onclick="runClickCheckDYK(\'box' + localStorage.length + '\', \'off\', \'' + url + '\')" src="/images/star_on.png" alt="Add to Favorites">' + $('#' + id).html() + '</div>';
		}
		LStoString = JSON.stringify(localStorage);

		LStoStringSplit = LStoString.split(':"');
		for (var g = 1; g < LStoStringSplit.length; g++) {

			LStoStrSlice = LStoStringSplit[g].replace(/\\/g, '');

			LStoStr += LStoStrSlice + ',';

		}

		if (!LStoStr.replace(/\W/g, '').match(idhtml.replace(/\W/g, ''))) {
			localStorage.setItem('key_dyk' + (localStorage.length), '<div class="searcher_dyk" id="searcher_dyk' + ((localStorage.length)) + '">' + idhtml + '</div>');

		}
	} else if (status == 'off') {
		LStoString = "";
		LS.LSStringy2 = $('#scrollerLS_blogs').html() + $('#scrollerLS_imgs').html() + $('#scrollerLS_lessons').html() + $('#scrollerLS_dyk').html();
		LS.LSStringy2Split = LS.LSStringy2.split('<div class="searcher');

		for (var l = 1; l < LS.LSStringy2Split.length; l++) {
			LS.LStoStr3 = '';

			if (LS.LSStringy2Split[l].replace(/\W/g, '').match('dyk')) {
				//console.log(LS.LSStringy2Split[l])
				var srcr = (LS.LSStringy2Split[l].lastIndexOf('bigImgClick') + 18);
				var alt = (LS.LSStringy2Split[l].lastIndexOf('title'));
				var idnum = LS.LSStringy2Split[l].split(id="searcher_dyk")[1].split('">')[0];
				LS.LSStringy2Slice = LS.LSStringy2Split[l].replace(/\\/g, '');

				LS.LSStringy2Slice = LS.LSStringy2Slice.slice(srcr, (alt - 2));

				LS.LStoStr3 += LS.LSStringy2Slice.split('?')[0];
				if (LS.LStoStr3.replace(/\W/g, '').match(url.replace(/\W/g, ''))) {
					//console.log('key_dyk'+idnum)

					localStorage.removeItem('key_dyk' + idnum);
					
					LStoString += JSON.stringify(localStorage);
					addLS();
				}
			}
		}
		reRunStorage();
		$('#numberofresults_fav').html('<h6>Number of Favorites: ' + ($("#scrollerLS_blogs .searcher").length + $("#scrollerLS_imgs .search_image").length + $("#scrollerLS_lessons .main_link").length + $("#scrollerLS_dyk .searcher_dyk").length) + '</h6>')
		//alert(key);

	}
	addLS();
}

///////////////////////////Sharing Favorites///////////////////////////

function get_short_url(long_url, login, api_key, func) {
	$.getJSON("http://api.bitly.com/v3/shorten?callback=?", {
		"format" : "json",
		"apiKey" : api_key,
		"login" : login,
		"longUrl" : long_url
	}, function(response) {
		func(response.data.url);
	});
}

function showEmailForm() {
	$('#mailform').slideToggle('500');
	$('#info').slideToggle('700');
	$('#trash').slideToggle('700');
	$('#facebook_ls').slideToggle('700');
	$('#twitter_ls').slideToggle('700');
	$('#li_ls').slideToggle('700');
	$('#google_plus').slideToggle('700');
	$('#evernote').slideToggle('700');
	$('#google_bk').slideToggle('700')
}

function setUpSharer(service) {
	var mailImgs = $('.ImgClick');
	var mailurls = $('.search_image_text .searchlink');
	console.log(mailurls)
	var mailImages = $('.imgsearch');
	var lessonobj = $('.searcher_lesson');
	lesson.lessons = '';
	var maildyks = $('.sm_image');
	LS.maildyk = '';
	var emailTxt = '';
	LS.images = '';
	for (var h = 0; h < mailImgs.length; h++) {
		var mail_compare_blogs = strCompare(mailImgs[h].id, 'storage');

		if (mail_compare_blogs == true) {
			console.log(mailImgs[h].id)
			var mailImg = mailImgs[h].src.replace('?w=100', '');
			var mailurl = mailurls[h].href;
			var mailtitle = mailImgs[h].alt;
			console.log(mailtitle);
			mailtitle = mailtitle.replace(/[\u2018\u2019]/g, "'");
			mailtitle = mailtitle.replace(/[\u201C\u201D]/g, '\"');
			emailTxt += mailImg + '**' + mailurl + '**' + mailtitle + '@@';
		}
	}

	for (var t = 0; t < maildyks.length; t++) {
		var maildyk = maildyks[t].src;
		var altdyk = maildyks[t].alt;
		var titledyk = maildyks[t].title;
		LS.maildyk += altdyk + '**' + titledyk + '**' + maildyk;
	}

	for (var g = 0; g < lessonobj.length; g++) {

		var mail_compare_lessons = strCompare(lessonobj[g].innerHTML, 'storage');

		if (mail_compare_lessons == true) {
			var lessonid = lessonobj[g].id;
			var href = $('#' + lessonid + ' a.titlelink').attr('href');
			var title = $('#' + lessonid + ' a.titlelink').html();
			var authorhref = $('#' + lessonid + ' .author a').attr('href');
			var author = $('#' + lessonid + ' .author').html().replace('Author: ', '');
			var gradelevel = $('#' + lessonid + ' .grades').html();

			lesson.lessons += href + '**' + title + '**' + authorhref + '**' + author + '**' + gradelevel + '!!!';
		}
	}

	for (var t = 0; t < mailImages.length; t++) {
		var mail_compare_images = strCompare(mailImages[t].id, 'storage');
		if (mail_compare_images == true) {
			LS.images += mailImages[t].src.replace('?w=150', '') + '::' + mailImages[t].alt + '$$';
		}
	}
	console.log(mailImgs[0])
	if (mailImgs[0].src === 'undefined') {
		var imagesharer = mailImages[0].src;
	} else {
		var imagesharer = mailImgs[0].src;
	}
	imagesharer = imagesharer.split('::')[0].replace('?w=150', '');
	var final_text = '&message=' + emailTxt + '&images=' + LS.images + '&lessons=' + lesson.lessons + '&dyk=' + LS.maildyk;
	var login = "robostheimer";
	var api_key = "R_06ae3d8226a246f2a0bb68afe44c8379";
	var long_url = 'http://www.tas.noaa.gov/php/send_html.php?email=teacher@sea' + final_text;
	var short_url = get_short_url(long_url, login, api_key, function(shorturl) {
		console.log(shorturl);
		runService(service, shorturl, final_text, imagesharer);
	});

}

function showSuccess(email, shorturl) {

	$('#success').html('An email has been sent to: ' + email + '. <a href="' + shorturl + '" target="_blank">View that email in your browser</a>').fadeIn().delay(5000).fadeOut('slow');
}

function runService(service, shorturl, url, imagesharer) {

	if (service == "email_html") {
		simpleHttpRequest('/php/send_html.php?email=' + $('#email').val() + url + '&shorturl=' + shorturl, showSuccess($('#email').val(), shorturl));
	}
	if (service == "email_plain") {

		simpleHttpRequest('/php/send_plain.php?email=' + $('#email').val() + url, showSuccess($('#email').val(), shorturl));
	}
	if (service == "facebook") {
		window.open('https://www.facebook.com/sharer/sharer.php?+s=100+&p[url]=' + shorturl + '&p[images][0]=' + imagesharer + '&p[title]=NOAA+Teacher+at+Sea%20Favorites&p[summary]=My+Favorite+NOAA+Teacher+at+Sea+blogposts+and+photos', '_blank');
	}
	if (service == "twitter") {
		window.open('https://twitter.com/intent/tweet?original_referer=http://www.tas.noaa.gov&text=Check out my favorite resources from NOAA Teacher at Sea&url=' + shorturl)
	}
	if (service == "linkedin") {
		window.open('http://www.linkedin.com/shareArticle?summary=&ro=false&title=Check out my NOAA Teacher at Sea Favorite Blogposts and Images&mini=true&url=' + shorturl + '&source=http://teacheratsea.noaa.gov')
	}
	if (service == "google") {
		window.open('https://plus.google.com/share?url=' + shorturl)
	}
	if (service == "evernote") {
		window.open('http://www.evernote.com/clip.action?url=' + shorturl + '&title=TAS Favorites&body=<a href="' + shorturl + '">' + shorturl + '</a>')
	}
}