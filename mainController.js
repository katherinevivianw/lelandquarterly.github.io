var LQApp = angular.module('LQApp', ['ngRoute']);

LQApp.controller('MainController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
   $scope.main = {};
   $scope.main.title = 'Leland Quarterly';

   $scope.controller = 'home';
}]);

LQApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'components/home/homeTemplate.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);