varSpaAppModule.directive('taskInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: "../pages/directives/taskInfo.html" 
  }; 
});