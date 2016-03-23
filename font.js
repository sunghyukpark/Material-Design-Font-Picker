angular
    .module('font', ['googlefont'])
    .controller('FontController', ['fontGetter', function(fontGetter){
      this.fonts = fontGetter.fonts;
    }])

