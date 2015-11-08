var userController = angular.module('userController', ['testService']);

userController.controller('loginController', function loginController($scope, userFactory, $location) {
  $scope.init = function() {
    $scope.user = new User();
  };

  $scope.login = function() {
    console.log($scope.user);
    userFactory.loginUser("no data", function(error, data) {
      if (!error) {
        $location.path("/assistant/" + localStorage.getItem("userid"));
      }
    }, $scope.user);
  };
});

userController.controller('registerController', function loginController($scope, userFactory, $location) {
  $scope.init = function() {
    $scope.user = new User();
    console.log($scope.user);
  };

  $scope.register = function() {
    userFactory.registerUser("no data", function(error, data) {
      if (!error) {
        $location.path("/login");
      }
    }, $scope.user);
  };
});
userController.controller('assistantController', function assistantController($scope, userFactory, $location, $sce, $timeout) {
  $scope.init = function() {
    $scope.show = true;
    userFactory.getUser("no data", function(error, data) {
      if (!error) {
        $scope.user = data;
        console.log($scope.user);
      }
    }, localStorage.getItem("userid"));

    userFactory.getHealth("no data", function(error, data) {
      console.log(data);
      if (!error) {
        $scope.health = new MedicalCard();
        $scope.health.fromJSON(data);
      }
    }, localStorage.getItem("userid"));

    userFactory.getAllProposedTips("no data", function(error, data) {
      console.log(data);
      if (!error) {
        $scope.tips = [];
        $scope.activeTips = [];
        for (var i = 0; i < data.length; i++) {
          console.log(data[i]);
          $scope.tips.push($sce.trustAsHtml(data[i].instruction.description));
          $scope.activeTips.push($sce.trustAsHtml(data[i].task.description));
        };
        console.log($scope.tips);
      }
    }, localStorage.getItem("userid"));

    userFactory.getSensorData(0, function(error, data) {
      console.log(data);
      if (!error) {
        $scope.heart = parseInt(data.value / data.count);
      }
    }, localStorage.getItem("userid"));
    $timeout(function() {
      userFactory.getSensorData(1, function(error, data) {
        console.log(data);
        if (!error) {
          $scope.steps = parseInt(data.value);
        }
      }, localStorage.getItem("userid"));
    }, 300);

  };

  $scope.addAdvice = function() {};
  $scope.discardAdivce = function() {
    $scope.show = false;
  };
  $scope.logout = function() {
    localStorage.removeItem("userid");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    $location.path("/");
  };
});
