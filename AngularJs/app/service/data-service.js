angular.module('myApp.service.peopleTableData', ['firebase'])
    .constant('FIREBASE_URI', 'https://angularcontactlist.firebaseio.com/')
    .factory('tableData', ['$firebaseArray', 'FIREBASE_URI', function ($firebaseArray, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI);
        var contactRef = ref.child('Contacts');

        return {

            allContacts: function () {
                return $firebaseArray(contactRef);
            },

            addContact: function (newContact) {
                return contactRef.push(newContact);
            }
        }
    }
    ]);
