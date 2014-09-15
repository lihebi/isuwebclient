'use strict';




/**
 * @ngdoc function
 * @name webclientApp.controller:CaptureCtrl
 * @description
 * # CaptureCtrl
 * Controller of the webclientApp
 */
angular.module('webclientApp')
  .controller('CaptureCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // TODO how to turn off the camera when user click another page
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    var constraints = {audio: false, video: true};
    var video = document.querySelector('video');
    function successCallback(stream) {
      window.stream = stream;
      if (window.URL) {
        video.src = window.URL.createObjectURL(stream);
      } else {
        video.src = stream;
      }
    }

    function errorCallback(error) {
      console.log('navigator.getUserMedia error: ', error);
    }
    navigator.getUserMedia(constraints, successCallback, errorCallback);
  });
