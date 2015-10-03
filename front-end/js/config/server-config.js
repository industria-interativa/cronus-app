(function(angular, undefined) {
	'use strict';
	var _baseUrl = "http://localhost:3000/api/v1/";

	angular.module('cronusApp').constant('api', {
		users: resourceOf('users')
	});

	function resourceOf(resourceName) {
		return _baseUrl + resourceName;
	}
})(angular);
