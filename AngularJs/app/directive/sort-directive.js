angular.module('myApp.directive.tablesorting', [])

  .directive("sort", function () {

    return {

        restrict: 'A',

        transclude: true,

        template: '<a ng-click="onClick()">' +
                  '<span ng-transclude></span>' +
                  '<i class="glyphicon" ng-class="{\'glyphicon-sort-by-alphabet\' : order === by && !reverse,  \'glyphicon-sort-by-alphabet-alt\' : order===by && reverse}"></i>' +
                  '</a>',

        scope: {
            order: '=',
            by: '=',
            reverse: '='
        },

        link: function (scope, element, attrs) {

            scope.onClick = function () {

                if (scope.order === scope.by) {
                    scope.reverse = !scope.reverse
                } else {
                    scope.by = scope.order;
                    scope.reverse = false;

                }

            }

        }

    }

});