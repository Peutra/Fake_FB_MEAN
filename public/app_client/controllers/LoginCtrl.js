app.controller('loginController', [ '$scope', 'AuthService',  function($scope, AuthService) {
  var vm = this;

  vm.credentials = {
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    AuthService
    .login(vm.credentials)
    .catch(function(err){
      alert(err);
    })
    .then(function(){
      console.log("successfuly logged in")
      // TODO redirect to profile or something
    });
  };

}]);
