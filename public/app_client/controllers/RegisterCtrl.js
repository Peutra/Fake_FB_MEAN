app.controller('registerController', [ '$location', 'AuthService', function ($location, AuthService) {
  // create a message to display in our view
  // $scope.message = 'Everyone come and see how good I look!';
  var vm = this
  vm.credentials = {
    name: '',
    email: '',
    password: ''
  }
  vm.onSubmit = function () {
    AuthService
    .register(vm.credentials)
    .catch(function (err) {
      throw (err)
    })
    .then(function () {
      console.log('succesfully registered')
      $location.path('profile')
    })
  }
}])
