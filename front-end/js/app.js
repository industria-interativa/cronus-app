(function(angular, undefined) {
	'use strict';
	angular.module('cronusApp', ['ngRoute', 'ngMaterial', 'ngMdIcons'])
	  .controller('CronusCtrl', function DemoCtrl($mdDialog) {
	    var originatorEv;
	    this.openMenu = function($mdOpenMenu, ev) {
	      originatorEv = ev;
	      $mdOpenMenu(ev);
	    };
	  });
})(angular);
