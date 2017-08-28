'use strict'
angular.module('app').directive('appPositionInfo',[function(){
	return {
		restrict:'A',  //调用方式，有四种
		replace: true,
		templateUrl: 'view/template/positionInfo.html',
		scope: {
			isActive: '=',
			isLogin: '=',
			pos: '='
		},
		link:function($scope) {
			$scope.imagePath = $scope.isAvtive?'image/star-active.png':'image/star.png';
		}
	};
}]);