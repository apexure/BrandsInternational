function bzGetFlashPlayerBZ55340FCF8DD542A9922B() {
	var div = document.getElementById('SWBZ55340FCF8DD542A9922B');
	if (div) {
		div.innerHTML = '<div id="showBZ55340FCF8DD542A9922B" class="slideshow"><img src="'+_urlBZ55340FCF8DD542A9922B+'slideshow/images/6113CB67-2AD7-4E24-8BBC.jpg" alt="kids" /></div>';
		var data = {
			'6113CB67-2AD7-4E24-8BBC.jpg': { caption: 'kids', href: '#' },
			'9F4AA266-C682-4A45-85D2.jpg': { caption: 'men', href: '#' },
			'FCA9F2F8-E759-4C00-95E8.jpg': { caption: 'skate', href: '#' },
			'663C492B-913B-4049-B8DF.jpg': { caption: 'snow', href: '#' },
			'7400ED00-EC67-4D00-9EB1.jpg': { caption: 'women', href: '#' }
		};
		if (typeof Slideshow != "undefined") {
			var myHu = _urlBZ55340FCF8DD542A9922B+'slideshow/images/';
			var myLoader = {'animate': [_urlBZ55340FCF8DD542A9922B+'slideshow/css/loader-#.png', 12]};
			var myShow = new Slideshow('showBZ55340FCF8DD542A9922B',data, {controller: false, width: 990, height: 500, thumbnails: false, hu: myHu, loader: myLoader});
		} else {
			alert("Slideshow not loaded");
		}
	} else {
		alert("no SWBZ55340FCF8DD542A9922B div");
	}
}
function checkLocalWarning() {
	if (typeof checkLocalWarningFlag != "undefined") {
		var path = _urlBZ55340FCF8DD542A9922B.substring(0,8);
		if (path.match('file:\/\/')) {
			var element = document.getElementById('local-warning');
			element.style.display = '';
		}
	}
}
function bzEmbedSWFBZ55340FCF8DD542A9922B() {
	if (swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
		var flashvars = {
			xmlPath: _urlBZ55340FCF8DD542A9922B + "bz.xml",
			imgPath: _urlBZ55340FCF8DD542A9922B + "img",
			soundPath: false,
			themeMode: "2"
		};
		var params = {
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {};
		swfobject.embedSWF(_urlBZ55340FCF8DD542A9922B + "bzAnimation.swf", "SWBZ55340FCF8DD542A9922B", "990", "500", requiredFlashPlayerVersion, false, flashvars, params, attributes);
		swfobject.addDomLoadEvent(checkLocalWarning);
	} else {
		swfobject.addDomLoadEvent(bzGetFlashPlayerBZ55340FCF8DD542A9922B);
	}
}
