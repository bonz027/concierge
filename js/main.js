console.log("Concierge Module is loaded!!!!!")

angular.module('Concierge', ['ui.router'])
  // UI ROUTER CONFIGURATION
  .config(function routerConfig($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('landing',{
        url: '/',
        templateUrl: 'partials/landing.html'
      })
      .state('home',{
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
    $urlRouterProvider.otherwise('/')
  })
  .controller('homeCtrl', homeCtrl)

function homeCtrl () {
  var hCtrl = this
}
