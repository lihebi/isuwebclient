'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('BlogCtrl', function ($scope, dataService, flash) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // dataService.msg = 'Blog page';
    // flash.setMessage('blog');
  });
