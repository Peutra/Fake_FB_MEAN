app.controller('profileController', [ '$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
  var vm = this
  vm.isLoggedIn = AuthService.isLoggedIn()
  vm.currentUser = AuthService.currentUser()
}])
