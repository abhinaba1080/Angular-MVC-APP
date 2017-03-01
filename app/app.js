(function(){
  angular.module('NewApp',['ui.router'])
  .config(RoutesConfig);

  RoutesConfig.inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
    
    .state('home',{
      url:'/',
      templateUrl:'views/home/homepage.html',
      controller:'HomePageController'
    })
    
    .state('signUp', {
      url: '/signup',
      templateUrl: 'views/signup/signup.html',
      controller:'SignupController'
    });
  }

})();
