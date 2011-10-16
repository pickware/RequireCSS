var start = new Date().getTime()
	log = function(message) {
		var log = document.getElementById('log'),
			div = document.createElement('div');

		div.innerHTML = (new Date().getTime() - start) + 'ms: ' + message;

		log.appendChild(div);
	},
	success = function() {
		var body = document.getElementsByTagName('body')[0];

		body.style.backgroundColor = "green";
	};

require.config({
	paths: {
		// Alias for CSS plugin
		'css':		'../css'
	}
});