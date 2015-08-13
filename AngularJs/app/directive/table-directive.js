angular.module('myApp.directive.customTable', ['myApp.directive.tablesorting', 'myApp.controller.peopleController'])

.directive('peopleTable', function () {

    return {

        restrict: 'E',

        replace: true,

        templateUrl: './app/directive-templates/contact-table-template.html',

        controller: "peopleController",

    }

});
