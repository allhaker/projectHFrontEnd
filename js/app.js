(function() {
  var app = angular.module('typeYourName', ['ngRoute', 'ui.bootstrap', 'userController']);

  app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
    when('/', {
      templateUrl: "html/intro.html",
      controller: "mainController"
    }).
    when('/test', {
        templateUrl: "html/test.html",
        controller: "mainController"
    }).
    when('/login', {
        templateUrl: "html/login.html",
        controller: "loginController"
    }).
    when('/assistant', {
        templateUrl: "html/assistant.html",
        controller: "assistantController"
    });
  }]);

})();
