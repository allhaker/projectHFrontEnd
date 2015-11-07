var userController = angular.module('userController', ['testService']);

userController.controller('mainController', function mainController($scope, factoryName) {
  $scope.executeTestGet = function() {
    factoryName.method1("no data", function(error, data) {
      if (!error) {
        $scope.testData = data;
        console.log($scope.testData);
      }
    });
  }
  factoryName.method2("no data", function(error, data) {
    if (!error) {
      $scope.myData = data;
      console.log($scope.myData);
    }
  });
});

userController.controller('loginController', function loginController($scope, factoryName, $location) {
  $scope.login = function() {
    $location.path("assistant");
  };
});

userController.controller('assistantController', function assistantController($scope, factoryName) {
  $scope.init = function() {

  };
});
