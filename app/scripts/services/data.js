'use strict';

/**
 * @ngdoc service
 * @name webclientApp.data
 * @description
 * # data
 * Factory in the webclientApp.
 */
angular.module('webclientApp')
  .factory('data', function ($resource) {
    // Service logic
    // ...

    var nav='Home';
    var User = $resource('http://api.hebihacker.info/users/:userId', {
      userId: '@id'
    }, {
      save: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    });

    // Public API here
    return {
      setNav: function(n) {
        nav=n;
      },
      getNav: function() {
        return nav;
      },
      User: User
    };
  });
