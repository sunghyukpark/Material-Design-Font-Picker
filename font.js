var app = angular.module('font', ['ngMaterial', 'googlefont']);

app.controller('FontController', ['$scope','$mdDialog', '$mdMedia', 'fontGetter', function($scope, $mdDialog, $mdMedia, fontGetter){

  // Data
  $scope.fonts = fontGetter.fonts;
  $scope.fontsFamily = fontGetter.fontsFamily;   // for use in WebFont Load

  // Font selection
  $scope.selectedFonts = [];

  // Font status change, add to selection if not present
  $scope.toggle = function(font){
    var pos = $scope.selectedFonts.indexOf(font)
    if (pos == -1){
      $scope.selectedFonts.push(font);
      font.selected = true;
    } else {
      $scope.selectedFonts.splice(pos, 1);
      font.selected = false;
    }
  }


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
        '        <md-content class="md-padding" layout="row" layout-wrap>' +
        '          <md-card ng-repeat="font in selectedFonts" style="width: 300px;">' +
        '            <md-card-title>' +
        '              <md-card-title-text>' +
        '                <span class="md-headline" style="font-family: {{font.family}}">AaBbCcDdEeFfGg</span>' +
        '                <span class="md-subhead">{{font.family}}</span>' +
        '                <md-button class="md-warn" href="{{font.files.regular}}">Click to Download</md-button>' +
        '              </md-card-title-text>' +
        '              <md-card-title-media>' +
        '                <div class="md-media-sm card-media"></div>' +
        '              </md-card-title-media>' +
        '            </md-card-title>' +
        '            <md-card-actions layout="row" layout-align="end center">' +
        '              <md-button class>Selected</md-checkbox>' +
        '            </md-card-actions>' +
        '          </md-card>' +
        '        </md-content>' +
        '        <h3>1. Verify your fonts and settings:</h3>' +
        '        <h3>2. Add Javascript Tag:</h3>' +
        '        <h3>3. Use these font-family declarations:</h3>' +
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
        fonts: $scope.fonts,
        selectedFonts: $scope.selectedFonts
      },
      controller: DialogController
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  function DialogController($scope, $mdDialog, fonts, selectedFonts){
    $scope.fonts = fonts;
    $scope.selectedFonts = selectedFonts;
    $scope.closeDialog = function(){
      $mdDialog.hide();
    };
  }

}]);








