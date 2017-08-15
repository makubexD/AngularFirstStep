var app = angular.module("httpApp", []);
app.controller("httpController", function ($scope, $http) {

    $scope.posts = [];
    $scope.newPost = {};
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            console.log(response.data);
            $scope.posts = response.data;
        }, function (err) {

        });

    $scope.addPost = function () {
        $http.post("https://jsonplaceholder.typicode.com/posts",
            {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            }).then(function (response, status, headers, config) {
                console.log(response);
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};
            },
            function (err, status, headers, config) {
                console.log(err);
            });
    };
})