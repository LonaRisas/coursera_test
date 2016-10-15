(function () {
'use strict';

angular.module('CheckFoodApp', [])

.controller('FoodControler',  FoodControler);

FoodControler.$inject = ['$scope'];
function FoodControler($scope) {
  $scope.name = "";
  $scope.myStyle="";
  $scope.message = "";

  $scope.CheckFood = function () {
    var ElementCount = countElemCommaSep($scope.name);
    $scope.message = chooseMessage(ElementCount);
  };


  function countElemCommaSep(text) {
    if (text == "" || text ==" "){return 0}


    if (text.charAt((text.length-1))== ","){
      return (text.split(',').length)-1
    }else{
      return text.split(',').length
    }

  }

  function chooseMessage(numElem){
    var lim=3
    var stringGood="Enjoy!"
    var stringBad="Too much!"
    var emptyString="Please enter data first"

    if(numElem == 0){
      $scope.myStyle={color:'red',border:'solid 1px red','border-radius':'10px','margin-top':'20px', padding: '10px'};
      return emptyString
    }else if (numElem <= lim){
      $scope.myStyle={color:'green',border:'solid 1px green','border-radius':'10px','margin-top':'20px', padding: '10px'};
      return stringGood
    }
    else{
      $scope.myStyle={color:'green',border:'solid 1px green','border-radius':'10px','margin-top':'20px', padding: '10px'};
      return stringBad
    }
  }


}

})();
