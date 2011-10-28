var requiredFlashPlayerVersion = "9.0.45";
if( !_urlBZ55340FCF8DD542A9922B ) {
	var _urlBZ55340FCF8DD542A9922B = null;
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
					_urlBZ55340FCF8DD542A9922B = ssrc.substring(0,ssrc.length-11);
				} else {
					_urlBZ55340FCF8DD542A9922B = "./";
				}
			}
		}
	}
	_urlBZ55340FCF8DD542A9922B = _urlBZ55340FCF8DD542A9922B.replace("&","%26");
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

function mootoolsLoadedBZ55340FCF8DD542A9922B() {
   loadScript(_urlBZ55340FCF8DD542A9922B+"slideshow/js/slideshow.js",slideshowLoadedBZ55340FCF8DD542A9922B);
}
function slideshowLoadedBZ55340FCF8DD542A9922B() {
   loadScript(_urlBZ55340FCF8DD542A9922B+"bz.js",bzLoadedBZ55340FCF8DD542A9922B);
}
function bzLoadedBZ55340FCF8DD542A9922B() {
    bzEmbedSWFBZ55340FCF8DD542A9922B();
}
function swfobjectLoadedBZ55340FCF8DD542A9922B() {
	if (typeof insertHTMLCodeFlag != "undefined") {
        insertHTMLCode();
    }
    if (typeof swfobject != "undefined") {
		if (!swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
			includeCSS(_urlBZ55340FCF8DD542A9922B+"slideshow/css/slideshow.css");
			includeCSS(_urlBZ55340FCF8DD542A9922B+"slideshow/css/bzSlideshow.css");
			loadScript(_urlBZ55340FCF8DD542A9922B+"slideshow/js/mootools-1.2.3.1-core-more.js",mootoolsLoadedBZ55340FCF8DD542A9922B);
		} else {
			
			loadScript(_urlBZ55340FCF8DD542A9922B+"bz.js",bzLoadedBZ55340FCF8DD542A9922B);
		}
    }
}
function swfobjectLoaded() {
	swfobjectLoadedBZ55340FCF8DD542A9922B();
}
function loadFilesBZ55340FCF8DD542A9922B() {
    if (typeof swfobject == "undefined") {
        document.write('<script type="text/javascript" src="'+_urlBZ55340FCF8DD542A9922B+"swfobject.js"+'"></script>');
    } else {
        swfobjectLoadedBZ55340FCF8DD542A9922B();
    }
}
loadFilesBZ55340FCF8DD542A9922B();
