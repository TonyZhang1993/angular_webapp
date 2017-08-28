'use strict';
angular.module('app').controller('positionCtrl',['$q','$http','$state','$scope','cache',function($q,$http,$state,$scope,cache){
	// cache.put('to','day');
	cache.remove('to');
	$scope.isLogin = false;
	function getPosition () {
		var def = $q.defer();
		$http.get('data/position.json?id='+$state.params.id)
			// .error(function(err) {
			// 	def.reject(err);
			// })
			.then(function(resp){
				$scope.position = resp.data;
				def.resolve(resp);
			});
			return def.promise;
	}
	function getCompany(id){
		$http.get('data/company.json?id='+id)
			.then(function(resp){
				$scope.company = resp.data;
			});
	}

	getPosition().then(function(obj){
		getCompany(obj.companyId);
	});

}]);