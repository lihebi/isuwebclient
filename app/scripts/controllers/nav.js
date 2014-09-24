'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('NavCtrl', function ($scope, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.setTab = function(tab) {
      dataService.nav = tab;
    };
    $scope.isSelected = function(tab) {
      return (dataService.nav === tab);
    }
  });
