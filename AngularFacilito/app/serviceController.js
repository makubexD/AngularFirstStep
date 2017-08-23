﻿angular.module("serviceModule", ["LocalStorageModule"])
    .service("ToDoService",  function (localStorageService) {
        this.key = "angular-toDoList";

        if (localStorageService.get(this.key)) {
            this.activities = localStorageService.get(this.key);
        } else {
            this.activities = {};
        }

        this.add = function (newActv) {
            this.activities.push(newActv);
            this.updateLocalStorage();
        };

        this.updateLocalStorage = function () {
            localStorageService.set(this.key, this.activities);
        };

        this.clean = function () {
            this.activities = [];
            this.updateLocalStorage();
            return this.getAll();
        };

        this.getAll = function () {
            return this.activities;
        };

        this.removeItem = function (item) {
            this.activities = this.activities.filter(function (activity) {
                return activity !== item;
            });
            this.updateLocalStorage();
            return this.getAll();
        };
    })
    .controller("ToDoController", function ($scope, ToDoService) {
        
        $scope.todo = ToDoService.getAll();
        $scope.newAct = {};

        $scope.addAct = function () {
            ToDoService.add($scope.newAct);
            $scope.newAct = {};
        }

        $scope.removeAct = function (item) {
            $scope.todo = ToDoService.removeItem(item);
        }

        $scope.clean = function () {
            $scope.todo = ToDoService.clean();
        }
    });