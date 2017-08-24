angular.module("FinalModule", ["lumx", "ngRoute", "ngResource"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/",
                {
                    controller: "FinalAppMainController",
                    templateUrl: "templates/finalAppHome.html"
                })
            .when("/post/:id",
                {
                    controller: "FinalAppPostController",
                    templateUrl: "templates/finalAppPost.html"
                })
            .when("/posts/new",
                {
                    controller: "FinalAppNewPostController",
                    templateUrl: "templates/finalAppNewPost.html"
                })
            .when("/posts/edit/:id",
                {
                    controller: "FinalAppPostController",
                    templateUrl: "templates/finalAppNewPost.html"
                });
    });