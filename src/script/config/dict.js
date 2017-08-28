'use strict';
angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http){
	$http.get('data/city.json').then(function(resp){  //定义全局变量的方法；
		dict.city = resp.data;
	});
	$http.get('data/salary.json').then(function(resp){
		dict.salary = resp.data;
	});
	$http.get('data/scale.json').then(function(resp){
		dict.scale = resp.data;
	});
}]);