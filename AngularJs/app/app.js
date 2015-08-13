var app = angular.module('myApp', ["ngRoute","myApp.directive.customTable","myApp.directive.customForm"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "app/partial-views/form-view.html",
        controller: "addContactController"
    }).when("/contact/edit/:id", {
        templateUrl: "app/partial-views/form-view.html",
        controller: "editContactController"
    }).otherwise({
        redirectTo:"/"
    });
}]);

