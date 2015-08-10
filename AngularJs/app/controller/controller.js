angular.module('myApp.controller.peopleController', ['myApp.service.peopleTableData'])

.controller('peopleController', function ($scope, tableData) {
    $scope.peopleList = tableData.get();
});