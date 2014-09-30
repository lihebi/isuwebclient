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
    var api = 'http://0.0.0.0:12345';
    // var User = $resource(api+'/users/:userId', {
    //   userId: '@id'
    // }, {
    //   all: {
    //     // method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //     }
    //   }
    // });
    var User = $resource(api+'/users/:userId');
    var Class = $resource(api+'/classes/:classId');

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
