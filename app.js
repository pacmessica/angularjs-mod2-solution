(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buy = function(index) {
    ShoppingListCheckOffService.buy(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = ["cookies", "milk", "eggs", "pasta"];

  var boughtItems = [];

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.buy = function(index) {
    var item = toBuyItems[index];
    boughtItems.push(item);
    toBuyItems.splice(index, 1);
  }
}


})();
