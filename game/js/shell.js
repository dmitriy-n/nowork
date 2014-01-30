/**
 * Created by dnefedov on 30.01.14.
 */
var Shell = {
	init: function () {
		this.history = new Josh.History({key: 'game.history'});
		this.shell = new Josh.Shell({history: this.history});
		this.shell.onNewPrompt(function (callback) {
			callback(">");
		});

		this.shell.setCommandHandler('create', {
			exec: function (cmd, args, callback) {
				var key = args[0] || '';
				var galaxyCount = args[1] || 1;
				var response = "use key";
				switch (key) {
					//Create galaxy
					case '-g':
					case '--galaxy':
						response = "";
						for (var i = 0; i < galaxyCount; i++) {
							var name = Game.universe.pushGalaxy(new Galaxy());
							response += "Galaxy " + name + " has created<br/>";
						}
						break;
				}
				callback(response);
			}
		});
		this.shell.activate();
		console.log('Shell is initialized...');
	}
};