(function(){
  angular.module("NewApp")
  .controller("NavigationController",NavigationController)
  .service('AuthTokenService',AuthTokenService)
  .service('Storage',Storage)
  .service('clearLocalStorage',clearLocalStorage);


  AuthTokenService.$inject=['$window'];
  function AuthTokenService($window){
        var service = this;
        var store = $window.localStorage;
        var key = 'auth-token';

        service.display=function (){
          console.log("store is: ",store);
        };


       service.getToken=function() {
          return store.getItem(key);
       };

       service.setToken=function(token) {
          if (token) {
              store.setItem(key, token);
          } else {
            store.removeItem(key);
          }
       };
  }

  Storage.$inject=['$window'];
  function Storage($window){
      var service = this;
      var store = $window.localStorage;

      service.getUsername=function() {
        return store.getItem('username');
      };
      service.setUsername=function(username) {
        return store.setItem('username',username);
      };
      service.remove=function(key){
        return store.removeItem(key);
      };
      service.save=function(key,value){
        return store.setItem(key,value);
      };
  }

 clearLocalStorage.$inject=['$window','AuthTokenService','Storage'];
 function clearLocalStorage($window,AuthTokenService,Storage){
   var service=this;
   var store=$window.localStorage;

   service.remove=function(){
     //store.clear();
     AuthTokenService.setToken(null);
     Storage.remove('username');
     Storage.save('loggedIn',false);
   };
  }



  NavigationController.$inject=['$scope','$state','$http','AuthTokenService','Storage','clearLocalStorage','$window'];
  function NavigationController($scope,$state,$http,AuthTokenService,Storage,clearLocalStorage,$window){
    clearLocalStorage.remove();
    var log=this;
    log.logUserIn=function(email,password){
      var request_body={"email":email,"password":password};
      console.log("button is clicked");
      console.log("request_body: ",request_body);
      $http.post('/login',request_body).success(function(response){

            AuthTokenService.setToken(response.token);
            Storage.save('username',response.username);
            Storage.save('loggedIn',true);
            $state.go('timelinePage');

          })
        .error(function(error){
            console.log(error);
            if(error == 'No account with this email'){
                  swal(
                    'Opps..!',
                    'No account with this email',
                    'error'
                  )
             }
             else if(error == 'Invalid email or password'){
                  swal(
                  'Opps..!',
                  'Email/password is incorrect',
                  'error'
                )
            }
      });
   };
  }
})();
