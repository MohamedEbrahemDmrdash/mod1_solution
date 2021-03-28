(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller("LunchCheckController" , LunchCheck);
  LunchCheck.$inject = ['$scope'];
  function LunchCheck($scope) {
      var separator = ',';
      var Total = 0 ;
      $scope.txtLunchMenu = '';
      $scope.outputMsg = '';
      $scope.btnCheck = function () {
        $scope.outputMsg = 'Please enter data first';
        var str = $scope.txtLunchMenu;
        if( str != ''){
          var Itms = str.split(separator);
          for(var x in Itms ){
            if( Itms[x].trim() != '' ){
              Total++;
            }
          }
        if(Total > 3)
            $scope.outputMsg = 'Too much!';
        else $scope.outputMsg = 'Enjoy!';
        }
        Total = 0 ;
      };
  };
})();
