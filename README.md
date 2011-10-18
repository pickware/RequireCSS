# RequireCSS (RequireJS _css!_ plugin)

A [RequireJS][1] plugin which loads and waits for css files. Uses the standard load event on browsers which support it (IE, Firefox 9+, Opera) and uses a script tags load & error events as a workaround (Chrome, Safari, Firefox < 9). Detection of link load event support is done using a link element with a data url, which fires onload immediately when supported.

Only caveats __in browsers not supporting the native link load event are that there will be JavaScript parse errors__ (since browsers try to interpret the dummy script tags used for load event detection) and there will be no RequireJS error message when a stylesheet could not be found/loaded. Also beware of IE's 31 style sheets limit (fixed in IE 10).

[1]: http://requirejs.org/

# Compatibility

* Firefox 1.0.1+
* Safari 3.2+
* Mobile Safari 4 (iOS 3.2)+
* Chrome 1+
* Opera 9.5+
* IE 6+

# Planned

* Media-Query support
* r.js optimizer support

# Credits

* [Workaround for missing link load event][1] - Daniel Buchner, backalleycoder.com
* [Inspiration to build this plugin][2] - John Hann, unscriptable.com
* [Independently developed some of the same techniques and describes them in details][3] - Julian Aubourg, jaubourg.net

[1]: http://www.backalleycoder.com/2011/03/20/link-tag-css-stylesheet-load-event/
[2]: https://github.com/unscriptable/curl/blob/master/src/curl/plugin/css.js
[3]: http://jaubourg.net/feature-testing-impossible-data-uri-and-defer
