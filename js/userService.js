var testService = angular.module('testService', []);

testService.factory('userFactory', function userFactory($http) {
  var testGet = function(query, callback) {
    $http.get('https://safe-oasis-1306.herokuapp.com/users/', {
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
  var getOne = function(query, callback) {
    var request = createUrl('users', 1);
    $http.get(request)
      .success(function(data) {
        console.log(data);
        var user = new User();
        user.fromJSON(data);
        callback(null, user);
      }).error(function(e) {
        callback(e);
      });
  }

  var register = function(query, callback, payload) {
    var request = createUrl('users');
    var userdata = JSON.stringify(payload.toJSON());

    $http({
        method: 'POST',
        url: request,
        data: userdata,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(data) {
        console.log(data);
        var user = new User();
        user.fromJSON(data);
        callback(null, user);
      }).error(function(e) {
        callback(e);
      });
    /*  $http.post(request, payload)
        .success(function(data) {
          console.log(data);
          var user = new User();
          user.fromJSON(data);
          callback(null, user);
        }).error(function(e) {
          callback(e);
        });*/
  }
  return {
    method1: testGet,
    getUser: getOne,
    registerUser: register
  }
});
