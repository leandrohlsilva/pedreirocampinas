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
      url: '/galeria',
      templateUrl: '/views/galeria.html'
    })
    .state('sobre-mim', {
      url: '/sobre-mim',
      templateUrl: '/views/sobre-mim.html'
    })
    .state('contato', {
      url: '/contato',
      templateUrl: '/views/contato.html'
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
