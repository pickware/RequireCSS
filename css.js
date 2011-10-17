/**
 * @license RequireCSS 0.3.0 Copyright (c) 2011, VIISON All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/VIISON/RequireCSS for details
 */
(function () {
	"use strict";

	var head = document.head || document.getElementsByTagName('head')[0],
		// Eliminate browsers that admit to not support the link load event (e.g. Firefox)
		nativeLoad = document.createElement('link').onload === null ? undefined : false;

	function createLink(url) {
		var link = document.createElement('link');

		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;

		return link;
	}

	function styleSheetLoaded(url) {
		// Get absolute url
		var a = document.createElement('a'),
			i;
		a.href = url;

		for (i in document.styleSheets) {
			if (document.styleSheets[i].href === a.href) {
				return true;
			}
		}

		return false;
	}

	define(function () {
		var css;

		css = {
			version: '0.3.0',

			testLoad: function (url, load) {
				// Test if the browser supports the link load event,
				// in case we don't know yet (mostly WebKit)
				if (nativeLoad === undefined) {
					// Create a link element with a data url,
					// it would fire a load event immediately
					var link = createLink('data:text/css,');

					link.onload = function () {
						// Native link load event works
						nativeLoad = true;
					};

					head.appendChild(link);

					// Schedule function in event loop, this will
					// execute after a potential execution of the link onload
					setTimeout(function () {
						head.removeChild(link);

						if (nativeLoad !== true) {
							// Native link load event is broken
							nativeLoad = false;
						}

						css.loadSwitch(url, load);
					}, 0);
				} else {
					css.loadSwitch(url, load);
				}
			},

			loadSwitch: function (url, load) {
				if (nativeLoad) {
					css.loadLink(url, load);
				} else {
					css.loadScript(url, load);
				}
			},

			/**
			 * Load using the browsers built-in load event on link tags
			 */
			loadLink: function (url, load) {
				var link = createLink(url);

				link.onload = function () {
					load();
				};

				head.appendChild(link);
			},

			/**
			 * Insert a script tag and use it's onload & onerror to know when
			 * the CSS is loaded, this will unfortunately also fire on other
			 * errors (file not found, network problems)
			 */
			loadScript: function (url, load) {
				var link = createLink(url),
					script = document.createElement('script');

				head.appendChild(link);

				script.onload = script.onerror = function () {
					head.removeChild(script);

					// In Safari the stylesheet might not yet be applied, when
					// the script is loaded so we poll document.styleSheets for it
					var checkLoaded = function () {
						if (styleSheetLoaded(url)) {
							load();

							return;
						}

						setTimeout(checkLoaded, 25);
					};
					checkLoaded();
				};
				script.src = url;

				head.appendChild(script);
			},

			load: function (name, req, load, config) {
				// Append default extension
				var url = name.search(/\.(css|less|scss)$/i) === -1 ? name + '.css' : name;

				css.testLoad(req.toUrl(url), load);
			}
		};

		return css;
	});
}());