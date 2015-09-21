var app = angular.module('flapperNews',[]);
app.controller('MainCtrl',['$scope','posts',  function($scope, posts){
$scope.test = 'Hello World!';
$scope.posts = posts.posts;

$scope.addPost = function(){
	if(!$scope.title || $scope.title==='') {return;}
	$scope.posts.push({title:$scope.title, link:	$scope.link, upvotes:0});
	$scope.title='';
	$scope.link='';
}

$scope.clickUpvote= function(post)
{
	post.upvotes =post.upvotes+1;
}
}]);

app.factory('posts', function (){
	var o ={posts:[{'Aloha':4}]};
	return o;
});




