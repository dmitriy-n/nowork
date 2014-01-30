/**
 * Created by dnefedov on 30.01.14.
 */

var Universe = ring.create({
	constructor: function () {
		this.width = $.jStorage.get('width', 500);
		this.height = $.jStorage.get('width', 500);
		this.galaxies = [];
		console.log('Universe is initialized...');
	},
	pushGalaxy: function (galaxy) {
		this.galaxies.push(galaxy);
		this.galaxies = _.sortBy(this.galaxies, function (galaxy) {
			return -galaxy.stars
		});
		$('#game').append(
			$('<div></div>')
				.addClass('galaxy')
				.attr('id', galaxy.name)
				.css({
					width: 0,
					height: 0,
					borderRadius: galaxy.radious,
					left: galaxy.coordinates.x,
					top: galaxy.coordinates.y,
					fontSize: galaxy.size / 4
				})
				.append(
					$("<span></span>")
						.text(galaxy.name)
						.css({
							display: 'block',
							position: 'absolute',
							top: '50%',
							marginTop: -galaxy.size / 8,
							textAlign: 'center'
						}))
				.animate({
					width: galaxy.size,
					height: galaxy.size
				}, 1000)
		);
		return galaxy.name;
	}
});
