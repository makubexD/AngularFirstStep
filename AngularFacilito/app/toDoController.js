angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function ($scope, localStorageService) {
    if (localStorageService.get("angular-toDoList")) {
        $scope.todo = localStorageService.get("angular-toDoList");
    } else {
        $scope.todo = [];
    }

    $scope.$watchCollection('todo',
        function (newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
            localStorageService.set("angular-toDoList", $scope.todo);
        });

    $scope.addAct = function () {
        $scope.todo.push($scope.newAct);
        $scope.newAct = {};
    }


    //$scope.addAct = function () {
    //    $scope.todo.push($scope.newAct);
    //    $scope.newAct = {};
    //    localStorageService.set("angular-toDoList", $scope.todo);
    //}

    //$scope.clean = function () {
    //    $scope.todo = [];
    //    localStorageService.set("angular-toDoList", $scope.todo);
    //}
})