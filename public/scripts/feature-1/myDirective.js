angular.module('carCars').directive('myTag', function() {
  return {
	  
	controller: 'myController', 
    template: '<tr>' +
	  		  	'<th>License</th>' +
	  			'<th>Brand</th>' +
	  			'<th>Model</th>' +
	  			'<th>Year</th>' + 
	  		  '</tr>' +
	  		  '<tr ng-repeat="car in cars track by $index" >' +
	  		  	'<td ng-click="editLicense = !editLicense" ng-hide="editLicense" >{{ car.License }}</td>' + 
	  			'<td ng-show="editLicense" >' + '<input ng-blur="editCar($index)" type="text" ng-model="car.License">' + '</td>' +
	  			'<td ng-click="editBrand = !editBrand" ng-hide="editBrand" >{{ car.Brand }}</td>' +
	  			'<td ng-show="editBrand" >' + '<input ng-blur="editCar($index)" type="text" ng-model="car.Brand">' + '</td>' +
	  			'<td ng-click="editModel = !editModel" ng-hide="editModel" >{{ car.Model }}</td>' + 
	  			'<td ng-show="editModel" >' + '<input ng-blur="editCar($index)"  type="text" ng-model="car.Model">' + '</td>' +
	  			'<td ng-click="editYear = !editYear" ng-hide="editYear">{{ car.Year }}</td>' + 
	            '<td>' + '<a ng-click="deleteCar($index)" href ="">Delete</a>' + '</td>' +
	  			'<td ng-show="editYear" >' + '<input ng-blur="editCar($index)" type="text" ng-model="car.Year">' + '</td>'
	  		//	ng-blur="editCar($index)"
  };
});


