var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, factoryGetJSONFile) {
  $scope.name = 'World';

  factoryGetJSONFile.getMyData(function(data) {
    $scope.Addresses = data.Addresses.AddressList;
    $scope.People = data.Names.People;
  });

});


app.factory('factoryGetJSONFile', function($http) {
  return {
    getMyData: function(done) {
      $http.get('myJSONFile.json')
      .success(function(data) {
        done(data);
      })
      .error(function(error) {
        alert('An error occured whilst trying to retrieve your data');
      });
    }
  }
});
