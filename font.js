var app = angular.module('font', ['ngMaterial', 'googlefont']);

app.controller('FontController', ['$scope','$mdDialog', '$mdMedia', 'fontGetter', function($scope, $mdDialog, $mdMedia, fontGetter){

  // Data
  $scope.fonts = fontGetter.fonts;
  $scope.fontsFamily = fontGetter.fontsFamily;   // for use in WebFont Load

  // Dialog
  $scope.status = '';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showDialog = showDialog;

  // Internal Method
  function showDialog($event){
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    var parentElement = angular.element(document.body);
    $mdDialog.show({
      parent: parentElement,
      targetEvent:$event,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,

      // templateUrl: 'selector.tmpl.html',
      template:
        '<md-dialog aria-label="selector"  ng-cloak>' +
        '  <form>' +
        '    <md-toolbar>' +
        '      <div class="md-toolbar-tools">' +
        '        <h2>My Fonts</h2>' +
        '        <span flex></span>' +
        '        <md-dialog-actions>' +
        '          <md-button ng-click="closeDialog()" class="md-primary">' +
        '             Close Dialog' +
        '          </md-button>' +
        '        </md-dialog-actions>' +
        // '        <md-button class="md-icon-button" ng-click="cancel()">' +
        // '          <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>' +
        // '        </md-button>' +
        '      </div>' +
        '    </md-toolbar>' +
        '      <div class="md-dialog-content">' +
        '        <md-list>' +
        '          <md-list-item ng-repeat="font in fonts">' +
        '            <p>{{font}}</p>' +
        '          </md-list-item>' +
        '        </md-list>' +
        '        <h3>1. Verify your fonts and settings:</h3>' +
        '        <h3>2. Add this Javascript Tag</h3>' +
        '        <h3>3. Use these font-family declarations</h3>' +
        '      </div>' +
        '    </md-dialog-content>' +
        '    <md-dialog-actions layout="row">' +
        '      <md-button href="https://www.google.com/fonts" target="_blank" md-autofocus>' +
        '        More on Google Fonts' +
        '      </md-button>' +
        '      <span flex></span>' +
        '  </form>' +
        '</md-dialog>',
      locals: {
        fonts: $scope.fonts
      },
      controller: DialogController
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  function DialogController($scope, $mdDialog, fonts){
    $scope.fonts = fonts;
    $scope.closeDialog = function(){
      $mdDialog.hide();
    };
  }

}]);








