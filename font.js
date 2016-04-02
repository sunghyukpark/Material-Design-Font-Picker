var app = angular.module('font', ['ngMaterial', 'googlefont']);

app.controller('FontController', ['$scope','$mdDialog', '$mdMedia', 'fontGetter', function($scope, $mdDialog, $mdMedia, fontGetter){
  $scope.fonts = fontGetter.fonts;
  $scope.fontsFamily = fontGetter.fontsFamily;   // for use in WebFont Load
}]);




