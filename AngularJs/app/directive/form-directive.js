angular.module('myApp.directive.customForm', ['myApp.controller.peopleController'])

.directive('contactForm',function () {
    return {

        restrict: 'E',

        replace: true,

        templateUrl: './app/directive-templates/contact-form-template.html',

    }
});