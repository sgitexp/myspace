varSpaAppModule.controller('tasksController', ['$scope', function ($scope) {
    'use strict';
    $scope.title = "Tasks"
    $scope.tasks  = [{
                            taskId:"001",
                            taskDate : "04/01/2015",
                            fromTime: "12:30 pm",
                            toTime: "1:30 pm",
                            location:"McLean, Virginia",
                            desc:"Appointment with Doctor Robert"
                            	
                        },
                        {
                            taskId:"002",
                            taskDate:"05/20/2016",
                            fromTime: "5:15pm",
                            toTime: "5:45pm",
                            location:"Rocky Hill, CT",
                            desc: "Apartment Office"
                            	
                        },
                        {
                            taskId:"003",
                            taskDate:"05/21/2016",
                            fromTime: "6::15pm",
                            toTime: "8:00pm",
                            location:"Rocky Hill, CT",
                            desc: "Online Classes"
                            	
                        },
                        {
                            taskId:"004",
                            taskDate:"06/1/2016",
                            fromTime: "8:15am",
                            toTime: "10:45am",
                            location:"Rocky Hill, CT",
                            desc: "Training"
                            	
                        },
                        {
                            taskId:"005",
                            taskDate:"06/21/2016",
                            fromTime: "7:30am",
                            toTime: "10:45am",
                            location:"Rocky Hill, CT",
                            desc: "Study"
                            	
                        }];
}]);
