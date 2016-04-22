varSpaAppModule.controller('finController', ['$scope', function ($scope) {
    'use strict';
    $scope.title = "Earnings and Expenses"; 
    $scope.finTransactions  = [{
                            trId:"001",
                            trAmount : 34.12,
                            trDate: "04/20/2016",
                            trType:"DR",
                            trInstrument: "Card1",
                            trDesc:"Resturant Expense"
             
                        },
                        {
                        	trId:"002",
                            trAmount : 65.15,
                            trDate: "01/15/2016",
                            trType:"DR",
                            trInstrument: "Card2",
                            trDesc:"Gas "
                        },
                        {
                        	trId:"003",
                            trAmount : 56.39,
                            trDate: "03/03/2016",
                            trType:"DR",
                            trInstrument: "Card1",
                            trDesc:"Grocerry"
                        },
                        {
                        	trId:"004",
                            trAmount : 20.70,
                            trDate: "04/20/2016",
                            trType:"DR",
                            trInstrument: "Card2",
                            trDesc:"Movie Expense"
                        },
                        {
                        	trId:"005",
                            trAmount : 1200.33,
                            trDate: "04/22/2016",
                            trType:"CR",
                            trInstrument: "Direct Deposit to Account",
                            trDesc:"Salary"
                        }];
    
}]);
