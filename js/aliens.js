(function(){
	GAME.aliens = {};
	GAME.aliens.timer = false;

	GAME.aliens.action = function() {
		var t = setTimeout("GAME.aliens.action()",1000);
		// do stuff here - move aliens
		console.log('action');
	};

	GAME.aliens.start = function() {
		if (!GAME.aliens.timer) {
			GAME.aliens.timer = true;
			GAME.aliens.action();
		}
	}
})();