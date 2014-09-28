'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('SignupCtrl', function ($scope, $http, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submit = function() {
      var user = {
        username: $scope.username,
        email: $scope.email,
        first: $scope.first,
        last: $scope.last,
        password: $scope.password1
      };
      dataService.User.save({}, user, function(res) {
        dataService.isLoggedIn=true;
        dataService.session = user;
      }, function(res) {
        dataService.msg='http error while signup';
      });
      // $http({
      //               method  : 'POST',
      //               url     : 'http:/hebihacker.info/usrs',
      //               data    : {key: 'value', key2 : 'value'},
      //               headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      //           });
    };
    $scope.valid = function() {
      if (!$scope.policy) {return false;}
      if (!$scope.password1 || $scope.password1 !== $scope.password2) {
        return false;
      }
      return true;
    };
  });
