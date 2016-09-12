myApp.controller("secondController" ,function ($scope,$state,$filter,$translate,PhpService,GlobalFlagService,StateService) {

	$scope.goTo = function(destination){
		StateService.goToState($state,destination);
	}
});