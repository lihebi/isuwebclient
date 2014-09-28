'use strict';

/**
 * @ngdoc service
 * @name webclientApp.flash
 * @description
 * # flash
 * Factory in the webclientApp.
 */
angular.module('webclientApp')
  .factory('flash', function ($rootScope) {
    // Service logic
    // ...
    var queue = [];
    var currentMessage = '';
    $rootScope.$on('$routeChangeSuccess', function() {
      currentMessage = queue.shift() || '';
    });
    return {
      setMessage: function(message) {
        queue.push(message);
        currentMessage = queue.shift();
      },
      getMessage: function() {
        return currentMessage;
      },
      nextMessage: function() {
        currentMessage = queue.shift();
      }
    };
  });
