angular.module('testApp')
  .controller('ShipCtrl', function ($scope, $routeParams) {
 		$scope.id = $routeParams.id;
});