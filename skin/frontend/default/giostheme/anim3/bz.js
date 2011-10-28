function bzGetFlashPlayerBZA2FC300CAA8747638AA7() {
	var div = document.getElementById('SWBZA2FC300CAA8747638AA7');
	if (div) {
		div.innerHTML = '<div id="showBZA2FC300CAA8747638AA7" class="slideshow"><img src="'+_urlBZA2FC300CAA8747638AA7+'slideshow/images/5551174B-D9DF-4F30-90CF.jpg" alt="Men" /></div>';
		var data = {
			'5551174B-D9DF-4F30-90CF.jpg': { caption: 'Men' },
			'AA066A86-24B0-4DC1-BF59.jpg': { caption: 'Women' }
		};
		if (typeof Slideshow != "undefined") {
			var myHu = _urlBZA2FC300CAA8747638AA7+'slideshow/images/';
			var myLoader = {'animate': [_urlBZA2FC300CAA8747638AA7+'slideshow/css/loader-#.png', 12]};
			var myShow = new Slideshow('showBZA2FC300CAA8747638AA7',data, {controller: false, width: 990, height: 200, thumbnails: false, hu: myHu, loader: myLoader});
		} else {
			alert("Slideshow not loaded");
		}
	} else {
		alert("no SWBZA2FC300CAA8747638AA7 div");
	}
}
function checkLocalWarning() {
	if (typeof checkLocalWarningFlag != "undefined") {
		var path = _urlBZA2FC300CAA8747638AA7.substring(0,8);
		if (path.match('file:\/\/')) {
			var element = document.getElementById('local-warning');
			element.style.display = '';
		}
	}
}
function bzEmbedSWFBZA2FC300CAA8747638AA7() {
	if (swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
		var flashvars = {
			xmlPath: _urlBZA2FC300CAA8747638AA7 + "bz.xml",
			imgPath: _urlBZA2FC300CAA8747638AA7 + "img",
			soundPath: false,
			themeMode: "2"
		};
		var params = {
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {};
		swfobject.embedSWF(_urlBZA2FC300CAA8747638AA7 + "bzAnimation.swf", "SWBZA2FC300CAA8747638AA7", "990", "200", requiredFlashPlayerVersion, false, flashvars, params, attributes);
		swfobject.addDomLoadEvent(checkLocalWarning);
	} else {
		swfobject.addDomLoadEvent(bzGetFlashPlayerBZA2FC300CAA8747638AA7);
	}
}
