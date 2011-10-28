var requiredFlashPlayerVersion = "9.0.45";
if( !_urlBZ6F45FCE7BE064DFBAB62 ) {
	var _urlBZ6F45FCE7BE064DFBAB62 = null;
	var scripts = document.getElementsByTagName("script");
	for( var i=0;i<scripts.length;i++ ) {
		var s = scripts[i];
		var ssrc = "";
		try {
			ssrc = s.src;
		} catch( e ) {
			ssrc = "";
		}
		if (typeof ssrc != "undefined") {
			if( ssrc && ssrc.match(/bzLoader\.js/) ) {
				if (ssrc.length>11) {
					_urlBZ6F45FCE7BE064DFBAB62 = ssrc.substring(0,ssrc.length-11);
				} else {
					_urlBZ6F45FCE7BE064DFBAB62 = "./";
				}
			}
		}
	}
	_urlBZ6F45FCE7BE064DFBAB62 = _urlBZ6F45FCE7BE064DFBAB62.replace("&","%26");
}
function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
				script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        //Others
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
function includeJS(filename) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
    document.getElementsByTagName('head')[0].appendChild(fileref);
}
function includeCSS(filename) {
    var fileref = document.createElement('link');
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName('head')[0].appendChild(fileref);
}

function mootoolsLoadedBZ6F45FCE7BE064DFBAB62() {
   loadScript(_urlBZ6F45FCE7BE064DFBAB62+"slideshow/js/slideshow.js",slideshowLoadedBZ6F45FCE7BE064DFBAB62);
}
function slideshowLoadedBZ6F45FCE7BE064DFBAB62() {
   loadScript(_urlBZ6F45FCE7BE064DFBAB62+"bz.js",bzLoadedBZ6F45FCE7BE064DFBAB62);
}
function bzLoadedBZ6F45FCE7BE064DFBAB62() {
    bzEmbedSWFBZ6F45FCE7BE064DFBAB62();
}
function swfobjectLoadedBZ6F45FCE7BE064DFBAB62() {
	if (typeof insertHTMLCodeFlag != "undefined") {
        insertHTMLCode();
    }
    if (typeof swfobject != "undefined") {
		if (!swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
			includeCSS(_urlBZ6F45FCE7BE064DFBAB62+"slideshow/css/slideshow.css");
			includeCSS(_urlBZ6F45FCE7BE064DFBAB62+"slideshow/css/bzSlideshow.css");
			loadScript(_urlBZ6F45FCE7BE064DFBAB62+"slideshow/js/mootools-1.2.3.1-core-more.js",mootoolsLoadedBZ6F45FCE7BE064DFBAB62);
		} else {
			
			loadScript(_urlBZ6F45FCE7BE064DFBAB62+"bz.js",bzLoadedBZ6F45FCE7BE064DFBAB62);
		}
    }
}
function swfobjectLoaded() {
	swfobjectLoadedBZ6F45FCE7BE064DFBAB62();
}
function loadFilesBZ6F45FCE7BE064DFBAB62() {
    if (typeof swfobject == "undefined") {
        document.write('<script type="text/javascript" src="'+_urlBZ6F45FCE7BE064DFBAB62+"swfobject.js"+'"></script>');
    } else {
        swfobjectLoadedBZ6F45FCE7BE064DFBAB62();
    }
}
loadFilesBZ6F45FCE7BE064DFBAB62();
