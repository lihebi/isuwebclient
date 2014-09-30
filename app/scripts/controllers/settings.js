'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('SettingsCtrl', function ($scope, $location, session, data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (!session.isLoggedIn()) {
      $location.path('/login');
      data.setNav('Login');
    }
  });
