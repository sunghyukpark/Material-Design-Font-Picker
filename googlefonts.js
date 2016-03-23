angular
    .module('googlefont', [])
    .factory('fontGetter', ['$http', function($http){
      var GOOGLE_FONT_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkIL39uNV_p5fgAhpc-BUpbqL6bC0pl2E';
      var fonts = [];
      var refresh = function(){
        var url = GOOGLE_FONT_URL;
        return $http({
          method: 'GET',
          url: GOOGLE_FONT_URL
        }).then(function successCallback(response){
          console.log('Response from google font request')
          saveFonts(response.data.items);
          console.log(fonts);

        }, function errorCallback(response){
          console.log('Google Font Request Failed')
        });
      }

      // given array of font objects,
      // save font data in certain formaat
      var saveFonts = function saveFonts(data){
        for (var i=0; i<data.length; i++){
          var font = data[i];
          font.category = data[i].category;
          font.family = data[i].family;
          font.files = data[i].files;
          font.subsets = data[i].subsets;
          font.variants = data[i].variants;
          fonts[i] = font; // font category refers to font object
        }
      }

      refresh();

      return {
        fonts: fonts
      };
    }]);

