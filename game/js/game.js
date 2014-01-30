/**
 * Created by dnefedov on 30.01.14.
 */

var Game = {
	fps: 50
};
Game.init = function () {
	Game.universe = new Universe();
	Shell.init();
	console.log('Game is initialized...');
};

Game.update = function () {
/*	var seed = Math.random() * (100);
	if (seed > 99.9 && Game.universe.galaxies.length < 20) {
		Game.universe.pushGalaxy(new Galaxy());
	}*/
};

Game.draw = function (interpolation) {
	//console.log('draw interpolation: ' + interpolation);
	$('#consoleTimer').html("Now: " + (new Date).getTime());
	$('#consoleUniverseSize').html("Total galaxies: " + this.universe.galaxies.length);
};

Game.run = (function () {
	var loops = 0;
	var skipTicks = 1000 / Game.fps;
	var maxFrameSkip = 10;
	var nextGameTick = (new Date).getTime();
	var lastGameTick;

	Game.init();
	return function () {
		loops = 0;
		while ((new Date).getTime() > nextGameTick) {
			Game.update();
			nextGameTick += skipTicks;
			loops++;
		}

		if (!loops) {
			Game.draw((nextGameTick - (new Date).getTime()) / skipTicks);
		} else {
			Game.draw(0);
		}
	}
})();
