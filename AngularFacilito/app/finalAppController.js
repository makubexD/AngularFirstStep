angular.module("FinalModule")
    .controller("FinalAppMainController", function ($scope, $resource, PostResource) {
        User = $resource("https://jsonplaceholder.typicode.com/users/:id", { id: "@id" });

        $scope.posts = PostResource.query();
        $scope.users = User.query();

        $scope.removePost = function (post) {
            PostResource.delete({ id: post.id });

            $scope.posts = $scope.posts.filter(function (element) {
                return element.id !== post.id;
            });
        };
    })
    .controller("FinalAppPostController", function ($scope, $routeParams, PostResource, $location) {
        $scope.title = "EDIT POST";
        $scope.post = PostResource.get({ id: $routeParams.id });

        $scope.savePost = function () {
            PostResource.update({id: $scope.post.id }, { data: $scope.post }, function (data) {
                console.log(data);
                $location.path("/post/" + $scope.post.id);
            });
        };
    })
    .controller("FinalAppNewPostController", function ($scope, PostResource, $location) {
        $scope.post = {};
        $scope.title = "CREATE POST";

        $scope.savePost = function () {
            PostResource.save({ data: $scope.post }, function (data) {
                console.log(data);
                $location.path("/");
            });
        };
    });