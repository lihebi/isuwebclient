'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:MsgCtrl
 * @description
 * # MsgCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('MsgCtrl', function ($scope, flash) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.flash = flash;
  });
