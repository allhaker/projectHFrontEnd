var testService = angular.module('testService', []);

testService.factory('factoryName', function factoryName($http) {
  var testGet = function(query, callback) {
    $http.get('https://safe-oasis-1306.herokuapp.com/users/1', {
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
  var getUser = function(query, callback) {
    var request = createUrl('users', 1);
    $http.get(request, {
        /*  params: {
            q: query
          }*/
      })
      .success(function(data) {
        console.log(data);
        var user = new User();
        user.fromJSON(data);
        callback(null, user);
      }).error(function(e) {
        callback(e);
      });
  }
  return {
    method1: testGet,
    method2: getUser
  }
});

this.getUser = function(id, success, error) {
  var request = createRequest(createUrl('users', id), 'GET')
  $http(request).success(function(data) {
    console.log(data);
    if (data.header.result && data.header.version == version) {
      var user = new User();
      user.fromJSON(data.data);
      success(user);
    } else {
      error();
    }
  }).error(function() {
    error();
  });
};
