varSpaAppModule.directive('expInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: "../pages/expInfo.html" 
  }; 
});