angular.module("childModule", [])
    .run(function ($rootScope) {
        $rootScope.nombre = "makuRoot";
    })
    .controller("dadController",
        function ($scope) {
            $scope.nombre = "MakuDad";
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.nombre = ":3";
                });
            }, 2000);
        })
    .controller("childController",
        function ($scope) {

        });