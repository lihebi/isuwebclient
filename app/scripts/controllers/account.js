'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('AccountCtrl', function ($scope, $location, data, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (!session.isLoggedIn()) {
      $location.path('/login');
      data.setNav('Login');
    }
    $scope.who = session.who;
  });
