'use strict';

var express = require('express');
var Car = require('../models/car'); // eller vad vår model-fil heter

var router = express.Router();

//router.get...
router.get('/', function (req, res) {
	// hämta ifrån mongoose
  //var car = mongoose.model('Car', carSchema);	
  Car.find(function(err, cars){
  	if(err){
  		return console.error('Error' + err);
  	} else {
  		//console.log('Cars:'+cars);
 		res.json({'cars':cars});
  	}
  });
});

router.post('/', function (req, res) {
	console.log(req.body);
	Car.create(req.body, function(err, newDoc){
	if(err) {
		return console.error('Error:' + err);
	} else {
		/*console.log('New car added:'),
		console.log('License:'+ newDoc.License);
		console.log('Brand:' + newDoc.Brand);
		console.log('Model:' + newDoc.Model);
		console.log('Year: ' + newDoc.Year);*/
	}
	});
	//res.json({message:"hit"});
});

router.delete('/:id', function (req, res){
	//console.log(req);
	var id = req.params.id;
	Car.findByIdAndRemove(id, function(err, result){
		if(err){
			res.status(500).json({ err: err.message });
		}
		//res.json({ message: 'Car Deleted' });
		console.log('Deleted!');
	});
});


router.put('/:id', function (req, res){
	var id = req.params.id;
	var car = req.body;
	if(car && car._id !==id){
		return res.status(500).json({ err: "Ids don't match"});
	}
	Car.findByIdAndUpdate(id, car, {new: true}, function(err, car){
		if (err) {
			return res.status(500).json({ err: err.message });
		}
		res.json({'car' : car, message:'Car Updated'})
	});
});





//router.post...

//router.put...

//router.delete...

module.exports = router;

