varSpaAppModule.directive("profileInfo", function() {
	
	return {
		 restricted: "E",
		 scope: {
			 firstName : "=",
			 lastName : "="
		 },
		 template: "<div>{{firstName}} {{lastName}}</div>"
		
	}
});