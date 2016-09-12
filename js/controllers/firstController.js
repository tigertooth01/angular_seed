myApp.controller("firstController" ,function ($scope,$state,$filter,PhpService,GlobalFlagService,StateService) {

	$scope.goTo = function(destination){
		StateService.goToState($state,destination);
	}
});