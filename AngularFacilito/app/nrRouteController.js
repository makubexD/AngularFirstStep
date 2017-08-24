angular.module("ngRouteModule", ["ngRoute"])
    .config(function ($routeProvider) {
        
        
        $routeProvider
            .when("/", {
                controller: "reposController",
                templateUrl: "templates/baseHome.html"
            })
            .when("/repo/:name", {
                controller: "repoController",
                templateUrl: "templates/repo.html"
            })
            .otherwise("/");
    });