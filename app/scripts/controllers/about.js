'use strict';

/**
 * @ngdoc function
 * @name anguProApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anguProApp
 */
angular.module('anguProApp')
  .controller('AboutCtrl', ['$scope','$http',function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showView = function(){
    	$http.post('anguPro/common/provinceQuery', {params: {id:'5'}})
    	.success(function(data) {
			    console.log(data);
			}).error(function(data) {
			    //处理错误
			});
    };
  }]);
