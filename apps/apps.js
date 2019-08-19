var	app = angular.module('WepeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      caption : 'Welcome',
      pages : 'home',
      controller :	'MainController',
      templateUrl : 'views/home.html'
    })
    .when('/about', {
      caption : 'About Me',
      pages : 'about',
      controller :	'MainController',
      templateUrl : 'views/about.html'
    })
    .when('/contact', {
      caption : 'Contact',
      pages : 'contact',
      controller :	'MainController',
      templateUrl	: 'views/contact.html'
    })
    .otherwise({ redirectTo : '/' });
});

app.controller('MainController', function($scope){});

app.run(['$rootScope', function($rootScope){
	$rootScope.$on('$routeChangeSuccess', function(e, curr, prev){
		$rootScope.caption = curr.$$route.caption;
    $rootScope.pages = curr.$$route.pages;
	})
}]);
