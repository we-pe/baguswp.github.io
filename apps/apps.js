var	app = angular.module('WepeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      caption 	: 'Welcome',
      controller	:	'MainController',
      templateUrl	: 'views/home.html'
    })
    .when('/about', {
      caption 	: 'About Us',
      controller	:	'MainController',
      templateUrl	: 'views/about.html'
    })
    .when('/testimonial', {
      caption 	: 'Testimonial',
      controller	:	'MainController',
      templateUrl	: 'views/testimonial.html'
    })
    .otherwise({ redirectTo : '/' });
});

app.controller('MainController', function($scope){});

app.run(['$rootScope', function($rootScope){
	$rootScope.$on('$routeChangeSuccess', function(e, curr, prev){
		$rootScope.caption = curr.$$route.caption;
	})
}])
