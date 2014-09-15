'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:ManagementCtrl
 * @description
 * # ManagementCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('ManagementCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addClassView = false;
    $scope.addClass = function() {
      $scope.addClassView = true;
    };
  });
