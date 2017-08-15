var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function ($scope) {
    $scope.nombre = "Kiefer";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "1ST COMMENT",
            userName: "maku"
        },
        {
            comentario: "2nd COMMENT",
            userName: "sispernet"
        }
    ];

    $scope.agregaComentario = function () {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    };
})