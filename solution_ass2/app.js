(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('actrl', actrl)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


// controlller to show to buy item list
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList=this;

  showList.listToBuy = ShoppingListCheckOffService.gettoBuyItems();
  showList.buyItem   = function (index){
      ShoppingListCheckOffService.buyItem(index);
    }
}

// controlller to show the already bought item list
actrl.$inject = ['ShoppingListCheckOffService'];
function actrl(ShoppingListCheckOffService) {
  var showBoughtList=this;
  showBoughtList.listBought = ShoppingListCheckOffService.getboughtItems();
}

// SERVICE FUNCTION
function ShoppingListCheckOffService() {
  var service=this;

  // List of shopping items
  var toBuyItems = [{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 10 },{ name: "butter", quantity: 3 },{ name: "rice", quantity: 1 },{ name: "pasta", quantity: 2 }];
  var boughtItems =[];


  service.addItem = function (item) {
    boughtItems.push(item);

  };

  service.removeItem = function (itemIdex) {
    return toBuyItems.splice(itemIdex, 1);

  };

  service.gettoBuyItems = function () {
    return toBuyItems;
  };

  service.getboughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemindex){
    var item=service.removeItem(itemindex);
    service.addItem(item[0]);

  };
}


})();
