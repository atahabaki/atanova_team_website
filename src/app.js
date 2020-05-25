const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

class App {
	constructor(env) {
		/**
		 * Arguments:
		 * ==========
		 * env (String):
		 */
		this.env=env;
	}
	run(dev_callback,pro_callback) {
		/**
		 * Arguments:
		 * ==========
		 * dev_callback (callback): run on development...
		 * pro_callback (callback): run on production...
		 */
		switch (this.env) {
			case "pro":
				pro_callback()
				break;
			case "dev":
				dev_callback()
				break;
			default:
				console.error(`Wrong environment... Available ones: 'dev' and 'pro'`);
		}
	}
}

function init() {
	let settings;
	try {
		settings= JSON.parse(fs.readFileSync(path.join(__dirname,"config.json")));
	}
	catch (e) {
		console.log("Could not find any config.json in current directory...")
	}
	finally {
		let _app;
		if (settings.hasOwnProperty("Environment")) {
			_app=new App(settings["Environment"]);
		}
		else {
			console.log("Could not found the Environment variable...");
			_app=new App('Development');
		}
	}
}

init();
