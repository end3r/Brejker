(function(){ 
	GAME.config = {
		CELL_SIZE: 32,
		CELLS_VERTICAL: 20,
		CELLS_HORIZONTAL: 20,
		LEVEL: 0,
		DIRECTIONS: {
			'top': {x:-1,y:0},
			'bottom': {x:1,y:0},
			'left': {x:0,y:-1},
			'right': {x:0,y:1}
		}
	};
})();