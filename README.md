# RequireJS css! plugin

Loads and waits for css files. Uses the standard load event on browsers which support it (IE, Opera, Firefox 9+) and uses an img tags error event as a workaround (Chrome, Safari, Firefox < 9). Detection of link load event support is done using a link element with a data url, which fires onload immediately when supported.

Only caveat is that there will be no error message when a stylesheet could not be loaded in browsers not supporting the native link load event. Also beware of IE's 31 style sheets limit (fixed in IE 10).

# Compatability / Tested in

* Firefox 7, 9a2
* Safari 5.1
* Chrome 14
* Opera 10, 11.5
* IE 6, 9

# Credits

* [Workaround for missing link load event][1] - Daniel Buchner, backalleycoder.com
* [Inspiration to build this plugin][2] - John Hann, unscriptable.com

[1]: http://www.backalleycoder.com/2011/03/20/link-tag-css-stylesheet-load-event/
[2]: https://github.com/unscriptable/curl/blob/master/src/curl/plugin/css.js
