
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

     $scope.midRaise = true;

    
   $scope.mainNavMenu = function (){
      $scope.navBgWrapper = !$scope.navBgWrapper;
      $scope.itemsVisble = false;
      $scope.highRaise = false;
    }

    $scope.followeringMenu = function (){
      $scope.panelWigetWrapper = !$scope.panelWigetWrapper;
    }

    $scope.likeItems = function() {
     $scope.itemsVisble = !$scope.itemsVisble;
    }


}])


//angular
//.module('lybApp')
//.controller('storeCtrl', ['$scope', function($scope, $timeout, $window, $location) {
    
        

  //      $scope.midRaise = true;

    //    $scope.mainNavMenu = function (){
      //      $scope.navBgWrapper = !$scope.navBgWrapper;
          //  $scope.itemsVisble = false;
          //  $scope.highRaise = false;
       // }
        
        //$scope.followeringMenu = function (){
          //  $scope.panelWigetWrapper = !$scope.panelWigetWrapper;
        //}

       // $scope.itemMenu = function() {
         //   $scope.itemsVisble = !$scope.itemsVisble;
           // $scope.highRaise = false;
            //$scope.navBgWrapper = false;

       // }
        
        //$scope.likeItems = function() {
          //  $scope.highRaise = !$scope.highRaise;
            //$scope.itemsVisble = false;
            //$scope.navBgWrapper = false;
        //}
         
        //$scope.panel = { open: false, content: null, model: {} };
         
        //$scope.openProduct = function openProduct(model) {

          //  $scope.siteBlackout = !$scope.siteBlackout;
            //if (!model || !('productTitle' in model) || !model.productTitle) {

                // Ensure we have a valid being model passed along.
              //  throw "Please provide a model to the `openProduct` method."

            //}

            // Open the panel with the partial for the related product.
            //$scope.panel.open    = true;
            //$scope.panel.model   = model;
            //$scope.panel.partial = 'store-view.html';
        //};

        
        //$scope.closeProduct = function closeProduct() {

          //  $scope.panel.open = false;
           // $scope.panel.model = {};
            //$scope.siteBlackout = false;


            // Remove the HTML content from the panel within 750 milliseconds.
            //$timeout(function timeout() {
              //  $scope.panel.partial = null;
            //}, 750);

        //}


 //}])
