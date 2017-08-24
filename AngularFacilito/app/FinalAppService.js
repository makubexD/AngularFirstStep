angular.module("FinalModule")
    .factory("PostResource",
        function ($resource) {
            return $resource("https://jsonplaceholder.typicode.com/posts/:id",
                { id: "@id" },
                { update: { method: "PUT" } });
        });