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
  .factory('dataService', function() {
    var data = {};
    data.navTab=0;
    return data;
  })
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
      .otherwise({
        redirectTo: '/'
      });
  });
