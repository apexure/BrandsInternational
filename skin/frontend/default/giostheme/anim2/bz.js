function bzGetFlashPlayerBZ6F45FCE7BE064DFBAB62() {
	var div = document.getElementById('SWBZ6F45FCE7BE064DFBAB62');
	if (div) {
		div.innerHTML = '<div id="showBZ6F45FCE7BE064DFBAB62" class="slideshow"><img src="'+_urlBZ6F45FCE7BE064DFBAB62+'slideshow/images/B058D408-389D-4F04-8A62.jpg" alt="Kids" /></div>';
		var data = {
			'B058D408-389D-4F04-8A62.jpg': { caption: 'Kids' },
			'1C345977-FCCB-477C-B5F1.jpg': { caption: 'Outlet' },
			'E4FFE427-DDD0-4DFF-8E78.jpg': { caption: 'Skate' },
			'025AB398-024B-4BE2-B73E.jpg': { caption: 'Snow' }
		};
		if (typeof Slideshow != "undefined") {
			var myHu = _urlBZ6F45FCE7BE064DFBAB62+'slideshow/images/';
			var myLoader = {'animate': [_urlBZ6F45FCE7BE064DFBAB62+'slideshow/css/loader-#.png', 12]};
			var myShow = new Slideshow('showBZ6F45FCE7BE064DFBAB62',data, {controller: false, width: 990, height: 245, thumbnails: false, hu: myHu, loader: myLoader});
		} else {
			alert("Slideshow not loaded");
		}
	} else {
		alert("no SWBZ6F45FCE7BE064DFBAB62 div");
	}
}
function checkLocalWarning() {
	if (typeof checkLocalWarningFlag != "undefined") {
		var path = _urlBZ6F45FCE7BE064DFBAB62.substring(0,8);
		if (path.match('file:\/\/')) {
			var element = document.getElementById('local-warning');
			element.style.display = '';
		}
	}
}
function bzEmbedSWFBZ6F45FCE7BE064DFBAB62() {
	if (swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
		var flashvars = {
			xmlPath: _urlBZ6F45FCE7BE064DFBAB62 + "bz.xml",
			imgPath: _urlBZ6F45FCE7BE064DFBAB62 + "img",
			soundPath: false,
			themeMode: "2"
		};
		var params = {
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {};
		swfobject.embedSWF(_urlBZ6F45FCE7BE064DFBAB62 + "bzAnimation.swf", "SWBZ6F45FCE7BE064DFBAB62", "990", "245", requiredFlashPlayerVersion, false, flashvars, params, attributes);
		swfobject.addDomLoadEvent(checkLocalWarning);
	} else {
		swfobject.addDomLoadEvent(bzGetFlashPlayerBZ6F45FCE7BE064DFBAB62);
	}
}
