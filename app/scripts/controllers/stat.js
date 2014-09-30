'use strict';

/**
 * @ngdoc function
 * @name webclientApp.controller:StatCtrl
 * @description
 * # StatCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('StatCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var table = document.querySelector('table');
    var studentsSample = [
      {
        name: 'John',
        id: '247175',
        c1: true,
        c2: true,
        c3: true
      },
      {
        name: 'Alice',
        id: '532989',
        c1: true,
        c2: false,
        c3: true
      },
      {
        name: 'Bob',
        id: '532989',
        c1: true,
        c2: false,
        c3: true
      },
      {
        name: 'Cindy',
        id: '532989',
        c1: true,
        c2: false,
        c3: true
      }
    ];
    var courseSample = {
      name: 'ComS510',
      c1: '08262014',
      c2: '09022014',
      c3: '09082014'
    };
    var getCourse = function(c){
      // data.Course.get(name: c);
    };
    var getStudents = function(c){};
    var getData = function(c){
      var course = getCourse(c);
      var students = getStudents(course);
      return {
        course: course,
        students: students
      };
    };
    var getData2 = function() {
      return {
        course: courseSample,
        students: studentsSample
      };
    };
    $scope.data = getData2();
  });
