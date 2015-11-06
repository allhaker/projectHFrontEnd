(function() {
  var app = angular.module('typeYourName', ['ngRoute', 'ui.bootstrap', 'testController']);

  app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
    when('/', {
      templateUrl: "html/test.html",
      controller: "mainController"
    });
  }]);

})();
