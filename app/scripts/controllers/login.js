'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('LoginCtrl', function ($scope, data, flash, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submit = function() {
      data.User.get({
        username: $scope.username
      }, function(res) {
        if (res.password === $scope.password) {
          session.login(res);
          console.log(res);
        }
      }, function(err) {
        flash.setMessage('Http Error');
        console.log(err);
      });
    };
  });
