angular.module('myApp.service.peopleTableData', ['firebase'])
    .constant('FIREBASE_URI', 'https://angularcontactlist.firebaseio.com/')
    .factory('tableData', ['$firebaseArray','$firebaseObject', 'FIREBASE_URI', function ($firebaseArray,$firebaseObject, FIREBASE_URI) {

        var ref = new Firebase(FIREBASE_URI);
        var contactRef = ref.child('Contacts');
        Contacts = $firebaseArray(contactRef);
       
        return {

            allContacts: function () {
                return Contacts;
            },
            findContact: function (id) {
                return $firebaseObject(contactRef.child(id));
            },
            saveContact: function (contact) {
                if (typeof contact.$id == "undefined") {
                    contactRef.push({
                        firstName: contact.firstName,
                        lastName: contact.lastName,
                        age: contact.age,
                        phoneNumber: contact.phoneNumber
                    })
                } else {
                    var objContact = contactRef.child(contact.$id)
                    objContact.set({
                        firstName: contact.firstName,
                        lastName: contact.lastName,
                        age: contact.age,
                        phoneNumber: contact.phoneNumber
                    });
                }
            },
            removeContact: function (id) {
               Contacts.$remove(id)
            }
        }
    }
    ]);
