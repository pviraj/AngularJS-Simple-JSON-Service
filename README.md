AngularJS Simple JSON Service
=============================
This is a simple AngularJS service to retrieve data from a JSON file on page load.

## Basic Setup

* Add the factory (service) below to your project
* Ensure paths to JSON file are correct
* Adapt the service bindings within your controller to the correct names within your JSON file
* View the example project here: http://plnkr.co/edit/xbThkf11dnZDabz1wwJ0

## Service to retrieve data
<code>
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
</code>

## Binding data within the controller
<code>
    app.controller('MainCtrl', function($scope, $http, factoryGetJSONFile) {
    
      factoryGetJSONFile.getMyData(function(data) {
        $scope.Addresses = data.Addresses.AddressList;
        $scope.People = data.Names.People;
      });
    
    });
</code>
