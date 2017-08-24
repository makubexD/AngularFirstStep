angular.module("directiveFirstModule", [])
    .directive("backImg", function () {
        return {
            link : function($scope, element, attrs) {
                attrs.$observe("backImg", function (value) {
                    element.css({
                        "background": "url(" + value + ")",
                        "background-size": "cover",
                        "background-position": "center"
                    });
                });
            }
        };
        //return function ($scope, element, attrs) {
        //    attrs.$observe("backImg", function (value) {
        //        element.css({
        //            "background": "url(" + value + ")",
        //            "background-size": "cover",
        //            "background-position": "center"
        //        });
        //    });
        //}
    })
    .controller("directiveController", function ($scope, $http) {
            $http.get("https://api.github.com/users/makubexd/repos")
                .then(function (response) {
                    console.log(response.data);
                    $scope.repos = response.data;
                }, function (err) {
                    console.log(err);
                });
        });