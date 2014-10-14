	// create the module and name it scotchApp
	var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate']);

    mainApp.animation('.view-slide-in', function () {
      return {
        enter: function(element, done) {
          element.css({
            opacity: 0.5,
            position: "relative",
            top: "10px",
            left: "500px"
          })
          .animate({
            top: 0,
            left: 0,
            opacity: 1
            }, 1000, done);
        }
      };
    });

	// configure our routes
	mainApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	mainApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	mainApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	mainApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});


