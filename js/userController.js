var userController = angular.module('userController', ['testService']);

userController.controller('mainController', function mainController($scope, userFactory) {
  $scope.executeTestGet = function() {
    userFactory.getUser("no data", function(error, data) {
      if (!error) {
        $scope.testData = data;
        console.log($scope.testData);
      }
    });
  }
  userFactory.method1("no data", function(error, data) {
    if (!error) {
      $scope.testData = data;
      console.log($scope.testData);
    }
  });
});

userController.controller('loginController', function loginController($scope, userFactory, $location) {
  $scope.init = function() {
    $scope.user = new User();
  };

  $scope.login = function() {
    console.log($scope.user);
    userFactory.loginUser("no data", function(error, data) {
      if (!error) {
        $location.path("/assistant");
      }
    }, $scope.user);
  };
});

userController.controller('registerController', function loginController($scope, userFactory, $location) {
  $scope.init = function() {
    $scope.user = new User();
  };

  $scope.register = function() {
    userFactory.registerUser("no data", function(error, data) {
      if (!error) {
        $location.path("/login");
      }
    }, $scope.user);
  };
});
userController.controller('assistantController', function assistantController($scope, userFactory) {
  $scope.init = function() {

  };
});
