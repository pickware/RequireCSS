var start = new Date().getTime()
	log = function(message) {
	$('#log').append('<div>' + (new Date().getTime() - start) + 'ms: ' + message + '</div>');
};

$(function() {
	var div = $('#test');

	require([
		'css!test'
	], function() {
		if (div.height() == 100) {
			log('Loaded CSS one');
	
			require([
				'css!test2.css'
			], function() {
				if (div.height() == 200) {
					log('Loaded CSS two');
				} else {
					log('two failed');
				}
			});
		} else {
			log('one failed');
		}
	});
});