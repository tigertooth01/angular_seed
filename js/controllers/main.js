'use strict';

var myApp = angular.module('myApp', ['ui.router','ngRoute','pascalprecht.translate']);



myApp.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

    $stateProvider

        .state('first', {
            url: '/first',
            templateUrl: 'partials/first.html',
            controller: 'firstController'
        })
        .state('second', {//landing
            url: '/second',
            templateUrl: 'partials/second.html',
            controller: 'secondController'
        });

        $urlRouterProvider.otherwise('/first');

        $translateProvider.translations('en', {

        })
        .translations('de', {

        });
        $translateProvider.preferredLanguage('en');

    });


myApp.value('version', '0.1');