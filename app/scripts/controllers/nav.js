'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('NavCtrl', function ($scope, data, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.setTab = function(tab) {
      // dataService.nav = tab;
      data.setNav(tab);
    };
    $scope.isSelected = function(tab) {
      return (data.getNav() === tab);
    };
    $scope.isLoggedIn = session.isLoggedIn;
    $scope.user = session.who();
  });
