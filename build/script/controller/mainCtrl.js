'use strict';
angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
	$http.get('/data/positionList.json').then(function(resp){

		$scope.list = resp.data;//不能直接等于resp resp是一个对象，要把里面的数据赋值给他；
	});

}]);