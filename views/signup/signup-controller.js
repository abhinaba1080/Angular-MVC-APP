(function(){
  angular.module('NewApp')
  .controller('SignupController',SignupController);

  SignupController.$inject=['$scope','$state','$http'];
  function SignupController($scope,$state,$http) {
    var reg=this;
    console.log(reg);
    reg.createUser=function(){
      console.log(reg.user);
      $http.post('/signup',reg.user).success(function(response){
            
      }).error(function(){
       console.log(error); 
      });
    };
   
  }


})();
