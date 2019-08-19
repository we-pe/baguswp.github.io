var	app = angular.module('WepeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      title 	: 'Welcome',
      controller	:	'MainController',
      templateUrl	: 'views/home.html'
    })
    .when('/about', {
      title 	: 'About Us',
      controller	:	'MainController',
      templateUrl	: 'views/about.html'
    })
    .when('/testimonial', {
      title 	: 'Testimonial',
      controller	:	'MainController',
      templateUrl	: 'views/testimonial.html'
    })
    .otherwise({ redirectTo : '/' });
});
