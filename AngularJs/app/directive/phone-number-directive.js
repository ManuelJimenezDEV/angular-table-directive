var app = angular.module('myApp.directive.formatPhone', []);
app.directive('formatPhone', [
        function () {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function (scope, elem, attrs, ctrl, ngModel) {
                    elem.add(phoneNumber).on('keyup', function () {
                        var origVal = elem.val().replace(/[^\w\s]/gi, '');
                        if (origVal.length === 10) {
                            var str = origVal.replace(/(.{3})/g, "$1-");
                            var phone = str.slice(0, -2) + str.slice(-1);
                            jQuery("#phoneNumber").val(phone);
                        }

                    });
                }
            };
        }
]);