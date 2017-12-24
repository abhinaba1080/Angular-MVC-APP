(function() {
  angular.module("NewApp")
    .controller('TimelineController', TimelineController);

  TimelineController.$inject = ['$scope', '$state','$window'];

  function TimelineController($scope, $state,$window) {

    if( window.localStorage )
    {
        if( !localStorage.getItem('firstLoad') )
        {
           localStorage.firstLoad= true;
           window.location.reload();
        }
        else
        localStorage.removeItem('firstLoad');
    }
}
})();
