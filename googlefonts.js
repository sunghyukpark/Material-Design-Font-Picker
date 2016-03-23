angular
    .module('googlefont', [])
    .factory('fontGetter', ['$http', function($http){
      var GOOGLE_FONT_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkIL39uNV_p5fgAhpc-BUpbqL6bC0pl2E';
      var fonts = {};
      var refresh = function(){
        var url = GOOGLE_FONT_URL;
        return $http({
          method: 'GET',
          url: GOOGLE_FONT_URL
        }).then(function successCallback(response){
          console.log('Response from google font request')
          console.log(response);
        }, function errorCallback(response){
          console.log(response);
        });
      }

      refresh();

      return {
        fonts: fonts
      };
    }]);

