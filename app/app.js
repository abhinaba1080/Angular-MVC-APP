(function(){
  angular.module('NewApp',['ui.router'])
  .config(RoutesConfig);

  RoutesConfig.inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('signUp', {
      url: '/signup',
      templateUrl: 'views/signup/signup.html',
      controller:'SignupController'
    });
  }

})();
