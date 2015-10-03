(function(angular, undefined) {
	'use strict';
	angular.module('cronusApp').controller('UserController', controller);

	controller.$inject = ['$routeParams', '$http', 'UserService'];

	function controller($routeParams, $http, userService) {
		var vm = this;

		vm.initList = function() {
			vm.users = [];
			userService.getUsers().success(function(data){
				vm.users = data;
			});
		}

		vm.initPersist = function() {
			vm.user = {};
		}

		vm.save = function(user) {
			userService.save(user).success(function(data){
				console.log(data);
				vm.initPersist();
			});
		}

		vm.delete = function(user) {
			userService.del(user).success(function(){
				console.log("Deletou");
				vm.initList();
			});
		}
	}
})(angular);
