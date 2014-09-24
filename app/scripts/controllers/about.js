'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('AboutCtrl', function ($scope, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    dataService.nav = '';
  });
