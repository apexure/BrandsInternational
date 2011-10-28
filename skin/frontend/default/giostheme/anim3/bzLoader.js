var requiredFlashPlayerVersion = "9.0.45";
if( !_urlBZA2FC300CAA8747638AA7 ) {
	var _urlBZA2FC300CAA8747638AA7 = null;
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
					_urlBZA2FC300CAA8747638AA7 = ssrc.substring(0,ssrc.length-11);
				} else {
					_urlBZA2FC300CAA8747638AA7 = "./";
				}
			}
		}
	}
	_urlBZA2FC300CAA8747638AA7 = _urlBZA2FC300CAA8747638AA7.replace("&","%26");
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

function mootoolsLoadedBZA2FC300CAA8747638AA7() {
   loadScript(_urlBZA2FC300CAA8747638AA7+"slideshow/js/slideshow.js",slideshowLoadedBZA2FC300CAA8747638AA7);
}
function slideshowLoadedBZA2FC300CAA8747638AA7() {
   loadScript(_urlBZA2FC300CAA8747638AA7+"bz.js",bzLoadedBZA2FC300CAA8747638AA7);
}
function bzLoadedBZA2FC300CAA8747638AA7() {
    bzEmbedSWFBZA2FC300CAA8747638AA7();
}
function swfobjectLoadedBZA2FC300CAA8747638AA7() {
	if (typeof insertHTMLCodeFlag != "undefined") {
        insertHTMLCode();
    }
    if (typeof swfobject != "undefined") {
		if (!swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
			includeCSS(_urlBZA2FC300CAA8747638AA7+"slideshow/css/slideshow.css");
			includeCSS(_urlBZA2FC300CAA8747638AA7+"slideshow/css/bzSlideshow.css");
			loadScript(_urlBZA2FC300CAA8747638AA7+"slideshow/js/mootools-1.2.3.1-core-more.js",mootoolsLoadedBZA2FC300CAA8747638AA7);
		} else {
			
			loadScript(_urlBZA2FC300CAA8747638AA7+"bz.js",bzLoadedBZA2FC300CAA8747638AA7);
		}
    }
}
function swfobjectLoaded() {
	swfobjectLoadedBZA2FC300CAA8747638AA7();
}
function loadFilesBZA2FC300CAA8747638AA7() {
    if (typeof swfobject == "undefined") {
        document.write('<script type="text/javascript" src="'+_urlBZA2FC300CAA8747638AA7+"swfobject.js"+'"></script>');
    } else {
        swfobjectLoadedBZA2FC300CAA8747638AA7();
    }
}
loadFilesBZA2FC300CAA8747638AA7();
