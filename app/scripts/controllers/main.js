'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
 angular.module('workspaceApp')
 .controller('MainCtrl', function ($scope,$http) {
 	$scope.awesomeThings = [];
 	$scope.refreshBlog = function(){
 		$http.get("http://localhost:9001/blogs").
 			then(function(response){
 				$scope.awesomeThings = response.data;
 				// console.log($scope.awesomeThings);
 			}, function(response) {
		 		$scope.error = "ss";
		 		console.log("Error : "+$scope.error);
	 		});
 	}
 	$scope.refreshBlog();
$scope.creatBlogs = function(){
	var awesomeThings2 = {
		title:$scope.title,
		content:$scope.content,
		post_by:"TK",
		comments:[]
	};
	$http.post("http://localhost:9001/blogs",awesomeThings2).then(function(response){
		$scope.refreshBlog();
	});
}
});
