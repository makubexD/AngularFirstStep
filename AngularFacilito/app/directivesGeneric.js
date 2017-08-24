angular.module("ngRouteModule")
.directive("myAutocomplete", function () {
        return {
            link: function (scope, element, attrs) {
                $(element).autocomplete({
                    source: scope.$eval(attrs.myAutocomplete),
                    select: function (ev, ui) {
                        ev.preventDefault();
                        if (ui.item) {
                            scope.optionSelected(ui.item.value);
                        }
                    },
                    focus: function (ev, ui) {
                        ev.preventDefault();
                        $(this).val(ui.item.label);
                    }
                });
            }
        };
    })
    .directive("backImg", function () {
        return {
            link: function ($scope, element, attrs) {
                attrs.$observe("backImg", function (value) {
                    element.css({
                        "background": "url(" + value + ")",
                        "background-size": "cover",
                        "background-position": "center"
                    });
                });
            }
        };
    })