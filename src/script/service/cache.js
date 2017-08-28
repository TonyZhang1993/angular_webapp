'use strict';
angular.module('app')
	.factory('cache',['$cookies',function($cookies){
		return {
			get: function(key) {
				return $cookies.get(key);
			},
			put: function(key,value){
				$cookies.put(key,value);
			},
			remove: function(key){
				$cookies.remove(key);
			}
		};
}]);
	// service用法
// .service('cache',['$cookies',function($cookies){
// 	this.put = function(key,value){
// 		$cookies.put(key,value);
// 	};
// 	this.get = function(key){
// 		return $cookies.get(key);
// 	};
// 	this.remove = function(key){
// 		$cookies.remove(key);
// 	};
// }])