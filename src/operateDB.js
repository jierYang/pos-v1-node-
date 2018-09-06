const datbase = require("./datbase");

function selectItem(itemName) {
    var result = new Array();

    var itmes = datbase.loadAllItems();

    for(var item in itmes){

        if(items[item].barcode === itemName){
           result = itmes[item];
        }
    }

    return result;
}

function selectItemFreeType(itemName) {

    var result = new Array();

    var itmes = datbase.loadPromotions();

    for(var item in itmes){

        if(items[item].barcode === itemName){
            result.push(items[item].type);
        }
    }

    return result;
}

module.exports = {
    selectItem: selectItem,
    selectItemFreeType : selectItemFreeType
};