'use strict';

var mongoose = require('mongoose');


var carSchema = new mongoose.Schema({
	License: String,
	Brand: String,
	Model: String,
	Year: String,
	edit: Boolean,
	editLicense: Boolean,
	editBrand : Boolean,
	editModel : Boolean,
	editYear : Boolean
});

var Car = mongoose.model('Car', carSchema);

module.exports = Car;
	






