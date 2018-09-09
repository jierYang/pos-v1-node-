const item = require("./item");

const operateDB = require("./operateDB");

var FreeTypeOneFree = "BUY_TWO_GET_ONE_FREE";

var totalMoney;

var totalFree;

var itemFree = {};

function getItemSelected(itemCount) {

    var result = "";

    totalMoney = 0;

    totalFree = 0;

    for (var currentItem in itemCount) {

        var itemMessage = operateDB.selectItem(currentItem);

        if (itemMessage) {

            var FreeType = operateDB.selectItemFreeType(currentItem);

            var money = item.calculateItemPrice(itemCount[currentItem], itemMessage.price, FreeType);

            result += `名称：${itemMessage.name}，数量：${itemCount[currentItem]}${itemMessage.unit}，单价：${itemMessage.price.toFixed(2)}(元)，小计：${money.toFixed(2)}(元)\n`;

            saveOrder(money, itemMessage, FreeType);
        }
    }
    return result;
}

function saveOrder(money,itemMessage,FreeType){
    totalMoney += money;

    if(FreeType === FreeTypeOneFree){
        totalFree += itemMessage.price;

        itemFree[itemMessage.name] = 1 + itemMessage.unit;
    }
}

function getItemFree(){
    let result="";

    for(let it in itemFree){
        result+=`名称：${it}，数量：${itemFree[it]}\n`
    }

    return result;
}

function printInventory(inputs) {
    let output = "***<没钱赚商店>购物清单***\n";

    var itemCount = item.countItemSelected(inputs);

    output += getItemSelected(itemCount);

    output += "----------------------\n";

    output +=`挥泪赠送商品：\n`;

    output += getItemFree();

    output += "----------------------\n";

    output += `总计：${totalMoney.toFixed(2)}(元)\n`;

    output += `节省：${totalFree.toFixed(2)}(元)\n`;

    output += "**********************";

    console.log(output);
};

module.exports = {
    printInventory: printInventory,
    getItemSelected: getItemSelected
};
