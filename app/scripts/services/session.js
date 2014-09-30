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
    var status = false;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      login: function(u) {
        user = u;
        status = true;
      },
      who: function() {
        return user;
      },
      logout: function() {
        user={};
        status = false;
      },
      isLoggedIn: function() {
        return status;
      }
    };
  });
