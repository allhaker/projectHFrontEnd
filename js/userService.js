var testService = angular.module('testService', []);

testService.factory('userFactory', function userFactory($http) {
  var testGet = function(query, callback) {
    $http.get('http://yevgenjava.eu-gb.mybluemix.net/test', {
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
  };


  var login = function(query, callback, payload) {
    var request = createUrl('users/login');
    var userdata = payload.toJSON();

    $http({
        method: 'POST',
        url: request,
        data: $.param({username: payload.username, pass: payload.password}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .success(function(data) {
        console.log(data);
        localStorage.setItem("userid", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("password", data.password);
        var user = new User();
        user.fromJSON(data);
        callback(null, user);
      }).error(function(e) {
        callback(e);
      });
  };
  var register = function(query, callback, payload) {
    var request = createUrl('users');
    var userdata = JSON.stringify(payload.toJSON());

    $http({
        method: 'POST',
        url: request,
        data: $.param(payload.toJSON()),
        //data: userdata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .success(function(data) {
        console.log(data);
        var user = new User();
        user.fromJSON(data);
        callback(null, user);
      }).error(function(e) {
        callback(e);
      });
  };
  return {
    method1: testGet,
    getUser: getOne,
    registerUser: register,
    loginUser: login
  }
});
