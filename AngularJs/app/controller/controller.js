angular.module('myApp.controller.peopleController', ['myApp.service.peopleTableData'])

.controller('peopleController', function ($scope, tableData) {
    $scope.peopleList = tableData.allContacts()
})

.controller('addContactController', function ($scope, tableData) {

    var defaultForm = {
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: ''
    };

    $scope.submitContact = function () {
        tableData.addContact($scope.newContact);
        $scope.newContact = defaultForm;
       
    };
});