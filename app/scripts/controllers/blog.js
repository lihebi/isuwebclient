'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('BlogCtrl', function ($scope, data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = function() {
      // console.log("getting");
      data.User.get( {username: 'helo'});
      // console.log("got");
    };
  });
