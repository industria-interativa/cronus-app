(function(angular, undefined) {
	'use strict';
	angular.module('cronusApp').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/users', {
				templateUrl: 'view/user-list.html',
				controller: 'UserController',
				controllerAs: 'vm'
			})
			.when('/users/persist', {
				templateUrl: 'view/user-persist.html',
				controller: 'UserController',
				controllerAs: 'vm'
			});
	}
})(angular);
