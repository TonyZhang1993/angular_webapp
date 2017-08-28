'use strict';

angular.module('app').directive('appHead',[function(){
	return {
		restrict: 'A',
		replace: true,   //替换外面的父元素，只能由一个跟元素
		templateUrl:'view/template/head.html'
	};
}]);