var testService = angular.module('testService', []);

testService.factory('userFactory', function userFactory($http) {

  var getOne = function(query, callback, id) {
    var request = createUrl('users', id);
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
        data: userdata
      })
      .success(function(data) {
        console.log(data);
        localStorage.setItem("userid", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("password", data.password);
        callback(null, "dummy");
      }).error(function(e) {
        callback(e);
      });
  };
  var register = function(query, callback, payload) {
    var request = createUrl('users');
    var userdata = JSON.stringify(payload.toJSON());
    console.log(userdata);
    $http({
        method: 'POST',
        url: request,
        data: userdata
      })
      .success(function(data) {
        console.log(data);
        callback(null, "dummy");
      }).error(function(e) {
        callback(e);
      });
  };
  var healthCard = function(query, callback, id) {
    var request = createUrl('users/card/' + id);
    $http({
        method: 'GET',
        url: request
      })
      .success(function(data) {
        console.log(data);
        callback(null, data);
      }).error(function(e) {
        callback(e);
      });
  };
  var allProposedTips = function(query, callback, id) {
    var request = createUrl('users/inst/' + id);
    $http({
        method: 'GET',
        url: request
      })
      .success(function(data) {
        console.log(data);
        callback(null, data);
      }).error(function(e) {
        callback(e);
      });
  };
  var sensorData = function(query, callback, id) {
    var request = createUrl('users/ind',id,query);
    $http({
        method: 'GET',
        url: request
      })
      .success(function(data) {
        console.log(data);
        callback(null, data);
      }).error(function(e) {
        callback(e);
      });
  };
  return {
    getUser: getOne,
    registerUser: register,
    loginUser: login,
    getHealth : healthCard,
    getAllProposedTips : allProposedTips,
    getSensorData : sensorData
  }
});
