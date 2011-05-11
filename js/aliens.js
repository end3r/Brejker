(function(){
	GAME.aliens = {};
	GAME.aliens.timer = false;

	GAME.aliens.action = function() {
		var timeout = setTimeout("GAME.aliens.action()",1000),
			cells = GAME.board.cells,
			dir = GAME.config.DIRECTIONS,
			randomDir = ['top','bottom','left','right'],
			x, y, buffer;

		for (i=0; i<GAME.config.CELLS_VERTICAL; i++){
			for (j=0; j<GAME.config.CELLS_HORIZONTAL; j++) {
				buffer = -1;
				if(cells[i][j].className == 'alien') {
					//console.log('move alien nr '+counter);
					//console.log(dir);
					//randomDir = dir;
					var r = Math.floor(Math.random()*3);
					do {
						r = (r+1)%4;
						var rand = dir[randomDir[r]];
						x = i + rand.x;
						y = j + rand.y;
						buffer++;
					} while(cells[x][y].className && cells[x][y].className != 'grass' && buffer < 4)
				//	if(cells[x][y].className == 'grass') {
						cells[i][j].className = 'grass';
						cells[x][y].className = 'alien';
				//	}
				}
			}
		}
	};

	GAME.aliens.start = function() {
		if (!GAME.aliens.timer) {
			GAME.aliens.timer = true;
			//GAME.aliens.action();
		}
	}
})();