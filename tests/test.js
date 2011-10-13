var start = new Date().getTime()
	log = function(message) {
	$('#log').append('<div>' + (new Date().getTime() - start) + 'ms: ' + message + '</div>');
};

require.config({
	paths: {
		// Alias for CSS plugin
		'css':		'../css'
	}
});