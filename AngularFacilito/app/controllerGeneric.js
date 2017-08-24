angular.module("ngRouteModule")
.controller("reposController", function ($scope, $http) {
    $scope.repos = [];
    $http.get("https://api.github.com/users/twitter/repos")
        .then(function (response) {
            //console.log(response.data);
            $scope.posts = response.data;

            for (var i = response.data.length - 1; i >= 0 ; i--) {
                var repoFor = response.data[i];
                $scope.repos.push(repoFor.name);
            }

        }, function (err) {
            console.log(err);
        });

    $scope.optionSelected = function (data) {
        $scope.$apply(function () {
            $scope.main_repo = data;
        });
    }
})
.controller("repoController", function ($scope, $http, $routeParams) {
    $scope.repo = {};
    $http.get("https://api.github.com/repos/twitter/" + $routeParams.name)
        .then(function (response) {
            console.log($routeParams.name);
            console.log(response.data);
            $scope.repo = response.data;
        }, function (err) {
            console.log(err);
        });
});