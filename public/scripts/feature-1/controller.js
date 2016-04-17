angular.module('carCars').controller('myController', function($scope,carService) {
	/*$scope.cars = [
	{
		License:"KD2315",Brand:"Benz", Model:"Mercedes", Year:"2015", 
		editLicense:false, editBrand:false, editModel:false,  editYear:false
	},
	{License:"MD9070",Brand:"Volvo", Model:"S60", Year:"2014",
	 editLicense:false , editBrand:false, editModel:false,  editYear:false
	}*/
	
	//];
	

	carService.loadData(function(c) {
		$scope.cars = c;
	});

	$scope.editCar = function(i){
		console.log($scope.cars[i]);
		$scope.cars[i].editLicense = false;
		$scope.cars[i].editBrand = false;
		$scope.cars[i].editModel = false;
		$scope.cars[i].editYear = false;
	
		console.log($scope.cars[i]);
		// spara i databasen
		carService.updateCar($scope.cars[i]);
	}
	//$scope.cars[i].editLicense = true;
    //$scope.cars[i].editBrand = true;
	//$scope.cars[i].editModel = true;
	//$scope.cars[i].editYear = true;

	//carService.carDelete(function(f){
	//	$scope.cars = f;
	//});
	$scope.addCar = function(){
		var create = { License:$scope.License, Brand:$scope.Brand, Model:$scope.Model, Year:$scope.Year, 
					//   editLicense:$scope.false, editBrand:$scope.false, editBrand:$scope.false, editYear:$scope.false
					 };
		$scope.cars.push(create);
		$scope.License = "";
		$scope.Brand = "";
		$scope.Model = "";
		$scope.Year = "";
	//	$scope.editLicense = "";
	//	$scope.editBrand = "";
	//	$scope.editBrand = "";
	//	$scope.editYear = "";	
		carService.createCar(create);
	}

	$scope.deleteCar = function(d){
		var removed = $scope.cars.splice(d,1);
		//console.log(removed[0]._id);
		carService.carDelete(removed[0]._id);
	}
	
});
angular.module('carCars').service('carService', function ($http) {
	this.loadData = function(callback) {
		$http({
			method: 'GET',
			url: '/api/'
		}).then(function successCallback(response) {
			//console.log(response.data);
		   callback(response.data.cars);
		}, function errorCallback(response) {
		});
	}

	this.createCar = function(data){
		//var data = {'test':'test'};
		$http.post('/api', data);
	}

	this.carDelete = function(data){
		$http.delete('/api/' + data);
	}
	this.updateCar = function(car){
		$http.put('/api/' + car._id, car)
	}
   
} );
