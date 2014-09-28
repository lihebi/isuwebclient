'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('ToolsCtrl', function ($scope, $location, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (!session.isLoggedIn) {
      $location.path('/login');
    }
  });
