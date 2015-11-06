var testService = angular.module('testService', []);

testService.factory('factoryName', function factoryName($http) {
    var testGet = function(query, callback) {
      $http.get('test.json', {
        /*  params: {
            q: query
          }*/
        })
        .success(function(data) {
          callback(null, data);
        })
        .error(function(e) {
          callback(e);
        });
    };
    var test2 = function () {
  
    }
    return {
      method1: testGet,
      method2: test2
    }
});
