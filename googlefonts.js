var app = angular.module('googlefont', [])

app.factory('fontGetter', ['$http', function($http){
  var GOOGLE_FONT_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkIL39uNV_p5fgAhpc-BUpbqL6bC0pl2E';

  // fonts - save fonts as OBJECTS
  // fontsFamily - save fonts as STRING(Font Family only)
  var fonts = [];
  var fontsFamily = [];

  var refresh = function(){
    var url = GOOGLE_FONT_URL;
    return $http({
      method: 'GET',
      url: GOOGLE_FONT_URL
    }).then(function successCallback(response){
      saveFonts(response.data.items);
      console.log(fontsFamily)
    }, function errorCallback(response){
      console.log('Google Font Request Failed')
    });
  };

  // given array of font objects,
  // save font data in certain formaat
  var saveFonts = function (data){
    for (var i=0; i<data.length; i++){
      var font = data[i];
      font.category = data[i].category;
      font.family = data[i].family;
      font.files = data[i].files;
      font.subsets = data[i].subsets;
      font.variants = data[i].variants;
      fonts[i] = font; // index refers to font object
      fontsFamily[i] = font.family;
    };
  };

  refresh();

  return {
    fonts: fonts
  };
}]);


