'use strict';

angular.module('pedreirocampinasApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/main.html'
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
