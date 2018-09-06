const item = require("./item");

const operateDB = require("./operateDB");

var itemName = 0, itemUnit = 1, itemPrice = 2;

function printSelected(itemCountMap) {
    var result = "";

    for (var i = 0; i < itemCountMap.length; i++) {
        var itemMessage = operateDB.selectItem(itemCountMap[i].barcode);

        if (itemMessage) {

            var FreeType = operateDB.selectItemFreeType(itemMessage[itemName]);

            var money = item.caculateItemPrice(itemCountMap[i].count, itemMessage[itemPrice], FreeType);

            result +=i;
            result += "名称：%s，数量：%s%s，单价：%s(元)，小计：%s(元)\n"
                .format(itemMessage[itemName], itemCountMap[i].count, itemMessage[itemUnit], itemMessage[itemPrice], money);
        }
    }
    return result;
}


function printInventory(inputs) {
    console.log("***<没钱赚商店>购物清单***\n");

    var itemCountMap = countItemSelected(inputs);

    printSelected(itemCountMap);

    console.log("----------------------\n");

    console.log("----------------------\n");

    console.log("**********************");
};

module.exports = {
    printInventory: printInventory,
    printSelected: printSelected
};
