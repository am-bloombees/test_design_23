angular.module('testApp')
  .controller('TunningCtrl', function ($scope, $routeParams) {
 		$scope.id = $routeParams.id;
});