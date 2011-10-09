/**
 * @license RequireJS css 0.0.1 Copyright (c) 2011, VIISON All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/viison/requirejs-css for details
 */
(function () {
	
	var head = document.head || document.getElementsByTagName('head')[0],
		body = document.body || document.getElementsByTagName('body')[0],
		// Eliminate browsers that admit to not support the link load event (e.g. Firefox)
		nativeLoad = document.createElement('link').onload === null ? undefined : false;

	function createLink(url) {
		var link = document.createElement('link');

		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;

		return link;
	}

	define(function () {
		var css;

		css = {
			version: '0.0.1',

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
					css.loadImage(url, load);
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
			 * Insert an image tag and use it's onerror to know when the CSS
			 * is loaded, this will unfortunately also fire on other errors
			 * (file not found, network down)
			 */
			loadImage: function (url, load) {
				var link = createLink(url),
					img = document.createElement('img');

				head.appendChild(link);

				img.onerror = function (error) {
					load();

					body.removeChild(img);
				};
				img.src = url;
				img.style.display = 'none';

				body.appendChild(img);
			},

			load: function (name, req, load, config) {
				var url = name;

				// Append default extension
				if (url.search(/\.(css|less|scss|sass)$/i) == -1)
					url += '.css';

				css.testLoad(req.toUrl(url), load);
			}
		};

		return css;
	});
}());