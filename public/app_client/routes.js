app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: '/app_client/views/register.html',
      controller: 'registerController',
      controllerAs: 'vm'
    }

    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl: '/app_client/views/login.html',
      controller: 'loginController',
      controllerAs: 'vm'
    }

    $stateProvider.state(registerState)
    $stateProvider.state(loginState)

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

})
