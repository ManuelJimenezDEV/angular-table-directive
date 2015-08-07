var app = angular.module('myApp');

app.directive('peopleTable', function () {

    return {

        restrict: 'E',

        template: '<table class="table table-striped">' +
                             '<thead>' +
                             '<tr>' +
                             '<th sort by="order" reverse="reverse" order="\'firstName\'">First Name</th>' +
                             '<th sort by="order" reverse="reverse" order="\'lastName\'">Last Name</th>' +
                             '<th sort by="order" reverse="reverse" order="\'age\'">Age</th>' +
                             '<th>Phone Number</th>' +
                             '</tr>' +
                             '</thead>' +
                             '<tbody>' +
                             '<tr ng-repeat="person in peopleList | orderBy:order:reverse">' +
                             '<td>{{person.firstName}}</td><td>{{person.lastName}}</td><td>{{person.age}}</td><td>{{person.phoneNumber}}</td>' +
                             '</tr>' +
                             '</tbody>' +
                             '</table>',

        controller: "peopleController"

    }

});

app.directive("sort", function () {

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