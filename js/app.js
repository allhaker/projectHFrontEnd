(function() {
  var app = angular.module('typeYourName', ['ngRoute', 'ui.bootstrap', 'userController']);

  app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
    when('/', {
      templateUrl: "html/intro.html"
    }).
    when('/login', {
        templateUrl: "html/login.html",
        controller: "loginController"
    }).
    when('/register', {
        templateUrl: "html/register.html",
        controller: "registerController"
    }).
    when('/assistant/:id', {
        templateUrl: "html/assistant.html",
        controller: "assistantController"
    });
    $httpProvider.defaults.useXDomain = true;
    console.log($httpProvider.defaults.headers);
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
  }]);

})();

function createUrl() {
    var url = 'http://yevgenjava.eu-gb.mybluemix.net';
    for (var index = 0; index < arguments.length; index++) {
        url += '/' + arguments[index];
        console.log(arguments[index]);
    }
    console.log(url);
    return url;
}
