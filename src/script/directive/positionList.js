'use strict'
angular.module('app').directive('appPositionList',[function(){
	return {
		restrict:'A',  //调用方式，有四种
		replace: true,
		templateUrl: 'view/template/positionList.html',
		scope: {
			data: '=',
			filterObj: '='
		}
	};
}]);