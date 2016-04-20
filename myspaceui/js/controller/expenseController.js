varSpaAppModule.controller('expenseController', ['$scope', function ($scope) {
    'use strict';
    $scope.firstName = "Sukanta";
    $scope.lastName = "Chattopadhyay";
    $scope.expenses  = [{
                            expId:"001",
                            expAmount : 34.00,
                            expDate: "04/20/2016",
                            expDesc:"Resturant Expense"
                        },
                        {
                            expId:"002",
                            expAmount : 64.00,
                            expDate: "04/17/2016",
                            expDesc:"grocery"
                        },
                        {
                            expId:"003",
                            expAmount : 124.00,
                            expDate: "04/19/2016",
                            expDesc:"Walmart"
                        },
                        {
                            expId:"004",
                            expAmount : 97.00,
                            expDate: "04/18/2016",
                            expDesc:"BigY"
                        },
                        {
                            expId:"007",
                            expAmount : 40.00,
                            expDate: "04/18/2016",
                            expDesc:"Gas"
                        }];
}]);
