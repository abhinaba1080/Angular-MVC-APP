(function(){
  angular.module("NewApp")
  .controller("NavigationController",NavigationController)
  
  NavigationController.$inject=['$scope','$http','$state'];
  function NavigationController($scope,$http,$state){
    var log=this;
    log.logUserIn=function(){
      console.log("button is clicked");
      console.log("log.user is: ",log.user);
      $http.post('/login',log.user).success(function(response){
          
            localStorage.setItem('User-Data',JSON.stringify(response));
            
          })
        .error(function(error){
            console.log(error);
      })
   };
  }
})();