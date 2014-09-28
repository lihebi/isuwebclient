'use strict';

/**
 * @ngdoc service
 * @name webclientApp.session
 * @description
 * # session
 * Factory in the webclientApp.
 */
angular.module('webclientApp')
  .factory('session', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var user = {};
    var isLoggedIn = false;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      login: function(u) {
        user = u;
        isLoggedIn = true;
      },
      who: function() {
        return user;
      },
      logout: function() {
        user={};
        isLoggedIn = false;
      }
    };
  });
