(function(){
	GAME.keyboardManager = function(e) {
		var eventObject = window.event ? event : e,
			unicode = eventObject.charCode ? eventObject.charCode : eventObject.keyCode,
			actualKey = String.fromCharCode(unicode),
			dir = GAME.config.DIRECTIONS;
		switch(actualKey) {
			case 'w': {
				GAME.player.direction = 'N';
				GAME.player.move(dir.top);
				break;
			}
			case 's': {
				GAME.player.direction = 'S';
				GAME.player.move(dir.bottom);
				break;
			}
			case 'a': {
				GAME.player.direction = 'W';
				GAME.player.move(dir.left);
				break;
			}
			case 'd': {
				GAME.player.direction = 'E';
				GAME.player.move(dir.right);
				break;
			}
			default: {;}
		}
	}
	document.onkeypress = GAME.keyboardManager;
})();