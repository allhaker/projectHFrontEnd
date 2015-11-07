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
    when('/register', {
        templateUrl: "html/register.html",
        controller: "registerController"
    }).
    when('/assistant', {
        templateUrl: "html/assistant.html",
        controller: "assistantController"
    });
  }]);

})();

function createUrl() {
    var url = 'https://safe-oasis-1306.herokuapp.com';
    for (var index = 0; index < arguments.length; index++) {
        url += '/' + arguments[index];
        console.log(arguments[index]);
    }
    console.log(url);
    return url;
}
