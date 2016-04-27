varSpaAppModule.controller('hotelController', ['$scope', function ($scope) {
    'use strict';
    $scope.title = "Hotel Names and Rates";
    $scope.MN = {
                    hotelName:"ComfortInn",
                    ratePerNight : 71,
                    city: "Bloomington",
                    state:"MN"
                 };
    $scope.IL = {
               		hotelName:"Holiday Inn",
                    ratePerNight : 105,
                    city: "Chicago",
                    state:"IL"
                };
    $scope.OH = {
                	hotelName:"Comfort Inn",
                    ratePerNight : 65,
                    city: "Columbus",
                    state:"OH"
                };
    
}]);
