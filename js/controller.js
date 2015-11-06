var testController = angular.module('testController', ['testService']);

testController.controller('mainController', function mainController($scope, factoryName) {
  $scope.executeTestGet = function() {
    factoryName.method1("no data", function (error, data) {
      if (!error) {
        $scope.testData = data;
        console.log($scope.testData);
      }
    });
  }
  factoryName.method2();
});
