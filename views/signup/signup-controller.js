(function(){
  angular.module('NewApp')
  .controller('SignupController',SignupController);


  SignupController.$inject=['$scope','$state','$http'];
  function SignupController($scope,$state,$http) {
    var reg=this;
    console.log(reg);
    console.log("signup_http: ",$http);
    reg.createUser=function(){
      console.log("reg.user: ",reg.user);
      $http.post('/signup',reg.user).success(function(response){
          swal({
                title: 'You Are Registered',
                text: "Explore Now!!!",
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Login'
              }).then(function () {
                                      $state.go('signup_success');
  
                  })
      }).error(function(){
        swal(
                'Oops...',
                'Something went wrong!',
                 'error'
        )
       console.log(error); 
      });
    };
   
  }


})();
