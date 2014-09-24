'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('BlogCtrl', function ($scope, $rootScope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('hello blog');
    console.log($location);
    console.log($rootScope.$watch);
  });
