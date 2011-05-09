var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = 'table td, table td p { width: '+GAME.config.CELL_SIZE+'px; height: '+GAME.config.CELL_SIZE+'px; }';
document.head.appendChild(style);

GAME.board.append(document.body);
GAME.player.deploy({x:1,y:0},'S1');
GAME.aliens.start();
GAME.config.LEVEL = 0;
GAME.active = true;