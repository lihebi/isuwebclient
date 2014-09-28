'use strict';

/**
 * @ngdoc overview
 * @name webclientApp
 * @description
 * # webclientApp
 *
 * Main module of the application.
 */
angular
  .module('webclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  // .factory('dataService', function($resource) {
  //   var data = {};
  //   data.nav='Home';
  //   data.isLoggedIn=false;
  //   data.session={};
  //
  //   data.User = $resource('http://api.hebihacker.info/users/:userId', {
  //     userId: '@id'
  //   }, {
  //     save: {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //       }
  //     }
  //   });
  //
  //   return data;
  // })
  // .factory('flash', function($rootScope) {
  //   var queue = [];
  //   var currentMessage = '';
  //   $rootScope.$on('$routeChangeSuccess', function() {
  //     currentMessage = queue.shift() || '';
  //   });
  //   return {
  //     setMessage: function(message) {
  //       queue.push(message);
  //       currentMessage = queue.shift();
  //     },
  //     getMessage: function() {
  //       return currentMessage;
  //     },
  //     nextMessage: function() {
  //       currentMessage = queue.shift();
  //     }
  //   };
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/tools/management', {
        templateUrl: 'views/management.html',
        controller: 'ManagementCtrl'
      })
      .when('/tools/capture', {
        templateUrl: 'views/capture.html',
        controller: 'CaptureCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
