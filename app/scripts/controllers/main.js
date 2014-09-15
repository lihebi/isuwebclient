'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
