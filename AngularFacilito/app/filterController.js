angular.module("filterModule", [])
    .filter("removeHtml", function () {
        return function (textHtml) {
            return String(textHtml).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("filterController", function ($scope) {
        $scope.htmlTag = "<p>Here is a part of HTML</p>";
        $scope.my_Html = {};
        $scope.my_Html.title = "TitleHtml";
        $scope.my_Html.body = "bodyHtml";
        $scope.cost = 2;
    })