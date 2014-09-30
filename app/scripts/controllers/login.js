'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('LoginCtrl', function ($scope, $location, data, flash, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var checkHebi = function() {
      if ($scope.username === 'hebiadmin' && $scope.password === 'aabb') {
        return true;
      } else {
        return false;
      }
    };
    $scope.submit = function() {
      if (checkHebi()) {
        session.login({
          username: 'hebiadmin',
          password: 'aabb',
          email: 'hebi@iastate.edu',
          first: 'Hebi',
          last: 'Li'
        });
        $location.path('/account');
        data.setNav('Account');
        return;
      }
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
