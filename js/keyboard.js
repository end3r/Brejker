(function(){
	GAME.keyboardManager = function(e) {
		var eventObject = window.event ? event : e,
			unicode = eventObject.charCode ? eventObject.charCode : eventObject.keyCode,
			actualKey = String.fromCharCode(unicode);
		switch(actualKey) {
			case 'w': {
				GAME.player.direction = 'N';
				GAME.player.move({x:-1,y:0});
				break;
			}
			case 's': {
				GAME.player.direction = 'S';
				GAME.player.move({x:1,y:0});
				break;
			}
			case 'a': {
				GAME.player.direction = 'W';
				GAME.player.move({x:0,y:-1});
				break;
			}
			case 'd': {
				GAME.player.direction = 'E';
				GAME.player.move({x:0,y:1});
				break;
			}
			default: {;}
		}
	}
	document.onkeypress = GAME.keyboardManager;
})();