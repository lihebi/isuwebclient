'use strict';

describe('Controller: CaptureCtrl', function () {

  // load the controller's module
  beforeEach(module('webclientApp'));

  var CaptureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaptureCtrl = $controller('CaptureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});