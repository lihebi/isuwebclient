'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('LoginCtrl', function ($scope, dataService, flash, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submit = function() {
      // flash.setMessage('yes');
      dataService.User.get({
        username: $scope.username
      }, function(res) {
        if (res.password === $scope.password) {
          session.login(res);
        }
      }, function(err) {

      });
    };
  });
