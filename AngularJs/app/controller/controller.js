angular.module('myApp.controller.peopleController', ['myApp.service.peopleTableData'])

.controller('peopleController',["$scope","tableData", function ($scope, tableData) {

    $scope.peopleList = tableData.allContacts();
    $scope.deleteContact = function (id) {
        tableData.removeContact(id);
    }

}])

.controller('addContactController',["$scope","tableData", function ($scope, tableData) {

    $scope.Contact = {};
    $scope.submitContact = function () {
        tableData.saveContact($scope.Contact);
        $scope.Contact = {};
    }

}])

.controller('editContactController',["$scope","$routeParams","$location","tableData", function ($scope, $routeParams,$location, tableData) {
    $scope.Contact = tableData.findContact($routeParams.id);
    $scope.submitContact = function () {
        tableData.saveContact($scope.Contact);
        $scope.Contact = {};
        $location.url("/")
    }
}]);