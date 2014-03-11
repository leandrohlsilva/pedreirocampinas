'use strict';

/* global blueimp: false */
/* global $: false */

angular.module('pedreirocampinasApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/main.html',
      controller: function ($rootScope) {
        $rootScope.home = true;
        $rootScope.galeria = false;
        $rootScope.sobre = false;
        $rootScope.contato = false;
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: '/partials/404.html'
    })
    .state('galeria', {
      url: '/galeria',
      templateUrl: '/partials/galeria.html',
      controller: function ($scope, $rootScope) {
        $rootScope.home = false;
        $rootScope.galeria = true;
        $rootScope.sobre = false;
        $rootScope.contato = false;

        var numImages = 42;
        var i = 0;
        $scope.images = [];
        for (; i < numImages; i++) {
          $scope.images.push(i);
        }

        $('#borderless-checkbox').on('change', function () {
            var borderless = $(this).is(':checked');
            $('#blueimp-gallery').data('useBootstrapModal', !borderless);
            $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
          });
        $('#fullscreen-checkbox').on('change', function () {
            $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
          });

        $scope.gallery = function () {
            event.preventDefault();
            blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
          };
      }
    })
    .state('sobre-mim', {
      url: '/sobre-mim',
      templateUrl: '/partials/sobre-mim.html',
      controller: function ($rootScope) {
        $rootScope.home = false;
        $rootScope.galeria = false;
        $rootScope.sobre = true;
        $rootScope.contato = false;
      }
    })
    .state('contato', {
      url: '/contato',
      templateUrl: '/partials/contato.html',
      controller: function ($rootScope) {
        $rootScope.home = false;
        $rootScope.galeria = false;
        $rootScope.sobre = false;
        $rootScope.contato = true;
      }

    });
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
