(function(){
	GAME.board = {};
	GAME.board.cells = [];
	GAME.board.items = [ 'grass', 'wall', 'crate', 'food', 'alien' ];
	
	var table = document.createElement('table'),
		tbody = document.createElement('tbody'),
		tr, td, i, j, item, cells = [];
	
	for (i=0; i<GAME.config.CELLS_VERTICAL; i++){
		cells[i] = [];
		tr = document.createElement('tr');
		for (j=0; j<GAME.config.CELLS_HORIZONTAL; j++) {
			cells[i][j] = document.createElement('td');
			cells[i][j].i = i;
			cells[i][j].j = j;
			cells[i][j].id = 'id_'+i+'_'+j;
			cells[i][j].className = GAME.board.items[GAME.maps[GAME.config.LEVEL].board[i][j]];
			tr.appendChild(cells[i][j]);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	GAME.board.cells = cells;
	
	GAME.board.append = function(elem) {
		elem.appendChild(table);
	}
})();