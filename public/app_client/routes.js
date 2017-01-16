app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: "/app_client/views/register.html",
      controller: 'registerController',
      controllerAs: 'vm'
    }

    $stateProvider.state(registerState)

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

})
