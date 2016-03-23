angular
    .module('font', ['googlefont'])
    .controller('FontController', ['fontGetter', function(fontGetter){
      this.result = fontGetter.fonts
      console.log("this is result from font.js")
      console.log(this.result);
    }])

