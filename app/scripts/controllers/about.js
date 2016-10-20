'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # ShipCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.ships = [
		{
	        "id": "1",
	        "name": "Ship1"
	    },
	    {
	        "id": "2",
	        "name": "Ship2",
	    },
	    {
	        "id": "3",
	        "name": "Ship3",
	    },
	    {
	        "id": "4",
	        "name": "Ship4",
	    },
	    {
	        "id": "5",
	        "name": "Ship5",
	    },
	    {
	        "id": "6",
	        "name": "Ship6",
	    },
	    {
	        "id": "7",
	        "name": "Ship7",
	    },
	    {
	        "id": "8",
	        "name": "Ship8",
	    }
	];
  });
