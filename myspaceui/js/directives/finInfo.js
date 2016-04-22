varSpaAppModule.directive('finInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: "../pages/directives/finInfo.html" 
  }; 
});