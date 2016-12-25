(function () {
  'use strict';

  angular
    .module('app.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        abstract: true,
        url: 'home.app',
        templateUrl: './home.html'
      });
  }
}());
