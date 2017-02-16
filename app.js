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
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var items = [
    {name: "cookies", bought: false},
    {name: "milk", bought: false},
    {name: "eggs", bought: false},
    {name: "pasta", bought: false}
  ];

  service.getBoughtItems = function() {
    return items.filter(item => item.bought)
  }

  service.getToBuyItems = function() {
    return items.filter(item => !item.bought)
  }
}


})();
