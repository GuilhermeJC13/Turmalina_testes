app.controller('HomeCtrl', function($scope) {
    $scope.title = 'Bem-vindo, esta é nossa página principal!';
});

app.controller('ContractCtrl', function($scope) {
    $scope.title = 'Contratos';
});

app.controller('BiddingCtrl', function($scope) {
    $scope.title = 'Licitações';
});

app.controller('BudgetExpenditurCtrl', function($scope) {
    $scope.title = 'Despesa Orçamentária';
});

app.controller('BudgetRevenueCtrl', function($scope) {
    $scope.title = 'Receita Orçamentária';
});

app.controller('BudgetExpenditureCtrl', function($scope) {
    $scope.title = 'Despesa Orçamentária';
});

app.controller('CommitedExpenditureCtrl', function($scope) {
    $scope.title = 'Empenho';
});

app.controller('PaymentDocumentCtrl', function($scope) {
    $scope.title = 'Folha de Pagamento';
});

app.controller('EmployeeInformationCtrl', function($scope) {
    $scope.title = 'Informação';
});

app.controller('TutorialCtrl', function($scope) {
    $scope.title = 'Tutorial';
});
