# RequireJS css! plugin

A [RequireJS][1] plugin which loads and waits for css files. Uses the standard load event on browsers which support it (IE, Firefox 9+, Opera) and uses a script tags load & error events as a workaround (Chrome, Safari, Firefox < 9). Detection of link load event support is done using a link element with a data url, which fires onload immediately when supported.

Only caveat is that there will be no error message when a stylesheet could not be loaded in browsers not supporting the native link load event. Also beware of IE's 31 style sheets limit (fixed in IE 10).

[1]: http://requirejs.org/

# Compatability / Tested in

* Firefox 3.6, 4, 7, 9a2
* Safari 3.2, 4, 5, 5.1
* Mobile Safari 4 (iOS 3.2 & 4), 5.1 (iOS 5)
* Chrome 2, 5, 8, 10, 14
* Opera 9.5, 10, 10.6, 11, 11.5
* IE 6, 7, 8, 9

# Credits

* [Workaround for missing link load event][1] - Daniel Buchner, backalleycoder.com
* [Inspiration to build this plugin][2] - John Hann, unscriptable.com

[1]: http://www.backalleycoder.com/2011/03/20/link-tag-css-stylesheet-load-event/
[2]: https://github.com/unscriptable/curl/blob/master/src/curl/plugin/css.js
