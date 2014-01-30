/**
 * Created by dnefedov on 29.01.14.
 */

(function () {
	var onEachFrame;
	if (window.webkitRequestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () {
				cb();
				webkitRequestAnimationFrame(_cb);
			};
			_cb();
		};
	} else if (window.mozRequestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () {
				cb();
				mozRequestAnimationFrame(_cb);
			};
			_cb();
		};
	} else {
		onEachFrame = function (cb) {
			setInterval(cb, 1000 / 60);
		}
	}

	window.onEachFrame = onEachFrame;
})();

window.onEachFrame(Game.run);

/*
 $game.on('mousedown', function (e) {
 if (e.toElement == this) {
 $(this).css({cursor: 'move'});
 }
 });
 $game.on('mousemove', function (e) {

 if (e.toElement == this) {
 var toLeft = e.offsetX < 250;
 var toUp = e.offsetY < 250;
 console.log(toLeft ? 'to left' : 'to right');

 _.forEach(universe.galaxies, function (galaxy) {
 var newX = toLeft ? galaxy.coordinates.x + 1 : galaxy.coordinates.x - 1;
 var newY = toUp ? galaxy.coordinates.y + 1 : galaxy.coordinates.y - 1;
 galaxy.setPosition(newX, newY);
 });
 }

 });*/
