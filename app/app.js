(function(){
  angular.module('NewApp',['ui.router'])
  .controller('NewAppController',NewAppController)
  .config(RoutesConfig);
  
  
  
  NewAppController.$inject=['$scope'];
  function NewAppController($scope){
    var page=this;
  }

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
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
    })
    
    .state('explore',{
      url:'/explore',
      templateUrl:'views/explore/explore.html',
      controller:'ExploreController'
    })
    .state('timelinePage',{
      url:'/timeline',
      templateUrl:'views/timeline-page/timeline-page.html'
    });
  }
  
 

})();
