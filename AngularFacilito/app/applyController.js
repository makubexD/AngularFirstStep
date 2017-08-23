angular.module("applyModule", [])
    .controller("applyController",
        function ($scope) {
            $scope.nombre = "Makubex";
            //setTimeout(function () {
            //    $scope.$apply(function () {
            //        $scope.nombre = "Kiefer Apply";
            //    });
            //}, 2000);

            //document.querySelector("#mi_boton").addEventListener("click", function() {
            //    $scope.$apply(function() {
            //        $scope.nombre = "Maku from botton -- old js";
            //    });
            //});
        });