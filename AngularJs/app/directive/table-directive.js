angular.module('myApp.directive.customTable', ['myApp.directive.tablesorting', 'myApp.controller.peopleController'])

.directive('peopleTable', function () {

    return {

        restrict: 'E',

        replace: true,

        templateUrl: './app/template/contact-table-template.html',

        controller: "peopleController",

    }

});
