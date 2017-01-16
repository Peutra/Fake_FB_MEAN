app.controller('registerController', ['$scope', 'AuthService', function($scope, AuthService) {
    var vm = this;
    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };  
    vm.onSubmit = function () {
      AuthService
        .register(vm.credentials)
        .catch(function(err){
          alert(err);
        })
        .then(function(){
          console.log("registered")
        });
    };
}])
