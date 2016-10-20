'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ships', {
        templateUrl: 'views/ships.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ships/:id', {
        templateUrl: 'views/selected-ship.html',
        controller: 'ShipCtrl',
        controllerAs: 'ship'
      })
      .when('/tunning/:id', {
        templateUrl: 'views/selected-ship-tunning.html',
        controller: 'TunningCtrl',
        controllerAs: 'tunning'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
