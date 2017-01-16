app.controller('navigationController', [ '$scope', 'AuthService',  function($scope, AuthService) {

  var navvm = this;

  $scope.isLoggedIn = AuthService.isLoggedIn();

  $scope.currentUser = AuthService.currentUser();

}]);
