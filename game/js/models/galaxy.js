/**
 * Created by dnefedov on 29.01.14.
 */

var Galaxy = ring.create({
	constructor: function () {
		this.name = 'G' + Math.round(1000 * Math.random().toFixed(4));
		this.stars = Math.round(1000000 * Math.random().toFixed(6));
		this.setSize(Math.round(this.stars / 10000));
		this.radious = this.size / 2;
		this.setPosition(0, 0);
	},

	setSize: function (size) {
		this.size = size;
	},

	setPosition: function (_x, _y) {
		if (_x == 0 && _y == 0) {
			_x = Math.random() * (500 - this.size);
			_y = Math.random() * (500 - this.size);
		}
		this.coordinates = {x: _x, y: _y};
		$('#' + this.name).animate(({left: _x, top: _y}), 3000, 'easeOutQuad');
	}
});
