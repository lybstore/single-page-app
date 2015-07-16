
"use strict"; 

var app = angular.module('lybApp');

app.service("storeService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/store.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getstore = function () {
        return deferred.promise;
    }
})

.controller('storeCtrl', ['$scope', 'storeService', function($scope, storeService,  $timeout, $window, $location) {

    var promise = storeService.getstore();
    promise.then(function (data){
        $scope.store = data.store
    });
    
    $scope.panel = { open: false, content: null, model: {} };
         
        $scope.openProduct = function openProduct(model) {

            $scope.siteBlackout = !$scope.siteBlackout;
             if (!model || !('productTitle' in model) || !model.productTitle) {
            }

            $scope.panel.open    = true;
            $scope.panel.model   = model;
            $scope.panel.partial = 'store-view.html';
        };
}])


