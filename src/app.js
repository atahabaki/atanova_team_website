const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

class App {
	constructor() {
		/**
		 * Arguments:
		 * ==========
		 * env (String):
		 */
		this.settings=this.getConfigs();
		this.env=this.settings.hasOwnProperty("Environment") ? this.settings["Environment"] : "Development";
		console.log(`Environment: ${this.env}`)
	}
	getConfigs() {
		return JSON.parse(fs.readFileSync(path.join(__dirname,"config.json")));
	}
	run(callback) {
		/**
		 * Arguments:
		 * ==========
		 * dev_callback (callback): run on development...
		 * pro_callback (callback): run on production...
		 */
		switch (this.env) {
			case "Production":
			case "Development":
				callback()
				break;
			default:
				console.error(`Available environment types are: "Production" and "Development"`);
		}
	}
}

let _app = new App();
_app.run(()=>{
	const homeRouter = require('./routes/home')
	app.set('views', path.join(__dirname,'views'))
	app.set('view engine', 'pug')

	app.use('/', homeRouter)
	app.use(express.static(path.join(__dirname,'www')))
	app.listen(process.env.PORT || 80, "127.0.0.2")
});
