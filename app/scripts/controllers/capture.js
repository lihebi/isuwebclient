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
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var start = function() {
      // TODO how to turn off the camera when user click another page
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      var constraints = {audio: false, video: true, width: 640, height: 480};
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
    };
    var stop = function() {
      window.stream.stop();
      video.src='';
    };
    var test = function() {
    };
    var photo = function() {
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      document.querySelector('#photo').src = canvas.toDataURL('image/webp');
    };
    var send = function() {
    };
    var change = function() {
    };
    $scope.start = start;
    $scope.stop = stop;
    $scope.test = test;
    $scope.photo = photo;
    $scope.send = send;
    $scope.change = change;
  });
