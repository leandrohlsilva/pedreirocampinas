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
    })
    .state('404', {
      url: '/404',
      template: 'Not found! :('
    })
    .state('galeria', {
      url: '/#/galeria',
      template: 'Not found! :('
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
