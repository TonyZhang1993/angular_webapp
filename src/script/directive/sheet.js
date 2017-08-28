'use strict'
angular.module('app').directive('appSheet',[function(){
	return {
		restrict:'A',  //调用方式，有四种
		replace: true,
		scope: {
			list: '=',
			visible: '=',
			select: '&'
		},
		templateUrl: 'view/template/sheet.html',
	};
}]);