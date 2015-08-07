var app = angular.module('myApp');

app.controller('peopleController', function ($scope) {

    $scope.peopleList = [

	{

	    firstName: 'John',
	    lastName: 'Smith',
	    age: 25,
	    phoneNumber: '212-555-1243'

	},

	{
	    firstName: 'John',
	    lastName: 'Doe',
	    age: 35,
	    phoneNumber: '305-456-1354'

	},

	{
	    firstName: 'Michelle',
	    lastName: 'Perez',
	    age: 34,
	    phoneNumber: '412-345-9634'

	},

    {

        firstName: 'Roberto',
        lastName: 'Miranda',
        age: 96,
        phoneNumber: '262-579-1363'

    },

	{
	    firstName: 'Luis',
	    lastName: 'Gomez',
	    age: 39,
	    phoneNumber: '346-875-7843'

	},

    {

        firstName: 'Jorge',
        lastName: 'Hernandez',
        age: 27,
        phoneNumber: '236-854-7456'

    },

	{
	    firstName: 'Edgardo',
	    lastName: 'Lopez',
	    age: 53,
	    phoneNumber: '347-234-5778'

	},

	{
	    firstName: 'Carmen',
	    lastName: 'Rios',
	    age: 56,
	    phoneNumber: '234-678-1524'

	}

    ]

});