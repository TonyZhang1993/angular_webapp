'use strict'
angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict:'A',  //调用方式，有四种
		replace: true,
		templateUrl: 'view/template/headBar.html',
		scope: {
			text: '='
		},
		link: function($scope){
			$scope.back = function() {
				window.history.back();
			};
			 
			// $scope.$on('abc',function(event,data){
			// 	console.log(event,data);
			// });
			// $scope.$emit('cba',{name:2});
		}
	};
}]);