'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTM3L5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $scope.tab = 1;
  });
