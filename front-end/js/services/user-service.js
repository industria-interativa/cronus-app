(function(angular, undefined) {
	'use strict';
	angular.module('cronusApp').factory('UserService', environmentService);

	environmentService.$inject = ['$http', 'api'];

	function environmentService($http, api) {
		return {
			getUsers: getUsers,
			save: save,
			del: del
		};

		function getUsers() {
			return $http.get(api.users);
		}

		function save(user) {
			if(user._id) {
				return $http.put(api.users + '/' + user._id, user);
			} else {
				return $http.post(api.users, user);
			}
		}

		function del(user) {
			if(user._id) {
				return $http.delete(api.users + '/' + user._id, user);
			} else {
				return "404"
			}
		}
	}
})(angular);
