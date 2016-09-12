myApp.service('StateService', function($rootScope) {
    var $state;
    //    var pageStack = ['view1'];

    return {

        goToState: function(state,destination) {
            $state = state;
            $state.go(destination);
        }

    }

});