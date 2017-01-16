app.controller('loginController', [ '$location', 'AuthService', function ($location, AuthService) {
  // create a message to display in our view
  // $scope.message = 'Everyone come and see how good I look!';
  var vm = this
  vm.credentials = {
    name: '',
    email: '',
    password: ''
  }
  console.log('toto')
  vm.onSubmit = function () {
    AuthService
    .login(vm.credentials)
    .catch(function (err) {
      throw (err.data.message)
    })
    .then(function () {
      console.log('It\'s a success')
      $location.path('profile')
    })
  }
}])
