app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    // REGISTER VIEW ========================================
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'registerController'
    })

})
