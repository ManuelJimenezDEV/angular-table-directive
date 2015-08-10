angular.module('myApp.directive.customTable', ['myApp.directive.tablesorting', 'myApp.controller.peopleController'])

.directive('peopleTable', function () {

    return {

        restrict: 'E',

        replace: true,

        template:            '<table class="table table-striped">' +
                             '<thead>' +
                             '<tr>' +
                             '<td>' +
                             '<form class="form-horizontal">' +
                             '<div class="form-group">' +
                             '<div class="col-md-8">' +
                             '<input type="text" ng-model="searchText" class="form-control" id="searchInput" placeholder="Please Search This...."/>' +
                             '</div>' +
                             '</div>' +
                             '</form>' +
                             '</td>' +
                             '</tr>' +
                             '<tr>' +
                             '<th sort by="order" reverse="reverse" order="\'firstName\'">First Name</th>' +
                             '<th sort by="order" reverse="reverse" order="\'lastName\'">Last Name</th>' +
                             '<th sort by="order" reverse="reverse" order="\'age\'">Age</th>' +
                             '<th>Phone Number</th>' +
                             '</tr>' +
                             '</thead>' +
                             '<tbody>' +
                             '<tr ng-repeat="person in peopleList | orderBy:order:reverse | filter:searchText">' +
                             '<td>{{person.firstName}}</td><td>{{person.lastName}}</td><td>{{person.age}}</td><td>{{person.phoneNumber}}</td>' +
                             '</tr>' +
                             '</tbody>' +
                             '</table>',

        controller: "peopleController",

    }

});
