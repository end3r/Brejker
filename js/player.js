(function(){
	GAME.player = {};
	GAME.player.directions = [ 'N1','N2','S1','S2','W1','W2','E1','E2' ];
	
	var playerHTML = document.createElement('p');
		playerHTML.id = 'player';
	//	playerHTML.className = 'playerSpriteN1';
	//	GAME.player.posX = 1;
	//	GAME.player.posY = 1;
	
	GAME.player.deploy = function(pos,dir) {
		GAME.player.pos = pos;
		GAME.player.direction = dir;
		playerHTML.className = 'playerSprite'+dir;
		GAME.player.mod = 1;
		GAME.player.html = playerHTML;
		var cell = document.getElementById('id_'+pos.x+'_'+pos.y);
		cell.appendChild(GAME.player.html);
	};
	
	GAME.player.move = function(diff) {
		var nextPos = { x: GAME.player.pos.x+diff.x, y: GAME.player.pos.y+diff.y },
			player = document.getElementById('player'),
			goTo = GAME.board.cells[nextPos.x][nextPos.y],
			onBoard = (nextPos.x > 0 && nextPos.x < GAME.config.VERTICAL && nextPos.y > 0 && nextPos.y < GAME.config.HORIZONTAL) ? false : true;
		
		GAME.player.mod = (GAME.player.mod+=1)%2;
		player.className = 'playerSprite'+GAME.player.direction+''+GAME.player.mod;
			
		if(onBoard && goTo) {
			switch(goTo.className) {
				case 'grass': {
					GAME.player.pos = nextPos;
					goTo.appendChild(player);
					break;
				}
				case 'alien': {
					// alien
					alert('TRUP!');
					break;
				}
				case 'crate': {
					var nextPos2 = { x: nextPos.x+diff.x, y: nextPos.y+diff.y },
						nextPos2Elem = GAME.board.cells[nextPos2.x][nextPos2.y];
					if(nextPos2Elem.className == 'grass') {
						var nextCell = GAME.board.cells[nextPos.x][nextPos.y],
							nextCell2 = GAME.board.cells[nextPos2.x][nextPos2.y];
						nextCell.className = 'grass';
						nextCell2.className = 'crate';
						GAME.player.pos = nextPos;
						goTo.appendChild(player);
					}
					break;
				}
				default: {;}
			}
		}
	};
})();