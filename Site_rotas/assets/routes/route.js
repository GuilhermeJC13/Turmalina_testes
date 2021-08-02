app.config(function($routeProvider, $locationProvider) {

    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider

    .when('/', {
        templateUrl: "views/home.html",
        controller: 'HomeCtrl',
    })

    .when('/contract', {
        templateUrl: "views/contract.html",
        controller: 'ContractCtrl',
    })

    .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl',
    })

    .when('/budgetExpenditure', {
        templateUrl: 'views/budgetExpenditure.html',
        controller: 'BudgetExpenditureCtrl',
    })
    .when('/budgetRevenue', {
        templateUrl: 'views/budgetRevenue.html',
        controller: 'BudgetRevenueCtrl',
    })

    .when('/extraBudgetExpenditure', {
        templateUrl: 'views/extraBudgetExpenditure.html',
        controller: 'ExtraBudgetExpenditureCtrl',
    })

    .when('/extraBudgetRevenue', {
        templateUrl: 'views/extraBudgetRevenue.html',
        controller: 'extraBudgetRevenueCtrl',
    })

    .when('/comittedExpenditure', {
        templateUrl: 'views/comittedExpenditure.html',
        controller: 'ComittedExpenditureCtrl',
    })

    .when('/paymentDocument', {
        templateUrl: 'views/paymentDocument.html',
        controller: 'PaymentDocumentCtrl',
    })

    .when('/employeeInformation', {
        templateUrl: 'views/employeeInformation.html',
        controller: 'EmployeeInformationCtrl',
    })

    .when('/agreement', {
        templateUrl: "views/agreement.html",
        controller: 'HomeCtrl',
    })

    .when('/planningInstrument', {
        templateUrl: "views/planningInstrument.html",
        controller: 'HomeCtrl',
    })

    .otherwise({ redirectTo: '/' });

});