app.config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
    })

    .when('/contract', {
        templateUrl: 'views/contract.html',
        controller: 'ContractCtrl',
    })

    .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl',
    })

    .otherwise({ redirectTo: '/' });
});