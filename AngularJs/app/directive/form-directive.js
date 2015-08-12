angular.module('myApp.directive.customForm', ['myApp.controller.peopleController'])

.directive('contactForm',function () {
    return {

        restrict: 'E',

        replace: true,

        templateUrl: './app/template/contact-form-template.html',

        controller: 'addContactController'

    }
});