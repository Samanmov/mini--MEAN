'use strict';

var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
	License: String,
	Brand: String,
	Model: String,
	edit: Boolean
});

var Car = mongoose.model('Car', carSchema);

module.exports = Car;