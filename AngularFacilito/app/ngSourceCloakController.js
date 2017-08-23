angular.module("ngSourceModule", [])
//var app = angular.module("ngSourceModule", []);
//app
    .controller("ngSourceController", function ($scope, $http) {
    $http.get("https://api.github.com/users/makubexd/repos")
        .then(function (response) {
            console.log(response.data);
            $scope.repos = response.data;
        }, function (err) {
            console.log(err);
        });
});
