'use strict'
angular.module('app').directive('appTab',[function(){
	return {
		restrict:'A',  //调用方式，有四种
		replace: true,
		scope: {
			list: '=',
			tabClick: '&'
		},
		templateUrl: 'view/template/tab.html',
		link: function($scope){
			$scope.click = function(tab){
				$scope.selectId = tab.id;
				$scope.tabClick(tab);
			};
		}
	};
}]);