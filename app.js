var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/DetailPage/:id', {
            templateUrl: 'detail_page.html',
            controller: 'DetailPageController'
        }).
        when('/SendPost',{
            templateUrl : 'send_post.html',
            controller: 'SendPostController'
        }).
        when('/EditPost/:id',{
            templateUrl : 'edit_page.html',
            controller: 'EditPostController'
        }).
        when('/ListingPage',{
            templateUrl: 'listing_page.html',
            controller: 'ListingPageController'
        }).
        otherwise({
            redirectTo: '/ListingPage'
        });
    }]);


app.controller('DetailPageController', function($scope,$http,$routeParams) {
    $http.get('http://jsonplaceholder.typicode.com/posts/'+ $routeParams.id).success(function(data) {
        $scope.item = data;
    });

    $http.get('http://jsonplaceholder.typicode.com/posts/'+$routeParams.id +'/comments').success(function(data){
        $scope.commentItems = data;
    });
});


app.controller('ListingPageController', function($scope,$http,$routeParams){
    $http.get('http://jsonplaceholder.typicode.com/posts').success(function(data) {
        $scope.items = data;
    });

    $scope.DeleteItem = function() {
        $http.delete('http://jsonplaceholder.typicode.com/posts/'+ $routeParams.id).success(function(data) {

        });
    }



});

app.controller('EditPostController',function($scope,$http,$routeParams){
    $http.get('http://jsonplaceholder.typicode.com/posts/'+ $routeParams.id).success(function(data) {
        $scope.edit = data;
    });
    $scope.EditData = function(edit) {

        $http.put('http://jsonplaceholder.typicode.com/posts/' + $routeParams.id,edit).success(function (data) {
            console.log(data);
        });

    }


});

app.controller('SendPostController', function($scope,$http){
    $scope.send={};
 $scope.SendData = function(send){

     $http.post('http://jsonplaceholder.typicode.com/posts',send).success(function(data){
         console.log(SendData(data));
     });
 }
});

app.controller('DeletePostController',function($scope,$http,$routeParams){
$http.delete('http://jsonplaceholder.typicode.com/posts/'+ $routeParams.id).success(function(data){

    })
});




